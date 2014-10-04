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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__31016 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__31016) : com.cognitect.transit.eq.hashCode.call(null,G__31016));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__31017 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__31017) : com.cognitect.transit.eq.hashCode.call(null,G__31017));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__31018 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__31018) : com.cognitect.transit.eq.hashCode.call(null,G__31018));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__31023_31027 = cljs.core.seq(cljs.core.js_keys(b));var chunk__31024_31028 = null;var count__31025_31029 = (0);var i__31026_31030 = (0);while(true){
if((i__31026_31030 < count__31025_31029))
{var k_31031 = chunk__31024_31028.cljs$core$IIndexed$_nth$arity$2(null,i__31026_31030);var v_31032 = (b[k_31031]);(a[k_31031] = v_31032);
{
var G__31033 = seq__31023_31027;
var G__31034 = chunk__31024_31028;
var G__31035 = count__31025_31029;
var G__31036 = (i__31026_31030 + (1));
seq__31023_31027 = G__31033;
chunk__31024_31028 = G__31034;
count__31025_31029 = G__31035;
i__31026_31030 = G__31036;
continue;
}
} else
{var temp__4126__auto___31037 = cljs.core.seq(seq__31023_31027);if(temp__4126__auto___31037)
{var seq__31023_31038__$1 = temp__4126__auto___31037;if(cljs.core.chunked_seq_QMARK_(seq__31023_31038__$1))
{var c__20699__auto___31039 = cljs.core.chunk_first(seq__31023_31038__$1);{
var G__31040 = cljs.core.chunk_rest(seq__31023_31038__$1);
var G__31041 = c__20699__auto___31039;
var G__31042 = cljs.core.count(c__20699__auto___31039);
var G__31043 = (0);
seq__31023_31027 = G__31040;
chunk__31024_31028 = G__31041;
count__31025_31029 = G__31042;
i__31026_31030 = G__31043;
continue;
}
} else
{var k_31044 = cljs.core.first(seq__31023_31038__$1);var v_31045 = (b[k_31044]);(a[k_31044] = v_31045);
{
var G__31046 = cljs.core.next(seq__31023_31038__$1);
var G__31047 = null;
var G__31048 = (0);
var G__31049 = (0);
seq__31023_31027 = G__31046;
chunk__31024_31028 = G__31047;
count__31025_31029 = G__31048;
i__31026_31030 = G__31049;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/MapBuilder");
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
var _ = this;var G__31050 = arr;var G__31051 = true;var G__31052 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__31050,G__31051,G__31052) : cljs.core.PersistentArrayMap.fromArray.call(null,G__31050,G__31051,G__31052));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/VectorBuilder");
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
var _ = this;var G__31053 = arr;var G__31054 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__31053,G__31054) : cljs.core.PersistentVector.fromArray.call(null,G__31053,G__31054));
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
var reader__2 = (function (type,opts){var G__31059 = cljs.core.name(type);var G__31060 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__31059){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__31061 = (i + (2));
var G__31062 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__31061;
ret = G__31062;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__31059))
, "list": ((function (G__31059){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__31059))
, "set": ((function (G__31059){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__31059))
, ":": ((function (G__31059){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__31059))
, "$": ((function (G__31059){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__31059))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__31059,G__31060) : com.cognitect.transit.reader.call(null,G__31059,G__31060));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31063_31069 = cljs.core.seq(v);var chunk__31064_31070 = null;var count__31065_31071 = (0);var i__31066_31072 = (0);while(true){
if((i__31066_31072 < count__31065_31071))
{var x_31073 = chunk__31064_31070.cljs$core$IIndexed$_nth$arity$2(null,i__31066_31072);ret.push(x_31073);
{
var G__31074 = seq__31063_31069;
var G__31075 = chunk__31064_31070;
var G__31076 = count__31065_31071;
var G__31077 = (i__31066_31072 + (1));
seq__31063_31069 = G__31074;
chunk__31064_31070 = G__31075;
count__31065_31071 = G__31076;
i__31066_31072 = G__31077;
continue;
}
} else
{var temp__4126__auto___31078 = cljs.core.seq(seq__31063_31069);if(temp__4126__auto___31078)
{var seq__31063_31079__$1 = temp__4126__auto___31078;if(cljs.core.chunked_seq_QMARK_(seq__31063_31079__$1))
{var c__20699__auto___31080 = cljs.core.chunk_first(seq__31063_31079__$1);{
var G__31081 = cljs.core.chunk_rest(seq__31063_31079__$1);
var G__31082 = c__20699__auto___31080;
var G__31083 = cljs.core.count(c__20699__auto___31080);
var G__31084 = (0);
seq__31063_31069 = G__31081;
chunk__31064_31070 = G__31082;
count__31065_31071 = G__31083;
i__31066_31072 = G__31084;
continue;
}
} else
{var x_31085 = cljs.core.first(seq__31063_31079__$1);ret.push(x_31085);
{
var G__31086 = cljs.core.next(seq__31063_31079__$1);
var G__31087 = null;
var G__31088 = (0);
var G__31089 = (0);
seq__31063_31069 = G__31086;
chunk__31064_31070 = G__31087;
count__31065_31071 = G__31088;
i__31066_31072 = G__31089;
continue;
}
}
} else
{}
}
break;
}
var G__31067 = "array";var G__31068 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__31067,G__31068) : com.cognitect.transit.tagged.call(null,G__31067,G__31068));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31090_31096 = cljs.core.seq(v);var chunk__31091_31097 = null;var count__31092_31098 = (0);var i__31093_31099 = (0);while(true){
if((i__31093_31099 < count__31092_31098))
{var x_31100 = chunk__31091_31097.cljs$core$IIndexed$_nth$arity$2(null,i__31093_31099);ret.push(x_31100);
{
var G__31101 = seq__31090_31096;
var G__31102 = chunk__31091_31097;
var G__31103 = count__31092_31098;
var G__31104 = (i__31093_31099 + (1));
seq__31090_31096 = G__31101;
chunk__31091_31097 = G__31102;
count__31092_31098 = G__31103;
i__31093_31099 = G__31104;
continue;
}
} else
{var temp__4126__auto___31105 = cljs.core.seq(seq__31090_31096);if(temp__4126__auto___31105)
{var seq__31090_31106__$1 = temp__4126__auto___31105;if(cljs.core.chunked_seq_QMARK_(seq__31090_31106__$1))
{var c__20699__auto___31107 = cljs.core.chunk_first(seq__31090_31106__$1);{
var G__31108 = cljs.core.chunk_rest(seq__31090_31106__$1);
var G__31109 = c__20699__auto___31107;
var G__31110 = cljs.core.count(c__20699__auto___31107);
var G__31111 = (0);
seq__31090_31096 = G__31108;
chunk__31091_31097 = G__31109;
count__31092_31098 = G__31110;
i__31093_31099 = G__31111;
continue;
}
} else
{var x_31112 = cljs.core.first(seq__31090_31106__$1);ret.push(x_31112);
{
var G__31113 = cljs.core.next(seq__31090_31106__$1);
var G__31114 = null;
var G__31115 = (0);
var G__31116 = (0);
seq__31090_31096 = G__31113;
chunk__31091_31097 = G__31114;
count__31092_31098 = G__31115;
i__31093_31099 = G__31116;
continue;
}
}
} else
{}
}
break;
}
var G__31094 = "array";var G__31095 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__31094,G__31095) : com.cognitect.transit.tagged.call(null,G__31094,G__31095));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__31117_31121 = cljs.core.seq(v);var chunk__31118_31122 = null;var count__31119_31123 = (0);var i__31120_31124 = (0);while(true){
if((i__31120_31124 < count__31119_31123))
{var x_31125 = chunk__31118_31122.cljs$core$IIndexed$_nth$arity$2(null,i__31120_31124);ret.push(x_31125);
{
var G__31126 = seq__31117_31121;
var G__31127 = chunk__31118_31122;
var G__31128 = count__31119_31123;
var G__31129 = (i__31120_31124 + (1));
seq__31117_31121 = G__31126;
chunk__31118_31122 = G__31127;
count__31119_31123 = G__31128;
i__31120_31124 = G__31129;
continue;
}
} else
{var temp__4126__auto___31130 = cljs.core.seq(seq__31117_31121);if(temp__4126__auto___31130)
{var seq__31117_31131__$1 = temp__4126__auto___31130;if(cljs.core.chunked_seq_QMARK_(seq__31117_31131__$1))
{var c__20699__auto___31132 = cljs.core.chunk_first(seq__31117_31131__$1);{
var G__31133 = cljs.core.chunk_rest(seq__31117_31131__$1);
var G__31134 = c__20699__auto___31132;
var G__31135 = cljs.core.count(c__20699__auto___31132);
var G__31136 = (0);
seq__31117_31121 = G__31133;
chunk__31118_31122 = G__31134;
count__31119_31123 = G__31135;
i__31120_31124 = G__31136;
continue;
}
} else
{var x_31137 = cljs.core.first(seq__31117_31131__$1);ret.push(x_31137);
{
var G__31138 = cljs.core.next(seq__31117_31131__$1);
var G__31139 = null;
var G__31140 = (0);
var G__31141 = (0);
seq__31117_31121 = G__31138;
chunk__31118_31122 = G__31139;
count__31119_31123 = G__31140;
i__31120_31124 = G__31141;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__31160 = cljs.core.name(type);var G__31161 = cognitect.transit.opts_merge({"unpack": ((function (G__31160,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__31160,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x31165 = cljs.core.clone(handlers);x31165.forEach = ((function (x31165,G__31160,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__31166 = cljs.core.seq(coll);var chunk__31167 = null;var count__31168 = (0);var i__31169 = (0);while(true){
if((i__31169 < count__31168))
{var vec__31170 = chunk__31167.cljs$core$IIndexed$_nth$arity$2(null,i__31169);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31170,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31170,(1),null);var G__31171_31176 = v;var G__31172_31177 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31171_31176,G__31172_31177) : f.call(null,G__31171_31176,G__31172_31177));
{
var G__31178 = seq__31166;
var G__31179 = chunk__31167;
var G__31180 = count__31168;
var G__31181 = (i__31169 + (1));
seq__31166 = G__31178;
chunk__31167 = G__31179;
count__31168 = G__31180;
i__31169 = G__31181;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__31166);if(temp__4126__auto__)
{var seq__31166__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__31166__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__31166__$1);{
var G__31182 = cljs.core.chunk_rest(seq__31166__$1);
var G__31183 = c__20699__auto__;
var G__31184 = cljs.core.count(c__20699__auto__);
var G__31185 = (0);
seq__31166 = G__31182;
chunk__31167 = G__31183;
count__31168 = G__31184;
i__31169 = G__31185;
continue;
}
} else
{var vec__31173 = cljs.core.first(seq__31166__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(1),null);var G__31174_31186 = v;var G__31175_31187 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31174_31186,G__31175_31187) : f.call(null,G__31174_31186,G__31175_31187));
{
var G__31188 = cljs.core.next(seq__31166__$1);
var G__31189 = null;
var G__31190 = (0);
var G__31191 = (0);
seq__31166 = G__31188;
chunk__31167 = G__31189;
count__31168 = G__31190;
i__31169 = G__31191;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x31165,G__31160,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x31165;
})(), "objectBuilder": ((function (G__31160,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__31160,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__31162 = obj;G__31162.push((function (){var G__31163 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__31163) : kfn.call(null,G__31163));
})(),(function (){var G__31164 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__31164) : vfn.call(null,G__31164));
})());
return G__31162;
});})(G__31160,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__31160,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__31160,G__31161) : com.cognitect.transit.writer.call(null,G__31160,G__31161));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t31206 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t31206 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta31207){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta31207 = meta31207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t31206.cljs$lang$type = true;
cognitect.transit.t31206.cljs$lang$ctorStr = "cognitect.transit/t31206";
cognitect.transit.t31206.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cognitect.transit/t31206");
});
cognitect.transit.t31206.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__31209 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__31209) : self__.tag_fn.call(null,G__31209));
});
cognitect.transit.t31206.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__31210 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__31210) : self__.rep_fn.call(null,G__31210));
});
cognitect.transit.t31206.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__31211 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__31211) : self__.str_rep_fn.call(null,G__31211));
} else
{return null;
}
});
cognitect.transit.t31206.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t31206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31208){var self__ = this;
var _31208__$1 = this;return self__.meta31207;
});
cognitect.transit.t31206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31208,meta31207__$1){var self__ = this;
var _31208__$1 = this;return (new cognitect.transit.t31206(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta31207__$1));
});
cognitect.transit.__GT_t31206 = (function __GT_t31206(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta31207){return (new cognitect.transit.t31206(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta31207));
});
}
return (new cognitect.transit.t31206(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__31214 = tag;var G__31215 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__31214,G__31215) : com.cognitect.transit.types.taggedValue.call(null,G__31214,G__31215));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__31217 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__31217) : com.cognitect.transit.types.isTaggedValue.call(null,G__31217));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__31219 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__31219) : com.cognitect.transit.types.integer.call(null,G__31219));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__31221 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__31221) : com.cognitect.transit.types.isInteger.call(null,G__31221));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__31223 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__31223) : com.cognitect.transit.types.bigInteger.call(null,G__31223));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__31225 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__31225) : com.cognitect.transit.types.isBigInteger.call(null,G__31225));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__31227 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__31227) : com.cognitect.transit.types.bigDecimalValue.call(null,G__31227));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__31229 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__31229) : com.cognitect.transit.types.isBigDecimal.call(null,G__31229));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__31231 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__31231) : com.cognitect.transit.types.uri.call(null,G__31231));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__31233 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__31233) : com.cognitect.transit.types.isURI.call(null,G__31233));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__31235 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__31235) : com.cognitect.transit.types.uuid.call(null,G__31235));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__31237 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__31237) : com.cognitect.transit.types.isUUID.call(null,G__31237));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__31239 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__31239) : com.cognitect.transit.types.binary.call(null,G__31239));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__31241 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__31241) : com.cognitect.transit.types.isBinary.call(null,G__31241));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__31243 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__31243) : com.cognitect.transit.types.quoted.call(null,G__31243));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__31245 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__31245) : com.cognitect.transit.types.isQuoted.call(null,G__31245));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__31247 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__31247) : com.cognitect.transit.types.link.call(null,G__31247));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__31249 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__31249) : com.cognitect.transit.types.isLink.call(null,G__31249));
});
//# sourceMappingURL=transit.js.map