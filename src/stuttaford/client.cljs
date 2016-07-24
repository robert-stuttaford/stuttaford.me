(ns ^:figwheel-always stuttaford.client
  (:require [stuttaford.client.common :as common]
            [stuttaford.client.components.codex :refer [codex]]
            [stuttaford.client.start :as start]))

(def component-type->fn
  {"codex" codex})

(start/start-all-components! common/state component-type->fn)

(defn ^:export on-js-reload []
  (let [r (rand-int 100)]
    (prn :on-js-reload r)
    (swap! stuttaford.client.common/state assoc ::random r)))
