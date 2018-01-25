(ns user
  (:require [clojure.tools.namespace.repl :refer [refresh]]
            [stuttaford.db :refer [start-database!]]
            [stuttaford.generate :as generate]
            [stuttaford.web.routes :as routes]
            [stuttaford.web.service :refer [start-web-server! stop-web-server!]]))

(alter-var-root #'routes/PROD-MODE? (constantly false))

(defn start! []
  (start-database!)
  (start-web-server!))

(defn reset []
  (stop-web-server!)
  (refresh :after 'user/start!))

#_ (generate/build)
