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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__19255__auto__ = v;if(cljs.core.truth_(and__19255__auto__))
{return (v > (0));
} else
{return and__19255__auto__;
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34261_SHARP_,p2__34260_SHARP_){var vec__34263 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__34260_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34263,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34263,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34261_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__34265 = url;return goog.Uri.parse(G__34265);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34266_SHARP_){return cljs_http.client.encode_val(k,p1__34266_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__34267){var vec__34269 = p__34267;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34269,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34269,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__34270_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34270_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__19255__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__19255__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__19255__auto__;
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
{var params = temp__4124__auto__;var G__34273 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34273) : client.call(null,G__34273));
} else
{var G__34274 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34274) : client.call(null,G__34274));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22720__auto___34313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___34313,channel){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___34313,channel){
return (function (state_34302){var state_val_34303 = (state_34302[(1)]);if((state_val_34303 === (2)))
{var inst_34296 = (state_34302[(2)]);var inst_34297 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34298 = cljs_http.client.decode_body(inst_34296,cljs.reader.read_string,"application/edn",inst_34297);var inst_34299 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34298);var inst_34300 = cljs.core.async.close_BANG_(channel);var state_34302__$1 = (function (){var statearr_34304 = state_34302;(statearr_34304[(7)] = inst_34299);
return statearr_34304;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34302__$1,inst_34300);
} else
{if((state_val_34303 === (1)))
{var inst_34294 = (function (){var G__34305 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34305) : client.call(null,G__34305));
})();var state_34302__$1 = state_34302;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34302__$1,(2),inst_34294);
} else
{return null;
}
}
});})(c__22720__auto___34313,channel))
;return ((function (switch__22705__auto__,c__22720__auto___34313,channel){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_34309 = [null,null,null,null,null,null,null,null];(statearr_34309[(0)] = state_machine__22706__auto__);
(statearr_34309[(1)] = (1));
return statearr_34309;
});
var state_machine__22706__auto____1 = (function (state_34302){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_34302);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e34310){if((e34310 instanceof Object))
{var ex__22709__auto__ = e34310;var statearr_34311_34314 = state_34302;(statearr_34311_34314[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34302);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34310;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34315 = state_34302;
state_34302 = G__34315;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_34302){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_34302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___34313,channel))
})();var state__22722__auto__ = (function (){var statearr_34312 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_34312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___34313);
return statearr_34312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___34313,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__34316){var vec__34320 = p__34316;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34320,(0),null);return ((function (vec__34320,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__19267__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__34321 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34321) : client.call(null,G__34321));
} else
{var G__34322 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34322) : client.call(null,G__34322));
}
});
;})(vec__34320,accept))
};
var wrap_accept = function (client,var_args){
var p__34316 = null;if (arguments.length > 1) {
  p__34316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__34316);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__34323){
var client = cljs.core.first(arglist__34323);
var p__34316 = cljs.core.rest(arglist__34323);
return wrap_accept__delegate(client,p__34316);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__34324){var vec__34328 = p__34324;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34328,(0),null);return ((function (vec__34328,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__19267__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__34329 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34329) : client.call(null,G__34329));
} else
{var G__34330 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34330) : client.call(null,G__34330));
}
});
;})(vec__34328,content_type))
};
var wrap_content_type = function (client,var_args){
var p__34324 = null;if (arguments.length > 1) {
  p__34324 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__34324);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__34331){
var client = cljs.core.first(arglist__34331);
var p__34324 = cljs.core.rest(arglist__34331);
return wrap_content_type__delegate(client,p__34324);
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
{var params = temp__4124__auto__;var map__34335 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__34335__$1 = ((cljs.core.seq_QMARK_(map__34335))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34335):map__34335);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34335__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34335__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));var G__34336 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34336) : client.call(null,G__34336));
} else
{var G__34337 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34337) : client.call(null,G__34337));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__34360 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__34360__$1 = ((cljs.core.seq_QMARK_(map__34360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34360):map__34360);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34360__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34360__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__22720__auto___34381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___34381,channel,map__34360,map__34360__$1,decoding_opts,decoding){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___34381,channel,map__34360,map__34360__$1,decoding_opts,decoding){
return (function (state_34370){var state_val_34371 = (state_34370[(1)]);if((state_val_34371 === (2)))
{var inst_34363 = (state_34370[(2)]);var inst_34364 = (function (){var response = inst_34363;return ((function (response,inst_34363,state_val_34371,c__22720__auto___34381,channel,map__34360,map__34360__$1,decoding_opts,decoding){
return (function (p1__34338_SHARP_){return cljs_http.util.transit_decode(p1__34338_SHARP_,decoding,decoding_opts);
});
;})(response,inst_34363,state_val_34371,c__22720__auto___34381,channel,map__34360,map__34360__$1,decoding_opts,decoding))
})();var inst_34365 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34366 = cljs_http.client.decode_body(inst_34363,inst_34364,"application/transit+json",inst_34365);var inst_34367 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34366);var inst_34368 = cljs.core.async.close_BANG_(channel);var state_34370__$1 = (function (){var statearr_34372 = state_34370;(statearr_34372[(7)] = inst_34367);
return statearr_34372;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34370__$1,inst_34368);
} else
{if((state_val_34371 === (1)))
{var inst_34361 = (function (){var G__34373 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34373) : client.call(null,G__34373));
})();var state_34370__$1 = state_34370;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34370__$1,(2),inst_34361);
} else
{return null;
}
}
});})(c__22720__auto___34381,channel,map__34360,map__34360__$1,decoding_opts,decoding))
;return ((function (switch__22705__auto__,c__22720__auto___34381,channel,map__34360,map__34360__$1,decoding_opts,decoding){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_34377 = [null,null,null,null,null,null,null,null];(statearr_34377[(0)] = state_machine__22706__auto__);
(statearr_34377[(1)] = (1));
return statearr_34377;
});
var state_machine__22706__auto____1 = (function (state_34370){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_34370);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e34378){if((e34378 instanceof Object))
{var ex__22709__auto__ = e34378;var statearr_34379_34382 = state_34370;(statearr_34379_34382[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34370);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34378;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34383 = state_34370;
state_34370 = G__34383;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_34370){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_34370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___34381,channel,map__34360,map__34360__$1,decoding_opts,decoding))
})();var state__22722__auto__ = (function (){var statearr_34380 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_34380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___34381);
return statearr_34380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___34381,channel,map__34360,map__34360__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__34386 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34386) : client.call(null,G__34386));
} else
{var G__34387 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34387) : client.call(null,G__34387));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22720__auto___34426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___34426,channel){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___34426,channel){
return (function (state_34415){var state_val_34416 = (state_34415[(1)]);if((state_val_34416 === (2)))
{var inst_34409 = (state_34415[(2)]);var inst_34410 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34411 = cljs_http.client.decode_body(inst_34409,cljs_http.util.json_decode,"application/json",inst_34410);var inst_34412 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34411);var inst_34413 = cljs.core.async.close_BANG_(channel);var state_34415__$1 = (function (){var statearr_34417 = state_34415;(statearr_34417[(7)] = inst_34412);
return statearr_34417;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34415__$1,inst_34413);
} else
{if((state_val_34416 === (1)))
{var inst_34407 = (function (){var G__34418 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34418) : client.call(null,G__34418));
})();var state_34415__$1 = state_34415;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34415__$1,(2),inst_34407);
} else
{return null;
}
}
});})(c__22720__auto___34426,channel))
;return ((function (switch__22705__auto__,c__22720__auto___34426,channel){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_34422 = [null,null,null,null,null,null,null,null];(statearr_34422[(0)] = state_machine__22706__auto__);
(statearr_34422[(1)] = (1));
return statearr_34422;
});
var state_machine__22706__auto____1 = (function (state_34415){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_34415);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e34423){if((e34423 instanceof Object))
{var ex__22709__auto__ = e34423;var statearr_34424_34427 = state_34415;(statearr_34424_34427[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34423;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34428 = state_34415;
state_34415 = G__34428;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_34415){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_34415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___34426,channel))
})();var state__22722__auto__ = (function (){var statearr_34425 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_34425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___34426);
return statearr_34425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___34426,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__34433){var map__34434 = p__34433;var map__34434__$1 = ((cljs.core.seq_QMARK_(map__34434))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34434):map__34434);var req = map__34434__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34434__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{var G__34435 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34435) : client.call(null,G__34435));
} else
{var G__34436 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34436) : client.call(null,G__34436));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__34441){var map__34442 = p__34441;var map__34442__$1 = ((cljs.core.seq_QMARK_(map__34442))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34442):map__34442);var request = map__34442__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34442__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34442__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__19255__auto__ = form_params;if(cljs.core.truth_(and__19255__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__19255__auto__;
}
})()))
{var G__34443 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34443) : client.call(null,G__34443));
} else
{var G__34444 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34444) : client.call(null,G__34444));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__34446 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34446) : client.call(null,G__34446));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__34449 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34449) : client.call(null,G__34449));
} else
{var G__34450 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34450) : client.call(null,G__34450));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__34451_SHARP_){var G__34453 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34451_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34453) : client.call(null,G__34453));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__34459){var map__34460 = p__34459;var map__34460__$1 = ((cljs.core.seq_QMARK_(map__34460))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34460):map__34460);var req = map__34460__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34460__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__34461 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__34460,map__34460__$1,req,query_params){
return (function (p1__34454_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__34454_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__34460,map__34460__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34461) : client.call(null,G__34461));
} else
{var G__34462 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34462) : client.call(null,G__34462));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__34463){var vec__34467 = p__34463;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34467,(0),null);return ((function (vec__34467,credentials){
return (function (req){var credentials__$1 = (function (){var or__19267__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__34468 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34468) : client.call(null,G__34468));
} else
{var G__34469 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34469) : client.call(null,G__34469));
}
});
;})(vec__34467,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__34463 = null;if (arguments.length > 1) {
  p__34463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__34463);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__34470){
var client = cljs.core.first(arglist__34470);
var p__34463 = cljs.core.rest(arglist__34470);
return wrap_basic_auth__delegate(client,p__34463);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__34473 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34473) : client.call(null,G__34473));
} else
{var G__34474 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34474) : client.call(null,G__34474));
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
var delete$__delegate = function (url,p__34475){var vec__34478 = p__34475;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(0),null);var G__34479 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34479) : cljs_http.client.request.call(null,G__34479));
};
var delete$ = function (url,var_args){
var p__34475 = null;if (arguments.length > 1) {
  p__34475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__34475);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__34480){
var url = cljs.core.first(arglist__34480);
var p__34475 = cljs.core.rest(arglist__34480);
return delete$__delegate(url,p__34475);
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
var get__delegate = function (url,p__34481){var vec__34484 = p__34481;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,(0),null);var G__34485 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34485) : cljs_http.client.request.call(null,G__34485));
};
var get = function (url,var_args){
var p__34481 = null;if (arguments.length > 1) {
  p__34481 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__34481);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__34486){
var url = cljs.core.first(arglist__34486);
var p__34481 = cljs.core.rest(arglist__34486);
return get__delegate(url,p__34481);
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
var head__delegate = function (url,p__34487){var vec__34490 = p__34487;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(0),null);var G__34491 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34491) : cljs_http.client.request.call(null,G__34491));
};
var head = function (url,var_args){
var p__34487 = null;if (arguments.length > 1) {
  p__34487 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__34487);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__34492){
var url = cljs.core.first(arglist__34492);
var p__34487 = cljs.core.rest(arglist__34492);
return head__delegate(url,p__34487);
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
var move__delegate = function (url,p__34493){var vec__34496 = p__34493;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34496,(0),null);var G__34497 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34497) : cljs_http.client.request.call(null,G__34497));
};
var move = function (url,var_args){
var p__34493 = null;if (arguments.length > 1) {
  p__34493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__34493);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__34498){
var url = cljs.core.first(arglist__34498);
var p__34493 = cljs.core.rest(arglist__34498);
return move__delegate(url,p__34493);
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
var options__delegate = function (url,p__34499){var vec__34502 = p__34499;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(0),null);var G__34503 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34503) : cljs_http.client.request.call(null,G__34503));
};
var options = function (url,var_args){
var p__34499 = null;if (arguments.length > 1) {
  p__34499 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__34499);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__34504){
var url = cljs.core.first(arglist__34504);
var p__34499 = cljs.core.rest(arglist__34504);
return options__delegate(url,p__34499);
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
var patch__delegate = function (url,p__34505){var vec__34508 = p__34505;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34508,(0),null);var G__34509 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34509) : cljs_http.client.request.call(null,G__34509));
};
var patch = function (url,var_args){
var p__34505 = null;if (arguments.length > 1) {
  p__34505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__34505);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__34510){
var url = cljs.core.first(arglist__34510);
var p__34505 = cljs.core.rest(arglist__34510);
return patch__delegate(url,p__34505);
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
var post__delegate = function (url,p__34511){var vec__34514 = p__34511;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34514,(0),null);var G__34515 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34515) : cljs_http.client.request.call(null,G__34515));
};
var post = function (url,var_args){
var p__34511 = null;if (arguments.length > 1) {
  p__34511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__34511);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__34516){
var url = cljs.core.first(arglist__34516);
var p__34511 = cljs.core.rest(arglist__34516);
return post__delegate(url,p__34511);
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
var put__delegate = function (url,p__34517){var vec__34520 = p__34517;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34520,(0),null);var G__34521 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34521) : cljs_http.client.request.call(null,G__34521));
};
var put = function (url,var_args){
var p__34517 = null;if (arguments.length > 1) {
  p__34517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__34517);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__34522){
var url = cljs.core.first(arglist__34522);
var p__34517 = cljs.core.rest(arglist__34522);
return put__delegate(url,p__34517);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
//# sourceMappingURL=client.js.map