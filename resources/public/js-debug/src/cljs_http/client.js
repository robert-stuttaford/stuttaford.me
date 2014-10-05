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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__19277__auto__ = v;if(cljs.core.truth_(and__19277__auto__))
{return (v > (0));
} else
{return and__19277__auto__;
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__44895_SHARP_,p2__44894_SHARP_){var vec__44897 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__44894_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44897,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44897,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44895_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__44899 = url;return goog.Uri.parse(G__44899);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44900_SHARP_){return cljs_http.client.encode_val(k,p1__44900_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__44901){var vec__44903 = p__44901;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44903,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44903,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__44904_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44904_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__19277__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__19277__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__19277__auto__;
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
{var params = temp__4124__auto__;var G__44907 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44907) : client.call(null,G__44907));
} else
{var G__44908 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44908) : client.call(null,G__44908));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22742__auto___44947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___44947,channel){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___44947,channel){
return (function (state_44936){var state_val_44937 = (state_44936[(1)]);if((state_val_44937 === (2)))
{var inst_44930 = (state_44936[(2)]);var inst_44931 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_44932 = cljs_http.client.decode_body(inst_44930,cljs.reader.read_string,"application/edn",inst_44931);var inst_44933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_44932);var inst_44934 = cljs.core.async.close_BANG_(channel);var state_44936__$1 = (function (){var statearr_44938 = state_44936;(statearr_44938[(7)] = inst_44933);
return statearr_44938;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44936__$1,inst_44934);
} else
{if((state_val_44937 === (1)))
{var inst_44928 = (function (){var G__44939 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44939) : client.call(null,G__44939));
})();var state_44936__$1 = state_44936;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44936__$1,(2),inst_44928);
} else
{return null;
}
}
});})(c__22742__auto___44947,channel))
;return ((function (switch__22727__auto__,c__22742__auto___44947,channel){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_44943 = [null,null,null,null,null,null,null,null];(statearr_44943[(0)] = state_machine__22728__auto__);
(statearr_44943[(1)] = (1));
return statearr_44943;
});
var state_machine__22728__auto____1 = (function (state_44936){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_44936);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e44944){if((e44944 instanceof Object))
{var ex__22731__auto__ = e44944;var statearr_44945_44948 = state_44936;(statearr_44945_44948[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44936);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44944;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44949 = state_44936;
state_44936 = G__44949;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_44936){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_44936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___44947,channel))
})();var state__22744__auto__ = (function (){var statearr_44946 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_44946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___44947);
return statearr_44946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___44947,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__44950){var vec__44954 = p__44950;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44954,(0),null);return ((function (vec__44954,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__19289__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__44955 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44955) : client.call(null,G__44955));
} else
{var G__44956 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44956) : client.call(null,G__44956));
}
});
;})(vec__44954,accept))
};
var wrap_accept = function (client,var_args){
var p__44950 = null;if (arguments.length > 1) {
  p__44950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__44950);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__44957){
var client = cljs.core.first(arglist__44957);
var p__44950 = cljs.core.rest(arglist__44957);
return wrap_accept__delegate(client,p__44950);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__44958){var vec__44962 = p__44958;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44962,(0),null);return ((function (vec__44962,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__19289__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__44963 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44963) : client.call(null,G__44963));
} else
{var G__44964 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44964) : client.call(null,G__44964));
}
});
;})(vec__44962,content_type))
};
var wrap_content_type = function (client,var_args){
var p__44958 = null;if (arguments.length > 1) {
  p__44958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__44958);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__44965){
var client = cljs.core.first(arglist__44965);
var p__44958 = cljs.core.rest(arglist__44965);
return wrap_content_type__delegate(client,p__44958);
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
{var params = temp__4124__auto__;var map__44969 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__44969__$1 = ((cljs.core.seq_QMARK_(map__44969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44969):map__44969);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44969__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));var G__44970 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44970) : client.call(null,G__44970));
} else
{var G__44971 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__44971) : client.call(null,G__44971));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__44994 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__44994__$1 = ((cljs.core.seq_QMARK_(map__44994))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44994):map__44994);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__22742__auto___45015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___45015,channel,map__44994,map__44994__$1,decoding_opts,decoding){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___45015,channel,map__44994,map__44994__$1,decoding_opts,decoding){
return (function (state_45004){var state_val_45005 = (state_45004[(1)]);if((state_val_45005 === (2)))
{var inst_44997 = (state_45004[(2)]);var inst_44998 = (function (){var response = inst_44997;return ((function (response,inst_44997,state_val_45005,c__22742__auto___45015,channel,map__44994,map__44994__$1,decoding_opts,decoding){
return (function (p1__44972_SHARP_){return cljs_http.util.transit_decode(p1__44972_SHARP_,decoding,decoding_opts);
});
;})(response,inst_44997,state_val_45005,c__22742__auto___45015,channel,map__44994,map__44994__$1,decoding_opts,decoding))
})();var inst_44999 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_45000 = cljs_http.client.decode_body(inst_44997,inst_44998,"application/transit+json",inst_44999);var inst_45001 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_45000);var inst_45002 = cljs.core.async.close_BANG_(channel);var state_45004__$1 = (function (){var statearr_45006 = state_45004;(statearr_45006[(7)] = inst_45001);
return statearr_45006;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_45004__$1,inst_45002);
} else
{if((state_val_45005 === (1)))
{var inst_44995 = (function (){var G__45007 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45007) : client.call(null,G__45007));
})();var state_45004__$1 = state_45004;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45004__$1,(2),inst_44995);
} else
{return null;
}
}
});})(c__22742__auto___45015,channel,map__44994,map__44994__$1,decoding_opts,decoding))
;return ((function (switch__22727__auto__,c__22742__auto___45015,channel,map__44994,map__44994__$1,decoding_opts,decoding){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_45011 = [null,null,null,null,null,null,null,null];(statearr_45011[(0)] = state_machine__22728__auto__);
(statearr_45011[(1)] = (1));
return statearr_45011;
});
var state_machine__22728__auto____1 = (function (state_45004){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_45004);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e45012){if((e45012 instanceof Object))
{var ex__22731__auto__ = e45012;var statearr_45013_45016 = state_45004;(statearr_45013_45016[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45004);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45012;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45017 = state_45004;
state_45004 = G__45017;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_45004){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_45004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___45015,channel,map__44994,map__44994__$1,decoding_opts,decoding))
})();var state__22744__auto__ = (function (){var statearr_45014 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_45014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___45015);
return statearr_45014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___45015,channel,map__44994,map__44994__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__45020 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45020) : client.call(null,G__45020));
} else
{var G__45021 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45021) : client.call(null,G__45021));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22742__auto___45060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___45060,channel){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___45060,channel){
return (function (state_45049){var state_val_45050 = (state_45049[(1)]);if((state_val_45050 === (2)))
{var inst_45043 = (state_45049[(2)]);var inst_45044 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_45045 = cljs_http.client.decode_body(inst_45043,cljs_http.util.json_decode,"application/json",inst_45044);var inst_45046 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_45045);var inst_45047 = cljs.core.async.close_BANG_(channel);var state_45049__$1 = (function (){var statearr_45051 = state_45049;(statearr_45051[(7)] = inst_45046);
return statearr_45051;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_45049__$1,inst_45047);
} else
{if((state_val_45050 === (1)))
{var inst_45041 = (function (){var G__45052 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45052) : client.call(null,G__45052));
})();var state_45049__$1 = state_45049;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45049__$1,(2),inst_45041);
} else
{return null;
}
}
});})(c__22742__auto___45060,channel))
;return ((function (switch__22727__auto__,c__22742__auto___45060,channel){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_45056 = [null,null,null,null,null,null,null,null];(statearr_45056[(0)] = state_machine__22728__auto__);
(statearr_45056[(1)] = (1));
return statearr_45056;
});
var state_machine__22728__auto____1 = (function (state_45049){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_45049);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e45057){if((e45057 instanceof Object))
{var ex__22731__auto__ = e45057;var statearr_45058_45061 = state_45049;(statearr_45058_45061[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45049);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e45057;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45062 = state_45049;
state_45049 = G__45062;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_45049){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_45049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___45060,channel))
})();var state__22744__auto__ = (function (){var statearr_45059 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_45059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___45060);
return statearr_45059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___45060,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__45067){var map__45068 = p__45067;var map__45068__$1 = ((cljs.core.seq_QMARK_(map__45068))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45068):map__45068);var req = map__45068__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{var G__45069 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45069) : client.call(null,G__45069));
} else
{var G__45070 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45070) : client.call(null,G__45070));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__45075){var map__45076 = p__45075;var map__45076__$1 = ((cljs.core.seq_QMARK_(map__45076))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45076):map__45076);var request = map__45076__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45076__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45076__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__19277__auto__ = form_params;if(cljs.core.truth_(and__19277__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__19277__auto__;
}
})()))
{var G__45077 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45077) : client.call(null,G__45077));
} else
{var G__45078 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45078) : client.call(null,G__45078));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__45080 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45080) : client.call(null,G__45080));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__45083 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45083) : client.call(null,G__45083));
} else
{var G__45084 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45084) : client.call(null,G__45084));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__45085_SHARP_){var G__45087 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45085_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45087) : client.call(null,G__45087));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__45093){var map__45094 = p__45093;var map__45094__$1 = ((cljs.core.seq_QMARK_(map__45094))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45094):map__45094);var req = map__45094__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45094__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__45095 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__45094,map__45094__$1,req,query_params){
return (function (p1__45088_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__45088_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__45094,map__45094__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45095) : client.call(null,G__45095));
} else
{var G__45096 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45096) : client.call(null,G__45096));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__45097){var vec__45101 = p__45097;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45101,(0),null);return ((function (vec__45101,credentials){
return (function (req){var credentials__$1 = (function (){var or__19289__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__45102 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45102) : client.call(null,G__45102));
} else
{var G__45103 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45103) : client.call(null,G__45103));
}
});
;})(vec__45101,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__45097 = null;if (arguments.length > 1) {
  p__45097 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__45097);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__45104){
var client = cljs.core.first(arglist__45104);
var p__45097 = cljs.core.rest(arglist__45104);
return wrap_basic_auth__delegate(client,p__45097);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__45107 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45107) : client.call(null,G__45107));
} else
{var G__45108 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__45108) : client.call(null,G__45108));
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
var delete$__delegate = function (url,p__45109){var vec__45112 = p__45109;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45112,(0),null);var G__45113 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__45113) : cljs_http.client.request.call(null,G__45113));
};
var delete$ = function (url,var_args){
var p__45109 = null;if (arguments.length > 1) {
  p__45109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__45109);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__45114){
var url = cljs.core.first(arglist__45114);
var p__45109 = cljs.core.rest(arglist__45114);
return delete$__delegate(url,p__45109);
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
var get__delegate = function (url,p__45115){var vec__45118 = p__45115;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45118,(0),null);var G__45119 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__45119) : cljs_http.client.request.call(null,G__45119));
};
var get = function (url,var_args){
var p__45115 = null;if (arguments.length > 1) {
  p__45115 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__45115);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__45120){
var url = cljs.core.first(arglist__45120);
var p__45115 = cljs.core.rest(arglist__45120);
return get__delegate(url,p__45115);
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
var head__delegate = function (url,p__45121){var vec__45124 = p__45121;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45124,(0),null);var G__45125 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__45125) : cljs_http.client.request.call(null,G__45125));
};
var head = function (url,var_args){
var p__45121 = null;if (arguments.length > 1) {
  p__45121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__45121);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__45126){
var url = cljs.core.first(arglist__45126);
var p__45121 = cljs.core.rest(arglist__45126);
return head__delegate(url,p__45121);
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
var move__delegate = function (url,p__45127){var vec__45130 = p__45127;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45130,(0),null);var G__45131 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__45131) : cljs_http.client.request.call(null,G__45131));
};
var move = function (url,var_args){
var p__45127 = null;if (arguments.length > 1) {
  p__45127 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__45127);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__45132){
var url = cljs.core.first(arglist__45132);
var p__45127 = cljs.core.rest(arglist__45132);
return move__delegate(url,p__45127);
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
var options__delegate = function (url,p__45133){var vec__45136 = p__45133;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45136,(0),null);var G__45137 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__45137) : cljs_http.client.request.call(null,G__45137));
};
var options = function (url,var_args){
var p__45133 = null;if (arguments.length > 1) {
  p__45133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__45133);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__45138){
var url = cljs.core.first(arglist__45138);
var p__45133 = cljs.core.rest(arglist__45138);
return options__delegate(url,p__45133);
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
var patch__delegate = function (url,p__45139){var vec__45142 = p__45139;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45142,(0),null);var G__45143 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__45143) : cljs_http.client.request.call(null,G__45143));
};
var patch = function (url,var_args){
var p__45139 = null;if (arguments.length > 1) {
  p__45139 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__45139);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__45144){
var url = cljs.core.first(arglist__45144);
var p__45139 = cljs.core.rest(arglist__45144);
return patch__delegate(url,p__45139);
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
var post__delegate = function (url,p__45145){var vec__45148 = p__45145;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45148,(0),null);var G__45149 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__45149) : cljs_http.client.request.call(null,G__45149));
};
var post = function (url,var_args){
var p__45145 = null;if (arguments.length > 1) {
  p__45145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__45145);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__45150){
var url = cljs.core.first(arglist__45150);
var p__45145 = cljs.core.rest(arglist__45150);
return post__delegate(url,p__45145);
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
var put__delegate = function (url,p__45151){var vec__45154 = p__45151;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45154,(0),null);var G__45155 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__45155) : cljs_http.client.request.call(null,G__45155));
};
var put = function (url,var_args){
var p__45151 = null;if (arguments.length > 1) {
  p__45151 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__45151);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__45156){
var url = cljs.core.first(arglist__45156);
var p__45151 = cljs.core.rest(arglist__45156);
return put__delegate(url,p__45151);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
//# sourceMappingURL=client.js.map