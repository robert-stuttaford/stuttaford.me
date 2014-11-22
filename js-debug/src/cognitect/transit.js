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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__39787 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__39787) : com.cognitect.transit.eq.hashCode.call(null,G__39787));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__39788 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__39788) : com.cognitect.transit.eq.hashCode.call(null,G__39788));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__39789 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__39789) : com.cognitect.transit.eq.hashCode.call(null,G__39789));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__39794_39798 = cljs.core.seq(cljs.core.js_keys(b));var chunk__39795_39799 = null;var count__39796_39800 = (0);var i__39797_39801 = (0);while(true){
if((i__39797_39801 < count__39796_39800))
{var k_39802 = chunk__39795_39799.cljs$core$IIndexed$_nth$arity$2(null,i__39797_39801);var v_39803 = (b[k_39802]);(a[k_39802] = v_39803);
{
var G__39804 = seq__39794_39798;
var G__39805 = chunk__39795_39799;
var G__39806 = count__39796_39800;
var G__39807 = (i__39797_39801 + (1));
seq__39794_39798 = G__39804;
chunk__39795_39799 = G__39805;
count__39796_39800 = G__39806;
i__39797_39801 = G__39807;
continue;
}
} else
{var temp__4126__auto___39808 = cljs.core.seq(seq__39794_39798);if(temp__4126__auto___39808)
{var seq__39794_39809__$1 = temp__4126__auto___39808;if(cljs.core.chunked_seq_QMARK_(seq__39794_39809__$1))
{var c__20965__auto___39810 = cljs.core.chunk_first(seq__39794_39809__$1);{
var G__39811 = cljs.core.chunk_rest(seq__39794_39809__$1);
var G__39812 = c__20965__auto___39810;
var G__39813 = cljs.core.count(c__20965__auto___39810);
var G__39814 = (0);
seq__39794_39798 = G__39811;
chunk__39795_39799 = G__39812;
count__39796_39800 = G__39813;
i__39797_39801 = G__39814;
continue;
}
} else
{var k_39815 = cljs.core.first(seq__39794_39809__$1);var v_39816 = (b[k_39815]);(a[k_39815] = v_39816);
{
var G__39817 = cljs.core.next(seq__39794_39809__$1);
var G__39818 = null;
var G__39819 = (0);
var G__39820 = (0);
seq__39794_39798 = G__39817;
chunk__39795_39799 = G__39818;
count__39796_39800 = G__39819;
i__39797_39801 = G__39820;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/MapBuilder");
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
var _ = this;var G__39821 = arr;var G__39822 = true;var G__39823 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__39821,G__39822,G__39823) : cljs.core.PersistentArrayMap.fromArray.call(null,G__39821,G__39822,G__39823));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/VectorBuilder");
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
var _ = this;var G__39824 = arr;var G__39825 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__39824,G__39825) : cljs.core.PersistentVector.fromArray.call(null,G__39824,G__39825));
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
var reader__2 = (function (type,opts){var G__39830 = cljs.core.name(type);var G__39831 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__39830){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__39832 = (i + (2));
var G__39833 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__39832;
ret = G__39833;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__39830))
, "list": ((function (G__39830){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__39830))
, "set": ((function (G__39830){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__39830))
, ":": ((function (G__39830){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__39830))
, "$": ((function (G__39830){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__39830))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__39830,G__39831) : com.cognitect.transit.reader.call(null,G__39830,G__39831));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__39834_39840 = cljs.core.seq(v);var chunk__39835_39841 = null;var count__39836_39842 = (0);var i__39837_39843 = (0);while(true){
if((i__39837_39843 < count__39836_39842))
{var x_39844 = chunk__39835_39841.cljs$core$IIndexed$_nth$arity$2(null,i__39837_39843);ret.push(x_39844);
{
var G__39845 = seq__39834_39840;
var G__39846 = chunk__39835_39841;
var G__39847 = count__39836_39842;
var G__39848 = (i__39837_39843 + (1));
seq__39834_39840 = G__39845;
chunk__39835_39841 = G__39846;
count__39836_39842 = G__39847;
i__39837_39843 = G__39848;
continue;
}
} else
{var temp__4126__auto___39849 = cljs.core.seq(seq__39834_39840);if(temp__4126__auto___39849)
{var seq__39834_39850__$1 = temp__4126__auto___39849;if(cljs.core.chunked_seq_QMARK_(seq__39834_39850__$1))
{var c__20965__auto___39851 = cljs.core.chunk_first(seq__39834_39850__$1);{
var G__39852 = cljs.core.chunk_rest(seq__39834_39850__$1);
var G__39853 = c__20965__auto___39851;
var G__39854 = cljs.core.count(c__20965__auto___39851);
var G__39855 = (0);
seq__39834_39840 = G__39852;
chunk__39835_39841 = G__39853;
count__39836_39842 = G__39854;
i__39837_39843 = G__39855;
continue;
}
} else
{var x_39856 = cljs.core.first(seq__39834_39850__$1);ret.push(x_39856);
{
var G__39857 = cljs.core.next(seq__39834_39850__$1);
var G__39858 = null;
var G__39859 = (0);
var G__39860 = (0);
seq__39834_39840 = G__39857;
chunk__39835_39841 = G__39858;
count__39836_39842 = G__39859;
i__39837_39843 = G__39860;
continue;
}
}
} else
{}
}
break;
}
var G__39838 = "array";var G__39839 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__39838,G__39839) : com.cognitect.transit.tagged.call(null,G__39838,G__39839));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__39861_39867 = cljs.core.seq(v);var chunk__39862_39868 = null;var count__39863_39869 = (0);var i__39864_39870 = (0);while(true){
if((i__39864_39870 < count__39863_39869))
{var x_39871 = chunk__39862_39868.cljs$core$IIndexed$_nth$arity$2(null,i__39864_39870);ret.push(x_39871);
{
var G__39872 = seq__39861_39867;
var G__39873 = chunk__39862_39868;
var G__39874 = count__39863_39869;
var G__39875 = (i__39864_39870 + (1));
seq__39861_39867 = G__39872;
chunk__39862_39868 = G__39873;
count__39863_39869 = G__39874;
i__39864_39870 = G__39875;
continue;
}
} else
{var temp__4126__auto___39876 = cljs.core.seq(seq__39861_39867);if(temp__4126__auto___39876)
{var seq__39861_39877__$1 = temp__4126__auto___39876;if(cljs.core.chunked_seq_QMARK_(seq__39861_39877__$1))
{var c__20965__auto___39878 = cljs.core.chunk_first(seq__39861_39877__$1);{
var G__39879 = cljs.core.chunk_rest(seq__39861_39877__$1);
var G__39880 = c__20965__auto___39878;
var G__39881 = cljs.core.count(c__20965__auto___39878);
var G__39882 = (0);
seq__39861_39867 = G__39879;
chunk__39862_39868 = G__39880;
count__39863_39869 = G__39881;
i__39864_39870 = G__39882;
continue;
}
} else
{var x_39883 = cljs.core.first(seq__39861_39877__$1);ret.push(x_39883);
{
var G__39884 = cljs.core.next(seq__39861_39877__$1);
var G__39885 = null;
var G__39886 = (0);
var G__39887 = (0);
seq__39861_39867 = G__39884;
chunk__39862_39868 = G__39885;
count__39863_39869 = G__39886;
i__39864_39870 = G__39887;
continue;
}
}
} else
{}
}
break;
}
var G__39865 = "array";var G__39866 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__39865,G__39866) : com.cognitect.transit.tagged.call(null,G__39865,G__39866));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__39888_39892 = cljs.core.seq(v);var chunk__39889_39893 = null;var count__39890_39894 = (0);var i__39891_39895 = (0);while(true){
if((i__39891_39895 < count__39890_39894))
{var x_39896 = chunk__39889_39893.cljs$core$IIndexed$_nth$arity$2(null,i__39891_39895);ret.push(x_39896);
{
var G__39897 = seq__39888_39892;
var G__39898 = chunk__39889_39893;
var G__39899 = count__39890_39894;
var G__39900 = (i__39891_39895 + (1));
seq__39888_39892 = G__39897;
chunk__39889_39893 = G__39898;
count__39890_39894 = G__39899;
i__39891_39895 = G__39900;
continue;
}
} else
{var temp__4126__auto___39901 = cljs.core.seq(seq__39888_39892);if(temp__4126__auto___39901)
{var seq__39888_39902__$1 = temp__4126__auto___39901;if(cljs.core.chunked_seq_QMARK_(seq__39888_39902__$1))
{var c__20965__auto___39903 = cljs.core.chunk_first(seq__39888_39902__$1);{
var G__39904 = cljs.core.chunk_rest(seq__39888_39902__$1);
var G__39905 = c__20965__auto___39903;
var G__39906 = cljs.core.count(c__20965__auto___39903);
var G__39907 = (0);
seq__39888_39892 = G__39904;
chunk__39889_39893 = G__39905;
count__39890_39894 = G__39906;
i__39891_39895 = G__39907;
continue;
}
} else
{var x_39908 = cljs.core.first(seq__39888_39902__$1);ret.push(x_39908);
{
var G__39909 = cljs.core.next(seq__39888_39902__$1);
var G__39910 = null;
var G__39911 = (0);
var G__39912 = (0);
seq__39888_39892 = G__39909;
chunk__39889_39893 = G__39910;
count__39890_39894 = G__39911;
i__39891_39895 = G__39912;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__39931 = cljs.core.name(type);var G__39932 = cognitect.transit.opts_merge({"unpack": ((function (G__39931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__39931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x39936 = cljs.core.clone(handlers);x39936.forEach = ((function (x39936,G__39931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__39937 = cljs.core.seq(coll);var chunk__39938 = null;var count__39939 = (0);var i__39940 = (0);while(true){
if((i__39940 < count__39939))
{var vec__39941 = chunk__39938.cljs$core$IIndexed$_nth$arity$2(null,i__39940);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39941,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39941,(1),null);var G__39942_39947 = v;var G__39943_39948 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39942_39947,G__39943_39948) : f.call(null,G__39942_39947,G__39943_39948));
{
var G__39949 = seq__39937;
var G__39950 = chunk__39938;
var G__39951 = count__39939;
var G__39952 = (i__39940 + (1));
seq__39937 = G__39949;
chunk__39938 = G__39950;
count__39939 = G__39951;
i__39940 = G__39952;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39937);if(temp__4126__auto__)
{var seq__39937__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39937__$1))
{var c__20965__auto__ = cljs.core.chunk_first(seq__39937__$1);{
var G__39953 = cljs.core.chunk_rest(seq__39937__$1);
var G__39954 = c__20965__auto__;
var G__39955 = cljs.core.count(c__20965__auto__);
var G__39956 = (0);
seq__39937 = G__39953;
chunk__39938 = G__39954;
count__39939 = G__39955;
i__39940 = G__39956;
continue;
}
} else
{var vec__39944 = cljs.core.first(seq__39937__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39944,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39944,(1),null);var G__39945_39957 = v;var G__39946_39958 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39945_39957,G__39946_39958) : f.call(null,G__39945_39957,G__39946_39958));
{
var G__39959 = cljs.core.next(seq__39937__$1);
var G__39960 = null;
var G__39961 = (0);
var G__39962 = (0);
seq__39937 = G__39959;
chunk__39938 = G__39960;
count__39939 = G__39961;
i__39940 = G__39962;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x39936,G__39931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x39936;
})(), "objectBuilder": ((function (G__39931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__39931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__39933 = obj;G__39933.push((function (){var G__39934 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__39934) : kfn.call(null,G__39934));
})(),(function (){var G__39935 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__39935) : vfn.call(null,G__39935));
})());
return G__39933;
});})(G__39931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__39931,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__39931,G__39932) : com.cognitect.transit.writer.call(null,G__39931,G__39932));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t39977 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t39977 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta39978){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta39978 = meta39978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t39977.cljs$lang$type = true;
cognitect.transit.t39977.cljs$lang$ctorStr = "cognitect.transit/t39977";
cognitect.transit.t39977.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cognitect.transit/t39977");
});
cognitect.transit.t39977.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__39980 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__39980) : self__.tag_fn.call(null,G__39980));
});
cognitect.transit.t39977.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__39981 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__39981) : self__.rep_fn.call(null,G__39981));
});
cognitect.transit.t39977.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__39982 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__39982) : self__.str_rep_fn.call(null,G__39982));
} else
{return null;
}
});
cognitect.transit.t39977.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t39977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39979){var self__ = this;
var _39979__$1 = this;return self__.meta39978;
});
cognitect.transit.t39977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39979,meta39978__$1){var self__ = this;
var _39979__$1 = this;return (new cognitect.transit.t39977(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta39978__$1));
});
cognitect.transit.__GT_t39977 = (function __GT_t39977(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta39978){return (new cognitect.transit.t39977(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta39978));
});
}
return (new cognitect.transit.t39977(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__39985 = tag;var G__39986 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__39985,G__39986) : com.cognitect.transit.types.taggedValue.call(null,G__39985,G__39986));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__39988 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__39988) : com.cognitect.transit.types.isTaggedValue.call(null,G__39988));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__39990 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__39990) : com.cognitect.transit.types.integer.call(null,G__39990));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__39992 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__39992) : com.cognitect.transit.types.isInteger.call(null,G__39992));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__39994 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__39994) : com.cognitect.transit.types.bigInteger.call(null,G__39994));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__39996 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__39996) : com.cognitect.transit.types.isBigInteger.call(null,G__39996));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__39998 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__39998) : com.cognitect.transit.types.bigDecimalValue.call(null,G__39998));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__40000 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__40000) : com.cognitect.transit.types.isBigDecimal.call(null,G__40000));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__40002 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__40002) : com.cognitect.transit.types.uri.call(null,G__40002));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__40004 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__40004) : com.cognitect.transit.types.isURI.call(null,G__40004));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__40006 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__40006) : com.cognitect.transit.types.uuid.call(null,G__40006));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__40008 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__40008) : com.cognitect.transit.types.isUUID.call(null,G__40008));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__40010 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__40010) : com.cognitect.transit.types.binary.call(null,G__40010));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__40012 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__40012) : com.cognitect.transit.types.isBinary.call(null,G__40012));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__40014 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__40014) : com.cognitect.transit.types.quoted.call(null,G__40014));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__40016 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__40016) : com.cognitect.transit.types.isQuoted.call(null,G__40016));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__40018 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__40018) : com.cognitect.transit.types.link.call(null,G__40018));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__40020 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__40020) : com.cognitect.transit.types.isLink.call(null,G__40020));
});
//# sourceMappingURL=transit.js.map