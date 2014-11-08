goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){if(datascript.core.multival_QMARK_(db,a))
{if(datascript.core.ref_QMARK_(db,a))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54569_SHARP_,p2__54570_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__54569_SHARP_,datascript.impl.entity.entity(db,p2__54570_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54571_SHARP_,p2__54572_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__54571_SHARP_,p2__54572_SHARP_.v);
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
{var temp__4126__auto___54573 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___54573))
{var datoms_54574 = temp__4126__auto___54573;e.touched = true;
e.cache = datascript.impl.entity.datoms__GT_cache(e.db,datoms_54574);
} else
{}
}
return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__4124__auto__){
return (function (p1__54575_SHARP_,p2__54576_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__54575_SHARP_,datascript.impl.entity.entity(db,p2__54576_SHARP_.e));
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
var iter__20990__auto__ = (function iter__54587(s__54588){return (new cljs.core.LazySeq(null,(function (){var s__54588__$1 = s__54588;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54588__$1);if(temp__4126__auto__)
{var s__54588__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54588__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__54588__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__54590 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__54589 = (0);while(true){
if((i__54589 < size__20989__auto__))
{var vec__54595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__54589);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54595,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54595,(1),null);cljs.core.chunk_append(b__54590,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__54597 = (i__54589 + (1));
i__54589 = G__54597;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54590),iter__54587(cljs.core.chunk_rest(s__54588__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54590),null);
}
} else
{var vec__54596 = cljs.core.first(s__54588__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54596,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54596,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__54587(cljs.core.rest(s__54588__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(e.cache);
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
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__54622 = null;
var G__54622__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__54622__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__54622 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__54622__2.call(this,self__,k);
case 3:
return G__54622__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54622.cljs$core$IFn$_invoke$arity$2 = G__54622__2;
G__54622.cljs$core$IFn$_invoke$arity$3 = G__54622__3;
return G__54622;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args54598){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args54598)));
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
{var or__19586__auto__ = (function (){var G__54600 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__54600) : self__.cache.call(null,G__54600));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;self__.cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,attr,datascript.impl.entity.entity_attr(self__.db,attr,datoms));
var G__54601 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__54601) : self__.cache.call(null,G__54601));
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
var G__54623 = null;
var G__54623__1 = (function (f){var self__ = this;
var this$ = this;var seq__54602 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__54603 = null;var count__54604 = (0);var i__54605 = (0);while(true){
if((i__54605 < count__54604))
{var vec__54606 = chunk__54603.cljs$core$IIndexed$_nth$arity$2(null,i__54605);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54606,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54606,(1),null);var G__54607_54624 = v;var G__54608_54625 = a;var G__54609_54626 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__54607_54624,G__54608_54625,G__54609_54626) : f.call(null,G__54607_54624,G__54608_54625,G__54609_54626));
{
var G__54627 = seq__54602;
var G__54628 = chunk__54603;
var G__54629 = count__54604;
var G__54630 = (i__54605 + (1));
seq__54602 = G__54627;
chunk__54603 = G__54628;
count__54604 = G__54629;
i__54605 = G__54630;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__54602);if(temp__4126__auto__)
{var seq__54602__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__54602__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__54602__$1);{
var G__54631 = cljs.core.chunk_rest(seq__54602__$1);
var G__54632 = c__21046__auto__;
var G__54633 = cljs.core.count(c__21046__auto__);
var G__54634 = (0);
seq__54602 = G__54631;
chunk__54603 = G__54632;
count__54604 = G__54633;
i__54605 = G__54634;
continue;
}
} else
{var vec__54610 = cljs.core.first(seq__54602__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54610,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54610,(1),null);var G__54611_54635 = v;var G__54612_54636 = a;var G__54613_54637 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__54611_54635,G__54612_54636,G__54613_54637) : f.call(null,G__54611_54635,G__54612_54636,G__54613_54637));
{
var G__54638 = cljs.core.next(seq__54602__$1);
var G__54639 = null;
var G__54640 = (0);
var G__54641 = (0);
seq__54602 = G__54638;
chunk__54603 = G__54639;
count__54604 = G__54640;
i__54605 = G__54641;
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
var G__54623__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__54614 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__54615 = null;var count__54616 = (0);var i__54617 = (0);while(true){
if((i__54617 < count__54616))
{var vec__54618 = chunk__54615.cljs$core$IIndexed$_nth$arity$2(null,i__54617);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54618,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54618,(1),null);f.call(use_as_this,v,a,this$);
{
var G__54642 = seq__54614;
var G__54643 = chunk__54615;
var G__54644 = count__54616;
var G__54645 = (i__54617 + (1));
seq__54614 = G__54642;
chunk__54615 = G__54643;
count__54616 = G__54644;
i__54617 = G__54645;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__54614);if(temp__4126__auto__)
{var seq__54614__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__54614__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__54614__$1);{
var G__54646 = cljs.core.chunk_rest(seq__54614__$1);
var G__54647 = c__21046__auto__;
var G__54648 = cljs.core.count(c__21046__auto__);
var G__54649 = (0);
seq__54614 = G__54646;
chunk__54615 = G__54647;
count__54616 = G__54648;
i__54617 = G__54649;
continue;
}
} else
{var vec__54619 = cljs.core.first(seq__54614__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54619,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54619,(1),null);f.call(use_as_this,v,a,this$);
{
var G__54650 = cljs.core.next(seq__54614__$1);
var G__54651 = null;
var G__54652 = (0);
var G__54653 = (0);
seq__54614 = G__54650;
chunk__54615 = G__54651;
count__54616 = G__54652;
i__54617 = G__54653;
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
G__54623 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__54623__1.call(this,f);
case 2:
return G__54623__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54623.cljs$core$IFn$_invoke$arity$1 = G__54623__1;
G__54623.cljs$core$IFn$_invoke$arity$2 = G__54623__2;
return G__54623;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__54620 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54620,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54620,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54620,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__54621 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__54621__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__54621):G__54621);return G__54621__$1;
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
var G__54654_54656 = "datascript.impl.entity.Entity.prototype.get";var G__54655_54657 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__54654_54656,G__54655_54657);
var G__54658_54660 = "datascript.impl.entity.Entity.prototype.has";var G__54659_54661 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__54658_54660,G__54659_54661);
var G__54662_54664 = "datascript.impl.entity.Entity.prototype.forEach";var G__54663_54665 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__54662_54664,G__54663_54665);
var G__54666_54668 = "datascript.impl.entity.Entity.prototype.key_set";var G__54667_54669 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__54666_54668,G__54667_54669);
var G__54670_54672 = "datascript.impl.entity.Entity.prototype.value_set";var G__54671_54673 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__54670_54672,G__54671_54673);
var G__54674_54676 = "datascript.impl.entity.Entity.prototype.entry_set";var G__54675_54677 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__54674_54676,G__54675_54677);
var G__54678_54680 = "datascript.impl.entity.Entity.prototype.keys";var G__54679_54681 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__54678_54680,G__54679_54681);
var G__54682_54684 = "datascript.impl.entity.Entity.prototype.values";var G__54683_54685 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__54682_54684,G__54683_54685);
var G__54686_54688 = "datascript.impl.entity.Entity.prototype.entries";var G__54687_54689 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__54686_54688,G__54687_54689);
var G__54690_54692 = "cljs.core.ES6Iterator.prototype.next";var G__54691_54693 = cljs.core.ES6Iterator.prototype.next;goog.exportSymbol(G__54690_54692,G__54691_54693);
var G__54694_54696 = "cljs.core.ES6EntriesIterator.prototype.next";var G__54695_54697 = cljs.core.ES6EntriesIterator.prototype.next;goog.exportSymbol(G__54694_54696,G__54695_54697);
//# sourceMappingURL=entity.js.map