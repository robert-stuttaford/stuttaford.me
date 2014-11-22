goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){if(datascript.core.multival_QMARK_(db,a))
{if(datascript.core.ref_QMARK_(db,a))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__45891_SHARP_,p2__45892_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45891_SHARP_,datascript.impl.entity.entity(db,p2__45892_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__45893_SHARP_,p2__45894_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45893_SHARP_,p2__45894_SHARP_.v);
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else
{if(datascript.core.ref_QMARK_(db,a))
{return datascript.impl.entity.entity(db,cljs.core.first(datoms).v);
} else
{return cljs.core.first(datoms).v;
}
}
});
datascript.impl.entity.datoms__GT_cache = (function datoms__GT_cache(db,datoms){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){var a = cljs.core.first(part).a;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function touch(e){if(cljs.core.truth_(e.touched))
{} else
{var temp__4126__auto___45895 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___45895))
{var datoms_45896 = temp__4126__auto___45895;e.touched = true;
e.cache = datascript.impl.entity.datoms__GT_cache(e.db,datoms_45896);
} else
{}
}
return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__4124__auto__){
return (function (p1__45897_SHARP_,p2__45898_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45897_SHARP_,datascript.impl.entity.entity(db,p2__45898_SHARP_.e));
});})(datoms,temp__4124__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function multival__GT_js(val){if(cljs.core.truth_(val))
{return cljs.core.to_array(val);
} else
{return null;
}
});
datascript.impl.entity.js_seq = (function js_seq(e){datascript.impl.entity.touch(e);
var iter__20913__auto__ = (function iter__45909(s__45910){return (new cljs.core.LazySeq(null,(function (){var s__45910__$1 = s__45910;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45910__$1);if(temp__4126__auto__)
{var s__45910__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45910__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45910__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45912 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45911 = (0);while(true){
if((i__45911 < size__20912__auto__))
{var vec__45917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45911);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45917,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45917,(1),null);cljs.core.chunk_append(b__45912,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__45919 = (i__45911 + (1));
i__45911 = G__45919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45912),iter__45909(cljs.core.chunk_rest(s__45910__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45912),null);
}
} else
{var vec__45918 = cljs.core.first(s__45910__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45918,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45918,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__45909(cljs.core.rest(s__45910__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(e.cache);
});

/**
* @constructor
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
})
datascript.impl.entity.Entity.cljs$lang$type = true;
datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__45944 = null;
var G__45944__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__45944__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__45944 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__45944__2.call(this,self__,k);
case 3:
return G__45944__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45944.cljs$core$IFn$_invoke$arity$2 = G__45944__2;
G__45944.cljs$core$IFn$_invoke$arity$3 = G__45944__3;
return G__45944;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args45920){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45920)));
});
datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});
datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null);
});
datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,attr,not_found){var self__ = this;
var ___$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword("db","id","db/id",-1388397098)))
{return self__.eid;
} else
{var temp__4124__auto__ = datascript.core.reverse_ref(attr);if(cljs.core.truth_(temp__4124__auto__))
{var attr__$1 = temp__4124__auto__;return datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,not_found);
} else
{var or__19687__auto__ = (function (){var G__45922 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__45922) : self__.cache.call(null,G__45922));
})();if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;self__.cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,attr,datascript.impl.entity.entity_attr(self__.db,attr,datoms));
var G__45923 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__45923) : self__.cache.call(null,G__45923));
} else
{return not_found;
}
}
}
}
}
});
datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;datascript.impl.entity.touch(this$__$1);
return cljs.core.count(self__.cache);
});
datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;datascript.impl.entity.touch(this$__$1);
return cljs.core.seq(self__.cache);
});
datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash(self__.eid);
});
datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return ((o instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.eid,o.eid));
});
datascript.impl.entity.Entity.prototype.entry_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
});
datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__45945 = null;
var G__45945__1 = (function (f){var self__ = this;
var this$ = this;var seq__45924 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__45925 = null;var count__45926 = (0);var i__45927 = (0);while(true){
if((i__45927 < count__45926))
{var vec__45928 = chunk__45925.cljs$core$IIndexed$_nth$arity$2(null,i__45927);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45928,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45928,(1),null);var G__45929_45946 = v;var G__45930_45947 = a;var G__45931_45948 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45929_45946,G__45930_45947,G__45931_45948) : f.call(null,G__45929_45946,G__45930_45947,G__45931_45948));
{
var G__45949 = seq__45924;
var G__45950 = chunk__45925;
var G__45951 = count__45926;
var G__45952 = (i__45927 + (1));
seq__45924 = G__45949;
chunk__45925 = G__45950;
count__45926 = G__45951;
i__45927 = G__45952;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45924);if(temp__4126__auto__)
{var seq__45924__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45924__$1))
{var c__20965__auto__ = cljs.core.chunk_first(seq__45924__$1);{
var G__45953 = cljs.core.chunk_rest(seq__45924__$1);
var G__45954 = c__20965__auto__;
var G__45955 = cljs.core.count(c__20965__auto__);
var G__45956 = (0);
seq__45924 = G__45953;
chunk__45925 = G__45954;
count__45926 = G__45955;
i__45927 = G__45956;
continue;
}
} else
{var vec__45932 = cljs.core.first(seq__45924__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45932,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45932,(1),null);var G__45933_45957 = v;var G__45934_45958 = a;var G__45935_45959 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45933_45957,G__45934_45958,G__45935_45959) : f.call(null,G__45933_45957,G__45934_45958,G__45935_45959));
{
var G__45960 = cljs.core.next(seq__45924__$1);
var G__45961 = null;
var G__45962 = (0);
var G__45963 = (0);
seq__45924 = G__45960;
chunk__45925 = G__45961;
count__45926 = G__45962;
i__45927 = G__45963;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var G__45945__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__45936 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__45937 = null;var count__45938 = (0);var i__45939 = (0);while(true){
if((i__45939 < count__45938))
{var vec__45940 = chunk__45937.cljs$core$IIndexed$_nth$arity$2(null,i__45939);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45940,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45940,(1),null);f.call(use_as_this,v,a,this$);
{
var G__45964 = seq__45936;
var G__45965 = chunk__45937;
var G__45966 = count__45938;
var G__45967 = (i__45939 + (1));
seq__45936 = G__45964;
chunk__45937 = G__45965;
count__45938 = G__45966;
i__45939 = G__45967;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45936);if(temp__4126__auto__)
{var seq__45936__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45936__$1))
{var c__20965__auto__ = cljs.core.chunk_first(seq__45936__$1);{
var G__45968 = cljs.core.chunk_rest(seq__45936__$1);
var G__45969 = c__20965__auto__;
var G__45970 = cljs.core.count(c__20965__auto__);
var G__45971 = (0);
seq__45936 = G__45968;
chunk__45937 = G__45969;
count__45938 = G__45970;
i__45939 = G__45971;
continue;
}
} else
{var vec__45941 = cljs.core.first(seq__45936__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45941,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45941,(1),null);f.call(use_as_this,v,a,this$);
{
var G__45972 = cljs.core.next(seq__45936__$1);
var G__45973 = null;
var G__45974 = (0);
var G__45975 = (0);
seq__45936 = G__45972;
chunk__45937 = G__45973;
count__45938 = G__45974;
i__45939 = G__45975;
continue;
}
}
} else
{return null;
}
}
break;
}
});
G__45945 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__45945__1.call(this,f);
case 2:
return G__45945__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45945.cljs$core$IFn$_invoke$arity$1 = G__45945__1;
G__45945.cljs$core$IFn$_invoke$arity$2 = G__45945__2;
return G__45945;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__45942 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45942,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45942,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45942,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__45943 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__45943__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__45943):G__45943);return G__45943__$1;
}
}
});
datascript.impl.entity.Entity.prototype.key_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array(cljs.core.keys(this$));
});
datascript.impl.entity.Entity.prototype.entries = (function (){var self__ = this;
var this$ = this;return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
});
datascript.impl.entity.Entity.prototype.value_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});
datascript.impl.entity.Entity.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_(this$);
});
datascript.impl.entity.Entity.prototype.keys = (function (){var self__ = this;
var this$ = this;return cljs.core.es6_iterator(cljs.core.keys(this$));
});
datascript.impl.entity.Entity.prototype.values = (function (){var self__ = this;
var this$ = this;return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});
datascript.impl.entity.Entity.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
datascript.impl.entity.Entity.prototype.has = (function (attr){var self__ = this;
var this$ = this;return !((this$.get(attr) == null));
});
datascript.impl.entity.__GT_Entity = (function __GT_Entity(db,eid,touched,cache){return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});
var G__45976_45978 = "datascript.impl.entity.Entity.prototype.get";var G__45977_45979 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__45976_45978,G__45977_45979);
var G__45980_45982 = "datascript.impl.entity.Entity.prototype.has";var G__45981_45983 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__45980_45982,G__45981_45983);
var G__45984_45986 = "datascript.impl.entity.Entity.prototype.forEach";var G__45985_45987 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__45984_45986,G__45985_45987);
var G__45988_45990 = "datascript.impl.entity.Entity.prototype.key_set";var G__45989_45991 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__45988_45990,G__45989_45991);
var G__45992_45994 = "datascript.impl.entity.Entity.prototype.value_set";var G__45993_45995 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__45992_45994,G__45993_45995);
var G__45996_45998 = "datascript.impl.entity.Entity.prototype.entry_set";var G__45997_45999 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__45996_45998,G__45997_45999);
var G__46000_46002 = "datascript.impl.entity.Entity.prototype.keys";var G__46001_46003 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__46000_46002,G__46001_46003);
var G__46004_46006 = "datascript.impl.entity.Entity.prototype.values";var G__46005_46007 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__46004_46006,G__46005_46007);
var G__46008_46010 = "datascript.impl.entity.Entity.prototype.entries";var G__46009_46011 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__46008_46010,G__46009_46011);
var G__46012_46014 = "cljs.core.ES6Iterator.prototype.next";var G__46013_46015 = cljs.core.ES6Iterator.prototype.next;goog.exportSymbol(G__46012_46014,G__46013_46015);
var G__46016_46018 = "cljs.core.ES6EntriesIterator.prototype.next";var G__46017_46019 = cljs.core.ES6EntriesIterator.prototype.next;goog.exportSymbol(G__46016_46018,G__46017_46019);
//# sourceMappingURL=entity.js.map