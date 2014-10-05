goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core.IRouteMatches = (function (){var obj47366 = {};return obj47366;
})();
secretary.core.route_matches = (function route_matches(this$,route){if((function (){var and__19277__auto__ = this$;if(and__19277__auto__)
{return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else
{return and__19277__auto__;
}
})())
{return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else
{var x__20556__auto__ = (((this$ == null))?null:this$);return (function (){var or__19289__auto__ = (secretary.core.route_matches[(function (){var G__47370 = x__20556__auto__;return goog.typeOf(G__47370);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (secretary.core.route_matches["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});
secretary.core.IRouteValue = (function (){var obj47372 = {};return obj47372;
})();
secretary.core.route_value = (function route_value(this$){if((function (){var and__19277__auto__ = this$;if(and__19277__auto__)
{return this$.secretary$core$IRouteValue$route_value$arity$1;
} else
{return and__19277__auto__;
}
})())
{return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else
{var x__20556__auto__ = (((this$ == null))?null:this$);return (function (){var or__19289__auto__ = (secretary.core.route_value[(function (){var G__47376 = x__20556__auto__;return goog.typeOf(G__47376);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (secretary.core.route_value["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});
secretary.core.IRenderRoute = (function (){var obj47378 = {};return obj47378;
})();
secretary.core.render_route = (function() {
var render_route = null;
var render_route__1 = (function (this$){if((function (){var and__19277__auto__ = this$;if(and__19277__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else
{return and__19277__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else
{var x__20556__auto__ = (((this$ == null))?null:this$);return (function (){var or__19289__auto__ = (secretary.core.render_route[(function (){var G__47384 = x__20556__auto__;return goog.typeOf(G__47384);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (secretary.core.render_route["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});
var render_route__2 = (function (this$,params){if((function (){var and__19277__auto__ = this$;if(and__19277__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else
{return and__19277__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else
{var x__20556__auto__ = (((this$ == null))?null:this$);return (function (){var or__19289__auto__ = (secretary.core.render_route[(function (){var G__47386 = x__20556__auto__;return goog.typeOf(G__47386);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (secretary.core.render_route["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});
render_route = function(this$,params){
switch(arguments.length){
case 1:
return render_route__1.call(this,this$);
case 2:
return render_route__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_route.cljs$core$IFn$_invoke$arity$1 = render_route__1;
render_route.cljs$core$IFn$_invoke$arity$2 = render_route__2;
return render_route;
})()
;
secretary.core._STAR_config_STAR_ = (function (){var G__47387 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47387) : cljs.core.atom.call(null,G__47387));
})();
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__47389 = secretary.core._STAR_config_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47389) : cljs.core.deref.call(null,G__47389));
})(),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
/**
* Given a key and a value return and encoded key-value pair.
*/
secretary.core.encode_pair = (function (){var method_table__20928__auto__ = (function (){var G__47390 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47390) : cljs.core.atom.call(null,G__47390));
})();var prefer_table__20929__auto__ = (function (){var G__47391 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47391) : cljs.core.atom.call(null,G__47391));
})();var method_cache__20930__auto__ = (function (){var G__47392 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47392) : cljs.core.atom.call(null,G__47392));
})();var cached_hierarchy__20931__auto__ = (function (){var G__47393 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47393) : cljs.core.atom.call(null,G__47393));
})();var hierarchy__20932__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("encode-pair",((function (method_table__20928__auto__,prefer_table__20929__auto__,method_cache__20930__auto__,cached_hierarchy__20931__auto__,hierarchy__20932__auto__){
return (function (p__47394){var vec__47395 = p__47394;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47395,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47395,(1),null);if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v)))
{return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else
{if((function (){var or__19289__auto__ = cljs.core.map_QMARK_(v);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var G__47397 = v;if(G__47397)
{var bit__20605__auto__ = (G__47397.cljs$lang$protocol_mask$partition0$ & (67108864));if((bit__20605__auto__) || (G__47397.cljs$core$IRecord$))
{return true;
} else
{if((!G__47397.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__47397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__47397);
}
}
})())
{return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else
{return null;
}
}
});})(method_table__20928__auto__,prefer_table__20929__auto__,method_cache__20930__auto__,cached_hierarchy__20931__auto__,hierarchy__20932__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20932__auto__,method_table__20928__auto__,prefer_table__20929__auto__,method_cache__20930__auto__,cached_hierarchy__20931__auto__));
})();
secretary.core.key_index = (function() {
var key_index = null;
var key_index__1 = (function (k){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"[]");
});
var key_index__2 = (function (k,index){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"]");
});
key_index = function(k,index){
switch(arguments.length){
case 1:
return key_index__1.call(this,k);
case 2:
return key_index__2.call(this,k,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
key_index.cljs$core$IFn$_invoke$arity$1 = key_index__1;
key_index.cljs$core$IFn$_invoke$arity$2 = key_index__2;
return key_index;
})()
;
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__47398){var vec__47399 = p__47398;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47399,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47399,(1),null);var encoded = cljs.core.map_indexed(((function (vec__47399,k,v){
return (function (i,x){var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));var G__47400 = pair;return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__47400) : secretary.core.encode_pair.call(null,G__47400));
});})(vec__47399,k,v))
,v);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__47401){var vec__47402 = p__47401;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47402,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47402,(1),null);var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__47402,k,v){
return (function (p__47403){var vec__47404 = p__47403;var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47404,(0),null);var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47404,(1),null);var G__47405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__47405) : secretary.core.encode_pair.call(null,G__47405));
});})(vec__47402,k,v))
,v);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__47406){var vec__47407 = p__47406;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47407,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47407,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__47408 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__47408) : secretary.core.encode.call(null,G__47408));
})()));
}));
/**
* Convert a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
* Like js/encodeURIComponent excepts ignore slashes.
*/
secretary.core.encode_uri = (function encode_uri(uri){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
* Parse a value from a serialized query-string key index. If the
* index value is empty 0 is returned, if it's a digit it returns the
* js/parseInt value, otherwise it returns the extracted index.
*/
secretary.core.parse_path = (function parse_path(path){var index_re = /\[([^\]]*)\]*/;var parts = cljs.core.re_seq(index_re,path);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__47412){var vec__47413 = p__47412;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47413,(0),null);var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47413,(1),null);if(cljs.core.empty_QMARK_(part))
{return (0);
} else
{if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part)))
{var G__47414 = part;return parseInt(G__47414);
} else
{return part;

}
}
});})(index_re,parts))
,parts);
});
/**
* Return a key path for a serialized query-string entry.
* 
* Ex.
* 
* (key-parse "foo[][a][][b]")
* ;; => ("foo" 0 "a" 0 "b")
* 
*/
secretary.core.key_parse = (function key_parse(k){var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;var vec__47416 = cljs.core.re_matches(re,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(0),null);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(1),null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47416,(2),null);var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);return cljs.core.cons(key,parsed_path);
});
/**
* Like assoc-in but numbers in path create vectors instead of maps.
* 
* Ex.
* 
* (assoc-in-query-params {} ["foo" 0] 1)
* ;; => {"foo" [1]}
* 
* (assoc-in-query-params {} ["foo" 0 "a"] 1)
* ;; => {"foo" [{"a" 1}]}
* 
*/
secretary.core.assoc_in_query_params = (function assoc_in_query_params(m,path,v){var heads = (function (xs){return cljs.core.map_indexed((function (i,_){return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});var hs = heads(path);var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h))))))
{return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else
{return m__$1;
}
});})(heads,hs))
,m,hs);if((cljs.core.last(path) === (0)))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else
{return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){var vec__47419 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47419,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47419,(1),null);return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(function (){var G__47420 = v;return (secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(G__47420) : secretary.core.decode.call(null,G__47420));
})());
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);var params__$1 = clojure.walk.keywordize_keys(params);return params__$1;
});
/**
* Like re-matches but result is a always vector. If re does not
* capture matches then it will return a vector of [m m] as if it had a
* single capture. Other wise it maintains consistent behavior with
* re-matches.
*/
secretary.core.re_matches_STAR_ = (function re_matches_STAR_(re,s){var ms = cljs.core.re_matches(re,s);if(cljs.core.truth_(ms))
{if(cljs.core.sequential_QMARK_(ms))
{return ms;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else
{return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function re_escape(s){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){if(cljs.core.truth_((function (){var G__47422 = c;return (secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(G__47422) : secretary.core.re_escape_chars.call(null,G__47422));
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)+"\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
}
}),"",s);
});
/**
* Attempt to lex a single token from s with clauses. Each clause is a
* pair of [regexp action] where action is a function. regexp is
* expected to begin with ^ and contain a single capture. If the
* attempt is successful a vector of [s-without-token (action capture)]
* is returned. Otherwise the result is nil.
*/
secretary.core.lex_STAR_ = (function lex_STAR_(s,clauses){return cljs.core.some((function (p__47427){var vec__47428 = p__47427;var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47428,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47428,(1),null);var temp__4126__auto__ = cljs.core.re_find(re,s);if(cljs.core.truth_(temp__4126__auto__))
{var vec__47429 = temp__4126__auto__;var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47429,(0),null);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47429,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(function (){var G__47430 = c;return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__47430) : action.call(null,G__47430));
})()], null);
} else
{return null;
}
}),clauses);
});
/**
* Return a pair of [regex params]. regex is a compiled regular
* expression for matching routes. params is a list of route param
* names (:*, :id, etc.).
*/
secretary.core.lex_route = (function lex_route(s,clauses){var s__$1 = s;var pattern = "";var params = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core.seq(s__$1))
{var vec__47433 = secretary.core.lex_STAR_(s__$1,clauses);var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47433,(0),null);var vec__47434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47433,(1),null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47434,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47434,(1),null);{
var G__47435 = s__$2;
var G__47436 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
var G__47437 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__47435;
pattern = G__47436;
params = G__47437;
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern(("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)+"$")),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
* Given a route return an instance of IRouteMatches.
*/
secretary.core.compile_route = (function compile_route(orig_route){var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){var r = "(.*?)";var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):new cljs.core.Keyword(null,"*","*",-1294732318));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){var r = "([^,;?/]+)";var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){var r = secretary.core.re_escape(v);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);var vec__47443 = secretary.core.lex_route(orig_route,clauses);var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47443,(0),null);var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47443,(1),null);if(typeof secretary.core.t47444 !== 'undefined')
{} else
{
/**
* @constructor
*/
secretary.core.t47444 = (function (params,re,vec__47443,clauses,orig_route,compile_route,meta47445){
this.params = params;
this.re = re;
this.vec__47443 = vec__47443;
this.clauses = clauses;
this.orig_route = orig_route;
this.compile_route = compile_route;
this.meta47445 = meta47445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
secretary.core.t47444.cljs$lang$type = true;
secretary.core.t47444.cljs$lang$ctorStr = "secretary.core/t47444";
secretary.core.t47444.cljs$lang$ctorPrWriter = ((function (clauses,vec__47443,re,params){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"secretary.core/t47444");
});})(clauses,vec__47443,re,params))
;
secretary.core.t47444.prototype.secretary$core$IRouteMatches$ = true;
secretary.core.t47444.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__47443,re,params){
return (function (_,route){var self__ = this;
var ___$1 = this;var temp__4126__auto__ = secretary.core.re_matches_STAR_(self__.re,route);if(cljs.core.truth_(temp__4126__auto__))
{var vec__47447 = temp__4126__auto__;var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47447,(0),null);var ms = cljs.core.nthnext(vec__47447,(1));return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else
{return null;
}
});})(clauses,vec__47443,re,params))
;
secretary.core.t47444.prototype.secretary$core$IRouteValue$ = true;
secretary.core.t47444.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__47443,re,params){
return (function (this$){var self__ = this;
var this$__$1 = this;return self__.orig_route;
});})(clauses,vec__47443,re,params))
;
secretary.core.t47444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__47443,re,params){
return (function (_47446){var self__ = this;
var _47446__$1 = this;return self__.meta47445;
});})(clauses,vec__47443,re,params))
;
secretary.core.t47444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__47443,re,params){
return (function (_47446,meta47445__$1){var self__ = this;
var _47446__$1 = this;return (new secretary.core.t47444(self__.params,self__.re,self__.vec__47443,self__.clauses,self__.orig_route,self__.compile_route,meta47445__$1));
});})(clauses,vec__47443,re,params))
;
secretary.core.__GT_t47444 = ((function (clauses,vec__47443,re,params){
return (function __GT_t47444(params__$1,re__$1,vec__47443__$1,clauses__$1,orig_route__$1,compile_route__$1,meta47445){return (new secretary.core.t47444(params__$1,re__$1,vec__47443__$1,clauses__$1,orig_route__$1,compile_route__$1,meta47445));
});})(clauses,vec__47443,re,params))
;
}
return (new secretary.core.t47444(params,re,vec__47443,clauses,orig_route,compile_route,null));
});
/**
* @param {...*} var_args
*/
secretary.core.render_route_STAR_ = (function() { 
var render_route_STAR___delegate = function (obj,args){if((function (){var G__47449 = obj;if(G__47449)
{var bit__20605__auto__ = null;if(cljs.core.truth_((function (){var or__19289__auto__ = bit__20605__auto__;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return G__47449.secretary$core$IRenderRoute$;
}
})()))
{return true;
} else
{if((!G__47449.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__47449);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__47449);
}
})())
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else
{return null;
}
};
var render_route_STAR_ = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return render_route_STAR___delegate.call(this,obj,args);};
render_route_STAR_.cljs$lang$maxFixedArity = 1;
render_route_STAR_.cljs$lang$applyTo = (function (arglist__47450){
var obj = cljs.core.first(arglist__47450);
var args = cljs.core.rest(arglist__47450);
return render_route_STAR___delegate(obj,args);
});
render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = render_route_STAR___delegate;
return render_route_STAR_;
})()
;
secretary.core._STAR_routes_STAR_ = (function (){var G__47451 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47451) : cljs.core.atom.call(null,G__47451));
})();
secretary.core.add_route_BANG_ = (function add_route_BANG_(obj,action){var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function remove_route_BANG_(obj){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){return cljs.core.filterv((function (p__47454){var vec__47455 = p__47454;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47455,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47455,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function reset_routes_BANG_(){var G__47458 = secretary.core._STAR_routes_STAR_;var G__47459 = cljs.core.PersistentVector.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__47458,G__47459) : cljs.core.reset_BANG_.call(null,G__47458,G__47459));
});
secretary.core.locate_route = (function locate_route(route){return cljs.core.some((function (p__47463){var vec__47464 = p__47463;var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47464,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47464,(1),null);var temp__4126__auto__ = secretary.core.route_matches(compiled_route,route);if(cljs.core.truth_(temp__4126__auto__))
{var params = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else
{return null;
}
}),(function (){var G__47465 = secretary.core._STAR_routes_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47465) : cljs.core.deref.call(null,G__47465));
})());
});
/**
* Returns original route value as set in defroute when passed a URI path.
*/
secretary.core.locate_route_value = (function locate_route_value(uri){return secretary.core.route_value(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function prefix(){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))));
});
secretary.core.uri_without_prefix = (function uri_without_prefix(uri){return clojure.string.replace(uri,cljs.core.re_pattern(("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.prefix()))),"");
});
/**
* Ensures that the uri has a leading slash
*/
secretary.core.uri_with_leading_slash = (function uri_with_leading_slash(uri){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri)))
{return uri;
} else
{return ("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri));
}
});
/**
* Dispatch an action for a given route if it matches the URI path.
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__47469 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47469,(0),null);var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47469,(1),null);var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params(query_string)], null):null);var map__47470 = secretary.core.locate_route(uri_path__$1);var map__47470__$1 = ((cljs.core.seq_QMARK_(map__47470))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47470):map__47470);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47470__$1,new cljs.core.Keyword(null,"params","params",710516235));var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47470__$1,new cljs.core.Keyword(null,"action","action",-811238024));var action__$1 = (function (){var or__19289__auto__ = action;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.identity;
}
})();var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));var G__47471 = params__$1;return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(G__47471) : action__$1.call(null,G__47471));
});
secretary.core.invalid_params = (function invalid_params(params,validations){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__47474){var vec__47475 = p__47474;var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47475,(0),null);var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47475,(1),null);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);if(cljs.core.truth_(cljs.core.re_matches(validation,value)))
{return m;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function params_valid_QMARK_(params,validations){return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__47476,route){var vec__47477 = p__47476;var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47477,(0),null);var validations = cljs.core.nthnext(vec__47477,(1));var vec__47478 = this;var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47478,(0),null);var validations__$1 = cljs.core.nthnext(vec__47478,(1));var params = secretary.core.compile_route(route_string__$1).secretary$core$IRouteMatches$route_matches$arity$2(null,route);if(secretary.core.params_valid_QMARK_(params,validations__$1))
{return params;
} else
{return null;
}
});
RegExp.prototype.secretary$core$IRouteMatches$ = true;
RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){var this$__$1 = this;var temp__4126__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);if(cljs.core.truth_(temp__4126__auto__))
{var vec__47479 = temp__4126__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47479,(0),null);var ms = cljs.core.nthnext(vec__47479,(1));return cljs.core.vec(ms);
} else
{return null;
}
});
(secretary.core.IRouteMatches["string"] = true);
(secretary.core.route_matches["string"] = (function (this$,route){return secretary.core.compile_route(this$).secretary$core$IRouteMatches$route_matches$arity$2(null,route);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__47480){var vec__47481 = p__47480;var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47481,(0),null);var validations = cljs.core.nthnext(vec__47481,(1));var vec__47482 = this;var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47482,(0),null);var validations__$1 = cljs.core.nthnext(vec__47482,(1));return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
RegExp.prototype.secretary$core$IRouteValue$ = true;
RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
(secretary.core.IRouteValue["string"] = true);
(secretary.core.route_value["string"] = (function (this$){return secretary.core.compile_route(this$).secretary$core$IRouteValue$route_value$arity$1(null);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){var this$__$1 = this;return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__47483,params){var vec__47484 = p__47483;var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47484,(0),null);var validations = cljs.core.nthnext(vec__47484,(1));var vec__47485 = this;var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47485,(0),null);var validations__$1 = cljs.core.nthnext(vec__47485,(1));var invalid = secretary.core.invalid_params(params,validations__$1);if(cljs.core.empty_QMARK_(invalid))
{return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});
(secretary.core.IRenderRoute["string"] = true);
(secretary.core.render_route["string"] = (function (this$){return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
}));
(secretary.core.render_route["string"] = (function (this$,params){var map__47486 = params;var map__47486__$1 = ((cljs.core.seq_QMARK_(map__47486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47486):map__47486);var m = map__47486__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47486__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var a = (function (){var G__47487 = m;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47487) : cljs.core.atom.call(null,G__47487));
})();var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__47486,map__47486__$1,m,query_params,a){
return (function ($1){var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__47488 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47488) : cljs.core.deref.call(null,G__47488));
})(),lookup);var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));
return secretary.core.encode_uri(cljs.core.first(v));
})():(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));return replacement;
});})(map__47486,map__47486__$1,m,query_params,a))
);var path__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));var temp__4124__auto__ = (function (){var and__19277__auto__ = query_params;if(cljs.core.truth_(and__19277__auto__))
{return secretary.core.encode_query_params(query_params);
} else
{return and__19277__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var query_string = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string));
} else
{return path__$1;
}
}));
//# sourceMappingURL=core.js.map