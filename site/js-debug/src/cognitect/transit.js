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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__48222 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__48222) : com.cognitect.transit.eq.hashCode.call(null,G__48222));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__48223 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__48223) : com.cognitect.transit.eq.hashCode.call(null,G__48223));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__48224 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__48224) : com.cognitect.transit.eq.hashCode.call(null,G__48224));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__48229_48233 = cljs.core.seq(cljs.core.js_keys(b));var chunk__48230_48234 = null;var count__48231_48235 = (0);var i__48232_48236 = (0);while(true){
if((i__48232_48236 < count__48231_48235))
{var k_48237 = chunk__48230_48234.cljs$core$IIndexed$_nth$arity$2(null,i__48232_48236);var v_48238 = (b[k_48237]);(a[k_48237] = v_48238);
{
var G__48239 = seq__48229_48233;
var G__48240 = chunk__48230_48234;
var G__48241 = count__48231_48235;
var G__48242 = (i__48232_48236 + (1));
seq__48229_48233 = G__48239;
chunk__48230_48234 = G__48240;
count__48231_48235 = G__48241;
i__48232_48236 = G__48242;
continue;
}
} else
{var temp__4126__auto___48243 = cljs.core.seq(seq__48229_48233);if(temp__4126__auto___48243)
{var seq__48229_48244__$1 = temp__4126__auto___48243;if(cljs.core.chunked_seq_QMARK_(seq__48229_48244__$1))
{var c__20735__auto___48245 = cljs.core.chunk_first(seq__48229_48244__$1);{
var G__48246 = cljs.core.chunk_rest(seq__48229_48244__$1);
var G__48247 = c__20735__auto___48245;
var G__48248 = cljs.core.count(c__20735__auto___48245);
var G__48249 = (0);
seq__48229_48233 = G__48246;
chunk__48230_48234 = G__48247;
count__48231_48235 = G__48248;
i__48232_48236 = G__48249;
continue;
}
} else
{var k_48250 = cljs.core.first(seq__48229_48244__$1);var v_48251 = (b[k_48250]);(a[k_48250] = v_48251);
{
var G__48252 = cljs.core.next(seq__48229_48244__$1);
var G__48253 = null;
var G__48254 = (0);
var G__48255 = (0);
seq__48229_48233 = G__48252;
chunk__48230_48234 = G__48253;
count__48231_48235 = G__48254;
i__48232_48236 = G__48255;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/MapBuilder");
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
var _ = this;var G__48256 = arr;var G__48257 = true;var G__48258 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__48256,G__48257,G__48258) : cljs.core.PersistentArrayMap.fromArray.call(null,G__48256,G__48257,G__48258));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/VectorBuilder");
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
var _ = this;var G__48259 = arr;var G__48260 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__48259,G__48260) : cljs.core.PersistentVector.fromArray.call(null,G__48259,G__48260));
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
var reader__2 = (function (type,opts){var G__48265 = cljs.core.name(type);var G__48266 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__48265){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__48267 = (i + (2));
var G__48268 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__48267;
ret = G__48268;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__48265))
, "list": ((function (G__48265){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__48265))
, "set": ((function (G__48265){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__48265))
, ":": ((function (G__48265){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__48265))
, "$": ((function (G__48265){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__48265))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__48265,G__48266) : com.cognitect.transit.reader.call(null,G__48265,G__48266));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__48269_48275 = cljs.core.seq(v);var chunk__48270_48276 = null;var count__48271_48277 = (0);var i__48272_48278 = (0);while(true){
if((i__48272_48278 < count__48271_48277))
{var x_48279 = chunk__48270_48276.cljs$core$IIndexed$_nth$arity$2(null,i__48272_48278);ret.push(x_48279);
{
var G__48280 = seq__48269_48275;
var G__48281 = chunk__48270_48276;
var G__48282 = count__48271_48277;
var G__48283 = (i__48272_48278 + (1));
seq__48269_48275 = G__48280;
chunk__48270_48276 = G__48281;
count__48271_48277 = G__48282;
i__48272_48278 = G__48283;
continue;
}
} else
{var temp__4126__auto___48284 = cljs.core.seq(seq__48269_48275);if(temp__4126__auto___48284)
{var seq__48269_48285__$1 = temp__4126__auto___48284;if(cljs.core.chunked_seq_QMARK_(seq__48269_48285__$1))
{var c__20735__auto___48286 = cljs.core.chunk_first(seq__48269_48285__$1);{
var G__48287 = cljs.core.chunk_rest(seq__48269_48285__$1);
var G__48288 = c__20735__auto___48286;
var G__48289 = cljs.core.count(c__20735__auto___48286);
var G__48290 = (0);
seq__48269_48275 = G__48287;
chunk__48270_48276 = G__48288;
count__48271_48277 = G__48289;
i__48272_48278 = G__48290;
continue;
}
} else
{var x_48291 = cljs.core.first(seq__48269_48285__$1);ret.push(x_48291);
{
var G__48292 = cljs.core.next(seq__48269_48285__$1);
var G__48293 = null;
var G__48294 = (0);
var G__48295 = (0);
seq__48269_48275 = G__48292;
chunk__48270_48276 = G__48293;
count__48271_48277 = G__48294;
i__48272_48278 = G__48295;
continue;
}
}
} else
{}
}
break;
}
var G__48273 = "array";var G__48274 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__48273,G__48274) : com.cognitect.transit.tagged.call(null,G__48273,G__48274));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__48296_48302 = cljs.core.seq(v);var chunk__48297_48303 = null;var count__48298_48304 = (0);var i__48299_48305 = (0);while(true){
if((i__48299_48305 < count__48298_48304))
{var x_48306 = chunk__48297_48303.cljs$core$IIndexed$_nth$arity$2(null,i__48299_48305);ret.push(x_48306);
{
var G__48307 = seq__48296_48302;
var G__48308 = chunk__48297_48303;
var G__48309 = count__48298_48304;
var G__48310 = (i__48299_48305 + (1));
seq__48296_48302 = G__48307;
chunk__48297_48303 = G__48308;
count__48298_48304 = G__48309;
i__48299_48305 = G__48310;
continue;
}
} else
{var temp__4126__auto___48311 = cljs.core.seq(seq__48296_48302);if(temp__4126__auto___48311)
{var seq__48296_48312__$1 = temp__4126__auto___48311;if(cljs.core.chunked_seq_QMARK_(seq__48296_48312__$1))
{var c__20735__auto___48313 = cljs.core.chunk_first(seq__48296_48312__$1);{
var G__48314 = cljs.core.chunk_rest(seq__48296_48312__$1);
var G__48315 = c__20735__auto___48313;
var G__48316 = cljs.core.count(c__20735__auto___48313);
var G__48317 = (0);
seq__48296_48302 = G__48314;
chunk__48297_48303 = G__48315;
count__48298_48304 = G__48316;
i__48299_48305 = G__48317;
continue;
}
} else
{var x_48318 = cljs.core.first(seq__48296_48312__$1);ret.push(x_48318);
{
var G__48319 = cljs.core.next(seq__48296_48312__$1);
var G__48320 = null;
var G__48321 = (0);
var G__48322 = (0);
seq__48296_48302 = G__48319;
chunk__48297_48303 = G__48320;
count__48298_48304 = G__48321;
i__48299_48305 = G__48322;
continue;
}
}
} else
{}
}
break;
}
var G__48300 = "array";var G__48301 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__48300,G__48301) : com.cognitect.transit.tagged.call(null,G__48300,G__48301));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__48323_48327 = cljs.core.seq(v);var chunk__48324_48328 = null;var count__48325_48329 = (0);var i__48326_48330 = (0);while(true){
if((i__48326_48330 < count__48325_48329))
{var x_48331 = chunk__48324_48328.cljs$core$IIndexed$_nth$arity$2(null,i__48326_48330);ret.push(x_48331);
{
var G__48332 = seq__48323_48327;
var G__48333 = chunk__48324_48328;
var G__48334 = count__48325_48329;
var G__48335 = (i__48326_48330 + (1));
seq__48323_48327 = G__48332;
chunk__48324_48328 = G__48333;
count__48325_48329 = G__48334;
i__48326_48330 = G__48335;
continue;
}
} else
{var temp__4126__auto___48336 = cljs.core.seq(seq__48323_48327);if(temp__4126__auto___48336)
{var seq__48323_48337__$1 = temp__4126__auto___48336;if(cljs.core.chunked_seq_QMARK_(seq__48323_48337__$1))
{var c__20735__auto___48338 = cljs.core.chunk_first(seq__48323_48337__$1);{
var G__48339 = cljs.core.chunk_rest(seq__48323_48337__$1);
var G__48340 = c__20735__auto___48338;
var G__48341 = cljs.core.count(c__20735__auto___48338);
var G__48342 = (0);
seq__48323_48327 = G__48339;
chunk__48324_48328 = G__48340;
count__48325_48329 = G__48341;
i__48326_48330 = G__48342;
continue;
}
} else
{var x_48343 = cljs.core.first(seq__48323_48337__$1);ret.push(x_48343);
{
var G__48344 = cljs.core.next(seq__48323_48337__$1);
var G__48345 = null;
var G__48346 = (0);
var G__48347 = (0);
seq__48323_48327 = G__48344;
chunk__48324_48328 = G__48345;
count__48325_48329 = G__48346;
i__48326_48330 = G__48347;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__48366 = cljs.core.name(type);var G__48367 = cognitect.transit.opts_merge({"unpack": ((function (G__48366,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__48366,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x48371 = cljs.core.clone(handlers);x48371.forEach = ((function (x48371,G__48366,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__48372 = cljs.core.seq(coll);var chunk__48373 = null;var count__48374 = (0);var i__48375 = (0);while(true){
if((i__48375 < count__48374))
{var vec__48376 = chunk__48373.cljs$core$IIndexed$_nth$arity$2(null,i__48375);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48376,(1),null);var G__48377_48382 = v;var G__48378_48383 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48377_48382,G__48378_48383) : f.call(null,G__48377_48382,G__48378_48383));
{
var G__48384 = seq__48372;
var G__48385 = chunk__48373;
var G__48386 = count__48374;
var G__48387 = (i__48375 + (1));
seq__48372 = G__48384;
chunk__48373 = G__48385;
count__48374 = G__48386;
i__48375 = G__48387;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__48372);if(temp__4126__auto__)
{var seq__48372__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__48372__$1))
{var c__20735__auto__ = cljs.core.chunk_first(seq__48372__$1);{
var G__48388 = cljs.core.chunk_rest(seq__48372__$1);
var G__48389 = c__20735__auto__;
var G__48390 = cljs.core.count(c__20735__auto__);
var G__48391 = (0);
seq__48372 = G__48388;
chunk__48373 = G__48389;
count__48374 = G__48390;
i__48375 = G__48391;
continue;
}
} else
{var vec__48379 = cljs.core.first(seq__48372__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48379,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48379,(1),null);var G__48380_48392 = v;var G__48381_48393 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48380_48392,G__48381_48393) : f.call(null,G__48380_48392,G__48381_48393));
{
var G__48394 = cljs.core.next(seq__48372__$1);
var G__48395 = null;
var G__48396 = (0);
var G__48397 = (0);
seq__48372 = G__48394;
chunk__48373 = G__48395;
count__48374 = G__48396;
i__48375 = G__48397;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x48371,G__48366,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x48371;
})(), "objectBuilder": ((function (G__48366,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__48366,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__48368 = obj;G__48368.push((function (){var G__48369 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__48369) : kfn.call(null,G__48369));
})(),(function (){var G__48370 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__48370) : vfn.call(null,G__48370));
})());
return G__48368;
});})(G__48366,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__48366,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__48366,G__48367) : com.cognitect.transit.writer.call(null,G__48366,G__48367));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t48412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t48412 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta48413){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta48413 = meta48413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t48412.cljs$lang$type = true;
cognitect.transit.t48412.cljs$lang$ctorStr = "cognitect.transit/t48412";
cognitect.transit.t48412.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cognitect.transit/t48412");
});
cognitect.transit.t48412.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__48415 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__48415) : self__.tag_fn.call(null,G__48415));
});
cognitect.transit.t48412.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__48416 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__48416) : self__.rep_fn.call(null,G__48416));
});
cognitect.transit.t48412.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__48417 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__48417) : self__.str_rep_fn.call(null,G__48417));
} else
{return null;
}
});
cognitect.transit.t48412.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t48412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48414){var self__ = this;
var _48414__$1 = this;return self__.meta48413;
});
cognitect.transit.t48412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48414,meta48413__$1){var self__ = this;
var _48414__$1 = this;return (new cognitect.transit.t48412(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta48413__$1));
});
cognitect.transit.__GT_t48412 = (function __GT_t48412(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta48413){return (new cognitect.transit.t48412(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta48413));
});
}
return (new cognitect.transit.t48412(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__48420 = tag;var G__48421 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__48420,G__48421) : com.cognitect.transit.types.taggedValue.call(null,G__48420,G__48421));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__48423 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__48423) : com.cognitect.transit.types.isTaggedValue.call(null,G__48423));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__48425 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__48425) : com.cognitect.transit.types.integer.call(null,G__48425));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__48427 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__48427) : com.cognitect.transit.types.isInteger.call(null,G__48427));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__48429 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__48429) : com.cognitect.transit.types.bigInteger.call(null,G__48429));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__48431 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__48431) : com.cognitect.transit.types.isBigInteger.call(null,G__48431));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__48433 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__48433) : com.cognitect.transit.types.bigDecimalValue.call(null,G__48433));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__48435 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__48435) : com.cognitect.transit.types.isBigDecimal.call(null,G__48435));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__48437 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__48437) : com.cognitect.transit.types.uri.call(null,G__48437));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__48439 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__48439) : com.cognitect.transit.types.isURI.call(null,G__48439));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__48441 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__48441) : com.cognitect.transit.types.uuid.call(null,G__48441));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__48443 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__48443) : com.cognitect.transit.types.isUUID.call(null,G__48443));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__48445 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__48445) : com.cognitect.transit.types.binary.call(null,G__48445));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__48447 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__48447) : com.cognitect.transit.types.isBinary.call(null,G__48447));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__48449 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__48449) : com.cognitect.transit.types.quoted.call(null,G__48449));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__48451 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__48451) : com.cognitect.transit.types.isQuoted.call(null,G__48451));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__48453 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__48453) : com.cognitect.transit.types.link.call(null,G__48453));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__48455 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__48455) : com.cognitect.transit.types.isLink.call(null,G__48455));
});
//# sourceMappingURL=transit.js.map