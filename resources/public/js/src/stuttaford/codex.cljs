(ns stuttaford.codex
  (:require [cljs.core.async :refer [chan put! <!]]
            [cljs.reader :as edn]
            [goog.dom]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common])
  (:require-macros [cljs.core.async.macros :as csp :refer [go]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App rendering

(def name-sort (partial sort-by :name))

(defn regex [search-term] (js/RegExp. search-term "i"))

(defn search-items [keys search-term items]
  (if search-term
    (let [has-value? (partial re-find (regex search-term))]
      (filter (fn [item]
                (->> keys
                     (select-keys item)
                     vals
                     (filter has-value?)
                     seq
                     boolean))
              items))
    items))

(defcomponentk tag-item [[:data name] owner]
  (render-state [_ {:keys [search-term]}]
    (let [class (if (and (seq search-term) (re-find (regex search-term) name)) "tag active" "tag")]
      (html
       [:a {:onClick #(put! (om/get-shared owner :search-chan) name)
            :class   class}
        name]))))

(defcomponentk link-item [[:data name uri {description nil} {image nil} {tags []}] owner]
  (render-state [_ {:keys [search-term]}]
    (html
     [:li.link
      [:a {:href uri} name]
      (om/build-all tag-item (name-sort tags)
                    {:state {:search-term search-term}
                     :key   :name})])))

(defcomponentk category-item [[:data name links :as data] owner]
  (render-state [_ {:keys [search-term]}]
    (when-let [links (->> links
                          (search-items [:name :uri :category :tags-string] search-term)
                          name-sort
                          seq)]
      (html
       [:div
        [:h3 name]
        [:ul
         (om/build-all link-item links
                       {:state {:search-term search-term}
                        :key   :name})]]))))

(defcomponentk app-view [[:data categories] owner]
  (init-state [_] {:search-chan (chan)})
  (will-mount [_]
    (let [search-chan (om/get-state owner :search-chan)]
      (go (while true
            (when-let [search-term (<! search-chan)]
              (om/set-state! owner :search-term search-term))))))
  (render-state [_ {:keys [search-chan search-term]}]
    (html
     [:div
      [:input#search {:type        "text"
                      :placeholder "Search for link"
                      :autoFocus   "autofocus"
                      :value       search-term
                      :onChange    #(put! search-chan (.. % -target -value))}]

      (om/build-all category-item (name-sort categories)
                    {:state {:search-term search-term}
                     :key   :name})])))

(defn ^:export init
  [app-id state-id debug?]
  (common/start app-id state-id app-view {} debug?))

