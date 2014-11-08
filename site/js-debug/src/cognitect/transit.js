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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__48465 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__48465) : com.cognitect.transit.eq.hashCode.call(null,G__48465));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__48466 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__48466) : com.cognitect.transit.eq.hashCode.call(null,G__48466));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__48467 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__48467) : com.cognitect.transit.eq.hashCode.call(null,G__48467));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__48472_48476 = cljs.core.seq(cljs.core.js_keys(b));var chunk__48473_48477 = null;var count__48474_48478 = (0);var i__48475_48479 = (0);while(true){
if((i__48475_48479 < count__48474_48478))
{var k_48480 = chunk__48473_48477.cljs$core$IIndexed$_nth$arity$2(null,i__48475_48479);var v_48481 = (b[k_48480]);(a[k_48480] = v_48481);
{
var G__48482 = seq__48472_48476;
var G__48483 = chunk__48473_48477;
var G__48484 = count__48474_48478;
var G__48485 = (i__48475_48479 + (1));
seq__48472_48476 = G__48482;
chunk__48473_48477 = G__48483;
count__48474_48478 = G__48484;
i__48475_48479 = G__48485;
continue;
}
} else
{var temp__4126__auto___48486 = cljs.core.seq(seq__48472_48476);if(temp__4126__auto___48486)
{var seq__48472_48487__$1 = temp__4126__auto___48486;if(cljs.core.chunked_seq_QMARK_(seq__48472_48487__$1))
{var c__21046__auto___48488 = cljs.core.chunk_first(seq__48472_48487__$1);{
var G__48489 = cljs.core.chunk_rest(seq__48472_48487__$1);
var G__48490 = c__21046__auto___48488;
var G__48491 = cljs.core.count(c__21046__auto___48488);
var G__48492 = (0);
seq__48472_48476 = G__48489;
chunk__48473_48477 = G__48490;
count__48474_48478 = G__48491;
i__48475_48479 = G__48492;
continue;
}
} else
{var k_48493 = cljs.core.first(seq__48472_48487__$1);var v_48494 = (b[k_48493]);(a[k_48493] = v_48494);
{
var G__48495 = cljs.core.next(seq__48472_48487__$1);
var G__48496 = null;
var G__48497 = (0);
var G__48498 = (0);
seq__48472_48476 = G__48495;
chunk__48473_48477 = G__48496;
count__48474_48478 = G__48497;
i__48475_48479 = G__48498;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/MapBuilder");
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
var _ = this;var G__48499 = arr;var G__48500 = true;var G__48501 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__48499,G__48500,G__48501) : cljs.core.PersistentArrayMap.fromArray.call(null,G__48499,G__48500,G__48501));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/VectorBuilder");
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
var _ = this;var G__48502 = arr;var G__48503 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__48502,G__48503) : cljs.core.PersistentVector.fromArray.call(null,G__48502,G__48503));
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
var reader__2 = (function (type,opts){var G__48508 = cljs.core.name(type);var G__48509 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__48508){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__48510 = (i + (2));
var G__48511 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__48510;
ret = G__48511;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__48508))
, "list": ((function (G__48508){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__48508))
, "set": ((function (G__48508){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__48508))
, ":": ((function (G__48508){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__48508))
, "$": ((function (G__48508){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__48508))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__48508,G__48509) : com.cognitect.transit.reader.call(null,G__48508,G__48509));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__48512_48518 = cljs.core.seq(v);var chunk__48513_48519 = null;var count__48514_48520 = (0);var i__48515_48521 = (0);while(true){
if((i__48515_48521 < count__48514_48520))
{var x_48522 = chunk__48513_48519.cljs$core$IIndexed$_nth$arity$2(null,i__48515_48521);ret.push(x_48522);
{
var G__48523 = seq__48512_48518;
var G__48524 = chunk__48513_48519;
var G__48525 = count__48514_48520;
var G__48526 = (i__48515_48521 + (1));
seq__48512_48518 = G__48523;
chunk__48513_48519 = G__48524;
count__48514_48520 = G__48525;
i__48515_48521 = G__48526;
continue;
}
} else
{var temp__4126__auto___48527 = cljs.core.seq(seq__48512_48518);if(temp__4126__auto___48527)
{var seq__48512_48528__$1 = temp__4126__auto___48527;if(cljs.core.chunked_seq_QMARK_(seq__48512_48528__$1))
{var c__21046__auto___48529 = cljs.core.chunk_first(seq__48512_48528__$1);{
var G__48530 = cljs.core.chunk_rest(seq__48512_48528__$1);
var G__48531 = c__21046__auto___48529;
var G__48532 = cljs.core.count(c__21046__auto___48529);
var G__48533 = (0);
seq__48512_48518 = G__48530;
chunk__48513_48519 = G__48531;
count__48514_48520 = G__48532;
i__48515_48521 = G__48533;
continue;
}
} else
{var x_48534 = cljs.core.first(seq__48512_48528__$1);ret.push(x_48534);
{
var G__48535 = cljs.core.next(seq__48512_48528__$1);
var G__48536 = null;
var G__48537 = (0);
var G__48538 = (0);
seq__48512_48518 = G__48535;
chunk__48513_48519 = G__48536;
count__48514_48520 = G__48537;
i__48515_48521 = G__48538;
continue;
}
}
} else
{}
}
break;
}
var G__48516 = "array";var G__48517 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__48516,G__48517) : com.cognitect.transit.tagged.call(null,G__48516,G__48517));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__48539_48545 = cljs.core.seq(v);var chunk__48540_48546 = null;var count__48541_48547 = (0);var i__48542_48548 = (0);while(true){
if((i__48542_48548 < count__48541_48547))
{var x_48549 = chunk__48540_48546.cljs$core$IIndexed$_nth$arity$2(null,i__48542_48548);ret.push(x_48549);
{
var G__48550 = seq__48539_48545;
var G__48551 = chunk__48540_48546;
var G__48552 = count__48541_48547;
var G__48553 = (i__48542_48548 + (1));
seq__48539_48545 = G__48550;
chunk__48540_48546 = G__48551;
count__48541_48547 = G__48552;
i__48542_48548 = G__48553;
continue;
}
} else
{var temp__4126__auto___48554 = cljs.core.seq(seq__48539_48545);if(temp__4126__auto___48554)
{var seq__48539_48555__$1 = temp__4126__auto___48554;if(cljs.core.chunked_seq_QMARK_(seq__48539_48555__$1))
{var c__21046__auto___48556 = cljs.core.chunk_first(seq__48539_48555__$1);{
var G__48557 = cljs.core.chunk_rest(seq__48539_48555__$1);
var G__48558 = c__21046__auto___48556;
var G__48559 = cljs.core.count(c__21046__auto___48556);
var G__48560 = (0);
seq__48539_48545 = G__48557;
chunk__48540_48546 = G__48558;
count__48541_48547 = G__48559;
i__48542_48548 = G__48560;
continue;
}
} else
{var x_48561 = cljs.core.first(seq__48539_48555__$1);ret.push(x_48561);
{
var G__48562 = cljs.core.next(seq__48539_48555__$1);
var G__48563 = null;
var G__48564 = (0);
var G__48565 = (0);
seq__48539_48545 = G__48562;
chunk__48540_48546 = G__48563;
count__48541_48547 = G__48564;
i__48542_48548 = G__48565;
continue;
}
}
} else
{}
}
break;
}
var G__48543 = "array";var G__48544 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__48543,G__48544) : com.cognitect.transit.tagged.call(null,G__48543,G__48544));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__48566_48570 = cljs.core.seq(v);var chunk__48567_48571 = null;var count__48568_48572 = (0);var i__48569_48573 = (0);while(true){
if((i__48569_48573 < count__48568_48572))
{var x_48574 = chunk__48567_48571.cljs$core$IIndexed$_nth$arity$2(null,i__48569_48573);ret.push(x_48574);
{
var G__48575 = seq__48566_48570;
var G__48576 = chunk__48567_48571;
var G__48577 = count__48568_48572;
var G__48578 = (i__48569_48573 + (1));
seq__48566_48570 = G__48575;
chunk__48567_48571 = G__48576;
count__48568_48572 = G__48577;
i__48569_48573 = G__48578;
continue;
}
} else
{var temp__4126__auto___48579 = cljs.core.seq(seq__48566_48570);if(temp__4126__auto___48579)
{var seq__48566_48580__$1 = temp__4126__auto___48579;if(cljs.core.chunked_seq_QMARK_(seq__48566_48580__$1))
{var c__21046__auto___48581 = cljs.core.chunk_first(seq__48566_48580__$1);{
var G__48582 = cljs.core.chunk_rest(seq__48566_48580__$1);
var G__48583 = c__21046__auto___48581;
var G__48584 = cljs.core.count(c__21046__auto___48581);
var G__48585 = (0);
seq__48566_48570 = G__48582;
chunk__48567_48571 = G__48583;
count__48568_48572 = G__48584;
i__48569_48573 = G__48585;
continue;
}
} else
{var x_48586 = cljs.core.first(seq__48566_48580__$1);ret.push(x_48586);
{
var G__48587 = cljs.core.next(seq__48566_48580__$1);
var G__48588 = null;
var G__48589 = (0);
var G__48590 = (0);
seq__48566_48570 = G__48587;
chunk__48567_48571 = G__48588;
count__48568_48572 = G__48589;
i__48569_48573 = G__48590;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__48609 = cljs.core.name(type);var G__48610 = cognitect.transit.opts_merge({"unpack": ((function (G__48609,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__48609,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x48614 = cljs.core.clone(handlers);x48614.forEach = ((function (x48614,G__48609,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__48615 = cljs.core.seq(coll);var chunk__48616 = null;var count__48617 = (0);var i__48618 = (0);while(true){
if((i__48618 < count__48617))
{var vec__48619 = chunk__48616.cljs$core$IIndexed$_nth$arity$2(null,i__48618);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48619,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48619,(1),null);var G__48620_48625 = v;var G__48621_48626 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48620_48625,G__48621_48626) : f.call(null,G__48620_48625,G__48621_48626));
{
var G__48627 = seq__48615;
var G__48628 = chunk__48616;
var G__48629 = count__48617;
var G__48630 = (i__48618 + (1));
seq__48615 = G__48627;
chunk__48616 = G__48628;
count__48617 = G__48629;
i__48618 = G__48630;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__48615);if(temp__4126__auto__)
{var seq__48615__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__48615__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__48615__$1);{
var G__48631 = cljs.core.chunk_rest(seq__48615__$1);
var G__48632 = c__21046__auto__;
var G__48633 = cljs.core.count(c__21046__auto__);
var G__48634 = (0);
seq__48615 = G__48631;
chunk__48616 = G__48632;
count__48617 = G__48633;
i__48618 = G__48634;
continue;
}
} else
{var vec__48622 = cljs.core.first(seq__48615__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48622,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48622,(1),null);var G__48623_48635 = v;var G__48624_48636 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48623_48635,G__48624_48636) : f.call(null,G__48623_48635,G__48624_48636));
{
var G__48637 = cljs.core.next(seq__48615__$1);
var G__48638 = null;
var G__48639 = (0);
var G__48640 = (0);
seq__48615 = G__48637;
chunk__48616 = G__48638;
count__48617 = G__48639;
i__48618 = G__48640;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x48614,G__48609,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x48614;
})(), "objectBuilder": ((function (G__48609,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__48609,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__48611 = obj;G__48611.push((function (){var G__48612 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__48612) : kfn.call(null,G__48612));
})(),(function (){var G__48613 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__48613) : vfn.call(null,G__48613));
})());
return G__48611;
});})(G__48609,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__48609,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__48609,G__48610) : com.cognitect.transit.writer.call(null,G__48609,G__48610));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t48655 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t48655 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta48656){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta48656 = meta48656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t48655.cljs$lang$type = true;
cognitect.transit.t48655.cljs$lang$ctorStr = "cognitect.transit/t48655";
cognitect.transit.t48655.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cognitect.transit/t48655");
});
cognitect.transit.t48655.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__48658 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__48658) : self__.tag_fn.call(null,G__48658));
});
cognitect.transit.t48655.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__48659 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__48659) : self__.rep_fn.call(null,G__48659));
});
cognitect.transit.t48655.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__48660 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__48660) : self__.str_rep_fn.call(null,G__48660));
} else
{return null;
}
});
cognitect.transit.t48655.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t48655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48657){var self__ = this;
var _48657__$1 = this;return self__.meta48656;
});
cognitect.transit.t48655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48657,meta48656__$1){var self__ = this;
var _48657__$1 = this;return (new cognitect.transit.t48655(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta48656__$1));
});
cognitect.transit.__GT_t48655 = (function __GT_t48655(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta48656){return (new cognitect.transit.t48655(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta48656));
});
}
return (new cognitect.transit.t48655(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__48663 = tag;var G__48664 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__48663,G__48664) : com.cognitect.transit.types.taggedValue.call(null,G__48663,G__48664));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__48666 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__48666) : com.cognitect.transit.types.isTaggedValue.call(null,G__48666));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__48668 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__48668) : com.cognitect.transit.types.integer.call(null,G__48668));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__48670 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__48670) : com.cognitect.transit.types.isInteger.call(null,G__48670));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__48672 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__48672) : com.cognitect.transit.types.bigInteger.call(null,G__48672));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__48674 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__48674) : com.cognitect.transit.types.isBigInteger.call(null,G__48674));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__48676 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__48676) : com.cognitect.transit.types.bigDecimalValue.call(null,G__48676));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__48678 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__48678) : com.cognitect.transit.types.isBigDecimal.call(null,G__48678));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__48680 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__48680) : com.cognitect.transit.types.uri.call(null,G__48680));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__48682 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__48682) : com.cognitect.transit.types.isURI.call(null,G__48682));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__48684 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__48684) : com.cognitect.transit.types.uuid.call(null,G__48684));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__48686 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__48686) : com.cognitect.transit.types.isUUID.call(null,G__48686));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__48688 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__48688) : com.cognitect.transit.types.binary.call(null,G__48688));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__48690 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__48690) : com.cognitect.transit.types.isBinary.call(null,G__48690));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__48692 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__48692) : com.cognitect.transit.types.quoted.call(null,G__48692));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__48694 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__48694) : com.cognitect.transit.types.isQuoted.call(null,G__48694));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__48696 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__48696) : com.cognitect.transit.types.link.call(null,G__48696));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__48698 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__48698) : com.cognitect.transit.types.isLink.call(null,G__48698));
});
//# sourceMappingURL=transit.js.map