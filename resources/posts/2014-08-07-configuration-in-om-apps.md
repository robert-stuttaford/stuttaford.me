---
layout: post
title: Configuration in Om apps
description: A simple pattern for providing configuration data to all the components in an Om app.
tags: om, clojurescript
---

I've found a nice and simple way for making configuration available to
all components in a ClojureScript
[Om](https://github.com/swannodette/om) application.

As long as you have a React component reference, typically named
`owner` in Om, you can use this pattern.

The code that follows assumes a `:config` key in the root of your
state map, and it assumes that the value for that key is also a map.

```clojure
(def state
  (atom {:config {:media-path "/images/content/"}
         :header {:logo "avengers-logo.jpg"
                  :title "The Avengers"}}))
```

Given that, we bootstrap the Om application:

```clojure
(om/root app state
         {:target (. js/document (getElementById "app"))
          :shared {:config (:config @state)}})
```

As you can see on the last line, we put `:config` into the `:shared`
state facility that Om provides, which is available to all components
from this `om/root`.


Of course, it's still available directly to the root component, as
well, but now we'll have a consistent way to reach config from
anywhere.


To access the config from within any component, however deeply nested,
we use `om/get-shared`:


```clojure
(defn header [data owner]
  (reify
    IRender
    (render [_]
      (let [config (om/get-shared owner :config)]
        (dom/div nil
                 (dom/img #js {:src (str (:media-path config)
                                         (:logo data))})
                 (dom/h1 nil (:title data)))))))
```

It's important to point out that the `:shared` state can only be set
once at `om/root`, so it's not meant as a global mutable state - we
have `atom` for that :-)

At this point, we're good. We have configuration data anywhere we need
it. We can go one step further, though, and provide a simpler
abstraction for the rest of our app to use:

```clojure
(defn config
  ([owner]
     (or (om/get-shared owner :config) {}))
  ([owner key]
     (get (config owner) key)))
```

When called with just the owner, you'll get the whole config map back.
This is great when you need access to several keys and want to
destructure them out. When called with the owner and a key, it returns
whatever value that key has.

Using this function also ensures that you have an empty map to work
with just in case you don't have `:config` in your shared state.

Now that we have that, what does our header component look like?

```clojure
(defn header [data owner]
  (reify
    IRender
    (render [_]
      (dom/div nil
               (dom/img #js {:src (str (config owner :media-path)
                                       (:logo data))})
               (dom/h1 nil (:title data))))))
```

That's a fair bit simpler to read than before. It's not *that* much
cleaner, but when you have many components, the savings add up!

Here's the full runnable source:

```clojure
(ns configuration-pattern
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn config
  ([owner]
     (or (om/get-shared owner :config) {}))
  ([owner key]
     (get (config owner) key)))

(def state
  (atom {:config {:media-path "/images/content/"}
         :header {:logo "avengers-logo.jpg"
                  :title "The Avengers"}}))

;; without config helper
(defn header [data owner]
  (reify
    IRender
    (render [_]
      (let [config (om/get-shared owner :config)]
        (dom/div nil
                 (dom/img #js {:src (str (:media-path config)
                                         (:logo data))})
                 (dom/h1 nil (:title data)))))))

;; with config helper
(defn header [data owner]
  (reify
    IRender
    (render [_]
      (dom/div nil
               (dom/img #js {:src (str (config owner :media-path)
                                       (:logo data))})
               (dom/h1 nil (:title data))))))

(defn app [data owner]
  (reify
    IRender
    (render [_]
      (om/build header (:header data)))))

(om/root app state
         {:target (. js/document (getElementById "app"))
          :shared {:config (:config @state)}})
```

And there you have it. One less thing to worry about!
