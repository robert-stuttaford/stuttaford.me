goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.crypt.base64');
goog.require('goog.crypt.base64');
goog.require('cljs.reader');
goog.require('clojure.string');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"http","http",382524695),(80),new cljs.core.Keyword(null,"https","https",-1983909665),(443),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),(3306),new cljs.core.Keyword(null,"postgresql","postgresql",-1568339962),(5432),new cljs.core.Keyword(null,"rabbitmq","rabbitmq",1046897371),(5672)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
* Split the string `s` by the regex `pattern`.
*/
no.en.core.split_by_regex = (function split_by_regex(s,pattern){if(cljs.core.sequential_QMARK_(s))
{return s;
} else
{if(cljs.core.not(clojure.string.blank_QMARK_(s)))
{return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,pattern);
} else
{return null;
}
}
});
/**
* Split the string `s` by comma.
*/
no.en.core.split_by_comma = (function split_by_comma(s){return no.en.core.split_by_regex(s,/\s*,\s*/);
});
/**
* Returns `bytes` as an UTF-8 encoded string.
*/
no.en.core.utf8_string = (function utf8_string(bytes){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("utf8-string not implemented yet",bytes);
});
/**
* Returns `s` as a Base64 encoded string.
*/
no.en.core.base64_encode = (function base64_encode(bytes){if(cljs.core.truth_(bytes))
{var G__31211 = bytes;var G__31212 = false;return goog.crypt.base64.encodeString(G__31211,G__31212);
} else
{return null;
}
});
/**
* Returns `s` as a Base64 decoded string.
*/
no.en.core.base64_decode = (function base64_decode(s){if(cljs.core.truth_(s))
{var G__31215 = s;var G__31216 = false;return goog.crypt.base64.decodeString(G__31215,G__31216);
} else
{return null;
}
});
/**
* Removes all map entries where the value of the entry is empty.
*/
no.en.core.compact_map = (function compact_map(m){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);if(((v == null)) || (((cljs.core.map_QMARK_(v)) || (cljs.core.sequential_QMARK_(v))) && (cljs.core.empty_QMARK_(v))))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else
{return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
* Returns `s` as an URL encoded string.
* @param {...*} var_args
*/
no.en.core.url_encode = (function() { 
var url_encode__delegate = function (s,p__31217){var vec__31220 = p__31217;var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31220,(0),null);if(cljs.core.truth_(s))
{return clojure.string.replace((function (){var G__31221 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));return encodeURIComponent(G__31221);
})(),"*","%2A");
} else
{return null;
}
};
var url_encode = function (s,var_args){
var p__31217 = null;if (arguments.length > 1) {
  p__31217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_encode__delegate.call(this,s,p__31217);};
url_encode.cljs$lang$maxFixedArity = 1;
url_encode.cljs$lang$applyTo = (function (arglist__31222){
var s = cljs.core.first(arglist__31222);
var p__31217 = cljs.core.rest(arglist__31222);
return url_encode__delegate(s,p__31217);
});
url_encode.cljs$core$IFn$_invoke$arity$variadic = url_encode__delegate;
return url_encode;
})()
;
/**
* Returns `s` as an URL decoded string.
* @param {...*} var_args
*/
no.en.core.url_decode = (function() { 
var url_decode__delegate = function (s,p__31223){var vec__31226 = p__31223;var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31226,(0),null);if(cljs.core.truth_(s))
{var G__31227 = s;return decodeURIComponent(G__31227);
} else
{return null;
}
};
var url_decode = function (s,var_args){
var p__31223 = null;if (arguments.length > 1) {
  p__31223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_decode__delegate.call(this,s,p__31223);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__31228){
var s = cljs.core.first(arglist__31228);
var p__31223 = cljs.core.rest(arglist__31228);
return url_decode__delegate(s,p__31223);
});
url_decode.cljs$core$IFn$_invoke$arity$variadic = url_decode__delegate;
return url_decode;
})()
;
no.en.core.pow = (function pow(n,x){return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow((1024),(4)),no.en.core.pow((1024),(1)),no.en.core.pow((1024),(3)),no.en.core.pow((1024),(2)),no.en.core.pow((1024),(8)),no.en.core.pow((1024),(7)),no.en.core.pow((1024),(6)),no.en.core.pow((1024),(0)),no.en.core.pow((1024),(5))]);
no.en.core.apply_unit = (function apply_unit(number,unit){if(typeof unit === 'string')
{var G__31231 = clojure.string.upper_case(unit);switch (G__31231) {
default:
var G__31232 = unit;switch (G__31232) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit))));

}

}
} else
{return number;
}
});
no.en.core.parse_number = (function parse_number(s,parse_fn){var temp__4124__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var number = (function (){var G__31237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__31237) : parse_fn.call(null,G__31237));
})();var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));if(cljs.core.not((function (){var G__31238 = number;return isNaN(G__31238);
})()))
{return no.en.core.apply_unit(number,unit);
} else
{return null;
}
} else
{return null;
}
});
no.en.core.parse_bytes = (function parse_bytes(s){var temp__4124__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var number = cljs.reader.read_string(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));return cljs.core.long$((cljs.core.long$(cljs.reader.read_string((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)))))) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(no.en.core.byte_scale,clojure.string.upper_case((function (){var or__19663__auto__ = unit;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return "";
}
})()),(1))));
} else
{return null;
}
});
/**
* Parse `s` as a integer number.
*/
no.en.core.parse_integer = (function parse_integer(s){return no.en.core.parse_number(s,(function (p1__31239_SHARP_){var G__31241 = p1__31239_SHARP_;return parseInt(G__31241);
}));
});
/**
* Parse `s` as a long number.
*/
no.en.core.parse_long = (function parse_long(s){return no.en.core.parse_number(s,(function (p1__31242_SHARP_){var G__31244 = p1__31242_SHARP_;return parseInt(G__31244);
}));
});
/**
* Parse `s` as a double number.
*/
no.en.core.parse_double = (function parse_double(s){return no.en.core.parse_number(s,(function (p1__31245_SHARP_){var G__31247 = p1__31245_SHARP_;return parseFloat(G__31247);
}));
});
/**
* Parse `s` as a float number.
*/
no.en.core.parse_float = (function parse_float(s){return no.en.core.parse_number(s,(function (p1__31248_SHARP_){var G__31250 = p1__31248_SHARP_;return parseFloat(G__31250);
}));
});
/**
* Format the map `m` into a query parameter string.
*/
no.en.core.format_query_params = (function format_query_params(m){var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31253_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__31253_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31252_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__31252_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__31252_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31251_SHARP_){return clojure.string.blank_QMARK_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__31251_SHARP_))));
}),cljs.core.seq(m)))));if(cljs.core.not(clojure.string.blank_QMARK_(params)))
{return params;
} else
{return null;
}
});
/**
* Format the Ring map as an url.
*/
no.en.core.format_url = (function format_url(m){if(!(cljs.core.empty_QMARK_(m)))
{var query_params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(m);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m)))+"://"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var map__31256 = m;var map__31256__$1 = ((cljs.core.seq_QMARK_(map__31256))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31256):map__31256);var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31256__$1,new cljs.core.Keyword(null,"password","password",417022471));var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31256__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(cljs.core.truth_(user))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(user)?user:null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(password)?(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)):null))+"@");
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"server-name","server-name",-1012104295).cljs$core$IFn$_invoke$arity$1(m))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"server-port","server-port",663745648).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var port = temp__4124__auto__;if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__31257 = new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(m);return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__31257) : no.en.core.port_number.call(null,G__31257));
})())))
{return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(port));
} else
{return null;
}
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_(query_params))))?"/":new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(m)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(query_params)))?("?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.format_query_params(query_params))):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(m))):null)));
} else
{return null;
}
});
/**
* Parse `s` as a percentage.
*/
no.en.core.parse_percent = (function parse_percent(s){return no.en.core.parse_double(clojure.string.replace(s,"%",""));
});
/**
* Quote the special characters in `s` that are used in regular expressions.
*/
no.en.core.pattern_quote = (function pattern_quote(s){return clojure.string.replace(cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
* Returns the first string that separates the components in `s`.
*/
no.en.core.separator = (function separator(s){var temp__4124__auto__ = cljs.core.re_matches(/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(2));
} else
{return null;
}
});
/**
* Parse the query parameter string `s` and return a map.
*/
no.en.core.parse_query_params = (function parse_query_params(s){if(cljs.core.truth_(s))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__31260_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(cljs.core.first(p1__31260_SHARP_))),no.en.core.url_decode(cljs.core.second(p1__31260_SHARP_))],null));
}),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31259_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__31259_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31258_SHARP_){return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__31258_SHARP_,/=/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/)))], 0)));
} else
{return null;
}
});
/**
* Parse the url `s` and return a Ring compatible map.
*/
no.en.core.parse_url = (function parse_url(s){var temp__4124__auto__ = cljs.core.re_matches(no.en.core.url_regex,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var scheme = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"scheme","scheme",90199613)],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),(function (){var or__19663__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var G__31262 = scheme;return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__31262) : no.en.core.port_number.call(null,G__31262));
}
})(),no.en.core.parse_query_params(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3)),scheme]));
} else
{return null;
}
});
/**
* Executes thunk. If an exception is thrown, will retry. At most n retries
* are done. If still some exception is thrown it is bubbled upwards in
* the call chain.
*/
no.en.core.with_retries_STAR_ = (function with_retries_STAR_(n,thunk){var n__$1 = n;while(true){
var temp__4124__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
})()], null);
}catch (e31265){if((e31265 instanceof Error))
{var e = e31265;if((n__$1 === (0)))
{throw e;
} else
{return null;
}
} else
{throw e31265;

}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;var G__31266 = (0);return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(G__31266) : result.call(null,G__31266));
} else
{{
var G__31267 = (n__$1 - (1));
n__$1 = G__31267;
continue;
}
}
break;
}
});
//# sourceMappingURL=core.js.map