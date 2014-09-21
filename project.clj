(defproject stuttaford.me "0.1.0-SNAPSHOT"
  :description "Static site for stuttaford.me"
  :url "http://www.stuttaford.me"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [ring/ring-core "1.3.0"]
                 [ring/ring-jetty-adapter "1.3.0"]
                 [org.clojure/tools.logging "0.3.0"]
                 [ch.qos.logback/logback-classic "1.1.2"]
                 [compojure "1.1.8"]
                 [hiccup "1.0.5"]
                 [enlive "1.1.5"]
                 [kerodon "0.4.0"]
                 [prone "0.4.0"]
                 [markdown-clj "0.9.47"]
                 [clj-time "0.8.0"]
                 [prismatic/plumbing "0.3.3"]
                 [me.raynes/conch "0.8.0"]
                 [me.raynes/fs "1.4.4"]
                 [com.datomic/datomic-free "0.9.4880.6"
                  :exclusions [org.slf4j/slf4j-nop]]]
  :aliases {"generate" ["run" "-m" "stuttaford.generate"]}
  :jvm-opts ["-Dlogback.configurationFile=logback.xml"]
  :profiles {:dev {:source-paths ["dev"]
                   :main         user}})
