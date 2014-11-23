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
  (if value
    "success"
    (let [[one two three] (map boolean component-values)]
      (cond
       (and (not one)
            (and (or two three))
            (and (= component c-one))) "error"
       (and (not two)
            three
            (and (= component c-two))) "error"
       :else nil))))

(defn index-input [c current-datoms-index]
  (b/toolbar
   {}
   (b/button-group
    {}
    (for [index model/indexes]
      (b/button (cond-> {:on-click #(put! c [:set-datoms-index index])}
                        (= index current-datoms-index) (assoc :class "active"))
                (-> index
                    name
                    string/upper-case))))
   (b/button {:on-click #(do
                           (put! c [:set-datoms-component [:e nil]])
                           (put! c [:set-datoms-component [:a nil]])
                           (put! c [:set-datoms-component [:v nil]]))}
             "Clear")))

(defn component-input [c components current-datoms-components component]
  (list
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
                                    [component (.. % -target -value)]])})
   (html [:a {:href "javascript:"
              :on-click #(put! c [:set-datoms-component [component nil]])}
          [:span.glyphicon.glyphicon-remove]])))

(defcomponentk inputs [[:data current-datoms-index {current-datoms-components {}}] owner]
  (render [_]
    (let [c          (control-chan owner)
          components (model/components current-datoms-index)
          [x y z]    components]
      (g/row
       {:class "datoms-components-inputs"}
       (g/col {:xs 3}
              (index-input c current-datoms-index))
       (g/col {:xs 3}
              (component-input c components current-datoms-components x))
       (g/col {:xs 3}
              (component-input c components current-datoms-components y))
       (g/col {:xs 3}
              (component-input c components current-datoms-components z))))))

(defcomponentk value [[:data value] owner [:opts component]]
  (render [_]
    (let [c (control-chan owner)]
      (html
       [:a {:href "javascript:"
            :onClick #(do
                        (.log js/console owner c (control-chan owner))
                        (put! c [:set-datoms-component [component value]]))}
        value]))))

(defn value* [component value]
  (->value {:value value} {:opts {:component component}}))

(def e-value (partial value* :e))
(def a-value #(value* :a (str %)))
(def v-value (partial value* :v))

(defcomponentk datoms [[:data current-datoms-index {current-db nil}
                        {current-datoms-components {}} :as data] owner]
  (render [_]
    (html
     [:div
      (->inputs data)
      [:hr]
      (when current-db
        (let [order-fn   (model/order-fn current-datoms-index)
              components (->> current-datoms-components
                              model/ensure-components
                              order-fn
                              (take-while (complement nil?)))
              datoms     (apply d/datoms current-db current-datoms-index components)]
          (components/->result-table
           {:cols (model/cols current-datoms-index)
            :rows (map (fn [{:keys [e a v]}]
                         (case current-datoms-index
                           :eavt [(e-value e) (a-value a) (v-value v)]
                           :aevt [(a-value a) (e-value e) (v-value v)]
                           :avet [(a-value a) (v-value v) (e-value e)]))
                       datoms)})))])))
