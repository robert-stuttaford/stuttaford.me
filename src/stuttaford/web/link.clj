(ns stuttaford.web.link
  (:use [plumbing.core])
  (:require [clojure.string :as string]
            [stuttaford.db :as db]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; View links

(defn tag-list [tags]
  (for [tag (->> tags
                 (map :tag/name)
                 sort)]
    (list [:span.tag tag] " ")))

(defn all-tags []
  (when-let [tags (seq (db/all db/uri :tag/name))]
    (list
     [:h3 "All tags"]
     [:p (tag-list tags)])))

(defn link-item [{:keys [link/title link/uri link/description link/image link/tags] :as link}]
  (list
   [:p [:a {:href uri :title title} title] " "
    (when (seq tags)
      (tag-list tags))]
   (when description
     [:p description])))

(defn links []
  {:title   "Clojure Links"
   :layout  "page"
   :content
   (let [categories (->> (db/all db/uri :category/name)
                         (sort-by :category/sort))]
     [:div
      [:a {:href "/links/new"} "Add link"]
      (all-tags)
      (for [category categories]
        (list
         [:h3 (:category/name category)]
         [:ul
          (for [link (:link/_category category)]
            [:li (link-item link)])]))])})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Create links

(defn new-form []
  {:title   "New link"
   :layout  "page"
   :css     ["public/bootstrap/css/bootstrap.min.css"]
   :content
   [:div
    [:form {:role "form" :method "POST"}
     [:div.form-group
      [:label {:for "title"} "Title"]
      [:input.form-control {:type "text" :name "title" :required "required"}]]
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
      [:input.form-control {:type "text" :name "tags" :required "required"
                            :placeholder "tag 1, tag 2, tag 3"}]]
     [:button.btn.btn-default {:type "submit"} "Save link"]]
    [:h3 "All categories"]
    [:p (for [category (->> (db/all db/uri :category/name)
                            (sort-by :category/sort)
                            (map :category/name))]
          (list [:span.tag category] " "))]
    (all-tags)]})

(defn split-and-clean-tags [tags]
  (->> (string/split tags #",")
       (map string/trim)
       (map string/lower-case)))

(defn save-link! [params]
  (let [params (-> params
                   (update-in [:title]    string/trim)
                   (update-in [:uri]      string/trim)
                   (update-in [:category] string/trim)
                   (update-in [:tags]     split-and-clean-tags))
        params (if (-> params :description seq)
                 (update-in params [:description] string/trim)
                 (dissoc params :description))]
    (db/create-link! db/uri params))
  :ok)