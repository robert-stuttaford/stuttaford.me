---
layout: post
title: Om interop with 3rd party JS libs
description: Discover how to integrate non-React Javascript libraries into Om ClojureScript applications.
tags: om, clojurescript, core.async, om-tools, ace-editor
archive: true
---

A couple days ago, I cheekily tweeted a piece of code for embedding
the fantastic [Ace](http://ace.c9.io/) Javascript editor in an Om app.
I say cheekily, because I wrote the code in the
[RefHeap](https://www.refheap.com) editor and didn't actually test it!


<blockquote class="twitter-tweet" lang="en" align="center">
<p>The essence of how to use icky mutable JS components like Ace editor with <a href="https://twitter.com/hashtag/Om?src=hash">#Om</a> - well, with any <a href="https://twitter.com/hashtag/ReactJS?src=hash">#ReactJS</a> really:&#10;&#10;<a href="https://t.co/Tjx69JFsIk">https://t.co/Tjx69JFsIk</a></p>&mdash; Robert Stuttaford (@RobStuttaford) <a href="https://twitter.com/RobStuttaford/statuses/497397737923833856">August 7, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


Anyone who was brave enough to test it out using this code as a
starting point would have run into several issues. This post attempts
to make up for those, by sharing how it works and providing usable code!

**tl;dr**: Here's the full source:

[https://github.com/robert-stuttaford/om-ace-demo](https://github.com/robert-stuttaford/om-ace-demo/blob/master/src/om_ace_demo.cljs#L1)

## The basic idea

So, as you likely already know,
[React](http://facebook.github.io/react/) (for which
[Om](https://github.com/swannodette/om) is a ClojureScript wrapper)
does things a little differently; it manages two virtual DOMs - one
representing the live DOM and one representing the new version of the
view you want rendered. It diffs between those two to determine the
minimum set of changes to make to the live DOM whenever your app has
to re-render.

What this means for interop with non-React code is that we have to
opt React out of managing the live DOM for this code, but only once
React has created it for us. Once it's created, we represent to React
that nothing about the view changes from state change to state change.

This causes the diff to yield no changes for this particular part of
the virtual DOM, which of course means no mutations will occur to the
live DOM nodes.

## Getting Ace on the page

We're going to go through a working example with Ace. We'll look at:

1. How to instantiate an Ace instance
1. How to populate the text editor from the Om global app state
1. How to track the changes occuring in Ace as they happen
1. And how to persist those changes back to the global Om state

We'll use several life cycle protocol functions to interop with Ace. Here's a [full reference of all the protocols in Om](https://github.com/swannodette/om/wiki/Documentation#life-cycle-protocols).

This code comes with a couple bonuses:

* We'll see how to use
  [core.async](https://clojure.github.io/core.async/) to have two Om
  components coordinate.
* We'll use the simple but seriously handy `defcomponent` from
  [om-tools](https://github.com/Prismatic/om-tools), which <accronym
  title="Don't repeat yourself">DRY</accronym>s up all the `reify IProtocol`
  code you see in vanilla Om applications.
* Also, we'll use [Ŝablono](https://github.com/r0man/sablono) to
  render HTML rather than the `om.dom` namespace provided by Om. I
  personally find it a lot easier to read and write.

Let's jump in!

### 1. Instantiate an Ace instance

```clojure
(def *ace* (atom nil))                              ;; 1

(defcomponent editor-area [data owner]
  (render [_]
    (html [:div#ace {:style {:height "400px"}}]))   ;; 2
  (did-mount [_]                                    ;; 3
    (let [ace-instance (.edit js/ace                ;; 4
                              (.getDOMNode owner))] ;; 5
      (reset! *ace* ace-instance))))                ;; 6
```

1. First, we set up an `atom` to store the reference to Ace so that we
   can work with it later on. **Fair warning**: this does mean you can
   only use one instance of this component at a time - yay global
   mutable state!
1. We render a single `div` using Ŝablono's `html` macro.
1. We use the `did-mount` (from the `IDidMount` protocol), as this is
   called once, right after the component has been made live on the DOM.
1. We invoke Ace's `edit` decorator function, passing it the DOM node
   that we get by...
1. Using React's `getDOMNode` function, passing in `owner`, which is
   the backing React component provided by Om.
1. We store the Ace reference in the atom.

### 2. Populate the text editor from the Om global app state

We'll do this in two places; once on starting Ace up, and with a
separate life cycle protocol function. First, a helper function:

```clojure
(defn set-value! [value]
  (let [ace-instance (deref *ace*)                            ;; 1
        cursor       (.getCursorPositionScreen ace-instance)] ;; 2
    (.setValue ace-instance value cursor)))                   ;; 3
```

1. We get the reference from the atom.
1. We grab the current text cursor position of the editor...
1. And pass it back in when setting the new value, so that the cursor
   doesn't jump around, if at all possible - sometimes it will if the
   text changes dramatically.

Ok, so now we can set the editor value from the global state, using a
key of `:value` for this particular state map:

```clojure
(defcomponent editor-area [data owner]
  ...
  (did-mount [_]
    (let [ace-instance (.edit js/ace
                              (.getDOMNode owner))]
      (reset! *ace* ace-instance)
      (set-value! (:value data))))                  ;; 1
  (will-update [_ next-data next-state]
    (set-value! (:value next-data))))               ;; 2
```

1. Set it on start up from the initial Om cursor.
2. Use `will-update` (from, you guessed it, the `IWillUpdate`
   protocol) to set the data from the incoming state transition cursor.

Great! We have an editor on the page!

## 3. Track the changes in Ace

Now we'll use Ace's on change callback to catch changes as they
happen.

```clojure
(defn change-handler []                             ;; 1
  ???)

(defcomponent editor-area [data owner]
  ...
  (did-mount [_]
    (let [ace-instance (.edit js/ace
                              (.getDOMNode owner))]
      (reset! *ace* ace-instance)
      (.. ace-session
          getSession
          (on "change" change-handler))             ;; 2
      (set-value! (:value data))))
  ...)
```

1. Create a change handler function.
2. Here we're using Clojure's nifty `..` interop convenience - here's the
   [reference on Grimoire](http://grimoire.arrdem.com/1.6.0/clojure.core/DOT__DOT/)
   for that.

Ok, but what do we put into that change handler?

- - -

#### Interlude

At this point, we *could* simply write the changes right back into the
global app state, but there's a problem with this approach.

Doing so will cause that `will-update` function to run, which will
unnecessarily update Ace to the value it already has. Remember,
React isn't managing this DOM node - there's no fancy diffing to save
extraneous work!

Instead, we'll use
[Om 0.7.1](https://github.com/swannodette/om/blob/master/CHANGES.md#071)'s
new experimental `set-state-nr!` function to keep track of the changes
without triggering a re-render, and provide a Save button for the user
to click when they want their changes committed.

That way, we have the editor value available immediately, but only
commit it when the user wants it. Why might we want it immediately? Well, we
might decide to provide a real-time preview or validation capability!

We also need another component to compose the Save button and the
editor we've just built, as we can't add any more UI to this component
thanks to the way we're opting out React rendering.

Because of this, we'll need to coordinate between the container and
editor components when the user clicks Save, so that the editor can
transfer the editor value from local to global state.

That's where the core.async comes in.

- - -

## 3. Track the changes in Ace - round two

Right. Let's get the value from Ace into local state:

```clojure
(defn change-handler [owner]
  (om/set-state-nr! owner :edited-value             ;; 1
                    (.getValue (deref *ace*))))     ;; 2

(defcomponent editor-area [data owner]
  ...
  (did-mount [_]
    (let [ace-instance (.edit js/ace
                              (.getDOMNode owner))]
      (reset! *ace* ace-instance)
      (.. ace-instance
          getSession
          (on "change" #(change-handler owner))     ;; 3
      (set-value! (:value data))))
  ...)
```

1. Our handler writes an `:edited-value` to the component's local
   state via `owner`...
1. Using the value from the Ace instance.
1. We make sure to update the event listener to pass in `owner`.

Now we have the whole interop round-trip working - the text value
going into Ace and back out again.

Let's put that container together:

```clojure
(defcomponent editor [data owner]
  (init-state [_] {:editor-chan (chan)})                     ;; 1
  (render-state [_ {:keys [editor-chan]}]                    ;; 2
    (html
     [:div
      [:button {:onClick #(put! editor-chan :save!)} "Save"] ;; 3
      (->editor-area data                                    ;; 4
                     {:init-state                            ;; 5
                      {:editor-chan editor-chan}})])))       ;; 6
```

There's quite a bit going on here:

1. We use the `init-state` function (yep, from the `IInitState`
   protocol) to create a new async channel. It's important to do this
   inside the right life cycle function, as we only want it to be created
   once.
1. We use the `render-state` function (you're right, from the
   `IRenderState` protocol), which is simply the `IRender` protocol
   with a convenient way to get at the local state baked in; as a function
   argument. Thanks to that, we destructure the channel out.
1. We have our mighty Save button, which simply writes the keyword `:save!` to
   the channel every time it is clicked.
1. We instantiate our `editor-area` component, using om-tools'
   shorthand <br>`->component` syntax, which boils down to "`om/build component`".
1. We pass an initial state for our editor using
   [om/build](https://github.com/swannodette/om/wiki/Documentation#build)'s
   third argument. This will become available as local state inside
   `editor-area`.
1. And that state is simply a map with the channel we created at 1.

Ok. Now we have the appropriate signalling in place to know when to
transfer the value from local to global state.

Now, inside `editor-area`, we just need to respond to that signal:

```clojure
(defcomponent editor-area [data owner]
  ...
  (will-mount [_]                                          ;; 1
    (let [editor-chan (om/get-state owner :editor-chan)]   ;; 2
      (go                                                  ;; 3
        (while true                                        ;; 4
          (when (= :save! (<! editor-chan))                ;; 5
            (when-let [edited-value
                       (om/get-state owner :edited-value)] ;; 6
              (om/update! data :value edited-value)))))))  ;; 7
  ...)
```

1. Set everything up in the `will-mount` function (from the
   `IWillMount` protocol, of course). We could do this in `did-mount`,
   too, but now you're aware that `will-mount` exists :-)
1. Grab the channel from local state.
1. Start a core.async `go` block, which allows us to write
   synchronous-looking but-actually-asynchronous code.
1. Loop endlessly, so that we can catch each successive channel value.
1. Using `<!`, block until there's a value on the channel, and if that
   value is `:save!`...
1. Try to get the edited value from local state...
1. And if it's there, use `om/update!` to place it in the global state map.

Phew! Now we have everything wired up.

## Conclusion

Here's the full source, again:

[https://github.com/robert-stuttaford/om-ace-demo](https://github.com/robert-stuttaford/om-ace-demo/blob/master/src/om_ace_demo.cljs#L1)

We have covered quite a lot ground in just ±50 lines of code:

* We got a mutable non-React Javascript library to live in harmony with an
  Om/React app, which showed us Javascript interop syntax and several Om life
  cycle protocols in action.
* We used core.async to coordinate between two components, thus avoiding
  callbacks between them.
* We saw how om-tools and Ŝablono look when used with Om, which is
  mostly a feel-good thing, I believe it helps a lot in the long run.

## Special thanks

To [Luke VanderHart](https://twitter.com/levanderhart) for the
conversation that led me to this insight.
