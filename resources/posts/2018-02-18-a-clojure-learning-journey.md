---
layout: post
title: A Clojure learning journey
---

A year or two ago, I gave up trying to track all the interesting stuff happening in the Clojure universe, because the rate of change was simply too high — too many awesome new things were happing too frequently for me to be able to try them all out, or find a "nail to hammer" with whichever new interesting thing came out that week.

That, combined with the fact that everything we were doing "in anger" was working just fine, led me to a sort of complacence, where I didn't try new things out.

That changes today!

I've decided to give myself a multi-faceted learning / sharing goal, and this post serves to document what it is, and why I'm doing it.

<hr>

## What do you need?

Around 3-4 weeks ago, I wrote to the Internet:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">What would you like to see discussed and dissected about <a href="https://twitter.com/hashtag/Datomic?src=hash&amp;ref_src=twsrc%5Etfw">#Datomic</a>? Please RT :-)</p>&mdash; Robert Stuttaford (@RobStuttaford) <a href="https://twitter.com/RobStuttaford/status/956407817245724677?ref_src=twsrc%5Etfw">January 25, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<br>

And again, around ten days ago:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I want to build an open-source project with <a href="https://twitter.com/hashtag/Clojure?src=hash&amp;ref_src=twsrc%5Etfw">#Clojure</a>, <a href="https://twitter.com/hashtag/ClojureScript?src=hash&amp;ref_src=twsrc%5Etfw">#ClojureScript</a>, and <a href="https://twitter.com/hashtag/Datomic?src=hash&amp;ref_src=twsrc%5Etfw">#Datomic</a> Cloud, to demonstrate (via screencasts) how it could be done.<br><br>I&#39;m undecided on what to build... I&#39;m pretty sure the world can do without another todo list, blog engine, or Twitter clone. <br><br>Anyone?</p>&mdash; Robert Stuttaford (@RobStuttaford) <a href="https://twitter.com/RobStuttaford/status/961668361246728193?ref_src=twsrc%5Etfw">February 8, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<br>

The feedback I received is clear: there's interest in seeing how Datomic and Clojure can be used to create real value.

I got some really interesting replies to that second question. In between the totally reasonable suggestions of cloning a blog engine, or Jira, or Slack, or a shopping cart, or a certain orange news site, these stood out:

