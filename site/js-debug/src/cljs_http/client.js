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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__19697__auto__ = v;if(cljs.core.truth_(and__19697__auto__))
{return (v > (0));
} else
{return and__19697__auto__;
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__70682_SHARP_,p2__70681_SHARP_){var vec__70684 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__70681_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70684,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70684,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70682_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__70686 = url;return goog.Uri.parse(G__70686);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70687_SHARP_){return cljs_http.client.encode_val(k,p1__70687_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__70688){var vec__70690 = p__70688;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70690,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70690,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__70691_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70691_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__19697__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__19697__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__19697__auto__;
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
{var params = temp__4124__auto__;var G__70694 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70694) : client.call(null,G__70694));
} else
{var G__70695 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70695) : client.call(null,G__70695));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__23127__auto___70734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___70734,channel){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___70734,channel){
return (function (state_70723){var state_val_70724 = (state_70723[(1)]);if((state_val_70724 === (2)))
{var inst_70717 = (state_70723[(2)]);var inst_70718 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_70719 = cljs_http.client.decode_body(inst_70717,cljs.reader.read_string,"application/edn",inst_70718);var inst_70720 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_70719);var inst_70721 = cljs.core.async.close_BANG_(channel);var state_70723__$1 = (function (){var statearr_70725 = state_70723;(statearr_70725[(7)] = inst_70720);
return statearr_70725;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_70723__$1,inst_70721);
} else
{if((state_val_70724 === (1)))
{var inst_70715 = (function (){var G__70726 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70726) : client.call(null,G__70726));
})();var state_70723__$1 = state_70723;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70723__$1,(2),inst_70715);
} else
{return null;
}
}
});})(c__23127__auto___70734,channel))
;return ((function (switch__23112__auto__,c__23127__auto___70734,channel){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_70730 = [null,null,null,null,null,null,null,null];(statearr_70730[(0)] = state_machine__23113__auto__);
(statearr_70730[(1)] = (1));
return statearr_70730;
});
var state_machine__23113__auto____1 = (function (state_70723){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_70723);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e70731){if((e70731 instanceof Object))
{var ex__23116__auto__ = e70731;var statearr_70732_70735 = state_70723;(statearr_70732_70735[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e70731;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70736 = state_70723;
state_70723 = G__70736;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_70723){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_70723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___70734,channel))
})();var state__23129__auto__ = (function (){var statearr_70733 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_70733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___70734);
return statearr_70733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___70734,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__70737){var vec__70741 = p__70737;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70741,(0),null);return ((function (vec__70741,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__19711__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__70742 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70742) : client.call(null,G__70742));
} else
{var G__70743 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70743) : client.call(null,G__70743));
}
});
;})(vec__70741,accept))
};
var wrap_accept = function (client,var_args){
var p__70737 = null;if (arguments.length > 1) {
  p__70737 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__70737);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__70744){
var client = cljs.core.first(arglist__70744);
var p__70737 = cljs.core.rest(arglist__70744);
return wrap_accept__delegate(client,p__70737);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__70745){var vec__70749 = p__70745;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70749,(0),null);return ((function (vec__70749,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__19711__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__70750 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70750) : client.call(null,G__70750));
} else
{var G__70751 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70751) : client.call(null,G__70751));
}
});
;})(vec__70749,content_type))
};
var wrap_content_type = function (client,var_args){
var p__70745 = null;if (arguments.length > 1) {
  p__70745 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__70745);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__70752){
var client = cljs.core.first(arglist__70752);
var p__70745 = cljs.core.rest(arglist__70752);
return wrap_content_type__delegate(client,p__70745);
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
{var params = temp__4124__auto__;var map__70756 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__70756__$1 = ((cljs.core.seq_QMARK_(map__70756))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70756):map__70756);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70756__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70756__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));var G__70757 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70757) : client.call(null,G__70757));
} else
{var G__70758 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70758) : client.call(null,G__70758));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__70781 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__70781__$1 = ((cljs.core.seq_QMARK_(map__70781))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70781):map__70781);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70781__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70781__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__23127__auto___70802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___70802,channel,map__70781,map__70781__$1,decoding_opts,decoding){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___70802,channel,map__70781,map__70781__$1,decoding_opts,decoding){
return (function (state_70791){var state_val_70792 = (state_70791[(1)]);if((state_val_70792 === (2)))
{var inst_70784 = (state_70791[(2)]);var inst_70785 = (function (){var response = inst_70784;return ((function (response,inst_70784,state_val_70792,c__23127__auto___70802,channel,map__70781,map__70781__$1,decoding_opts,decoding){
return (function (p1__70759_SHARP_){return cljs_http.util.transit_decode(p1__70759_SHARP_,decoding,decoding_opts);
});
;})(response,inst_70784,state_val_70792,c__23127__auto___70802,channel,map__70781,map__70781__$1,decoding_opts,decoding))
})();var inst_70786 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_70787 = cljs_http.client.decode_body(inst_70784,inst_70785,"application/transit+json",inst_70786);var inst_70788 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_70787);var inst_70789 = cljs.core.async.close_BANG_(channel);var state_70791__$1 = (function (){var statearr_70793 = state_70791;(statearr_70793[(7)] = inst_70788);
return statearr_70793;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_70791__$1,inst_70789);
} else
{if((state_val_70792 === (1)))
{var inst_70782 = (function (){var G__70794 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70794) : client.call(null,G__70794));
})();var state_70791__$1 = state_70791;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70791__$1,(2),inst_70782);
} else
{return null;
}
}
});})(c__23127__auto___70802,channel,map__70781,map__70781__$1,decoding_opts,decoding))
;return ((function (switch__23112__auto__,c__23127__auto___70802,channel,map__70781,map__70781__$1,decoding_opts,decoding){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_70798 = [null,null,null,null,null,null,null,null];(statearr_70798[(0)] = state_machine__23113__auto__);
(statearr_70798[(1)] = (1));
return statearr_70798;
});
var state_machine__23113__auto____1 = (function (state_70791){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_70791);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e70799){if((e70799 instanceof Object))
{var ex__23116__auto__ = e70799;var statearr_70800_70803 = state_70791;(statearr_70800_70803[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e70799;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70804 = state_70791;
state_70791 = G__70804;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_70791){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_70791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___70802,channel,map__70781,map__70781__$1,decoding_opts,decoding))
})();var state__23129__auto__ = (function (){var statearr_70801 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_70801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___70802);
return statearr_70801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___70802,channel,map__70781,map__70781__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__70807 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70807) : client.call(null,G__70807));
} else
{var G__70808 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70808) : client.call(null,G__70808));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__23127__auto___70847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___70847,channel){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___70847,channel){
return (function (state_70836){var state_val_70837 = (state_70836[(1)]);if((state_val_70837 === (2)))
{var inst_70830 = (state_70836[(2)]);var inst_70831 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_70832 = cljs_http.client.decode_body(inst_70830,cljs_http.util.json_decode,"application/json",inst_70831);var inst_70833 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_70832);var inst_70834 = cljs.core.async.close_BANG_(channel);var state_70836__$1 = (function (){var statearr_70838 = state_70836;(statearr_70838[(7)] = inst_70833);
return statearr_70838;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_70836__$1,inst_70834);
} else
{if((state_val_70837 === (1)))
{var inst_70828 = (function (){var G__70839 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70839) : client.call(null,G__70839));
})();var state_70836__$1 = state_70836;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70836__$1,(2),inst_70828);
} else
{return null;
}
}
});})(c__23127__auto___70847,channel))
;return ((function (switch__23112__auto__,c__23127__auto___70847,channel){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_70843 = [null,null,null,null,null,null,null,null];(statearr_70843[(0)] = state_machine__23113__auto__);
(statearr_70843[(1)] = (1));
return statearr_70843;
});
var state_machine__23113__auto____1 = (function (state_70836){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_70836);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e70844){if((e70844 instanceof Object))
{var ex__23116__auto__ = e70844;var statearr_70845_70848 = state_70836;(statearr_70845_70848[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70836);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e70844;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70849 = state_70836;
state_70836 = G__70849;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_70836){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_70836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___70847,channel))
})();var state__23129__auto__ = (function (){var statearr_70846 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_70846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___70847);
return statearr_70846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___70847,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__70854){var map__70855 = p__70854;var map__70855__$1 = ((cljs.core.seq_QMARK_(map__70855))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70855):map__70855);var req = map__70855__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70855__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{var G__70856 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70856) : client.call(null,G__70856));
} else
{var G__70857 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70857) : client.call(null,G__70857));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__70862){var map__70863 = p__70862;var map__70863__$1 = ((cljs.core.seq_QMARK_(map__70863))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70863):map__70863);var request = map__70863__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70863__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70863__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__19697__auto__ = form_params;if(cljs.core.truth_(and__19697__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__19697__auto__;
}
})()))
{var G__70864 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70864) : client.call(null,G__70864));
} else
{var G__70865 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70865) : client.call(null,G__70865));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__70867 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70867) : client.call(null,G__70867));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__70870 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70870) : client.call(null,G__70870));
} else
{var G__70871 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70871) : client.call(null,G__70871));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__70872_SHARP_){var G__70874 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70872_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70874) : client.call(null,G__70874));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__70880){var map__70881 = p__70880;var map__70881__$1 = ((cljs.core.seq_QMARK_(map__70881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70881):map__70881);var req = map__70881__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70881__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__70882 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__70881,map__70881__$1,req,query_params){
return (function (p1__70875_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__70875_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__70881,map__70881__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70882) : client.call(null,G__70882));
} else
{var G__70883 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70883) : client.call(null,G__70883));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__70884){var vec__70888 = p__70884;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70888,(0),null);return ((function (vec__70888,credentials){
return (function (req){var credentials__$1 = (function (){var or__19711__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__70889 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70889) : client.call(null,G__70889));
} else
{var G__70890 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70890) : client.call(null,G__70890));
}
});
;})(vec__70888,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__70884 = null;if (arguments.length > 1) {
  p__70884 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__70884);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__70891){
var client = cljs.core.first(arglist__70891);
var p__70884 = cljs.core.rest(arglist__70891);
return wrap_basic_auth__delegate(client,p__70884);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__70894 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70894) : client.call(null,G__70894));
} else
{var G__70895 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__70895) : client.call(null,G__70895));
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
var delete$__delegate = function (url,p__70896){var vec__70899 = p__70896;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70899,(0),null);var G__70900 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__70900) : cljs_http.client.request.call(null,G__70900));
};
var delete$ = function (url,var_args){
var p__70896 = null;if (arguments.length > 1) {
  p__70896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__70896);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__70901){
var url = cljs.core.first(arglist__70901);
var p__70896 = cljs.core.rest(arglist__70901);
return delete$__delegate(url,p__70896);
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
var get__delegate = function (url,p__70902){var vec__70905 = p__70902;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70905,(0),null);var G__70906 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__70906) : cljs_http.client.request.call(null,G__70906));
};
var get = function (url,var_args){
var p__70902 = null;if (arguments.length > 1) {
  p__70902 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__70902);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__70907){
var url = cljs.core.first(arglist__70907);
var p__70902 = cljs.core.rest(arglist__70907);
return get__delegate(url,p__70902);
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
var head__delegate = function (url,p__70908){var vec__70911 = p__70908;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70911,(0),null);var G__70912 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__70912) : cljs_http.client.request.call(null,G__70912));
};
var head = function (url,var_args){
var p__70908 = null;if (arguments.length > 1) {
  p__70908 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__70908);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__70913){
var url = cljs.core.first(arglist__70913);
var p__70908 = cljs.core.rest(arglist__70913);
return head__delegate(url,p__70908);
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
var move__delegate = function (url,p__70914){var vec__70917 = p__70914;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70917,(0),null);var G__70918 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__70918) : cljs_http.client.request.call(null,G__70918));
};
var move = function (url,var_args){
var p__70914 = null;if (arguments.length > 1) {
  p__70914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__70914);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__70919){
var url = cljs.core.first(arglist__70919);
var p__70914 = cljs.core.rest(arglist__70919);
return move__delegate(url,p__70914);
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
var options__delegate = function (url,p__70920){var vec__70923 = p__70920;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70923,(0),null);var G__70924 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__70924) : cljs_http.client.request.call(null,G__70924));
};
var options = function (url,var_args){
var p__70920 = null;if (arguments.length > 1) {
  p__70920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__70920);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__70925){
var url = cljs.core.first(arglist__70925);
var p__70920 = cljs.core.rest(arglist__70925);
return options__delegate(url,p__70920);
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
var patch__delegate = function (url,p__70926){var vec__70929 = p__70926;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70929,(0),null);var G__70930 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__70930) : cljs_http.client.request.call(null,G__70930));
};
var patch = function (url,var_args){
var p__70926 = null;if (arguments.length > 1) {
  p__70926 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__70926);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__70931){
var url = cljs.core.first(arglist__70931);
var p__70926 = cljs.core.rest(arglist__70931);
return patch__delegate(url,p__70926);
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
var post__delegate = function (url,p__70932){var vec__70935 = p__70932;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70935,(0),null);var G__70936 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__70936) : cljs_http.client.request.call(null,G__70936));
};
var post = function (url,var_args){
var p__70932 = null;if (arguments.length > 1) {
  p__70932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__70932);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__70937){
var url = cljs.core.first(arglist__70937);
var p__70932 = cljs.core.rest(arglist__70937);
return post__delegate(url,p__70932);
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
var put__delegate = function (url,p__70938){var vec__70941 = p__70938;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70941,(0),null);var G__70942 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__70942) : cljs_http.client.request.call(null,G__70942));
};
var put = function (url,var_args){
var p__70938 = null;if (arguments.length > 1) {
  p__70938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__70938);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__70943){
var url = cljs.core.first(arglist__70943);
var p__70938 = cljs.core.rest(arglist__70943);
return put__delegate(url,p__70938);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
//# sourceMappingURL=client.js.map