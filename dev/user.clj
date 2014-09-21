(ns user
  (:require [stuttaford.db :refer [start-database!]]
            [stuttaford.web.service :refer [start-web-server! stop-web-server!]]))

(defn start! []
  (start-database!)
  (start-web-server!))

(defn reset []
  (stop-web-server!)
  (start!))
