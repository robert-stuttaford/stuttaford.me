(ns stuttaford.radiant.datalog
  (:require [datascript :as d]
            [datascript.query :as dq]
            [om-tools.core :refer-macros [defcomponentk]]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.radiant.components :as components]))

(defcomponentk datalog [[:data data-sources {current-data-source nil} {current-db nil}] owner]
  (render-state [_ {:keys [sort] :or {sort 0}}]
    (let [query                   '[:find ?tag ?title :in $ :where
                                    [?link-id :link/title ?title]
                                    [?link-id :link/tags ?tag-id]
                                    [?tag-id :tag/name ?tag]]
          {:keys [find in where]} (dq/parse-query query)]
      (html
       [:div
        [:pre
         "[:find "    (apply str (interpose " "   find)) "\n"
         " :in "      (apply str (interpose " "   in)) "\n"
         " :where\n " (apply str (interpose "\n " where)) "]"]
        [:hr]
        (components/->result-table {:cols (map pr-str find)
                                    :rows (d/q query current-db)}
                                   {:opts {:allow-sorting? true}})]))))
