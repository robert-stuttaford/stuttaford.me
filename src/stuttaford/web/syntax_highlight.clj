(ns stuttaford.web.syntax-highlight
  (:require [clojure.walk :as walk]
            [me.raynes.conch :refer [let-programs]]
            [net.cgrand.enlive-html :as enlive]))

(defn highlight-clojure [text]
  (let-programs [pygmentize "pygmentize"]
    (pygmentize "-fhtml" (str "-l" "clojure")
                (str "-Ostripnl=False,encoding=utf-8")
                {:in text})))

(defn html->enlive [content]
  (->> content
       java.io.StringReader.
       enlive/html-resource
       first
       :content
       first
       :content))

(defn enlive->html [content]
  (->> content
       enlive/emit*
       (apply str)))

(defn highlight-clojure-in-html [html]
  (if-not (re-find #"brush: clojure" html)
    html
    (->> html
         html->enlive
         (walk/postwalk (fn [item]
                          (if (and (map? item)
                                   (-> item :tag (= :pre))
                                   (-> item :attrs :class (= "brush: clojure")))
                            (->> item
                                 :content
                                 enlive->html
                                 highlight-clojure
                                 html->enlive
                                 first)
                            item)))
         enlive->html)))
