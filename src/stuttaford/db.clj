(ns stuttaford.db
  (:require [clojure.edn :as edn]
            [clojure.string :as string]
            [datomic.api :as d]
            [net.cgrand.enlive-html :as html])
  (:import java.net.URL))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Database

(def uri "datomic:free://localhost:4334/stuttaford")

(def conn #(d/connect uri))

(def db (comp d/db conn))

(def datomic-schema?
  (comp #{"db" "db.install" "db.excise" "db.alter" "fressian"}
        namespace))

(declare schema)

(defn start-database! []
  (d/create-database uri)
  (d/transact (d/connect uri) schema))

(defn reset-database! []
  (d/delete-database uri)
  (start-database!))

(comment (reset-database!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Schema

(def schema
  [{:db/doc         "Category. Required."
    :db/ident       :category/name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/value}

   {:db/doc         "Tag. Required."
    :db/ident       :tag/name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/value}

   {:db/doc         "Link title. Required."
    :db/ident       :link/title
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   {:db/doc         "Link slug. Required."
    :db/ident       :link/slug
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/value}

   {:db/doc         "Link uri. Required."
    :db/ident       :link/uri
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/value}

   {:db/doc         "Link category. Required."
    :db/ident       :link/category
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}

   {:db/doc         "Link description."
    :db/ident       :link/description
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   {:db/doc         "Link image."
    :db/ident       :link/image
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   {:db/doc         "Link tags."
    :db/ident       :link/tags
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}])

(defn codex-datoms []
  (-> (URL. "http://www.stuttaford.me/codex/")
      html/html-resource
      (html/select [(html/attr= :data-component "codex") :script])
      first
      html/text
      edn/read-string
      :db
      :datoms))

(defn rebuild-db-from-public-site! []
  (d/delete-database uri)
  (d/create-database uri)
  (let [datoms (codex-datoms)
        conn   (conn)]
    @(d/transact conn schema)
    @(d/transact conn (map (fn [[e a v]]
                             [:db/add (str e) a (if (number? v)
                                                  (str v)
                                                  v)])
                           datoms))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Categories

(defn find-or-create-category! [db name]
  (if-let [category (d/entity db [:category/name name])]
    category
    (let [{:keys [db-after]} @(d/transact (conn)
                                          [[:db/add "tempid.category"
                                            :category/name name]])]
      (d/entity db-after [:category/name name]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Tags

(defn find-or-create-tag! [db name]
  (if-let [tag (d/entity db [:tag/name name])]
    tag
    (let [{:keys [db-after]} @(d/transact (conn)
                                          [[:db/add "tempid.tag" :tag/name name]])]
      (d/entity db-after [:tag/name name]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Links

(defn to-slug [s]
  (-> (string/lower-case s)
      (string/replace #"'" "")
      (string/replace #"[^a-z0-9]+" "-")
      (string/replace #"(^-|-$)" "")))

(defn new-link-tx [{:keys [title slug uri category tags description image]
                     :or   {tags []}}]
  (cond-> {:db/id         "tempid.link"
           :link/title    title
           :link/slug     slug
           :link/uri      uri
           :link/category (:db/id category)}
    description (assoc :link/description description)
    image       (assoc :link/image image)
    (seq tags)  (assoc :link/tags (map :db/id tags))))

(defn ensure-link-category-and-tags! [db link]
  (-> link
      (update :category (partial find-or-create-category! db))
      (update :tags (partial map (partial find-or-create-tag! db)))))

(defn create-link! [db link]
  (let [link-tx (->> link
                     (ensure-link-category-and-tags! db)
                     new-link-tx)
        {:keys [db-after]} @(d/transact (conn) [link-tx])]
    (d/entity db-after [:link/slug (:link/slug link-tx)])))

(defn update-link-tx [{:keys [id title slug uri description image]}]
  [(cond-> {:db/id      id
            :link/title title
            :link/slug  slug
            :link/uri   uri}
     description (assoc :link/description description)
     image       (assoc :link/image image))])

(defn delete-link! [slug]
  @(d/transact (conn) [[:db.fn/retractEntity [:link/slug slug]]]))

(defn update-link! [db original-slug link]
  (when-let [link-entity (d/entity db [:link/slug original-slug])]
    (let [link-id  (:db/id link-entity)
          link-tx  (update-link-tx (assoc link :id link-id))
          db-after (:db-after @(d/transact (conn) link-tx))]
      (d/entity db-after link-id))))

(defn matches-tag [val tag]
  (= (string/lower-case val) (string/lower-case tag)))

(defn not-a-category [db tag]
  (empty? (d/q '[:find ?tn :in $ ?tn :where
                 [?c :category/name ?cn]
                 [(stuttaford.db/matches-tag ?cn ?tn)]]
               db tag)))

(defn not-a-link-title [db tag]
  (empty? (d/q '[:find ?tn :in $ ?tn :where
                 [?l :link/title ?ln]
                 [(stuttaford.db/matches-tag ?ln ?tn)]]
               db tag)))

(defn prepare-tag [tag]
  {:name (:tag/name tag)})

(defn prepare-link [link]
  (let [tags (->> link :link/tags (map prepare-tag) vec)]
    (cond-> {:name     (:link/title link)
             :uri      (:link/uri link)
             :category (-> link :link/category :category/name)}
      (:link/description link) (assoc :description (:link/description link))
      (:link/image link)       (assoc :image (:link/image link))
      (seq tags)               (merge {:tags        tags
                                       :tags-string (->> tags
                                                         (map :name)
                                                         (string/join " "))}))))

(defn prepare-category [category]
  {:name  (:category/name category)
   :links (->> category
               :link/_category
               (map prepare-link)
               vec)})

(defn datascript-schema-attr [db attr]
  (let [{:keys [value-type cardinality indexed unique is-component]}
        (d/attribute db attr)]
    (cond-> {}
      (= value-type :db.type/ref)          (assoc :db/valueType :db.type/ref)
      (= cardinality :db.cardinality/many) (assoc :db/cardinality :db.cardinality/many)

      indexed      (assoc :db/index true)
      unique       (assoc :db/unique unique)
      is-component (assoc :db/isComponent true))))

(defn datascript-schema [db attrs]
  (into {} (comp (map (juxt identity (partial datascript-schema-attr db)))
                 (filter (comp seq second)))
        attrs))

(defn datascript-datom [db [e a v]]
  [e (d/ident db a) v])

(defn datascript-db [db attrs]
  (let [attr-ids (set (map (partial d/entid db) attrs))]
    {:schema (datascript-schema db attrs)
     :datoms (into [] (comp (filter (comp attr-ids :a))
                            (map (partial datascript-datom db)))
                   (d/datoms db :eavt))}))
