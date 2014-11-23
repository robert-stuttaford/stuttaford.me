goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){if(datascript.core.multival_QMARK_(db,a))
{if(datascript.core.ref_QMARK_(db,a))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__73541_SHARP_,p2__73542_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73541_SHARP_,datascript.impl.entity.entity(db,p2__73542_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__73543_SHARP_,p2__73544_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73543_SHARP_,p2__73544_SHARP_.v);
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
{var temp__4126__auto___73545 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___73545))
{var datoms_73546 = temp__4126__auto___73545;e.touched = true;
e.cache = datascript.impl.entity.datoms__GT_cache(e.db,datoms_73546);
} else
{}
}
return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__4124__auto__){
return (function (p1__73547_SHARP_,p2__73548_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__73547_SHARP_,datascript.impl.entity.entity(db,p2__73548_SHARP_.e));
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
var iter__21069__auto__ = (function iter__73559(s__73560){return (new cljs.core.LazySeq(null,(function (){var s__73560__$1 = s__73560;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73560__$1);if(temp__4126__auto__)
{var s__73560__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73560__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73560__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73562 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73561 = (0);while(true){
if((i__73561 < size__21068__auto__))
{var vec__73567 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73561);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73567,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73567,(1),null);cljs.core.chunk_append(b__73562,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__73569 = (i__73561 + (1));
i__73561 = G__73569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73562),iter__73559(cljs.core.chunk_rest(s__73560__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73562),null);
}
} else
{var vec__73568 = cljs.core.first(s__73560__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73568,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73568,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__73559(cljs.core.rest(s__73560__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(e.cache);
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
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__73594 = null;
var G__73594__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__73594__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__73594 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__73594__2.call(this,self__,k);
case 3:
return G__73594__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73594.cljs$core$IFn$_invoke$arity$2 = G__73594__2;
G__73594.cljs$core$IFn$_invoke$arity$3 = G__73594__3;
return G__73594;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args73570){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args73570)));
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
{var or__19711__auto__ = (function (){var G__73572 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__73572) : self__.cache.call(null,G__73572));
})();if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;self__.cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,attr,datascript.impl.entity.entity_attr(self__.db,attr,datoms));
var G__73573 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__73573) : self__.cache.call(null,G__73573));
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
var G__73595 = null;
var G__73595__1 = (function (f){var self__ = this;
var this$ = this;var seq__73574 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__73575 = null;var count__73576 = (0);var i__73577 = (0);while(true){
if((i__73577 < count__73576))
{var vec__73578 = chunk__73575.cljs$core$IIndexed$_nth$arity$2(null,i__73577);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73578,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73578,(1),null);var G__73579_73596 = v;var G__73580_73597 = a;var G__73581_73598 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__73579_73596,G__73580_73597,G__73581_73598) : f.call(null,G__73579_73596,G__73580_73597,G__73581_73598));
{
var G__73599 = seq__73574;
var G__73600 = chunk__73575;
var G__73601 = count__73576;
var G__73602 = (i__73577 + (1));
seq__73574 = G__73599;
chunk__73575 = G__73600;
count__73576 = G__73601;
i__73577 = G__73602;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__73574);if(temp__4126__auto__)
{var seq__73574__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__73574__$1))
{var c__21100__auto__ = cljs.core.chunk_first(seq__73574__$1);{
var G__73603 = cljs.core.chunk_rest(seq__73574__$1);
var G__73604 = c__21100__auto__;
var G__73605 = cljs.core.count(c__21100__auto__);
var G__73606 = (0);
seq__73574 = G__73603;
chunk__73575 = G__73604;
count__73576 = G__73605;
i__73577 = G__73606;
continue;
}
} else
{var vec__73582 = cljs.core.first(seq__73574__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73582,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73582,(1),null);var G__73583_73607 = v;var G__73584_73608 = a;var G__73585_73609 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__73583_73607,G__73584_73608,G__73585_73609) : f.call(null,G__73583_73607,G__73584_73608,G__73585_73609));
{
var G__73610 = cljs.core.next(seq__73574__$1);
var G__73611 = null;
var G__73612 = (0);
var G__73613 = (0);
seq__73574 = G__73610;
chunk__73575 = G__73611;
count__73576 = G__73612;
i__73577 = G__73613;
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
var G__73595__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__73586 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__73587 = null;var count__73588 = (0);var i__73589 = (0);while(true){
if((i__73589 < count__73588))
{var vec__73590 = chunk__73587.cljs$core$IIndexed$_nth$arity$2(null,i__73589);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73590,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73590,(1),null);f.call(use_as_this,v,a,this$);
{
var G__73614 = seq__73586;
var G__73615 = chunk__73587;
var G__73616 = count__73588;
var G__73617 = (i__73589 + (1));
seq__73586 = G__73614;
chunk__73587 = G__73615;
count__73588 = G__73616;
i__73589 = G__73617;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__73586);if(temp__4126__auto__)
{var seq__73586__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__73586__$1))
{var c__21100__auto__ = cljs.core.chunk_first(seq__73586__$1);{
var G__73618 = cljs.core.chunk_rest(seq__73586__$1);
var G__73619 = c__21100__auto__;
var G__73620 = cljs.core.count(c__21100__auto__);
var G__73621 = (0);
seq__73586 = G__73618;
chunk__73587 = G__73619;
count__73588 = G__73620;
i__73589 = G__73621;
continue;
}
} else
{var vec__73591 = cljs.core.first(seq__73586__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73591,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73591,(1),null);f.call(use_as_this,v,a,this$);
{
var G__73622 = cljs.core.next(seq__73586__$1);
var G__73623 = null;
var G__73624 = (0);
var G__73625 = (0);
seq__73586 = G__73622;
chunk__73587 = G__73623;
count__73588 = G__73624;
i__73589 = G__73625;
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
G__73595 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__73595__1.call(this,f);
case 2:
return G__73595__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73595.cljs$core$IFn$_invoke$arity$1 = G__73595__1;
G__73595.cljs$core$IFn$_invoke$arity$2 = G__73595__2;
return G__73595;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__73592 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73592,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73592,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73592,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__73593 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__73593__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__73593):G__73593);return G__73593__$1;
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
var G__73626_73628 = "datascript.impl.entity.Entity.prototype.get";var G__73627_73629 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__73626_73628,G__73627_73629);
var G__73630_73632 = "datascript.impl.entity.Entity.prototype.has";var G__73631_73633 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__73630_73632,G__73631_73633);
var G__73634_73636 = "datascript.impl.entity.Entity.prototype.forEach";var G__73635_73637 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__73634_73636,G__73635_73637);
var G__73638_73640 = "datascript.impl.entity.Entity.prototype.key_set";var G__73639_73641 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__73638_73640,G__73639_73641);
var G__73642_73644 = "datascript.impl.entity.Entity.prototype.value_set";var G__73643_73645 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__73642_73644,G__73643_73645);
var G__73646_73648 = "datascript.impl.entity.Entity.prototype.entry_set";var G__73647_73649 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__73646_73648,G__73647_73649);
var G__73650_73652 = "datascript.impl.entity.Entity.prototype.keys";var G__73651_73653 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__73650_73652,G__73651_73653);
var G__73654_73656 = "datascript.impl.entity.Entity.prototype.values";var G__73655_73657 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__73654_73656,G__73655_73657);
var G__73658_73660 = "datascript.impl.entity.Entity.prototype.entries";var G__73659_73661 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__73658_73660,G__73659_73661);
var G__73662_73664 = "cljs.core.ES6Iterator.prototype.next";var G__73663_73665 = cljs.core.ES6Iterator.prototype.next;goog.exportSymbol(G__73662_73664,G__73663_73665);
var G__73666_73668 = "cljs.core.ES6EntriesIterator.prototype.next";var G__73667_73669 = cljs.core.ES6EntriesIterator.prototype.next;goog.exportSymbol(G__73666_73668,G__73667_73669);
//# sourceMappingURL=entity.js.map