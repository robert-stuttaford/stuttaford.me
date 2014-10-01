(ns stuttaford.codex.model
  (:require [datascript :as d]
            [datascript.core :as dc]
            [om.core :as om :include-macros true]))

(extend-type dc/DB
  om/IToCursor
  (-to-cursor
    ([this _] this)
    ([this _ _] this)))

(defn make-db-from-datoms [datoms]
  (d/db-with (d/empty-db {:link/category {:db/valueType :db.type/ref}
                          :link/tags     {:db/cardinality :db.cardinality/many
                                          :db/valueType   :db.type/ref}})
             (map (fn [[e a v]] [:db/add e a v]) datoms)))

(defn ids->entities [db ids]
  (map (partial d/entity db) ids))

(defn prepare-entities [db ids]
  (->> ids
       (map first)
       (ids->entities db)))

(defn prepare-categories [db categories]
  (->> categories
       (prepare-entities db)
       (sort-by :category/name)))

(defn categories [db]
  (->> (d/q '[:find ?category :where [?category :category/name]] db)
       (prepare-categories db)))

(defn regex [search-term]
  (js/RegExp. search-term "i"))

(defn search-fn-for-term [search-term]
  (comp boolean (partial re-find (regex search-term))))

(defn search-categories [db search-term]
  (if (seq search-term)
    (let [search-fn (search-fn-for-term search-term)]
      (->> (concat (d/q '[:find ?category :in $ ?search-fn :where
                          [?category :category/name ?name]
                          [(?search-fn ?name)]]
                        db search-fn)
                   (d/q '[:find ?category :in $ ?search-fn :where
                          [?link :link/category ?category]
                          [?link :link/title ?title]
                          [(?search-fn ?title)]]
                        db search-fn)
                   (d/q '[:find ?category :in $ ?search-fn :where
                          [?link :link/category ?category]
                          [?link :link/uri ?uri]
                          [(?search-fn ?uri)]]
                        db search-fn)
                   (d/q '[:find ?category :in $ ?search-fn :where
                          [?link :link/category ?category]
                          [?link :link/tags ?tag]
                          [?tag :tag/name ?name]
                          [(?search-fn ?name)]]
                        db search-fn))
           distinct
           (prepare-categories db)))
    #{}))

(defn prepare-links [db links]
  (->> links
       (prepare-entities db)
       (sort-by :link/title)))

(defn search-links-in-category [db category search-term]
  (if (seq search-term)
    (let [category  (:db/id category)
          search-fn (search-fn-for-term search-term)]
      (prn category)
      (->> (concat (d/q '[:find ?link :in $ ?category ?search-fn :where
                          [?link :link/category ?category]
                          [?link :link/title ?title]
                          [(?search-fn ?title)]]
                        db category search-fn)
                   (d/q '[:find ?link :in $ ?category ?search-fn :where
                          [?link :link/category ?category]
                          [?link :link/uri ?uri]
                          [(?search-fn ?uri)]]
                        db category search-fn)
                   (d/q '[:find ?link :in $ ?category ?search-fn :where
                          [?link :link/category ?category]
                          [?link :link/tags ?tag]
                          [?tag :tag/name ?name]
                          [(?search-fn ?name)]]
                        db category search-fn))
           distinct
           (prepare-links db)))
    #{}))

(defn search-matches-tag? [tag-name search-term]
  (and (seq search-term)
       (re-find (regex search-term) tag-name)))
