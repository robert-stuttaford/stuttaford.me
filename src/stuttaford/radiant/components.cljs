(ns stuttaford.radiant.components
  (:require [cljs.core.async :refer [put!]]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [om-bootstrap.panel :as p]
            [om-bootstrap.random :refer [label]]
            [om-bootstrap.table :refer [table]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common :refer [config control-chan]]
            [stuttaford.radiant.model :as model]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Data source dropdown

(defn data-source-item [c id label]
  (b/menu-item {:key id
                :on-select #(put! c [:set-data-source id])}
               label))

(defn data-source-dropdown [c data-sources current-data-source]
  (apply b/dropdown
         {:title (model/data-source-label data-sources current-data-source)}
         (concat (for [{:keys [id label]} (vals data-sources)]
                   (data-source-item c id label))
                 #_(list
                  (b/menu-item {:divider? true})
                  (data-source-item c :add "Add your own...")))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Schema

(defcomponentk schema [[:data {current-db nil}] owner]
  (render-state [_ state]
    (p/panel {:header "Schema"}
             (if current-db
               (html
                (for [schema (model/schema-for-db current-db)]
                  [:span.schema
                   [:span.ident
                    (pr-str (:db/ident schema))]
                   (when (= :db.type/ref (:db/valueType schema))
                     (label {:bs-style "primary"} "REF"))
                   (when (= :db.cardinality/many (:db/cardinality schema))
                     (label {:bs-style "primary"} "MANY"))]))
               "No database."))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Top nav

(defcomponentk top-nav [[:data view data-sources {current-data-source nil} schema-visible?] owner
                        [:opts nav-items]]
  (render-state [_ state]
    (let [c (control-chan owner)]
      (b/toolbar {}
                 (html [:div.radiant "RADIANT"])
                 (b/button-group {}
                                 (for [[id [label]] nav-items]
                                   (b/button (cond-> {:on-click #(put! c [:set-view id])}
                                                     (= view id) (assoc :class "active"))
                                             label)))
                 (data-source-dropdown c data-sources current-data-source)
                 (b/button (cond-> {:on-click #(put! c [:set-schema-visible (not schema-visible?)])}
                                   schema-visible? (assoc :class "active"))
                           "Show schema")))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Result table

(def PAGE-SIZE 50)

(defn paginate [current-page rows]
  (->> rows
       (drop (* PAGE-SIZE current-page))
       (take PAGE-SIZE)))

(defn paginate-label [current-page rows]
  (let [start (* PAGE-SIZE current-page)]
    (str (inc start) " - " (min (+ start PAGE-SIZE) (count rows)))))

(defn sort-rows [sort-col rows]
  (sort-by #(nth % sort-col) rows))

(defcomponentk result-table [[:data cols rows] owner [:opts {allow-sorting? false}]]
  (render-state [_ {:keys [sort-col current-page]
                    :or   {sort-col 0 current-page 0}}]
    (let [page-count (count (partition-all PAGE-SIZE rows))
          paginate?  (> page-count 1)]
      (html
       [:div
        [:div {:class "result-pagination"}
         [:span.item-count
          (count rows) " items"
          (when paginate?
            (str " · " (paginate-label current-page rows)))]
         (when paginate?
           (b/button-group
            {}
            (for [page (range page-count)]
              (b/button (cond-> {:on-click #(om/set-state! owner :current-page page)}
                                (= page current-page) (assoc :class "active"))
                        (inc page)))))]
        (table {:striped? true :bordered? true :condensed? true :hover? true}
               (html
                [:thead
                 [:tr
                  (map-indexed (fn [i v]
                                 [:th (when allow-sorting?
                                        {:on-click #(om/set-state! owner :sort-col i)})
                                  v
                                  (when (and allow-sorting? (= i sort-col))
                                    (list " " [:span.glyphicon.glyphicon-chevron-down]))])
                               cols)]]
                [:tbody
                 (for [row (->> rows (paginate current-page) (sort-rows sort-col))]
                   [:tr
                    (for [value row]
                      [:td value])])]))]))))
