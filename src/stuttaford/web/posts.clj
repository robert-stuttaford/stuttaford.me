(ns stuttaford.web.posts
  (:require [clojure.java.io :as io]
            [clojure.string :as string]
            [stuttaford.web.content :refer [parse-markdown-post]]))

(defn list-posts []
  (->> "resources/posts"
       io/file
       .listFiles
       (map str)
       (map #(string/replace % #"resources/" ""))
       (map parse-markdown-post)
       (sort-by :date (comp - compare))))

(defn latest
  ([]
     (latest 1))
  ([count]
     (->> (list-posts)
          (take count))))

(defn recent
  ([]
     (recent 1))
  ([count]
     (recent count nil))
  ([count date]
     (cond->> (list-posts)
              date  (drop-while #(not= date (:date %)))
              date  next
              count (take count))))
