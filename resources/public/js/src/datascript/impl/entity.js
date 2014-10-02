goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.touch = (function touch(e){if(cljs.core.truth_(e.touched))
{} else
{var temp__4126__auto___37451 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___37451))
{var datoms_37452 = temp__4126__auto___37451;var db_37453 = e.db;var cache_37454 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (db_37453,datoms_37452,temp__4126__auto___37451){
return (function (acc,datom){var a = datom.a;var v = datom.v;if(datascript.core.multival_QMARK_(db_37453,a))
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,a,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,a,cljs.core.PersistentHashSet.EMPTY),v));
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,a,v);
}
});})(db_37453,datoms_37452,temp__4126__auto___37451))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),datoms_37452);e.touched = true;
e.cache = cljs.core.persistent_BANG_(cache_37454);
} else
{}
}
return e;
});
datascript.impl.entity.reverse_ref = (function reverse_ref(attr){var name = cljs.core.name(attr);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0))))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)));
} else
{return null;
}
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__4124__auto__){
return (function (p1__37455_SHARP_,p2__37456_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37455_SHARP_,datascript.impl.entity.entity(db,p2__37456_SHARP_.e));
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
var iter__20763__auto__ = (function iter__37467(s__37468){return (new cljs.core.LazySeq(null,(function (){var s__37468__$1 = s__37468;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37468__$1);if(temp__4126__auto__)
{var s__37468__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37468__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__37468__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__37470 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__37469 = (0);while(true){
if((i__37469 < size__20762__auto__))
{var vec__37475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__37469);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37475,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37475,(1),null);cljs.core.chunk_append(b__37470,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__37477 = (i__37469 + (1));
i__37469 = G__37477;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37470),iter__37467(cljs.core.chunk_rest(s__37468__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37470),null);
}
} else
{var vec__37476 = cljs.core.first(s__37468__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37476,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37476,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__37467(cljs.core.rest(s__37468__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20763__auto__(e.cache);
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
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__37507 = null;
var G__37507__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__37507__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__37507 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__37507__2.call(this,self__,k);
case 3:
return G__37507__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37507.cljs$core$IFn$_invoke$arity$2 = G__37507__2;
G__37507.cljs$core$IFn$_invoke$arity$3 = G__37507__3;
return G__37507;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args37482){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37482)));
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
{var temp__4124__auto__ = datascript.impl.entity.reverse_ref(attr);if(cljs.core.truth_(temp__4124__auto__))
{var attr__$1 = temp__4124__auto__;return datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,not_found);
} else
{var or__19347__auto__ = (function (){var G__37484 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__37484) : self__.cache.call(null,G__37484));
})();if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;var wrap = ((datascript.core.ref_QMARK_(self__.db,attr))?((function (datoms,temp__4124__auto____$1,or__19347__auto__,temp__4124__auto__,___$1){
return (function (p1__37478_SHARP_){return datascript.impl.entity.entity(self__.db,p1__37478_SHARP_.v);
});})(datoms,temp__4124__auto____$1,or__19347__auto__,temp__4124__auto__,___$1))
:((function (datoms,temp__4124__auto____$1,or__19347__auto__,temp__4124__auto__,___$1){
return (function (p1__37479_SHARP_){return p1__37479_SHARP_.v;
});})(datoms,temp__4124__auto____$1,or__19347__auto__,temp__4124__auto__,___$1))
);var val = ((datascript.core.multival_QMARK_(self__.db,attr))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (wrap,datoms,temp__4124__auto____$1,or__19347__auto__,temp__4124__auto__,___$1){
return (function (p1__37480_SHARP_,p2__37481_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37480_SHARP_,(function (){var G__37485 = p2__37481_SHARP_;return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__37485) : wrap.call(null,G__37485));
})());
});})(wrap,datoms,temp__4124__auto____$1,or__19347__auto__,temp__4124__auto__,___$1))
,cljs.core.PersistentHashSet.EMPTY,datoms):(function (){var G__37486 = cljs.core.first(datoms);return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__37486) : wrap.call(null,G__37486));
})());self__.cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,attr,val);
return val;
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
var G__37508 = null;
var G__37508__1 = (function (f){var self__ = this;
var this$ = this;var seq__37487 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__37488 = null;var count__37489 = (0);var i__37490 = (0);while(true){
if((i__37490 < count__37489))
{var vec__37491 = chunk__37488.cljs$core$IIndexed$_nth$arity$2(null,i__37490);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37491,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37491,(1),null);var G__37492_37509 = v;var G__37493_37510 = a;var G__37494_37511 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__37492_37509,G__37493_37510,G__37494_37511) : f.call(null,G__37492_37509,G__37493_37510,G__37494_37511));
{
var G__37512 = seq__37487;
var G__37513 = chunk__37488;
var G__37514 = count__37489;
var G__37515 = (i__37490 + (1));
seq__37487 = G__37512;
chunk__37488 = G__37513;
count__37489 = G__37514;
i__37490 = G__37515;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37487);if(temp__4126__auto__)
{var seq__37487__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37487__$1))
{var c__20813__auto__ = cljs.core.chunk_first(seq__37487__$1);{
var G__37516 = cljs.core.chunk_rest(seq__37487__$1);
var G__37517 = c__20813__auto__;
var G__37518 = cljs.core.count(c__20813__auto__);
var G__37519 = (0);
seq__37487 = G__37516;
chunk__37488 = G__37517;
count__37489 = G__37518;
i__37490 = G__37519;
continue;
}
} else
{var vec__37495 = cljs.core.first(seq__37487__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37495,(1),null);var G__37496_37520 = v;var G__37497_37521 = a;var G__37498_37522 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__37496_37520,G__37497_37521,G__37498_37522) : f.call(null,G__37496_37520,G__37497_37521,G__37498_37522));
{
var G__37523 = cljs.core.next(seq__37487__$1);
var G__37524 = null;
var G__37525 = (0);
var G__37526 = (0);
seq__37487 = G__37523;
chunk__37488 = G__37524;
count__37489 = G__37525;
i__37490 = G__37526;
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
var G__37508__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__37499 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__37500 = null;var count__37501 = (0);var i__37502 = (0);while(true){
if((i__37502 < count__37501))
{var vec__37503 = chunk__37500.cljs$core$IIndexed$_nth$arity$2(null,i__37502);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37503,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37503,(1),null);f.call(use_as_this,v,a,this$);
{
var G__37527 = seq__37499;
var G__37528 = chunk__37500;
var G__37529 = count__37501;
var G__37530 = (i__37502 + (1));
seq__37499 = G__37527;
chunk__37500 = G__37528;
count__37501 = G__37529;
i__37502 = G__37530;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37499);if(temp__4126__auto__)
{var seq__37499__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37499__$1))
{var c__20813__auto__ = cljs.core.chunk_first(seq__37499__$1);{
var G__37531 = cljs.core.chunk_rest(seq__37499__$1);
var G__37532 = c__20813__auto__;
var G__37533 = cljs.core.count(c__20813__auto__);
var G__37534 = (0);
seq__37499 = G__37531;
chunk__37500 = G__37532;
count__37501 = G__37533;
i__37502 = G__37534;
continue;
}
} else
{var vec__37504 = cljs.core.first(seq__37499__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37504,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37504,(1),null);f.call(use_as_this,v,a,this$);
{
var G__37535 = cljs.core.next(seq__37499__$1);
var G__37536 = null;
var G__37537 = (0);
var G__37538 = (0);
seq__37499 = G__37535;
chunk__37500 = G__37536;
count__37501 = G__37537;
i__37502 = G__37538;
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
G__37508 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__37508__1.call(this,f);
case 2:
return G__37508__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37508.cljs$core$IFn$_invoke$arity$1 = G__37508__1;
G__37508.cljs$core$IFn$_invoke$arity$2 = G__37508__2;
return G__37508;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__37505 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__37506 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__37506__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__37506):G__37506);return G__37506__$1;
}
}
});
datascript.impl.entity.Entity.prototype.key_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array(cljs.core.keys(this$));
});
datascript.impl.entity.Entity.prototype.entries = (function (){var self__ = this;
var this$ = this;return cljs.core.entries_iterator(datascript.impl.entity.js_seq(this$));
});
datascript.impl.entity.Entity.prototype.value_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});
datascript.impl.entity.Entity.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_(this$);
});
datascript.impl.entity.Entity.prototype.keys = (function (){var self__ = this;
var this$ = this;return cljs.core.iterator(cljs.core.keys(this$));
});
datascript.impl.entity.Entity.prototype.values = (function (){var self__ = this;
var this$ = this;return cljs.core.iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});
datascript.impl.entity.Entity.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
datascript.impl.entity.Entity.prototype.has = (function (attr){var self__ = this;
var this$ = this;return !((this$.get(attr) == null));
});
datascript.impl.entity.__GT_Entity = (function __GT_Entity(db,eid,touched,cache){return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});
var G__37539_37541 = "datascript.impl.entity.Entity.prototype.get";var G__37540_37542 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__37539_37541,G__37540_37542);
var G__37543_37545 = "datascript.impl.entity.Entity.prototype.has";var G__37544_37546 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__37543_37545,G__37544_37546);
var G__37547_37549 = "datascript.impl.entity.Entity.prototype.forEach";var G__37548_37550 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__37547_37549,G__37548_37550);
var G__37551_37553 = "datascript.impl.entity.Entity.prototype.key_set";var G__37552_37554 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__37551_37553,G__37552_37554);
var G__37555_37557 = "datascript.impl.entity.Entity.prototype.value_set";var G__37556_37558 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__37555_37557,G__37556_37558);
var G__37559_37561 = "datascript.impl.entity.Entity.prototype.entry_set";var G__37560_37562 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__37559_37561,G__37560_37562);
var G__37563_37565 = "datascript.impl.entity.Entity.prototype.keys";var G__37564_37566 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__37563_37565,G__37564_37566);
var G__37567_37569 = "datascript.impl.entity.Entity.prototype.values";var G__37568_37570 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__37567_37569,G__37568_37570);
var G__37571_37573 = "datascript.impl.entity.Entity.prototype.entries";var G__37572_37574 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__37571_37573,G__37572_37574);
var G__37575_37577 = "cljs.core.Iterator.prototype.next";var G__37576_37578 = cljs.core.Iterator.prototype.next;goog.exportSymbol(G__37575_37577,G__37576_37578);
var G__37579_37581 = "cljs.core.EntriesIterator.prototype.next";var G__37580_37582 = cljs.core.EntriesIterator.prototype.next;goog.exportSymbol(G__37579_37581,G__37580_37582);
//# sourceMappingURL=entity.js.map