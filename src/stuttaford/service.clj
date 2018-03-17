(ns stuttaford.service
  (:require [clojure.tools.namespace.repl :refer [refresh]]
            [ring.adapter.jetty :as jetty]
            [stuttaford.web.routes :as routes]))

(defonce *jetty (atom nil))

(defn start-web! []
  (reset! *jetty (jetty/run-jetty #'routes/app
                                  {:port  3000
                                   :join? false})))

(defn stop-web! []
  (when-some [jetty @*jetty]
    (.stop jetty)
    (reset! *jetty nil)))

(defn reset []
  (stop-web!)
  (refresh :after 'stuttaford.service/start-web!)
  :done)
