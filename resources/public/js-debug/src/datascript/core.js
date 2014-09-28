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
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20488__auto__,k__20489__auto__){var self__ = this;
var this__20488__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20488__auto____$1,k__20489__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20490__auto__,k54230,else__20491__auto__){var self__ = this;
var this__20490__auto____$1 = this;var G__54232 = (((k54230 instanceof cljs.core.Keyword))?k54230.fqn:null);switch (G__54232) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54230,else__20491__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20502__auto__,writer__20503__auto__,opts__20504__auto__){var self__ = this;
var this__20502__auto____$1 = this;var pr_pair__20505__auto__ = ((function (this__20502__auto____$1){
return (function (keyval__20506__auto__){return cljs.core.pr_sequential_writer(writer__20503__auto__,cljs.core.pr_writer,""," ","",opts__20504__auto__,keyval__20506__auto__);
});})(this__20502__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20503__auto__,pr_pair__20505__auto__,"#datascript.core.Datom{",", ","}",opts__20504__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20486__auto__){var self__ = this;
var this__20486__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20482__auto__){var self__ = this;
var this__20482__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20492__auto__){var self__ = this;
var this__20492__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20483__auto__){var self__ = this;
var this__20483__auto____$1 = this;var h__20113__auto__ = self__.__hash;if(!((h__20113__auto__ == null)))
{return h__20113__auto__;
} else
{var h__20113__auto____$1 = cljs.core.hash_imap(this__20483__auto____$1);self__.__hash = h__20113__auto____$1;
return h__20113__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20484__auto__,other__20485__auto__){var self__ = this;
var this__20484__auto____$1 = this;if(cljs.core.truth_((function (){var and__19267__auto__ = other__20485__auto__;if(cljs.core.truth_(and__19267__auto__))
{return ((this__20484__auto____$1.constructor === other__20485__auto__.constructor)) && (cljs.core.equiv_map(this__20484__auto____$1,other__20485__auto__));
} else
{return and__19267__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20497__auto__,k__20498__auto__){var self__ = this;
var this__20497__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__20498__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20497__auto____$1),self__.__meta),k__20498__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20498__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20495__auto__,k__20496__auto__,G__54229){var self__ = this;
var this__20495__auto____$1 = this;var pred__54233 = cljs.core.keyword_identical_QMARK_;var expr__54234 = k__20496__auto__;if(cljs.core.truth_((function (){var G__54236 = new cljs.core.Keyword(null,"e","e",1381269198);var G__54237 = expr__54234;return (pred__54233.cljs$core$IFn$_invoke$arity$2 ? pred__54233.cljs$core$IFn$_invoke$arity$2(G__54236,G__54237) : pred__54233.call(null,G__54236,G__54237));
})()))
{return (new datascript.core.Datom(G__54229,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54238 = new cljs.core.Keyword(null,"a","a",-2123407586);var G__54239 = expr__54234;return (pred__54233.cljs$core$IFn$_invoke$arity$2 ? pred__54233.cljs$core$IFn$_invoke$arity$2(G__54238,G__54239) : pred__54233.call(null,G__54238,G__54239));
})()))
{return (new datascript.core.Datom(self__.e,G__54229,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54240 = new cljs.core.Keyword(null,"v","v",21465059);var G__54241 = expr__54234;return (pred__54233.cljs$core$IFn$_invoke$arity$2 ? pred__54233.cljs$core$IFn$_invoke$arity$2(G__54240,G__54241) : pred__54233.call(null,G__54240,G__54241));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,G__54229,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54242 = new cljs.core.Keyword(null,"tx","tx",466630418);var G__54243 = expr__54234;return (pred__54233.cljs$core$IFn$_invoke$arity$2 ? pred__54233.cljs$core$IFn$_invoke$arity$2(G__54242,G__54243) : pred__54233.call(null,G__54242,G__54243));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__54229,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54244 = new cljs.core.Keyword(null,"added","added",2057651688);var G__54245 = expr__54234;return (pred__54233.cljs$core$IFn$_invoke$arity$2 ? pred__54233.cljs$core$IFn$_invoke$arity$2(G__54244,G__54245) : pred__54233.call(null,G__54244,G__54245));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__54229,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20496__auto__,G__54229),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20500__auto__){var self__ = this;
var this__20500__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20487__auto__,G__54229){var self__ = this;
var this__20487__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__54229,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20493__auto__,entry__20494__auto__){var self__ = this;
var this__20493__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20494__auto__))
{return cljs.core._assoc(this__20493__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20493__auto____$1,entry__20494__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__20522__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__20522__auto__,writer__20523__auto__){return cljs.core._write(writer__20523__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__54231){return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__54231),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__54231),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__54231),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__54231),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__54231),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54231,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.array_seq([new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688)], 0))));
});
datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.v,o.v));
});
datascript.core.Datom.prototype.cljs$core$IHash$ = true;
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__19289__auto__ = d__$1.__hash;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return d__$1.__hash = cljs.core.hash_combine(cljs.core.hash_combine(cljs.core.hash(d__$1.e),cljs.core.hash(d__$1.a)),cljs.core.hash(d__$1.v));
}
});
datascript.core.ISearch = (function (){var obj54248 = {};return obj54248;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__19267__auto__ = data;if(and__19267__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__19267__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__20529__auto__ = (((data == null))?null:data);return (function (){var or__19289__auto__ = (datascript.core._search[(function (){var G__54252 = x__20529__auto__;return goog.typeOf(G__54252);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (datascript.core._search["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
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
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__19267__auto__ = o1;if(cljs.core.truth_(and__19267__auto__))
{return o2;
} else
{return and__19267__auto__;
}
})()))
{return cljs.core.compare(o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__21119__auto__ = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21119__auto__))
{var c__21119__auto____$1 = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21119__auto____$1))
{var c__21119__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21119__auto____$2))
{var c__21119__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21119__auto____$3))
{return (0);
} else
{return c__21119__auto____$3;
}
} else
{return c__21119__auto____$2;
}
} else
{return c__21119__auto____$1;
}
} else
{return c__21119__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__21119__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21119__auto__))
{var c__21119__auto____$1 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21119__auto____$1))
{var c__21119__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21119__auto____$2))
{var c__21119__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21119__auto____$3))
{return (0);
} else
{return c__21119__auto____$3;
}
} else
{return c__21119__auto____$2;
}
} else
{return c__21119__auto____$1;
}
} else
{return c__21119__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__21119__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21119__auto__))
{var c__21119__auto____$1 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21119__auto____$1))
{var c__21119__auto____$2 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21119__auto____$2))
{var c__21119__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21119__auto____$3))
{return (0);
} else
{return c__21119__auto____$3;
}
} else
{return c__21119__auto____$2;
}
} else
{return c__21119__auto____$1;
}
} else
{return c__21119__auto__;
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
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20488__auto__,k__20489__auto__){var self__ = this;
var this__20488__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20488__auto____$1,k__20489__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20490__auto__,k54263,else__20491__auto__){var self__ = this;
var this__20490__auto____$1 = this;var G__54265 = (((k54263 instanceof cljs.core.Keyword))?k54263.fqn:null);switch (G__54265) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54263,else__20491__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20502__auto__,writer__20503__auto__,opts__20504__auto__){var self__ = this;
var this__20502__auto____$1 = this;var pr_pair__20505__auto__ = ((function (this__20502__auto____$1){
return (function (keyval__20506__auto__){return cljs.core.pr_sequential_writer(writer__20503__auto__,cljs.core.pr_writer,""," ","",opts__20504__auto__,keyval__20506__auto__);
});})(this__20502__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20503__auto__,pr_pair__20505__auto__,"#datascript.core.DB{",", ","}",opts__20504__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20486__auto__){var self__ = this;
var this__20486__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20482__auto__){var self__ = this;
var this__20482__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20492__auto__){var self__ = this;
var this__20492__auto____$1 = this;return (6 + cljs.core.count(self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20483__auto__){var self__ = this;
var this__20483__auto____$1 = this;var h__20113__auto__ = self__.__hash;if(!((h__20113__auto__ == null)))
{return h__20113__auto__;
} else
{var h__20113__auto____$1 = cljs.core.hash_imap(this__20483__auto____$1);self__.__hash = h__20113__auto____$1;
return h__20113__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20484__auto__,other__20485__auto__){var self__ = this;
var this__20484__auto____$1 = this;if(cljs.core.truth_((function (){var and__19267__auto__ = other__20485__auto__;if(cljs.core.truth_(and__19267__auto__))
{return ((this__20484__auto____$1.constructor === other__20485__auto__.constructor)) && (cljs.core.equiv_map(this__20484__auto____$1,other__20485__auto__));
} else
{return and__19267__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20497__auto__,k__20498__auto__){var self__ = this;
var this__20497__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__20498__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20497__auto____$1),self__.__meta),k__20498__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20498__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20495__auto__,k__20496__auto__,G__54262){var self__ = this;
var this__20495__auto____$1 = this;var pred__54266 = cljs.core.keyword_identical_QMARK_;var expr__54267 = k__20496__auto__;if(cljs.core.truth_((function (){var G__54269 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__54270 = expr__54267;return (pred__54266.cljs$core$IFn$_invoke$arity$2 ? pred__54266.cljs$core$IFn$_invoke$arity$2(G__54269,G__54270) : pred__54266.call(null,G__54269,G__54270));
})()))
{return (new datascript.core.DB(G__54262,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54271 = new cljs.core.Keyword(null,"eavt","eavt",-666437073);var G__54272 = expr__54267;return (pred__54266.cljs$core$IFn$_invoke$arity$2 ? pred__54266.cljs$core$IFn$_invoke$arity$2(G__54271,G__54272) : pred__54266.call(null,G__54271,G__54272));
})()))
{return (new datascript.core.DB(self__.schema,G__54262,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54273 = new cljs.core.Keyword(null,"aevt","aevt",-585148059);var G__54274 = expr__54267;return (pred__54266.cljs$core$IFn$_invoke$arity$2 ? pred__54266.cljs$core$IFn$_invoke$arity$2(G__54273,G__54274) : pred__54266.call(null,G__54273,G__54274));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__54262,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54275 = new cljs.core.Keyword(null,"avet","avet",1383857032);var G__54276 = expr__54267;return (pred__54266.cljs$core$IFn$_invoke$arity$2 ? pred__54266.cljs$core$IFn$_invoke$arity$2(G__54275,G__54276) : pred__54266.call(null,G__54275,G__54276));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__54262,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54277 = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075);var G__54278 = expr__54267;return (pred__54266.cljs$core$IFn$_invoke$arity$2 ? pred__54266.cljs$core$IFn$_invoke$arity$2(G__54277,G__54278) : pred__54266.call(null,G__54277,G__54278));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__54262,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54279 = new cljs.core.Keyword(null,"max-tx","max-tx",1119558339);var G__54280 = expr__54267;return (pred__54266.cljs$core$IFn$_invoke$arity$2 ? pred__54266.cljs$core$IFn$_invoke$arity$2(G__54279,G__54280) : pred__54266.call(null,G__54279,G__54280));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__54262,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20496__auto__,G__54262),null));
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20500__auto__){var self__ = this;
var this__20500__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20487__auto__,G__54262){var self__ = this;
var this__20487__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__54262,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20493__auto__,entry__20494__auto__){var self__ = this;
var this__20493__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20494__auto__))
{return cljs.core._assoc(this__20493__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20493__auto____$1,entry__20494__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__54281){var self__ = this;
var vec__54282 = p__54281;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54253_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__54253_SHARP_.tx);
});})(___$1,vec__54282,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54254_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__54254_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__54254_SHARP_.tx));
});})(___$1,vec__54282,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54255_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__54255_SHARP_.v);
});})(___$1,vec__54282,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54256_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__54256_SHARP_.tx);
});})(___$1,vec__54282,e,a,v,tx))
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
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54257_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__54257_SHARP_.tx);
});})(___$1,vec__54282,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54258_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__54258_SHARP_.tx);
});})(___$1,vec__54282,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54259_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__54259_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__54259_SHARP_.tx));
});})(___$1,vec__54282,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54260_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__54260_SHARP_.v);
});})(___$1,vec__54282,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__54282,e,a,v,tx){
return (function (p1__54261_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__54261_SHARP_.tx);
});})(___$1,vec__54282,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__20522__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__20522__auto__,writer__20523__auto__){return cljs.core._write(writer__20523__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema__$1,eavt,aevt,avet,max_eid,max_tx){return (new datascript.core.DB(schema__$1,eavt,aevt,avet,max_eid,max_tx));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__54264){return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__54264),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__54264),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__54264),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__54264),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__54264),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__54264),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54264,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], 0))));
});
datascript.core.equiv_index = (function equiv_index(x,y){var and__19267__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y));if(and__19267__auto__)
{var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__54284 = cljs.core.next(xs);
var G__54285 = cljs.core.next(ys);
xs = G__54284;
ys = G__54285;
continue;
}
} else
{return false;

}
}
break;
}
} else
{return and__19267__auto__;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return ((other instanceof datascript.core.DB)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.schema,other.schema)) && (datascript.core.equiv_index(this$__$1.eavt,other.eavt));
});
datascript.core.DB.prototype.cljs$core$IHash$ = true;
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var or__19289__auto__ = this$__$1.__hash;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
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
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20488__auto__,k__20489__auto__){var self__ = this;
var this__20488__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20488__auto____$1,k__20489__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20490__auto__,k54287,else__20491__auto__){var self__ = this;
var this__20490__auto____$1 = this;var G__54289 = (((k54287 instanceof cljs.core.Keyword))?k54287.fqn:null);switch (G__54289) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54287,else__20491__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20502__auto__,writer__20503__auto__,opts__20504__auto__){var self__ = this;
var this__20502__auto____$1 = this;var pr_pair__20505__auto__ = ((function (this__20502__auto____$1){
return (function (keyval__20506__auto__){return cljs.core.pr_sequential_writer(writer__20503__auto__,cljs.core.pr_writer,""," ","",opts__20504__auto__,keyval__20506__auto__);
});})(this__20502__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20503__auto__,pr_pair__20505__auto__,"#datascript.core.TxReport{",", ","}",opts__20504__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20486__auto__){var self__ = this;
var this__20486__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20482__auto__){var self__ = this;
var this__20482__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20492__auto__){var self__ = this;
var this__20492__auto____$1 = this;return (4 + cljs.core.count(self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20483__auto__){var self__ = this;
var this__20483__auto____$1 = this;var h__20113__auto__ = self__.__hash;if(!((h__20113__auto__ == null)))
{return h__20113__auto__;
} else
{var h__20113__auto____$1 = cljs.core.hash_imap(this__20483__auto____$1);self__.__hash = h__20113__auto____$1;
return h__20113__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20484__auto__,other__20485__auto__){var self__ = this;
var this__20484__auto____$1 = this;if(cljs.core.truth_((function (){var and__19267__auto__ = other__20485__auto__;if(cljs.core.truth_(and__19267__auto__))
{return ((this__20484__auto____$1.constructor === other__20485__auto__.constructor)) && (cljs.core.equiv_map(this__20484__auto____$1,other__20485__auto__));
} else
{return and__19267__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20497__auto__,k__20498__auto__){var self__ = this;
var this__20497__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null], null), null),k__20498__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20497__auto____$1),self__.__meta),k__20498__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20498__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20495__auto__,k__20496__auto__,G__54286){var self__ = this;
var this__20495__auto____$1 = this;var pred__54290 = cljs.core.keyword_identical_QMARK_;var expr__54291 = k__20496__auto__;if(cljs.core.truth_((function (){var G__54293 = new cljs.core.Keyword(null,"db-before","db-before",-553691536);var G__54294 = expr__54291;return (pred__54290.cljs$core$IFn$_invoke$arity$2 ? pred__54290.cljs$core$IFn$_invoke$arity$2(G__54293,G__54294) : pred__54290.call(null,G__54293,G__54294));
})()))
{return (new datascript.core.TxReport(G__54286,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54295 = new cljs.core.Keyword(null,"db-after","db-after",-571884666);var G__54296 = expr__54291;return (pred__54290.cljs$core$IFn$_invoke$arity$2 ? pred__54290.cljs$core$IFn$_invoke$arity$2(G__54295,G__54296) : pred__54290.call(null,G__54295,G__54296));
})()))
{return (new datascript.core.TxReport(self__.db_before,G__54286,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54297 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761);var G__54298 = expr__54291;return (pred__54290.cljs$core$IFn$_invoke$arity$2 ? pred__54290.cljs$core$IFn$_invoke$arity$2(G__54297,G__54298) : pred__54290.call(null,G__54297,G__54298));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__54286,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54299 = new cljs.core.Keyword(null,"tempids","tempids",1767509089);var G__54300 = expr__54291;return (pred__54290.cljs$core$IFn$_invoke$arity$2 ? pred__54290.cljs$core$IFn$_invoke$arity$2(G__54299,G__54300) : pred__54290.call(null,G__54299,G__54300));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__54286,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20496__auto__,G__54286),null));
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20500__auto__){var self__ = this;
var this__20500__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20487__auto__,G__54286){var self__ = this;
var this__20487__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__54286,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20493__auto__,entry__20494__auto__){var self__ = this;
var this__20493__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20494__auto__))
{return cljs.core._assoc(this__20493__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20493__auto____$1,entry__20494__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__20522__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__20522__auto__,writer__20523__auto__){return cljs.core._write(writer__20523__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__54288){return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__54288),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__54288),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__54288),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__54288),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54288,new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.array_seq([new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089)], 0))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__54303 = db;var G__54303__$1 = (((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54303,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__54303);return G__54303__$1;
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
datascript.core.explode = (function explode(db,entity){var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);var iter__20686__auto__ = ((function (eid){
return (function iter__54317(s__54318){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__54318__$1 = s__54318;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54318__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__54327 = cljs.core.first(xs__4624__auto__);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54327,(0),null);var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54327,(1),null);var iterys__20679__auto__ = ((function (s__54318__$1,vec__54327,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__54319(s__54320){return (new cljs.core.LazySeq(null,((function (s__54318__$1,vec__54327,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__54320__$1 = s__54320;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__54320__$1);if(temp__4126__auto____$1)
{var s__54320__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__54320__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__54320__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__54322 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__54321 = (0);while(true){
if((i__54321 < size__20685__auto__))
{var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__54321);cljs.core.chunk_append(b__54322,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null));
{
var G__54330 = (i__54321 + (1));
i__54321 = G__54330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54322),iter__54319(cljs.core.chunk_rest(s__54320__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54322),null);
}
} else
{var v = cljs.core.first(s__54320__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null),iter__54319(cljs.core.rest(s__54320__$2)));
}
} else
{return null;
}
break;
}
});})(s__54318__$1,vec__54327,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__54318__$1,vec__54327,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__20680__auto__ = cljs.core.seq(iterys__20679__auto__(((((vs instanceof Array) || (cljs.core.coll_QMARK_(vs))) && (!(cljs.core.map_QMARK_(vs))) && (datascript.core.multival_QMARK_(db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__20680__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20680__auto__,iter__54317(cljs.core.rest(s__54318__$1)));
} else
{{
var G__54331 = cljs.core.rest(s__54318__$1);
s__54318__$1 = G__54331;
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
;return iter__20686__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__54332){var vec__54334 = p__54332;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54334,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54334,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54334,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54334,(3),null);var tx = datascript.core.current_tx(report);var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_(db,a))
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
datascript.core.transact_tx_data = (function transact_tx_data(report,p__54335){while(true){
var vec__54339 = p__54335;var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54339,(0),null);var entities = cljs.core.nthnext(vec__54339,(1));var es = vec__54339;var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_(entity))
{if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)))
{{
var G__54342 = report;
var G__54343 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity),entities);
report = G__54342;
p__54335 = G__54343;
continue;
}
} else
{var eid = datascript.core.next_eid(db);var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);{
var G__54344 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,eid);
var G__54345 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__54344;
p__54335 = G__54345;
continue;
}
}
} else
{var vec__54340 = entity;var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54340,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54340,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54340,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54340,(3),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418)))
{var vec__54341 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54341,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54341,(1),null);var args = cljs.core.nthnext(vec__54341,(2));{
var G__54346 = report;
var G__54347 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__54346;
p__54335 = G__54347;
continue;
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__54348 = report;
var G__54349 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__54348;
p__54335 = G__54349;
continue;
}
} else
{{
var G__54350 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.core.next_eid(db));
var G__54351 = es;
report = G__54350;
p__54335 = G__54351;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__54352 = report;
var G__54353 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__54352;
p__54335 = G__54353;
continue;
}
} else
{{
var G__54354 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.core.next_eid(db));
var G__54355 = es;
report = G__54354;
p__54335 = G__54355;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841)))
{{
var G__54356 = datascript.core.transact_add(report,entity);
var G__54357 = entities;
report = G__54356;
p__54335 = G__54357;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231)))
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__54358 = datascript.core.transact_retract_datom(report,old_datom);
var G__54359 = entities;
report = G__54358;
p__54335 = G__54359;
continue;
}
} else
{{
var G__54360 = report;
var G__54361 = entities;
report = G__54360;
p__54335 = G__54361;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__54362 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__54363 = entities;
report = G__54362;
p__54335 = G__54363;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));{
var G__54364 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__54365 = entities;
report = G__54364;
p__54335 = G__54365;
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