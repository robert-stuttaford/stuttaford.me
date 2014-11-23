goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){if(datascript.core.multival_QMARK_(db,a))
{if(datascript.core.ref_QMARK_(db,a))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37427_SHARP_,p2__37428_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37427_SHARP_,datascript.impl.entity.entity(db,p2__37428_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37429_SHARP_,p2__37430_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37429_SHARP_,p2__37430_SHARP_.v);
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
{var temp__4126__auto___37431 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___37431))
{var datoms_37432 = temp__4126__auto___37431;e.touched = true;
e.cache = datascript.impl.entity.datoms__GT_cache(e.db,datoms_37432);
} else
{}
}
return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__4124__auto__){
return (function (p1__37433_SHARP_,p2__37434_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37433_SHARP_,datascript.impl.entity.entity(db,p2__37434_SHARP_.e));
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
var iter__21074__auto__ = (function iter__37445(s__37446){return (new cljs.core.LazySeq(null,(function (){var s__37446__$1 = s__37446;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37446__$1);if(temp__4126__auto__)
{var s__37446__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37446__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__37446__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__37448 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__37447 = (0);while(true){
if((i__37447 < size__21073__auto__))
{var vec__37453 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__37447);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37453,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37453,(1),null);cljs.core.chunk_append(b__37448,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__37455 = (i__37447 + (1));
i__37447 = G__37455;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37448),iter__37445(cljs.core.chunk_rest(s__37446__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37448),null);
}
} else
{var vec__37454 = cljs.core.first(s__37446__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__37445(cljs.core.rest(s__37446__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(e.cache);
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
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__37480 = null;
var G__37480__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__37480__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__37480 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__37480__2.call(this,self__,k);
case 3:
return G__37480__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37480.cljs$core$IFn$_invoke$arity$2 = G__37480__2;
G__37480.cljs$core$IFn$_invoke$arity$3 = G__37480__3;
return G__37480;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args37456){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37456)));
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
{var or__19663__auto__ = (function (){var G__37458 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__37458) : self__.cache.call(null,G__37458));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;self__.cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,attr,datascript.impl.entity.entity_attr(self__.db,attr,datoms));
var G__37459 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__37459) : self__.cache.call(null,G__37459));
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
var G__37481 = null;
var G__37481__1 = (function (f){var self__ = this;
var this$ = this;var seq__37460 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__37461 = null;var count__37462 = (0);var i__37463 = (0);while(true){
if((i__37463 < count__37462))
{var vec__37464 = chunk__37461.cljs$core$IIndexed$_nth$arity$2(null,i__37463);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37464,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37464,(1),null);var G__37465_37482 = v;var G__37466_37483 = a;var G__37467_37484 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__37465_37482,G__37466_37483,G__37467_37484) : f.call(null,G__37465_37482,G__37466_37483,G__37467_37484));
{
var G__37485 = seq__37460;
var G__37486 = chunk__37461;
var G__37487 = count__37462;
var G__37488 = (i__37463 + (1));
seq__37460 = G__37485;
chunk__37461 = G__37486;
count__37462 = G__37487;
i__37463 = G__37488;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37460);if(temp__4126__auto__)
{var seq__37460__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37460__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__37460__$1);{
var G__37489 = cljs.core.chunk_rest(seq__37460__$1);
var G__37490 = c__21126__auto__;
var G__37491 = cljs.core.count(c__21126__auto__);
var G__37492 = (0);
seq__37460 = G__37489;
chunk__37461 = G__37490;
count__37462 = G__37491;
i__37463 = G__37492;
continue;
}
} else
{var vec__37468 = cljs.core.first(seq__37460__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37468,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37468,(1),null);var G__37469_37493 = v;var G__37470_37494 = a;var G__37471_37495 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__37469_37493,G__37470_37494,G__37471_37495) : f.call(null,G__37469_37493,G__37470_37494,G__37471_37495));
{
var G__37496 = cljs.core.next(seq__37460__$1);
var G__37497 = null;
var G__37498 = (0);
var G__37499 = (0);
seq__37460 = G__37496;
chunk__37461 = G__37497;
count__37462 = G__37498;
i__37463 = G__37499;
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
var G__37481__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__37472 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__37473 = null;var count__37474 = (0);var i__37475 = (0);while(true){
if((i__37475 < count__37474))
{var vec__37476 = chunk__37473.cljs$core$IIndexed$_nth$arity$2(null,i__37475);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37476,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37476,(1),null);f.call(use_as_this,v,a,this$);
{
var G__37500 = seq__37472;
var G__37501 = chunk__37473;
var G__37502 = count__37474;
var G__37503 = (i__37475 + (1));
seq__37472 = G__37500;
chunk__37473 = G__37501;
count__37474 = G__37502;
i__37475 = G__37503;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37472);if(temp__4126__auto__)
{var seq__37472__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37472__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__37472__$1);{
var G__37504 = cljs.core.chunk_rest(seq__37472__$1);
var G__37505 = c__21126__auto__;
var G__37506 = cljs.core.count(c__21126__auto__);
var G__37507 = (0);
seq__37472 = G__37504;
chunk__37473 = G__37505;
count__37474 = G__37506;
i__37475 = G__37507;
continue;
}
} else
{var vec__37477 = cljs.core.first(seq__37472__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37477,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37477,(1),null);f.call(use_as_this,v,a,this$);
{
var G__37508 = cljs.core.next(seq__37472__$1);
var G__37509 = null;
var G__37510 = (0);
var G__37511 = (0);
seq__37472 = G__37508;
chunk__37473 = G__37509;
count__37474 = G__37510;
i__37475 = G__37511;
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
G__37481 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__37481__1.call(this,f);
case 2:
return G__37481__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37481.cljs$core$IFn$_invoke$arity$1 = G__37481__1;
G__37481.cljs$core$IFn$_invoke$arity$2 = G__37481__2;
return G__37481;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__37478 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37478,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37478,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37478,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__37479 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__37479__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__37479):G__37479);return G__37479__$1;
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
var G__37512_37514 = "datascript.impl.entity.Entity.prototype.get";var G__37513_37515 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__37512_37514,G__37513_37515);
var G__37516_37518 = "datascript.impl.entity.Entity.prototype.has";var G__37517_37519 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__37516_37518,G__37517_37519);
var G__37520_37522 = "datascript.impl.entity.Entity.prototype.forEach";var G__37521_37523 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__37520_37522,G__37521_37523);
var G__37524_37526 = "datascript.impl.entity.Entity.prototype.key_set";var G__37525_37527 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__37524_37526,G__37525_37527);
var G__37528_37530 = "datascript.impl.entity.Entity.prototype.value_set";var G__37529_37531 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__37528_37530,G__37529_37531);
var G__37532_37534 = "datascript.impl.entity.Entity.prototype.entry_set";var G__37533_37535 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__37532_37534,G__37533_37535);
var G__37536_37538 = "datascript.impl.entity.Entity.prototype.keys";var G__37537_37539 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__37536_37538,G__37537_37539);
var G__37540_37542 = "datascript.impl.entity.Entity.prototype.values";var G__37541_37543 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__37540_37542,G__37541_37543);
var G__37544_37546 = "datascript.impl.entity.Entity.prototype.entries";var G__37545_37547 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__37544_37546,G__37545_37547);
var G__37548_37550 = "cljs.core.ES6Iterator.prototype.next";var G__37549_37551 = cljs.core.ES6Iterator.prototype.next;goog.exportSymbol(G__37548_37550,G__37549_37551);
var G__37552_37554 = "cljs.core.ES6EntriesIterator.prototype.next";var G__37553_37555 = cljs.core.ES6EntriesIterator.prototype.next;goog.exportSymbol(G__37552_37554,G__37553_37555);
//# sourceMappingURL=entity.js.map