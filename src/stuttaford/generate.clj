(ns stuttaford.generate
  (:require [kerodon.core :as kerodon]
            [peridot.core :as peridot]
            [me.raynes.fs :as fs]
            [stuttaford.web.routes :refer [app]]
            [stuttaford.web.service :as service]))

(def SITE "site")

(defn clean []
  (fs/delete-dir SITE))

(defn ensure-site []
  (fs/mkdir SITE))

(defn copy-public-to-site []
  (fs/copy+ "resources/public" SITE))

(defn build []
  (clean)
  (ensure-site)
  (copy-public-to-site))

(defn -main
  [& args]
  (build))

(comment
  (build)
  (-> (service/handler)
      kerodon/session
      (peridot/request "/atom.xml" :request-method :get)
      :response)
  )
