(ns stuttaford.articles
  (:require [clojure.string :as string]
            [cljs.core.async :refer [<! chan put! close!]]
            [om-bootstrap.button :as b]
            [om-bootstrap.input :as i]
            [om-bootstrap.panel :as p]
            [om-bootstrap.random :as r]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponentk]]
            [goog.dom]
            [sablono.core :as html :refer-macros [html]]
            [stuttaford.om.common :as common :refer [config control-chan]])
  (:require-macros [cljs.core.async.macros :as csp :refer [go]]))

(enable-console-print!)

(def variant-names [:a :b :c])

(def PARAGRAPH-BREAK "PARAGRAPH-BREAK")
(def paragraph-break-variants (into {} (for [n variant-names] [n "\n\n"])))

(defn prepare-sentences [article]
  (->> (string/replace article #"\n\n" (str "\n\n" PARAGRAPH-BREAK "\n\n"))
       (re-seq #"[^\.!\?\n]+(?:[\.!\?\n]|$)+")
       (map string/trim)
       (remove string/blank?)
       (map (fn [sentence]
              (if (= sentence PARAGRAPH-BREAK)
                {:kind     :paragraph-break
                 :variants paragraph-break-variants}
                {:kind     :sentence
                 :source   sentence
                 :variants {}})))
       doall
       vec))

(def sentence? (comp (partial = :sentence) :kind))

(defn has-variants? [source-article-sentences]
  (->> source-article-sentences
       (filter sentence?)
       (remove (comp not seq :variants))
       empty?
       not))

(defn variant-is-complete? [source-article-sentences variant]
  (prn (->> source-article-sentences
            (filter sentence?)
            (filter (comp string/blank? variant :variants))
            ))
  (->> source-article-sentences
       (filter sentence?)
       (filter (comp string/blank? variant :variants))
       empty?))

(defn compose-variant [source-article-sentences variant]
  (string/replace (->> source-article-sentences
                       (map (comp variant :variants))
                       (interpose " ")
                       (apply str)
                       string/trim)
                  #"\n " "\n"))

(defn count-words [text]
  (-> text
      (string/replace #"\s+" " ")
      (string/split #" ")
      count))

(defn word-count [data source-or-variant]
  (if (= source-or-variant :source)
    (-> data :source-article count-words)
    (-> data :source-article-sentences (compose-variant source-or-variant) count-words)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Actions

(defmulti perform-action (fn [cursor op value debug?]
                           (when debug?
                             (prn "ACTION:" op value))
                           op))

(defmethod perform-action :default [cursor op value]
  (throw (str "Missing perform-method op: " op)))

(defmethod perform-action :set-view [cursor op value]
  (om/update! cursor :view value))

(defmethod perform-action :set-source-article [cursor op value]
  (om/update! cursor :source-article value)
  (om/update! cursor :source-article-sentences (prepare-sentences value)))

(defn do-action! [owner action]
  (put! (control-chan owner) action))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Source article

(def source-article-placeholder
  "Source article from which sentences will be presented for rewriting.

Once you start rewriting, this input will be locked.")

(defn set-source-article [owner e]
  (do-action! owner
              [:set-source-article
               (.. (om/get-node owner "source-article")
                   -value)]))

(defcomponentk source-article [[:data {source-article nil} {source-article-sentences []}] owner]
  (render-state [_ state]
    (html
     [:div
      (i/input (cond-> {:type        "textarea"
                        :placeholder source-article-placeholder
                        :class       "source-article"
                        :ref         "source-article"
                        :value       source-article
                        :on-change   (partial set-source-article owner)
                        :autofocus   true}
                       (has-variants? source-article-sentences)
                       (assoc :disabled true)))
      (when (has-variants? source-article-sentences)
        [:p.warning "To prevent muddling variant sentence order, the source article is now read-only."])])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Rewrite articles

(defn set-variant [owner cursor variant]
  (let [value (string/trim (.. (om/get-node owner (str "variant-" (name variant)))
                               -value))]
    (if-not (string/blank? value)
      (om/update! cursor [:variants variant] value)
      (om/transact! cursor [:variants] #(dissoc % variant)))))

(defcomponentk rewrite-sentence [[:data source variants :as data] owner]
  (render-state [_ state]
    (html
     [:div.sentence
      [:p.source-sentence source]
      (for [variant variant-names
            :let [variant-name (name variant)]]
        [:div.input
         [:div.index variant-name]
         (let [value (variant variants)]
           (i/input {:type      "textarea"
                     :class     (str "variant "
                                     (if (string/blank? value)
                                       "invalid"
                                       "valid"))
                     :ref       (str "variant-" variant-name)
                     :value     value
                     :on-change #(set-variant owner data variant)}))])])))

(defcomponentk rewrite-articles [[:data {source-article-sentences []}] owner]
  (render-state [_ state]
    (html
     [:div
      (if (seq source-article-sentences)
        (om/build-all rewrite-sentence (->> source-article-sentences
                                            (filter sentence?)
                                            (map-indexed (fn [i sentence]
                                                           (assoc sentence :index i)))))
        [:p "No source article."])])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Output articles

(defcomponentk output-articles [[:data {source-article-sentences []}] owner]
  (render-state [_ state]
    (let [composed-variants (->> variant-names
                                 (map (juxt (comp name identity)
                                            (partial compose-variant source-article-sentences)))
                                 (remove (comp string/blank? second)))]
      (html
       [:div
        (if (seq composed-variants)
          (html
           [:div
            (for [[variant-name composed] composed-variants
                  :let [ref (str "output-article-" variant-name)]]
              [:div.composed-variant
               [:h1 "Variant " variant-name]
               (i/input {:type     "textarea"
                         :class    "source-article"
                         :ref      ref
                         :value    composed
                         :readonly true
                         :on-click #(doto (om/get-node owner ref)
                                      (.focus)
                                      (.select))})])])
          [:p "No variants."])]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Top nav

(defcomponentk top-nav [[:data view {source-article-sentences []} :as data] owner
                        [:opts nav-items]]
  (render-state [_ state]
    (b/toolbar
     {}
     (html [:div.articles "ARTICLES"])
     (b/button-group
      {}
      (for [[id [label]] nav-items]
        (b/button (cond-> {:on-click #(do-action! owner [:set-view id])}
                          (= view id) (assoc :class "active"))
                  label))
      (when (seq source-article-sentences)
        (html
         [:div.variants-status
          "Status: "
          (for [variant variant-names
                :let [variant-name (name variant)]]
            (r/label {:bs-style (if (variant-is-complete? source-article-sentences variant)
                                  "success"
                                  "warning")} variant-name))]
         [:div.word-counts
          "Words counts"
          (r/label {} (word-count data :source))
          (for [variant variant-names
                :let [variant-name (name variant)]]
            (r/label {} (word-count data variant)))]))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Nav Items

(def nav-items
  {:source-article   ["Source" source-article]
   :rewrite-articles ["Rewrite" rewrite-articles]
   :output-articles  ["Output" output-articles]})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App startup

(defcomponentk app-view [[:data view {source-article-sentences []} :as data] owner]
  (will-mount [_]
    (let [c (control-chan owner)]
      (go (while true
            (when-let [[op value] (<! c)]
              (perform-action data op value (config owner :debug?)))))))
  (will-unmount [_]
    (close! (control-chan owner)))
  (did-mount [_]
    #_(aset js/window "onbeforeunload"
          (constantly "This is a confirmation, just in case you have unsaved work.")))
  (render-state [_ state]
    (html
     (let [[label view-component] (view nav-items)]
       (p/panel {:header (->top-nav data {:opts {:nav-items nav-items}})}
                (if view-component
                  (om/build view-component data)
                  (html [:div])))))))

(defn ^:export init
  [app-id state-id debug?]
  (common/start app-id state-id app-view {:shared {:control-chan (chan)}} debug?))

