---
layout: post
title: Bridge dev diary: Modelling access
---

This is a development diary for the `bridge` project I'm working on, described in detail in my post:

[A Clojure learning journey](/2018/02/18/a-clojure-learning-journey/)

This diary entry covers the [changes in this diff](https://github.com/robert-stuttaford/bridge/compare/94cacca10a3e3c06cfef54a81dda9f2e3d0c451e...3d9ce59b58eeed4d7ee2b86217c1746b1b6a424c).

<hr>

## Datomic Peer and Client together

Ok, so once I actually started using both together, it quickly became apparent that passing the `:mode` along with the `:conn` / `:db` values into the Datomic abstraction was creating all sorts of difficulties.

I chose instead to control `:mode` with a [dynamic var](https://clojure.org/reference/vars), at:

 `bridge.data.datomic/*DATOMIC-MODE*`

The downside is that this value must always be bound before the abstraction can be called, but the upside is that it became easy to provide a wrapper layer over functions in the Datomic Peer and Client libraries. 

Consumers of the abstraction can continue to pass a connection or a database value as we are used to doing.

To deal with that downside, there's a `with-datomic-mode` macro to wrap forms with a binding for this var, which is now used in all the right places in the project: middleware, tests, and REPL helpers.

A nice benefit of this abstraction is that we now have a clear place to add transaction annotations later, when it's time to link transactions to the users who created them.

It's still early days, but I must say, given that it's working just fine at the REPL, from tests, and within all the app code, I'm feeling good about this idea! 

To see what I've touched on so far, you can review the [API differences here](https://github.com/robert-stuttaford/bridge/blob/3d9ce59b58eeed4d7ee2b86217c1746b1b6a424c/src/bridge/data/datomic.clj#L37-L70).

<hr>

## Modelling people

To begin modelling people, I chose to implement the standard set of access control gestures that a person will use to self-service-manage their own access: 

- Sign up, and confirm email.
- Log in, and log out.
- Forgot password, and its sibling, reset password.

I felt this was a good place to start, because many of the features of `bridge` rely on what we know about the currently signed-in user, and it'd be nice to have this stuff out of the way.

It also means that it's secure from day 1, so deciding when to host on the public Internet won't be impeded by this.

Also, this gives us a nice way to establish some norms, like how we organise the code layers that make up the system, how we'll name things, and so on.

### Person attributes

Ultimately, we'll record a fairly [large number of values](https://github.com/robert-stuttaford/bridge/blob/3d9ce59b58eeed4d7ee2b86217c1746b1b6a424c/doc/schema.md#user) for a given person, but thanks to Datomic's design, we don't need to concern ourselves with all of them at once just to get started with these basics. 

**Aside**: to soak yourself in some of the consequences of this sort of thinking, I highly recommend this post on treating your database as a "living, breathing thing": [The Ten Rules of Schema Growth](http://blog.datomic.com/2017/01/the-ten-rules-of-schema-growth.html), by Stuart Halloway.

Ok! We start with six attributes:

**`:person/name` — string**

What we'll display when this person needs to be displayed anywhere.

**`:person/email` — unique string**

How people identify themselves when signing in, and also how we'll send them messages. 

We won't display this anywhere unless absolutely necessary.

**`:person/password` — string**

Thankfully, the excellent [https://github.com/funcool/buddy](https://github.com/funcool/buddy) library made the cryptography concerns easy to deal with. 

We use `buddy.hashers/derive` to hash passwords (`bcrypt+sha512` by default), and `buddy.hashers/check` to verify the password on login.

**`:person/status` — enum keyword**

This is so that we can control access independently of their credentials. Possible values:

- `:status/active` - default; account is in good standing.
- `:status/suspended` - disabled by an administrative person.
- `:status/deleted` - the person used the "forget me" capability.

**`:person/confirm-email-token` — unique string**

**`:person/reset-password-token` — unique string**

A random token that we'll send via email, for them to provide back to us when they confirm their email, or reset their password, respectively. 

Buddy comes to the rescue again; this time, we compose `buddy.core.nonce/random-nonce`   with `buddy.core.codecs/bytes->hex` to produce secure random tokens for use in email messages.

<hr>

## Code organisation

I've found that I prefer to keep all the different technical aspects for a given concern together, rather than grouping code by its behaviour.

To say that another way, I'd rather find all the queries, transactions, and web page code for a section of the system together in a folder, rather than keeping all the database code in a folder, and separately keeping all the web page code together in a different folder somewhere else.

So, rather than this:

```
bridge
├───data
│   └───person.clj
└───web
    └───access
        ├──login.clj
        ├──sign_up.clj
        └──...
```
I far prefer this:

```
bridge
└───person
    ├───data.clj
    ├───access.clj
    └───access
        ├───login.clj
        ├───sign_up.clj
        └───...
```

It feels better to have everything about a named concern together, rather than spread across different folders in the source code.

Later, I'll have more top-level concerns, like "chapter" and "event", and more sub-concerns like, "person -> profile -> edit, delete".

I'm not entirely sure where this idea comes from. It could be Domain Driven Design, or elsewhere, but my preference for this is mostly intuitive; it likely has a name and a whitepaper written by someone far smarter than me!

Consequently, This is how I've arranged the [code for those six access gestures](https://github.com/robert-stuttaford/bridge/tree/3d9ce59b58eeed4d7ee2b86217c1746b1b6a424c/src/bridge/person).

<hr>

## Access page organisation

After working through about half of the use-cases, a pattern emerged:

```clojure
(defn thing-page [<maybe error>] 
  <hiccup, maybe with error>)

(defn thing-success-page []
  <hiccup>)

(defn process-thing [<destructure request>]
  <check the input + database, and then either:>
   <show (thing-page) with error>
   <do thing, then redirect or show (thing-page)>)

(defn thing [request] ;; referenced by routing table
  (or (process-thing request)
      (thing-page)))
```

I ended up collapsing `process-thing` into the top-level `thing`, as the top-level ended up being utterly identical boilerplate across all six use-cases.

Now, for [all six gestures](https://github.com/robert-stuttaford/bridge/tree/3d9ce59b58eeed4d7ee2b86217c1746b1b6a424c/src/bridge/person/access), we have a dedicated namespace with views at the top and the controlling logic at the bottom, which defers to the common `bridge.person.data` namespace for all the database interactions (discussed further down).

The Hiccup code I was using started to feel a bit repetitive, so I moved the outer, common bits to their own namespace. This helped to focus the individual use-case page code on what's unique about them, without overdoing the whole DRY thing.

*I'd be particularly interested in hearing feedback, especially from newer Clojure folks, on how approachable this code is for you.*

*Did it help you to understand the flow, or hinder you? Why?*

<hr>

## Access page data interactions

The common data namespace brings together several things - the cryptography issues described above, and:

### Rules for data sanitisation and correctness

To prevent issues, we trim and lower-case email addresses whenever a person provides one via HTTP request.

We require that passwords be at least 8 characters, and that confirmed passwords match.

### Naming the ways in which people can be found

Right now, we can find a person in three ways - through their email, and through the confirm and reset tokens. 

Over time, we may come up with additional ways, or require new rules be included in existing ways. 

By putting these generic queries in named functions, we hook the rest of our system to these semantics.

### Defining how people are created and altered

I've split the "make-new-person" transaction code from the function that actually transacts it. This allows us to test the rules that govern what it means to be a new person in our system, independently of actually commiting it to the database. 

To take advantage of this split, I've written specs and instrumented this function, and unit-tested this function as well.

We also have named functions for the key access control alterations — actually confirming that email address, and resetting that password.

### Defining when messages are sent to the person

In two cases, we generate a token, and need to inform the person by email. 

Right now, all we do is log the email, but later, once we have an email sending abstraction in place, this invocation will likely move 'up' one layer, out of the data layer, and into the access controller layer, but call back 'down' one layer into the email sending abstraction.

For now, it's fine where it is.

### The relevant Datomic schema

I firmly believe that the database should be the source of truth for its state — schema included — rather than some source code in your app. 

This becomes especially true when your database has been around for a while, and when you have multiple independent apps interacting with it.

In fact, I wrote [Datomic Doc](https://github.com/cognician/datomic-doc#rationale) to make inspecting your database idents (schema, enums, functions) easier to do.

However, in terms of being able to test the _code_ that interacts with the database, it's useful to keep those schema definitions handy. And, as I describe below in about development data, it's useful to be able to rebuild your database from scratch, if you need to.

So, this is why the schema is kept here.

<hr>

## Development-time data

Until I'm ready to commit to a durable storage, I'm using an in-memory database with Datomic. This gives me total freedom if I need to make substantial alterations to the database schema — something that experience has taught me is valuable!

The consequence of this is that I'm forced to manually interact with the system to get it into an interesting state for the code I'm working on. 

Of course, this is something that can be automated, so that's what I did!

I've added a new Integrant component which also depends on the Datomic component. [All it does is transact data](https://github.com/robert-stuttaford/bridge/blob/3d9ce59b58eeed4d7ee2b86217c1746b1b6a424c/src/bridge/data/dev_data.clj). Right now, it handles transacting the schema described above, and a single person entity, which is neatly packaged into an idempotent function that can easily be called at the REPL.

As I go deeper into implementing `bridge`, I'll be able to build up this code, keeping the database in a suitable state for demonstrating features or for preparing testing things interactively. 

It also serves as nice documentation: the minimum data to make the system go!

<hr>

## Specs and tests

I used Spec to describe the data layer, which defines rules about the contents and the composition of those Datomic attributes described earlier. Rather than hardcoding meaning into the specs defined at the "person" level, I wrote generic specs - for 'non blank string', 'nonce' (a.k.a. token) and email, and had the person specs use those.

I added [expound](https://github.com/bhb/expound) and [orchestra](https://github.com/jeaye/orchestra) as standard Spec conveniences.

I use a throwaway in-memory Datomic database, which gets set up and torn down on for each test.

I'm only scratching the surface here, as I've only got one example-based test written so far, for the "sign up" user gesture. A likely very-next step is to flesh out these tests so that the rest of the named things in `bridge.person.data` have exemplars.

### Dabbling with generative tests

I actually ended up quite far down a small rabbit-hole trying to set up generative tests with these specs. Turns out, doing so for email addresses wasn't very straightforward.

I did try using a couple different email regexes I found on the web with Steve Miner's frankly awesome [https://github.com/miner/strgen](https://github.com/miner/strgen), but as the Readme describes, it can only support a subset of the regex engine's language, and for whatever reason, email regexes have a burning need to be [Perl quines](http://www.perlmonks.org/?node_id=62389) or something. 

When I felt the jaws starting to close around me, I decided to park that idea for now, and focus on getting a working UI built. I'd love to come back to this, though, and have generative tests in place for the full "people API".

*If you know of a way to generate emails using a regex that's suitably valid, please let me know!* 

<hr>

## Other code changes

### Added REPL conveniences

So that I can quickly poke around in the database from the REPL, I added `bridge.dev.repl`, which has zero-arg `conn` and `db` functions. 

I usually use these from within `(comment ...)` forms in whichever namespace I'm currently working in.

### Display stacktraces via the web server

I added the `ring.middleware.stacktrace` middleware, as the default Jetty handler shows very little on its own when an exception is thrown.

### Bumped CIDER and clj-refactor to SNAPSHOT

So that I can test them out, and also get rid of those deprecation warnings when starting a REPL.

### Makefile updates

- Run the peer-server easily.
- Compiling ClojureScript via `cljs.main` complains if you don't provide a `:source-map "path"` config when using `-O advanced`. I fixed that.

<hr>

That's it for now.

As always, I'm looking to learn from others just as much as I am looking to share my experience. If you have any advice, or questions, or feedback of any kind, please [get in touch](/)!

Thanks for reading!
