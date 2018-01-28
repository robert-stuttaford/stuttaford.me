(ns stuttaford.web.codex
  (:require [stuttaford.db :as db]
            [stuttaford.web.client :as client]))

(defn codex [{:keys [db dev?]}]
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
                       {:db (db/datascript-db db
                                              #{:link/tags
                                                :link/title
                                                :link/uri
                                                :tag/name})}))})

