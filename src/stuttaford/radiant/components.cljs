(ns stuttaford.radiant.components
  (:require [cljs.core.async :refer [put!]]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
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
;; Top nav

(defcomponentk top-nav [[:data view data-sources {current-data-source nil}] owner
                        [:opts nav-items]]
  (render-state [_ state]
    (let [c (control-chan owner)]
      (b/toolbar {}
                 (b/button-group {}
                                 (for [[id [label]] nav-items]
                                   (b/button (cond-> {:on-click #(put! c [:set-view id])}
                                                     (= view id) (assoc :class "active"))
                                             label)))
                 (data-source-dropdown c data-sources current-data-source)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Result table

(def PAGE-SIZE 50)

(defn paginate [current-page rows]
  (->> rows
       (drop (* PAGE-SIZE current-page))
       (take PAGE-SIZE)))

(defn sort-rows [sort-col rows]
  (sort-by #(nth % sort-col) rows))

(defcomponentk result-table [[:data cols rows] owner [:opts {allow-sorting? false}]]
  (render-state [_ {:keys [sort-col current-page]
                    :or   {sort-col 0 current-page 0}}]
    (html
     [:div
      [:div {:class "result-pagination"}
       [:span.item-count (count rows) " items"]
       (b/button-group
        {}
        (for [page (range (count (partition-all PAGE-SIZE rows)))]
          (b/button (cond-> {:on-click #(om/set-state! owner :current-page page)}
                            (= page current-page) (assoc :class "active"))
                    (inc page))))]
      (table {:striped? true :bordered? true :condensed? true :hover? true}
             (html
              [:thead
               [:tr
                (map-indexed (fn [i v]
                               [:th (when allow-sorting?
                                      {:on-click #(om/set-state! owner :sort-col i)})
                                v])
                             cols)]]
              [:tbody
               (for [row (->> rows (paginate current-page) (sort-rows sort-col))]
                 [:tr
                  (for [value row]
                    [:td value])])]))])))
