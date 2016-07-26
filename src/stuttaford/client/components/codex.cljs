(ns stuttaford.client.components.codex
  (:require [cljs.core.async :refer [chan put!]]
            [clojure.string :as string]
            [datascript.core :as d]
            [rum.core :as rum]
            [stuttaford.client.common :as common]))

(defonce type-ahead-chan (chan))

(defonce debounced-type-ahead-chan-loop
  (common/debounced-action-chan type-ahead-chan 100 ::search))

(defmethod common/perform-action ::search [current-state [_ query]]
  (assoc current-state :query
         (when (and query (not (string/blank? query)))
           query)))

(def regex-for-query #(js/RegExp. % "i"))

(def search-rules
  '[[(search ?link ?pattern)
     [?link :link/title ?value]
     [(re-find ?pattern ?value)]]

    [(search ?link ?pattern)
     [?link :link/uri ?value]
     [(re-find ?pattern ?value)]]

    [(search ?link ?pattern)
     [?tag :tag/name ?value]
     [(re-find ?pattern ?value)]
     [?link :link/tags ?tag]]

    [(search ?link ?pattern)
     [?category :category/name ?value]
     [(re-find ?pattern ?value)]
     [?link :link/category ?category]]])

(def link-pull
  [:link/description
   :link/image
   :link/slug
   :link/title
   :link/uri
   {:link/category [:category/name]}
   {:link/tags [:tag/name]}])

(defn search-links [db query]
  (d/q '[:find  [?link ...]
         :in    $ % ?pattern
         :where (search ?link ?pattern)]
       db search-rules (regex-for-query query)))

(defn all-links [db]
  (d/q '[:find [?link ...] :in $ :where [?link :link/uri]] db))

(rum/defc codex < rum/reactive [state]
  (let [{:keys [db query admin?]} (rum/react state)]
    [:div

     (when admin?
       [:a {:href  "/codex/new"
            :style {:color     "#444"
                    :font-size "0.8em"}} "[Add link]"])

     [:input#search
      {:type        "text"
       :placeholder "Search for link"
       :auto-focus  "autofocus"
       :value       query
       :on-change   #(put! type-ahead-chan (.. % -currentTarget -value))}]

     (for [[category links] (->> (if query
                                   (search-links db query)
                                   (all-links db))
                                 (map (partial d/pull db link-pull))
                                 (group-by (comp :category/name :link/category))
                                 (sort-by first))]
       [:div
        [:h3 category]
        [:ul
         (for [{:keys [link/uri link/title link/tags link/slug]} (sort-by :link/title links)]
           [:li.link
            [:a {:href uri} title]
            (when admin?
              [:a {:href  (str "/codex/edit/" slug)
                   :style {:color     "#444"
                           :font-size "0.8em"}} "[edit]"])
            (for [{:keys [tag/name]} (sort-by :tag/name tags)]
              [:a.tag
               (cond-> {:on-click #(put! common/action-chan [::search name])}
                 (and query (re-find (regex-for-query query) name))
                 (assoc :class "active"))
               name])])]])]))
