---
layout: post
title: App and dev services with Trapperkeeper
description: A simple technique for splitting runtime and development time services up so that they're independently resetable.
tags: component, reloaded workflow
---

At Cognician, we've started building our next generation of
administrative tooling. We chose the following stack:

* [Trapperkeeper](https://github.com/puppetlabs/trapperkeeper), a
  toolkit for binding disparate components together, using Stuart Sierra's
  [Component](https://github.com/stuartsierra/component) for lifecycle management
  and Prismatic's
  [Graph](https://github.com/Prismatic/plumbing#graph-the-functional-swiss-army-knife)
  for dependency management. Includes a configuration service.
* [Pedestal](https://github.com/pedestal/pedestal), a toolkit for
  handling HTTP, including routing, async capability (particularly,
  HTTP SSE) and great security defaults.
* [Datomic](http://www.datomic.com/), an immutable database.
* [Onyx](https://github.com/MichaelDrogalis/onyx), a Storm successor
  for distributed event stream processing.
* [Transit](https://github.com/cognitect/transit-format), a
  self-describing wire format built on top of JSON/MessagePack, for
  client/server transfer.
* [Om](https://github.com/swannodette/om), an opinionated
  ClojureScript wrapper over Facebook's React library.

We like this stack particularly because it's 100% Clojure, from
browser through web server and event processing to database. One
toolset, one syntax, one paradigm, all with immutable persistent data
structures. Nice.

To produce the Javascript that runs in the browser, we need to compile
our ClojureScript and also the common code shared by both client and
server. For these, we use
[shadow-build](https://github.com/thheller/shadow-build) and
[cljx](https://github.com/lynaghk/cljx) respectively.

We *don't* use
[lein-cljsbuild](https://github.com/emezeske/lein-cljsbuild) for two
basic reasons:

1. We build many different Javascript projects, some from the same Git
   repo. This is very slow to do with cljsbuild.
2. Cljsbuild doesn't support Google Closure's modules capability;
   where we have a single codebase producing multiple output files. We
   need this so that we can put all the common libraries we use into
   one 'core' file and then each app file has only its implementation
   code.

Instead, we use shadow-build, which is ridiculously fast, and allows us
to produce a core library file and several app files from a single
codebase.

Given all of that, today I'll show you how we've put this system
together, with working code!

I'll show you how we compose four Trapperkeeper services into
two systems - two for production and two for development:

* **App**: Datomic and Pedestal
* **Dev**: Cljx and Shadow-build

Here's the code so you can follow along:

<https://github.com/robert-stuttaford/tk-app-dev>

## App services

These run in both development and production contexts. Only the app
services run when you issue `lein tk` at the command line, which makes
use of the `bootstrap.cfg` file to determine how to satisfy
dependencies at startup. You can learn more in the
[Trapperkeeper bootstrapping](https://github.com/puppetlabs/trapperkeeper/wiki/Bootstrapping)
documentation. In fact, I heartily recommend reading
[all their documentation](https://github.com/puppetlabs/trapperkeeper/wiki)!

### Datomic service

Code: [src/tkad/services/datomic.clj](https://github.com/robert-stuttaford/tk-app-dev/tree/master/src/tkad/services/datomic.clj)

This service manages our Datomic database connection, and ensures that
we have a database, and that all the schema we have defined is
present.

It depends on the `ConfigService`
([provided by Trapperkeeper](https://github.com/puppetlabs/trapperkeeper/wiki/Built-in-Configuration-Service))
to discover all the configured Datomic database uris.

We ensure that schema is loaded by using the handy
[Conformity](https://github.com/rkneufeld/conformity) library, which
will only affect the database if there are actually changes to make.

Once initialised, this service provides access to Datomic database
connections and to database values.

### Pedestal service

Code: [src/tkad/services/pedestal.clj](https://github.com/robert-stuttaford/tk-app-dev/tree/master/src/tkad/services/pedestal.clj)

This service manages the lifecycle of the Pedestal web server. Here we
configure all the interceptors, notably injecting config and Datomic
connections and current database values into each Pedestal request
context.

This allows us to simply read from the provided database value in most
web requests, and ensures that - by default - our database queries use
a common time basis.

Of course, we have the connection as well, which means we can easily
create new database values, submit transactions, and so on.

## Dev services

These services only ever run on a developer machine. When started,
both of these services watch the file-system for changes and recompile
their output as needed. As this automated reloading is in place once
the services are started, there's rarely a need to reset them.

The other thing is that these services are not in the main `/src`
source tree; instead they are in `/dev` which is only added to the
source path for the `dev` Leiningen profile. This prevents any of this
code from loading into memory in production, where all this output
would already have been compiled.

### Cljx service

Code: [dev/services/cljx.clj](https://github.com/robert-stuttaford/tk-app-dev/tree/master/dev/services/cljx.clj)

Pretty simple - compiles all .cljx files to both .clj and .cljs files
as they change. We make use of Juxt's
[dirwatch](https://github.com/juxt/dirwatch) library to watch the
file-system recursively, and only invoke `cljx/cljx-compile` when
we know a `.cljx` file changed.

### Shadow service

Code: [dev/services/shadow.clj](https://github.com/robert-stuttaford/tk-app-dev/tree/master/dev/services/shadow.clj)

This one is interesting. Shadow-build is quite low-level to use (which
is great), so we added a thin layer over the top to support our own
use-case.

First of all, we assume that Facebook's React will always be used, so
it's hardcoded as a preamble to all output, and its externs are used
for advanced compilation.

Then, we have created two output modes (both of which produce
Javascript source maps):

#### `:debug`

* Writes to `(MODULE-NAME)-debug.js`.
* Uses unminifed React.
* Output is not optimised and is pretty printed.

#### `:production`

* Writes to `(MODULE-NAME).js`.
* Uses minifed React.
* Output is `:advanced` optimised and is not pretty printed.

Finally, we configure this service with data at the `:shadow` key in
  [project.clj](https://github.com/robert-stuttaford/tk-app-dev/tree/master/project.clj#L51-L59):

* `:public-path`: the path from which the app will load when
  included in a HTML file, as an absolute web path.
* `:target-path`: the path to which output should be written,
  relative to the project root.
* `:core-libs`: a vector of all the root namespaces to include in
  the `core.js` output (so that individual app modules don't have
  to). Dependent namespaces will be automatically included.
* `:externs`: a vector of the externs files to use when building
  `:production` mode.
* `:modules`: a vector of maps describing each app module, each with keys:
  * `:id`: a keyword to name the module. Used to produce the
    filename.
  * `:main`: the root namespace for the app module.

Each module defined in `:modules` will *exclude* any code that is
already present in `:core-libs`. It is up to us to ensure that both
the core and the app Javascript is loaded on the page, as can be seen
in the only web view we have set up here:

[src/tkad/web/routes.clj](https://github.com/robert-stuttaford/tk-app-dev/tree/master/src/tkad/web/routes.clj#L20-L21)

It's important to recognise that even with advanced optimisations,
these two Javascript files can interoperate!

## Composing services as systems

Ok! So now that we understand what these services do, we can finally
see how to compose them into two systems. It's actually rather
simple - it's all explained in the comments:

[dev/user.clj](https://github.com/robert-stuttaford/tk-app-dev/tree/master/dev/user.clj)

So, to actually start all of this up, you'd follow these steps:

```
git clone https://github.com/robert-stuttaford/tk-app-dev
cd tk-app-dev
lein repl
```

And once the REPL is up, start the dev system:

```
(user/dev-go)
```

And start the app system:

```
(user/app-go)
```

After all the dust settles, you should be able to visit
<http://localhost:8080> and see the `Hello! You're in debug mode!`
message rendered by the Om app.

Now, when you change any `.clj` or `.cljx` file, you'd use `(user/reset)` to reload
your changes and reset the app system (which restarts the web server
and ensures that any new schema is present in your database)!

And, when you change any `.cljx` or `.cljs` file, your ClojureScript code will
be automatically recompiled - usually quickly enough for it to be
ready by the time you refresh your browser.

Awesome!

### Caveat: an escape hatch for cljx

Sometimes you might end up with a code-path from `dev/user` that
depends on forms present in the `.clj` output of the code in `.cljx`
files, which, when missing, prevents the REPL from starting up.

In case you do, you can simply use this command to compile the cljx
via Leiningen:

```
lein with-profile cljx cljx
```

That'll invoke cljx in its own Leiningen profile which doesn't load
the `dev/` code at all.

## Emacs shortcuts

No Clojure how-to is complete without a snippet of Emacs lisp to add
to your dotfiles. Here are two simple keybinds for resetting the app
and dev systems respectively. The second one uses `shift+r` instead of
just `r`.

```clojure
(defun cider-repl-reset ()
  (interactive)
  (save-some-buffers)
  (with-current-buffer (cider-current-repl-buffer)
    (goto-char (point-max))
    (insert "(user/reset)")
    (cider-repl-return)))

(global-set-key (kbd "C-c r") 'cider-repl-reset)

(defun cider-repl-dev-reset ()
  (interactive)
  (save-some-buffers)
  (with-current-buffer (cider-current-repl-buffer)
    (goto-char (point-max))
    (insert "(user/dev-reset)")
    (cider-repl-return)))

(global-set-key (kbd "C-c R") 'cider-repl-dev-reset)
```

And that's it for today!
