(ns stuttaford.dive-into-datomic.content)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Datom

(def label-values
  {:entity      {:example "Robert"
                 :values  "17592186045505"}
   :attribute   {:example "likes"
                 :values  ":likes"}
   :value       {:example "Pizza"
                 :values  "\"pizza\""}
   :transaction {:example "today"
                 :values  "13194139534315"}
   :added       {:example nil
                 :values  "true"}})

(defn label [component labels]
  (if (= labels :names)
    (name (if (= :transaction component) :tx component))
    (get-in label-values [component labels])))

(def datom-content
  {:entity      [:ul
                 [:li "Represents an entity in the database."]
                 [:li "A Java Long, composed of the entity's partition and the transaction timestamp."]
                 [:li "Referred to as " [:span.code ":db/id"] " in entity and transaction maps."]]
   :attribute   [:ul
                 [:li "Refers to attribute in database schema."]
                 [:li "Stored as a Java Int."]
                 [:li "Most often referred to by its " [:span.code ":db/ident"] " value, which is a Clojure keyword."]]
   :value       [:ul
                 [:li "Value for this attribute on this entity."]
                 [:li "Can be one of several primitive types, such as String or Boolean."]
                 [:li "Attribues with a cardinality of many will produce a complete EAVT datom for each value in the set."]]
   :transaction [:ul
                 [:li "The Java Long that refers to the transaction that created this datom."]
                 [:li "Transactions automatically record a timestamp, which means we can always find out when any particular datom came to be."]
                 [:li "Transaction entities refer to their own entity ID here."]]
   :added       [:ul
                 [:li "A boolean indicating whether this datom was asserted (true) or retracted (false)."]]})
