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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__67437 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__67437) : com.cognitect.transit.eq.hashCode.call(null,G__67437));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__67438 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__67438) : com.cognitect.transit.eq.hashCode.call(null,G__67438));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__67439 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__67439) : com.cognitect.transit.eq.hashCode.call(null,G__67439));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__67444_67448 = cljs.core.seq(cljs.core.js_keys(b));var chunk__67445_67449 = null;var count__67446_67450 = (0);var i__67447_67451 = (0);while(true){
if((i__67447_67451 < count__67446_67450))
{var k_67452 = chunk__67445_67449.cljs$core$IIndexed$_nth$arity$2(null,i__67447_67451);var v_67453 = (b[k_67452]);(a[k_67452] = v_67453);
{
var G__67454 = seq__67444_67448;
var G__67455 = chunk__67445_67449;
var G__67456 = count__67446_67450;
var G__67457 = (i__67447_67451 + (1));
seq__67444_67448 = G__67454;
chunk__67445_67449 = G__67455;
count__67446_67450 = G__67456;
i__67447_67451 = G__67457;
continue;
}
} else
{var temp__4126__auto___67458 = cljs.core.seq(seq__67444_67448);if(temp__4126__auto___67458)
{var seq__67444_67459__$1 = temp__4126__auto___67458;if(cljs.core.chunked_seq_QMARK_(seq__67444_67459__$1))
{var c__21100__auto___67460 = cljs.core.chunk_first(seq__67444_67459__$1);{
var G__67461 = cljs.core.chunk_rest(seq__67444_67459__$1);
var G__67462 = c__21100__auto___67460;
var G__67463 = cljs.core.count(c__21100__auto___67460);
var G__67464 = (0);
seq__67444_67448 = G__67461;
chunk__67445_67449 = G__67462;
count__67446_67450 = G__67463;
i__67447_67451 = G__67464;
continue;
}
} else
{var k_67465 = cljs.core.first(seq__67444_67459__$1);var v_67466 = (b[k_67465]);(a[k_67465] = v_67466);
{
var G__67467 = cljs.core.next(seq__67444_67459__$1);
var G__67468 = null;
var G__67469 = (0);
var G__67470 = (0);
seq__67444_67448 = G__67467;
chunk__67445_67449 = G__67468;
count__67446_67450 = G__67469;
i__67447_67451 = G__67470;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/MapBuilder");
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
var _ = this;var G__67471 = arr;var G__67472 = true;var G__67473 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__67471,G__67472,G__67473) : cljs.core.PersistentArrayMap.fromArray.call(null,G__67471,G__67472,G__67473));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/VectorBuilder");
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
var _ = this;var G__67474 = arr;var G__67475 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__67474,G__67475) : cljs.core.PersistentVector.fromArray.call(null,G__67474,G__67475));
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
var reader__2 = (function (type,opts){var G__67480 = cljs.core.name(type);var G__67481 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__67480){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__67482 = (i + (2));
var G__67483 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__67482;
ret = G__67483;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__67480))
, "list": ((function (G__67480){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__67480))
, "set": ((function (G__67480){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__67480))
, ":": ((function (G__67480){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__67480))
, "$": ((function (G__67480){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__67480))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__67480,G__67481) : com.cognitect.transit.reader.call(null,G__67480,G__67481));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__67484_67490 = cljs.core.seq(v);var chunk__67485_67491 = null;var count__67486_67492 = (0);var i__67487_67493 = (0);while(true){
if((i__67487_67493 < count__67486_67492))
{var x_67494 = chunk__67485_67491.cljs$core$IIndexed$_nth$arity$2(null,i__67487_67493);ret.push(x_67494);
{
var G__67495 = seq__67484_67490;
var G__67496 = chunk__67485_67491;
var G__67497 = count__67486_67492;
var G__67498 = (i__67487_67493 + (1));
seq__67484_67490 = G__67495;
chunk__67485_67491 = G__67496;
count__67486_67492 = G__67497;
i__67487_67493 = G__67498;
continue;
}
} else
{var temp__4126__auto___67499 = cljs.core.seq(seq__67484_67490);if(temp__4126__auto___67499)
{var seq__67484_67500__$1 = temp__4126__auto___67499;if(cljs.core.chunked_seq_QMARK_(seq__67484_67500__$1))
{var c__21100__auto___67501 = cljs.core.chunk_first(seq__67484_67500__$1);{
var G__67502 = cljs.core.chunk_rest(seq__67484_67500__$1);
var G__67503 = c__21100__auto___67501;
var G__67504 = cljs.core.count(c__21100__auto___67501);
var G__67505 = (0);
seq__67484_67490 = G__67502;
chunk__67485_67491 = G__67503;
count__67486_67492 = G__67504;
i__67487_67493 = G__67505;
continue;
}
} else
{var x_67506 = cljs.core.first(seq__67484_67500__$1);ret.push(x_67506);
{
var G__67507 = cljs.core.next(seq__67484_67500__$1);
var G__67508 = null;
var G__67509 = (0);
var G__67510 = (0);
seq__67484_67490 = G__67507;
chunk__67485_67491 = G__67508;
count__67486_67492 = G__67509;
i__67487_67493 = G__67510;
continue;
}
}
} else
{}
}
break;
}
var G__67488 = "array";var G__67489 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__67488,G__67489) : com.cognitect.transit.tagged.call(null,G__67488,G__67489));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__67511_67517 = cljs.core.seq(v);var chunk__67512_67518 = null;var count__67513_67519 = (0);var i__67514_67520 = (0);while(true){
if((i__67514_67520 < count__67513_67519))
{var x_67521 = chunk__67512_67518.cljs$core$IIndexed$_nth$arity$2(null,i__67514_67520);ret.push(x_67521);
{
var G__67522 = seq__67511_67517;
var G__67523 = chunk__67512_67518;
var G__67524 = count__67513_67519;
var G__67525 = (i__67514_67520 + (1));
seq__67511_67517 = G__67522;
chunk__67512_67518 = G__67523;
count__67513_67519 = G__67524;
i__67514_67520 = G__67525;
continue;
}
} else
{var temp__4126__auto___67526 = cljs.core.seq(seq__67511_67517);if(temp__4126__auto___67526)
{var seq__67511_67527__$1 = temp__4126__auto___67526;if(cljs.core.chunked_seq_QMARK_(seq__67511_67527__$1))
{var c__21100__auto___67528 = cljs.core.chunk_first(seq__67511_67527__$1);{
var G__67529 = cljs.core.chunk_rest(seq__67511_67527__$1);
var G__67530 = c__21100__auto___67528;
var G__67531 = cljs.core.count(c__21100__auto___67528);
var G__67532 = (0);
seq__67511_67517 = G__67529;
chunk__67512_67518 = G__67530;
count__67513_67519 = G__67531;
i__67514_67520 = G__67532;
continue;
}
} else
{var x_67533 = cljs.core.first(seq__67511_67527__$1);ret.push(x_67533);
{
var G__67534 = cljs.core.next(seq__67511_67527__$1);
var G__67535 = null;
var G__67536 = (0);
var G__67537 = (0);
seq__67511_67517 = G__67534;
chunk__67512_67518 = G__67535;
count__67513_67519 = G__67536;
i__67514_67520 = G__67537;
continue;
}
}
} else
{}
}
break;
}
var G__67515 = "array";var G__67516 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__67515,G__67516) : com.cognitect.transit.tagged.call(null,G__67515,G__67516));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__67538_67542 = cljs.core.seq(v);var chunk__67539_67543 = null;var count__67540_67544 = (0);var i__67541_67545 = (0);while(true){
if((i__67541_67545 < count__67540_67544))
{var x_67546 = chunk__67539_67543.cljs$core$IIndexed$_nth$arity$2(null,i__67541_67545);ret.push(x_67546);
{
var G__67547 = seq__67538_67542;
var G__67548 = chunk__67539_67543;
var G__67549 = count__67540_67544;
var G__67550 = (i__67541_67545 + (1));
seq__67538_67542 = G__67547;
chunk__67539_67543 = G__67548;
count__67540_67544 = G__67549;
i__67541_67545 = G__67550;
continue;
}
} else
{var temp__4126__auto___67551 = cljs.core.seq(seq__67538_67542);if(temp__4126__auto___67551)
{var seq__67538_67552__$1 = temp__4126__auto___67551;if(cljs.core.chunked_seq_QMARK_(seq__67538_67552__$1))
{var c__21100__auto___67553 = cljs.core.chunk_first(seq__67538_67552__$1);{
var G__67554 = cljs.core.chunk_rest(seq__67538_67552__$1);
var G__67555 = c__21100__auto___67553;
var G__67556 = cljs.core.count(c__21100__auto___67553);
var G__67557 = (0);
seq__67538_67542 = G__67554;
chunk__67539_67543 = G__67555;
count__67540_67544 = G__67556;
i__67541_67545 = G__67557;
continue;
}
} else
{var x_67558 = cljs.core.first(seq__67538_67552__$1);ret.push(x_67558);
{
var G__67559 = cljs.core.next(seq__67538_67552__$1);
var G__67560 = null;
var G__67561 = (0);
var G__67562 = (0);
seq__67538_67542 = G__67559;
chunk__67539_67543 = G__67560;
count__67540_67544 = G__67561;
i__67541_67545 = G__67562;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__67581 = cljs.core.name(type);var G__67582 = cognitect.transit.opts_merge({"unpack": ((function (G__67581,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__67581,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x67586 = cljs.core.clone(handlers);x67586.forEach = ((function (x67586,G__67581,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__67587 = cljs.core.seq(coll);var chunk__67588 = null;var count__67589 = (0);var i__67590 = (0);while(true){
if((i__67590 < count__67589))
{var vec__67591 = chunk__67588.cljs$core$IIndexed$_nth$arity$2(null,i__67590);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67591,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67591,(1),null);var G__67592_67597 = v;var G__67593_67598 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67592_67597,G__67593_67598) : f.call(null,G__67592_67597,G__67593_67598));
{
var G__67599 = seq__67587;
var G__67600 = chunk__67588;
var G__67601 = count__67589;
var G__67602 = (i__67590 + (1));
seq__67587 = G__67599;
chunk__67588 = G__67600;
count__67589 = G__67601;
i__67590 = G__67602;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__67587);if(temp__4126__auto__)
{var seq__67587__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__67587__$1))
{var c__21100__auto__ = cljs.core.chunk_first(seq__67587__$1);{
var G__67603 = cljs.core.chunk_rest(seq__67587__$1);
var G__67604 = c__21100__auto__;
var G__67605 = cljs.core.count(c__21100__auto__);
var G__67606 = (0);
seq__67587 = G__67603;
chunk__67588 = G__67604;
count__67589 = G__67605;
i__67590 = G__67606;
continue;
}
} else
{var vec__67594 = cljs.core.first(seq__67587__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67594,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67594,(1),null);var G__67595_67607 = v;var G__67596_67608 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67595_67607,G__67596_67608) : f.call(null,G__67595_67607,G__67596_67608));
{
var G__67609 = cljs.core.next(seq__67587__$1);
var G__67610 = null;
var G__67611 = (0);
var G__67612 = (0);
seq__67587 = G__67609;
chunk__67588 = G__67610;
count__67589 = G__67611;
i__67590 = G__67612;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x67586,G__67581,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x67586;
})(), "objectBuilder": ((function (G__67581,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__67581,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__67583 = obj;G__67583.push((function (){var G__67584 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__67584) : kfn.call(null,G__67584));
})(),(function (){var G__67585 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__67585) : vfn.call(null,G__67585));
})());
return G__67583;
});})(G__67581,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__67581,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__67581,G__67582) : com.cognitect.transit.writer.call(null,G__67581,G__67582));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t67627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t67627 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta67628){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta67628 = meta67628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t67627.cljs$lang$type = true;
cognitect.transit.t67627.cljs$lang$ctorStr = "cognitect.transit/t67627";
cognitect.transit.t67627.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cognitect.transit/t67627");
});
cognitect.transit.t67627.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__67630 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__67630) : self__.tag_fn.call(null,G__67630));
});
cognitect.transit.t67627.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__67631 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__67631) : self__.rep_fn.call(null,G__67631));
});
cognitect.transit.t67627.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__67632 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__67632) : self__.str_rep_fn.call(null,G__67632));
} else
{return null;
}
});
cognitect.transit.t67627.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t67627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67629){var self__ = this;
var _67629__$1 = this;return self__.meta67628;
});
cognitect.transit.t67627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67629,meta67628__$1){var self__ = this;
var _67629__$1 = this;return (new cognitect.transit.t67627(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta67628__$1));
});
cognitect.transit.__GT_t67627 = (function __GT_t67627(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta67628){return (new cognitect.transit.t67627(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta67628));
});
}
return (new cognitect.transit.t67627(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__67635 = tag;var G__67636 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__67635,G__67636) : com.cognitect.transit.types.taggedValue.call(null,G__67635,G__67636));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__67638 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__67638) : com.cognitect.transit.types.isTaggedValue.call(null,G__67638));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__67640 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__67640) : com.cognitect.transit.types.integer.call(null,G__67640));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__67642 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__67642) : com.cognitect.transit.types.isInteger.call(null,G__67642));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__67644 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__67644) : com.cognitect.transit.types.bigInteger.call(null,G__67644));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__67646 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__67646) : com.cognitect.transit.types.isBigInteger.call(null,G__67646));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__67648 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__67648) : com.cognitect.transit.types.bigDecimalValue.call(null,G__67648));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__67650 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__67650) : com.cognitect.transit.types.isBigDecimal.call(null,G__67650));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__67652 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__67652) : com.cognitect.transit.types.uri.call(null,G__67652));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__67654 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__67654) : com.cognitect.transit.types.isURI.call(null,G__67654));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__67656 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__67656) : com.cognitect.transit.types.uuid.call(null,G__67656));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__67658 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__67658) : com.cognitect.transit.types.isUUID.call(null,G__67658));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__67660 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__67660) : com.cognitect.transit.types.binary.call(null,G__67660));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__67662 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__67662) : com.cognitect.transit.types.isBinary.call(null,G__67662));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__67664 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__67664) : com.cognitect.transit.types.quoted.call(null,G__67664));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__67666 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__67666) : com.cognitect.transit.types.isQuoted.call(null,G__67666));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__67668 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__67668) : com.cognitect.transit.types.link.call(null,G__67668));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__67670 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__67670) : com.cognitect.transit.types.isLink.call(null,G__67670));
});
//# sourceMappingURL=transit.js.map