goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.enable_console_print_BANG_();
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__31268 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__31268) : com.cognitect.transit.eq.hashCode.call(null,G__31268));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__31269 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__31269) : com.cognitect.transit.eq.hashCode.call(null,G__31269));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__31270 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__31270) : com.cognitect.transit.eq.hashCode.call(null,G__31270));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__31275_31279 = cljs.core.seq(cljs.core.js_keys(b));var chunk__31276_31280 = null;var count__31277_31281 = (0);var i__31278_31282 = (0);while(true){
if((i__31278_31282 < count__31277_31281))
{var k_31283 = chunk__31276_31280.cljs$core$IIndexed$_nth$arity$2(null,i__31278_31282);var v_31284 = (b[k_31283]);(a[k_31283] = v_31284);
{
var G__31285 = seq__31275_31279;
var G__31286 = chunk__31276_31280;
var G__31287 = count__31277_31281;
var G__31288 = (i__31278_31282 + (1));
seq__31275_31279 = G__31285;
chunk__31276_31280 = G__31286;
count__31277_31281 = G__31287;
i__31278_31282 = G__31288;
continue;
}
} else
{var temp__4126__auto___31289 = cljs.core.seq(seq__31275_31279);if(temp__4126__auto___31289)
{var seq__31275_31290__$1 = temp__4126__auto___31289;if(cljs.core.chunked_seq_QMARK_(seq__31275_31290__$1))
{var c__21126__auto___31291 = cljs.core.chunk_first(seq__31275_31290__$1);{
var G__31292 = cljs.core.chunk_rest(seq__31275_31290__$1);
var G__31293 = c__21126__auto___31291;
var G__31294 = cljs.core.count(c__21126__auto___31291);
var G__31295 = (0);
seq__31275_31279 = G__31292;
chunk__31276_31280 = G__31293;
count__31277_31281 = G__31294;
i__31278_31282 = G__31295;
continue;
}
} else
{var k_31296 = cljs.core.first(seq__31275_31290__$1);var v_31297 = (b[k_31296]);(a[k_31296] = v_31297);
{
var G__31298 = cljs.core.next(seq__31275_31290__$1);
var G__31299 = null;
var G__31300 = (0);
var G__31301 = (0);
seq__31275_31279 = G__31298;
chunk__31276_31280 = G__31299;
count__31277_31281 = G__31300;
i__31278_31282 = G__31301;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__31302 = arr;var G__31303 = true;var G__31304 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__31302,G__31303,G__31304) : cljs.core.PersistentArrayMap.fromArray.call(null,G__31302,G__31303,G__31304));
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__31305 = arr;var G__31306 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__31305,G__31306) : cljs.core.PersistentVector.fromArray.call(null,G__31305,G__31306));
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){var G__31311 = cljs.core.name(type);var G__31312 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__31311){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__31313 = (i + (2));
var G__31314 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__31313;
ret = G__31314;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__31311))
, "list": ((function (G__31311){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__31311))
, "set": ((function (G__31311){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__31311))
, ":": ((function (G__31311){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__31311))
, "$": ((function (G__31311){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__31311))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__31311,G__31312) : com.cognitect.transit.reader.call(null,G__31311,G__31312));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31315_31321 = cljs.core.seq(v);var chunk__31316_31322 = null;var count__31317_31323 = (0);var i__31318_31324 = (0);while(true){
if((i__31318_31324 < count__31317_31323))
{var x_31325 = chunk__31316_31322.cljs$core$IIndexed$_nth$arity$2(null,i__31318_31324);ret.push(x_31325);
{
var G__31326 = seq__31315_31321;
var G__31327 = chunk__31316_31322;
var G__31328 = count__31317_31323;
var G__31329 = (i__31318_31324 + (1));
seq__31315_31321 = G__31326;
chunk__31316_31322 = G__31327;
count__31317_31323 = G__31328;
i__31318_31324 = G__31329;
continue;
}
} else
{var temp__4126__auto___31330 = cljs.core.seq(seq__31315_31321);if(temp__4126__auto___31330)
{var seq__31315_31331__$1 = temp__4126__auto___31330;if(cljs.core.chunked_seq_QMARK_(seq__31315_31331__$1))
{var c__21126__auto___31332 = cljs.core.chunk_first(seq__31315_31331__$1);{
var G__31333 = cljs.core.chunk_rest(seq__31315_31331__$1);
var G__31334 = c__21126__auto___31332;
var G__31335 = cljs.core.count(c__21126__auto___31332);
var G__31336 = (0);
seq__31315_31321 = G__31333;
chunk__31316_31322 = G__31334;
count__31317_31323 = G__31335;
i__31318_31324 = G__31336;
continue;
}
} else
{var x_31337 = cljs.core.first(seq__31315_31331__$1);ret.push(x_31337);
{
var G__31338 = cljs.core.next(seq__31315_31331__$1);
var G__31339 = null;
var G__31340 = (0);
var G__31341 = (0);
seq__31315_31321 = G__31338;
chunk__31316_31322 = G__31339;
count__31317_31323 = G__31340;
i__31318_31324 = G__31341;
continue;
}
}
} else
{}
}
break;
}
var G__31319 = "array";var G__31320 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__31319,G__31320) : com.cognitect.transit.tagged.call(null,G__31319,G__31320));
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31342_31348 = cljs.core.seq(v);var chunk__31343_31349 = null;var count__31344_31350 = (0);var i__31345_31351 = (0);while(true){
if((i__31345_31351 < count__31344_31350))
{var x_31352 = chunk__31343_31349.cljs$core$IIndexed$_nth$arity$2(null,i__31345_31351);ret.push(x_31352);
{
var G__31353 = seq__31342_31348;
var G__31354 = chunk__31343_31349;
var G__31355 = count__31344_31350;
var G__31356 = (i__31345_31351 + (1));
seq__31342_31348 = G__31353;
chunk__31343_31349 = G__31354;
count__31344_31350 = G__31355;
i__31345_31351 = G__31356;
continue;
}
} else
{var temp__4126__auto___31357 = cljs.core.seq(seq__31342_31348);if(temp__4126__auto___31357)
{var seq__31342_31358__$1 = temp__4126__auto___31357;if(cljs.core.chunked_seq_QMARK_(seq__31342_31358__$1))
{var c__21126__auto___31359 = cljs.core.chunk_first(seq__31342_31358__$1);{
var G__31360 = cljs.core.chunk_rest(seq__31342_31358__$1);
var G__31361 = c__21126__auto___31359;
var G__31362 = cljs.core.count(c__21126__auto___31359);
var G__31363 = (0);
seq__31342_31348 = G__31360;
chunk__31343_31349 = G__31361;
count__31344_31350 = G__31362;
i__31345_31351 = G__31363;
continue;
}
} else
{var x_31364 = cljs.core.first(seq__31342_31358__$1);ret.push(x_31364);
{
var G__31365 = cljs.core.next(seq__31342_31358__$1);
var G__31366 = null;
var G__31367 = (0);
var G__31368 = (0);
seq__31342_31348 = G__31365;
chunk__31343_31349 = G__31366;
count__31344_31350 = G__31367;
i__31345_31351 = G__31368;
continue;
}
}
} else
{}
}
break;
}
var G__31346 = "array";var G__31347 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__31346,G__31347) : com.cognitect.transit.tagged.call(null,G__31346,G__31347));
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31369_31373 = cljs.core.seq(v);var chunk__31370_31374 = null;var count__31371_31375 = (0);var i__31372_31376 = (0);while(true){
if((i__31372_31376 < count__31371_31375))
{var x_31377 = chunk__31370_31374.cljs$core$IIndexed$_nth$arity$2(null,i__31372_31376);ret.push(x_31377);
{
var G__31378 = seq__31369_31373;
var G__31379 = chunk__31370_31374;
var G__31380 = count__31371_31375;
var G__31381 = (i__31372_31376 + (1));
seq__31369_31373 = G__31378;
chunk__31370_31374 = G__31379;
count__31371_31375 = G__31380;
i__31372_31376 = G__31381;
continue;
}
} else
{var temp__4126__auto___31382 = cljs.core.seq(seq__31369_31373);if(temp__4126__auto___31382)
{var seq__31369_31383__$1 = temp__4126__auto___31382;if(cljs.core.chunked_seq_QMARK_(seq__31369_31383__$1))
{var c__21126__auto___31384 = cljs.core.chunk_first(seq__31369_31383__$1);{
var G__31385 = cljs.core.chunk_rest(seq__31369_31383__$1);
var G__31386 = c__21126__auto___31384;
var G__31387 = cljs.core.count(c__21126__auto___31384);
var G__31388 = (0);
seq__31369_31373 = G__31385;
chunk__31370_31374 = G__31386;
count__31371_31375 = G__31387;
i__31372_31376 = G__31388;
continue;
}
} else
{var x_31389 = cljs.core.first(seq__31369_31383__$1);ret.push(x_31389);
{
var G__31390 = cljs.core.next(seq__31369_31383__$1);
var G__31391 = null;
var G__31392 = (0);
var G__31393 = (0);
seq__31369_31373 = G__31390;
chunk__31370_31374 = G__31391;
count__31371_31375 = G__31392;
i__31372_31376 = G__31393;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__31412 = cljs.core.name(type);var G__31413 = cognitect.transit.opts_merge({"unpack": ((function (G__31412,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__31412,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x31417 = cljs.core.clone(handlers);x31417.forEach = ((function (x31417,G__31412,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__31418 = cljs.core.seq(coll);var chunk__31419 = null;var count__31420 = (0);var i__31421 = (0);while(true){
if((i__31421 < count__31420))
{var vec__31422 = chunk__31419.cljs$core$IIndexed$_nth$arity$2(null,i__31421);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31422,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31422,(1),null);var G__31423_31428 = v;var G__31424_31429 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31423_31428,G__31424_31429) : f.call(null,G__31423_31428,G__31424_31429));
{
var G__31430 = seq__31418;
var G__31431 = chunk__31419;
var G__31432 = count__31420;
var G__31433 = (i__31421 + (1));
seq__31418 = G__31430;
chunk__31419 = G__31431;
count__31420 = G__31432;
i__31421 = G__31433;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__31418);if(temp__4126__auto__)
{var seq__31418__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__31418__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__31418__$1);{
var G__31434 = cljs.core.chunk_rest(seq__31418__$1);
var G__31435 = c__21126__auto__;
var G__31436 = cljs.core.count(c__21126__auto__);
var G__31437 = (0);
seq__31418 = G__31434;
chunk__31419 = G__31435;
count__31420 = G__31436;
i__31421 = G__31437;
continue;
}
} else
{var vec__31425 = cljs.core.first(seq__31418__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31425,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31425,(1),null);var G__31426_31438 = v;var G__31427_31439 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31426_31438,G__31427_31439) : f.call(null,G__31426_31438,G__31427_31439));
{
var G__31440 = cljs.core.next(seq__31418__$1);
var G__31441 = null;
var G__31442 = (0);
var G__31443 = (0);
seq__31418 = G__31440;
chunk__31419 = G__31441;
count__31420 = G__31442;
i__31421 = G__31443;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x31417,G__31412,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x31417;
})(), "objectBuilder": ((function (G__31412,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__31412,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__31414 = obj;G__31414.push((function (){var G__31415 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__31415) : kfn.call(null,G__31415));
})(),(function (){var G__31416 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__31416) : vfn.call(null,G__31416));
})());
return G__31414;
});})(G__31412,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__31412,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__31412,G__31413) : com.cognitect.transit.writer.call(null,G__31412,G__31413));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t31458 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t31458 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta31459){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta31459 = meta31459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t31458.cljs$lang$type = true;
cognitect.transit.t31458.cljs$lang$ctorStr = "cognitect.transit/t31458";
cognitect.transit.t31458.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cognitect.transit/t31458");
});
cognitect.transit.t31458.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__31461 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__31461) : self__.tag_fn.call(null,G__31461));
});
cognitect.transit.t31458.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__31462 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__31462) : self__.rep_fn.call(null,G__31462));
});
cognitect.transit.t31458.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__31463 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__31463) : self__.str_rep_fn.call(null,G__31463));
} else
{return null;
}
});
cognitect.transit.t31458.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t31458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31460){var self__ = this;
var _31460__$1 = this;return self__.meta31459;
});
cognitect.transit.t31458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31460,meta31459__$1){var self__ = this;
var _31460__$1 = this;return (new cognitect.transit.t31458(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta31459__$1));
});
cognitect.transit.__GT_t31458 = (function __GT_t31458(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta31459){return (new cognitect.transit.t31458(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta31459));
});
}
return (new cognitect.transit.t31458(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__31466 = tag;var G__31467 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__31466,G__31467) : com.cognitect.transit.types.taggedValue.call(null,G__31466,G__31467));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__31469 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__31469) : com.cognitect.transit.types.isTaggedValue.call(null,G__31469));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__31471 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__31471) : com.cognitect.transit.types.integer.call(null,G__31471));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__31473 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__31473) : com.cognitect.transit.types.isInteger.call(null,G__31473));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__31475 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__31475) : com.cognitect.transit.types.bigInteger.call(null,G__31475));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__31477 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__31477) : com.cognitect.transit.types.isBigInteger.call(null,G__31477));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__31479 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__31479) : com.cognitect.transit.types.bigDecimalValue.call(null,G__31479));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__31481 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__31481) : com.cognitect.transit.types.isBigDecimal.call(null,G__31481));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__31483 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__31483) : com.cognitect.transit.types.uri.call(null,G__31483));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__31485 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__31485) : com.cognitect.transit.types.isURI.call(null,G__31485));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__31487 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__31487) : com.cognitect.transit.types.uuid.call(null,G__31487));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__31489 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__31489) : com.cognitect.transit.types.isUUID.call(null,G__31489));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__31491 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__31491) : com.cognitect.transit.types.binary.call(null,G__31491));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__31493 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__31493) : com.cognitect.transit.types.isBinary.call(null,G__31493));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__31495 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__31495) : com.cognitect.transit.types.quoted.call(null,G__31495));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__31497 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__31497) : com.cognitect.transit.types.isQuoted.call(null,G__31497));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__31499 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__31499) : com.cognitect.transit.types.link.call(null,G__31499));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__31501 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__31501) : com.cognitect.transit.types.isLink.call(null,G__31501));
});
//# sourceMappingURL=transit.js.map