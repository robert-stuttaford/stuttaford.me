---
layout: post
title: Bridge dev diary: Datomic mode
---

This is a development diary for the `bridge` project I'm working on, described in detail in my post:

[A Clojure learning journey](/2018/02/18/a-clojure-learning-journey/)

This diary entry covers the [changes in this diff](https://github.com/robert-stuttaford/bridge/compare/a7ae33baa9aed47d39882b635b2b0ede4dcac5d9...be515cdcc591b2a5b0123c871f41d7a7e74b880a).



## Datomic Peer vs Datomic Client

Although I'm planning for the app to use Datomic Peer in production, as a learning exercise, I've decided to implement the Datomic layer with both the Peer and the Client at the same time.

This'll serve to highlight the differences between the two (or non-differences), and allow us to explore some ways in which Clojure supports abstractions like this.

In practice, you'll switch between these with a [single configuration setting](https://github.com/robert-stuttaford/bridge/blob/be515cdcc591b2a5b0123c871f41d7a7e74b880a/resources/system.edn#L2).

Of course, this assumes that the respective transactor and peer-server processes are running.



### Caveat: tools.deps.alpha and Datomic Pro Peer

It's not possible to use the Datomic Pro Peer library with `deps.edn`  at the moment, because [tools.deps.alpha](https://github.com/clojure/tools.deps.alpha) doesn't currently support Maven authentication.

It's being worked on; see [the relevant Jira ticket here](https://dev.clojure.org/jira/browse/TDEPS-9) — please vote for it :-)

Because of this, we can't use Datomic Pro in Peer mode. This doesn't matter for the moment, because my initial development will happen with an in-memory database, but when the time comes to use storage, we'll have to use the `datomic:free://` Datomic URI modality.



<hr>

## Code changes



### Datomic Integrant implementation update

As described earlier, we now support both Peer and Client.

Our Integrant [system map](https://github.com/robert-stuttaford/bridge/blob/be515cdcc591b2a5b0123c871f41d7a7e74b880a/resources/system.edn) now includes configuration for both modes.

The [Datomic implementation](https://github.com/robert-stuttaford/bridge/blob/be515cdcc591b2a5b0123c871f41d7a7e74b880a/src/bridge/data/datomic.clj#L6-L22) now returns a map with two or three keys:

```clojure
{:datomic/mode   :peer | :client
 :datomic/conn   ...
 :datomic/client ...}
```

Of course, the `:datomic/client` is only present if we're using that mode.

Then, the Ring middleware merges this map, plus a Datomic database value at `:datomic/db`, into the request map, for our handlers to use as needed.

It's going to be interesting to see how dealing with both APIs at once turns out. Even if it results in code that I wouldn't be happy with in a "serious" production setting (which may not even happen!), I think it's worth trying, as a way to directly confront the API differences head on.



### Explicit environment variables

I moved the environment defaults from [system.edn](https://github.com/robert-stuttaford/bridge/blob/be515cdcc591b2a5b0123c871f41d7a7e74b880a/resources/system.edn) to its own file [bridge.env](https://github.com/robert-stuttaford/bridge/blob/be515cdcc591b2a5b0123c871f41d7a7e74b880a/bridge.env), so that they can be used outside of Clojure processes (e.g. when running the peer-server).

The [makefile](https://github.com/robert-stuttaford/bridge/blob/be515cdcc591b2a5b0123c871f41d7a7e74b880a/Makefile) sources this file before running any Clojure processes that require it.



### Datomic transactor / peer server helper scripts

If you're new to Datomic, I've provided some [bash scripts](https://github.com/robert-stuttaford/bridge/tree/be515cdcc591b2a5b0123c871f41d7a7e74b880a/script) to ease you into it:

`install-datomic-free.sh`

Does what it says on the tin!

`install-datomic-pro.sh`

If you decide to use the Datomic Client option, you'll need to use Datomic Pro, which you can get for free via [Datomic Pro Starter](https://my.datomic.com/account/create). Once registered, you'll put your credentials into this script and it'll take care of the rest for you.

`datomic-transactor.sh`

Run your Datomic transactor, which works whether you decide to use Free or Pro.

`datomic-peer-server.sh`

Again, if you decide to use the Datomic Client option, you'll run the peer-server alongside your transactor.



### New debug page

I added a `/system` page which prints out the fully realised Integrant system configuration, as well as the Ring request.

This'll be useful for debugging both Integrant system issues as well as Ring middleware, particularly as we work on the user authentication and authorisation stuff.



### Dependency updates

One disadvantage of using `:git/url` and `:sha` with `deps.edn` is that it puts all of the source from these dependencies on your classpath — which means that `tools.namespace` includes it in the `refresh` cycle. It's merely an annoyance, that goes away after your first `refresh`.

Even so, it's nice that we can now use the freshly minted [ClojureScript 1.10.64](https://github.com/clojure/clojurescript/releases/tag/r1.10.64) release. You can watch an awesome livecast about some of the changes in this release here: [Apropos Episode 1](https://www.youtube.com/watch?v=KG9uFtXaqYg) — follow [Apropos](https://twitter.com/apropos_cast) account on Twitter to learn when the next episode is!

I'm really excited about the potential of `cljs.main`!

<hr>

That's it for now.

Keep an eye on my Twitter account, where I'll be posting my live-stream schedule soon!

Thanks for reading, and feel free to [reach out any time](/) if you have thoughts or questions to share.
