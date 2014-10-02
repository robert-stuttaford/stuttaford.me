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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__30974 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__30974) : com.cognitect.transit.eq.hashCode.call(null,G__30974));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__30975 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__30975) : com.cognitect.transit.eq.hashCode.call(null,G__30975));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__30976 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__30976) : com.cognitect.transit.eq.hashCode.call(null,G__30976));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__30981_30985 = cljs.core.seq(cljs.core.js_keys(b));var chunk__30982_30986 = null;var count__30983_30987 = (0);var i__30984_30988 = (0);while(true){
if((i__30984_30988 < count__30983_30987))
{var k_30989 = chunk__30982_30986.cljs$core$IIndexed$_nth$arity$2(null,i__30984_30988);var v_30990 = (b[k_30989]);(a[k_30989] = v_30990);
{
var G__30991 = seq__30981_30985;
var G__30992 = chunk__30982_30986;
var G__30993 = count__30983_30987;
var G__30994 = (i__30984_30988 + (1));
seq__30981_30985 = G__30991;
chunk__30982_30986 = G__30992;
count__30983_30987 = G__30993;
i__30984_30988 = G__30994;
continue;
}
} else
{var temp__4126__auto___30995 = cljs.core.seq(seq__30981_30985);if(temp__4126__auto___30995)
{var seq__30981_30996__$1 = temp__4126__auto___30995;if(cljs.core.chunked_seq_QMARK_(seq__30981_30996__$1))
{var c__20813__auto___30997 = cljs.core.chunk_first(seq__30981_30996__$1);{
var G__30998 = cljs.core.chunk_rest(seq__30981_30996__$1);
var G__30999 = c__20813__auto___30997;
var G__31000 = cljs.core.count(c__20813__auto___30997);
var G__31001 = (0);
seq__30981_30985 = G__30998;
chunk__30982_30986 = G__30999;
count__30983_30987 = G__31000;
i__30984_30988 = G__31001;
continue;
}
} else
{var k_31002 = cljs.core.first(seq__30981_30996__$1);var v_31003 = (b[k_31002]);(a[k_31002] = v_31003);
{
var G__31004 = cljs.core.next(seq__30981_30996__$1);
var G__31005 = null;
var G__31006 = (0);
var G__31007 = (0);
seq__30981_30985 = G__31004;
chunk__30982_30986 = G__31005;
count__30983_30987 = G__31006;
i__30984_30988 = G__31007;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/MapBuilder");
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
var _ = this;var G__31008 = arr;var G__31009 = true;var G__31010 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__31008,G__31009,G__31010) : cljs.core.PersistentArrayMap.fromArray.call(null,G__31008,G__31009,G__31010));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/VectorBuilder");
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
var _ = this;var G__31011 = arr;var G__31012 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__31011,G__31012) : cljs.core.PersistentVector.fromArray.call(null,G__31011,G__31012));
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
var reader__2 = (function (type,opts){var G__31017 = cljs.core.name(type);var G__31018 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__31017){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__31019 = (i + (2));
var G__31020 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__31019;
ret = G__31020;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__31017))
, "list": ((function (G__31017){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__31017))
, "set": ((function (G__31017){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__31017))
, ":": ((function (G__31017){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__31017))
, "$": ((function (G__31017){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__31017))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__31017,G__31018) : com.cognitect.transit.reader.call(null,G__31017,G__31018));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31021_31027 = cljs.core.seq(v);var chunk__31022_31028 = null;var count__31023_31029 = (0);var i__31024_31030 = (0);while(true){
if((i__31024_31030 < count__31023_31029))
{var x_31031 = chunk__31022_31028.cljs$core$IIndexed$_nth$arity$2(null,i__31024_31030);ret.push(x_31031);
{
var G__31032 = seq__31021_31027;
var G__31033 = chunk__31022_31028;
var G__31034 = count__31023_31029;
var G__31035 = (i__31024_31030 + (1));
seq__31021_31027 = G__31032;
chunk__31022_31028 = G__31033;
count__31023_31029 = G__31034;
i__31024_31030 = G__31035;
continue;
}
} else
{var temp__4126__auto___31036 = cljs.core.seq(seq__31021_31027);if(temp__4126__auto___31036)
{var seq__31021_31037__$1 = temp__4126__auto___31036;if(cljs.core.chunked_seq_QMARK_(seq__31021_31037__$1))
{var c__20813__auto___31038 = cljs.core.chunk_first(seq__31021_31037__$1);{
var G__31039 = cljs.core.chunk_rest(seq__31021_31037__$1);
var G__31040 = c__20813__auto___31038;
var G__31041 = cljs.core.count(c__20813__auto___31038);
var G__31042 = (0);
seq__31021_31027 = G__31039;
chunk__31022_31028 = G__31040;
count__31023_31029 = G__31041;
i__31024_31030 = G__31042;
continue;
}
} else
{var x_31043 = cljs.core.first(seq__31021_31037__$1);ret.push(x_31043);
{
var G__31044 = cljs.core.next(seq__31021_31037__$1);
var G__31045 = null;
var G__31046 = (0);
var G__31047 = (0);
seq__31021_31027 = G__31044;
chunk__31022_31028 = G__31045;
count__31023_31029 = G__31046;
i__31024_31030 = G__31047;
continue;
}
}
} else
{}
}
break;
}
var G__31025 = "array";var G__31026 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__31025,G__31026) : com.cognitect.transit.tagged.call(null,G__31025,G__31026));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31048_31054 = cljs.core.seq(v);var chunk__31049_31055 = null;var count__31050_31056 = (0);var i__31051_31057 = (0);while(true){
if((i__31051_31057 < count__31050_31056))
{var x_31058 = chunk__31049_31055.cljs$core$IIndexed$_nth$arity$2(null,i__31051_31057);ret.push(x_31058);
{
var G__31059 = seq__31048_31054;
var G__31060 = chunk__31049_31055;
var G__31061 = count__31050_31056;
var G__31062 = (i__31051_31057 + (1));
seq__31048_31054 = G__31059;
chunk__31049_31055 = G__31060;
count__31050_31056 = G__31061;
i__31051_31057 = G__31062;
continue;
}
} else
{var temp__4126__auto___31063 = cljs.core.seq(seq__31048_31054);if(temp__4126__auto___31063)
{var seq__31048_31064__$1 = temp__4126__auto___31063;if(cljs.core.chunked_seq_QMARK_(seq__31048_31064__$1))
{var c__20813__auto___31065 = cljs.core.chunk_first(seq__31048_31064__$1);{
var G__31066 = cljs.core.chunk_rest(seq__31048_31064__$1);
var G__31067 = c__20813__auto___31065;
var G__31068 = cljs.core.count(c__20813__auto___31065);
var G__31069 = (0);
seq__31048_31054 = G__31066;
chunk__31049_31055 = G__31067;
count__31050_31056 = G__31068;
i__31051_31057 = G__31069;
continue;
}
} else
{var x_31070 = cljs.core.first(seq__31048_31064__$1);ret.push(x_31070);
{
var G__31071 = cljs.core.next(seq__31048_31064__$1);
var G__31072 = null;
var G__31073 = (0);
var G__31074 = (0);
seq__31048_31054 = G__31071;
chunk__31049_31055 = G__31072;
count__31050_31056 = G__31073;
i__31051_31057 = G__31074;
continue;
}
}
} else
{}
}
break;
}
var G__31052 = "array";var G__31053 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__31052,G__31053) : com.cognitect.transit.tagged.call(null,G__31052,G__31053));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31075_31079 = cljs.core.seq(v);var chunk__31076_31080 = null;var count__31077_31081 = (0);var i__31078_31082 = (0);while(true){
if((i__31078_31082 < count__31077_31081))
{var x_31083 = chunk__31076_31080.cljs$core$IIndexed$_nth$arity$2(null,i__31078_31082);ret.push(x_31083);
{
var G__31084 = seq__31075_31079;
var G__31085 = chunk__31076_31080;
var G__31086 = count__31077_31081;
var G__31087 = (i__31078_31082 + (1));
seq__31075_31079 = G__31084;
chunk__31076_31080 = G__31085;
count__31077_31081 = G__31086;
i__31078_31082 = G__31087;
continue;
}
} else
{var temp__4126__auto___31088 = cljs.core.seq(seq__31075_31079);if(temp__4126__auto___31088)
{var seq__31075_31089__$1 = temp__4126__auto___31088;if(cljs.core.chunked_seq_QMARK_(seq__31075_31089__$1))
{var c__20813__auto___31090 = cljs.core.chunk_first(seq__31075_31089__$1);{
var G__31091 = cljs.core.chunk_rest(seq__31075_31089__$1);
var G__31092 = c__20813__auto___31090;
var G__31093 = cljs.core.count(c__20813__auto___31090);
var G__31094 = (0);
seq__31075_31079 = G__31091;
chunk__31076_31080 = G__31092;
count__31077_31081 = G__31093;
i__31078_31082 = G__31094;
continue;
}
} else
{var x_31095 = cljs.core.first(seq__31075_31089__$1);ret.push(x_31095);
{
var G__31096 = cljs.core.next(seq__31075_31089__$1);
var G__31097 = null;
var G__31098 = (0);
var G__31099 = (0);
seq__31075_31079 = G__31096;
chunk__31076_31080 = G__31097;
count__31077_31081 = G__31098;
i__31078_31082 = G__31099;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__31118 = cljs.core.name(type);var G__31119 = cognitect.transit.opts_merge({"unpack": ((function (G__31118,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__31118,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x31123 = cljs.core.clone(handlers);x31123.forEach = ((function (x31123,G__31118,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__31124 = cljs.core.seq(coll);var chunk__31125 = null;var count__31126 = (0);var i__31127 = (0);while(true){
if((i__31127 < count__31126))
{var vec__31128 = chunk__31125.cljs$core$IIndexed$_nth$arity$2(null,i__31127);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31128,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31128,(1),null);var G__31129_31134 = v;var G__31130_31135 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31129_31134,G__31130_31135) : f.call(null,G__31129_31134,G__31130_31135));
{
var G__31136 = seq__31124;
var G__31137 = chunk__31125;
var G__31138 = count__31126;
var G__31139 = (i__31127 + (1));
seq__31124 = G__31136;
chunk__31125 = G__31137;
count__31126 = G__31138;
i__31127 = G__31139;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__31124);if(temp__4126__auto__)
{var seq__31124__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__31124__$1))
{var c__20813__auto__ = cljs.core.chunk_first(seq__31124__$1);{
var G__31140 = cljs.core.chunk_rest(seq__31124__$1);
var G__31141 = c__20813__auto__;
var G__31142 = cljs.core.count(c__20813__auto__);
var G__31143 = (0);
seq__31124 = G__31140;
chunk__31125 = G__31141;
count__31126 = G__31142;
i__31127 = G__31143;
continue;
}
} else
{var vec__31131 = cljs.core.first(seq__31124__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31131,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31131,(1),null);var G__31132_31144 = v;var G__31133_31145 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31132_31144,G__31133_31145) : f.call(null,G__31132_31144,G__31133_31145));
{
var G__31146 = cljs.core.next(seq__31124__$1);
var G__31147 = null;
var G__31148 = (0);
var G__31149 = (0);
seq__31124 = G__31146;
chunk__31125 = G__31147;
count__31126 = G__31148;
i__31127 = G__31149;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x31123,G__31118,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x31123;
})(), "objectBuilder": ((function (G__31118,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__31118,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__31120 = obj;G__31120.push((function (){var G__31121 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__31121) : kfn.call(null,G__31121));
})(),(function (){var G__31122 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__31122) : vfn.call(null,G__31122));
})());
return G__31120;
});})(G__31118,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__31118,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__31118,G__31119) : com.cognitect.transit.writer.call(null,G__31118,G__31119));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t31164 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t31164 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta31165){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta31165 = meta31165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t31164.cljs$lang$type = true;
cognitect.transit.t31164.cljs$lang$ctorStr = "cognitect.transit/t31164";
cognitect.transit.t31164.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cognitect.transit/t31164");
});
cognitect.transit.t31164.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__31167 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__31167) : self__.tag_fn.call(null,G__31167));
});
cognitect.transit.t31164.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__31168 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__31168) : self__.rep_fn.call(null,G__31168));
});
cognitect.transit.t31164.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__31169 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__31169) : self__.str_rep_fn.call(null,G__31169));
} else
{return null;
}
});
cognitect.transit.t31164.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t31164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31166){var self__ = this;
var _31166__$1 = this;return self__.meta31165;
});
cognitect.transit.t31164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31166,meta31165__$1){var self__ = this;
var _31166__$1 = this;return (new cognitect.transit.t31164(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta31165__$1));
});
cognitect.transit.__GT_t31164 = (function __GT_t31164(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta31165){return (new cognitect.transit.t31164(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta31165));
});
}
return (new cognitect.transit.t31164(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__31172 = tag;var G__31173 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__31172,G__31173) : com.cognitect.transit.types.taggedValue.call(null,G__31172,G__31173));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__31175 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__31175) : com.cognitect.transit.types.isTaggedValue.call(null,G__31175));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__31177 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__31177) : com.cognitect.transit.types.integer.call(null,G__31177));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__31179 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__31179) : com.cognitect.transit.types.isInteger.call(null,G__31179));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__31181 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__31181) : com.cognitect.transit.types.bigInteger.call(null,G__31181));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__31183 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__31183) : com.cognitect.transit.types.isBigInteger.call(null,G__31183));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__31185 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__31185) : com.cognitect.transit.types.bigDecimalValue.call(null,G__31185));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__31187 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__31187) : com.cognitect.transit.types.isBigDecimal.call(null,G__31187));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__31189 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__31189) : com.cognitect.transit.types.uri.call(null,G__31189));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__31191 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__31191) : com.cognitect.transit.types.isURI.call(null,G__31191));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__31193 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__31193) : com.cognitect.transit.types.uuid.call(null,G__31193));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__31195 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__31195) : com.cognitect.transit.types.isUUID.call(null,G__31195));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__31197 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__31197) : com.cognitect.transit.types.binary.call(null,G__31197));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__31199 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__31199) : com.cognitect.transit.types.isBinary.call(null,G__31199));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__31201 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__31201) : com.cognitect.transit.types.quoted.call(null,G__31201));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__31203 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__31203) : com.cognitect.transit.types.isQuoted.call(null,G__31203));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__31205 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__31205) : com.cognitect.transit.types.link.call(null,G__31205));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__31207 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__31207) : com.cognitect.transit.types.isLink.call(null,G__31207));
});
//# sourceMappingURL=transit.js.map