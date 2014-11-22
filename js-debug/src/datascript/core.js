goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');
datascript.core.tx0 = (536870912);

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.Datom = (function (e,a,v,tx,added,__meta,__extmap){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.Datom.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$], 0));
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k45738,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__45740 = (((k45738 instanceof cljs.core.Keyword))?k45738.fqn:null);switch (G__45740) {
case "added":
return self__.added;

break;
case "tx":
return self__.tx;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
case "e":
return self__.e;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45738,else__20653__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#datascript.core.Datom{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
var this__20646__auto____$1 = this;if(cljs.core.truth_((function (){var and__19670__auto__ = other__20647__auto__;if(cljs.core.truth_(and__19670__auto__))
{return ((this__20646__auto____$1.constructor === other__20647__auto__.constructor)) && (cljs.core.equiv_map(this__20646__auto____$1,other__20647__auto__));
} else
{return and__19670__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__45737){var self__ = this;
var this__20657__auto____$1 = this;var pred__45741 = cljs.core.keyword_identical_QMARK_;var expr__45742 = k__20658__auto__;if(cljs.core.truth_((function (){var G__45744 = new cljs.core.Keyword(null,"e","e",1381269198);var G__45745 = expr__45742;return (pred__45741.cljs$core$IFn$_invoke$arity$2 ? pred__45741.cljs$core$IFn$_invoke$arity$2(G__45744,G__45745) : pred__45741.call(null,G__45744,G__45745));
})()))
{return (new datascript.core.Datom(G__45737,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45746 = new cljs.core.Keyword(null,"a","a",-2123407586);var G__45747 = expr__45742;return (pred__45741.cljs$core$IFn$_invoke$arity$2 ? pred__45741.cljs$core$IFn$_invoke$arity$2(G__45746,G__45747) : pred__45741.call(null,G__45746,G__45747));
})()))
{return (new datascript.core.Datom(self__.e,G__45737,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45748 = new cljs.core.Keyword(null,"v","v",21465059);var G__45749 = expr__45742;return (pred__45741.cljs$core$IFn$_invoke$arity$2 ? pred__45741.cljs$core$IFn$_invoke$arity$2(G__45748,G__45749) : pred__45741.call(null,G__45748,G__45749));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,G__45737,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45750 = new cljs.core.Keyword(null,"tx","tx",466630418);var G__45751 = expr__45742;return (pred__45741.cljs$core$IFn$_invoke$arity$2 ? pred__45741.cljs$core$IFn$_invoke$arity$2(G__45750,G__45751) : pred__45741.call(null,G__45750,G__45751));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__45737,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45752 = new cljs.core.Keyword(null,"added","added",2057651688);var G__45753 = expr__45742;return (pred__45741.cljs$core$IFn$_invoke$arity$2 ? pred__45741.cljs$core$IFn$_invoke$arity$2(G__45752,G__45753) : pred__45741.call(null,G__45752,G__45753));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__45737,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__45737),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__45737){var self__ = this;
var this__20649__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__45737,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__45739){return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__45739),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__45739),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__45739),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__45739),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__45739),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45739,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.array_seq([new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688)], 0))));
});
datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.v,o.v));
});
datascript.core.Datom.prototype.cljs$core$IHash$ = true;
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__19687__auto__ = d__$1.__hash;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return d__$1.__hash = cljs.core.hash_combine(cljs.core.hash_combine(cljs.core.hash(d__$1.e),cljs.core.hash(d__$1.a)),cljs.core.hash(d__$1.v));
}
});
datascript.core.ISearch = (function (){var obj45756 = {};return obj45756;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__19670__auto__ = data;if(and__19670__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__19670__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__20728__auto__ = (((data == null))?null:data);return (function (){var or__19687__auto__ = (datascript.core._search[(function (){var G__45760 = x__20728__auto__;return goog.typeOf(G__45760);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (datascript.core._search["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});
datascript.core.cmp_val = (function cmp_val(o1,o2){if((cljs.core.some_QMARK_(o1)) && (cljs.core.some_QMARK_(o2)))
{var t1 = cljs.core.type(o1);var t2 = cljs.core.type(o2);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,t2))
{return cljs.core.compare(o1,o2);
} else
{return cljs.core.compare(t1,t2);
}
} else
{return (0);
}
});
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__19670__auto__ = o1;if(cljs.core.truth_(and__19670__auto__))
{return o2;
} else
{return and__19670__auto__;
}
})()))
{return cljs.core.compare(o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__22387__auto__ = datascript.core.cmp(d1.e,d2.e);if(((0) === c__22387__auto__))
{var c__22387__auto____$1 = datascript.core.cmp(d1.a,d2.a);if(((0) === c__22387__auto____$1))
{var c__22387__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__22387__auto____$2))
{var c__22387__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__22387__auto____$3))
{return (0);
} else
{return c__22387__auto____$3;
}
} else
{return c__22387__auto____$2;
}
} else
{return c__22387__auto____$1;
}
} else
{return c__22387__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__22387__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__22387__auto__))
{var c__22387__auto____$1 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__22387__auto____$1))
{var c__22387__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__22387__auto____$2))
{var c__22387__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__22387__auto____$3))
{return (0);
} else
{return c__22387__auto____$3;
}
} else
{return c__22387__auto____$2;
}
} else
{return c__22387__auto____$1;
}
} else
{return c__22387__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__22387__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__22387__auto__))
{var c__22387__auto____$1 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__22387__auto____$1))
{var c__22387__auto____$2 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__22387__auto____$2))
{var c__22387__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__22387__auto____$3))
{return (0);
} else
{return c__22387__auto____$3;
}
} else
{return c__22387__auto____$2;
}
} else
{return c__22387__auto____$1;
}
} else
{return c__22387__auto__;
}
});

