(ns stuttaford.web.codex
  (:require [clojure.string :as string]
            [clojure.tools.logging :as log]
            [stuttaford.db :as db]
            [stuttaford.web.client :as client]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; View links

(defn tag-list [tags]
  (for [tag (->> tags
                 (map :tag/name)
                 sort)]
    (list [:span.tag tag] " ")))

(defn all-categories [link?]
  (when-let [categories (->> (db/all db/uri :category/name)
                             (sort-by :category/sort)
                             (map :category/name))]
    (list
     [:h3 "All Categories"]
     [:p (for [category categories]
           (list [:span.tag
                  (if link?
                    [:a {:href (str "#" category)} category]
                    category)] " "))])))

(defn all-tags []
  (when-let [tags (seq (db/all db/uri :tag/name))]
    (list
     [:h3 "All Tags"]
     [:p (tag-list tags)])))

(defn link-item [{:keys [link/title link/uri link/description link/tags link/slug]} admin?]
  (list
   [:p [:a {:href uri :title title} title] " "
    (when (seq tags)
      (tag-list tags)) " "
    (when admin?
      [:a.edit-link {:href (str "/links/edit/" slug)} "edit"])]
   (when description
     [:p description])))

(defn codex [& {:keys [admin? debug? dev?]}]
  {:title  "Clojure Codex"
   :layout "page"
   :content
   (list
    [:p.add-link-message
     "Have a link you'd like to add? Tweet the link to me @RobStuttaford on Twitter with "
     [:span.hashtag "#codex"] " or simply click here: " [:br]
     [:a.twitter-hashtag-button
      {:href         "https://twitter.com/intent/tweet?button_hashtag=codex&text=%40RobStuttaford%20Link%3A%20your-link-here"
       :data-related "RobStuttaford" :data-dnt "true"}]
     [:script "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');"]]
    (client/client-app "codex" debug? dev?
                       (cond-> {:db (db/datascript-db (db/as-db db/uri)
                                                      #{:category/name
                                                        :link/category
                                                        :link/description
                                                        :link/image
                                                        :link/slug
                                                        :link/tags
                                                        :link/title
                                                        :link/uri
                                                        :tag/name})
                                :admin? admin?}
                         admin? (assoc :admin? admin?))))})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Create links

(defn new-form []
  {:title  "New link"
   :layout "page"
   :css    ["bootstrap/css/bootstrap.min.css"]
   :content
   [:div
    [:form {:role "form" :method "POST"}
     [:div.form-group
      [:label {:for "title"} "Title"]
      [:input.form-control {:type "text" :name "title" :required "required"}]]
     [:div.form-group
      [:label {:for "slug"} "Slug"]
      [:input.form-control {:type "text" :name "slug" :placeholder "leave blank to generate one"}]]
     [:div.form-group
      [:label {:for "title"} "Description"]
      [:textarea.form-control {:rows "3" :name "description" :placeholder "optional"}]]
     [:div.form-group
      [:label {:for "uri"} "Address"]
      [:input.form-control {:type "url" :name "uri" :required "required" :placeholder "http://www.example.com"}]]
     [:div.form-group
      [:label {:for "category"} "Category"]
      [:input.form-control {:type "text" :name "category" :required "required"}]]
     [:div.form-group
      [:label {:for "tags"} "Tags"]
      [:input.form-control {:type "text" :name "tags" :placeholder "tag 1, tag 2, tag 3"}]]
     [:button.btn.btn-default {:type "submit"} "Save link"]]
    (all-categories false)
    (all-tags)]})

(defn split-and-clean-tags [link-title category-name tags]
  (->> (string/split tags #",")
       (map string/trim)
       (map string/lower-case)
       (filter (partial db/not-a-category db/uri))
       (filter (partial db/not-a-link-title db/uri))
       (remove (partial = (string/lower-case category-name)))
       (remove (partial = (string/lower-case link-title)))))

(defn save-link! [params]
  (let [params (-> params
                   (update-in [:title]    string/trim)
                   (update-in [:uri]      string/trim)
                   (update-in [:category] string/trim))
        params (if (-> params :tags seq)
                 (update-in params [:tags] (partial split-and-clean-tags
                                                    (:title params) (:category params)))
                 (dissoc params :tags))
        params (if (-> params :slug seq)
                 params
                 (assoc params :slug (-> params :title db/to-slug)))
        params (if (-> params :description seq)
                 (update-in params [:description] string/trim)
                 (dissoc params :description))]
    (db/create-link! db/uri params))
  :ok)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Edit links

(defn edit-form [slug]
  (when-let [{:keys [link/title link/uri link/description] :as link}
             (db/one (db/as-db db/uri) :link/slug slug)]
    {:title  (str "Edit link: " title)
     :layout "page"
     :css    ["bootstrap/css/bootstrap.min.css"]
     :content
     [:div
      [:form {:role "form" :method "POST"}
       [:input {:type "hidden" :name "original-slug" :value slug}]
       [:div.form-group
        [:label {:for "title"} "Title"]
        [:input.form-control {:type "text" :name "title" :required "required" :value title}]]
       [:div.form-group
        [:label {:for "slug"} "Slug"]
        [:input.form-control {:type "text" :name "slug" :required "required" :value slug}]]
       [:div.form-group
        [:label {:for "title"} "Description"]
        [:textarea.form-control {:rows "3" :name "description" :placeholder "optional" :value description}]]
       [:div.form-group
        [:label {:for "uri"} "Address"]
        [:input.form-control {:type "url" :name "uri" :required "required" :placeholder "http://www.example.com" :value uri}]]
       [:div.form-group
        [:label "Category"]
        [:br]
        (-> link :link/category :category/name)]
       [:div.form-group
        [:label "Tags"]
        [:br]
        (->> link :link/tags tag-list)]
       [:button.btn.btn-default {:type "submit"} "Save link"]]]}))

(defn update-link! [params]
  (let [params (-> params
                   (update-in [:title]    string/trim)
                   (update-in [:uri]      string/trim))
        parmas (if-not (seq (:slug params))
                 (assoc params :slug (-> params :title db/to-slug))
                 params)
        params (if (-> params :description seq)
                 (update-in params [:description] string/trim)
                 (dissoc params :description))]
    (log/info params)
    (db/update-link! db/uri (:original-slug params) params))
  :ok)
