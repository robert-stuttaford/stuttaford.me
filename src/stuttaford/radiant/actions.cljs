(ns stuttaford.radiant.actions
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

(defmethod perform-action :set-data-source [cursor op value]
  (om/update! cursor :current-data-source value)
  (let [{:keys [data-sources current-data-source]} @cursor]
    (when-let [datoms (model/data-source data-sources current-data-source)]
      (om/update! cursor :current-db (model/make-db-from-datoms datoms)))))

(defmethod perform-action :set-datoms-index [cursor op value]
  (om/update! cursor :current-datoms-index value))

(defmethod perform-action :set-datoms-component [cursor op [component value]]
  (om/update! cursor [:current-datoms-components component] value))
