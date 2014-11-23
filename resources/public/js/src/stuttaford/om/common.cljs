(ns stuttaford.om.common
  (:require [cljs.reader :as edn]
            [goog.dom]
            [om.core :as om :include-macros true])
  (:require-macros [cljs.core.async.macros :as csp :refer [go]]))

(defn config
  ([owner]
     (or (om/get-shared owner :config) {}))
  ([owner key]
     (get (config owner) key)))

(defn control-chan [owner]
  (om/get-shared owner :control-chan))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App startup

(defn log-tx [tx-data root-cursor]
  (let [{:keys [path old-value new-value]} tx-data
        c js/console]
    (doto c (.group (str "TRANSACTION " path)) (.groupCollapsed "OLD"))
    (prn (pr-str old-value))
    (doto c (.groupEnd) (.group "NEW"))
    (prn (pr-str new-value))
    (doto c (.groupEnd) (.groupEnd))))

(defn render
  [root state app debug?]
  (when debug?
    (enable-console-print!))
  (om/root app
           (dissoc state :shared :config)
           (cond-> {:target root
                    :shared (merge {:config (assoc (:config state) :debug? debug?)}
                                   (:shared state))}
                   debug? (assoc :tx-listen log-tx))))

(defn start
  ([app-id state-id app]
     (start app-id state-id app {}))
  ([app-id state-id app initial-state]
     (start app-id state-id app initial-state false))
  ([app-id state-id app initial-state debug?]
     (render
       (goog.dom/getElement app-id)
       (->> state-id
            goog.dom/getElement
            .-textContent
            edn/read-string
            (merge initial-state))
       app
       debug?)))
