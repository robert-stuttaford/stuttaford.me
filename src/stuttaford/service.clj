(ns stuttaford.service
  (:require [clojure.tools.namespace.repl :refer [refresh]]
            [com.stuartsierra.component :as c]
            [figwheel-sidecar.system :as f]
            [ring.component.jetty :as jetty]
            [stuttaford.web.routes :as routes]))

(def system
  (c/system-map
   :server
   (jetty/jetty-server {:app  {:handler #'routes/app}
                        :port 3000})

   :figwheel-system
   (f/figwheel-system
    {:figwheel-options
     {:http-server-root "."
      :repl             false}
     :build-ids  ["none"]
     :all-builds
     {"none"
      {:id           "none"
       :source-paths ["src"]
       :figwheel     {:on-jsload "stuttaford.client/on-js-reload"}
       :compiler     {:main                 'stuttaford.client
                      :output-to            "resources/public/js/stuttaford.js"
                      :output-dir           "target/js/out"
                      :asset-path           "/js/out"
                      :source-map           true
                      :source-map-timestamp true
                      :optimizations        :none
                      :parallel-build       true}}}})

   :css-watcher
   (f/css-watcher {:watch-paths ["resources"]
                   :log-writer  *out*})))

(defn start-system! []
  (alter-var-root #'system c/start))

(defn reset []
  (alter-var-root #'system c/stop)
  (refresh :after 'stuttaford.service/start-system!)
  :done)
