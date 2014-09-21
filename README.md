# stuttaford.me blog

Source code for my blog at <http://www.stuttaford.me>

## Installation

Download from <https://github.com/robert-stuttaford/stuttaford.me>

## Usage

To run as a Ring web app:

```
lein repl
(user/reset)
```

Then visit <http://localhost:3000>.

To generate a site:

```
lein generate
```

To publish the generated site:

```
./publish.sh
```

This assumes that you have write permissions for the remote `origin`,
as it'll push to the `gh-pages` branch on that remote.

## License

Copyright © 2014 Robert Stuttaford

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
