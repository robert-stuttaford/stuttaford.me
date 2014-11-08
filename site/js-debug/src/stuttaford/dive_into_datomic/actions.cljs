(ns stuttaford.dive-into-datomic.actions
  (:require [om.core :as om :include-macros true]
            [stuttaford.radiant.model :as model]))

(defmulti perform-action (fn [cursor op value debug?]
                           (when debug?
                             (prn "ACTION:" op value))
                           op))

(defmethod perform-action :default [cursor op value]
  (throw (str "Missing perform-method op: " op)))

(defmethod perform-action :set-view [cursor op value]
  (om/update! cursor :view value))