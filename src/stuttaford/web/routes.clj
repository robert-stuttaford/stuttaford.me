(ns stuttaford.web.routes
  (:require [clojure.edn :as edn]
            [compojure.core :refer [context GET routes]]
            [compojure.route :as route]
            [ring.util.response :as response]
            [stuttaford.db :as db]
            [stuttaford.web.codex :as codex]
            [stuttaford.web.content
             :refer
             [parse-markdown-page parse-markdown-post]]
            [stuttaford.web.layout.atom :refer [atom-layout]]
            [stuttaford.web.layout.html :refer [html-layout]]))

(def ^:dynamic PROD-MODE? true)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Site config

(def site-config
  #(-> "config.edn" slurp edn/read-string))

(defn page-config [page]
  (assoc (site-config) :page page))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; 404 Error page

(defn error-404 [request]
  {:title   "404 - Page not found"
   :layout  "page"
   :content [:p.lead "I'm sorry, but I can't find " [:strong (:uri request)] " here."]})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Render

(defn render [layout-fn view & args]
  (-> (apply view args) page-config layout-fn))

(defn markdown-page [name]
  (render html-layout parse-markdown-page name))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Routes

(def app
  (apply
   routes
   (concat
    (for [page (:markdown-pages (site-config))]
      (GET (str "/" page "/") [] (markdown-page page)))

    [(GET "/" []
       (markdown-page "about"))

     (GET "/atom.xml" []
       (-> (render atom-layout (constantly {}))
           response/response
           (response/content-type "text/xml")
           (response/charset "utf-8")))

     (GET "/blog/" []
       (render html-layout (constantly {:title   "Blog"
                                        :content ""
                                        :layout  "blog"})))

     (GET "/blog/archived/" []
       (render html-layout (constantly {:title   "Older Blog Posts"
                                        :content ""
                                        :layout  "archived-blog"})))

     (GET "/:year/:month/:date/:slug/" [year month date slug]
       (render html-layout parse-markdown-post
               (format "posts/%s-%s-%s-%s" year month date slug)))

     (context "/codex" []

       (GET "/" {query-params :query-params}
         (render html-layout codex/codex
                 {:db     (db/db)
                  :admin? (some-> query-params (get "admin") boolean)
                  :debug? (some-> query-params (get "debug") boolean)
                  :dev?   (not PROD-MODE?)})))

     (route/resources "")

     (route/not-found #(render html-layout (partial error-404 %)))]))
  )
