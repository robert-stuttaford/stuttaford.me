(ns stuttaford.web.content
  (:require [clj-time.format :as time-format]
            [hiccup.page :as page]
            [stuttaford.db :as db]
            [stuttaford.web.posts :as posts]))

(defn client-app [name dev? app-state]
  (list
   [:div {:data-component name}
    [:script {:type "application/edn"}
     (binding [*print-length* nil]
       (pr-str app-state))]]
   (page/include-js (str "/js/stuttaford" (when-not dev? ".min") ".js"))))

(defn codex [{:keys [db dev?]}]
  {:title  "Clojure Codex"
   :layout "page"
   :content
   (list
    [:p.add-link-message
     "Have a link you'd like to add? Tweet the link to me @RobStuttaford on Twitter with "
     [:span.hashtag "#codex"] " or simply click here: " [:br]
     [:a.twitter-hashtag-button
      {:href         "https://twitter.com/intent/tweet?button_hashtag=codex&text=%40RobStuttaford%20Link%3A%20your-link-here"
       :data-related "RobStuttaford" :data-dnt "true"}]
     [:script "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');"]]
    (client-app "codex" dev?
                       {:db (db/datascript-db db
                                              #{:link/tags
                                                :link/title
                                                :link/uri
                                                :tag/name})}))})

(def format-date (partial time-format/unparse (time-format/formatter "dd MMM yyyy")))

(defmulti template (comp keyword :layout :page))

(defmethod template :page [{{:keys [title content]} :page}]
  [:div.page
   [:h1.page-title title]
   content])

(defmethod template :post [{{:keys [title content date permalink]} :page
                            :keys [recent-posts]}]
  (list
   [:div.post
    [:h1.post-title
     (if permalink
       [:a {:href permalink} title]
       title)]
    [:span.post-date (format-date date)]
    content]
   (when-let [related (seq (posts/recent recent-posts date false))]
     [:div.related
      [:h2 "Related Posts"]
      [:ul.related-posts
       (for [{:keys [permalink title date]} related]
         [:li
          [:h3
           [:a {:href permalink} title " " [:small (format-date date)]]]])]])))

(defmethod template :blog [{:keys [latest-posts] :as config}]
  [:div.posts
   (if-some [latest (seq (posts/latest latest-posts))]
     (for [post latest]
       (template (update config :page merge post)))
     (list
      [:h1.post-title "Blog"]
      [:p "A new year, a new approach - coming soon!"]))
   [:div.related
    [:a {:href "/blog/archived/"}
     "Archived posts"]]])

(defmethod template :archived-blog [_]
  [:div.posts
   [:h2 "Archived Posts"]
   [:ul.related-posts
    (for [{:keys [permalink title date]} (posts/archived)]
      [:li
       [:h3
        [:a {:href permalink} title " " [:small (format-date date)]]]])]])

(defn html-layout [{{:keys [page-name title description]} :page
                    {:keys [site-title site-description]} :meta
                    {:keys [name]} :author
                    :keys [base-url nav google-analytics-id domain year]
                    :as config}]
  (page/html5
   [:head
    [:link {:rel "profile" :href "http://gmpg.org/xfn/11"}]
    [:meta {:content "IE=edge" :http-equiv "X-UA-Compatible"}]
    [:meta {:content "text/html; charset=utf-8" :http-equiv "content-type"}]
    [:meta {:content "width=device-width initial-scale=1.0 maximum-scale=1"
            :name    "viewport"}]
    [:title
     (when-let [page-title title]
       (str page-title " &middot; "))
     site-title ", " site-description]
    (when-let [description description]
      [:meta {:name "description" :content description}])
    (page/include-css "https://fonts.googleapis.com/css?family=Volkhov"
                      (str base-url "css/poole.css")
                      (str base-url "css/stuttaford.css"))
    [:link {:href (str base-url "apple-touch-icon-precomposed.png") :sizes "152x152"
            :rel  "apple-touch-icon-precomposed"}]
    [:link {:href (str base-url "favicon.ico") :rel "shortcut icon"}]
    [:link {:href (str base-url "atom.xml") :rel   "alternate"
            :type "application/rss+xml"     :title "RSS"}]]
   [:body (when (some? page-name) {:class page-name})
    [:div.container.content
     [:div.masthead
      [:h3.masthead-title
       [:a {:title "Home" :href base-url} site-title] " "
       [:small site-description]]
      (->> (for [{:keys [title path]} nav]
             [:small [:a {:href path} title]])
           (interpose " &middot; "))]
     (template config)
     [:div.footer
      [:p "&copy; " name " " year ". All rights reserved. Some lefts, too."]]
     [:script {:type "text/javascript"}
      "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','google_analytics');
    google_analytics('create', '" google-analytics-id "', '" domain "');
    google_analytics('send', 'pageview');"]]]))
