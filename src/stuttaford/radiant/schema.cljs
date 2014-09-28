(ns stuttaford.radiant.schema
  (:require [datascript :as d]
            [om-tools.core :refer-macros [defcomponentk]]
            [om-bootstrap.random :refer [label]]
            [om-bootstrap.table :refer [table]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.radiant.components :as components]
            [stuttaford.radiant.model :as model]))

(defcomponentk schema [[:data {current-db nil}] owner]
  (render-state [_ state]
    (html
     [:div
      (if current-db
        (for [schema (model/schema-for-db current-db)]
          [:span.schema
           (pr-str (:db/ident schema))
           (when (= :db.type/ref (:db/valueType schema))
             (label {:bs-style "primary"} "REF"))
           (when (= :db.cardinality/many (:db/cardinality schema))
             (label {:bs-style "primary"} "MANY"))])
        "No database.")])))
