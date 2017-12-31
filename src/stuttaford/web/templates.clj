(ns stuttaford.web.templates
  (:require [clj-time.format :as time-format]
            [stuttaford.web.posts :as posts]))

(defn page-template [{{:keys [title content]} :page}]
  [:div.page
   [:h1.page-title title]
   content])

(defn bare-template [{{:keys [content]} :page}]
  content)

(def format-date (partial time-format/unparse (time-format/formatter "dd MMM yyyy")))

(defn post-template [{{:keys [title content date permalink]} :page
                      {:keys [twitter]} :author
                      :keys [recent-posts]}]
  (list
   [:div.post
    [:h1.post-title
     (if permalink
       [:a {:href permalink} title]
       title)]
    [:span.post-date (format-date date)]
    content
    [:p.post-suffix
     "I hope you found this post useful. I don't have comments on here yet, "
     "but please feel free to reach out on " [:a {:href twitter} "Twitter"] "!"]]
   (when-let [related (seq (posts/recent recent-posts date))]
     [:div.related
      [:h2 "Related Posts"]
      [:ul.related-posts
       (for [{:keys [permalink title date]} related]
         [:li
          [:h3
           [:a {:href permalink} title " " [:small (format-date date)]]]])]])))

(defn blog-template [{:keys [latest-posts] :as config}]
  [:div.posts
   (if-some [latest (seq (posts/latest latest-posts))]
     (for [post latest]
       (post-template (update config :page merge post)))
     (list
      [:h1.post-title "Blog"]
      [:p "A new year, a new approach - coming soon!"]))
   [:div.related
    [:a {:href "/blog/archived/"}
     "Archived posts"]]])

(defn archived-blog-template [_]
  [:div.posts
   [:h2 "Archived Posts"]
   [:ul.related-posts
    (for [{:keys [permalink title date]} (posts/archived)]
      [:li
       [:h3
        [:a {:href permalink} title " " [:small (format-date date)]]]])]])

(def templates
  {:blog          blog-template
   :archived-blog archived-blog-template
   :page          page-template
   :bare          bare-template
   :post          post-template})
