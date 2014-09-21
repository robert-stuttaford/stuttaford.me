(ns stuttaford.web.layout.html
  (:use [plumbing.core])
  (:require [hiccup.page :as page]
            [stuttaford.web.templates :refer [templates]]))

(defnk header [base-url [:meta title description] page]
  [:head
   [:link {:rel "profile" :href "http://gmpg.org/xfn/11"}]
   [:meta {:content "IE=edge" :http-equiv "X-UA-Compatible"}]
   [:meta {:content "text/html; charset=utf-8" :http-equiv "content-type"}]
   [:meta {:content "width=device-width initial-scale=1.0 maximum-scale=1":name "viewport"}]
   [:title
    (when-let [page-title (:title page)]
      (str page-title " &middot; "))
    title ", " description]
   (when-let [description (:description page)]
     [:meta {:name "description" :content description}])
   (page/include-css
    (str base-url "public/css/poole.css")
    (str base-url "public/css/syntax.css")
    (str base-url "public/css/stuttaford.css"))
   (when-let [css (seq (:css page))]
     (->> css
          (map (partial str base-url))
          (apply page/include-css)))
   [:link {:href (str base-url "public/apple-touch-icon-precomposed.png") :sizes "152x152"
           :rel "apple-touch-icon-precomposed"}]
   [:link {:href (str base-url "public/favicon.ico") :rel "shortcut icon"}]
   [:link {:href (str base-url "atom.xml") :rel "alternate"
           :type "application/rss+xml" :title "RSS"}]])

(defnk nav-item [title path]
  [:small [:a {:href path} title]])

(defnk masthead [base-url [:meta title description] [:author twitter github] nav]
  [:div.masthead
   [:h3.masthead-title
    [:a {:title "Home" :href base-url} title] " "
    [:small description]]
   (map nav-item nav)
   " &middot; "
   [:small
    "I'm on " [:a {:href twitter} "Twitter"]
    " and " [:a {:href github} "GitHub"] "."]])

(defnk foot [google-analytics-id domain year]
  [:div.footer
   [:p "&copy; " year ". All rights reserved."]
   [:script {:type "text/javascript"}
    "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', '" google-analytics-id "', '" domain "');
    ga('send', 'pageview');"]])

(defnk html-layout [base-url [:page layout content] :as config]
  (page/html5
   (header config)
   [:body
    [:div.container.content
     (masthead config)
     (when-let [page-layout (-> layout keyword templates)]
       (page-layout config))
     (foot config)]]))