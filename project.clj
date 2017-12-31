(defproject stuttaford.me "0.1.0-SNAPSHOT"
  :url          "http://www.stuttaford.me"
  :license      {:name "Eclipse Public License"
                 :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[ch.qos.logback/logback-classic "1.2.3"]
                 [clj-time "0.14.2"]
                 [com.datomic/datomic-free "0.9.5656"
                  :exclusions [org.slf4j/slf4j-nop
                               org.slf4j/slf4j-log4j12
                               com.google.guava/guava]]
                 [com.google.guava/guava "20.0"]
                 [compojure "1.6.0"]
                 [enlive "1.1.6"]
                 [hiccup "1.0.5"]
                 [com.vladsch.flexmark/flexmark-all "0.28.32"]
                 [me.raynes/fs "1.4.6"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/tools.logging "0.4.0"]
                 [peridot "0.5.0"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]]
  :aliases      {"generate" ["run" "-m" "stuttaford.generate"]}
  :jvm-opts     ["-Dlogback.configurationFile=logback.xml"]
  :profiles
  {:dev
   {:main         user
    :source-paths ["dev"]
    :plugins      [[lein-cljsbuild "1.1.7"]
                   [lein-figwheel "0.5.14"]]
    :dependencies [[cljs-http "0.1.44"]
                   [com.cemerick/url "0.1.1"]
                   [datascript "0.16.3"]
                   [org.clojure/clojurescript "1.9.946"]
                   [org.clojure/core.async "0.3.465"]
                   [org.clojure/tools.namespace "0.2.10"]
                   [rum "0.10.8"]]

    :cljsbuild
    {:builds
     [{:id           "dev"
       :source-paths ["src"]
       :figwheel     {:on-jsload "stuttaford.client/on-js-reload"}
       :compiler     {:main                 stuttaford.client
                      :compiler-stats       true
                      :asset-path           "/js/out"
                      :output-to            "resources/public/js/stuttaford.js"
                      :output-dir           "resources/public/js/out"
                      :optimizations        :none
                      :source-map-timestamp true}}

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
               :css-dirs         ["resources/public/css"]}}})
