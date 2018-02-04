(ns stuttaford.web.layout.atom
  (:require [clj-time.coerce :as time-coerce]
            [clj-time.format :as time-format]
            [hiccup.core :as hiccup]
            [hiccup.page :as page]
            [hiccup.util :as util]
            [stuttaford.web.posts :as posts]))

(defmacro xml
  [options & contents]
  (if-not (map? options)
    `(xml {} ~options ~@contents)
    `(let [options# ~options]
       (hiccup/html {:mode :xml}
         (page/xml-declaration (options# :encoding "UTF-8"))
         ~@contents))))

(def atom-timestamp-format
  (comp (partial time-format/unparse (time-format/formatters :date-time-no-ms))
        time-coerce/from-long))

(defn atom-entry [{{:keys [url]} :config
                   {:keys [title last-modified permalink content]} :post}]
  (let [post-url (str url permalink)]
    [:entry
     [:title title]
     [:link {:href post-url}]
     [:updated (atom-timestamp-format last-modified)]
     [:id post-url]
     [:content {:type "html"} (-> content util/escape-html)]]))

(defn atom-layout [{{:keys [site-title]}      :meta
                    {:keys [name email]} :author
                    :keys [base-url url]
                    :as   config}]
  (let [all-posts (posts/list-posts)]
    (xml
     [:feed {:xmlns "http://www.w3.org/2005/Atom"}
      [:title site-title]
      [:link {:href (str url base-url "atom.xml") :rel "self"}]
      [:link {:href (str url base-url)}]
      [:updated (-> all-posts first :last-modified atom-timestamp-format)]
      [:id url]
      [:author
       [:name name]
       [:email email]]
      (map (fn [post] (atom-entry {:config config :post post})) all-posts)])))
