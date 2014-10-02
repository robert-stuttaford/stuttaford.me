(ns stuttaford.radiant.model
  (:require [cljs.reader :as edn]
            [datascript :as d]
            [datascript.core :as dc]
            [plumbing.core :refer-macros [defnk]]
            [om.core :as om :include-macros true]))

(defn data-source-label [data-sources id]
  (str "Data source"
       (when id
         (str ": " (-> data-sources id :label)))))

(defn data-source [data-sources id]
  (some-> data-sources id :datoms))

(extend-type dc/DB
  om/IToCursor
  (-to-cursor
    ([this _] this)
    ([this _ _] this)))

(defn make-db-from-datoms [datoms]
  (let [conn (d/create-conn {:link/category {:db/valueType :db.type/ref}
                             :link/tags     {:db/cardinality :db.cardinality/many
                                             :db/valueType   :db.type/ref}})]
    (d/transact! conn (map (fn [[e a v]] [:db/add e a v]) datoms))
    @conn))

(defn schema-for-attr [schema attr]
  (into (or (attr schema) {}) {:db/ident attr}))

(defn schema-for-db [db]
  (->> (d/datoms db :aevt)
       (map :a)
       distinct
       sort
       (map (partial schema-for-attr (:schema db)))))

(def indexes [:eavt :aevt :avet])

(defn ensure-components [components]
  (merge {:e nil :a nil :v nil} components))

(defnk e-fn [e]
  (when (seq e)
    (long e)))

(defnk a-fn [a]
  (when (seq a)
    (try (edn/read-string a)
         (catch :default e
           nil))))

(defnk v-fn [v]
  (cond (number? v) v
        (seq v)     (try (let [v-as-long (long v)]
                           (if (.isNaN v-as-long)
                             v
                             v-as-long))
                         (catch :default e v))))
