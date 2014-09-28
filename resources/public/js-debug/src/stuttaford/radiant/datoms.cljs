(ns stuttaford.radiant.datoms
  (:require [cljs.core.async :refer [put!]]
            [cljs.reader :as edn]
            [clojure.string :as string]
            [datascript :as d]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [om-bootstrap.input :as i]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common :refer [config control-chan]]
            [stuttaford.radiant.components :as components]
            [stuttaford.radiant.model :as model]))

(defn component-status [[c-one c-two] component-values component value]
  (if (seq value)
    "success"
    (let [[one two three] component-values
          one             (-> one seq boolean)
          two             (-> two seq boolean)
          three           (-> three seq boolean)]
      (cond
       (and (not one)
            (and (or two three))
            (and (= component c-one))) "error"
       (and (not two)
            three
            (and (= component c-two))) "error"
       :else nil)))
  )

(defcomponentk datoms [[:data data-sources {current-data-source nil} {current-db nil}
                        current-datoms-index
                        {current-datoms-components {:e nil :a nil :v nil}}] owner]
  (render-state [_ state]
    (let [c (control-chan owner)]
      (html
       [:div
        (g/row
         {}
         (g/col {:xs 3}
                (b/button-group {}
                                (for [index model/indexes]
                                  (b/button (cond-> {:on-click #(put! c [:set-datoms-index index])}
                                                    (= index current-datoms-index) (assoc :class "active"))
                                            (-> index
                                                name
                                                string/upper-case)))))
         (let [components (case current-datoms-index
                            :eavt [:e :a :v]
                            :aevt [:a :e :v]
                            :avet [:a :v :e])]
           (for [component components]
             (g/col {:xs 3 :class "datoms-components-inputs"}
                    (i/input {:type        "text"
                              :feedback?   true
                              :class       "form-control"
                              :placeholder (-> component name string/upper-case)
                              :bs-style    (component-status components
                                                             (map current-datoms-components components)
                                                             component
                                                             (component current-datoms-components))
                              :value       (component current-datoms-components)
                              :on-change   #(put! c [:set-datoms-component [component (.. % -target -value)]])})))))
        [:hr]
        (when current-db
          (let [e-fn                   #(let [e (:e %)]
                                          (when (seq e)
                                            (long e)))
                a-fn                   #(let [a (:a %)]
                                          (when (seq a)
                                            (try (edn/read-string a)
                                                 (catch :default e
                                                   nil))))
                v-fn                   #(let [v (:v %)]
                                          (when (seq v)
                                            (try (let [v-as-long (long v)]
                                                   (if (.isNaN v-as-long)
                                                     v
                                                     v-as-long))
                                                 (catch :default e
                                                   v))))
                components-in-order-fn (case current-datoms-index
                                         :eavt (juxt e-fn a-fn v-fn)
                                         :aevt (juxt a-fn e-fn v-fn)
                                         :avet (juxt a-fn v-fn e-fn))
                components             (->> current-datoms-components
                                            components-in-order-fn
                                            (take-while (complement nil?)))
                datoms                 (apply d/datoms current-db current-datoms-index components)]
            (list
             (components/->result-table {:cols (case current-datoms-index
                                                 :eavt ["E" "A" "V"]
                                                 :aevt ["A" "E" "V"]
                                                 :avet ["A" "V" "E"])
                                         :rows (map (fn [{:keys [e a v]}]
                                                      (case current-datoms-index
                                                        :eavt [e (str a) v]
                                                        :aevt [(str a) e v]
                                                        :avet [(str a) v e]))
                                                    datoms)}))))]))))