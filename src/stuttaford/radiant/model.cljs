(ns stuttaford.radiant.model
  (:require [datascript :as d]
            [datascript.core :as dc]
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
  (d/db-with (d/empty-db {:link/category {:db/valueType :db.type/ref}
                          :link/tags     {:db/cardinality :db.cardinality/many
                                          :db/valueType   :db.type/ref}})
             (map (fn [[e a v]] [:db/add e a v]) datoms)))

(def indexes [:eavt :aevt :avet])
