(ns stuttaford.dive-into-datomic.components
  (:require [cljs.core.async :refer [put!]]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [om-bootstrap.panel :as p]
            [om-bootstrap.random :refer [label]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common :refer [config control-chan]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Top nav

(defcomponentk top-nav [[:data view] owner [:opts nav-items]]
  (render-state [_ state]
    (let [c (control-chan owner)]
      (b/toolbar
       {}
       (b/button-group {}
                       (for [[id [label]] nav-items]
                         (b/button (cond-> {:on-click #(put! c [:set-view id])}
                                           (= view id) (assoc :class "active"))
                                   label)))))))


