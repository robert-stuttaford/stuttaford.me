(ns stuttaford.web.layout.html
  (:require [hiccup.page :as page]
            [stuttaford.web.templates :refer [templates]]))

(defn header [{:keys [base-url page]
               {:keys [title description]} :meta}]
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
    "https://fonts.googleapis.com/css?family=Volkhov"
    (str base-url "css/poole.css")
    (str base-url "css/syntax.css")
    (str base-url "css/stuttaford.css"))
   (when-let [css (seq (:css page))]
     (->> css
          (map (partial str base-url))
          (apply page/include-css)))
   [:link {:href (str base-url "apple-touch-icon-precomposed.png") :sizes "152x152"
           :rel "apple-touch-icon-precomposed"}]
   [:link {:href (str base-url "favicon.ico") :rel "shortcut icon"}]
   [:link {:href (str base-url "atom.xml") :rel "alternate"
           :type "application/rss+xml" :title "RSS"}]])

(defn nav-item [{:keys [title path]}]
  [:small [:a {:href path} title]])

(defn masthead [{:keys [base-url nav]
                 {:keys [title description]} :meta}]
  [:div.masthead
   [:h3.masthead-title
    [:a {:title "Home" :href base-url} title] " "
    [:small description]]
   (->> nav
        (map nav-item)
        (interpose " &middot; "))])

(defn foot [{:keys [year]
             {:keys [name]} :author}]
  [:div.footer
   [:p "&copy; " name " " year ". All rights reserved. Some lefts, too."]])

(defn google-analytics [{:keys [google-analytics-id domain]}]
  [:script {:type "text/javascript"}
   "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','google_analytics');
    google_analytics('create', '" google-analytics-id "', '" domain "');
    google_analytics('send', 'pageview');"])

(defn html-layout [{{:keys [layout footer]} :page
                    :as config}]
  (let [layout (keyword layout)]
    (page/html5
     (header config)
     [:body
      [:div.container.content
       (when-not (= :bare layout)
         (masthead config))
       (when-let [page-layout (layout templates)]
         (page-layout config))
       (when-not (or (= :bare layout)
                     (= "false" footer))
         (foot config))
       (google-analytics config)]])))