- A community-driven events wiki, with an example use-case: "e.g, notify me of upcoming metal shows occurring within a 20 minute drive." Knowing [Luke](https://twitter.com/levanderhart), that's the sort of metal you can find on iTunes Music, not the sort you search on the beach for with a detector.
- A registration system for [ClojureBridge](http://www.clojurebridge.org/), particularly the [ClojureBridge Berlin](http://clojurebridge-berlin.org/) chapter.
- An accounting system. Seems like a slam-dunk for Datomic .. that's because it is —  this has already been done! Check it out: <https://github.com/juxt/juxt-accounting>.
- A large scale Datomic [codeq](https://github.com/Datomic/codeq). Public global repository with a bunch of Clojure functions. I kinda feel like this has already been solidly tackled by [https://crossclj.info/](https://crossclj.info/).
- Some sort of free-for-devs version of <https://nextjournal.com/>.
- A multi-player code editor.
- A multi-player game.

That last one is verrrry tempting. I actually did start something like this with the Cape Town Clojure user group, along with [@cmdrdats](https://twitter.com/cmdrdats) : [Steel Plains TCG](https://github.com/cape-town-clojure/steel-plains-tcg). 

I built a [deck builder with Om](https://github.com/cape-town-clojure/steel-plains-tcg/blob/master/src/cljs/sptcg/deck_builder.cljs), and [specified the card and deck model with Schema](https://github.com/cape-town-clojure/steel-plains-tcg/blob/master/src/cljx/sptcg/card_schema.cljx) — remember those? :-) As with many projects like this, we didn't get very far, but it was tremendous fun.

While I appreciated all the responses I got, the one that seemed like a clear win is the one for ClojureBridge, because not only does it have enough meat on the bone for demonstrating how to build this stuff, it has something that's key for motivating me: it'll actually be used, by real people, to solve a real challenge they have.

So the two "Whys" here are:

1. Build it in the open, where folks can learn from watching me do it (and I can learn from the feedback I get).
2. Build something that's actually useful to someone.

So that's what I'm going to do!

<hr>

## ClojureBridge registration system

This is such a nice project for me, for a number of reasons.

### Collaboration

I have come to learn that I work best when I have someone to work with. This is one of the reasons why I consult — I get to interact with another human being, and learn from them, and provide them with value.

Happily, for this project, I have someone I can talk to, to understand requirements, and verify that what I'm building actually solves the problem. Crucially, that person — [Arne Brasseur](https://twitter.com/plexus), of [Lambda Island](https://lambdaisland.com/p/about) and [ClojureVerse](https://clojureverse.org/) fame — is willing and able. Thanks, Arne! I truly appreciate it.

### Not just a toy project

I haven't ever attended a ClojureBridge event, mostly due to where I live, which makes me a little sad. So, this gives me my own way to participate somehow.

If I succeed, I'll provide something that's useful in organising volunteer-driven work that grows our community in a very necessary and healthy way. 

That feels good!

### Clear goal

Because of the first two points above, I have clarity on what to build, and why it'll work. This is thanks largely to the [excellent write-up that Arne provided](https://github.com/robert-stuttaford/bridge/blob/master/doc/requirements.md), which describes what they need, and why.

### It's full-featured

In hammock mode, I wrote up a [list of capabilities, roles, verbs and views](https://github.com/robert-stuttaford/bridge/blob/master/doc/system.md#views-and-verbs-by-capability-and-role). 

Here are some highlights:

#### User management

There's no avoiding it. Systems that matter need to interact with human beings. We have to model them in our system, and provide safe ways for them to do their part to move things forward.

- Authentication and authorisation (role-based and content-based).
- Profile management: self-service registration and account recovery, data protection and privacy concerns.
- Audit trail: who did what? Who altered this thing?

#### Event management

The heart of the application. 

Interesting, because events are anchored in time, which means that time is a first class aspect of the system's behaviour: 

- What you can see and do changes as time passes.
- Some things need to happen automatically at a predetermined time.

There are a handful of interesting event manangement features to build:

##### Content management

There are two content management pieces here:

- The events themselves — scheduling, detailing, and managing the status of events and the individuals involved.
- Email templates. Much of the work of organising such an event is clear communication, and, given the fact that this whole effort is focused on helping to establish a new narrative for women in tech — the words **really** matter. So, removing the friction around sending the right words at the right time is important.

##### Invite process

There's a cyclical, multi-person interaction when handling the invite process. Arne would like the app to make it [totally self-service](https://github.com/robert-stuttaford/bridge/blob/master/doc/requirements.md#self-service-acceptdecline).

##### Reporting

Ah, good old reporting. Organisers need to be able to quickly determine head-counts for things like t-shirt sizes, catering choices, child-care, and so on. 

More friction to remove!

##### Learning groups

Another interesting bit is how participants are grouped during a live ClojureBridge event. Several factors play a part: who's actually available, language preference, prior experience, coaching preference — all of this matters. 

It'll be interesting to see how we might solve this algorithmically. 

Perhaps it'll give me a strong enough impetus to understand [core.logic](https://github.com/clojure/core.logic) enough to solve an actual challenge? 

This does feel a bit like planning who sits next to whom at a wedding :-)

#### Chapter management

If things go as well as I hope, I'd like to see this system used by ClojureBridge around the world, not just the chapter in Berlin. That means that there'll be an additional layer beyond users and events, where we control who organises which chapter, adding new chapters, and so forth.

A personal goal (one I acknowledge may not be possible, because it's not actually up to me) is that this system lives on the main [ClojureBridge](www.clojurebridge.org) site somehow. 

I suppose am in control of one thing; I can ensure that I make this as useful as possible!

Perhaps when the time is right, I'll be able to make a strong case for having this system facilitate all the ClojureBridge events around the world.

<hr>

### It's full stack

That I'll be using Clojure 1.9, ClojureScript, and Datomic are *quite* obvious :-)

#### Rich user experience

There's loads of things to build into a single-page app backed by an EDN API, but also a fair amount of simple server-rendered pages. We'll be able to see both approaches working in unison.

#### No Leiningen

Since the release of Clojure 1.9, [Clojure ships with its own cli tool](https://clojure.org/guides/deps_and_cli). As I've been happily ensconced in my fortress of `project.clj` files these past six years, I've had no reason to get to grips with this tool, or any of its implications. 

I've decided to apply a simple forcing function for this project: do it with `clojure` and [tools.deps.alpha](https://clojure.org/reference/deps_and_cli) / `deps.edn` alone — no Leiningen!

#### Libraries I've had an itch to try out

I've long been a fan of [Stuart Sierra](twitter.com/stuartsierra)'s [Reloaded workflow](http://thinkrelevance.com/blog/2013/06/04/clojure-workflow-reloaded), as I am sure many Clojurians (Clojurists? Clojurologists? Clojuronimoes?) are. 

Having used [Component](http://github.com/stuartsierra/component) and [TrapperKeeper](https://github.com/puppetlabs/trapperkeeper) thus far, I've been aware of several other takes on this, such as [Daniel Szmulewicz](https://twitter.com/danielszmu)' [System](https://github.com/danielsz/system) and [James Reeves](https://twitter.com/weavejester)' [Integrant](https://github.com/weavejester/integrant). 

I decided to give Integrant and [Ataraxy](https://github.com/weavejester/ataraxy) (also by James) a try. I like their design, and I just love saying their names. 

Makes me feel a little like I'm living in a [Culture novel](https://en.wikipedia.org/wiki/Culture_series) :-)

#### Datomic On-Prem vs Datomic Cloud

I did intend on using [Datomic Cloud](https://www.datomic.com/) for this, as this is something I wish to experience, but it's not quite ready yet. 

Critically, it has no support for [excision](https://docs.datomic.com/on-prem/excision.html), which is a key requirement for this app — we'd be honour (and legally) bound to lose people's <abbr title="Personally Identifiable Information">PII</abbr> when they request it. Given that Datomic doesn't actually delete anything, this is a problem which only excision can solve.

<img src="https://memegenerator.net/img/instances/78164808/say-gdpr-one-more-time.jpg">

> Aside: sending big hugs ♥️ to all the tech folks currently making ready for [Europe's GDPR](https://www.eugdpr.org/) legislation.

Less important for this project is that Datomic Cloud doesn't yet have a story for transactor functions, or backup/restore. I know that all of this is still coming!

The other thing, though, is that someone has to pay to host this once it's built, and a USD40/month VPS running Datomic Free and our Clojure app is likely to be all we need. Using Datomic Cloud will cost at least 2-3x that, due to the need for multiple AWS resources.

All is not lost, though! I will use this opportunity to build with the [Datomic Client](https://docs.datomic.com/client-api/index.html) library instead of the [Datomic Peer](https://docs.datomic.com/on-prem/clojure/index.html) library, as it is a substantially simpler (and therefore different) API. This'll also teach me about running a [Peer Server](https://docs.datomic.com/on-prem/peer-server.html).

That way, one day, I'll be able to convert the project to use Cloud when it's ready. I expect that conversion to be a quick one.

#### I'm not a designer

… so I'll be using [Bulma](https://bulma.io) to style all of the pages. Not only does it look great, it doesn't force any JavaScript on you.

<hr>

## Progress so far

I've waited to write about all of this, because I wanted to have some progress to show. So, here's the code! 

​	[https://github.com/robert-stuttaford/bridge](https://github.com/robert-stuttaford/bridge)

So far, it has:

#### Development and build tools without Leiningen

All using the `clojure` CLI, and a `Makefile` to save the repetitive typing:

- REPL + Figwheel, with CIDER/clj-refactor middleware.
- Test runner, thanks to the recently released [test-runner](https://github.com/cognitect-labs/test-runner).
- Uberjar packaging, thanks to Juxt's [pack.alpha](https://github.com/juxt/pack.alpha).
- Advanced Cljs compiler, thanks to the brand-spanking-new [cljs.main CLI stuff](https://github.com/clojure/clojurescript/blob/master/src/main/clojure/cljs/cli.clj).

On that last one, here's a fun one-liner to try (thanks again, [@mfikes](https://twitter.com/mfikes/status/964919064371122176)):

```sh
clojure -Sdeps '{:deps {org.clojure/clojurescript {:git/url "https://github.com/clojure/clojurescript" :sha "4df0542339e533b2d1e1dd7f6ffa8824eab64893"}}}' -m cljs.main -h
```

With all of these in place, I'm happy that I can provision CI and run this in a production setting.

#### Web service

An Integrant system, connecting a Jetty web server, a Datomic connection, and a *say-it-with-me* Ataraxy  Ring handler.

It was fun to compose Integrant with [dyn-edn](https://github.com/hlship/dyn-edn), released just a couple days ago. By providing its capability as data readers, it was trivial to use with Integrant's own `read-string`. Thanks again, [@hlship](https://twitter.com/hlship)!

It also has:

- A simple templating system, using a standard HTML wrapper and Hiccup (via [Rum's server-side rendering](https://github.com/tonsky/rum#server-side-rendering)).
  - Everything from this point onwards is a matter of writing Hiccup, which has been my native markup language for years now.
- Session management.
- Logging.
- Pages:
  - Login, powered by [buddy-auth](https://github.com/funcool/buddy-auth) and [buddy-hashers](https://github.com/funcool/buddy-hashers).
  - Access-controlled Cljs client app, using [Rum](https://github.com/tonsky/rum). It doesn't actually do anything yet :-)

<hr>

## Next steps from here

So, there we have it!

I'm all set to begin building the actual application, now. That means starting with that most-requested Datomic feature: modelling data.

Taking inspiration from my colleague [tonsky](https://twitter.com/nikitonsky), who [live-streams Clojure programming](https://www.youtube.com/watch?v=Oy3IImX-nSU) (in Russian),  I'd like to experiment with doing this in a live-stream, too. Failing that, I may simply record a couple programming sessions, and share it that way.

No matter what else, I'll be sharing the code and writing developer diaries along the way, just as I have done today.

## In closing

I have no idea where I'll end up with this project. I recognise that many projects that start this way, never get finished, which I guess is a risk I'll just have to take.

Of course, I have a selfish reason for doing this, that goes beyond the pure and simple *fun* of building something — and that's to promote my [consulting](http://localhost:3000/consulting/) practice. My hope is that I can demonstrate my value, rather than writing short novels about it — "show, don't tell," if you will.

Regardless of whether my consulting interests you, if you're at all interested in this adventure, I'd love to hear from you. 

**What aspects interest you? What are you hoping I'll cover?** 

I'm particularly interested in unpacking the 'why' questions, because it leads to interesting discussions around the tradeoffs involved, and how the need and the solution fit together.

[Please get in touch](/) — even if just to vote for that live-stream!