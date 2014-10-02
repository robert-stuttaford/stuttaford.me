goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__19335__auto__ = v;if(cljs.core.truth_(and__19335__auto__))
{return (v > (0));
} else
{return and__19335__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not(clojure.string.blank_QMARK_(s)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34219_SHARP_,p2__34218_SHARP_){var vec__34221 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__34218_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34221,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34221,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34219_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__34223 = url;return goog.Uri.parse(G__34223);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34224_SHARP_){return cljs_http.client.encode_val(k,p1__34224_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__34225){var vec__34227 = p__34225;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34227,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34227,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__34228_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34228_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__19335__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__19335__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__19335__auto__;
}
})()))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__34231 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34231) : client.call(null,G__34231));
} else
{var G__34232 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34232) : client.call(null,G__34232));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22717__auto___34271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___34271,channel){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___34271,channel){
return (function (state_34260){var state_val_34261 = (state_34260[(1)]);if((state_val_34261 === (2)))
{var inst_34254 = (state_34260[(2)]);var inst_34255 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34256 = cljs_http.client.decode_body(inst_34254,cljs.reader.read_string,"application/edn",inst_34255);var inst_34257 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34256);var inst_34258 = cljs.core.async.close_BANG_(channel);var state_34260__$1 = (function (){var statearr_34262 = state_34260;(statearr_34262[(7)] = inst_34257);
return statearr_34262;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34260__$1,inst_34258);
} else
{if((state_val_34261 === (1)))
{var inst_34252 = (function (){var G__34263 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34263) : client.call(null,G__34263));
})();var state_34260__$1 = state_34260;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34260__$1,(2),inst_34252);
} else
{return null;
}
}
});})(c__22717__auto___34271,channel))
;return ((function (switch__22702__auto__,c__22717__auto___34271,channel){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_34267 = [null,null,null,null,null,null,null,null];(statearr_34267[(0)] = state_machine__22703__auto__);
(statearr_34267[(1)] = (1));
return statearr_34267;
});
var state_machine__22703__auto____1 = (function (state_34260){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_34260);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e34268){if((e34268 instanceof Object))
{var ex__22706__auto__ = e34268;var statearr_34269_34272 = state_34260;(statearr_34269_34272[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34260);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34268;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34273 = state_34260;
state_34260 = G__34273;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_34260){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_34260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___34271,channel))
})();var state__22719__auto__ = (function (){var statearr_34270 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_34270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___34271);
return statearr_34270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___34271,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__34274){var vec__34278 = p__34274;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34278,(0),null);return ((function (vec__34278,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__19357__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__34279 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34279) : client.call(null,G__34279));
} else
{var G__34280 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34280) : client.call(null,G__34280));
}
});
;})(vec__34278,accept))
};
var wrap_accept = function (client,var_args){
var p__34274 = null;if (arguments.length > 1) {
  p__34274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__34274);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__34281){
var client = cljs.core.first(arglist__34281);
var p__34274 = cljs.core.rest(arglist__34281);
return wrap_accept__delegate(client,p__34274);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__34282){var vec__34286 = p__34282;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34286,(0),null);return ((function (vec__34286,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__19357__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__34287 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34287) : client.call(null,G__34287));
} else
{var G__34288 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34288) : client.call(null,G__34288));
}
});
;})(vec__34286,content_type))
};
var wrap_content_type = function (client,var_args){
var p__34282 = null;if (arguments.length > 1) {
  p__34282 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__34282);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__34289){
var client = cljs.core.first(arglist__34289);
var p__34282 = cljs.core.rest(arglist__34289);
return wrap_content_type__delegate(client,p__34282);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var map__34293 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__34293__$1 = ((cljs.core.seq_QMARK_(map__34293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34293):map__34293);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34293__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34293__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));var G__34294 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34294) : client.call(null,G__34294));
} else
{var G__34295 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34295) : client.call(null,G__34295));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__34318 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__34318__$1 = ((cljs.core.seq_QMARK_(map__34318))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34318):map__34318);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34318__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34318__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__22717__auto___34339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___34339,channel,map__34318,map__34318__$1,decoding_opts,decoding){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___34339,channel,map__34318,map__34318__$1,decoding_opts,decoding){
return (function (state_34328){var state_val_34329 = (state_34328[(1)]);if((state_val_34329 === (2)))
{var inst_34321 = (state_34328[(2)]);var inst_34322 = (function (){var response = inst_34321;return ((function (response,inst_34321,state_val_34329,c__22717__auto___34339,channel,map__34318,map__34318__$1,decoding_opts,decoding){
return (function (p1__34296_SHARP_){return cljs_http.util.transit_decode(p1__34296_SHARP_,decoding,decoding_opts);
});
;})(response,inst_34321,state_val_34329,c__22717__auto___34339,channel,map__34318,map__34318__$1,decoding_opts,decoding))
})();var inst_34323 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34324 = cljs_http.client.decode_body(inst_34321,inst_34322,"application/transit+json",inst_34323);var inst_34325 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34324);var inst_34326 = cljs.core.async.close_BANG_(channel);var state_34328__$1 = (function (){var statearr_34330 = state_34328;(statearr_34330[(7)] = inst_34325);
return statearr_34330;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34328__$1,inst_34326);
} else
{if((state_val_34329 === (1)))
{var inst_34319 = (function (){var G__34331 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34331) : client.call(null,G__34331));
})();var state_34328__$1 = state_34328;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34328__$1,(2),inst_34319);
} else
{return null;
}
}
});})(c__22717__auto___34339,channel,map__34318,map__34318__$1,decoding_opts,decoding))
;return ((function (switch__22702__auto__,c__22717__auto___34339,channel,map__34318,map__34318__$1,decoding_opts,decoding){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_34335 = [null,null,null,null,null,null,null,null];(statearr_34335[(0)] = state_machine__22703__auto__);
(statearr_34335[(1)] = (1));
return statearr_34335;
});
var state_machine__22703__auto____1 = (function (state_34328){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_34328);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e34336){if((e34336 instanceof Object))
{var ex__22706__auto__ = e34336;var statearr_34337_34340 = state_34328;(statearr_34337_34340[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34336;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34341 = state_34328;
state_34328 = G__34341;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_34328){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_34328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___34339,channel,map__34318,map__34318__$1,decoding_opts,decoding))
})();var state__22719__auto__ = (function (){var statearr_34338 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_34338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___34339);
return statearr_34338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___34339,channel,map__34318,map__34318__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__34344 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34344) : client.call(null,G__34344));
} else
{var G__34345 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34345) : client.call(null,G__34345));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22717__auto___34384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___34384,channel){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___34384,channel){
return (function (state_34373){var state_val_34374 = (state_34373[(1)]);if((state_val_34374 === (2)))
{var inst_34367 = (state_34373[(2)]);var inst_34368 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34369 = cljs_http.client.decode_body(inst_34367,cljs_http.util.json_decode,"application/json",inst_34368);var inst_34370 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34369);var inst_34371 = cljs.core.async.close_BANG_(channel);var state_34373__$1 = (function (){var statearr_34375 = state_34373;(statearr_34375[(7)] = inst_34370);
return statearr_34375;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34373__$1,inst_34371);
} else
{if((state_val_34374 === (1)))
{var inst_34365 = (function (){var G__34376 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34376) : client.call(null,G__34376));
})();var state_34373__$1 = state_34373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34373__$1,(2),inst_34365);
} else
{return null;
}
}
});})(c__22717__auto___34384,channel))
;return ((function (switch__22702__auto__,c__22717__auto___34384,channel){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_34380 = [null,null,null,null,null,null,null,null];(statearr_34380[(0)] = state_machine__22703__auto__);
(statearr_34380[(1)] = (1));
return statearr_34380;
});
var state_machine__22703__auto____1 = (function (state_34373){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_34373);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e34381){if((e34381 instanceof Object))
{var ex__22706__auto__ = e34381;var statearr_34382_34385 = state_34373;(statearr_34382_34385[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34373);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34381;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34386 = state_34373;
state_34373 = G__34386;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_34373){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_34373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___34384,channel))
})();var state__22719__auto__ = (function (){var statearr_34383 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_34383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___34384);
return statearr_34383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___34384,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__34391){var map__34392 = p__34391;var map__34392__$1 = ((cljs.core.seq_QMARK_(map__34392))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34392):map__34392);var req = map__34392__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34392__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{var G__34393 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34393) : client.call(null,G__34393));
} else
{var G__34394 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34394) : client.call(null,G__34394));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__34399){var map__34400 = p__34399;var map__34400__$1 = ((cljs.core.seq_QMARK_(map__34400))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34400):map__34400);var request = map__34400__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34400__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34400__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__19335__auto__ = form_params;if(cljs.core.truth_(and__19335__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__19335__auto__;
}
})()))
{var G__34401 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34401) : client.call(null,G__34401));
} else
{var G__34402 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34402) : client.call(null,G__34402));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__34404 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34404) : client.call(null,G__34404));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__34407 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34407) : client.call(null,G__34407));
} else
{var G__34408 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34408) : client.call(null,G__34408));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__34409_SHARP_){var G__34411 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34409_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34411) : client.call(null,G__34411));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__34417){var map__34418 = p__34417;var map__34418__$1 = ((cljs.core.seq_QMARK_(map__34418))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34418):map__34418);var req = map__34418__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34418__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__34419 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__34418,map__34418__$1,req,query_params){
return (function (p1__34412_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__34412_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__34418,map__34418__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34419) : client.call(null,G__34419));
} else
{var G__34420 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34420) : client.call(null,G__34420));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__34421){var vec__34425 = p__34421;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34425,(0),null);return ((function (vec__34425,credentials){
return (function (req){var credentials__$1 = (function (){var or__19357__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__34426 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34426) : client.call(null,G__34426));
} else
{var G__34427 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34427) : client.call(null,G__34427));
}
});
;})(vec__34425,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__34421 = null;if (arguments.length > 1) {
  p__34421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__34421);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__34428){
var client = cljs.core.first(arglist__34428);
var p__34421 = cljs.core.rest(arglist__34428);
return wrap_basic_auth__delegate(client,p__34421);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__34431 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34431) : client.call(null,G__34431));
} else
{var G__34432 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34432) : client.call(null,G__34432));
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_android_cors_bugfix(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__34433){var vec__34436 = p__34433;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34436,(0),null);var G__34437 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34437) : cljs_http.client.request.call(null,G__34437));
};
var delete$ = function (url,var_args){
var p__34433 = null;if (arguments.length > 1) {
  p__34433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__34433);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__34438){
var url = cljs.core.first(arglist__34438);
var p__34433 = cljs.core.rest(arglist__34438);
return delete$__delegate(url,p__34433);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__34439){var vec__34442 = p__34439;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34442,(0),null);var G__34443 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34443) : cljs_http.client.request.call(null,G__34443));
};
var get = function (url,var_args){
var p__34439 = null;if (arguments.length > 1) {
  p__34439 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__34439);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__34444){
var url = cljs.core.first(arglist__34444);
var p__34439 = cljs.core.rest(arglist__34444);
return get__delegate(url,p__34439);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__34445){var vec__34448 = p__34445;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34448,(0),null);var G__34449 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34449) : cljs_http.client.request.call(null,G__34449));
};
var head = function (url,var_args){
var p__34445 = null;if (arguments.length > 1) {
  p__34445 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__34445);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__34450){
var url = cljs.core.first(arglist__34450);
var p__34445 = cljs.core.rest(arglist__34450);
return head__delegate(url,p__34445);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__34451){var vec__34454 = p__34451;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34454,(0),null);var G__34455 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34455) : cljs_http.client.request.call(null,G__34455));
};
var move = function (url,var_args){
var p__34451 = null;if (arguments.length > 1) {
  p__34451 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__34451);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__34456){
var url = cljs.core.first(arglist__34456);
var p__34451 = cljs.core.rest(arglist__34456);
return move__delegate(url,p__34451);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__34457){var vec__34460 = p__34457;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(0),null);var G__34461 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34461) : cljs_http.client.request.call(null,G__34461));
};
var options = function (url,var_args){
var p__34457 = null;if (arguments.length > 1) {
  p__34457 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__34457);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__34462){
var url = cljs.core.first(arglist__34462);
var p__34457 = cljs.core.rest(arglist__34462);
return options__delegate(url,p__34457);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__34463){var vec__34466 = p__34463;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466,(0),null);var G__34467 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34467) : cljs_http.client.request.call(null,G__34467));
};
var patch = function (url,var_args){
var p__34463 = null;if (arguments.length > 1) {
  p__34463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__34463);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__34468){
var url = cljs.core.first(arglist__34468);
var p__34463 = cljs.core.rest(arglist__34468);
return patch__delegate(url,p__34463);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__34469){var vec__34472 = p__34469;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34472,(0),null);var G__34473 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34473) : cljs_http.client.request.call(null,G__34473));
};
var post = function (url,var_args){
var p__34469 = null;if (arguments.length > 1) {
  p__34469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__34469);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__34474){
var url = cljs.core.first(arglist__34474);
var p__34469 = cljs.core.rest(arglist__34474);
return post__delegate(url,p__34469);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__34475){var vec__34478 = p__34475;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(0),null);var G__34479 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34479) : cljs_http.client.request.call(null,G__34479));
};
var put = function (url,var_args){
var p__34475 = null;if (arguments.length > 1) {
  p__34475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__34475);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__34480){
var url = cljs.core.first(arglist__34480);
var p__34475 = cljs.core.rest(arglist__34480);
return put__delegate(url,p__34475);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
//# sourceMappingURL=client.js.map