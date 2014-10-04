goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.touch = (function touch(e){if(cljs.core.truth_(e.touched))
{} else
{var temp__4126__auto___37493 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___37493))
{var datoms_37494 = temp__4126__auto___37493;var db_37495 = e.db;var cache_37496 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (db_37495,datoms_37494,temp__4126__auto___37493){
return (function (acc,datom){var a = datom.a;var v = datom.v;if(datascript.core.multival_QMARK_(db_37495,a))
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,a,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,a,cljs.core.PersistentHashSet.EMPTY),v));
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,a,v);
}
});})(db_37495,datoms_37494,temp__4126__auto___37493))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),datoms_37494);e.touched = true;
e.cache = cljs.core.persistent_BANG_(cache_37496);
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
return (function (p1__37497_SHARP_,p2__37498_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37497_SHARP_,datascript.impl.entity.entity(db,p2__37498_SHARP_.e));
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
var iter__20662__auto__ = (function iter__37509(s__37510){return (new cljs.core.LazySeq(null,(function (){var s__37510__$1 = s__37510;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37510__$1);if(temp__4126__auto__)
{var s__37510__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37510__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__37510__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__37512 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__37511 = (0);while(true){
if((i__37511 < size__20661__auto__))
{var vec__37517 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__37511);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37517,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37517,(1),null);cljs.core.chunk_append(b__37512,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__37519 = (i__37511 + (1));
i__37511 = G__37519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37512),iter__37509(cljs.core.chunk_rest(s__37510__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37512),null);
}
} else
{var vec__37518 = cljs.core.first(s__37510__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37518,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37518,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__37509(cljs.core.rest(s__37510__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(e.cache);
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
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__37549 = null;
var G__37549__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__37549__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__37549 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__37549__2.call(this,self__,k);
case 3:
return G__37549__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37549.cljs$core$IFn$_invoke$arity$2 = G__37549__2;
G__37549.cljs$core$IFn$_invoke$arity$3 = G__37549__3;
return G__37549;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args37524){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37524)));
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
{var or__19267__auto__ = (function (){var G__37526 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__37526) : self__.cache.call(null,G__37526));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;var wrap = ((datascript.core.ref_QMARK_(self__.db,attr))?((function (datoms,temp__4124__auto____$1,or__19267__auto__,temp__4124__auto__,___$1){
return (function (p1__37520_SHARP_){return datascript.impl.entity.entity(self__.db,p1__37520_SHARP_.v);
});})(datoms,temp__4124__auto____$1,or__19267__auto__,temp__4124__auto__,___$1))
:((function (datoms,temp__4124__auto____$1,or__19267__auto__,temp__4124__auto__,___$1){
return (function (p1__37521_SHARP_){return p1__37521_SHARP_.v;
});})(datoms,temp__4124__auto____$1,or__19267__auto__,temp__4124__auto__,___$1))
);var val = ((datascript.core.multival_QMARK_(self__.db,attr))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (wrap,datoms,temp__4124__auto____$1,or__19267__auto__,temp__4124__auto__,___$1){
return (function (p1__37522_SHARP_,p2__37523_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37522_SHARP_,(function (){var G__37527 = p2__37523_SHARP_;return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__37527) : wrap.call(null,G__37527));
})());
});})(wrap,datoms,temp__4124__auto____$1,or__19267__auto__,temp__4124__auto__,___$1))
,cljs.core.PersistentHashSet.EMPTY,datoms):(function (){var G__37528 = cljs.core.first(datoms);return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__37528) : wrap.call(null,G__37528));
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
var G__37550 = null;
var G__37550__1 = (function (f){var self__ = this;
var this$ = this;var seq__37529 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__37530 = null;var count__37531 = (0);var i__37532 = (0);while(true){
if((i__37532 < count__37531))
{var vec__37533 = chunk__37530.cljs$core$IIndexed$_nth$arity$2(null,i__37532);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533,(1),null);var G__37534_37551 = v;var G__37535_37552 = a;var G__37536_37553 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__37534_37551,G__37535_37552,G__37536_37553) : f.call(null,G__37534_37551,G__37535_37552,G__37536_37553));
{
var G__37554 = seq__37529;
var G__37555 = chunk__37530;
var G__37556 = count__37531;
var G__37557 = (i__37532 + (1));
seq__37529 = G__37554;
chunk__37530 = G__37555;
count__37531 = G__37556;
i__37532 = G__37557;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37529);if(temp__4126__auto__)
{var seq__37529__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37529__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__37529__$1);{
var G__37558 = cljs.core.chunk_rest(seq__37529__$1);
var G__37559 = c__20699__auto__;
var G__37560 = cljs.core.count(c__20699__auto__);
var G__37561 = (0);
seq__37529 = G__37558;
chunk__37530 = G__37559;
count__37531 = G__37560;
i__37532 = G__37561;
continue;
}
} else
{var vec__37537 = cljs.core.first(seq__37529__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37537,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37537,(1),null);var G__37538_37562 = v;var G__37539_37563 = a;var G__37540_37564 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__37538_37562,G__37539_37563,G__37540_37564) : f.call(null,G__37538_37562,G__37539_37563,G__37540_37564));
{
var G__37565 = cljs.core.next(seq__37529__$1);
var G__37566 = null;
var G__37567 = (0);
var G__37568 = (0);
seq__37529 = G__37565;
chunk__37530 = G__37566;
count__37531 = G__37567;
i__37532 = G__37568;
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
var G__37550__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__37541 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__37542 = null;var count__37543 = (0);var i__37544 = (0);while(true){
if((i__37544 < count__37543))
{var vec__37545 = chunk__37542.cljs$core$IIndexed$_nth$arity$2(null,i__37544);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37545,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37545,(1),null);f.call(use_as_this,v,a,this$);
{
var G__37569 = seq__37541;
var G__37570 = chunk__37542;
var G__37571 = count__37543;
var G__37572 = (i__37544 + (1));
seq__37541 = G__37569;
chunk__37542 = G__37570;
count__37543 = G__37571;
i__37544 = G__37572;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37541);if(temp__4126__auto__)
{var seq__37541__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37541__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__37541__$1);{
var G__37573 = cljs.core.chunk_rest(seq__37541__$1);
var G__37574 = c__20699__auto__;
var G__37575 = cljs.core.count(c__20699__auto__);
var G__37576 = (0);
seq__37541 = G__37573;
chunk__37542 = G__37574;
count__37543 = G__37575;
i__37544 = G__37576;
continue;
}
} else
{var vec__37546 = cljs.core.first(seq__37541__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546,(1),null);f.call(use_as_this,v,a,this$);
{
var G__37577 = cljs.core.next(seq__37541__$1);
var G__37578 = null;
var G__37579 = (0);
var G__37580 = (0);
seq__37541 = G__37577;
chunk__37542 = G__37578;
count__37543 = G__37579;
i__37544 = G__37580;
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
G__37550 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__37550__1.call(this,f);
case 2:
return G__37550__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37550.cljs$core$IFn$_invoke$arity$1 = G__37550__1;
G__37550.cljs$core$IFn$_invoke$arity$2 = G__37550__2;
return G__37550;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__37547 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__37548 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__37548__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__37548):G__37548);return G__37548__$1;
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
var G__37581_37583 = "datascript.impl.entity.Entity.prototype.get";var G__37582_37584 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__37581_37583,G__37582_37584);
var G__37585_37587 = "datascript.impl.entity.Entity.prototype.has";var G__37586_37588 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__37585_37587,G__37586_37588);
var G__37589_37591 = "datascript.impl.entity.Entity.prototype.forEach";var G__37590_37592 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__37589_37591,G__37590_37592);
var G__37593_37595 = "datascript.impl.entity.Entity.prototype.key_set";var G__37594_37596 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__37593_37595,G__37594_37596);
var G__37597_37599 = "datascript.impl.entity.Entity.prototype.value_set";var G__37598_37600 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__37597_37599,G__37598_37600);
var G__37601_37603 = "datascript.impl.entity.Entity.prototype.entry_set";var G__37602_37604 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__37601_37603,G__37602_37604);
var G__37605_37607 = "datascript.impl.entity.Entity.prototype.keys";var G__37606_37608 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__37605_37607,G__37606_37608);
var G__37609_37611 = "datascript.impl.entity.Entity.prototype.values";var G__37610_37612 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__37609_37611,G__37610_37612);
var G__37613_37615 = "datascript.impl.entity.Entity.prototype.entries";var G__37614_37616 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__37613_37615,G__37614_37616);
var G__37617_37619 = "cljs.core.Iterator.prototype.next";var G__37618_37620 = cljs.core.Iterator.prototype.next;goog.exportSymbol(G__37617_37619,G__37618_37620);
var G__37621_37623 = "cljs.core.EntriesIterator.prototype.next";var G__37622_37624 = cljs.core.EntriesIterator.prototype.next;goog.exportSymbol(G__37621_37623,G__37622_37624);
//# sourceMappingURL=entity.js.map