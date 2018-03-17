(require '[figwheel-sidecar.repl-api :as figwheel])

(def figwheel-options
  {:figwheel-options
   {:server-port      3450
    :nrepl-port       7891
    :nrepl-middleware ["cider.nrepl/cider-middleware"
                       "refactor-nrepl.middleware/wrap-refactor"]}

   :all-builds
   [{:id           "dev"
     :figwheel     {:on-jsload "stuttaford.client/on-js-reload"}
     :source-paths ["src"]
     :compiler     {:main                 'stuttaford.client
                    :output-to            "resources/public/js/stuttaford.js"
                    :output-dir           "resources/public/js/out"
                    :asset-path           "/js/out"
                    :source-map           true
                    :source-map-timestamp true
                    :optimizations        :none
                    :parallel-build       true}}]})

(spit ".nrepl-port" (get-in figwheel-options [:figwheel-options :nrepl-port]))

(figwheel/start-figwheel! figwheel-options)
