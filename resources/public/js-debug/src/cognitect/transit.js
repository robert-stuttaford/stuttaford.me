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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__41650 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__41650) : com.cognitect.transit.eq.hashCode.call(null,G__41650));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__41651 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__41651) : com.cognitect.transit.eq.hashCode.call(null,G__41651));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__41652 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__41652) : com.cognitect.transit.eq.hashCode.call(null,G__41652));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__41657_41661 = cljs.core.seq(cljs.core.js_keys(b));var chunk__41658_41662 = null;var count__41659_41663 = (0);var i__41660_41664 = (0);while(true){
if((i__41660_41664 < count__41659_41663))
{var k_41665 = chunk__41658_41662.cljs$core$IIndexed$_nth$arity$2(null,i__41660_41664);var v_41666 = (b[k_41665]);(a[k_41665] = v_41666);
{
var G__41667 = seq__41657_41661;
var G__41668 = chunk__41658_41662;
var G__41669 = count__41659_41663;
var G__41670 = (i__41660_41664 + (1));
seq__41657_41661 = G__41667;
chunk__41658_41662 = G__41668;
count__41659_41663 = G__41669;
i__41660_41664 = G__41670;
continue;
}
} else
{var temp__4126__auto___41671 = cljs.core.seq(seq__41657_41661);if(temp__4126__auto___41671)
{var seq__41657_41672__$1 = temp__4126__auto___41671;if(cljs.core.chunked_seq_QMARK_(seq__41657_41672__$1))
{var c__20721__auto___41673 = cljs.core.chunk_first(seq__41657_41672__$1);{
var G__41674 = cljs.core.chunk_rest(seq__41657_41672__$1);
var G__41675 = c__20721__auto___41673;
var G__41676 = cljs.core.count(c__20721__auto___41673);
var G__41677 = (0);
seq__41657_41661 = G__41674;
chunk__41658_41662 = G__41675;
count__41659_41663 = G__41676;
i__41660_41664 = G__41677;
continue;
}
} else
{var k_41678 = cljs.core.first(seq__41657_41672__$1);var v_41679 = (b[k_41678]);(a[k_41678] = v_41679);
{
var G__41680 = cljs.core.next(seq__41657_41672__$1);
var G__41681 = null;
var G__41682 = (0);
var G__41683 = (0);
seq__41657_41661 = G__41680;
chunk__41658_41662 = G__41681;
count__41659_41663 = G__41682;
i__41660_41664 = G__41683;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/MapBuilder");
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
var _ = this;var G__41684 = arr;var G__41685 = true;var G__41686 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__41684,G__41685,G__41686) : cljs.core.PersistentArrayMap.fromArray.call(null,G__41684,G__41685,G__41686));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/VectorBuilder");
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
var _ = this;var G__41687 = arr;var G__41688 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__41687,G__41688) : cljs.core.PersistentVector.fromArray.call(null,G__41687,G__41688));
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
var reader__2 = (function (type,opts){var G__41693 = cljs.core.name(type);var G__41694 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__41693){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__41695 = (i + (2));
var G__41696 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__41695;
ret = G__41696;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__41693))
, "list": ((function (G__41693){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__41693))
, "set": ((function (G__41693){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__41693))
, ":": ((function (G__41693){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__41693))
, "$": ((function (G__41693){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__41693))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__41693,G__41694) : com.cognitect.transit.reader.call(null,G__41693,G__41694));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__41697_41703 = cljs.core.seq(v);var chunk__41698_41704 = null;var count__41699_41705 = (0);var i__41700_41706 = (0);while(true){
if((i__41700_41706 < count__41699_41705))
{var x_41707 = chunk__41698_41704.cljs$core$IIndexed$_nth$arity$2(null,i__41700_41706);ret.push(x_41707);
{
var G__41708 = seq__41697_41703;
var G__41709 = chunk__41698_41704;
var G__41710 = count__41699_41705;
var G__41711 = (i__41700_41706 + (1));
seq__41697_41703 = G__41708;
chunk__41698_41704 = G__41709;
count__41699_41705 = G__41710;
i__41700_41706 = G__41711;
continue;
}
} else
{var temp__4126__auto___41712 = cljs.core.seq(seq__41697_41703);if(temp__4126__auto___41712)
{var seq__41697_41713__$1 = temp__4126__auto___41712;if(cljs.core.chunked_seq_QMARK_(seq__41697_41713__$1))
{var c__20721__auto___41714 = cljs.core.chunk_first(seq__41697_41713__$1);{
var G__41715 = cljs.core.chunk_rest(seq__41697_41713__$1);
var G__41716 = c__20721__auto___41714;
var G__41717 = cljs.core.count(c__20721__auto___41714);
var G__41718 = (0);
seq__41697_41703 = G__41715;
chunk__41698_41704 = G__41716;
count__41699_41705 = G__41717;
i__41700_41706 = G__41718;
continue;
}
} else
{var x_41719 = cljs.core.first(seq__41697_41713__$1);ret.push(x_41719);
{
var G__41720 = cljs.core.next(seq__41697_41713__$1);
var G__41721 = null;
var G__41722 = (0);
var G__41723 = (0);
seq__41697_41703 = G__41720;
chunk__41698_41704 = G__41721;
count__41699_41705 = G__41722;
i__41700_41706 = G__41723;
continue;
}
}
} else
{}
}
break;
}
var G__41701 = "array";var G__41702 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__41701,G__41702) : com.cognitect.transit.tagged.call(null,G__41701,G__41702));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__41724_41730 = cljs.core.seq(v);var chunk__41725_41731 = null;var count__41726_41732 = (0);var i__41727_41733 = (0);while(true){
if((i__41727_41733 < count__41726_41732))
{var x_41734 = chunk__41725_41731.cljs$core$IIndexed$_nth$arity$2(null,i__41727_41733);ret.push(x_41734);
{
var G__41735 = seq__41724_41730;
var G__41736 = chunk__41725_41731;
var G__41737 = count__41726_41732;
var G__41738 = (i__41727_41733 + (1));
seq__41724_41730 = G__41735;
chunk__41725_41731 = G__41736;
count__41726_41732 = G__41737;
i__41727_41733 = G__41738;
continue;
}
} else
{var temp__4126__auto___41739 = cljs.core.seq(seq__41724_41730);if(temp__4126__auto___41739)
{var seq__41724_41740__$1 = temp__4126__auto___41739;if(cljs.core.chunked_seq_QMARK_(seq__41724_41740__$1))
{var c__20721__auto___41741 = cljs.core.chunk_first(seq__41724_41740__$1);{
var G__41742 = cljs.core.chunk_rest(seq__41724_41740__$1);
var G__41743 = c__20721__auto___41741;
var G__41744 = cljs.core.count(c__20721__auto___41741);
var G__41745 = (0);
seq__41724_41730 = G__41742;
chunk__41725_41731 = G__41743;
count__41726_41732 = G__41744;
i__41727_41733 = G__41745;
continue;
}
} else
{var x_41746 = cljs.core.first(seq__41724_41740__$1);ret.push(x_41746);
{
var G__41747 = cljs.core.next(seq__41724_41740__$1);
var G__41748 = null;
var G__41749 = (0);
var G__41750 = (0);
seq__41724_41730 = G__41747;
chunk__41725_41731 = G__41748;
count__41726_41732 = G__41749;
i__41727_41733 = G__41750;
continue;
}
}
} else
{}
}
break;
}
var G__41728 = "array";var G__41729 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__41728,G__41729) : com.cognitect.transit.tagged.call(null,G__41728,G__41729));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__41751_41755 = cljs.core.seq(v);var chunk__41752_41756 = null;var count__41753_41757 = (0);var i__41754_41758 = (0);while(true){
if((i__41754_41758 < count__41753_41757))
{var x_41759 = chunk__41752_41756.cljs$core$IIndexed$_nth$arity$2(null,i__41754_41758);ret.push(x_41759);
{
var G__41760 = seq__41751_41755;
var G__41761 = chunk__41752_41756;
var G__41762 = count__41753_41757;
var G__41763 = (i__41754_41758 + (1));
seq__41751_41755 = G__41760;
chunk__41752_41756 = G__41761;
count__41753_41757 = G__41762;
i__41754_41758 = G__41763;
continue;
}
} else
{var temp__4126__auto___41764 = cljs.core.seq(seq__41751_41755);if(temp__4126__auto___41764)
{var seq__41751_41765__$1 = temp__4126__auto___41764;if(cljs.core.chunked_seq_QMARK_(seq__41751_41765__$1))
{var c__20721__auto___41766 = cljs.core.chunk_first(seq__41751_41765__$1);{
var G__41767 = cljs.core.chunk_rest(seq__41751_41765__$1);
var G__41768 = c__20721__auto___41766;
var G__41769 = cljs.core.count(c__20721__auto___41766);
var G__41770 = (0);
seq__41751_41755 = G__41767;
chunk__41752_41756 = G__41768;
count__41753_41757 = G__41769;
i__41754_41758 = G__41770;
continue;
}
} else
{var x_41771 = cljs.core.first(seq__41751_41765__$1);ret.push(x_41771);
{
var G__41772 = cljs.core.next(seq__41751_41765__$1);
var G__41773 = null;
var G__41774 = (0);
var G__41775 = (0);
seq__41751_41755 = G__41772;
chunk__41752_41756 = G__41773;
count__41753_41757 = G__41774;
i__41754_41758 = G__41775;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__41794 = cljs.core.name(type);var G__41795 = cognitect.transit.opts_merge({"unpack": ((function (G__41794,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__41794,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x41799 = cljs.core.clone(handlers);x41799.forEach = ((function (x41799,G__41794,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__41800 = cljs.core.seq(coll);var chunk__41801 = null;var count__41802 = (0);var i__41803 = (0);while(true){
if((i__41803 < count__41802))
{var vec__41804 = chunk__41801.cljs$core$IIndexed$_nth$arity$2(null,i__41803);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41804,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41804,(1),null);var G__41805_41810 = v;var G__41806_41811 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41805_41810,G__41806_41811) : f.call(null,G__41805_41810,G__41806_41811));
{
var G__41812 = seq__41800;
var G__41813 = chunk__41801;
var G__41814 = count__41802;
var G__41815 = (i__41803 + (1));
seq__41800 = G__41812;
chunk__41801 = G__41813;
count__41802 = G__41814;
i__41803 = G__41815;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__41800);if(temp__4126__auto__)
{var seq__41800__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__41800__$1))
{var c__20721__auto__ = cljs.core.chunk_first(seq__41800__$1);{
var G__41816 = cljs.core.chunk_rest(seq__41800__$1);
var G__41817 = c__20721__auto__;
var G__41818 = cljs.core.count(c__20721__auto__);
var G__41819 = (0);
seq__41800 = G__41816;
chunk__41801 = G__41817;
count__41802 = G__41818;
i__41803 = G__41819;
continue;
}
} else
{var vec__41807 = cljs.core.first(seq__41800__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41807,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41807,(1),null);var G__41808_41820 = v;var G__41809_41821 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41808_41820,G__41809_41821) : f.call(null,G__41808_41820,G__41809_41821));
{
var G__41822 = cljs.core.next(seq__41800__$1);
var G__41823 = null;
var G__41824 = (0);
var G__41825 = (0);
seq__41800 = G__41822;
chunk__41801 = G__41823;
count__41802 = G__41824;
i__41803 = G__41825;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x41799,G__41794,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x41799;
})(), "objectBuilder": ((function (G__41794,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__41794,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__41796 = obj;G__41796.push((function (){var G__41797 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__41797) : kfn.call(null,G__41797));
})(),(function (){var G__41798 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__41798) : vfn.call(null,G__41798));
})());
return G__41796;
});})(G__41794,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__41794,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__41794,G__41795) : com.cognitect.transit.writer.call(null,G__41794,G__41795));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t41840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t41840 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta41841){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta41841 = meta41841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t41840.cljs$lang$type = true;
cognitect.transit.t41840.cljs$lang$ctorStr = "cognitect.transit/t41840";
cognitect.transit.t41840.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cognitect.transit/t41840");
});
cognitect.transit.t41840.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__41843 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__41843) : self__.tag_fn.call(null,G__41843));
});
cognitect.transit.t41840.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__41844 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__41844) : self__.rep_fn.call(null,G__41844));
});
cognitect.transit.t41840.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__41845 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__41845) : self__.str_rep_fn.call(null,G__41845));
} else
{return null;
}
});
cognitect.transit.t41840.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t41840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41842){var self__ = this;
var _41842__$1 = this;return self__.meta41841;
});
cognitect.transit.t41840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41842,meta41841__$1){var self__ = this;
var _41842__$1 = this;return (new cognitect.transit.t41840(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta41841__$1));
});
cognitect.transit.__GT_t41840 = (function __GT_t41840(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta41841){return (new cognitect.transit.t41840(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta41841));
});
}
return (new cognitect.transit.t41840(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__41848 = tag;var G__41849 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__41848,G__41849) : com.cognitect.transit.types.taggedValue.call(null,G__41848,G__41849));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__41851 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__41851) : com.cognitect.transit.types.isTaggedValue.call(null,G__41851));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__41853 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__41853) : com.cognitect.transit.types.integer.call(null,G__41853));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__41855 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__41855) : com.cognitect.transit.types.isInteger.call(null,G__41855));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__41857 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__41857) : com.cognitect.transit.types.bigInteger.call(null,G__41857));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__41859 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__41859) : com.cognitect.transit.types.isBigInteger.call(null,G__41859));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__41861 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__41861) : com.cognitect.transit.types.bigDecimalValue.call(null,G__41861));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__41863 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__41863) : com.cognitect.transit.types.isBigDecimal.call(null,G__41863));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__41865 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__41865) : com.cognitect.transit.types.uri.call(null,G__41865));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__41867 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__41867) : com.cognitect.transit.types.isURI.call(null,G__41867));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__41869 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__41869) : com.cognitect.transit.types.uuid.call(null,G__41869));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__41871 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__41871) : com.cognitect.transit.types.isUUID.call(null,G__41871));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__41873 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__41873) : com.cognitect.transit.types.binary.call(null,G__41873));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__41875 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__41875) : com.cognitect.transit.types.isBinary.call(null,G__41875));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__41877 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__41877) : com.cognitect.transit.types.quoted.call(null,G__41877));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__41879 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__41879) : com.cognitect.transit.types.isQuoted.call(null,G__41879));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__41881 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__41881) : com.cognitect.transit.types.link.call(null,G__41881));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__41883 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__41883) : com.cognitect.transit.types.isLink.call(null,G__41883));
});
//# sourceMappingURL=transit.js.map