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
            :else nil))))

(defn index-input [c current-datoms-index]
  (g/col {:xs 3}
         (b/button-group
          {}
          (for [index model/indexes]
            (b/button (cond-> {:on-click #(put! c [:set-datoms-index index])}
                              (= index current-datoms-index) (assoc :class "active"))
                      (-> index
                          name
                          string/upper-case))))))

(defn component-input [c components current-datoms-components component]
  (g/col {:xs 3 :class "datoms-components-inputs"}
         (i/input {:type        "text"
                   :feedback?   true
                   :class       "form-control"
                   :placeholder (-> component name string/upper-case)
                   :bs-style    (component-status
                                 components
                                 (map current-datoms-components components)
                                 component
                                 (component current-datoms-components))
                   :value       (component current-datoms-components)
                   :on-change   #(put! c [:set-datoms-component
                                          [component (.. % -target -value)]])})))

(defcomponentk inputs [[:data current-datoms-index
                        {current-datoms-components {:e nil :a nil :v nil}}] owner]
  (render [_]
    (let [c (control-chan owner)]
      (g/row
       {}
       (index-input c current-datoms-index)
       (let [components (case current-datoms-index
                          :eavt [:e :a :v]
                          :aevt [:a :e :v]
                          :avet [:a :v :e])]
         (map (partial component-input c components current-datoms-components)
              components))))))

(defcomponentk value [[:data value] owner [:opts component]]
  (render [_]
    (let [c (control-chan owner)]
      (html
       [:a {:href "#"
            :onClick #(put! c [:set-datoms-component [component value]])}
        value]))))

(defcomponentk datoms [[:data current-datoms-index {current-db nil}
                        {current-datoms-components {:e nil :a nil :v nil}} :as data] owner]
  (render [_]
    (html
     [:div
      (->inputs data)
      [:hr]
      (when current-db
        (let [order-fn   (case current-datoms-index
                           :eavt (juxt model/e-fn model/a-fn model/v-fn)
                           :aevt (juxt model/a-fn model/e-fn model/v-fn)
                           :avet (juxt model/a-fn model/v-fn model/e-fn))
              components (->> current-datoms-components
                              order-fn
                              (take-while (complement nil?)))
              datoms     (apply d/datoms current-db current-datoms-index components)]
          (list
           [:pre (pr-str current-datoms-index components)]
           (components/->result-table
            {:cols (case current-datoms-index
                     :eavt ["E" "A" "V"]
                     :aevt ["A" "E" "V"]
                     :avet ["A" "V" "E"])
             :rows (map (fn [{:keys [e a v]}]
                          (case current-datoms-index
                            :eavt [(->value {:value e}
                                            {:opts {:component :e}})
                                   (->value {:value (str a)}
                                            {:opts {:component :a}})
                                   (->value {:value v}
                                            {:opts {:component :v}})]
                            :aevt [(->value {:value (str a)}
                                            {:opts {:component :a}})
                                   (->value {:value e}
                                            {:opts {:component :e}})
                                   (->value {:value v}
                                            {:opts {:component :v}})]
                            :avet [(->value {:value (str a)}
                                            {:opts {:component :a}})
                                   (->value {:value v}
                                            {:opts {:component :v}})
                                   (->value {:value e}
                                            {:opts {:component :e}})]))
                        datoms)}))))])))
