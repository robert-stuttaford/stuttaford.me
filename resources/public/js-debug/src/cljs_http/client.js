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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__19564__auto__ = v;if(cljs.core.truth_(and__19564__auto__))
{return (v > (0));
} else
{return and__19564__auto__;
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__51710_SHARP_,p2__51709_SHARP_){var vec__51712 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__51709_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51712,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51712,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51710_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__51714 = url;return goog.Uri.parse(G__51714);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51715_SHARP_){return cljs_http.client.encode_val(k,p1__51715_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__51716){var vec__51718 = p__51716;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51718,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51718,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__51719_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51719_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__19564__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__19564__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__19564__auto__;
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
{var params = temp__4124__auto__;var G__51722 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51722) : client.call(null,G__51722));
} else
{var G__51723 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51723) : client.call(null,G__51723));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22972__auto___51762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51762,channel){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51762,channel){
return (function (state_51751){var state_val_51752 = (state_51751[(1)]);if((state_val_51752 === (2)))
{var inst_51745 = (state_51751[(2)]);var inst_51746 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_51747 = cljs_http.client.decode_body(inst_51745,cljs.reader.read_string,"application/edn",inst_51746);var inst_51748 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_51747);var inst_51749 = cljs.core.async.close_BANG_(channel);var state_51751__$1 = (function (){var statearr_51753 = state_51751;(statearr_51753[(7)] = inst_51748);
return statearr_51753;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51751__$1,inst_51749);
} else
{if((state_val_51752 === (1)))
{var inst_51743 = (function (){var G__51754 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51754) : client.call(null,G__51754));
})();var state_51751__$1 = state_51751;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51751__$1,(2),inst_51743);
} else
{return null;
}
}
});})(c__22972__auto___51762,channel))
;return ((function (switch__22957__auto__,c__22972__auto___51762,channel){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51758 = [null,null,null,null,null,null,null,null];(statearr_51758[(0)] = state_machine__22958__auto__);
(statearr_51758[(1)] = (1));
return statearr_51758;
});
var state_machine__22958__auto____1 = (function (state_51751){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_51751);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51759){if((e51759 instanceof Object))
{var ex__22961__auto__ = e51759;var statearr_51760_51763 = state_51751;(statearr_51760_51763[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51751);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51759;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51764 = state_51751;
state_51751 = G__51764;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_51751){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_51751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51762,channel))
})();var state__22974__auto__ = (function (){var statearr_51761 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51762);
return statearr_51761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51762,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__51765){var vec__51769 = p__51765;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51769,(0),null);return ((function (vec__51769,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__19586__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__51770 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51770) : client.call(null,G__51770));
} else
{var G__51771 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51771) : client.call(null,G__51771));
}
});
;})(vec__51769,accept))
};
var wrap_accept = function (client,var_args){
var p__51765 = null;if (arguments.length > 1) {
  p__51765 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__51765);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__51772){
var client = cljs.core.first(arglist__51772);
var p__51765 = cljs.core.rest(arglist__51772);
return wrap_accept__delegate(client,p__51765);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__51773){var vec__51777 = p__51773;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51777,(0),null);return ((function (vec__51777,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__19586__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__51778 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51778) : client.call(null,G__51778));
} else
{var G__51779 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51779) : client.call(null,G__51779));
}
});
;})(vec__51777,content_type))
};
var wrap_content_type = function (client,var_args){
var p__51773 = null;if (arguments.length > 1) {
  p__51773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__51773);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__51780){
var client = cljs.core.first(arglist__51780);
var p__51773 = cljs.core.rest(arglist__51780);
return wrap_content_type__delegate(client,p__51773);
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
{var params = temp__4124__auto__;var map__51784 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__51784__$1 = ((cljs.core.seq_QMARK_(map__51784))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51784):map__51784);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51784__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51784__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));var G__51785 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51785) : client.call(null,G__51785));
} else
{var G__51786 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51786) : client.call(null,G__51786));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__51809 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));var map__51809__$1 = ((cljs.core.seq_QMARK_(map__51809))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51809):map__51809);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__22972__auto___51830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51830,channel,map__51809,map__51809__$1,decoding_opts,decoding){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51830,channel,map__51809,map__51809__$1,decoding_opts,decoding){
return (function (state_51819){var state_val_51820 = (state_51819[(1)]);if((state_val_51820 === (2)))
{var inst_51812 = (state_51819[(2)]);var inst_51813 = (function (){var response = inst_51812;return ((function (response,inst_51812,state_val_51820,c__22972__auto___51830,channel,map__51809,map__51809__$1,decoding_opts,decoding){
return (function (p1__51787_SHARP_){return cljs_http.util.transit_decode(p1__51787_SHARP_,decoding,decoding_opts);
});
;})(response,inst_51812,state_val_51820,c__22972__auto___51830,channel,map__51809,map__51809__$1,decoding_opts,decoding))
})();var inst_51814 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_51815 = cljs_http.client.decode_body(inst_51812,inst_51813,"application/transit+json",inst_51814);var inst_51816 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_51815);var inst_51817 = cljs.core.async.close_BANG_(channel);var state_51819__$1 = (function (){var statearr_51821 = state_51819;(statearr_51821[(7)] = inst_51816);
return statearr_51821;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51819__$1,inst_51817);
} else
{if((state_val_51820 === (1)))
{var inst_51810 = (function (){var G__51822 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51822) : client.call(null,G__51822));
})();var state_51819__$1 = state_51819;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51819__$1,(2),inst_51810);
} else
{return null;
}
}
});})(c__22972__auto___51830,channel,map__51809,map__51809__$1,decoding_opts,decoding))
;return ((function (switch__22957__auto__,c__22972__auto___51830,channel,map__51809,map__51809__$1,decoding_opts,decoding){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51826 = [null,null,null,null,null,null,null,null];(statearr_51826[(0)] = state_machine__22958__auto__);
(statearr_51826[(1)] = (1));
return statearr_51826;
});
var state_machine__22958__auto____1 = (function (state_51819){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_51819);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51827){if((e51827 instanceof Object))
{var ex__22961__auto__ = e51827;var statearr_51828_51831 = state_51819;(statearr_51828_51831[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51827;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51832 = state_51819;
state_51819 = G__51832;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_51819){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_51819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51830,channel,map__51809,map__51809__$1,decoding_opts,decoding))
})();var state__22974__auto__ = (function (){var statearr_51829 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51830);
return statearr_51829;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51830,channel,map__51809,map__51809__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__51835 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51835) : client.call(null,G__51835));
} else
{var G__51836 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51836) : client.call(null,G__51836));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__22972__auto___51875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51875,channel){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51875,channel){
return (function (state_51864){var state_val_51865 = (state_51864[(1)]);if((state_val_51865 === (2)))
{var inst_51858 = (state_51864[(2)]);var inst_51859 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_51860 = cljs_http.client.decode_body(inst_51858,cljs_http.util.json_decode,"application/json",inst_51859);var inst_51861 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_51860);var inst_51862 = cljs.core.async.close_BANG_(channel);var state_51864__$1 = (function (){var statearr_51866 = state_51864;(statearr_51866[(7)] = inst_51861);
return statearr_51866;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51864__$1,inst_51862);
} else
{if((state_val_51865 === (1)))
{var inst_51856 = (function (){var G__51867 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51867) : client.call(null,G__51867));
})();var state_51864__$1 = state_51864;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51864__$1,(2),inst_51856);
} else
{return null;
}
}
});})(c__22972__auto___51875,channel))
;return ((function (switch__22957__auto__,c__22972__auto___51875,channel){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51871 = [null,null,null,null,null,null,null,null];(statearr_51871[(0)] = state_machine__22958__auto__);
(statearr_51871[(1)] = (1));
return statearr_51871;
});
var state_machine__22958__auto____1 = (function (state_51864){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_51864);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51872){if((e51872 instanceof Object))
{var ex__22961__auto__ = e51872;var statearr_51873_51876 = state_51864;(statearr_51873_51876[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51864);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51872;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51877 = state_51864;
state_51864 = G__51877;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_51864){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_51864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51875,channel))
})();var state__22974__auto__ = (function (){var statearr_51874 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51875);
return statearr_51874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51875,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__51882){var map__51883 = p__51882;var map__51883__$1 = ((cljs.core.seq_QMARK_(map__51883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51883):map__51883);var req = map__51883__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51883__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{var G__51884 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51884) : client.call(null,G__51884));
} else
{var G__51885 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51885) : client.call(null,G__51885));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__51890){var map__51891 = p__51890;var map__51891__$1 = ((cljs.core.seq_QMARK_(map__51891))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51891):map__51891);var request = map__51891__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51891__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51891__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__19564__auto__ = form_params;if(cljs.core.truth_(and__19564__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__19564__auto__;
}
})()))
{var G__51892 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51892) : client.call(null,G__51892));
} else
{var G__51893 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51893) : client.call(null,G__51893));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__51895 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51895) : client.call(null,G__51895));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__51898 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51898) : client.call(null,G__51898));
} else
{var G__51899 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51899) : client.call(null,G__51899));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__51900_SHARP_){var G__51902 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51900_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51902) : client.call(null,G__51902));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__51908){var map__51909 = p__51908;var map__51909__$1 = ((cljs.core.seq_QMARK_(map__51909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51909):map__51909);var req = map__51909__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51909__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__51910 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__51909,map__51909__$1,req,query_params){
return (function (p1__51903_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__51903_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__51909,map__51909__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51910) : client.call(null,G__51910));
} else
{var G__51911 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51911) : client.call(null,G__51911));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__51912){var vec__51916 = p__51912;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51916,(0),null);return ((function (vec__51916,credentials){
return (function (req){var credentials__$1 = (function (){var or__19586__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__51917 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51917) : client.call(null,G__51917));
} else
{var G__51918 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51918) : client.call(null,G__51918));
}
});
;})(vec__51916,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__51912 = null;if (arguments.length > 1) {
  p__51912 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__51912);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__51919){
var client = cljs.core.first(arglist__51919);
var p__51912 = cljs.core.rest(arglist__51919);
return wrap_basic_auth__delegate(client,p__51912);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__51922 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51922) : client.call(null,G__51922));
} else
{var G__51923 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__51923) : client.call(null,G__51923));
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
var delete$__delegate = function (url,p__51924){var vec__51927 = p__51924;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51927,(0),null);var G__51928 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51928) : cljs_http.client.request.call(null,G__51928));
};
var delete$ = function (url,var_args){
var p__51924 = null;if (arguments.length > 1) {
  p__51924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__51924);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__51929){
var url = cljs.core.first(arglist__51929);
var p__51924 = cljs.core.rest(arglist__51929);
return delete$__delegate(url,p__51924);
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
var get__delegate = function (url,p__51930){var vec__51933 = p__51930;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51933,(0),null);var G__51934 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51934) : cljs_http.client.request.call(null,G__51934));
};
var get = function (url,var_args){
var p__51930 = null;if (arguments.length > 1) {
  p__51930 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__51930);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__51935){
var url = cljs.core.first(arglist__51935);
var p__51930 = cljs.core.rest(arglist__51935);
return get__delegate(url,p__51930);
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
var head__delegate = function (url,p__51936){var vec__51939 = p__51936;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51939,(0),null);var G__51940 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51940) : cljs_http.client.request.call(null,G__51940));
};
var head = function (url,var_args){
var p__51936 = null;if (arguments.length > 1) {
  p__51936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__51936);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__51941){
var url = cljs.core.first(arglist__51941);
var p__51936 = cljs.core.rest(arglist__51941);
return head__delegate(url,p__51936);
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
var move__delegate = function (url,p__51942){var vec__51945 = p__51942;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51945,(0),null);var G__51946 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51946) : cljs_http.client.request.call(null,G__51946));
};
var move = function (url,var_args){
var p__51942 = null;if (arguments.length > 1) {
  p__51942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__51942);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__51947){
var url = cljs.core.first(arglist__51947);
var p__51942 = cljs.core.rest(arglist__51947);
return move__delegate(url,p__51942);
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
var options__delegate = function (url,p__51948){var vec__51951 = p__51948;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51951,(0),null);var G__51952 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51952) : cljs_http.client.request.call(null,G__51952));
};
var options = function (url,var_args){
var p__51948 = null;if (arguments.length > 1) {
  p__51948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__51948);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__51953){
var url = cljs.core.first(arglist__51953);
var p__51948 = cljs.core.rest(arglist__51953);
return options__delegate(url,p__51948);
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
var patch__delegate = function (url,p__51954){var vec__51957 = p__51954;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51957,(0),null);var G__51958 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51958) : cljs_http.client.request.call(null,G__51958));
};
var patch = function (url,var_args){
var p__51954 = null;if (arguments.length > 1) {
  p__51954 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__51954);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__51959){
var url = cljs.core.first(arglist__51959);
var p__51954 = cljs.core.rest(arglist__51959);
return patch__delegate(url,p__51954);
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
var post__delegate = function (url,p__51960){var vec__51963 = p__51960;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51963,(0),null);var G__51964 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51964) : cljs_http.client.request.call(null,G__51964));
};
var post = function (url,var_args){
var p__51960 = null;if (arguments.length > 1) {
  p__51960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__51960);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__51965){
var url = cljs.core.first(arglist__51965);
var p__51960 = cljs.core.rest(arglist__51965);
return post__delegate(url,p__51960);
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
var put__delegate = function (url,p__51966){var vec__51969 = p__51966;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51969,(0),null);var G__51970 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__51970) : cljs_http.client.request.call(null,G__51970));
};
var put = function (url,var_args){
var p__51966 = null;if (arguments.length > 1) {
  p__51966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__51966);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__51971){
var url = cljs.core.first(arglist__51971);
var p__51966 = cljs.core.rest(arglist__51971);
return put__delegate(url,p__51966);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
//# sourceMappingURL=client.js.map