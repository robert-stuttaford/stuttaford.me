(ns stuttaford.radiant
  (:require [clojure.string :as string]
            [cljs.core.async :refer [<! chan put!]]
            [datascript :as d]
            [datascript.query :as dq]
            [om.core :as om :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
            [om-bootstrap.table :refer [table]]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common :refer [config control-chan]])
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

(defn make-db-from-datoms [datoms]
  (d/db-with (d/empty-db) (map (fn [[e a v]] [:db/add e a v]) datoms)))

(def indexes [:eavt :aevt :avet])

(defn index-item [c id]
  (b/menu-item {:key id
                :on-select #(put! c [:set-datoms-index id])}
               (-> id
                   name
                   string/upper-case)))

(defn index-label [id]
  (if id
    (-> id
        name
        string/upper-case)
    "Index"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Actions

(defmulti perform-action (fn [cursor op value debug?]
                           (when debug?
                             (prn "ACTION:" op value))
                           op))

(defmethod perform-action :default [cursor op value]
  (throw (str "Missing perform-method op: " op)))

(defmethod perform-action :nav [cursor op value]
  (om/update! cursor :view value))

(defmethod perform-action :set-data-source [cursor op value]
  (om/update! cursor :current-data-source value)
  (let [{:keys [data-sources current-data-source]} @cursor]
    (when-let [datoms (data-source data-sources current-data-source)]
      (om/update! cursor :current-db (make-db-from-datoms datoms)))))

(defmethod perform-action :set-datoms-index [cursor op value]
  (om/update! cursor :current-datoms-index value))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App rendering

(defcomponentk datalog [[:data data-sources {current-data-source nil} {current-db nil}] owner]
  (render-state [_ {:keys [sort] :or {sort 0}}]
    (let [query                   '[:find ?tag ?title :in $ :where
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
        (when current-db
          (let [results (d/q query current-db)]
            (list
             [:p (count results) " results."]
             (table {:striped? true :bordered? true :condensed? true :hover? true}
                    (html
                     [:thead
                      [:tr
                       (map-indexed (fn [i v]
                                      [:th {:on-click #(om/set-state! owner :sort i)}
                                       (pr-str v)])
                                    find)]]
                     [:tbody
                      (for [result (sort-by #(nth % sort) results)]
                        [:tr
                         (for [value result]
                           [:td value])])])))))]))))

(defcomponentk datoms [[:data data-sources {current-data-source nil} {current-db nil}
                        {current-datoms-index nil}] owner]
  (render-state [_ state]
    (let [c (control-chan owner)]
      (html
       [:div
        (b/toolbar {}
                   (apply b/dropdown
                          {:title (index-label current-datoms-index)}
                          (for [index indexes]
                            (index-item c index))))
        [:hr]
        (when (and current-db current-datoms-index)
          (let [datoms (d/datoms current-db current-datoms-index)]
            (table {:striped? true :bordered? true :condensed? true :hover? true}
                   (html
                    [:thead
                     (case current-datoms-index
                       :eavt [:tr [:th "E"] [:th "A"] [:th "V"]]
                       :aevt [:tr [:th "A"] [:th "E"] [:th "V"]]
                       :avet [:tr [:th "A"] [:th "V"] [:th "E"]])]
                    [:tbody
                     (for [{:keys [e a v]} datoms]
                       (case current-datoms-index
                         :eavt [:tr [:td e] [:td (str a)] [:td v]]
                         :aevt [:tr [:td (str a)] [:td e] [:td v]]
                         :avet [:tr [:td (str a)] [:td v] [:td e]]))]))))]))))

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
                                   (b/button (cond-> {:on-click #(put! c [:nav id])}
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
              (perform-action data op value (config owner :debug?)))))))
  (render-state [_ state]
    (html
     (let [[label view-component] (view nav-items)]
       (p/panel {:header (->nav data)}
                (when view-component
                  (om/build view-component data)))))))

(defn ^:export init
  [app-id state-id debug?]
  (common/start app-id state-id app-view {:view                :datoms
                                          :shared              {:control-chan (chan)}} debug?))
