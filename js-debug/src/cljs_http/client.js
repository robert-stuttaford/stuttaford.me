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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__19267__auto__ = v;if(cljs.core.truth_(and__19267__auto__))
{return (v > (0));
} else
{return and__19267__auto__;
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__51467_SHARP_,p2__51466_SHARP_){var vec__51469 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__51466_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51469,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51469,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51467_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__51471 = url;return goog.Uri.parse(G__51471);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51472_SHARP_){return cljs_http.client.encode_val(k,p1__51472_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__51473){var vec__51475 = p__51473;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__51476_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51476_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__19267__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__19267__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__19267__auto__;
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
{var params = temp__4124__auto__;var G__51479 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51479) : client.call(null,G__51479));
} else
{var G__51480 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51480) : client.call(null,G__51480));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22689__auto___51519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___51519,channel){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___51519,channel){
return (function (state_51508){var state_val_51509 = (state_51508[(1)]);if((state_val_51509 === (2)))
{var inst_51502 = (state_51508[(2)]);var inst_51503 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_51504 = cljs_http.client.decode_body(inst_51502,cljs.reader.read_string,"application/edn",inst_51503);var inst_51505 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_51504);var inst_51506 = cljs.core.async.close_BANG_(channel);var state_51508__$1 = (function (){var statearr_51510 = state_51508;(statearr_51510[(7)] = inst_51505);
return statearr_51510;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51508__$1,inst_51506);
} else
{if((state_val_51509 === (1)))
{var inst_51500 = (function (){var G__51511 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51511) : client.call(null,G__51511));
})();var state_51508__$1 = state_51508;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51508__$1,(2),inst_51500);
} else
{return null;
}
}
});})(c__22689__auto___51519,channel))
;return ((function (switch__22674__auto__,c__22689__auto___51519,channel){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_51515 = [null,null,null,null,null,null,null,null];(statearr_51515[(0)] = state_machine__22675__auto__);
(statearr_51515[(1)] = (1));
return statearr_51515;
});
var state_machine__22675__auto____1 = (function (state_51508){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_51508);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e51516){if((e51516 instanceof Object))
{var ex__22678__auto__ = e51516;var statearr_51517_51520 = state_51508;(statearr_51517_51520[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51516;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51521 = state_51508;
state_51508 = G__51521;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_51508){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_51508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___51519,channel))
})();var state__22691__auto__ = (function (){var statearr_51518 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_51518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___51519);
return statearr_51518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___51519,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__51522){var vec__51526 = p__51522;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51526,(0),null);return ((function (vec__51526,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__19289__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__51527 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51527) : client.call(null,G__51527));
} else
{var G__51528 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51528) : client.call(null,G__51528));
}
});
;})(vec__51526,accept))
};
var wrap_accept = function (client,var_args){
var p__51522 = null;if (arguments.length > 1) {
  p__51522 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__51522);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__51529){
var client = cljs.core.first(arglist__51529);
var p__51522 = cljs.core.rest(arglist__51529);
return wrap_accept__delegate(client,p__51522);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__51530){var vec__51534 = p__51530;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51534,(0),null);return ((function (vec__51534,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__19289__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__51535 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51535) : client.call(null,G__51535));
} else
{var G__51536 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51536) : client.call(null,G__51536));
}
});
;})(vec__51534,content_type))
};
var wrap_content_type = function (client,var_args){
var p__51530 = null;if (arguments.length > 1) {
  p__51530 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__51530);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__51537){
var client = cljs.core.first(arglist__51537);
var p__51530 = cljs.core.rest(arglist__51537);
return wrap_content_type__delegate(client,p__51530);
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
{var params = temp__4124__auto__;var map__51541 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__51541__$1 = ((cljs.core.seq_QMARK_(map__51541))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51541):map__51541);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51541__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51541__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));var G__51542 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51542) : client.call(null,G__51542));
} else
{var G__51543 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51543) : client.call(null,G__51543));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__51566 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__51566__$1 = ((cljs.core.seq_QMARK_(map__51566))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51566):map__51566);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51566__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51566__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__22689__auto___51587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___51587,channel,map__51566,map__51566__$1,decoding_opts,decoding){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___51587,channel,map__51566,map__51566__$1,decoding_opts,decoding){
return (function (state_51576){var state_val_51577 = (state_51576[(1)]);if((state_val_51577 === (2)))
{var inst_51569 = (state_51576[(2)]);var inst_51570 = (function (){var response = inst_51569;return ((function (response,inst_51569,state_val_51577,c__22689__auto___51587,channel,map__51566,map__51566__$1,decoding_opts,decoding){
return (function (p1__51544_SHARP_){return cljs_http.util.transit_decode(p1__51544_SHARP_,decoding,decoding_opts);
});
;})(response,inst_51569,state_val_51577,c__22689__auto___51587,channel,map__51566,map__51566__$1,decoding_opts,decoding))
})();var inst_51571 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_51572 = cljs_http.client.decode_body(inst_51569,inst_51570,"application/transit+json",inst_51571);var inst_51573 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_51572);var inst_51574 = cljs.core.async.close_BANG_(channel);var state_51576__$1 = (function (){var statearr_51578 = state_51576;(statearr_51578[(7)] = inst_51573);
return statearr_51578;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51576__$1,inst_51574);
} else
{if((state_val_51577 === (1)))
{var inst_51567 = (function (){var G__51579 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51579) : client.call(null,G__51579));
})();var state_51576__$1 = state_51576;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51576__$1,(2),inst_51567);
} else
{return null;
}
}
});})(c__22689__auto___51587,channel,map__51566,map__51566__$1,decoding_opts,decoding))
;return ((function (switch__22674__auto__,c__22689__auto___51587,channel,map__51566,map__51566__$1,decoding_opts,decoding){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_51583 = [null,null,null,null,null,null,null,null];(statearr_51583[(0)] = state_machine__22675__auto__);
(statearr_51583[(1)] = (1));
return statearr_51583;
});
var state_machine__22675__auto____1 = (function (state_51576){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_51576);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e51584){if((e51584 instanceof Object))
{var ex__22678__auto__ = e51584;var statearr_51585_51588 = state_51576;(statearr_51585_51588[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51584;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51589 = state_51576;
state_51576 = G__51589;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_51576){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_51576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___51587,channel,map__51566,map__51566__$1,decoding_opts,decoding))
})();var state__22691__auto__ = (function (){var statearr_51586 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_51586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___51587);
return statearr_51586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___51587,channel,map__51566,map__51566__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__51592 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51592) : client.call(null,G__51592));
} else
{var G__51593 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51593) : client.call(null,G__51593));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22689__auto___51632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___51632,channel){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___51632,channel){
return (function (state_51621){var state_val_51622 = (state_51621[(1)]);if((state_val_51622 === (2)))
{var inst_51615 = (state_51621[(2)]);var inst_51616 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_51617 = cljs_http.client.decode_body(inst_51615,cljs_http.util.json_decode,"application/json",inst_51616);var inst_51618 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_51617);var inst_51619 = cljs.core.async.close_BANG_(channel);var state_51621__$1 = (function (){var statearr_51623 = state_51621;(statearr_51623[(7)] = inst_51618);
return statearr_51623;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51621__$1,inst_51619);
} else
{if((state_val_51622 === (1)))
{var inst_51613 = (function (){var G__51624 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51624) : client.call(null,G__51624));
})();var state_51621__$1 = state_51621;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51621__$1,(2),inst_51613);
} else
{return null;
}
}
});})(c__22689__auto___51632,channel))
;return ((function (switch__22674__auto__,c__22689__auto___51632,channel){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_51628 = [null,null,null,null,null,null,null,null];(statearr_51628[(0)] = state_machine__22675__auto__);
(statearr_51628[(1)] = (1));
return statearr_51628;
});
var state_machine__22675__auto____1 = (function (state_51621){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_51621);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e51629){if((e51629 instanceof Object))
{var ex__22678__auto__ = e51629;var statearr_51630_51633 = state_51621;(statearr_51630_51633[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51621);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51629;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51634 = state_51621;
state_51621 = G__51634;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_51621){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_51621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___51632,channel))
})();var state__22691__auto__ = (function (){var statearr_51631 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_51631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___51632);
return statearr_51631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___51632,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__51639){var map__51640 = p__51639;var map__51640__$1 = ((cljs.core.seq_QMARK_(map__51640))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51640):map__51640);var req = map__51640__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51640__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{var G__51641 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51641) : client.call(null,G__51641));
} else
{var G__51642 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51642) : client.call(null,G__51642));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__51647){var map__51648 = p__51647;var map__51648__$1 = ((cljs.core.seq_QMARK_(map__51648))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51648):map__51648);var request = map__51648__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51648__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51648__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__19267__auto__ = form_params;if(cljs.core.truth_(and__19267__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__19267__auto__;
}
})()))
{var G__51649 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51649) : client.call(null,G__51649));
} else
{var G__51650 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51650) : client.call(null,G__51650));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__51652 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51652) : client.call(null,G__51652));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__51655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51655) : client.call(null,G__51655));
} else
{var G__51656 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51656) : client.call(null,G__51656));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__51657_SHARP_){var G__51659 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51657_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51659) : client.call(null,G__51659));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__51665){var map__51666 = p__51665;var map__51666__$1 = ((cljs.core.seq_QMARK_(map__51666))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51666):map__51666);var req = map__51666__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51666__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__51667 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__51666,map__51666__$1,req,query_params){
return (function (p1__51660_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__51660_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__51666,map__51666__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51667) : client.call(null,G__51667));
} else
{var G__51668 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51668) : client.call(null,G__51668));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__51669){var vec__51673 = p__51669;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51673,(0),null);return ((function (vec__51673,credentials){
return (function (req){var credentials__$1 = (function (){var or__19289__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__51674 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51674) : client.call(null,G__51674));
} else
{var G__51675 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51675) : client.call(null,G__51675));
}
});
;})(vec__51673,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__51669 = null;if (arguments.length > 1) {
  p__51669 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__51669);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__51676){
var client = cljs.core.first(arglist__51676);
var p__51669 = cljs.core.rest(arglist__51676);
return wrap_basic_auth__delegate(client,p__51669);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__51679 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51679) : client.call(null,G__51679));
} else
{var G__51680 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51680) : client.call(null,G__51680));
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
var delete$__delegate = function (url,p__51681){var vec__51684 = p__51681;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51684,(0),null);var G__51685 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51685) : cljs_http.client.request.call(null,G__51685));
};
var delete$ = function (url,var_args){
var p__51681 = null;if (arguments.length > 1) {
  p__51681 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__51681);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__51686){
var url = cljs.core.first(arglist__51686);
var p__51681 = cljs.core.rest(arglist__51686);
return delete$__delegate(url,p__51681);
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
var get__delegate = function (url,p__51687){var vec__51690 = p__51687;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(0),null);var G__51691 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51691) : cljs_http.client.request.call(null,G__51691));
};
var get = function (url,var_args){
var p__51687 = null;if (arguments.length > 1) {
  p__51687 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__51687);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__51692){
var url = cljs.core.first(arglist__51692);
var p__51687 = cljs.core.rest(arglist__51692);
return get__delegate(url,p__51687);
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
var head__delegate = function (url,p__51693){var vec__51696 = p__51693;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51696,(0),null);var G__51697 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51697) : cljs_http.client.request.call(null,G__51697));
};
var head = function (url,var_args){
var p__51693 = null;if (arguments.length > 1) {
  p__51693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__51693);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__51698){
var url = cljs.core.first(arglist__51698);
var p__51693 = cljs.core.rest(arglist__51698);
return head__delegate(url,p__51693);
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
var move__delegate = function (url,p__51699){var vec__51702 = p__51699;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702,(0),null);var G__51703 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51703) : cljs_http.client.request.call(null,G__51703));
};
var move = function (url,var_args){
var p__51699 = null;if (arguments.length > 1) {
  p__51699 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__51699);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__51704){
var url = cljs.core.first(arglist__51704);
var p__51699 = cljs.core.rest(arglist__51704);
return move__delegate(url,p__51699);
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
var options__delegate = function (url,p__51705){var vec__51708 = p__51705;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51708,(0),null);var G__51709 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51709) : cljs_http.client.request.call(null,G__51709));
};
var options = function (url,var_args){
var p__51705 = null;if (arguments.length > 1) {
  p__51705 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__51705);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__51710){
var url = cljs.core.first(arglist__51710);
var p__51705 = cljs.core.rest(arglist__51710);
return options__delegate(url,p__51705);
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
var patch__delegate = function (url,p__51711){var vec__51714 = p__51711;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51714,(0),null);var G__51715 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51715) : cljs_http.client.request.call(null,G__51715));
};
var patch = function (url,var_args){
var p__51711 = null;if (arguments.length > 1) {
  p__51711 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__51711);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__51716){
var url = cljs.core.first(arglist__51716);
var p__51711 = cljs.core.rest(arglist__51716);
return patch__delegate(url,p__51711);
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
var post__delegate = function (url,p__51717){var vec__51720 = p__51717;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51720,(0),null);var G__51721 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51721) : cljs_http.client.request.call(null,G__51721));
};
var post = function (url,var_args){
var p__51717 = null;if (arguments.length > 1) {
  p__51717 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__51717);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__51722){
var url = cljs.core.first(arglist__51722);
var p__51717 = cljs.core.rest(arglist__51722);
return post__delegate(url,p__51717);
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
var put__delegate = function (url,p__51723){var vec__51726 = p__51723;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51726,(0),null);var G__51727 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51727) : cljs_http.client.request.call(null,G__51727));
};
var put = function (url,var_args){
var p__51723 = null;if (arguments.length > 1) {
  p__51723 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__51723);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__51728){
var url = cljs.core.first(arglist__51728);
var p__51723 = cljs.core.rest(arglist__51728);
return put__delegate(url,p__51723);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
//# sourceMappingURL=client.js.map