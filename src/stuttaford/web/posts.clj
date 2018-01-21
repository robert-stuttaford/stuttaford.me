(ns stuttaford.web.posts
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [stuttaford.web.content :refer [parse-markdown-post]]))

(defn list-posts []
  (->> (io/file "resources/posts")
       .listFiles
       (map #(-> (str %)
                 (string/replace #"resources/" "")
                 (string/replace #".md" "")
                 parse-markdown-post))
       (sort-by :date (comp - compare))))

(defn latest [count]
  (->> (list-posts)
       (remove :archive)
       (take count)))

(defn recent [count date]
  (cond->> (list-posts)
    date  (drop-while #(not= date (:date %)))
    date  next
    count (take count)))

(defn archived []
  (->> (list-posts)
       (filter :archive)))
