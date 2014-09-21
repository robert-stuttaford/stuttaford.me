(ns stuttaford.web.templates
  (:use [plumbing.core])
  (:require [clj-time.format :as time-format]
            [stuttaford.web.posts :as posts]))

(defnk page-template [[:page title content]]
  [:div.page
   [:h1.page-title title]
   content])

(def format-date (partial time-format/unparse (time-format/formatter "dd MMM yyyy")))

(defnk post-template [recent-posts [:author twitter]
                      [:page title content date {permalink nil}]]
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

(defnk home-template [latest-posts :as config]
  [:div.posts
   (for [post (posts/latest latest-posts)]
     (post-template (update-in config [:page] merge post)))])

(def templates
  {:home home-template
   :page page-template
   :post post-template})