(ns stuttaford.radiant.datalog
  (:require [cljs.reader :as edn]
            [datascript :as d]
            [datascript.query :as dq]
            [om.core :as om :include-macros true]
            [om-bootstrap.grid :as g]
            [om-bootstrap.input :as i]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.radiant.components :as components]))

(defn maybe-parse-query [s]
  (try (some-> s edn/read-string dq/parse-query)
       (catch :default e nil)))

(defn query-parse-status [s]
  (when (seq s)
    (if (maybe-parse-query s)
      "success"
      "error")))

(defn handle-query-input-change [data owner]
  (let [input (om/get-node owner "input")
        text  (.-value input)]
    (om/update! data :query text)))

(defcomponentk query-input [[:data query :as data] owner]
  (init-state [_] {:text ""})
  (render-state [_ state]
    (g/row
     {:class "query-input"}
     (g/col {:xs 6}
            (i/input
             {:type        "textarea"
              :feedback?   true
              :rows        8
              :placeholder "[:find ?e ?v :in $ :where [?e :attr ?v]]"
              :value       query
              :bs-style    (query-parse-status query)
              :on-change   #(handle-query-input-change data owner)}))
     (g/col {:xs 6}
            (html
             [:pre
              (if-let [parsed-query (maybe-parse-query query) ]
                (let [{:keys [find in where]} parsed-query]
                  (str "[:find "    (apply str (interpose " "   find)) "\n"
                       " :in "      (apply str (interpose " "   in)) "\n"
                       " :where\n " (apply str (interpose "\n " where)) "]"))
                "Not a valid query.")])))))

(defcomponentk datalog [[:data data-sources {current-data-source nil} {current-db nil} {query ""} :as data] owner]
  (render-state [_ {:keys [sort] :or {sort 0}}]
    (html
     [:div
      (->query-input data)
      (when-let [query (maybe-parse-query query)]
        (list
         [:hr]
         (components/->result-table {:cols (map pr-str (:find query))
                                     :rows (d/q query current-db)}
                                    {:opts {:allow-sorting? true}})))])))
