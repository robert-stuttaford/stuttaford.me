(defproject stuttaford.me "0.1.0-SNAPSHOT"
  :url          "http://www.stuttaford.me"
  :license      {:name "Eclipse Public License"
                 :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[ch.qos.logback/logback-classic "1.1.7"]
                 [clj-time "0.12.0"]
                 [com.datomic/datomic-free "0.9.5656"
                  :exclusions [org.slf4j/slf4j-nop]]
                 [compojure "1.5.1"]
                 [enlive "1.1.6"]
                 [hiccup "1.0.5"]
                 [markdown-clj "0.9.89"]
                 [me.raynes/conch "0.8.0"]
                 [me.raynes/fs "1.4.6"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/core.async "0.2.385"]
                 [org.clojure/tools.logging "0.3.1"]
                 [peridot "0.4.4"]
                 [prismatic/plumbing "0.5.3"]
                 [ring/ring-core "1.5.0"]
                 [ring/ring-jetty-adapter "1.5.0"]
                 ;; fix dep conflicts
                 [com.google.guava/guava "19.0"]
                 [commons-codec "1.10"]
                 [org.clojure/tools.reader "1.0.0-beta2"]
                 [sablono "0.7.2"]]
  :aliases      {"generate" ["run" "-m" "stuttaford.generate"]}
  :jvm-opts     ["-Dlogback.configurationFile=logback.xml"]
  :profiles
  {:dev
   {:main         user
    :source-paths ["dev"]
    :plugins      [[lein-cljsbuild "1.1.3"]
                   [lein-figwheel "0.5.3-1" :exclusions [org.clojure/clojure]]]
    :dependencies [[cljs-http "0.1.41"]
                   [cljsjs/react "15.2.1-0"]
                   [cljsjs/react-dom "15.2.1-0"]
                   [cljsjs/react-dom-server "15.2.1-0"]
                   [com.cemerick/piggieback "0.2.1"]
                   [com.cemerick/url "0.1.1"]
                   [datascript "0.15.2"]
                   [devcards "0.2.1-7"
                    :exclusions [cljsjs/react
                                 cljsjs/react-dom
                                 cljsjs/react-dom-server]]
                   [org.clojure/clojurescript "1.9.93"]
                   [org.clojure/tools.namespace "0.2.10"]
                   [prismatic/plumbing "0.5.3"]
                   [rum "0.10.4"
                    :exclusions [cljsjs/react
                                 cljsjs/react-dom
                                 cljsjs/react-dom-server]]]

    :cljsbuild
    {:builds
     [{:id           "dev"
       :source-paths ["src"]
       :figwheel     {:on-jsload "stuttaford.client/on-js-reload"}
       :compiler     {:main                 stuttaford.client
                      :compiler-stats       true
                      ;;:verbose              true
                      :asset-path           "/js/out"
                      :output-to            "resources/public/js/stuttaford.js"
                      :output-dir           "resources/public/js/out"
                      :optimizations        :none
                      ;;:cache-analysis       true
                      :source-map-timestamp true}}

      {:id           "debug"
       :source-paths ["src"]
       :compiler     {:output-to      "resources/public/js/stuttaford.debug.js"
                      :main           stuttaford.client
                      :optimizations  :advanced
                      :pseudo-names   true
                      :cache-analysis true
                      :elide-asserts  true
                      :pretty-print   false}}

      {:id           "prod"
       :source-paths ["src"]
       :compiler     {:output-to      "resources/public/js/stuttaford.min.js"
                      :main           stuttaford.client
                      :optimizations  :advanced
                      :cache-analysis true
                      :elide-asserts  true
                      :pretty-print   false}}]}

    :figwheel {:http-server-root "figwheel-server"
               :server-port      3449
               :server-ip        "127.0.0.1"
               :css-dirs         ["resources/public/css"]
               :nrepl-port       7887
               :nrepl-middleware ["cider.nrepl/cider-middleware"
                                  "refactor-nrepl.middleware/wrap-refactor"
                                  "cemerick.piggieback/wrap-cljs-repl"]}}})