/**
* @constructor
* @param {*} schema
* @param {*} eavt
* @param {*} aevt
* @param {*} avet
* @param {*} max_eid
* @param {*} max_tx
* @param {*} refs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,refs,__meta,__extmap){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.refs = refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.DB.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_(this$);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k45771,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__45773 = (((k45771 instanceof cljs.core.Keyword))?k45771.fqn:null);switch (G__45773) {
case "refs":
return self__.refs;

break;
case "max-tx":
return self__.max_tx;

break;
case "max-eid":
return self__.max_eid;

break;
case "avet":
return self__.avet;

break;
case "aevt":
return self__.aevt;

break;
case "eavt":
return self__.eavt;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45771,else__20653__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#datascript.core.DB{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (7 + cljs.core.count(self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
var this__20646__auto____$1 = this;if(cljs.core.truth_((function (){var and__19670__auto__ = other__20647__auto__;if(cljs.core.truth_(and__19670__auto__))
{return ((this__20646__auto____$1.constructor === other__20647__auto__.constructor)) && (cljs.core.equiv_map(this__20646__auto____$1,other__20647__auto__));
} else
{return and__19670__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"refs","refs",-1560051448),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__45770){var self__ = this;
var this__20657__auto____$1 = this;var pred__45774 = cljs.core.keyword_identical_QMARK_;var expr__45775 = k__20658__auto__;if(cljs.core.truth_((function (){var G__45777 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__45778 = expr__45775;return (pred__45774.cljs$core$IFn$_invoke$arity$2 ? pred__45774.cljs$core$IFn$_invoke$arity$2(G__45777,G__45778) : pred__45774.call(null,G__45777,G__45778));
})()))
{return (new datascript.core.DB(G__45770,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45779 = new cljs.core.Keyword(null,"eavt","eavt",-666437073);var G__45780 = expr__45775;return (pred__45774.cljs$core$IFn$_invoke$arity$2 ? pred__45774.cljs$core$IFn$_invoke$arity$2(G__45779,G__45780) : pred__45774.call(null,G__45779,G__45780));
})()))
{return (new datascript.core.DB(self__.schema,G__45770,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45781 = new cljs.core.Keyword(null,"aevt","aevt",-585148059);var G__45782 = expr__45775;return (pred__45774.cljs$core$IFn$_invoke$arity$2 ? pred__45774.cljs$core$IFn$_invoke$arity$2(G__45781,G__45782) : pred__45774.call(null,G__45781,G__45782));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__45770,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45783 = new cljs.core.Keyword(null,"avet","avet",1383857032);var G__45784 = expr__45775;return (pred__45774.cljs$core$IFn$_invoke$arity$2 ? pred__45774.cljs$core$IFn$_invoke$arity$2(G__45783,G__45784) : pred__45774.call(null,G__45783,G__45784));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__45770,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45785 = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075);var G__45786 = expr__45775;return (pred__45774.cljs$core$IFn$_invoke$arity$2 ? pred__45774.cljs$core$IFn$_invoke$arity$2(G__45785,G__45786) : pred__45774.call(null,G__45785,G__45786));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__45770,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45787 = new cljs.core.Keyword(null,"max-tx","max-tx",1119558339);var G__45788 = expr__45775;return (pred__45774.cljs$core$IFn$_invoke$arity$2 ? pred__45774.cljs$core$IFn$_invoke$arity$2(G__45787,G__45788) : pred__45774.call(null,G__45787,G__45788));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__45770,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45789 = new cljs.core.Keyword(null,"refs","refs",-1560051448);var G__45790 = expr__45775;return (pred__45774.cljs$core$IFn$_invoke$arity$2 ? pred__45774.cljs$core$IFn$_invoke$arity$2(G__45789,G__45790) : pred__45774.call(null,G__45789,G__45790));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__45770,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__45770),null));
}
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__45770){var self__ = this;
var this__20649__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,G__45770,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__45791){var self__ = this;
var vec__45792 = p__45791;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45761_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__45761_SHARP_.tx);
});})(___$1,vec__45792,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45762_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__45762_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__45762_SHARP_.tx));
});})(___$1,vec__45792,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45763_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__45763_SHARP_.v);
});})(___$1,vec__45792,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45764_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__45764_SHARP_.tx);
});})(___$1,vec__45792,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null)));
}
}
}
} else
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45765_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__45765_SHARP_.tx);
});})(___$1,vec__45792,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45766_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__45766_SHARP_.tx);
});})(___$1,vec__45792,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45767_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__45767_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__45767_SHARP_.tx));
});})(___$1,vec__45792,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45768_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__45768_SHARP_.v);
});})(___$1,vec__45792,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__45792,e,a,v,tx){
return (function (p1__45769_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__45769_SHARP_.tx);
});})(___$1,vec__45792,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema__$1,eavt,aevt,avet,max_eid,max_tx,refs){return (new datascript.core.DB(schema__$1,eavt,aevt,avet,max_eid,max_tx,refs));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__45772){return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45772),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__45772),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__45772),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__45772),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__45772),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__45772),new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(G__45772),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45772,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"refs","refs",-1560051448)], 0))));
});
datascript.core.equiv_index = (function equiv_index(x,y){var and__19670__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y));if(and__19670__auto__)
{var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__45794 = cljs.core.next(xs);
var G__45795 = cljs.core.next(ys);
xs = G__45794;
ys = G__45795;
continue;
}
} else
{return false;

}
}
break;
}
} else
{return and__19670__auto__;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return ((other instanceof datascript.core.DB)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.schema,other.schema)) && (datascript.core.equiv_index(this$__$1.eavt,other.eavt));
});
datascript.core.DB.prototype.cljs$core$IHash$ = true;
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var or__19687__auto__ = this$__$1.__hash;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return this$__$1.__hash = cljs.core.hash_coll(this$__$1.eavt);
}
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} tx_meta
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k45797,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__45799 = (((k45797 instanceof cljs.core.Keyword))?k45797.fqn:null);switch (G__45799) {
case "tx-meta":
return self__.tx_meta;

break;
case "tempids":
return self__.tempids;

break;
case "tx-data":
return self__.tx_data;

break;
case "db-after":
return self__.db_after;

break;
case "db-before":
return self__.db_before;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45797,else__20653__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#datascript.core.TxReport{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
var this__20646__auto____$1 = this;if(cljs.core.truth_((function (){var and__19670__auto__ = other__20647__auto__;if(cljs.core.truth_(and__19670__auto__))
{return ((this__20646__auto____$1.constructor === other__20647__auto__.constructor)) && (cljs.core.equiv_map(this__20646__auto____$1,other__20647__auto__));
} else
{return and__19670__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__45796){var self__ = this;
var this__20657__auto____$1 = this;var pred__45800 = cljs.core.keyword_identical_QMARK_;var expr__45801 = k__20658__auto__;if(cljs.core.truth_((function (){var G__45803 = new cljs.core.Keyword(null,"db-before","db-before",-553691536);var G__45804 = expr__45801;return (pred__45800.cljs$core$IFn$_invoke$arity$2 ? pred__45800.cljs$core$IFn$_invoke$arity$2(G__45803,G__45804) : pred__45800.call(null,G__45803,G__45804));
})()))
{return (new datascript.core.TxReport(G__45796,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45805 = new cljs.core.Keyword(null,"db-after","db-after",-571884666);var G__45806 = expr__45801;return (pred__45800.cljs$core$IFn$_invoke$arity$2 ? pred__45800.cljs$core$IFn$_invoke$arity$2(G__45805,G__45806) : pred__45800.call(null,G__45805,G__45806));
})()))
{return (new datascript.core.TxReport(self__.db_before,G__45796,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45807 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761);var G__45808 = expr__45801;return (pred__45800.cljs$core$IFn$_invoke$arity$2 ? pred__45800.cljs$core$IFn$_invoke$arity$2(G__45807,G__45808) : pred__45800.call(null,G__45807,G__45808));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__45796,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45809 = new cljs.core.Keyword(null,"tempids","tempids",1767509089);var G__45810 = expr__45801;return (pred__45800.cljs$core$IFn$_invoke$arity$2 ? pred__45800.cljs$core$IFn$_invoke$arity$2(G__45809,G__45810) : pred__45800.call(null,G__45809,G__45810));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__45796,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45811 = new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194);var G__45812 = expr__45801;return (pred__45800.cljs$core$IFn$_invoke$arity$2 ? pred__45800.cljs$core$IFn$_invoke$arity$2(G__45811,G__45812) : pred__45800.call(null,G__45811,G__45812));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__45796,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__45796),null));
}
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__45796){var self__ = this;
var this__20649__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__45796,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids,tx_meta));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__45798){return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__45798),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__45798),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__45798),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__45798),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__45798),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45798,new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.array_seq([new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], 0))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__45815 = db;var G__45815__$1 = ((((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.core.tx0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45815,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__45815);return G__45815__$1;
});
datascript.core.allocate_eid = (function() {
var allocate_eid = null;
var allocate_eid__2 = (function (report,eid){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
var allocate_eid__3 = (function (report,e,eid){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
allocate_eid = function(report,e,eid){
switch(arguments.length){
case 2:
return allocate_eid__2.call(this,report,e);
case 3:
return allocate_eid__3.call(this,report,e,eid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
allocate_eid.cljs$core$IFn$_invoke$arity$2 = allocate_eid__2;
allocate_eid.cljs$core$IFn$_invoke$arity$3 = allocate_eid__3;
return allocate_eid;
})()
;
datascript.core.with_datom = (function with_datom(db,datom){if(cljs.core.truth_(datom.added))
{return datascript.core.advance_max_eid(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),cljs.core.conj,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),cljs.core.conj,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),cljs.core.conj,datom),datom.e);
} else
{var removing = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),cljs.core.disj,removing),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),cljs.core.disj,removing),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),cljs.core.disj,removing);
}
});
datascript.core.transact_report = (function transact_report(report,datom){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.core.reverse_ref = (function reverse_ref(attr){var name = cljs.core.name(attr);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0))))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)));
} else
{return null;
}
});
datascript.core.explode = (function explode(db,entity){var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);var iter__20913__auto__ = ((function (eid){
return (function iter__45829(s__45830){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__45830__$1 = s__45830;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45830__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__45839 = cljs.core.first(xs__4624__auto__);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45839,(0),null);var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45839,(1),null);var reverse_a = datascript.core.reverse_ref(a);var iterys__20909__auto__ = ((function (s__45830__$1,reverse_a,vec__45839,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__45831(s__45832){return (new cljs.core.LazySeq(null,((function (s__45830__$1,reverse_a,vec__45839,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__45832__$1 = s__45832;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__45832__$1);if(temp__4126__auto____$1)
{var s__45832__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__45832__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45832__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45834 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45833 = (0);while(true){
if((i__45833 < size__20912__auto__))
{var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45833);cljs.core.chunk_append(b__45834,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)));
{
var G__45842 = (i__45833 + (1));
i__45833 = G__45842;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45834),iter__45831(cljs.core.chunk_rest(s__45832__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45834),null);
}
} else
{var v = cljs.core.first(s__45832__$2);return cljs.core.cons((cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)),iter__45831(cljs.core.rest(s__45832__$2)));
}
} else
{return null;
}
break;
}
});})(s__45830__$1,reverse_a,vec__45839,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__45830__$1,reverse_a,vec__45839,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__20910__auto__ = cljs.core.seq(iterys__20909__auto__(((((vs instanceof Array) || (cljs.core.coll_QMARK_(vs))) && (!(cljs.core.map_QMARK_(vs))) && (datascript.core.multival_QMARK_(db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__20910__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20910__auto__,iter__45829(cljs.core.rest(s__45830__$1)));
} else
{{
var G__45843 = cljs.core.rest(s__45830__$1);
s__45830__$1 = G__45843;
continue;
}
}
} else
{return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;return iter__20913__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__45844){var vec__45846 = p__45844;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45846,(3),null);var tx = datascript.core.current_tx(report);var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_(db,a))
{if(cljs.core.empty_QMARK_(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null))))
{return datascript.core.transact_report(report,datom);
} else
{return report;
}
} else
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_datom.v,v))
{return report;
} else
{return datascript.core.transact_report(datascript.core.transact_report(report,(new datascript.core.Datom(e,a,old_datom.v,tx,false))),datom);
}
} else
{return datascript.core.transact_report(report,datom);
}
}
});
datascript.core.transact_retract_datom = (function transact_retract_datom(report,d){var tx = datascript.core.current_tx(report);return datascript.core.transact_report(report,(new datascript.core.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.core.tx_id_QMARK_ = (function tx_id_QMARK_(e){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,":db/current-tx"));
});
datascript.core.transact_tx_data = (function transact_tx_data(report,p__45848){while(true){
var vec__45853 = p__45848;var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45853,(0),null);var entities = cljs.core.nthnext(vec__45853,(1));var es = vec__45853;var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.core.current_tx(report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_(entity))
{if(datascript.core.tx_id_QMARK_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)))
{var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.core.current_tx(report));{
var G__45857 = report;
var G__45858 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity__$1),entities);
report = G__45857;
p__45848 = G__45858;
continue;
}
} else
{if((new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity) == null))
{var eid = datascript.core.next_eid(db);var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);{
var G__45859 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,eid);
var G__45860 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__45859;
p__45848 = G__45860;
continue;
}
} else
{{
var G__45861 = report;
var G__45862 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity),entities);
report = G__45861;
p__45848 = G__45862;
continue;
}

}
}
} else
{var vec__45854 = entity;var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45854,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45854,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45854,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45854,(3),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418)))
{var vec__45855 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45855,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45855,(1),null);var args = cljs.core.nthnext(vec__45855,(2));{
var G__45863 = report;
var G__45864 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__45863;
p__45848 = G__45864;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172)))
{var vec__45856 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45856,(0),null);var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45856,(1),null);var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45856,(2),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45856,(3),null);var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45856,(4),null);var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a__$1], null));if(datascript.core.multival_QMARK_(db,a__$1))
{if(cljs.core.truth_(cljs.core.some(((function (report,p__45848,vec__45856,_,e__$1,a__$1,ov,nv,datoms,vec__45854,op,e,a,v,db,vec__45853,entity,entities,es){
return (function (p1__45847_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__45847_SHARP_.v,ov);
});})(report,p__45848,vec__45856,_,e__$1,a__$1,ov,nv,datoms,vec__45854,op,e,a,v,db,vec__45853,entity,entities,es))
,datoms)))
{{
var G__45865 = datascript.core.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__45866 = entities;
report = G__45865;
p__45848 = G__45866;
continue;
}
} else
{throw (new Error((":db.fn/cas failed on datom ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datoms))+"], expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ov))));
}
} else
{var v__$1 = cljs.core.first(datoms).v;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov))
{{
var G__45867 = datascript.core.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__45868 = entities;
report = G__45867;
p__45848 = G__45868;
continue;
}
} else
{throw (new Error((":db.fn/cas failed on datom ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)+"], expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ov))));
}
}
} else
{if(datascript.core.tx_id_QMARK_(e))
{{
var G__45869 = report;
var G__45870 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.core.current_tx(report),a,v], null)], null),entities);
report = G__45869;
p__45848 = G__45870;
continue;
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && (datascript.core.tx_id_QMARK_(v)))
{{
var G__45871 = report;
var G__45872 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.core.current_tx(report)], null)], null),entities);
report = G__45871;
p__45848 = G__45872;
continue;
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__45873 = report;
var G__45874 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__45873;
p__45848 = G__45874;
continue;
}
} else
{{
var G__45875 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.core.next_eid(db));
var G__45876 = es;
report = G__45875;
p__45848 = G__45876;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__45877 = report;
var G__45878 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__45877;
p__45848 = G__45878;
continue;
}
} else
{{
var G__45879 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.core.next_eid(db));
var G__45880 = es;
report = G__45879;
p__45848 = G__45880;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841)))
{{
var G__45881 = datascript.core.transact_add(report,entity);
var G__45882 = entities;
report = G__45881;
p__45848 = G__45882;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231)))
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__45883 = datascript.core.transact_retract_datom(report,old_datom);
var G__45884 = entities;
report = G__45883;
p__45848 = G__45884;
continue;
}
} else
{{
var G__45885 = report;
var G__45886 = entities;
report = G__45885;
p__45848 = G__45886;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__45887 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__45888 = entities;
report = G__45887;
p__45848 = G__45888;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)))
{var e_datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));var v_datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,p__45848,e_datoms,vec__45854,op,e,a,v,db,vec__45853,entity,entities,es){
return (function (a__$1){return datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e], null));
});})(report,p__45848,e_datoms,vec__45854,op,e,a,v,db,vec__45853,entity,entities,es))
,cljs.core.array_seq([db.refs], 0));{
var G__45889 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__45890 = entities;
report = G__45889;
p__45848 = G__45890;
continue;
}
} else
{return null;
}
}
}
}
}
}
}
}
}
}

}
}
break;
}
});
//# sourceMappingURL=core.js.map