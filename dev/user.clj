(ns user
  (:require [stuttaford.db :refer [start-database!]]
            [stuttaford.generate :as generate]
            [stuttaford.web.service :refer [start-web-server! stop-web-server!]]
            [shadow]))

(defn start-shadow! []
  (shadow/start-builders #{:production})) ;; :debug :production

(defn stop-shadow! []
  (shadow/stop-builders))

(defn restart-shadow! []
  (stop-shadow!)
  (start-shadow!))

(def dev-reset restart-shadow!)

(defn clean-shadow-output! []
  (shadow/clean-all-output))

(comment
  (restart-shadow!)
  (clean-shadow-output!)
  )

(defn start! []
  (start-database!)
  (start-web-server!))

(defn reset []
  (stop-web-server!)
  (start!))

(defn generate []
  (generate/build))
