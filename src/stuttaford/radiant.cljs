(ns stuttaford.radiant
  (:require [cljs.core.async :refer [<! chan put!]]
            [om-bootstrap.panel :as p]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common :refer [config control-chan]]
            [stuttaford.radiant.actions :refer [perform-action]]
            [stuttaford.radiant.components :as components]
            [stuttaford.radiant.datalog :refer [datalog]]
            [stuttaford.radiant.datoms :refer [datoms]]
            [stuttaford.radiant.schema :refer [schema]]
            [stuttaford.radiant.transactions :refer [transactions]])
  (:require-macros [cljs.core.async.macros :as csp :refer [go]]))

(def nav-items
  {:datalog      ["Datalog" datalog]
   :datoms       ["Datoms" datoms]
   :transactions ["Transactions" transactions]})

(defcomponentk app-view [[:data view schema-visible? :as data] owner]
  (will-mount [_]
    (let [c (control-chan owner)]
      (go (while true
            (when-let [[op value] (<! c)]
              (perform-action data op value (config owner :debug?)))))
      (put! c [:set-data-source (-> data :data-sources ffirst)])))
  (render-state [_ state]
    (html
     (let [[label view-component] (view nav-items)]
       (p/panel {:header (components/->top-nav data {:opts {:nav-items nav-items}})}
                (when schema-visible?
                  (components/->schema data))
                (when view-component
                  (om/build view-component data)))))))

(defn ^:export init
  [app-id state-id debug?]
  (common/start
    app-id state-id app-view
    {:view                 :datalog
     :query                "[:find ?tag ?title :in $ :where [?link-id :link/title ?title] [?link-id :link/tags ?tag-id] [?tag-id :tag/name ?tag]]"
     :current-datoms-index :eavt
     :schema-visible?      true
     :shared               {:control-chan (chan)}}
    debug?))
