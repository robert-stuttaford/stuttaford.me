---
layout: post
title: Bridge dev diary: Events UI — Paying some tech debt
---

This is a development diary for the `bridge` project I'm working on, described in detail in my post:

[A Clojure learning journey](/2018/02/18/a-clojure-learning-journey/)

Since then, I've written other dev diary entries:

- [Bridge dev diary: Datomic mode](/2018/03/03/bridge-dev-diary--datomic-mode/) — 3 March, 2018
- [Bridge dev diary: Modelling access](/2018/03/17/bridge-dev-diary--modelling-access/) — 17 March, 2018
- [Bridge dev diary: Events API](/2018/03/31/bridge-dev-diary--events-api/) — 31 March, 2018
- [Bridge dev diary: Events UI](/2018/04/28/bridge-dev-diary—events-ui/) — 28 April, 2018

Today's diary entry covers the [changes in this diff](https://github.com/robert-stuttaford/bridge/compare/b599627...2cf89d2).

<hr>

[TOC]

<hr>

This is a small update to cover how I've dealt with some technical debt that I listed, at the end of the previous post.

For quick reference, here are the items I have since dealt with, and will be covering today (*italicised items* haven't been dealt with, yet):

<div class="tldr" style="padding-top:1rem">

There's plenty of gaps in the unit tests. Happily, all the tests that we have right now do pass!

There are plenty of places where there's insufficient error-handling:

- There's no network error handling.
- None of the form interactions respond to server-side error messages.

A number of issues exist due to the fact that we use a user-managed unique attribute - the url slug:

- The create event form doesn't check for uniqueness conflicts yet.
- When editing an event, if you change a slug, the UI doesn't update its state, or the web url yet.

*Editing events has some gaps, too:*

- *Extra logic needs to be written to ensure that the relationship between the registration-closes and start dates remains intact.*
- *It's not possible to manage the event's organisers yet.*

And the usual culprit: all of the UI needs a responsive CSS polishing.

</div>

## Tests and Specs

I added some example tests, mostly for the sake of completeness.

- The data and API layer functions for listing events.
- The custom validators for `:event/status` and `:event/organisers`.

### API Specs

I also added some specs to the event API, and applied the same check-spec-and-throw trick we saw last time with the re-frame client db. Now, if the API request args aren't spec-valid, we return a 400 error, with a nicely formatted expound spec error message.

I used the usual trick of defining a separate multimethod to decide on the spec to use, using the same dispatch values as the API methods themselves. I may yet also define a [multi-spec](https://clojure.org/guides/spec#_multi_spec) around this, but as things stand right now, I don't need one!

These API specs compose existing specs from the data layer — such as ``:bridge/new-event`, with specs for the API, such as `:bridge.api/chapter-id`.

<hr>

## Error handling

There were a couple different situations where errors are detected, but not raised to the organiser who's using the UI.

### General network errors

The Ajax effect has a timeout of 5 seconds at the moment. If that timeout occurs, or if the backend returns anything other than a HTTP 200 status, I now display a generic error modal, with the body of the response included.

Eventually I may remove this detail, but for now, it'll help me build out the app.

The modal reuses the one I made for the event status change, so I reorganised the code to make it reusable for this new case.

### Creating events

It was possible for an organiser to create a new event that would cause a slug to be generated that already exists. Rather than fuss with error modes in the form, I detect this situation and automatically append a randomised suffix.

I figure that the organiser either won't care, or will notice it, and use the edit-in-place system to alter it to something more suitable.

### Edit-in-place errors

This is where most of my time was spent — not specifically in presenting the error to the user to deal with, but in reworking the edit-in-place code to use global state, rather than a component-local ratom.

Before, I stored the original field value in the global atom, and then stored extra state in the local ratom. I also used the same global store location for the event list, and the event edit form.

Now, I specifically load the edit-event data into a separate top-level place in the global atom, and for the fields that use the edit-in-place mechanism, I expand the value at the attribute key to a map with all the state necessary for the edit-in-place field to work.

Let's cover that ground again, by example. The following states both show how things look with the event edit form open, while editing the title field.

#### Before

Global state

```clojure
{:bridge.event.ui/events
 {[:event/slug "clojurebridge-april"]
  {:event/title "ClojureBridge April"}}}
```

Local ratom state

```clojure
{:edit-value "ClojureBridge April!"
 :editing?   true
 :dirty?     true
 :invalid?   false}
```

With this setup, there's no clean way to get error information from the server response into that local ratom, because the opportunity for doing so has passed: when first rendering the form.

#### After

Global state

```clojure
{:bridge.event.ui/events
 {[:event/slug "clojurebridge-april"]
  {:event/title "ClojureBridge April"}}
 :bridge.event.ui/event-for-editing
 {:event/title
  {:orig-value "ClojureBridge April"
   :edit-value "ClojureBridge April!"
   :editing?   true
   :dirty?     true
   :invalid?   false}}}
```

Now, when error information comes in from the server, I simply add the error to this edit-in-place map at that field, and render it accordingly.

And, because I have explicitly decoupled this UI from the state shared with the event-list, I can move the original value down to `:orig-value` and use it as appropriate when handling that error, or cancelling the edit entirely.

<hr>

## Slugs

Using a user-managed value as an internal identifier inside the client-side state, also as an ID over the network, proved to be too cumbersome. Rather than writing more and more code to cover all the cracks, I decided to add a little state instead.

Events now have a `:event/id` UUID, which is unique, and immutable. I use `java.util.UUID/randomUUID` to generate these, as it's no longer necessary to use Datomic's `datomic.api/squuid` to ensure indexing performance.

I still continue to allow slug on the address bar; this is passed over the network when loading the event for editing, and from the point that response comes back, I use the UUID internally.

Naturally, I had to update a couple specs, but overall, there was very little change to bring this new attribute in.

<hr>

## Responsive styling

I added the necessary logic to power the [Bulma navbar burger](https://bulma.io/documentation/components/navbar/#navbar-menu).

This ended up being a bit more code than I expected, because in the mobile view, the menu expands over the top of the page content, and because this is a stateful single-page app, clicking any of those menu items won't automatically close the menu back down.

I have yet to test everything while using a narrow viewport, so I haven't specifically fixed any other responsive styling issues.

<hr>

## Next steps

Although there are a couple more things to do from that technical debt list, I feel comfortable that I can move on to building new features again!

As mentioned last time, that'll be event participant registration:

- Public event pages
- Registration forms (for both participant and coach)
- Updating the backend to show registrants

See you next time!
