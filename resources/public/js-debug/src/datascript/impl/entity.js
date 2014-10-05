goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.touch = (function touch(e){if(cljs.core.truth_(e.touched))
{} else
{var temp__4126__auto___48127 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___48127))
{var datoms_48128 = temp__4126__auto___48127;var db_48129 = e.db;var cache_48130 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (db_48129,datoms_48128,temp__4126__auto___48127){
return (function (acc,datom){var a = datom.a;var v = datom.v;if(datascript.core.multival_QMARK_(db_48129,a))
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,a,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,a,cljs.core.PersistentHashSet.EMPTY),v));
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,a,v);
}
});})(db_48129,datoms_48128,temp__4126__auto___48127))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),datoms_48128);e.touched = true;
e.cache = cljs.core.persistent_BANG_(cache_48130);
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
return (function (p1__48131_SHARP_,p2__48132_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48131_SHARP_,datascript.impl.entity.entity(db,p2__48132_SHARP_.e));
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
var iter__20684__auto__ = (function iter__48143(s__48144){return (new cljs.core.LazySeq(null,(function (){var s__48144__$1 = s__48144;while(true){
var temp__4126__auto__ = cljs.core.seq(s__48144__$1);if(temp__4126__auto__)
{var s__48144__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__48144__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__48144__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__48146 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__48145 = (0);while(true){
if((i__48145 < size__20683__auto__))
{var vec__48151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__48145);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48151,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48151,(1),null);cljs.core.chunk_append(b__48146,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__48153 = (i__48145 + (1));
i__48145 = G__48153;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__48146),iter__48143(cljs.core.chunk_rest(s__48144__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__48146),null);
}
} else
{var vec__48152 = cljs.core.first(s__48144__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48152,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48152,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__48143(cljs.core.rest(s__48144__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(e.cache);
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
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__48183 = null;
var G__48183__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__48183__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__48183 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__48183__2.call(this,self__,k);
case 3:
return G__48183__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48183.cljs$core$IFn$_invoke$arity$2 = G__48183__2;
G__48183.cljs$core$IFn$_invoke$arity$3 = G__48183__3;
return G__48183;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args48158){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48158)));
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
{var or__19289__auto__ = (function (){var G__48160 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__48160) : self__.cache.call(null,G__48160));
})();if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;var wrap = ((datascript.core.ref_QMARK_(self__.db,attr))?((function (datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1){
return (function (p1__48154_SHARP_){return datascript.impl.entity.entity(self__.db,p1__48154_SHARP_.v);
});})(datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1))
:((function (datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1){
return (function (p1__48155_SHARP_){return p1__48155_SHARP_.v;
});})(datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1))
);var val = ((datascript.core.multival_QMARK_(self__.db,attr))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (wrap,datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1){
return (function (p1__48156_SHARP_,p2__48157_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48156_SHARP_,(function (){var G__48161 = p2__48157_SHARP_;return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__48161) : wrap.call(null,G__48161));
})());
});})(wrap,datoms,temp__4124__auto____$1,or__19289__auto__,temp__4124__auto__,___$1))
,cljs.core.PersistentHashSet.EMPTY,datoms):(function (){var G__48162 = cljs.core.first(datoms);return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__48162) : wrap.call(null,G__48162));
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
var G__48184 = null;
var G__48184__1 = (function (f){var self__ = this;
var this$ = this;var seq__48163 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__48164 = null;var count__48165 = (0);var i__48166 = (0);while(true){
if((i__48166 < count__48165))
{var vec__48167 = chunk__48164.cljs$core$IIndexed$_nth$arity$2(null,i__48166);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167,(1),null);var G__48168_48185 = v;var G__48169_48186 = a;var G__48170_48187 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48168_48185,G__48169_48186,G__48170_48187) : f.call(null,G__48168_48185,G__48169_48186,G__48170_48187));
{
var G__48188 = seq__48163;
var G__48189 = chunk__48164;
var G__48190 = count__48165;
var G__48191 = (i__48166 + (1));
seq__48163 = G__48188;
chunk__48164 = G__48189;
count__48165 = G__48190;
i__48166 = G__48191;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__48163);if(temp__4126__auto__)
{var seq__48163__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__48163__$1))
{var c__20721__auto__ = cljs.core.chunk_first(seq__48163__$1);{
var G__48192 = cljs.core.chunk_rest(seq__48163__$1);
var G__48193 = c__20721__auto__;
var G__48194 = cljs.core.count(c__20721__auto__);
var G__48195 = (0);
seq__48163 = G__48192;
chunk__48164 = G__48193;
count__48165 = G__48194;
i__48166 = G__48195;
continue;
}
} else
{var vec__48171 = cljs.core.first(seq__48163__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48171,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48171,(1),null);var G__48172_48196 = v;var G__48173_48197 = a;var G__48174_48198 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48172_48196,G__48173_48197,G__48174_48198) : f.call(null,G__48172_48196,G__48173_48197,G__48174_48198));
{
var G__48199 = cljs.core.next(seq__48163__$1);
var G__48200 = null;
var G__48201 = (0);
var G__48202 = (0);
seq__48163 = G__48199;
chunk__48164 = G__48200;
count__48165 = G__48201;
i__48166 = G__48202;
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
var G__48184__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__48175 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__48176 = null;var count__48177 = (0);var i__48178 = (0);while(true){
if((i__48178 < count__48177))
{var vec__48179 = chunk__48176.cljs$core$IIndexed$_nth$arity$2(null,i__48178);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48179,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48179,(1),null);f.call(use_as_this,v,a,this$);
{
var G__48203 = seq__48175;
var G__48204 = chunk__48176;
var G__48205 = count__48177;
var G__48206 = (i__48178 + (1));
seq__48175 = G__48203;
chunk__48176 = G__48204;
count__48177 = G__48205;
i__48178 = G__48206;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__48175);if(temp__4126__auto__)
{var seq__48175__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__48175__$1))
{var c__20721__auto__ = cljs.core.chunk_first(seq__48175__$1);{
var G__48207 = cljs.core.chunk_rest(seq__48175__$1);
var G__48208 = c__20721__auto__;
var G__48209 = cljs.core.count(c__20721__auto__);
var G__48210 = (0);
seq__48175 = G__48207;
chunk__48176 = G__48208;
count__48177 = G__48209;
i__48178 = G__48210;
continue;
}
} else
{var vec__48180 = cljs.core.first(seq__48175__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48180,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48180,(1),null);f.call(use_as_this,v,a,this$);
{
var G__48211 = cljs.core.next(seq__48175__$1);
var G__48212 = null;
var G__48213 = (0);
var G__48214 = (0);
seq__48175 = G__48211;
chunk__48176 = G__48212;
count__48177 = G__48213;
i__48178 = G__48214;
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
G__48184 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__48184__1.call(this,f);
case 2:
return G__48184__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48184.cljs$core$IFn$_invoke$arity$1 = G__48184__1;
G__48184.cljs$core$IFn$_invoke$arity$2 = G__48184__2;
return G__48184;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__48181 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48181,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48181,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48181,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__48182 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__48182__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__48182):G__48182);return G__48182__$1;
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
var G__48215_48217 = "datascript.impl.entity.Entity.prototype.get";var G__48216_48218 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__48215_48217,G__48216_48218);
var G__48219_48221 = "datascript.impl.entity.Entity.prototype.has";var G__48220_48222 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__48219_48221,G__48220_48222);
var G__48223_48225 = "datascript.impl.entity.Entity.prototype.forEach";var G__48224_48226 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__48223_48225,G__48224_48226);
var G__48227_48229 = "datascript.impl.entity.Entity.prototype.key_set";var G__48228_48230 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__48227_48229,G__48228_48230);
var G__48231_48233 = "datascript.impl.entity.Entity.prototype.value_set";var G__48232_48234 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__48231_48233,G__48232_48234);
var G__48235_48237 = "datascript.impl.entity.Entity.prototype.entry_set";var G__48236_48238 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__48235_48237,G__48236_48238);
var G__48239_48241 = "datascript.impl.entity.Entity.prototype.keys";var G__48240_48242 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__48239_48241,G__48240_48242);
var G__48243_48245 = "datascript.impl.entity.Entity.prototype.values";var G__48244_48246 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__48243_48245,G__48244_48246);
var G__48247_48249 = "datascript.impl.entity.Entity.prototype.entries";var G__48248_48250 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__48247_48249,G__48248_48250);
var G__48251_48253 = "cljs.core.Iterator.prototype.next";var G__48252_48254 = cljs.core.Iterator.prototype.next;goog.exportSymbol(G__48251_48253,G__48252_48254);
var G__48255_48257 = "cljs.core.EntriesIterator.prototype.next";var G__48256_48258 = cljs.core.EntriesIterator.prototype.next;goog.exportSymbol(G__48255_48257,G__48256_48258);
//# sourceMappingURL=entity.js.map