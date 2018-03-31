.PHONY: all test

all: figwheel

serve:
	clojure -Aserve -a serve

generate:
	clojure -Agenerate -a generate

figwheel:
	clojure -A\:dev dev/figwheel.clj

clean:
	rm -rf resources/public/js target

compile:
	clojure -m cljs.main -co "{:source-map \"resources/public/js/stuttaford.min.js.map\"}" \
	    -d resources/public/js/out -t browser -O advanced -o resources/public/js/stuttaford.min.js -c stuttaford.client

outdated:
	clojure -Aoutdated -a outdated
