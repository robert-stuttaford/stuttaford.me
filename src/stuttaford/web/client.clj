(ns stuttaford.web.client
  (:require [hiccup.page :as page]))

(defn client-app [name debug? dev? app-state]
  (list
   [:div {:data-component name}
    [:script {:type "application/edn"} (pr-str app-state)]]
   (page/include-js (str "/js/stuttaford" (cond debug? ".debug"
                                                dev?   ""
                                                :else  ".min") ".js"))))
