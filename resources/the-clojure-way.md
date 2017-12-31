---
layout: page
title: The Clojure Way
---

What follows is a fairly comprehensive listing of the various pieces uses to build full-stack Clojure applications.

## Data

- Clojure syntax (EDN).
- REPL.
- Immutability.
- Dynamism.
- Structured code editing.

## Libraries to use, and how to compose them

- Server-side with Clojure:
  - Configuration.
  - HTTP.
  - Templating.
  - Routing.
  - Middleware:
    - Sessions.
    - AuthZ & authN, SSO, Tokens.
    - i18n.
  - APIs, like AWS.
- Client-side with ClojureScript:
  - Cljsbuild, Figwheel, REPL.
  - Rum, DataScript, core.async.
  - Interop, Google Closure, cljsjs.
- Cross-platform: Core.Async, Transit.

## Structuring codebases

- Leiningen.
- clj + cljs + cljc.
- Reloaded workflow.
- Code organisation:
  - Development-time vs run-time code.
  - Dealing with multiple apps, and library projects.
  - Dependency management.

## Datomic - coding, architecture, and tech ops

- Datomic's shape: `eavt` - [see my talk on this](https://youtu.be/4BhZshZyf9E>).
- Modelling domain data.
- Data as connector between services, thanks to "strong time".
- Model novelty as in your world as data - assertions and retractions.
- Query tactics.
- Auditability.
- Speculative databases.

Much of this applies to Datascript as well.

## Spec

With all the stuff covered above.

- Modelling.
- Generating data.
- Using data with spec.

## Testing

With all the stuff covered above.

- Example-based.
- Generative.
- Simulation.

## Profiling

- Instrumenting and measuring code at the REPL (with Tufte).
- Profiling the JVM with Java Mission Control.

## Builds & Deployments

- Verifying and packaging code.
- Deploying packaged code.

## Monitoring

With Datadog, and Sentry.

<hr>

# Tech Ops

## Managing

- State.
- Config.
- Infrastructure.

## CI

- Multiple environments.
- Git branching model.
- Github > Buildkite > AWS.

## Ops

- Change management.
- Error management.
- Logging.
- Service monitoring.
- Scaling.
- Security.
- Privacy.

## Developer tooling

- Test servers.
- Shell scripts.
