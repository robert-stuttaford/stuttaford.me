(ns stuttaford.web.content
  (:require [clj-time.core :as time]
            [clojure.java.io :as io]
            [clojure.string :as string])
  (:import com.vladsch.flexmark.ext.toc.TocExtension
           [com.vladsch.flexmark.ext.yaml.front.matter
            AbstractYamlFrontMatterVisitor
            YamlFrontMatterExtension]
           com.vladsch.flexmark.html.HtmlRenderer
           com.vladsch.flexmark.parser.Parser
           com.vladsch.flexmark.util.options.MutableDataSet
           java.util.ArrayList))

(def options ^MutableDataSet
  (doto (MutableDataSet.)
    (.set Parser/EXTENSIONS
          (ArrayList. [(TocExtension/create)
                       (YamlFrontMatterExtension/create)]))))

(def parser ^Parser$Builder
  (.build (Parser/builder options)))

(def renderer ^HtmlRenderer$Builder
  (.build (HtmlRenderer/builder options)))

(defn parse-markdown [str]
  (let [doc (.parse parser str)]
    (into {:content (.render renderer doc)}
          (map (fn [[key [value]]]
                 [(keyword key)
                  value]))
          (.getData (doto (AbstractYamlFrontMatterVisitor.)
                      (.visit doc))))))

(defn parse-markdown-page [filename]
  (when-let [file (some-> filename io/resource)]
    (when-let [raw (slurp file)]
      (assoc (parse-markdown raw)
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
