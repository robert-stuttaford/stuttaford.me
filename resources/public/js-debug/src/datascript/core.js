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
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k47601,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__47603 = (((k47601 instanceof cljs.core.Keyword))?k47601.fqn:null);switch (G__47603) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47601,else__20475__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#datascript.core.Datom{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
var this__20468__auto____$1 = this;if(cljs.core.truth_((function (){var and__19277__auto__ = other__20469__auto__;if(cljs.core.truth_(and__19277__auto__))
{return ((this__20468__auto____$1.constructor === other__20469__auto__.constructor)) && (cljs.core.equiv_map(this__20468__auto____$1,other__20469__auto__));
} else
{return and__19277__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__47600){var self__ = this;
var this__20479__auto____$1 = this;var pred__47604 = cljs.core.keyword_identical_QMARK_;var expr__47605 = k__20480__auto__;if(cljs.core.truth_((function (){var G__47607 = new cljs.core.Keyword(null,"e","e",1381269198);var G__47608 = expr__47605;return (pred__47604.cljs$core$IFn$_invoke$arity$2 ? pred__47604.cljs$core$IFn$_invoke$arity$2(G__47607,G__47608) : pred__47604.call(null,G__47607,G__47608));
})()))
{return (new datascript.core.Datom(G__47600,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47609 = new cljs.core.Keyword(null,"a","a",-2123407586);var G__47610 = expr__47605;return (pred__47604.cljs$core$IFn$_invoke$arity$2 ? pred__47604.cljs$core$IFn$_invoke$arity$2(G__47609,G__47610) : pred__47604.call(null,G__47609,G__47610));
})()))
{return (new datascript.core.Datom(self__.e,G__47600,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47611 = new cljs.core.Keyword(null,"v","v",21465059);var G__47612 = expr__47605;return (pred__47604.cljs$core$IFn$_invoke$arity$2 ? pred__47604.cljs$core$IFn$_invoke$arity$2(G__47611,G__47612) : pred__47604.call(null,G__47611,G__47612));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,G__47600,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47613 = new cljs.core.Keyword(null,"tx","tx",466630418);var G__47614 = expr__47605;return (pred__47604.cljs$core$IFn$_invoke$arity$2 ? pred__47604.cljs$core$IFn$_invoke$arity$2(G__47613,G__47614) : pred__47604.call(null,G__47613,G__47614));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__47600,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47615 = new cljs.core.Keyword(null,"added","added",2057651688);var G__47616 = expr__47605;return (pred__47604.cljs$core$IFn$_invoke$arity$2 ? pred__47604.cljs$core$IFn$_invoke$arity$2(G__47615,G__47616) : pred__47604.call(null,G__47615,G__47616));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__47600,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__47600),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__47600){var self__ = this;
var this__20471__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__47600,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__47602){return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__47602),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__47602),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__47602),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__47602),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__47602),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47602,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.array_seq([new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688)], 0))));
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
datascript.core.ISearch = (function (){var obj47619 = {};return obj47619;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__19277__auto__ = data;if(and__19277__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__19277__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__20556__auto__ = (((data == null))?null:data);return (function (){var or__19289__auto__ = (datascript.core._search[(function (){var G__47623 = x__20556__auto__;return goog.typeOf(G__47623);
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
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__19277__auto__ = o1;if(cljs.core.truth_(and__19277__auto__))
{return o2;
} else
{return and__19277__auto__;
}
})()))
{return cljs.core.compare(o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__21091__auto__ = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21091__auto__))
{var c__21091__auto____$1 = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21091__auto____$1))
{var c__21091__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21091__auto____$2))
{var c__21091__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21091__auto____$3))
{return (0);
} else
{return c__21091__auto____$3;
}
} else
{return c__21091__auto____$2;
}
} else
{return c__21091__auto____$1;
}
} else
{return c__21091__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__21091__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21091__auto__))
{var c__21091__auto____$1 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21091__auto____$1))
{var c__21091__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21091__auto____$2))
{var c__21091__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21091__auto____$3))
{return (0);
} else
{return c__21091__auto____$3;
}
} else
{return c__21091__auto____$2;
}
} else
{return c__21091__auto____$1;
}
} else
{return c__21091__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__21091__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__21091__auto__))
{var c__21091__auto____$1 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__21091__auto____$1))
{var c__21091__auto____$2 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__21091__auto____$2))
{var c__21091__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__21091__auto____$3))
{return (0);
} else
{return c__21091__auto____$3;
}
} else
{return c__21091__auto____$2;
}
} else
{return c__21091__auto____$1;
}
} else
{return c__21091__auto__;
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
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k47634,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__47636 = (((k47634 instanceof cljs.core.Keyword))?k47634.fqn:null);switch (G__47636) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47634,else__20475__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#datascript.core.DB{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (6 + cljs.core.count(self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
var this__20468__auto____$1 = this;if(cljs.core.truth_((function (){var and__19277__auto__ = other__20469__auto__;if(cljs.core.truth_(and__19277__auto__))
{return ((this__20468__auto____$1.constructor === other__20469__auto__.constructor)) && (cljs.core.equiv_map(this__20468__auto____$1,other__20469__auto__));
} else
{return and__19277__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__47633){var self__ = this;
var this__20479__auto____$1 = this;var pred__47637 = cljs.core.keyword_identical_QMARK_;var expr__47638 = k__20480__auto__;if(cljs.core.truth_((function (){var G__47640 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__47641 = expr__47638;return (pred__47637.cljs$core$IFn$_invoke$arity$2 ? pred__47637.cljs$core$IFn$_invoke$arity$2(G__47640,G__47641) : pred__47637.call(null,G__47640,G__47641));
})()))
{return (new datascript.core.DB(G__47633,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47642 = new cljs.core.Keyword(null,"eavt","eavt",-666437073);var G__47643 = expr__47638;return (pred__47637.cljs$core$IFn$_invoke$arity$2 ? pred__47637.cljs$core$IFn$_invoke$arity$2(G__47642,G__47643) : pred__47637.call(null,G__47642,G__47643));
})()))
{return (new datascript.core.DB(self__.schema,G__47633,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47644 = new cljs.core.Keyword(null,"aevt","aevt",-585148059);var G__47645 = expr__47638;return (pred__47637.cljs$core$IFn$_invoke$arity$2 ? pred__47637.cljs$core$IFn$_invoke$arity$2(G__47644,G__47645) : pred__47637.call(null,G__47644,G__47645));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__47633,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47646 = new cljs.core.Keyword(null,"avet","avet",1383857032);var G__47647 = expr__47638;return (pred__47637.cljs$core$IFn$_invoke$arity$2 ? pred__47637.cljs$core$IFn$_invoke$arity$2(G__47646,G__47647) : pred__47637.call(null,G__47646,G__47647));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__47633,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47648 = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075);var G__47649 = expr__47638;return (pred__47637.cljs$core$IFn$_invoke$arity$2 ? pred__47637.cljs$core$IFn$_invoke$arity$2(G__47648,G__47649) : pred__47637.call(null,G__47648,G__47649));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__47633,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47650 = new cljs.core.Keyword(null,"max-tx","max-tx",1119558339);var G__47651 = expr__47638;return (pred__47637.cljs$core$IFn$_invoke$arity$2 ? pred__47637.cljs$core$IFn$_invoke$arity$2(G__47650,G__47651) : pred__47637.call(null,G__47650,G__47651));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__47633,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__47633),null));
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__47633){var self__ = this;
var this__20471__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__47633,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__47652){var self__ = this;
var vec__47653 = p__47652;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47653,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47653,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47653,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47653,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47624_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__47624_SHARP_.tx);
});})(___$1,vec__47653,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47625_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__47625_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__47625_SHARP_.tx));
});})(___$1,vec__47653,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47626_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__47626_SHARP_.v);
});})(___$1,vec__47653,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47627_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__47627_SHARP_.tx);
});})(___$1,vec__47653,e,a,v,tx))
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
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47628_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__47628_SHARP_.tx);
});})(___$1,vec__47653,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47629_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__47629_SHARP_.tx);
});})(___$1,vec__47653,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47630_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__47630_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__47630_SHARP_.tx));
});})(___$1,vec__47653,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47631_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__47631_SHARP_.v);
});})(___$1,vec__47653,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__47653,e,a,v,tx){
return (function (p1__47632_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__47632_SHARP_.tx);
});})(___$1,vec__47653,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema__$1,eavt,aevt,avet,max_eid,max_tx){return (new datascript.core.DB(schema__$1,eavt,aevt,avet,max_eid,max_tx));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__47635){return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__47635),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__47635),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__47635),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__47635),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__47635),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__47635),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47635,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], 0))));
});
datascript.core.equiv_index = (function equiv_index(x,y){var and__19277__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y));if(and__19277__auto__)
{var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__47655 = cljs.core.next(xs);
var G__47656 = cljs.core.next(ys);
xs = G__47655;
ys = G__47656;
continue;
}
} else
{return false;

}
}
break;
}
} else
{return and__19277__auto__;
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
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k47658,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__47660 = (((k47658 instanceof cljs.core.Keyword))?k47658.fqn:null);switch (G__47660) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47658,else__20475__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#datascript.core.TxReport{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (4 + cljs.core.count(self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
var this__20468__auto____$1 = this;if(cljs.core.truth_((function (){var and__19277__auto__ = other__20469__auto__;if(cljs.core.truth_(and__19277__auto__))
{return ((this__20468__auto____$1.constructor === other__20469__auto__.constructor)) && (cljs.core.equiv_map(this__20468__auto____$1,other__20469__auto__));
} else
{return and__19277__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__47657){var self__ = this;
var this__20479__auto____$1 = this;var pred__47661 = cljs.core.keyword_identical_QMARK_;var expr__47662 = k__20480__auto__;if(cljs.core.truth_((function (){var G__47664 = new cljs.core.Keyword(null,"db-before","db-before",-553691536);var G__47665 = expr__47662;return (pred__47661.cljs$core$IFn$_invoke$arity$2 ? pred__47661.cljs$core$IFn$_invoke$arity$2(G__47664,G__47665) : pred__47661.call(null,G__47664,G__47665));
})()))
{return (new datascript.core.TxReport(G__47657,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47666 = new cljs.core.Keyword(null,"db-after","db-after",-571884666);var G__47667 = expr__47662;return (pred__47661.cljs$core$IFn$_invoke$arity$2 ? pred__47661.cljs$core$IFn$_invoke$arity$2(G__47666,G__47667) : pred__47661.call(null,G__47666,G__47667));
})()))
{return (new datascript.core.TxReport(self__.db_before,G__47657,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47668 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761);var G__47669 = expr__47662;return (pred__47661.cljs$core$IFn$_invoke$arity$2 ? pred__47661.cljs$core$IFn$_invoke$arity$2(G__47668,G__47669) : pred__47661.call(null,G__47668,G__47669));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__47657,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__47670 = new cljs.core.Keyword(null,"tempids","tempids",1767509089);var G__47671 = expr__47662;return (pred__47661.cljs$core$IFn$_invoke$arity$2 ? pred__47661.cljs$core$IFn$_invoke$arity$2(G__47670,G__47671) : pred__47661.call(null,G__47670,G__47671));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__47657,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__47657),null));
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__47657){var self__ = this;
var this__20471__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__47657,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__47659){return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__47659),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__47659),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__47659),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__47659),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47659,new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.array_seq([new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089)], 0))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__47674 = db;var G__47674__$1 = (((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47674,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__47674);return G__47674__$1;
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
datascript.core.explode = (function explode(db,entity){var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);var iter__20684__auto__ = ((function (eid){
return (function iter__47688(s__47689){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__47689__$1 = s__47689;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47689__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__47698 = cljs.core.first(xs__4624__auto__);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698,(0),null);var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47698,(1),null);var iterys__20680__auto__ = ((function (s__47689__$1,vec__47698,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__47690(s__47691){return (new cljs.core.LazySeq(null,((function (s__47689__$1,vec__47698,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__47691__$1 = s__47691;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__47691__$1);if(temp__4126__auto____$1)
{var s__47691__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__47691__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__47691__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__47693 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__47692 = (0);while(true){
if((i__47692 < size__20683__auto__))
{var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__47692);cljs.core.chunk_append(b__47693,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null));
{
var G__47701 = (i__47692 + (1));
i__47692 = G__47701;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47693),iter__47690(cljs.core.chunk_rest(s__47691__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47693),null);
}
} else
{var v = cljs.core.first(s__47691__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null),iter__47690(cljs.core.rest(s__47691__$2)));
}
} else
{return null;
}
break;
}
});})(s__47689__$1,vec__47698,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__47689__$1,vec__47698,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__20681__auto__ = cljs.core.seq(iterys__20680__auto__(((((vs instanceof Array) || (cljs.core.coll_QMARK_(vs))) && (!(cljs.core.map_QMARK_(vs))) && (datascript.core.multival_QMARK_(db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__20681__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20681__auto__,iter__47688(cljs.core.rest(s__47689__$1)));
} else
{{
var G__47702 = cljs.core.rest(s__47689__$1);
s__47689__$1 = G__47702;
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
;return iter__20684__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__47703){var vec__47705 = p__47703;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47705,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47705,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47705,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47705,(3),null);var tx = datascript.core.current_tx(report);var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_(db,a))
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
datascript.core.transact_tx_data = (function transact_tx_data(report,p__47706){while(true){
var vec__47710 = p__47706;var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47710,(0),null);var entities = cljs.core.nthnext(vec__47710,(1));var es = vec__47710;var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_(entity))
{if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)))
{{
var G__47713 = report;
var G__47714 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity),entities);
report = G__47713;
p__47706 = G__47714;
continue;
}
} else
{var eid = datascript.core.next_eid(db);var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);{
var G__47715 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,eid);
var G__47716 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__47715;
p__47706 = G__47716;
continue;
}
}
} else
{var vec__47711 = entity;var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47711,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47711,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47711,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47711,(3),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418)))
{var vec__47712 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47712,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47712,(1),null);var args = cljs.core.nthnext(vec__47712,(2));{
var G__47717 = report;
var G__47718 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__47717;
p__47706 = G__47718;
continue;
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__47719 = report;
var G__47720 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__47719;
p__47706 = G__47720;
continue;
}
} else
{{
var G__47721 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.core.next_eid(db));
var G__47722 = es;
report = G__47721;
p__47706 = G__47722;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__47723 = report;
var G__47724 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__47723;
p__47706 = G__47724;
continue;
}
} else
{{
var G__47725 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.core.next_eid(db));
var G__47726 = es;
report = G__47725;
p__47706 = G__47726;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841)))
{{
var G__47727 = datascript.core.transact_add(report,entity);
var G__47728 = entities;
report = G__47727;
p__47706 = G__47728;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231)))
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__47729 = datascript.core.transact_retract_datom(report,old_datom);
var G__47730 = entities;
report = G__47729;
p__47706 = G__47730;
continue;
}
} else
{{
var G__47731 = report;
var G__47732 = entities;
report = G__47731;
p__47706 = G__47732;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__47733 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__47734 = entities;
report = G__47733;
p__47706 = G__47734;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));{
var G__47735 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__47736 = entities;
report = G__47735;
p__47706 = G__47736;
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