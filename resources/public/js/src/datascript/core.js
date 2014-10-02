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
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20516__auto__,k__20517__auto__){var self__ = this;
var this__20516__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20516__auto____$1,k__20517__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20518__auto__,k36925,else__20519__auto__){var self__ = this;
var this__20518__auto____$1 = this;var G__36927 = (((k36925 instanceof cljs.core.Keyword))?k36925.fqn:null);switch (G__36927) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36925,else__20519__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20530__auto__,writer__20531__auto__,opts__20532__auto__){var self__ = this;
var this__20530__auto____$1 = this;var pr_pair__20533__auto__ = ((function (this__20530__auto____$1){
return (function (keyval__20534__auto__){return cljs.core.pr_sequential_writer(writer__20531__auto__,cljs.core.pr_writer,""," ","",opts__20532__auto__,keyval__20534__auto__);
});})(this__20530__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20531__auto__,pr_pair__20533__auto__,"#datascript.core.Datom{",", ","}",opts__20532__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20514__auto__){var self__ = this;
var this__20514__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20510__auto__){var self__ = this;
var this__20510__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20520__auto__){var self__ = this;
var this__20520__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20511__auto__){var self__ = this;
var this__20511__auto____$1 = this;var h__20183__auto__ = self__.__hash;if(!((h__20183__auto__ == null)))
{return h__20183__auto__;
} else
{var h__20183__auto____$1 = cljs.core.hash_imap(this__20511__auto____$1);self__.__hash = h__20183__auto____$1;
return h__20183__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20512__auto__,other__20513__auto__){var self__ = this;
var this__20512__auto____$1 = this;if(cljs.core.truth_((function (){var and__19325__auto__ = other__20513__auto__;if(cljs.core.truth_(and__19325__auto__))
{return ((this__20512__auto____$1.constructor === other__20513__auto__.constructor)) && (cljs.core.equiv_map(this__20512__auto____$1,other__20513__auto__));
} else
{return and__19325__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20525__auto__,k__20526__auto__){var self__ = this;
var this__20525__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__20526__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20525__auto____$1),self__.__meta),k__20526__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20526__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20523__auto__,k__20524__auto__,G__36924){var self__ = this;
var this__20523__auto____$1 = this;var pred__36928 = cljs.core.keyword_identical_QMARK_;var expr__36929 = k__20524__auto__;if(cljs.core.truth_((function (){var G__36931 = new cljs.core.Keyword(null,"e","e",1381269198);var G__36932 = expr__36929;return (pred__36928.cljs$core$IFn$_invoke$arity$2 ? pred__36928.cljs$core$IFn$_invoke$arity$2(G__36931,G__36932) : pred__36928.call(null,G__36931,G__36932));
})()))
{return (new datascript.core.Datom(G__36924,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36933 = new cljs.core.Keyword(null,"a","a",-2123407586);var G__36934 = expr__36929;return (pred__36928.cljs$core$IFn$_invoke$arity$2 ? pred__36928.cljs$core$IFn$_invoke$arity$2(G__36933,G__36934) : pred__36928.call(null,G__36933,G__36934));
})()))
{return (new datascript.core.Datom(self__.e,G__36924,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36935 = new cljs.core.Keyword(null,"v","v",21465059);var G__36936 = expr__36929;return (pred__36928.cljs$core$IFn$_invoke$arity$2 ? pred__36928.cljs$core$IFn$_invoke$arity$2(G__36935,G__36936) : pred__36928.call(null,G__36935,G__36936));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,G__36924,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36937 = new cljs.core.Keyword(null,"tx","tx",466630418);var G__36938 = expr__36929;return (pred__36928.cljs$core$IFn$_invoke$arity$2 ? pred__36928.cljs$core$IFn$_invoke$arity$2(G__36937,G__36938) : pred__36928.call(null,G__36937,G__36938));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__36924,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36939 = new cljs.core.Keyword(null,"added","added",2057651688);var G__36940 = expr__36929;return (pred__36928.cljs$core$IFn$_invoke$arity$2 ? pred__36928.cljs$core$IFn$_invoke$arity$2(G__36939,G__36940) : pred__36928.call(null,G__36939,G__36940));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__36924,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20524__auto__,G__36924),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20528__auto__){var self__ = this;
var this__20528__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20515__auto__,G__36924){var self__ = this;
var this__20515__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__36924,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20521__auto__,entry__20522__auto__){var self__ = this;
var this__20521__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20522__auto__))
{return cljs.core._assoc(this__20521__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20521__auto____$1,entry__20522__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__20561__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__20561__auto__,writer__20562__auto__){return cljs.core._write(writer__20562__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__36926){return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__36926),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__36926),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__36926),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__36926),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__36926),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36926,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.array_seq([new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688)], 0))));
});
datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.v,o.v));
});
datascript.core.Datom.prototype.cljs$core$IHash$ = true;
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__19347__auto__ = d__$1.__hash;if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
} else
{return d__$1.__hash = cljs.core.hash_combine(cljs.core.hash_combine(cljs.core.hash(d__$1.e),cljs.core.hash(d__$1.a)),cljs.core.hash(d__$1.v));
}
});
datascript.core.ISearch = (function (){var obj36943 = {};return obj36943;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__19325__auto__ = data;if(and__19325__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__19325__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__20576__auto__ = (((data == null))?null:data);return (function (){var or__19347__auto__ = (datascript.core._search[(function (){var G__36947 = x__20576__auto__;return goog.typeOf(G__36947);
})()]);if(or__19347__auto__)
{return or__19347__auto__;
} else
{var or__19347__auto____$1 = (datascript.core._search["_"]);if(or__19347__auto____$1)
{return or__19347__auto____$1;
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
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__19325__auto__ = o1;if(cljs.core.truth_(and__19325__auto__))
{return o2;
} else
{return and__19325__auto__;
}
})()))
{return cljs.core.compare(o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__21224__auto__ = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21224__auto__))
{var c__21224__auto____$1 = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21224__auto____$1))
{var c__21224__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21224__auto____$2))
{var c__21224__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21224__auto____$3))
{return (0);
} else
{return c__21224__auto____$3;
}
} else
{return c__21224__auto____$2;
}
} else
{return c__21224__auto____$1;
}
} else
{return c__21224__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__21224__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21224__auto__))
{var c__21224__auto____$1 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21224__auto____$1))
{var c__21224__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21224__auto____$2))
{var c__21224__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21224__auto____$3))
{return (0);
} else
{return c__21224__auto____$3;
}
} else
{return c__21224__auto____$2;
}
} else
{return c__21224__auto____$1;
}
} else
{return c__21224__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__21224__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21224__auto__))
{var c__21224__auto____$1 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21224__auto____$1))
{var c__21224__auto____$2 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21224__auto____$2))
{var c__21224__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21224__auto____$3))
{return (0);
} else
{return c__21224__auto____$3;
}
} else
{return c__21224__auto____$2;
}
} else
{return c__21224__auto____$1;
}
} else
{return c__21224__auto__;
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
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20516__auto__,k__20517__auto__){var self__ = this;
var this__20516__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20516__auto____$1,k__20517__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20518__auto__,k36958,else__20519__auto__){var self__ = this;
var this__20518__auto____$1 = this;var G__36960 = (((k36958 instanceof cljs.core.Keyword))?k36958.fqn:null);switch (G__36960) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36958,else__20519__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20530__auto__,writer__20531__auto__,opts__20532__auto__){var self__ = this;
var this__20530__auto____$1 = this;var pr_pair__20533__auto__ = ((function (this__20530__auto____$1){
return (function (keyval__20534__auto__){return cljs.core.pr_sequential_writer(writer__20531__auto__,cljs.core.pr_writer,""," ","",opts__20532__auto__,keyval__20534__auto__);
});})(this__20530__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20531__auto__,pr_pair__20533__auto__,"#datascript.core.DB{",", ","}",opts__20532__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20514__auto__){var self__ = this;
var this__20514__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20510__auto__){var self__ = this;
var this__20510__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20520__auto__){var self__ = this;
var this__20520__auto____$1 = this;return (6 + cljs.core.count(self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20511__auto__){var self__ = this;
var this__20511__auto____$1 = this;var h__20183__auto__ = self__.__hash;if(!((h__20183__auto__ == null)))
{return h__20183__auto__;
} else
{var h__20183__auto____$1 = cljs.core.hash_imap(this__20511__auto____$1);self__.__hash = h__20183__auto____$1;
return h__20183__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20512__auto__,other__20513__auto__){var self__ = this;
var this__20512__auto____$1 = this;if(cljs.core.truth_((function (){var and__19325__auto__ = other__20513__auto__;if(cljs.core.truth_(and__19325__auto__))
{return ((this__20512__auto____$1.constructor === other__20513__auto__.constructor)) && (cljs.core.equiv_map(this__20512__auto____$1,other__20513__auto__));
} else
{return and__19325__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20525__auto__,k__20526__auto__){var self__ = this;
var this__20525__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__20526__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20525__auto____$1),self__.__meta),k__20526__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20526__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20523__auto__,k__20524__auto__,G__36957){var self__ = this;
var this__20523__auto____$1 = this;var pred__36961 = cljs.core.keyword_identical_QMARK_;var expr__36962 = k__20524__auto__;if(cljs.core.truth_((function (){var G__36964 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__36965 = expr__36962;return (pred__36961.cljs$core$IFn$_invoke$arity$2 ? pred__36961.cljs$core$IFn$_invoke$arity$2(G__36964,G__36965) : pred__36961.call(null,G__36964,G__36965));
})()))
{return (new datascript.core.DB(G__36957,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36966 = new cljs.core.Keyword(null,"eavt","eavt",-666437073);var G__36967 = expr__36962;return (pred__36961.cljs$core$IFn$_invoke$arity$2 ? pred__36961.cljs$core$IFn$_invoke$arity$2(G__36966,G__36967) : pred__36961.call(null,G__36966,G__36967));
})()))
{return (new datascript.core.DB(self__.schema,G__36957,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36968 = new cljs.core.Keyword(null,"aevt","aevt",-585148059);var G__36969 = expr__36962;return (pred__36961.cljs$core$IFn$_invoke$arity$2 ? pred__36961.cljs$core$IFn$_invoke$arity$2(G__36968,G__36969) : pred__36961.call(null,G__36968,G__36969));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__36957,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36970 = new cljs.core.Keyword(null,"avet","avet",1383857032);var G__36971 = expr__36962;return (pred__36961.cljs$core$IFn$_invoke$arity$2 ? pred__36961.cljs$core$IFn$_invoke$arity$2(G__36970,G__36971) : pred__36961.call(null,G__36970,G__36971));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__36957,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36972 = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075);var G__36973 = expr__36962;return (pred__36961.cljs$core$IFn$_invoke$arity$2 ? pred__36961.cljs$core$IFn$_invoke$arity$2(G__36972,G__36973) : pred__36961.call(null,G__36972,G__36973));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__36957,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36974 = new cljs.core.Keyword(null,"max-tx","max-tx",1119558339);var G__36975 = expr__36962;return (pred__36961.cljs$core$IFn$_invoke$arity$2 ? pred__36961.cljs$core$IFn$_invoke$arity$2(G__36974,G__36975) : pred__36961.call(null,G__36974,G__36975));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__36957,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20524__auto__,G__36957),null));
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20528__auto__){var self__ = this;
var this__20528__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20515__auto__,G__36957){var self__ = this;
var this__20515__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__36957,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20521__auto__,entry__20522__auto__){var self__ = this;
var this__20521__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20522__auto__))
{return cljs.core._assoc(this__20521__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20521__auto____$1,entry__20522__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__36976){var self__ = this;
var vec__36977 = p__36976;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36977,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36948_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36948_SHARP_.tx);
});})(___$1,vec__36977,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36949_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__36949_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36949_SHARP_.tx));
});})(___$1,vec__36977,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36950_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__36950_SHARP_.v);
});})(___$1,vec__36977,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36951_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36951_SHARP_.tx);
});})(___$1,vec__36977,e,a,v,tx))
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
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36952_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36952_SHARP_.tx);
});})(___$1,vec__36977,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36953_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36953_SHARP_.tx);
});})(___$1,vec__36977,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36954_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__36954_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36954_SHARP_.tx));
});})(___$1,vec__36977,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36955_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__36955_SHARP_.v);
});})(___$1,vec__36977,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__36977,e,a,v,tx){
return (function (p1__36956_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__36956_SHARP_.tx);
});})(___$1,vec__36977,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__20561__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__20561__auto__,writer__20562__auto__){return cljs.core._write(writer__20562__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema__$1,eavt,aevt,avet,max_eid,max_tx){return (new datascript.core.DB(schema__$1,eavt,aevt,avet,max_eid,max_tx));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__36959){return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__36959),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__36959),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__36959),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__36959),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__36959),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__36959),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36959,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], 0))));
});
datascript.core.equiv_index = (function equiv_index(x,y){var and__19325__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y));if(and__19325__auto__)
{var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__36979 = cljs.core.next(xs);
var G__36980 = cljs.core.next(ys);
xs = G__36979;
ys = G__36980;
continue;
}
} else
{return false;

}
}
break;
}
} else
{return and__19325__auto__;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return ((other instanceof datascript.core.DB)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.schema,other.schema)) && (datascript.core.equiv_index(this$__$1.eavt,other.eavt));
});
datascript.core.DB.prototype.cljs$core$IHash$ = true;
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var or__19347__auto__ = this$__$1.__hash;if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
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
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20516__auto__,k__20517__auto__){var self__ = this;
var this__20516__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20516__auto____$1,k__20517__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20518__auto__,k36982,else__20519__auto__){var self__ = this;
var this__20518__auto____$1 = this;var G__36984 = (((k36982 instanceof cljs.core.Keyword))?k36982.fqn:null);switch (G__36984) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36982,else__20519__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20530__auto__,writer__20531__auto__,opts__20532__auto__){var self__ = this;
var this__20530__auto____$1 = this;var pr_pair__20533__auto__ = ((function (this__20530__auto____$1){
return (function (keyval__20534__auto__){return cljs.core.pr_sequential_writer(writer__20531__auto__,cljs.core.pr_writer,""," ","",opts__20532__auto__,keyval__20534__auto__);
});})(this__20530__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20531__auto__,pr_pair__20533__auto__,"#datascript.core.TxReport{",", ","}",opts__20532__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20514__auto__){var self__ = this;
var this__20514__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20510__auto__){var self__ = this;
var this__20510__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20520__auto__){var self__ = this;
var this__20520__auto____$1 = this;return (4 + cljs.core.count(self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20511__auto__){var self__ = this;
var this__20511__auto____$1 = this;var h__20183__auto__ = self__.__hash;if(!((h__20183__auto__ == null)))
{return h__20183__auto__;
} else
{var h__20183__auto____$1 = cljs.core.hash_imap(this__20511__auto____$1);self__.__hash = h__20183__auto____$1;
return h__20183__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20512__auto__,other__20513__auto__){var self__ = this;
var this__20512__auto____$1 = this;if(cljs.core.truth_((function (){var and__19325__auto__ = other__20513__auto__;if(cljs.core.truth_(and__19325__auto__))
{return ((this__20512__auto____$1.constructor === other__20513__auto__.constructor)) && (cljs.core.equiv_map(this__20512__auto____$1,other__20513__auto__));
} else
{return and__19325__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20525__auto__,k__20526__auto__){var self__ = this;
var this__20525__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null], null), null),k__20526__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20525__auto____$1),self__.__meta),k__20526__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20526__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20523__auto__,k__20524__auto__,G__36981){var self__ = this;
var this__20523__auto____$1 = this;var pred__36985 = cljs.core.keyword_identical_QMARK_;var expr__36986 = k__20524__auto__;if(cljs.core.truth_((function (){var G__36988 = new cljs.core.Keyword(null,"db-before","db-before",-553691536);var G__36989 = expr__36986;return (pred__36985.cljs$core$IFn$_invoke$arity$2 ? pred__36985.cljs$core$IFn$_invoke$arity$2(G__36988,G__36989) : pred__36985.call(null,G__36988,G__36989));
})()))
{return (new datascript.core.TxReport(G__36981,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36990 = new cljs.core.Keyword(null,"db-after","db-after",-571884666);var G__36991 = expr__36986;return (pred__36985.cljs$core$IFn$_invoke$arity$2 ? pred__36985.cljs$core$IFn$_invoke$arity$2(G__36990,G__36991) : pred__36985.call(null,G__36990,G__36991));
})()))
{return (new datascript.core.TxReport(self__.db_before,G__36981,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36992 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761);var G__36993 = expr__36986;return (pred__36985.cljs$core$IFn$_invoke$arity$2 ? pred__36985.cljs$core$IFn$_invoke$arity$2(G__36992,G__36993) : pred__36985.call(null,G__36992,G__36993));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__36981,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__36994 = new cljs.core.Keyword(null,"tempids","tempids",1767509089);var G__36995 = expr__36986;return (pred__36985.cljs$core$IFn$_invoke$arity$2 ? pred__36985.cljs$core$IFn$_invoke$arity$2(G__36994,G__36995) : pred__36985.call(null,G__36994,G__36995));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__36981,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20524__auto__,G__36981),null));
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20528__auto__){var self__ = this;
var this__20528__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20515__auto__,G__36981){var self__ = this;
var this__20515__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__36981,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20521__auto__,entry__20522__auto__){var self__ = this;
var this__20521__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20522__auto__))
{return cljs.core._assoc(this__20521__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20521__auto____$1,entry__20522__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__20561__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__20561__auto__,writer__20562__auto__){return cljs.core._write(writer__20562__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__36983){return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__36983),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__36983),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__36983),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__36983),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36983,new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.array_seq([new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089)], 0))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__36998 = db;var G__36998__$1 = (((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36998,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__36998);return G__36998__$1;
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
datascript.core.explode = (function explode(db,entity){var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);var iter__20763__auto__ = ((function (eid){
return (function iter__37012(s__37013){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__37013__$1 = s__37013;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37013__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__37022 = cljs.core.first(xs__4624__auto__);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37022,(0),null);var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37022,(1),null);var iterys__20759__auto__ = ((function (s__37013__$1,vec__37022,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__37014(s__37015){return (new cljs.core.LazySeq(null,((function (s__37013__$1,vec__37022,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__37015__$1 = s__37015;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__37015__$1);if(temp__4126__auto____$1)
{var s__37015__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__37015__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__37015__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__37017 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__37016 = (0);while(true){
if((i__37016 < size__20762__auto__))
{var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__37016);cljs.core.chunk_append(b__37017,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null));
{
var G__37025 = (i__37016 + (1));
i__37016 = G__37025;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37017),iter__37014(cljs.core.chunk_rest(s__37015__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37017),null);
}
} else
{var v = cljs.core.first(s__37015__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null),iter__37014(cljs.core.rest(s__37015__$2)));
}
} else
{return null;
}
break;
}
});})(s__37013__$1,vec__37022,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__37013__$1,vec__37022,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__20760__auto__ = cljs.core.seq(iterys__20759__auto__(((((vs instanceof Array) || (cljs.core.coll_QMARK_(vs))) && (!(cljs.core.map_QMARK_(vs))) && (datascript.core.multival_QMARK_(db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__20760__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20760__auto__,iter__37012(cljs.core.rest(s__37013__$1)));
} else
{{
var G__37026 = cljs.core.rest(s__37013__$1);
s__37013__$1 = G__37026;
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
;return iter__20763__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__37027){var vec__37029 = p__37027;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37029,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37029,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37029,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37029,(3),null);var tx = datascript.core.current_tx(report);var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_(db,a))
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
datascript.core.transact_tx_data = (function transact_tx_data(report,p__37030){while(true){
var vec__37034 = p__37030;var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034,(0),null);var entities = cljs.core.nthnext(vec__37034,(1));var es = vec__37034;var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_(entity))
{if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)))
{{
var G__37037 = report;
var G__37038 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity),entities);
report = G__37037;
p__37030 = G__37038;
continue;
}
} else
{var eid = datascript.core.next_eid(db);var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);{
var G__37039 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,eid);
var G__37040 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__37039;
p__37030 = G__37040;
continue;
}
}
} else
{var vec__37035 = entity;var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37035,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37035,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37035,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37035,(3),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418)))
{var vec__37036 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37036,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37036,(1),null);var args = cljs.core.nthnext(vec__37036,(2));{
var G__37041 = report;
var G__37042 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__37041;
p__37030 = G__37042;
continue;
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__37043 = report;
var G__37044 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__37043;
p__37030 = G__37044;
continue;
}
} else
{{
var G__37045 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.core.next_eid(db));
var G__37046 = es;
report = G__37045;
p__37030 = G__37046;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__37047 = report;
var G__37048 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__37047;
p__37030 = G__37048;
continue;
}
} else
{{
var G__37049 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.core.next_eid(db));
var G__37050 = es;
report = G__37049;
p__37030 = G__37050;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841)))
{{
var G__37051 = datascript.core.transact_add(report,entity);
var G__37052 = entities;
report = G__37051;
p__37030 = G__37052;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231)))
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__37053 = datascript.core.transact_retract_datom(report,old_datom);
var G__37054 = entities;
report = G__37053;
p__37030 = G__37054;
continue;
}
} else
{{
var G__37055 = report;
var G__37056 = entities;
report = G__37055;
p__37030 = G__37056;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__37057 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__37058 = entities;
report = G__37057;
p__37030 = G__37058;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));{
var G__37059 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__37060 = entities;
report = G__37059;
p__37030 = G__37060;
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