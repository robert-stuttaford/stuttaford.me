(ns stuttaford.radiant.components
  (:require [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [om-bootstrap.table :refer [table]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]))

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
