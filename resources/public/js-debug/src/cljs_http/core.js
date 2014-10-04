goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__34251 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34251) : cljs.core.atom.call(null,G__34251));
})();
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){var temp__4126__auto__ = (function (){var G__34253 = cljs_http.core.pending_requests;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34253) : cljs.core.deref.call(null,G__34253));
})().call(null,channel);if(cljs.core.truth_(temp__4126__auto__))
{var xhr = temp__4126__auto__;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);
cljs.core.async.close_BANG_(channel);
return xhr.abort();
} else
{return null;
}
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__34255){var map__34258 = p__34255;var map__34258__$1 = ((cljs.core.seq_QMARK_(map__34258))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34258):map__34258);var request__$1 = map__34258__$1;var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34258__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34258__$1,new cljs.core.Keyword(null,"body","body",-2049205669));var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34258__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34258__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var request_url = cljs_http.util.build_url(request__$1);var method = cljs.core.name((function (){var or__19267__auto__ = request_method;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());var timeout = (function (){var or__19267__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request__$1);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return (0);
}
})();var headers__$1 = cljs_http.util.build_headers(headers);var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);var xhr = (function (){var G__34259 = (new goog.net.XhrIo());G__34259.setTimeoutInterval(timeout);
G__34259.setWithCredentials(send_credentials);
return G__34259;
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);
xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__34258,map__34258__$1,request__$1,with_credentials_QMARK_,body,headers,request_method){
return (function (p1__34254_SHARP_){var target = p1__34254_SHARP_.target;cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);
return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__34258,map__34258__$1,request__$1,with_credentials_QMARK_,body,headers,request_method))
);
xhr.send(request_url,method,body,headers__$1);
return channel;
});
//# sourceMappingURL=core.js.map