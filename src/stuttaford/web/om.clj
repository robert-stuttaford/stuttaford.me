(ns stuttaford.web.om
  (:use [plumbing.core])
  (:require [clojure.string :as string]
            [hiccup.element :as element]
            [hiccup.page :as page]))

(def default-state
  {:config {}})

(defn om-app [name debug? app-state]
  (let [path (str "/js" (when debug? "-debug"))]
    (list
     [:div {:id (str name "-om-root")}]
     [:script {:id (str name "-om-state") :type "application/edn"}
      (pr-str (merge default-state app-state))]
     (page/include-js (str path "/core.js"))
     (page/include-js (str path "/" name ".js"))
     (element/javascript-tag
      (format (str "stuttaford.%s.init('%s-om-root','%s-om-state', %s);")
              (string/replace name "-" "_")
              name
              name
              debug?)))))
