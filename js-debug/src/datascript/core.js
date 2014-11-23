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
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20835__auto__,k__20836__auto__){var self__ = this;
var this__20835__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20835__auto____$1,k__20836__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20837__auto__,k73388,else__20838__auto__){var self__ = this;
var this__20837__auto____$1 = this;var G__73390 = (((k73388 instanceof cljs.core.Keyword))?k73388.fqn:null);switch (G__73390) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73388,else__20838__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20851__auto__,writer__20852__auto__,opts__20853__auto__){var self__ = this;
var this__20851__auto____$1 = this;var pr_pair__20854__auto__ = ((function (this__20851__auto____$1){
return (function (keyval__20855__auto__){return cljs.core.pr_sequential_writer(writer__20852__auto__,cljs.core.pr_writer,""," ","",opts__20853__auto__,keyval__20855__auto__);
});})(this__20851__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20852__auto__,pr_pair__20854__auto__,"#datascript.core.Datom{",", ","}",opts__20853__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20833__auto__){var self__ = this;
var this__20833__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20828__auto__){var self__ = this;
var this__20828__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20839__auto__){var self__ = this;
var this__20839__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20830__auto__){var self__ = this;
var this__20830__auto____$1 = this;var h__20502__auto__ = self__.__hash;if(!((h__20502__auto__ == null)))
{return h__20502__auto__;
} else
{var h__20502__auto____$1 = cljs.core.hash_imap(this__20830__auto____$1);self__.__hash = h__20502__auto____$1;
return h__20502__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20831__auto__,other__20832__auto__){var self__ = this;
var this__20831__auto____$1 = this;if(cljs.core.truth_((function (){var and__19697__auto__ = other__20832__auto__;if(cljs.core.truth_(and__19697__auto__))
{return ((this__20831__auto____$1.constructor === other__20832__auto__.constructor)) && (cljs.core.equiv_map(this__20831__auto____$1,other__20832__auto__));
} else
{return and__19697__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20844__auto__,k__20846__auto__){var self__ = this;
var this__20844__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__20846__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20844__auto____$1),self__.__meta),k__20846__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20846__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20842__auto__,k__20843__auto__,G__73387){var self__ = this;
var this__20842__auto____$1 = this;var pred__73391 = cljs.core.keyword_identical_QMARK_;var expr__73392 = k__20843__auto__;if(cljs.core.truth_((function (){var G__73394 = new cljs.core.Keyword(null,"e","e",1381269198);var G__73395 = expr__73392;return (pred__73391.cljs$core$IFn$_invoke$arity$2 ? pred__73391.cljs$core$IFn$_invoke$arity$2(G__73394,G__73395) : pred__73391.call(null,G__73394,G__73395));
})()))
{return (new datascript.core.Datom(G__73387,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73396 = new cljs.core.Keyword(null,"a","a",-2123407586);var G__73397 = expr__73392;return (pred__73391.cljs$core$IFn$_invoke$arity$2 ? pred__73391.cljs$core$IFn$_invoke$arity$2(G__73396,G__73397) : pred__73391.call(null,G__73396,G__73397));
})()))
{return (new datascript.core.Datom(self__.e,G__73387,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73398 = new cljs.core.Keyword(null,"v","v",21465059);var G__73399 = expr__73392;return (pred__73391.cljs$core$IFn$_invoke$arity$2 ? pred__73391.cljs$core$IFn$_invoke$arity$2(G__73398,G__73399) : pred__73391.call(null,G__73398,G__73399));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,G__73387,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73400 = new cljs.core.Keyword(null,"tx","tx",466630418);var G__73401 = expr__73392;return (pred__73391.cljs$core$IFn$_invoke$arity$2 ? pred__73391.cljs$core$IFn$_invoke$arity$2(G__73400,G__73401) : pred__73391.call(null,G__73400,G__73401));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__73387,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73402 = new cljs.core.Keyword(null,"added","added",2057651688);var G__73403 = expr__73392;return (pred__73391.cljs$core$IFn$_invoke$arity$2 ? pred__73391.cljs$core$IFn$_invoke$arity$2(G__73402,G__73403) : pred__73391.call(null,G__73402,G__73403));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__73387,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20843__auto__,G__73387),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20849__auto__){var self__ = this;
var this__20849__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20834__auto__,G__73387){var self__ = this;
var this__20834__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__73387,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20840__auto__,entry__20841__auto__){var self__ = this;
var this__20840__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20841__auto__))
{return cljs.core._assoc(this__20840__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20840__auto____$1,entry__20841__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__20898__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__20898__auto__,writer__20899__auto__){return cljs.core._write(writer__20899__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__73389){return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__73389),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__73389),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__73389),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__73389),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__73389),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__73389,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.array_seq([new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688)], 0))));
});
datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.v,o.v));
});
datascript.core.Datom.prototype.cljs$core$IHash$ = true;
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__19711__auto__ = d__$1.__hash;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return d__$1.__hash = cljs.core.hash_combine(cljs.core.hash_combine(cljs.core.hash(d__$1.e),cljs.core.hash(d__$1.a)),cljs.core.hash(d__$1.v));
}
});
datascript.core.ISearch = (function (){var obj73406 = {};return obj73406;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__19697__auto__ = data;if(and__19697__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__19697__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__20914__auto__ = (((data == null))?null:data);return (function (){var or__19711__auto__ = (datascript.core._search[(function (){var G__73410 = x__20914__auto__;return goog.typeOf(G__73410);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (datascript.core._search["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
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
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__19697__auto__ = o1;if(cljs.core.truth_(and__19697__auto__))
{return o2;
} else
{return and__19697__auto__;
}
})()))
{return cljs.core.compare(o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__22477__auto__ = datascript.core.cmp(d1.e,d2.e);if(((0) === c__22477__auto__))
{var c__22477__auto____$1 = datascript.core.cmp(d1.a,d2.a);if(((0) === c__22477__auto____$1))
{var c__22477__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__22477__auto____$2))
{var c__22477__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__22477__auto____$3))
{return (0);
} else
{return c__22477__auto____$3;
}
} else
{return c__22477__auto____$2;
}
} else
{return c__22477__auto____$1;
}
} else
{return c__22477__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__22477__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__22477__auto__))
{var c__22477__auto____$1 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__22477__auto____$1))
{var c__22477__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__22477__auto____$2))
{var c__22477__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__22477__auto____$3))
{return (0);
} else
{return c__22477__auto____$3;
}
} else
{return c__22477__auto____$2;
}
} else
{return c__22477__auto____$1;
}
} else
{return c__22477__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__22477__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__22477__auto__))
{var c__22477__auto____$1 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__22477__auto____$1))
{var c__22477__auto____$2 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__22477__auto____$2))
{var c__22477__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__22477__auto____$3))
{return (0);
} else
{return c__22477__auto____$3;
}
} else
{return c__22477__auto____$2;
}
} else
{return c__22477__auto____$1;
}
} else
{return c__22477__auto__;
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
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20835__auto__,k__20836__auto__){var self__ = this;
var this__20835__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20835__auto____$1,k__20836__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20837__auto__,k73421,else__20838__auto__){var self__ = this;
var this__20837__auto____$1 = this;var G__73423 = (((k73421 instanceof cljs.core.Keyword))?k73421.fqn:null);switch (G__73423) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73421,else__20838__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20851__auto__,writer__20852__auto__,opts__20853__auto__){var self__ = this;
var this__20851__auto____$1 = this;var pr_pair__20854__auto__ = ((function (this__20851__auto____$1){
return (function (keyval__20855__auto__){return cljs.core.pr_sequential_writer(writer__20852__auto__,cljs.core.pr_writer,""," ","",opts__20853__auto__,keyval__20855__auto__);
});})(this__20851__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20852__auto__,pr_pair__20854__auto__,"#datascript.core.DB{",", ","}",opts__20853__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20833__auto__){var self__ = this;
var this__20833__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20828__auto__){var self__ = this;
var this__20828__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20839__auto__){var self__ = this;
var this__20839__auto____$1 = this;return (7 + cljs.core.count(self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20830__auto__){var self__ = this;
var this__20830__auto____$1 = this;var h__20502__auto__ = self__.__hash;if(!((h__20502__auto__ == null)))
{return h__20502__auto__;
} else
{var h__20502__auto____$1 = cljs.core.hash_imap(this__20830__auto____$1);self__.__hash = h__20502__auto____$1;
return h__20502__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20831__auto__,other__20832__auto__){var self__ = this;
var this__20831__auto____$1 = this;if(cljs.core.truth_((function (){var and__19697__auto__ = other__20832__auto__;if(cljs.core.truth_(and__19697__auto__))
{return ((this__20831__auto____$1.constructor === other__20832__auto__.constructor)) && (cljs.core.equiv_map(this__20831__auto____$1,other__20832__auto__));
} else
{return and__19697__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20844__auto__,k__20846__auto__){var self__ = this;
var this__20844__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"refs","refs",-1560051448),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__20846__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20844__auto____$1),self__.__meta),k__20846__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20846__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20842__auto__,k__20843__auto__,G__73420){var self__ = this;
var this__20842__auto____$1 = this;var pred__73424 = cljs.core.keyword_identical_QMARK_;var expr__73425 = k__20843__auto__;if(cljs.core.truth_((function (){var G__73427 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__73428 = expr__73425;return (pred__73424.cljs$core$IFn$_invoke$arity$2 ? pred__73424.cljs$core$IFn$_invoke$arity$2(G__73427,G__73428) : pred__73424.call(null,G__73427,G__73428));
})()))
{return (new datascript.core.DB(G__73420,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73429 = new cljs.core.Keyword(null,"eavt","eavt",-666437073);var G__73430 = expr__73425;return (pred__73424.cljs$core$IFn$_invoke$arity$2 ? pred__73424.cljs$core$IFn$_invoke$arity$2(G__73429,G__73430) : pred__73424.call(null,G__73429,G__73430));
})()))
{return (new datascript.core.DB(self__.schema,G__73420,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73431 = new cljs.core.Keyword(null,"aevt","aevt",-585148059);var G__73432 = expr__73425;return (pred__73424.cljs$core$IFn$_invoke$arity$2 ? pred__73424.cljs$core$IFn$_invoke$arity$2(G__73431,G__73432) : pred__73424.call(null,G__73431,G__73432));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__73420,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73433 = new cljs.core.Keyword(null,"avet","avet",1383857032);var G__73434 = expr__73425;return (pred__73424.cljs$core$IFn$_invoke$arity$2 ? pred__73424.cljs$core$IFn$_invoke$arity$2(G__73433,G__73434) : pred__73424.call(null,G__73433,G__73434));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__73420,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73435 = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075);var G__73436 = expr__73425;return (pred__73424.cljs$core$IFn$_invoke$arity$2 ? pred__73424.cljs$core$IFn$_invoke$arity$2(G__73435,G__73436) : pred__73424.call(null,G__73435,G__73436));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__73420,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73437 = new cljs.core.Keyword(null,"max-tx","max-tx",1119558339);var G__73438 = expr__73425;return (pred__73424.cljs$core$IFn$_invoke$arity$2 ? pred__73424.cljs$core$IFn$_invoke$arity$2(G__73437,G__73438) : pred__73424.call(null,G__73437,G__73438));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__73420,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73439 = new cljs.core.Keyword(null,"refs","refs",-1560051448);var G__73440 = expr__73425;return (pred__73424.cljs$core$IFn$_invoke$arity$2 ? pred__73424.cljs$core$IFn$_invoke$arity$2(G__73439,G__73440) : pred__73424.call(null,G__73439,G__73440));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__73420,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20843__auto__,G__73420),null));
}
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20849__auto__){var self__ = this;
var this__20849__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20834__auto__,G__73420){var self__ = this;
var this__20834__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,G__73420,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20840__auto__,entry__20841__auto__){var self__ = this;
var this__20840__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20841__auto__))
{return cljs.core._assoc(this__20840__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20840__auto____$1,entry__20841__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__73441){var self__ = this;
var vec__73442 = p__73441;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73442,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73442,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73442,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73442,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73411_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__73411_SHARP_.tx);
});})(___$1,vec__73442,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73412_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__73412_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__73412_SHARP_.tx));
});})(___$1,vec__73442,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73413_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__73413_SHARP_.v);
});})(___$1,vec__73442,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73414_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__73414_SHARP_.tx);
});})(___$1,vec__73442,e,a,v,tx))
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
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73415_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__73415_SHARP_.tx);
});})(___$1,vec__73442,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73416_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__73416_SHARP_.tx);
});})(___$1,vec__73442,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73417_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__73417_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__73417_SHARP_.tx));
});})(___$1,vec__73442,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73418_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__73418_SHARP_.v);
});})(___$1,vec__73442,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__73442,e,a,v,tx){
return (function (p1__73419_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__73419_SHARP_.tx);
});})(___$1,vec__73442,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__20898__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__20898__auto__,writer__20899__auto__){return cljs.core._write(writer__20899__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema__$1,eavt,aevt,avet,max_eid,max_tx,refs){return (new datascript.core.DB(schema__$1,eavt,aevt,avet,max_eid,max_tx,refs));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__73422){return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__73422),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__73422),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__73422),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__73422),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__73422),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__73422),new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(G__73422),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__73422,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"refs","refs",-1560051448)], 0))));
});
datascript.core.equiv_index = (function equiv_index(x,y){var and__19697__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y));if(and__19697__auto__)
{var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__73444 = cljs.core.next(xs);
var G__73445 = cljs.core.next(ys);
xs = G__73444;
ys = G__73445;
continue;
}
} else
{return false;

}
}
break;
}
} else
{return and__19697__auto__;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return ((other instanceof datascript.core.DB)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.schema,other.schema)) && (datascript.core.equiv_index(this$__$1.eavt,other.eavt));
});
datascript.core.DB.prototype.cljs$core$IHash$ = true;
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var or__19711__auto__ = this$__$1.__hash;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
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
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20835__auto__,k__20836__auto__){var self__ = this;
var this__20835__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20835__auto____$1,k__20836__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20837__auto__,k73447,else__20838__auto__){var self__ = this;
var this__20837__auto____$1 = this;var G__73449 = (((k73447 instanceof cljs.core.Keyword))?k73447.fqn:null);switch (G__73449) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73447,else__20838__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20851__auto__,writer__20852__auto__,opts__20853__auto__){var self__ = this;
var this__20851__auto____$1 = this;var pr_pair__20854__auto__ = ((function (this__20851__auto____$1){
return (function (keyval__20855__auto__){return cljs.core.pr_sequential_writer(writer__20852__auto__,cljs.core.pr_writer,""," ","",opts__20853__auto__,keyval__20855__auto__);
});})(this__20851__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20852__auto__,pr_pair__20854__auto__,"#datascript.core.TxReport{",", ","}",opts__20853__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20833__auto__){var self__ = this;
var this__20833__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20828__auto__){var self__ = this;
var this__20828__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20839__auto__){var self__ = this;
var this__20839__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20830__auto__){var self__ = this;
var this__20830__auto____$1 = this;var h__20502__auto__ = self__.__hash;if(!((h__20502__auto__ == null)))
{return h__20502__auto__;
} else
{var h__20502__auto____$1 = cljs.core.hash_imap(this__20830__auto____$1);self__.__hash = h__20502__auto____$1;
return h__20502__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20831__auto__,other__20832__auto__){var self__ = this;
var this__20831__auto____$1 = this;if(cljs.core.truth_((function (){var and__19697__auto__ = other__20832__auto__;if(cljs.core.truth_(and__19697__auto__))
{return ((this__20831__auto____$1.constructor === other__20832__auto__.constructor)) && (cljs.core.equiv_map(this__20831__auto____$1,other__20832__auto__));
} else
{return and__19697__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20844__auto__,k__20846__auto__){var self__ = this;
var this__20844__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__20846__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20844__auto____$1),self__.__meta),k__20846__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20846__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20842__auto__,k__20843__auto__,G__73446){var self__ = this;
var this__20842__auto____$1 = this;var pred__73450 = cljs.core.keyword_identical_QMARK_;var expr__73451 = k__20843__auto__;if(cljs.core.truth_((function (){var G__73453 = new cljs.core.Keyword(null,"db-before","db-before",-553691536);var G__73454 = expr__73451;return (pred__73450.cljs$core$IFn$_invoke$arity$2 ? pred__73450.cljs$core$IFn$_invoke$arity$2(G__73453,G__73454) : pred__73450.call(null,G__73453,G__73454));
})()))
{return (new datascript.core.TxReport(G__73446,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73455 = new cljs.core.Keyword(null,"db-after","db-after",-571884666);var G__73456 = expr__73451;return (pred__73450.cljs$core$IFn$_invoke$arity$2 ? pred__73450.cljs$core$IFn$_invoke$arity$2(G__73455,G__73456) : pred__73450.call(null,G__73455,G__73456));
})()))
{return (new datascript.core.TxReport(self__.db_before,G__73446,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73457 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761);var G__73458 = expr__73451;return (pred__73450.cljs$core$IFn$_invoke$arity$2 ? pred__73450.cljs$core$IFn$_invoke$arity$2(G__73457,G__73458) : pred__73450.call(null,G__73457,G__73458));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__73446,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73459 = new cljs.core.Keyword(null,"tempids","tempids",1767509089);var G__73460 = expr__73451;return (pred__73450.cljs$core$IFn$_invoke$arity$2 ? pred__73450.cljs$core$IFn$_invoke$arity$2(G__73459,G__73460) : pred__73450.call(null,G__73459,G__73460));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__73446,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73461 = new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194);var G__73462 = expr__73451;return (pred__73450.cljs$core$IFn$_invoke$arity$2 ? pred__73450.cljs$core$IFn$_invoke$arity$2(G__73461,G__73462) : pred__73450.call(null,G__73461,G__73462));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__73446,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20843__auto__,G__73446),null));
}
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20849__auto__){var self__ = this;
var this__20849__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20834__auto__,G__73446){var self__ = this;
var this__20834__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__73446,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20840__auto__,entry__20841__auto__){var self__ = this;
var this__20840__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20841__auto__))
{return cljs.core._assoc(this__20840__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20840__auto____$1,entry__20841__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__20898__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__20898__auto__,writer__20899__auto__){return cljs.core._write(writer__20899__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids,tx_meta));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__73448){return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__73448),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__73448),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__73448),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__73448),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__73448),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__73448,new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.array_seq([new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], 0))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__73465 = db;var G__73465__$1 = ((((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.core.tx0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73465,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__73465);return G__73465__$1;
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
datascript.core.explode = (function explode(db,entity){var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);var iter__21069__auto__ = ((function (eid){
return (function iter__73479(s__73480){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__73480__$1 = s__73480;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73480__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__73489 = cljs.core.first(xs__4624__auto__);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73489,(0),null);var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73489,(1),null);var reverse_a = datascript.core.reverse_ref(a);var iterys__21065__auto__ = ((function (s__73480__$1,reverse_a,vec__73489,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__73481(s__73482){return (new cljs.core.LazySeq(null,((function (s__73480__$1,reverse_a,vec__73489,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__73482__$1 = s__73482;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__73482__$1);if(temp__4126__auto____$1)
{var s__73482__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__73482__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73482__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73484 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73483 = (0);while(true){
if((i__73483 < size__21068__auto__))
{var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73483);cljs.core.chunk_append(b__73484,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)));
{
var G__73492 = (i__73483 + (1));
i__73483 = G__73492;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73484),iter__73481(cljs.core.chunk_rest(s__73482__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73484),null);
}
} else
{var v = cljs.core.first(s__73482__$2);return cljs.core.cons((cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)),iter__73481(cljs.core.rest(s__73482__$2)));
}
} else
{return null;
}
break;
}
});})(s__73480__$1,reverse_a,vec__73489,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__73480__$1,reverse_a,vec__73489,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__21066__auto__ = cljs.core.seq(iterys__21065__auto__(((((vs instanceof Array) || (cljs.core.coll_QMARK_(vs))) && (!(cljs.core.map_QMARK_(vs))) && (datascript.core.multival_QMARK_(db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__21066__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__21066__auto__,iter__73479(cljs.core.rest(s__73480__$1)));
} else
{{
var G__73493 = cljs.core.rest(s__73480__$1);
s__73480__$1 = G__73493;
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
;return iter__21069__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__73494){var vec__73496 = p__73494;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73496,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73496,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73496,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73496,(3),null);var tx = datascript.core.current_tx(report);var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_(db,a))
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
datascript.core.transact_tx_data = (function transact_tx_data(report,p__73498){while(true){
var vec__73503 = p__73498;var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73503,(0),null);var entities = cljs.core.nthnext(vec__73503,(1));var es = vec__73503;var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.core.current_tx(report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_(entity))
{if(datascript.core.tx_id_QMARK_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)))
{var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.core.current_tx(report));{
var G__73507 = report;
var G__73508 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity__$1),entities);
report = G__73507;
p__73498 = G__73508;
continue;
}
} else
{if((new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity) == null))
{var eid = datascript.core.next_eid(db);var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);{
var G__73509 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,eid);
var G__73510 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__73509;
p__73498 = G__73510;
continue;
}
} else
{{
var G__73511 = report;
var G__73512 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity),entities);
report = G__73511;
p__73498 = G__73512;
continue;
}

}
}
} else
{var vec__73504 = entity;var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73504,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73504,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73504,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73504,(3),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418)))
{var vec__73505 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73505,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73505,(1),null);var args = cljs.core.nthnext(vec__73505,(2));{
var G__73513 = report;
var G__73514 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__73513;
p__73498 = G__73514;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172)))
{var vec__73506 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73506,(0),null);var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73506,(1),null);var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73506,(2),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73506,(3),null);var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73506,(4),null);var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a__$1], null));if(datascript.core.multival_QMARK_(db,a__$1))
{if(cljs.core.truth_(cljs.core.some(((function (report,p__73498,vec__73506,_,e__$1,a__$1,ov,nv,datoms,vec__73504,op,e,a,v,db,vec__73503,entity,entities,es){
return (function (p1__73497_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__73497_SHARP_.v,ov);
});})(report,p__73498,vec__73506,_,e__$1,a__$1,ov,nv,datoms,vec__73504,op,e,a,v,db,vec__73503,entity,entities,es))
,datoms)))
{{
var G__73515 = datascript.core.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__73516 = entities;
report = G__73515;
p__73498 = G__73516;
continue;
}
} else
{throw (new Error((":db.fn/cas failed on datom ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datoms))+"], expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ov))));
}
} else
{var v__$1 = cljs.core.first(datoms).v;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov))
{{
var G__73517 = datascript.core.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__73518 = entities;
report = G__73517;
p__73498 = G__73518;
continue;
}
} else
{throw (new Error((":db.fn/cas failed on datom ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)+"], expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ov))));
}
}
} else
{if(datascript.core.tx_id_QMARK_(e))
{{
var G__73519 = report;
var G__73520 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.core.current_tx(report),a,v], null)], null),entities);
report = G__73519;
p__73498 = G__73520;
continue;
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && (datascript.core.tx_id_QMARK_(v)))
{{
var G__73521 = report;
var G__73522 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.core.current_tx(report)], null)], null),entities);
report = G__73521;
p__73498 = G__73522;
continue;
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__73523 = report;
var G__73524 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__73523;
p__73498 = G__73524;
continue;
}
} else
{{
var G__73525 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.core.next_eid(db));
var G__73526 = es;
report = G__73525;
p__73498 = G__73526;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__73527 = report;
var G__73528 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__73527;
p__73498 = G__73528;
continue;
}
} else
{{
var G__73529 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.core.next_eid(db));
var G__73530 = es;
report = G__73529;
p__73498 = G__73530;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841)))
{{
var G__73531 = datascript.core.transact_add(report,entity);
var G__73532 = entities;
report = G__73531;
p__73498 = G__73532;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231)))
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__73533 = datascript.core.transact_retract_datom(report,old_datom);
var G__73534 = entities;
report = G__73533;
p__73498 = G__73534;
continue;
}
} else
{{
var G__73535 = report;
var G__73536 = entities;
report = G__73535;
p__73498 = G__73536;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164)))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__73537 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__73538 = entities;
report = G__73537;
p__73498 = G__73538;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)))
{var e_datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));var v_datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,p__73498,e_datoms,vec__73504,op,e,a,v,db,vec__73503,entity,entities,es){
return (function (a__$1){return datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e], null));
});})(report,p__73498,e_datoms,vec__73504,op,e,a,v,db,vec__73503,entity,entities,es))
,cljs.core.array_seq([db.refs], 0));{
var G__73539 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__73540 = entities;
report = G__73539;
p__73498 = G__73540;
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