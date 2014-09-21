(ns stuttaford.codex
  (:require [cljs.core.async :refer [chan put! <!]]
            [cljs.reader :as edn]
            [goog.dom]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]])
  (:require-macros [cljs.core.async.macros :as csp :refer [go]]))

(defn config
  ([owner]
     (or (om/get-shared owner :config) {}))
  ([owner key]
     (get (config owner) key)))

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
  (will-mount [_]
    (let [search-chan (om/get-shared owner :search-chan)]
      (go (while true
            (when-let [search-term (<! search-chan)]
              (om/set-state! owner :search-term search-term))))))
  (render-state [_ {:keys [search-term]}]
    (html
     [:div
      [:input#search {:type        "text"
                      :placeholder "Search for link"
                      :autoFocus   "autofocus"
                      :value       search-term
                      :onChange    #(put! (om/get-shared owner :search-chan) (.. % -target -value))}]

      (om/build-all category-item (name-sort categories)
                    {:state {:search-term search-term}
                     :key   :name})])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App startup

(defn log-tx [tx-data root-cursor]
  (let [{:keys [path old-value new-value]} tx-data
        c js/console]
    (doto c (.group (str "TRANSACTION " path)) (.groupCollapsed "OLD"))
    (prn (pr-str old-value))
    (doto c (.groupEnd) (.group "NEW"))
    (prn (pr-str new-value))
    (doto c (.groupEnd) (.groupEnd))))

(defn render
  [root state app debug?]
  (when debug?
    (enable-console-print!))
  (om/root app
           state
           (cond-> {:target root
                    :shared {:search-chan (chan)
                             :config (assoc (:config @state) :debug? debug?)}}
                   debug? (assoc :tx-listen log-tx))))

(defn start
  ([app-id state-id app]
     (start app-id state-id app false))
  ([app-id state-id app debug?]
     (render
       (goog.dom/getElement app-id)
       (->> state-id
            goog.dom/getElement
            .-textContent
            edn/read-string
            atom)
       app
       debug?)))

(defn ^:export init
  [app-id state-id debug?]
  (start app-id state-id app-view debug?))

