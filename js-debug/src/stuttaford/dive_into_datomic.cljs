(ns stuttaford.dive-into-datomic
  (:require [clojure.string :as string]
            [cljs.core.async :refer [<! chan put! close!]]
            [om-bootstrap.button :as b]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [goog.dom]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common :refer [config control-chan]]
            [stuttaford.dive-into-datomic.content :as content])
  (:require-macros [cljs.core.async.macros :as csp :refer [go]]))

(declare indexes datalog entity transaction transaction-result)

(defmulti perform-action (fn [cursor op value debug?]
                           (when debug?
                             (prn "ACTION:" op value))
                           op))

(defmethod perform-action :default [cursor op value]
  (throw (str "Missing perform-method op: " op)))

(defmethod perform-action :set-view [cursor op value]
  (om/update! cursor :view value))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Home

(defcomponentk home [data owner]
  (render [_]
    (html [:div "Dive into Datomic interactive diagrams."])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Datom

(defcomponentk datom [data owner]
  (init-state [_] {:labels    :example})
  (render-state [_ {:keys [component labels]}]
    (html
     [:div.datom
      [:div.navigation
       (b/toolbar
        {}
        (b/button {:on-click #(om/set-state! owner :component nil)} "Clear")
        (b/button-group
         {}
         (for [kind [:example :names :values]]
           (b/button (cond-> {:on-click #(om/set-state! owner :labels kind)}
                             (= labels kind) (assoc :class "active"))
                     (-> kind name string/capitalize)))))]
      [:div.datom-tuple
       [:span "["]
       (for [kind [:entity :attribute :value :transaction :added]
             :when kind
             :let [class (name kind)
                   label (content/label kind labels)]]
         (when label
           [:a {:href "javascript:"
                :on-click #(om/set-state! owner :component kind)
                :class (str class (when (= component kind) " active"))}
            label]))
       [:span "]"]]
      (when component
        [:div.datom-content
         [:h1 (-> component name string/capitalize)]
         (content/datom-content component)])])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App startup

(def nav-items
  [{:home               ["Home" home]}
   {:datom              ["Datom" datom]
    :indexes            ["Indexes" indexes]}
   {:datalog            ["Datalog Query" datalog]
   :entity             ["Entities" entity]}
   {:transaction        ["Transaction" transaction]
    :transaction-result ["Transaction Result" transaction-result]}])

(defcomponentk top-nav [[:data view] owner [:opts nav-items]]
  (render-state [_ state]
    (let [c (control-chan owner)]
      (b/toolbar
       {}
       (for [items nav-items]
         (b/button-group
          {}
          (for [[id [label]] items]
            (b/button (cond-> {:on-click #(put! c [:set-view id])}
                              (= view id) (assoc :class "active"))
                      label))))))))

(defcomponentk app-view [[:data view :as data] owner]
  (will-mount [_]
    (let [c (control-chan owner)]
      (go (while true
            (when-let [[op value] (<! c)]
              (perform-action data op value (config owner :debug?)))))))
  (will-unmount [_]
    (close! (control-chan owner)))
  (render-state [_ state]
    (html
     (let [[label view-component] (view (into {} (apply merge nav-items)))]
       [:div
        [:div.navigation
         (->top-nav data {:opts {:nav-items nav-items}})]
        [:div.content
         (if view-component
           (om/build view-component data)
           (html [:div]))]]))))

(defn ^:export init
  [app-id state-id debug?]
  (common/start app-id state-id app-view {:shared {:control-chan (chan)}} debug?))

