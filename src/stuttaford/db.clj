(ns stuttaford.db
  (:require [clojure.edn :as edn]
            [datomic.client.api :as d]
            [net.cgrand.enlive-html :as html])
  (:import java.net.URL))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Database

(def codex
  (d/client {:server-type :peer-server
             :access-key  "codex"
             :secret      "codex"
             :endpoint    "localhost:8998"}))

(def conn #(d/connect codex {:db-name "codex"}))

(def db (comp d/db conn))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Schema

(def schema
  [{:db/ident       :link/uuid
    :db/valueType   :db.type/uuid
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/value}

   {:db/ident       :link/uri
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/value}

   {:db/ident       :link/title
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}

   {:db/ident       :link/tags
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}

   {:db/ident       :tag/name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/identity}])

(comment
  (d/datoms (db) {:index :eavt})

  (d/transact (conn) {:tx-data schema})

  (require 'datascript.core)

  (d/transact (conn)
              {:tx-data
               (for [{:keys [title uri tags]}
                     (edn/read-string (slurp "raw-codex.edn"))]
                 {:db/id      uri
                  :link/uuid  (datascript.core/squuid)
                  :link/uri   uri
                  :link/title title
                  :link/tags  (map (fn [tag]
                                     {:db/id    tag
                                      :tag/name tag})
                                   tags)})}))

(defn datascript-schema [db attrs]
  (->> (for [attr attrs]
         (let [{:db/keys [ident valueType cardinality indexed unique]}
               (d/pull db '[:db/ident
                            {:db/unique [:db/ident]}
                            {:db/valueType [:db/ident]}
                            {:db/cardinality [:db/ident]}]
                       attr)]
           [ident
            (cond-> {}
              (= (:db/ident valueType) :db.type/ref)
              (assoc :db/valueType :db.type/ref)

              (= (:db/ident cardinality) :db.cardinality/many)
              (assoc :db/cardinality :db.cardinality/many)

              indexed
              (assoc :db/index true)

              unique
              (assoc :db/unique (:db/ident unique)))]))
       (filter (comp seq second))
       (into {})))

(defn ea->v [db e a]
  (get (d/pull db [a] e) a))

(defn datascript-datom [db [e a v]]
  [e (ea->v db a :db/ident) v])

(defn datascript-db [db attrs]
  (let [attr-ids (set (map #(ea->v db % :db/id) attrs))]
    {:schema (datascript-schema db attrs)
     :datoms (into [] (comp (filter (comp attr-ids :a))
                            (map #(datascript-datom db %)))
                   (d/datoms db {:index :eavt}))}))

#_ (datascript-db (db)
                  #{:link/tags
                    :link/title
                    :link/uri
                    :tag/name})
