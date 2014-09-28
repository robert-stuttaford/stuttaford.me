goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.touch = (function touch(e){if(cljs.core.truth_(e.touched))
{} else
{var temp__4126__auto___54756 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___54756))
{var datoms_54757 = temp__4126__auto___54756;var db_54758 = e.db;var cache_54759 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (db_54758,datoms_54757,temp__4126__auto___54756){
return (function (acc,datom){var a = datom.a;var v = datom.v;if(datascript.core.multival_QMARK_(db_54758,a))
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,a,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,a,cljs.core.PersistentHashSet.EMPTY),v));
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,a,v);
}
});})(db_54758,datoms_54757,temp__4126__auto___54756))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),datoms_54757);e.touched = true;
e.cache = cljs.core.persistent_BANG_(cache_54759);
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
return (function (p1__54760_SHARP_,p2__54761_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__54760_SHARP_,datascript.impl.entity.entity(db,p2__54761_SHARP_.e));
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
var iter__20686__auto__ = (function iter__54772(s__54773){return (new cljs.core.LazySeq(null,(function (){var s__54773__$1 = s__54773;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54773__$1);if(temp__4126__auto__)
{var s__54773__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54773__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__54773__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__54775 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__54774 = (0);while(true){
if((i__54774 < size__20685__auto__))
{var vec__54780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__54774);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54780,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54780,(1),null);cljs.core.chunk_append(b__54775,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__54782 = (i__54774 + (1));
i__54774 = G__54782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54775),iter__54772(cljs.core.chunk_rest(s__54773__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54775),null);
}
} else
{var vec__54781 = cljs.core.first(s__54773__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54781,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54781,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__54772(cljs.core.rest(s__54773__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20686__auto__(e.cache);
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
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__54812 = null;
var G__54812__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__54812__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__54812 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__54812__2.call(this,self__,k);
case 3:
return G__54812__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54812.cljs$core$IFn$_invoke$arity$2 = G__54812__2;
G__54812.cljs$core$IFn$_invoke$arity$3 = G__54812__3;
return G__54812;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args54787){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args54787)));
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
{var or__19289__auto__ = (function (){var G__54789 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__54789) : self__.cache.call(null,G__54789));
})();if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;var wrap = ((datascript.core.ref_QMARK_(self__.db,attr))?((function (datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1){
return (function (p1__54783_SHARP_){return datascript.impl.entity.entity(self__.db,p1__54783_SHARP_.v);
});})(datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1))
:((function (datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1){
return (function (p1__54784_SHARP_){return p1__54784_SHARP_.v;
});})(datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1))
);var val = ((datascript.core.multival_QMARK_(self__.db,attr))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (wrap,datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1){
return (function (p1__54785_SHARP_,p2__54786_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__54785_SHARP_,(function (){var G__54790 = p2__54786_SHARP_;return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__54790) : wrap.call(null,G__54790));
})());
});})(wrap,datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1))
,cljs.core.PersistentHashSet.EMPTY,datoms):(function (){var G__54791 = cljs.core.first(datoms);return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__54791) : wrap.call(null,G__54791));
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
var G__54813 = null;
var G__54813__1 = (function (f){var self__ = this;
var this$ = this;var seq__54792 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__54793 = null;var count__54794 = (0);var i__54795 = (0);while(true){
if((i__54795 < count__54794))
{var vec__54796 = chunk__54793.cljs$core$IIndexed$_nth$arity$2(null,i__54795);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54796,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54796,(1),null);var G__54797_54814 = v;var G__54798_54815 = a;var G__54799_54816 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__54797_54814,G__54798_54815,G__54799_54816) : f.call(null,G__54797_54814,G__54798_54815,G__54799_54816));
{
var G__54817 = seq__54792;
var G__54818 = chunk__54793;
var G__54819 = count__54794;
var G__54820 = (i__54795 + (1));
seq__54792 = G__54817;
chunk__54793 = G__54818;
count__54794 = G__54819;
i__54795 = G__54820;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__54792);if(temp__4126__auto__)
{var seq__54792__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__54792__$1))
{var c__20735__auto__ = cljs.core.chunk_first(seq__54792__$1);{
var G__54821 = cljs.core.chunk_rest(seq__54792__$1);
var G__54822 = c__20735__auto__;
var G__54823 = cljs.core.count(c__20735__auto__);
var G__54824 = (0);
seq__54792 = G__54821;
chunk__54793 = G__54822;
count__54794 = G__54823;
i__54795 = G__54824;
continue;
}
} else
{var vec__54800 = cljs.core.first(seq__54792__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54800,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54800,(1),null);var G__54801_54825 = v;var G__54802_54826 = a;var G__54803_54827 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__54801_54825,G__54802_54826,G__54803_54827) : f.call(null,G__54801_54825,G__54802_54826,G__54803_54827));
{
var G__54828 = cljs.core.next(seq__54792__$1);
var G__54829 = null;
var G__54830 = (0);
var G__54831 = (0);
seq__54792 = G__54828;
chunk__54793 = G__54829;
count__54794 = G__54830;
i__54795 = G__54831;
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
var G__54813__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__54804 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__54805 = null;var count__54806 = (0);var i__54807 = (0);while(true){
if((i__54807 < count__54806))
{var vec__54808 = chunk__54805.cljs$core$IIndexed$_nth$arity$2(null,i__54807);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54808,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54808,(1),null);f.call(use_as_this,v,a,this$);
{
var G__54832 = seq__54804;
var G__54833 = chunk__54805;
var G__54834 = count__54806;
var G__54835 = (i__54807 + (1));
seq__54804 = G__54832;
chunk__54805 = G__54833;
count__54806 = G__54834;
i__54807 = G__54835;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__54804);if(temp__4126__auto__)
{var seq__54804__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__54804__$1))
{var c__20735__auto__ = cljs.core.chunk_first(seq__54804__$1);{
var G__54836 = cljs.core.chunk_rest(seq__54804__$1);
var G__54837 = c__20735__auto__;
var G__54838 = cljs.core.count(c__20735__auto__);
var G__54839 = (0);
seq__54804 = G__54836;
chunk__54805 = G__54837;
count__54806 = G__54838;
i__54807 = G__54839;
continue;
}
} else
{var vec__54809 = cljs.core.first(seq__54804__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54809,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54809,(1),null);f.call(use_as_this,v,a,this$);
{
var G__54840 = cljs.core.next(seq__54804__$1);
var G__54841 = null;
var G__54842 = (0);
var G__54843 = (0);
seq__54804 = G__54840;
chunk__54805 = G__54841;
count__54806 = G__54842;
i__54807 = G__54843;
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
G__54813 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__54813__1.call(this,f);
case 2:
return G__54813__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54813.cljs$core$IFn$_invoke$arity$1 = G__54813__1;
G__54813.cljs$core$IFn$_invoke$arity$2 = G__54813__2;
return G__54813;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__54810 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54810,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54810,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54810,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__54811 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__54811__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__54811):G__54811);return G__54811__$1;
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
var G__54844_54846 = "datascript.impl.entity.Entity.prototype.get";var G__54845_54847 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__54844_54846,G__54845_54847);
var G__54848_54850 = "datascript.impl.entity.Entity.prototype.has";var G__54849_54851 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__54848_54850,G__54849_54851);
var G__54852_54854 = "datascript.impl.entity.Entity.prototype.forEach";var G__54853_54855 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__54852_54854,G__54853_54855);
var G__54856_54858 = "datascript.impl.entity.Entity.prototype.key_set";var G__54857_54859 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__54856_54858,G__54857_54859);
var G__54860_54862 = "datascript.impl.entity.Entity.prototype.value_set";var G__54861_54863 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__54860_54862,G__54861_54863);
var G__54864_54866 = "datascript.impl.entity.Entity.prototype.entry_set";var G__54865_54867 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__54864_54866,G__54865_54867);
var G__54868_54870 = "datascript.impl.entity.Entity.prototype.keys";var G__54869_54871 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__54868_54870,G__54869_54871);
var G__54872_54874 = "datascript.impl.entity.Entity.prototype.values";var G__54873_54875 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__54872_54874,G__54873_54875);
var G__54876_54878 = "datascript.impl.entity.Entity.prototype.entries";var G__54877_54879 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__54876_54878,G__54877_54879);
var G__54880_54882 = "cljs.core.Iterator.prototype.next";var G__54881_54883 = cljs.core.Iterator.prototype.next;goog.exportSymbol(G__54880_54882,G__54881_54883);
var G__54884_54886 = "cljs.core.EntriesIterator.prototype.next";var G__54885_54887 = cljs.core.EntriesIterator.prototype.next;goog.exportSymbol(G__54884_54886,G__54885_54887);
//# sourceMappingURL=entity.js.map