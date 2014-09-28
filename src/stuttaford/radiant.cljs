(ns stuttaford.radiant
  (:require [clojure.string :as string]
            [cljs.core.async :refer [<! chan put!]]
            [cljs.reader :as edn]
            [datascript :as d]
            [datascript.core :as dc]
            [datascript.query :as dq]
            [om.core :as om :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [om-bootstrap.input :as i]
            [om-bootstrap.panel :as p]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common :refer [config control-chan]]
            [stuttaford.radiant.components :refer [->result-table]])
  (:require-macros [cljs.core.async.macros :as csp :refer [go]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Model

(defn data-source-item [c id label]
  (b/menu-item {:key id
                :on-select #(put! c [:set-data-source id])}
               label))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Actions

(defmulti perform-action (fn [cursor op value debug?]
                           (when debug?
                             (prn "ACTION:" op value))
                           op))

(defmethod perform-action :default [cursor op value]
  (throw (str "Missing perform-method op: " op)))

(defmethod perform-action :set-view [cursor op value]
  (om/update! cursor :view value))

(defmethod perform-action :set-data-source [cursor op value]
  (om/update! cursor :current-data-source value)
  (let [{:keys [data-sources current-data-source]} @cursor]
    (when-let [datoms (data-source data-sources current-data-source)]
      (om/update! cursor :current-db (make-db-from-datoms datoms)))))

(defmethod perform-action :set-datoms-index [cursor op value]
  (om/update! cursor :current-datoms-index value))

(defmethod perform-action :set-datoms-component [cursor op [component value]]
  (om/update! cursor [:current-datoms-components component] value))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App rendering

(defcomponentk datalog [[:data data-sources {current-data-source nil} {current-db nil}] owner]
  (render-state [_ {:keys [sort] :or {sort 0}}]
    (let [query '[:find ?tag ?title :in $ :where
                  [?link-id :link/title ?title]
                  [?link-id :link/tags ?tag-id]
                  [?tag-id :tag/name ?tag]]
          {:keys [find in where]} (dq/parse-query query)]
      (html
       [:div
        [:pre
         "[:find "    (apply str (interpose " "   find)) "\n"
         " :in "      (apply str (interpose " "   in)) "\n"
         " :where\n " (apply str (interpose "\n " where)) "]"]
        [:hr]
        (->result-table {:cols (map pr-str find)
                         :rows (d/q query current-db)}
                        {:opts {:allow-sorting? true}})]))))

(i/input {:label "Input wrapper"
          :help "Use this when you need something other than the
          available input types."})

(defcomponentk datoms [[:data data-sources {current-data-source nil} {current-db nil}
                        current-datoms-index
                        {current-datoms-components {:e nil :a nil :v nil}}] owner]
  (render-state [_ state]
    (let [c (control-chan owner)]
      (html
       [:div
        (g/row
         {}
         (g/col {:xs 3}
                (b/button-group {}
                                (for [index indexes]
                                  (b/button (cond-> {:on-click #(put! c [:set-datoms-index index])}
                                                    (= index current-datoms-index) (assoc :class "active"))
                                            (-> index
                                                name
                                                string/upper-case)))))
         (for [component (case current-datoms-index
                           :eavt [:e :a :v]
                           :aevt [:a :e :v]
                           :avet [:a :v :e])]
           (g/col {:xs 3}
                  (i/input {:type        "text"
                            :class       "form-control"
                            :placeholder (-> component name string/upper-case)
                            :value       (component current-datoms-components)
                            :on-change   #(put! c [:set-datoms-component [component (.. % -target -value)]])}))))
        [:hr]
        (when current-db
          (let [e-fn #(let [e (:e %)]
                        (when (seq e)
                          (long e)))
                a-fn #(let [a (:a %)]
                        (when (seq a)
                          (try (edn/read-string a)
                               (catch :default e
                                 nil))))
                v-fn #(let [v (:v %)]
                        (when (seq v)
                          (try (long v)
                               (catch :default e
                                 v))))
                components-in-order-fn (case current-datoms-index
                                         :eavt (juxt e-fn a-fn v-fn)
                                         :aevt (juxt a-fn e-fn v-fn)
                                         :avet (juxt a-fn v-fn e-fn))
                components (->> current-datoms-components
                                components-in-order-fn
                                (take-while (complement nil?)))
                datoms (apply d/datoms current-db current-datoms-index components)]
            (list
             [:pre current-datoms-components "\n" (pr-str components)]
             (->result-table {:cols (case current-datoms-index
                                      :eavt ["E" "A" "V"]
                                      :aevt ["A" "E" "V"]
                                      :avet ["A" "V" "E"])
                              :rows (map (fn [{:keys [e a v]}]
                                           (case current-datoms-index
                                             :eavt [e (str a) v]
                                             :aevt [(str a) e v]
                                             :avet [(str a) v e]))
                                         datoms)}))))]))))

(defcomponentk transactions [data owner]
  (render-state [_ state]
    (html [:div "Transactions"])))

(def nav-items
  {:datalog      ["Datalog" datalog]
   :datoms       ["Datoms" datoms]
   :transactions ["Transactions" transactions]})

(defcomponentk nav [[:data view data-sources {current-data-source nil}] owner]
  (render-state [_ state]
    (let [c (control-chan owner)]
      (b/toolbar {}
                 (b/button-group {}
                                 (for [[id [label]] nav-items]
                                   (b/button (cond-> {:on-click #(put! c [:set-view id])}
                                                     (= view id) (assoc :class "active"))
                                             label)))
                 (apply b/dropdown
                        {:title (data-source-label data-sources current-data-source)}
                        (concat (for [{:keys [id label]} (vals data-sources)]
                                  (data-source-item c id label))
                                (list
                                 (b/menu-item {:divider? true})
                                 (data-source-item c :add "Add your own..."))))))))

(defcomponentk app-view [[:data view :as data] owner]
  (will-mount [_]
    (let [c (control-chan owner)]
      (go (while true
            (when-let [[op value] (<! c)]
              (perform-action data op value (config owner :debug?)))))
      (put! c [:set-data-source :links])))
  (render-state [_ state]
    (html
     (let [[label view-component] (view nav-items)]
       (p/panel {:header (->nav data)}
                (when view-component
                  (om/build view-component data)))))))

(defn ^:export init
  [app-id state-id debug?]
  (common/start
    app-id state-id app-view
    {:view                 :datoms
     :current-datoms-index :eavt
     :shared               {:control-chan (chan)}}
    debug?))
