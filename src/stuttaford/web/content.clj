(ns stuttaford.web.content
  (:require [clj-time.core :as time]
            [clojure.java.io :as io]
            [clojure.string :as string]
            [markdown.core :as md]
            [stuttaford.web.syntax-highlight :refer [highlight-clojure-in-html]]))

(def header-regex #"^---\n((?:[a-z-]+: [^\n]+\n)*)---\n")

(defn parse-markdown-page-header [page]
  (when-let [header (some->> page
                             (re-find header-regex)
                             second)]
    (let [header (->> (string/split header #"\n")
                      (map #(string/split % #": "))
                      (map (juxt (comp keyword first) second))
                      (into {}))]
      (if-let [tags (:tags header)]
        (assoc header :tags (string/split tags #" *, *"))
        header))))

(defn parse-markdown-page [filename]
  (when-let [file (some-> filename io/resource)]
    (when-let [raw (slurp file)]
      (assoc (or (parse-markdown-page-header raw) {})
        :content (-> raw
                     (string/replace header-regex "")
                     md/md-to-html-string
                     highlight-clojure-in-html)
        :last-modified (-> file io/file .lastModified)))))

(defn parse-markdown-post [filename]
  (when-let [page (parse-markdown-page filename)]
    (let [[year month date slug] (-> filename
                                     (string/replace #"(posts/|\.md)" "")
                                     (string/split #"-" 4))]
      (merge page
             {:date      (time/date-time (Integer. ^String year)
                                         (Integer. ^String month)
                                         (Integer. ^String date))
              :permalink (format "/%s/%s/%s/%s/" year month date slug)}))))
