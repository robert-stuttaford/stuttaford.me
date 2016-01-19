---
layout: post
title: How Cognician uses Onyx
description: An overview of how Cognician uses Onyx, a distributed computation framework, to process user data in real time.
tags: onyx, distributed, datomic
---

[Cognician](https://www.cognician.com/), the ed-tech company I co-founded in 2010, uses the Clojure stack:

- [Clojure](http://clojure.org) and [ClojureScript](https://github.com/clojure/clojurescript).
- [Datomic](http://www.datomic.com), a distributed, ACID-transactional, relational, immutable database.
- [Onyx](http://www.onyxplatform.org/), a masterless, distributed computation framework.

All of the actions listed below use the same set of immutable data-structures – good old maps, vectors, and sets – and they’re all plain old unadorned data – no special types!

- Client interactions in the browser.
- Network ops between the browser and API end points (with great transfer and parse performance, thanks to [Transit](http://blog.cognitect.com/blog/2014/7/22/transit)).
- Handling web requests.
- Manipulating and storing data in Datomic.
- Declaring and integrating computations in Onyx.

We have been using Clojure, ClojureScript and Datomic for several years. The most recent addition is Onyx, which we put into production in September 2015. We had some bumps along the way, but now that we’ve learned the requisite skills to run this powerful system suitably well, I’m incredibly happy with it.

## A need for scalable, continuous event-stream processing

Around September 2014 we were planning the next version of our platform, and had a need for a horizontally scalable computation system; one which wouldn’t need a total rewrite in a couple years as we scaled up. It could not be batch-based, as we wanted to process events coming in from our users as we received them on a continuous basis - a facility known as ‘event stream processing’.

The only real option we had back then as a Clojure team, was Twitter’s Storm (now an Apache project). Storm is great in many ways, but one of them is not ease of development and debugging. The deployment story was quite complex, considering that until that time, all we had to do was put `.jar` files on servers behind AWS’ ELB. And, it used an old version of Clojure, which made it impossible to take advantage of new features in the language.

Despite all that, we were going to go ahead with it and spike a solution, to see how things go. Happily, before we made any significant headway, I saw Michael Drogalis’s first Onyx talk, which he gave at StrangeLoop 2014 ([video](https://www.youtube.com/watch?v=vG47Gui3hYE)).

Once I saw this video, I realised why I didn’t want to use Storm: its API is a special set of macros which encapsulates all the ‘glue’. But we’re in Clojure, we have something better: plain old data. And that’s what Onyx uses, for the most part; your actual workhorse ‘do-the-things’ logic lives as pure functions, and just about everything else is just data!

We’ve already learned that this is the best possible way to build an API. We’d been living this dream with Ring and Datomic for a while, and seeing how Onyx used the same great approach made it a natural fit for our context.

We decided to go ahead with it, and over the course of 12 months, along with the rest of our new platform, we built an event-stream processing system with Onyx.

Before I can describe how we use Onyx, I’m going to go over some of its key concepts.

## Onyx’s API is mostly data

The Onyx data API is broken into several cleverly designed pieces (see the [documentation site](https://onyx-platform.gitbooks.io/onyx/content/) or the [cheat-sheet](http://www.onyxplatform.org/docs/cheat-sheet/) for the full picture):

- **Peer configuration**, which defines the shape of the overall system; how many peers (individual worker bees) you’re going to run, [ZooKeeper](https://zookeeper.apache.org/) (for coordination) and [Aeron](https://github.com/real-logic/Aeron) (for networking) configuration, and many, *many* dials and knobs for managing overall performance.

- **The Catalog**, which defines the tasks that can make up an Onyx job. Think of this as a set of puzzle pieces before they’ve been assembled into a cohesive picture. There are many knobs and dials for controlling performance at the task level here, too. There are three kinds of task:

	1. **Inputs**: typically queue consumers, such as Kafka, RabbitMQ, or Datomic (yep!). Core.Async channels work great too. Extensible; could be whatever you like.
	2. Good old **functions**: pointers to your workhorse logic.
	3. **Outputs**: typically some sort of persistence - SQL, S3, Datomic, etc. And yes, Core.Async channels too. Also extensible.

- **The Workflow**, which arranges tasks from the catalog into a graph of inputs ⟶ functions ⟶ outputs. In the puzzle analogy, the catalog contains puzzle pieces, and the workflow is the completed puzzle.

These first three sets of data are required - you can build a fully functional (albeit quite simple) computation with just these. However, if you want to handle complexity, you’re going to need some additional tools:

- **Flow Conditions**, which provide a way to run segments through a predicate function before allowing them to move from  task to task. This allows us to stop work early, and generally control the flow of segments to tasks. Flow conditions also provide a nice way to handle exceptions in tasks.

- **Lifecycles**, a way to manage the per-task and per-batch state for tasks, and also cross-cutting concerns like metrics and logging. We use these to send metrics to [DataDog’s](http://datadoghq.com/) statsd agent. Another great way to keep actual business logic simple. *Kind of* analogous to Ring middleware.

We use both of these to great effect. Since we built our system, even more goodies have become available, which we’ve not yet had a chance to take advantage of: [Windows and Triggers, which Michael describes far better than I can here](http://michaeldrogalis.github.io/jekyll/update/2015/11/12/Onyx-0.8.0-Automatic-State-Management.html). 

In summary, they allow you to gather up segments into buckets (Windows) and do something of consequence with them (Triggers). One use we have for this in the future is to “debounce” events for a single user; that is, prevent processing events for that user more often than, say, every 5 seconds. This is a great way to reduce overall workload when processing at scale.

## How Cognician uses Onyx

Our Onyx system, named Highstorm (which I lifted from Brandon Sanderson’s seriously *fantastic* [The Stormlight Archive fantasy novel series](https://en.wikipedia.org/wiki/The_Stormlight_Archive)), has several duties:

- **Calculate and store statistics and aggregates**, so that web pages and offline analysis can be faster. As all of our data lives in Datomic, these values are 100% inferred; all the raw source data is in the database before Highstorm begins its work.
- **Create direct relationship caches** between indirectly related Datomic entities that often appear in queries together, also to simplify queries and improve their performance.
- **Send messages**, such as email.

Aside from the last of these, you could think of Highstorm as a sort of *scalable, eventually-consistent database function system*. Of course, it’s different to actual [Datomic database functions](http://docs.datomic.com/database-functions.html) in several very important ways, and should not be mistaken for those! But, even so, it’s a handy analogy.

Before we dive into the details of how we did this, I think it’s important to understand how we were able to fit Onyx into the overall infrastructure.

# How Onyx fits into Cognician’s infrastructure

Typically, when integrating a new system, you’d decouple it from the rest of your infrastructure with a queue, and so that’s what we did. But we didn’t use a separate queue technology like Apache Kafka or RabbitMQ.

This is thanks to a great feature of Datomic’s, which is that every connected peer is aware of changes to the database **in real time**. They have to be, thanks to the way query works - see the green ’Live Index’ pictured in [this Datomic architecture diagram](http://docs.datomic.com/architecture.html).

Highstorm’s primary input task simply watches the Datomic transaction log, and puts each transaction log entry into the system to be processed as they become available. Then, whatever changes to be stored ultimately reach Highstorm’s output task as transaction data, ready to be transacted. 

Onyx has a Datomic plugin which provides both the [input](https://github.com/onyx-platform/onyx-datomic#read-log) and [output](https://github.com/onyx-platform/onyx-datomic#commit-bulk-tx) tasks that Highstorm uses.

From an infrastructure perspective, this is great. Here’s a ‘before’ picture:

![Web + Datomic + DynamoDB](/images/Web+Datomic.png)

We have a pair of web servers connected to a highly-available pair of Datomic transactors, and to DynamoDB for storage.

And here’s what it looks like with Onyx:

![Web + Datomic + DynamoDB + Onyx](/images/Web+Datomic+Onyx.png)

Note: web server lines removed for clarity. Also, I used <https://cloudcraft.co/> to draw these diagrams.

Onyx only connects to Datomic the same places that the web peers do in the original diagram. That is, they’re also just Datomic peers. There is no separate queue or coordination mechanism between the web and worker tiers.

This is a crucial point: we’re applying the same lesson to architecture that we learned at the programming layer: make data your interface. Our web tier communicates with our worker tier only through data in the database!

To dive into the details a bit, we’ll look at how we send email with Highstorm, as it’s a great example of this data-as-interface pattern.

# Data as interface between systems

When our system has to send email, such as when providing a user with a reset-your-password token, all the web server does is write a new ‘pending message’ entity to Datomic:

```clojure
(ns your.app.messaging
  (:require [datomic.api :as d]
            [ring.util.response :as response))

(defn save-pending-message! [db-uri template params]
  @(d/transact-async 
    (d/connect db-uri)
    [{:db/id (d/tempid :db.part/user)
      :msg/uuid (d/squuid)
      :msg/template template
      :msg/params (pr-str params)
      :msg/status :status/pending}]))

;;;

(ns your.app.web.reset-password
  (:require [your.app.messaging :refer
             [save-pending-message!]]))

(defn handle-reset-password [db-uri email]
  ;; ... validate email, generate token ...
  (save-pending-message! db-uri "reset-password"
                         {:email email
                          :token token})
  (response/response "OK")
```

If you’ve any experience with Datomic, this is all pretty standard. As we don’t expect to do anything with the result, we’re happy to use `transact-async` here, which will return immediately, freeing the web server up to carry processing the request. At this point, the web server is done with sending the email.

In Highstorm, we have a task which immediately follows our Datomic transaction log input task in the workflow. It inspects Datomic transactions to check for the presence of datoms (atomic facts in the database) that match any of the preconfigured patterns in our worker tasks. I’ll refer to it as `prepare-tx` below.

So, our `send-message` task uses this pattern:

```
[_ :msg/status :status/pending _ true]
```

As is typical in Clojure, we use `_` to mean ‘this can be any value; I’m not going to use it’. So, this pattern declares that:

- Any entity ID is valid.
- The attribute must be `:msg/status`.
- The value for that attribute must be `:status/pending`.
- Any transaction ID is valid.
- Datoms contain a boolean `true` to indicate assertions in the database, and `false` for retractions. This is great: it means we can respond to retractions of facts just as easily as we do for new facts! In this case, though, the operation must be ‘assertion’, not ‘retraction’.

Through the use of dynamically generated flow conditions (easy to do, thanks to them being plain old data), we only allow a segment produced by `prepare-tx` to reach `send-message-task` when its datom matches this pattern.

The `send-message-task` function appears in the catalog, and is also quite simple:

```clojure
(defn send-message-task [{:keys [db-uri t datom config]
                          :as segment}]
  (let [ ;; get db using the basis t provided by input task
        db (d/as-of (d/db (d/connect db-uri)) t)

        ;; get message entity id from the datom
        msg-id (first datom)

        ;; use the provided db and message id
        ;; to compose the message
        composed-msg (compose-message config db msg-id)

        ;; actually send the message
        api-result (send-message! config composed-msg)

        ;; build a tx modelling the new information we have
        result-tx {:db/id msg-id
                   :msg/composed composed-msg
                   :msg/result (pr-str api-result)
                   :msg/status :status/sent}]

    ;; add the result transaction to the segment
    ;; for later persistence to Datomic
    (update-in segment [:tx] conj result-tx)))
```

Some points of interest:

- The segment, which is just a Clojure map, has all the Highstorm system configuration, so no global state is necessary. It’s easy to test by mocking alternate config.
- We use the `t` value from the transaction to create a database to query. We do this for all the processing we do for a given task, making our view on the database consistent throughout all the tasks in the workflow for that segment.
- The `send-message!` function is side-effecting, because it does I/O. There’s just no avoiding it in this case. However, once we’ve done that, we go back to working with immutable data.
- Since Highstorm’s only output is more transactions for Datomic to process, all our intermediate tasks produce transaction data. Key for this task is that we change the message status to `:status/sent`. We also like to store the composed message so that our operations staff can easily diagnose issues when things don’t go as expected.

Once this segment reaches the output task, its transaction data is committed to storage, and it’s available for query on the web tier again.

So, to summarise the workflow, all of the segments in Highstorm follow this process, regardless of what the tasks in the middle do.

1. `tx-log-input` 
2. ⟶ `prepare-tx` 
3. ⟶ `[task(s) matching datom pattern]` 
4. ⟶ `commit-tx`

This is quite awesome, I think!

# That’s it for now

I could go on and on :-)

Given how core this system is to our platform, I have plenty of other topics that I can talk about on it, which I plan to do in a follow up post or two:

- Using Stuart Sierra’s ‘reloaded workflow’.
- Ease of development.
- Handling error conditions.
- Working with metrics.
- Tuning Onyx performance, including some hard-won lessons on back-pressure and throughput.

# A huge, _huge_ thank you

I want to thank the two (yes, just two!) guys in the Onyx team – [Michael Drogalis](https://twitter.com/michaeldrogalis), who first conceived of Onyx, and [Lucas Bradstreet](https://twitter.com/ghaz), who joined the cause about a year later – for their incredible patience and support during our learning curve with Onyx. 

I know that although we were able to contribute by sharing bug reports, or feedback on this API or the utility of that feature, we at Cognician by far got the better deal. Thank you, guys. You’re both menschen!

I wouldn’t hesitate for a second to recommend them to anyone who wants to use Onyx in anger - they’ve just recently started a consultancy to offer commercial support, training, development and so on; you can hit them up at <http://www.onyxplatform.org/support>. I can’t think of a better way to get started.

You can also simply pop in for a chat on their their [Gitter room](https://gitter.im/onyx-platform/onyx), or in the `#onyx` room on the [Clojurians Slack](https://clojurians.slack.com/) ([not a member?](http://clojurians.net/)). If you do, I’ll see you there!

Thanks for reading!