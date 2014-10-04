goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');

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
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k36967,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__36969 = (((k36967 instanceof cljs.core.Keyword))?k36967.fqn:null);switch (G__36969) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36967,else__20414__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#datascript.core.Datom{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__36966){var self__ = this;
var this__20418__auto____$1 = this;var pred__36970 = cljs.core.keyword_identical_QMARK_;var expr__36971 = k__20419__auto__;if(cljs.core.truth_((function (){var G__36973 = new cljs.core.Keyword(null,"e","e",1381269198);var G__36974 = expr__36971;return (pred__36970.cljs$core$IFn$_invoke$arity$2 ? pred__36970.cljs$core$IFn$_invoke$arity$2(G__36973,G__36974) : pred__36970.call(null,G__36973,G__36974));
})()))
{return (new datascript.core.Datom(G__36966,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36975 = new cljs.core.Keyword(null,"a","a",-2123407586);var G__36976 = expr__36971;return (pred__36970.cljs$core$IFn$_invoke$arity$2 ? pred__36970.cljs$core$IFn$_invoke$arity$2(G__36975,G__36976) : pred__36970.call(null,G__36975,G__36976));
})()))
{return (new datascript.core.Datom(self__.e,G__36966,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36977 = new cljs.core.Keyword(null,"v","v",21465059);var G__36978 = expr__36971;return (pred__36970.cljs$core$IFn$_invoke$arity$2 ? pred__36970.cljs$core$IFn$_invoke$arity$2(G__36977,G__36978) : pred__36970.call(null,G__36977,G__36978));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,G__36966,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36979 = new cljs.core.Keyword(null,"tx","tx",466630418);var G__36980 = expr__36971;return (pred__36970.cljs$core$IFn$_invoke$arity$2 ? pred__36970.cljs$core$IFn$_invoke$arity$2(G__36979,G__36980) : pred__36970.call(null,G__36979,G__36980));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__36966,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36981 = new cljs.core.Keyword(null,"added","added",2057651688);var G__36982 = expr__36971;return (pred__36970.cljs$core$IFn$_invoke$arity$2 ? pred__36970.cljs$core$IFn$_invoke$arity$2(G__36981,G__36982) : pred__36970.call(null,G__36981,G__36982));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__36966,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__36966),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__36966){var self__ = this;
var this__20409__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__36966,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__36968){return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__36968),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__36968),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__36968),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__36968),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__36968),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36968,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.array_seq([new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688)], 0))));
});
datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.v,o.v));
});
datascript.core.Datom.prototype.cljs$core$IHash$ = true;
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__19267__auto__ = d__$1.__hash;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return d__$1.__hash = cljs.core.hash_combine(cljs.core.hash_combine(cljs.core.hash(d__$1.e),cljs.core.hash(d__$1.a)),cljs.core.hash(d__$1.v));
}
});
datascript.core.ISearch = (function (){var obj36985 = {};return obj36985;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__19255__auto__ = data;if(and__19255__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__19255__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__20512__auto__ = (((data == null))?null:data);return (function (){var or__19267__auto__ = (datascript.core._search[(function (){var G__36989 = x__20512__auto__;return goog.typeOf(G__36989);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (datascript.core._search["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});
datascript.core.compare_key = (function compare_key(k,o1,o2){var k1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(o1,k);var k2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(o2,k);if((cljs.core.some_QMARK_(k1)) && (cljs.core.some_QMARK_(k2)))
{var t1 = cljs.core.type(k1);var t2 = cljs.core.type(k2);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,t2))
{return cljs.core.compare(k1,k2);
} else
{return cljs.core.compare(t1,t2);
}
} else
{return (0);
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
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__19255__auto__ = o1;if(cljs.core.truth_(and__19255__auto__))
{return o2;
} else
{return and__19255__auto__;
}
})()))
{return cljs.core.compare(o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__21064__auto__ = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21064__auto__))
{var c__21064__auto____$1 = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21064__auto____$1))
{var c__21064__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21064__auto____$2))
{var c__21064__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21064__auto____$3))
{return (0);
} else
{return c__21064__auto____$3;
}
} else
{return c__21064__auto____$2;
}
} else
{return c__21064__auto____$1;
}
} else
{return c__21064__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__21064__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21064__auto__))
{var c__21064__auto____$1 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21064__auto____$1))
{var c__21064__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21064__auto____$2))
{var c__21064__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21064__auto____$3))
{return (0);
} else
{return c__21064__auto____$3;
}
} else
{return c__21064__auto____$2;
}
} else
{return c__21064__auto____$1;
}
} else
{return c__21064__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__21064__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21064__auto__))
{var c__21064__auto____$1 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21064__auto____$1))
{var c__21064__auto____$2 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21064__auto____$2))
{var c__21064__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21064__auto____$3))
{return (0);
} else
{return c__21064__auto____$3;
}
} else
{return c__21064__auto____$2;
}
} else
{return c__21064__auto____$1;
}
} else
{return c__21064__auto__;
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
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,__meta,__extmap){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
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
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k37000,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__37002 = (((k37000 instanceof cljs.core.Keyword))?k37000.fqn:null);switch (G__37002) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37000,else__20414__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#datascript.core.DB{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (6 + cljs.core.count(self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__36999){var self__ = this;
var this__20418__auto____$1 = this;var pred__37003 = cljs.core.keyword_identical_QMARK_;var expr__37004 = k__20419__auto__;if(cljs.core.truth_((function (){var G__37006 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__37007 = expr__37004;return (pred__37003.cljs$core$IFn$_invoke$arity$2 ? pred__37003.cljs$core$IFn$_invoke$arity$2(G__37006,G__37007) : pred__37003.call(null,G__37006,G__37007));
})()))
{return (new datascript.core.DB(G__36999,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37008 = new cljs.core.Keyword(null,"eavt","eavt",-666437073);var G__37009 = expr__37004;return (pred__37003.cljs$core$IFn$_invoke$arity$2 ? pred__37003.cljs$core$IFn$_invoke$arity$2(G__37008,G__37009) : pred__37003.call(null,G__37008,G__37009));
})()))
{return (new datascript.core.DB(self__.schema,G__36999,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37010 = new cljs.core.Keyword(null,"aevt","aevt",-585148059);var G__37011 = expr__37004;return (pred__37003.cljs$core$IFn$_invoke$arity$2 ? pred__37003.cljs$core$IFn$_invoke$arity$2(G__37010,G__37011) : pred__37003.call(null,G__37010,G__37011));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__36999,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37012 = new cljs.core.Keyword(null,"avet","avet",1383857032);var G__37013 = expr__37004;return (pred__37003.cljs$core$IFn$_invoke$arity$2 ? pred__37003.cljs$core$IFn$_invoke$arity$2(G__37012,G__37013) : pred__37003.call(null,G__37012,G__37013));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__36999,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37014 = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075);var G__37015 = expr__37004;return (pred__37003.cljs$core$IFn$_invoke$arity$2 ? pred__37003.cljs$core$IFn$_invoke$arity$2(G__37014,G__37015) : pred__37003.call(null,G__37014,G__37015));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__36999,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37016 = new cljs.core.Keyword(null,"max-tx","max-tx",1119558339);var G__37017 = expr__37004;return (pred__37003.cljs$core$IFn$_invoke$arity$2 ? pred__37003.cljs$core$IFn$_invoke$arity$2(G__37016,G__37017) : pred__37003.call(null,G__37016,G__37017));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__36999,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__36999),null));
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__36999){var self__ = this;
var this__20409__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__36999,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__37018){var self__ = this;
var vec__37019 = p__37018;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37019,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37019,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37019,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37019,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36990_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36990_SHARP_.tx);
});})(___$1,vec__37019,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36991_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__36991_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36991_SHARP_.tx));
});})(___$1,vec__37019,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36992_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__36992_SHARP_.v);
});})(___$1,vec__37019,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36993_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36993_SHARP_.tx);
});})(___$1,vec__37019,e,a,v,tx))
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
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36994_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36994_SHARP_.tx);
});})(___$1,vec__37019,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36995_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36995_SHARP_.tx);
});})(___$1,vec__37019,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36996_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__36996_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36996_SHARP_.tx));
});})(___$1,vec__37019,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36997_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__36997_SHARP_.v);
});})(___$1,vec__37019,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__37019,e,a,v,tx){
return (function (p1__36998_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36998_SHARP_.tx);
});})(___$1,vec__37019,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema__$1,eavt,aevt,avet,max_eid,max_tx){return (new datascript.core.DB(schema__$1,eavt,aevt,avet,max_eid,max_tx));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__37001){return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__37001),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__37001),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__37001),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__37001),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__37001),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__37001),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37001,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], 0))));
});
datascript.core.equiv_index = (function equiv_index(x,y){var and__19255__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y));if(and__19255__auto__)
{var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__37021 = cljs.core.next(xs);
var G__37022 = cljs.core.next(ys);
xs = G__37021;
ys = G__37022;
continue;
}
} else
{return false;

}
}
break;
}
} else
{return and__19255__auto__;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return ((other instanceof datascript.core.DB)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.schema,other.schema)) && (datascript.core.equiv_index(this$__$1.eavt,other.eavt));
});
datascript.core.DB.prototype.cljs$core$IHash$ = true;
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var or__19267__auto__ = this$__$1.__hash;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
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
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k37024,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__37026 = (((k37024 instanceof cljs.core.Keyword))?k37024.fqn:null);switch (G__37026) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37024,else__20414__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#datascript.core.TxReport{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (4 + cljs.core.count(self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__37023){var self__ = this;
var this__20418__auto____$1 = this;var pred__37027 = cljs.core.keyword_identical_QMARK_;var expr__37028 = k__20419__auto__;if(cljs.core.truth_((function (){var G__37030 = new cljs.core.Keyword(null,"db-before","db-before",-553691536);var G__37031 = expr__37028;return (pred__37027.cljs$core$IFn$_invoke$arity$2 ? pred__37027.cljs$core$IFn$_invoke$arity$2(G__37030,G__37031) : pred__37027.call(null,G__37030,G__37031));
})()))
{return (new datascript.core.TxReport(G__37023,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37032 = new cljs.core.Keyword(null,"db-after","db-after",-571884666);var G__37033 = expr__37028;return (pred__37027.cljs$core$IFn$_invoke$arity$2 ? pred__37027.cljs$core$IFn$_invoke$arity$2(G__37032,G__37033) : pred__37027.call(null,G__37032,G__37033));
})()))
{return (new datascript.core.TxReport(self__.db_before,G__37023,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37034 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761);var G__37035 = expr__37028;return (pred__37027.cljs$core$IFn$_invoke$arity$2 ? pred__37027.cljs$core$IFn$_invoke$arity$2(G__37034,G__37035) : pred__37027.call(null,G__37034,G__37035));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__37023,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37036 = new cljs.core.Keyword(null,"tempids","tempids",1767509089);var G__37037 = expr__37028;return (pred__37027.cljs$core$IFn$_invoke$arity$2 ? pred__37027.cljs$core$IFn$_invoke$arity$2(G__37036,G__37037) : pred__37027.call(null,G__37036,G__37037));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__37023,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__37023),null));
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__37023){var self__ = this;
var this__20409__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__37023,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__37025){return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__37025),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__37025),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__37025),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__37025),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37025,new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.array_seq([new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089)], 0))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__37040 = db;var G__37040__$1 = (((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37040,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__37040);return G__37040__$1;
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
datascript.core.explode = (function explode(db,entity){var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);var iter__20662__auto__ = ((function (eid){
return (function iter__37054(s__37055){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__37055__$1 = s__37055;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37055__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__37064 = cljs.core.first(xs__4624__auto__);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37064,(0),null);var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37064,(1),null);var iterys__20658__auto__ = ((function (s__37055__$1,vec__37064,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__37056(s__37057){return (new cljs.core.LazySeq(null,((function (s__37055__$1,vec__37064,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__37057__$1 = s__37057;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__37057__$1);if(temp__4126__auto____$1)
{var s__37057__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__37057__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__37057__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__37059 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__37058 = (0);while(true){
if((i__37058 < size__20661__auto__))
{var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__37058);cljs.core.chunk_append(b__37059,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null));
{
var G__37067 = (i__37058 + (1));
i__37058 = G__37067;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37059),iter__37056(cljs.core.chunk_rest(s__37057__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37059),null);
}
} else
{var v = cljs.core.first(s__37057__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null),iter__37056(cljs.core.rest(s__37057__$2)));
}
} else
{return null;
}
break;
}
});})(s__37055__$1,vec__37064,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__37055__$1,vec__37064,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__20659__auto__ = cljs.core.seq(iterys__20658__auto__(((((vs instanceof Array) || (cljs.core.coll_QMARK_(vs))) && (!(cljs.core.map_QMARK_(vs))) && (datascript.core.multival_QMARK_(db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__20659__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20659__auto__,iter__37054(cljs.core.rest(s__37055__$1)));
} else
{{
var G__37068 = cljs.core.rest(s__37055__$1);
s__37055__$1 = G__37068;
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
;return iter__20662__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__37069){var vec__37071 = p__37069;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37071,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37071,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37071,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37071,(3),null);var tx = datascript.core.current_tx(report);var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_(db,a))
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
datascript.core.transact_tx_data = (function transact_tx_data(report,p__37072){while(true){
var vec__37076 = p__37072;var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37076,(0),null);var entities = cljs.core.nthnext(vec__37076,(1));var es = vec__37076;var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_(entity))
{if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)))
{{
var G__37079 = report;
var G__37080 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity),entities);
report = G__37079;
p__37072 = G__37080;
continue;
}
} else
{var eid = datascript.core.next_eid(db);var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);{
var G__37081 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,eid);
var G__37082 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__37081;
p__37072 = G__37082;
continue;
}
}
} else
{var vec__37077 = entity;var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37077,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37077,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37077,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37077,(3),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418)))
{var vec__37078 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(1),null);var args = cljs.core.nthnext(vec__37078,(2));{
var G__37083 = report;
var G__37084 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__37083;
p__37072 = G__37084;
continue;
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__37085 = report;
var G__37086 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__37085;
p__37072 = G__37086;
continue;
}
} else
{{
var G__37087 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.core.next_eid(db));
var G__37088 = es;
report = G__37087;
p__37072 = G__37088;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__37089 = report;
var G__37090 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__37089;
p__37072 = G__37090;
continue;
}
} else
{{
var G__37091 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.core.next_eid(db));
var G__37092 = es;
report = G__37091;
p__37072 = G__37092;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841)))
{{
var G__37093 = datascript.core.transact_add(report,entity);
var G__37094 = entities;
report = G__37093;
p__37072 = G__37094;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231)))
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__37095 = datascript.core.transact_retract_datom(report,old_datom);
var G__37096 = entities;
report = G__37095;
p__37072 = G__37096;
continue;
}
} else
{{
var G__37097 = report;
var G__37098 = entities;
report = G__37097;
p__37072 = G__37098;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__37099 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__37100 = entities;
report = G__37099;
p__37072 = G__37100;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));{
var G__37101 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__37102 = entities;
report = G__37101;
p__37072 = G__37102;
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
break;
}
});
//# sourceMappingURL=core.js.map