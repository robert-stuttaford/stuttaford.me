(ns stuttaford.db
  (:use [plumbing.core])
  (:require [datomic.api :as d]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Database

(def uri "datomic:free://localhost:4334/stuttaford")

(defprotocol DatomicConnection
  (as-conn [_]))

(extend-protocol DatomicConnection
  datomic.Connection
  (as-conn [c] c)
  java.lang.String
  (as-conn [dburi] (d/connect dburi)))

(defprotocol DatabaseReference
  (as-db [_]))

(extend-protocol DatabaseReference
  datomic.db.Db
  (as-db [db] db)
  datomic.Connection
  (as-db [conn] (d/db conn))
  java.lang.String
  (as-db [dburi] (as-db (d/connect dburi))))

(defprotocol EntityReference
  (id [_])
  (entity [_ db]))

(extend-protocol EntityReference
  datomic.query.EntityMap
  (id [e] (:db/id e))
  (entity [e db] e)
  clojure.lang.PersistentArrayMap
  (id [m] (:db/id m))
  (entity [m db] (d/entity (as-db db) (id m)))
  clojure.lang.PersistentHashMap
  (id [m] (:db/id m))
  (entity [m db] (d/entity (as-db db) (id m)))
  java.lang.Long
  (id [id] id)
  (entity [id db] (d/entity (as-db db) id))
  datomic.db.Datum
  (id [{:keys [e]}] e)
  (entity [{:keys [e]} db] (d/entity (as-db db) e)))

(def tempid (partial d/tempid :db.part/user))

(defn all [db attr]
  (let [db (as-db db)]
    (some->> (seq (d/datoms db :aevt attr))
             (map #(entity % db)))))

(defn one [db attr value]
  (let [db (as-db db)]
    (some-> (seq (d/datoms db :avet attr value))
            first
            (entity db))))

(declare schema)

(defn start-database! []
  (d/create-database uri)
  (d/transact (as-conn uri) schema))

(defn reset-database! []
  (d/delete-database uri)
  (start-database!))

(comment (reset-database!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Schema

(def schema
  [{:db/doc "Category. Required."
    :db/ident :category/name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique :db.unique/value
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/doc "Category sort. Required."
    :db/ident :category/sort
    :db/valueType :db.type/long
    :db/cardinality :db.cardinality/one
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/doc "Tag. Required."
    :db/ident :tag/name
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique :db.unique/value
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/doc "Link title. Required."
    :db/ident :link/title
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/doc "Link uri. Required."
    :db/ident :link/uri
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique :db.unique/value
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/doc "Link category. Required."
    :db/ident :link/category
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/doc "Link description."
    :db/ident :link/description
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/doc "Link image."
    :db/ident :link/image
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/doc "Link tags."
    :db/ident :link/tags
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many
    :db/id #db/id[:db.part/db]
    :db.install/_attribute :db.part/db}

   {:db/id #db/id[:db.part/user]
    :db/ident :append-sort-in-scope
    :db/fn #db/fn {:lang "clojure"
                   :params [db new-id scope-attr sort-attr]
                   :code [[:db/add new-id sort-attr
                           (->> (datomic.api/datoms db :aevt scope-attr)
                                (map :e)
                                (map (partial datomic.api/entity db))
                                (map sort-attr)
                                (reduce max 0)
                                (inc))]]}}

   {:db/id #db/id[:db.part/user]
    :db/ident :set-sort-in-scope
    :db/fn #db/fn {:lang "clojure"
                   :params [db scope-attr sort-attr sorted-ids]
                   :code (let [ids (map :e (datomic.api/datoms db :aevt scope-attr))]
                           (->> sorted-ids
                                (clojure.set/difference ids)
                                (concat sorted-ids)
                                (map-indexed (fn [idx id]
                                               [:db/add id sort-attr idx]))))}}])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Categories

(defn new-category-tx [name]
  (let [id (tempid)]
    [[:db/add id :category/name name]
     [:append-sort-in-scope id :category/name :category/sort]]))

(defn update-category-sort-tx [sorted-category-ids]
  [[:set-position-in-scope :category/name :category/sort sorted-category-ids]])

(defn find-or-create-category! [uri name]
  (if-let [category (one (as-db uri) :category/name name)]
    category
    (let [category-id (tempid)
          category-tx [[:db/add category-id :category/name name]
                       [:append-sort-in-scope category-id :category/name :category/sort]]
          {:keys [db-after tempids]} @(d/transact (as-conn uri) category-tx)]
      (entity (d/resolve-tempid db-after tempids category-id) db-after))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Tags

(defn new-tag-tx [name]
  [[:db/add (tempid) :tag/name name]])

(defn find-or-create-tag! [uri name]
  (if-let [tag (one (as-db uri) :tag/name name)]
    tag
    (let [tag-id (tempid)
          tag-tx [[:db/add tag-id :tag/name name]]
          {:keys [db-after tempids]} @(d/transact (as-conn uri) tag-tx)]
      (entity (d/resolve-tempid db-after tempids tag-id) db-after))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Links

(defnk new-link-tx [title uri category {tags []} {description nil} {image nil}]
  [(cond-> {:db/id         (tempid)
            :link/title    title
            :link/uri      uri
            :link/category (id category)}
           description (assoc :link/description description)
           image       (assoc :link/image image)
           (seq tags)  (assoc :link/tags (map id tags)))])

(defn ensure-link-category-and-tags! [uri link]
  (-> link
      (update-in [:category] (partial find-or-create-category! uri))
      (update-in [:tags] (partial map (partial find-or-create-tag! uri)))))

(defn create-link! [uri link]
  (let [link-tx (->> link (ensure-link-category-and-tags! uri) new-link-tx)
        link-id (id (first link-tx))
        {:keys [db-after tempids]} @(d/transact (as-conn uri) link-tx)]
    (entity (d/resolve-tempid db-after tempids link-id) db-after)))