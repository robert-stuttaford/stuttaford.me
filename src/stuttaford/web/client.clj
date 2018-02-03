(ns stuttaford.web.client
  (:require [hiccup.page :as page]))

(defn client-app [name dev? app-state]
  (list
   [:div {:data-component name}
    [:script {:type "application/edn"} (pr-str app-state)]]
   (page/include-js (str "/js/stuttaford" (if dev? ""  ".min") ".js"))))
