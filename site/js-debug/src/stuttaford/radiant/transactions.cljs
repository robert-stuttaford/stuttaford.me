(ns stuttaford.radiant.transactions
  (:require [datascript :as d]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.radiant.components :as components]))

(defcomponentk transactions [data owner]
  (render-state [_ state]
    (html [:div "Transactions"])))
