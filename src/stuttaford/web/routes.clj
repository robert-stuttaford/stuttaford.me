(ns stuttaford.web.routes
  (:require [clojure.edn :as edn]
            [clojure.tools.logging :as log]
            [compojure.core :refer [defroutes context GET POST]]
            [compojure.route :as route]
            [ring.util.response :as response]
            [stuttaford.web.content :refer [parse-markdown-page parse-markdown-post]]
            [stuttaford.web.layout.atom :refer [atom-layout]]
            [stuttaford.web.layout.html :refer [html-layout]]
            [stuttaford.web.link :as link]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Site config

(def site-config
  (memoize #(-> "config.edn" slurp edn/read-string)))

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

;(def render-memoized (memoize render))
(def render-memoized render)

(defroutes app
  (GET "/" []
       (render-memoized html-layout (constantly {:title nil :content "" :layout "home"})))

  (GET "/atom.xml" []
       (-> (render-memoized atom-layout (constantly {}))
           response/response
           (response/content-type "text/xml")
           (response/charset "utf-8")))

  (GET "/about/" []
       (render-memoized html-layout parse-markdown-page "about.md"))

  (GET "/:year/:month/:date/:slug/" [year month date slug]
       (render-memoized html-layout parse-markdown-post
                        (format "posts/%s-%s-%s-%s.md" year month date slug)))

  (context "/codex" []

    (GET "/" {:as req}
         (render html-layout link/links (some-> req :query-params (get "admin") boolean)))

    (GET "/new" []
         (render html-layout link/new-form))

    (POST "/new" {params :params}
          (link/save-link! params)
          (response/redirect "/links/new"))

    (GET "/edit/:slug" [slug]
         (render html-layout link/edit-form slug))

    (POST "/edit/:slug" {params :params}
          (link/update-link! params)
          (response/redirect "/links")))

  (route/resources "")
  (route/not-found #(render-memoized html-layout (partial error-404 %))))
