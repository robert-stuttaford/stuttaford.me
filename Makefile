.PHONY: all test

all: figwheel

figwheel:
	clojure -A\:dev dev/figwheel.clj

clean:
	rm -rf resources/public/js target

compile:
	clojure -m cljs.main -cf "{:source-map \"resources/public/js/stuttaford.min.js.map\"}" \
	    -d resources/public/js/out -t browser -O advanced -o resources/public/js/stuttaford.min.js -c stuttaford.client
