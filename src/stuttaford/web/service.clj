(ns stuttaford.web.service
  (:require [compojure.handler :as handler]
            [ring.adapter.jetty :as jetty]
            [stuttaford.web.routes :refer [app]]))

(defonce service (atom nil))

(defn handler []
  (handler/site app))

(defn start-web-server! [& [port?]]
  (reset! service
          (jetty/run-jetty (handler)
                           {:port (or port? 3000)
                            :join? false})))

(defn stop-web-server! []
  (when-let [service* @service]
    (.stop service*)
    (reset! service nil)))

(defn restart-web-server! [& [port?]]
  (stop-web-server!)
  (start-web-server! port?))

(defn -main [& [port?]]
  (start-web-server!
   (if (string? port?)
     (Long. port?)
     3000)))
