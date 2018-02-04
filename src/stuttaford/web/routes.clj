(ns stuttaford.web.routes
  (:require [clojure.edn :as edn]
            [compojure.core :as compojure]
            [compojure.route :as route]
            [ring.util.response :as response]
            [stuttaford.db :as db]
            [stuttaford.markdown :as markdown]
            [stuttaford.web.content :as content]
            [stuttaford.web.layout.atom :as atom]))

(def ^:dynamic PROD-MODE? false)

(def site-config
  #(-> "config.edn" slurp edn/read-string))

(defn page-config [page]
  (assoc (site-config) :page page))

(defn render [layout-fn view & args]
  (-> (apply view args) page-config layout-fn))

(defn markdown-page [name]
  (render content/html-layout markdown/parse-markdown-page name))

(def app
  (apply
   compojure/routes
   (concat
    (for [page (:markdown-pages (site-config))]
      (compojure/GET (str "/" page "/") []
        (markdown-page page)))

    [(compojure/GET "/" []
       (markdown-page "about"))

     (compojure/GET "/atom.xml" []
       (-> (render atom/atom-layout (constantly {}))
           response/response
           (response/content-type "text/xml")
           (response/charset "utf-8")))

     (compojure/GET "/blog/" []
       (render content/html-layout (constantly {:title   "Blog"
                                                :content ""
                                                :layout  "blog"})))

     (compojure/GET "/blog/archived/" []
       (render content/html-layout (constantly {:title   "Older Blog Posts"
                                                :content ""
                                                :layout  "archived-blog"})))

     (compojure/GET "/:year/:month/:date/:slug/" [year month date slug]
       (render content/html-layout markdown/parse-markdown-post
               (format "posts/%s-%s-%s-%s" year month date slug)))

     (compojure/GET "/codex/" []
       (render content/html-layout content/codex
               {:db   (db/db)
                :dev? (not PROD-MODE?)}))

     (route/resources "")
     (route/resources "/js" {:root "js"})

     (route/not-found (fn [request]
                        (render content/html-layout
                                (fn []
                                  {:title   "404 - Page not found"
                                   :layout  "page"
                                   :content [:p.lead "I'm sorry, but I can't find "
                                             [:strong (:uri request)] " here."]}))))])))
