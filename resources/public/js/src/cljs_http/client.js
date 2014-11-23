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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__19621__auto__ = v;if(cljs.core.truth_(and__19621__auto__))
{return (v > (0));
} else
{return and__19621__auto__;
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34529_SHARP_,p2__34528_SHARP_){var vec__34531 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__34528_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34531,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34531,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34529_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__34533 = url;return goog.Uri.parse(G__34533);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34534_SHARP_){return cljs_http.client.encode_val(k,p1__34534_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__34535){var vec__34537 = p__34535;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34537,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34537,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__34538_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34538_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__19621__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__19621__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__19621__auto__;
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
{var params = temp__4124__auto__;var G__34541 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34541) : client.call(null,G__34541));
} else
{var G__34542 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34542) : client.call(null,G__34542));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22986__auto___34581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___34581,channel){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___34581,channel){
return (function (state_34570){var state_val_34571 = (state_34570[(1)]);if((state_val_34571 === (2)))
{var inst_34564 = (state_34570[(2)]);var inst_34565 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34566 = cljs_http.client.decode_body(inst_34564,cljs.reader.read_string,"application/edn",inst_34565);var inst_34567 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34566);var inst_34568 = cljs.core.async.close_BANG_(channel);var state_34570__$1 = (function (){var statearr_34572 = state_34570;(statearr_34572[(7)] = inst_34567);
return statearr_34572;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34570__$1,inst_34568);
} else
{if((state_val_34571 === (1)))
{var inst_34562 = (function (){var G__34573 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34573) : client.call(null,G__34573));
})();var state_34570__$1 = state_34570;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34570__$1,(2),inst_34562);
} else
{return null;
}
}
});})(c__22986__auto___34581,channel))
;return ((function (switch__22971__auto__,c__22986__auto___34581,channel){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_34577 = [null,null,null,null,null,null,null,null];(statearr_34577[(0)] = state_machine__22972__auto__);
(statearr_34577[(1)] = (1));
return statearr_34577;
});
var state_machine__22972__auto____1 = (function (state_34570){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_34570);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e34578){if((e34578 instanceof Object))
{var ex__22975__auto__ = e34578;var statearr_34579_34582 = state_34570;(statearr_34579_34582[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34578;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34583 = state_34570;
state_34570 = G__34583;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_34570){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_34570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___34581,channel))
})();var state__22988__auto__ = (function (){var statearr_34580 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_34580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___34581);
return statearr_34580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___34581,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__34584){var vec__34588 = p__34584;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34588,(0),null);return ((function (vec__34588,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__19663__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__34589 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34589) : client.call(null,G__34589));
} else
{var G__34590 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34590) : client.call(null,G__34590));
}
});
;})(vec__34588,accept))
};
var wrap_accept = function (client,var_args){
var p__34584 = null;if (arguments.length > 1) {
  p__34584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__34584);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__34591){
var client = cljs.core.first(arglist__34591);
var p__34584 = cljs.core.rest(arglist__34591);
return wrap_accept__delegate(client,p__34584);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__34592){var vec__34596 = p__34592;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34596,(0),null);return ((function (vec__34596,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__19663__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__34597 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34597) : client.call(null,G__34597));
} else
{var G__34598 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34598) : client.call(null,G__34598));
}
});
;})(vec__34596,content_type))
};
var wrap_content_type = function (client,var_args){
var p__34592 = null;if (arguments.length > 1) {
  p__34592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__34592);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__34599){
var client = cljs.core.first(arglist__34599);
var p__34592 = cljs.core.rest(arglist__34599);
return wrap_content_type__delegate(client,p__34592);
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
{var params = temp__4124__auto__;var map__34603 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__34603__$1 = ((cljs.core.seq_QMARK_(map__34603))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34603):map__34603);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34603__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34603__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));var G__34604 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34604) : client.call(null,G__34604));
} else
{var G__34605 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34605) : client.call(null,G__34605));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__34628 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__34628__$1 = ((cljs.core.seq_QMARK_(map__34628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34628):map__34628);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34628__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34628__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__22986__auto___34649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___34649,channel,map__34628,map__34628__$1,decoding_opts,decoding){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___34649,channel,map__34628,map__34628__$1,decoding_opts,decoding){
return (function (state_34638){var state_val_34639 = (state_34638[(1)]);if((state_val_34639 === (2)))
{var inst_34631 = (state_34638[(2)]);var inst_34632 = (function (){var response = inst_34631;return ((function (response,inst_34631,state_val_34639,c__22986__auto___34649,channel,map__34628,map__34628__$1,decoding_opts,decoding){
return (function (p1__34606_SHARP_){return cljs_http.util.transit_decode(p1__34606_SHARP_,decoding,decoding_opts);
});
;})(response,inst_34631,state_val_34639,c__22986__auto___34649,channel,map__34628,map__34628__$1,decoding_opts,decoding))
})();var inst_34633 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34634 = cljs_http.client.decode_body(inst_34631,inst_34632,"application/transit+json",inst_34633);var inst_34635 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34634);var inst_34636 = cljs.core.async.close_BANG_(channel);var state_34638__$1 = (function (){var statearr_34640 = state_34638;(statearr_34640[(7)] = inst_34635);
return statearr_34640;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34638__$1,inst_34636);
} else
{if((state_val_34639 === (1)))
{var inst_34629 = (function (){var G__34641 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34641) : client.call(null,G__34641));
})();var state_34638__$1 = state_34638;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34638__$1,(2),inst_34629);
} else
{return null;
}
}
});})(c__22986__auto___34649,channel,map__34628,map__34628__$1,decoding_opts,decoding))
;return ((function (switch__22971__auto__,c__22986__auto___34649,channel,map__34628,map__34628__$1,decoding_opts,decoding){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_34645 = [null,null,null,null,null,null,null,null];(statearr_34645[(0)] = state_machine__22972__auto__);
(statearr_34645[(1)] = (1));
return statearr_34645;
});
var state_machine__22972__auto____1 = (function (state_34638){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_34638);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e34646){if((e34646 instanceof Object))
{var ex__22975__auto__ = e34646;var statearr_34647_34650 = state_34638;(statearr_34647_34650[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34646;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34651 = state_34638;
state_34638 = G__34651;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_34638){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_34638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___34649,channel,map__34628,map__34628__$1,decoding_opts,decoding))
})();var state__22988__auto__ = (function (){var statearr_34648 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_34648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___34649);
return statearr_34648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___34649,channel,map__34628,map__34628__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__34654 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34654) : client.call(null,G__34654));
} else
{var G__34655 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34655) : client.call(null,G__34655));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22986__auto___34694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___34694,channel){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___34694,channel){
return (function (state_34683){var state_val_34684 = (state_34683[(1)]);if((state_val_34684 === (2)))
{var inst_34677 = (state_34683[(2)]);var inst_34678 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_34679 = cljs_http.client.decode_body(inst_34677,cljs_http.util.json_decode,"application/json",inst_34678);var inst_34680 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_34679);var inst_34681 = cljs.core.async.close_BANG_(channel);var state_34683__$1 = (function (){var statearr_34685 = state_34683;(statearr_34685[(7)] = inst_34680);
return statearr_34685;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34683__$1,inst_34681);
} else
{if((state_val_34684 === (1)))
{var inst_34675 = (function (){var G__34686 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34686) : client.call(null,G__34686));
})();var state_34683__$1 = state_34683;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34683__$1,(2),inst_34675);
} else
{return null;
}
}
});})(c__22986__auto___34694,channel))
;return ((function (switch__22971__auto__,c__22986__auto___34694,channel){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_34690 = [null,null,null,null,null,null,null,null];(statearr_34690[(0)] = state_machine__22972__auto__);
(statearr_34690[(1)] = (1));
return statearr_34690;
});
var state_machine__22972__auto____1 = (function (state_34683){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_34683);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e34691){if((e34691 instanceof Object))
{var ex__22975__auto__ = e34691;var statearr_34692_34695 = state_34683;(statearr_34692_34695[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34683);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34691;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34696 = state_34683;
state_34683 = G__34696;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_34683){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_34683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___34694,channel))
})();var state__22988__auto__ = (function (){var statearr_34693 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_34693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___34694);
return statearr_34693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___34694,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__34701){var map__34702 = p__34701;var map__34702__$1 = ((cljs.core.seq_QMARK_(map__34702))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34702):map__34702);var req = map__34702__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34702__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{var G__34703 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34703) : client.call(null,G__34703));
} else
{var G__34704 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34704) : client.call(null,G__34704));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__34709){var map__34710 = p__34709;var map__34710__$1 = ((cljs.core.seq_QMARK_(map__34710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34710):map__34710);var request = map__34710__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34710__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__19621__auto__ = form_params;if(cljs.core.truth_(and__19621__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__19621__auto__;
}
})()))
{var G__34711 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34711) : client.call(null,G__34711));
} else
{var G__34712 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34712) : client.call(null,G__34712));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__34714 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34714) : client.call(null,G__34714));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__34717 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34717) : client.call(null,G__34717));
} else
{var G__34718 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34718) : client.call(null,G__34718));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__34719_SHARP_){var G__34721 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34719_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34721) : client.call(null,G__34721));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__34727){var map__34728 = p__34727;var map__34728__$1 = ((cljs.core.seq_QMARK_(map__34728))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34728):map__34728);var req = map__34728__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__34729 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__34728,map__34728__$1,req,query_params){
return (function (p1__34722_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__34722_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__34728,map__34728__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34729) : client.call(null,G__34729));
} else
{var G__34730 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34730) : client.call(null,G__34730));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__34731){var vec__34735 = p__34731;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735,(0),null);return ((function (vec__34735,credentials){
return (function (req){var credentials__$1 = (function (){var or__19663__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__34736 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34736) : client.call(null,G__34736));
} else
{var G__34737 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34737) : client.call(null,G__34737));
}
});
;})(vec__34735,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__34731 = null;if (arguments.length > 1) {
  p__34731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__34731);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__34738){
var client = cljs.core.first(arglist__34738);
var p__34731 = cljs.core.rest(arglist__34738);
return wrap_basic_auth__delegate(client,p__34731);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__34741 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34741) : client.call(null,G__34741));
} else
{var G__34742 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__34742) : client.call(null,G__34742));
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
var delete$__delegate = function (url,p__34743){var vec__34746 = p__34743;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746,(0),null);var G__34747 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34747) : cljs_http.client.request.call(null,G__34747));
};
var delete$ = function (url,var_args){
var p__34743 = null;if (arguments.length > 1) {
  p__34743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__34743);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__34748){
var url = cljs.core.first(arglist__34748);
var p__34743 = cljs.core.rest(arglist__34748);
return delete$__delegate(url,p__34743);
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
var get__delegate = function (url,p__34749){var vec__34752 = p__34749;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752,(0),null);var G__34753 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34753) : cljs_http.client.request.call(null,G__34753));
};
var get = function (url,var_args){
var p__34749 = null;if (arguments.length > 1) {
  p__34749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__34749);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__34754){
var url = cljs.core.first(arglist__34754);
var p__34749 = cljs.core.rest(arglist__34754);
return get__delegate(url,p__34749);
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
var head__delegate = function (url,p__34755){var vec__34758 = p__34755;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(0),null);var G__34759 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34759) : cljs_http.client.request.call(null,G__34759));
};
var head = function (url,var_args){
var p__34755 = null;if (arguments.length > 1) {
  p__34755 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__34755);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__34760){
var url = cljs.core.first(arglist__34760);
var p__34755 = cljs.core.rest(arglist__34760);
return head__delegate(url,p__34755);
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
var move__delegate = function (url,p__34761){var vec__34764 = p__34761;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764,(0),null);var G__34765 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34765) : cljs_http.client.request.call(null,G__34765));
};
var move = function (url,var_args){
var p__34761 = null;if (arguments.length > 1) {
  p__34761 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__34761);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__34766){
var url = cljs.core.first(arglist__34766);
var p__34761 = cljs.core.rest(arglist__34766);
return move__delegate(url,p__34761);
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
var options__delegate = function (url,p__34767){var vec__34770 = p__34767;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34770,(0),null);var G__34771 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34771) : cljs_http.client.request.call(null,G__34771));
};
var options = function (url,var_args){
var p__34767 = null;if (arguments.length > 1) {
  p__34767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__34767);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__34772){
var url = cljs.core.first(arglist__34772);
var p__34767 = cljs.core.rest(arglist__34772);
return options__delegate(url,p__34767);
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
var patch__delegate = function (url,p__34773){var vec__34776 = p__34773;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776,(0),null);var G__34777 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34777) : cljs_http.client.request.call(null,G__34777));
};
var patch = function (url,var_args){
var p__34773 = null;if (arguments.length > 1) {
  p__34773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__34773);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__34778){
var url = cljs.core.first(arglist__34778);
var p__34773 = cljs.core.rest(arglist__34778);
return patch__delegate(url,p__34773);
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
var post__delegate = function (url,p__34779){var vec__34782 = p__34779;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(0),null);var G__34783 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34783) : cljs_http.client.request.call(null,G__34783));
};
var post = function (url,var_args){
var p__34779 = null;if (arguments.length > 1) {
  p__34779 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__34779);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__34784){
var url = cljs.core.first(arglist__34784);
var p__34779 = cljs.core.rest(arglist__34784);
return post__delegate(url,p__34779);
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
var put__delegate = function (url,p__34785){var vec__34788 = p__34785;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34788,(0),null);var G__34789 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__34789) : cljs_http.client.request.call(null,G__34789));
};
var put = function (url,var_args){
var p__34785 = null;if (arguments.length > 1) {
  p__34785 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__34785);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__34790){
var url = cljs.core.first(arglist__34790);
var p__34785 = cljs.core.rest(arglist__34790);
return put__delegate(url,p__34785);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
//# sourceMappingURL=client.js.map