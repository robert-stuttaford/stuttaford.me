(defproject stuttaford.me "0.1.0-SNAPSHOT"
  :url          "https://www.stuttaford.me"
  :license      {:name "Eclipse Public License"
                 :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[ch.qos.logback/logback-classic "1.2.3"]
                 [clj-time "0.14.2"]
                 [com.cognitect/transit-clj "0.8.290"];; fix clash
                 [com.datomic/client-pro "0.8.14"]
                 [com.stuartsierra/component "0.3.2"]
                 [com.vladsch.flexmark/flexmark-all "0.28.38"]
                 [commons-codec "1.10"];; fix clash
                 [compojure "1.6.0"]
                 [datascript "0.16.3"]
                 [figwheel-sidecar "0.5.14"]
                 [hiccup "1.0.5"]
                 [me.raynes/fs "1.4.6"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.4.474"]
                 [org.clojure/tools.logging "0.4.0"]
                 [org.clojure/tools.namespace "0.2.10"]
                 [org.eclipse.jetty/jetty-server "9.3.7.v20160115"] ;; fix clash
                 [peridot "0.5.0"]
                 [ring-jetty-component "0.3.1" :exclusions [org.eclipse.jetty/jetty-io]]
                 [ring/ring-core "1.6.3"]
                 [rum "0.11.0"]]
  :source-paths   ["src" "dev"]
  :resource-paths ["resources" "target"]
  :plugins        [[lein-cljsbuild "1.1.7"]]
  :jvm-opts       ["-Dlogback.configurationFile=logback.xml"]
  :cljsbuild
  {:builds
   [{:id           "release"
     :source-paths ["src"]
     :compiler     {:main           stuttaford.client
                    :output-to      "resources/public/js/stuttaford.min.js"
                    :output-dir     "target/js/out"
                    :compiler-stats true
                    :optimizations  :advanced
                    :parallel-build true}}]})
