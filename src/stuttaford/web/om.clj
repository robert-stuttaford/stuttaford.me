(ns stuttaford.web.om
  (:use [plumbing.core])
  (:require [hiccup.element :as element]
            [hiccup.page :as page]))

(def default-state
  {:config {}})

(defn om-app [name debug? app-state]
  (let [path (str "/js" (when debug? "-debug"))]
    (list
     [:div {:id (str name "-om-root")}]
     (page/include-js (str path "/core.js"))
     (page/include-js (str path "/" name ".js"))
     [:script {:id (str name "-om-state") :type "application/edn"}
      (pr-str (merge default-state app-state))]
     (element/javascript-tag
      (format (str "stuttaford." name ".init('" name "-om-root','" name "-om-state', %s);")
              debug?)))))
