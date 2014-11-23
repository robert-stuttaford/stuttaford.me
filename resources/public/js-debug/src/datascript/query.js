goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.impl.entity');
goog.require('datascript.impl.entity');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('cljs.reader');

/**
* @constructor
* @param {*} rels
* @param {*} sources
* @param {*} rules
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20835__auto__,k__20836__auto__){var self__ = this;
var this__20835__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20835__auto____$1,k__20836__auto__,null);
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20837__auto__,k73671,else__20838__auto__){var self__ = this;
var this__20837__auto____$1 = this;var G__73673 = (((k73671 instanceof cljs.core.Keyword))?k73671.fqn:null);switch (G__73673) {
case "rules":
return self__.rules;

break;
case "sources":
return self__.sources;

break;
case "rels":
return self__.rels;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73671,else__20838__auto__);

}
});
datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20851__auto__,writer__20852__auto__,opts__20853__auto__){var self__ = this;
var this__20851__auto____$1 = this;var pr_pair__20854__auto__ = ((function (this__20851__auto____$1){
return (function (keyval__20855__auto__){return cljs.core.pr_sequential_writer(writer__20852__auto__,cljs.core.pr_writer,""," ","",opts__20853__auto__,keyval__20855__auto__);
});})(this__20851__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20852__auto__,pr_pair__20854__auto__,"#datascript.query.Context{",", ","}",opts__20853__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20833__auto__){var self__ = this;
var this__20833__auto____$1 = this;return self__.__meta;
});
datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20828__auto__){var self__ = this;
var this__20828__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20839__auto__){var self__ = this;
var this__20839__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20830__auto__){var self__ = this;
var this__20830__auto____$1 = this;var h__20502__auto__ = self__.__hash;if(!((h__20502__auto__ == null)))
{return h__20502__auto__;
} else
{var h__20502__auto____$1 = cljs.core.hash_imap(this__20830__auto____$1);self__.__hash = h__20502__auto____$1;
return h__20502__auto____$1;
}
});
datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20831__auto__,other__20832__auto__){var self__ = this;
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
datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20844__auto__,k__20846__auto__){var self__ = this;
var this__20844__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__20846__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20844__auto____$1),self__.__meta),k__20846__auto__);
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20846__auto__)),null));
}
});
datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20842__auto__,k__20843__auto__,G__73670){var self__ = this;
var this__20842__auto____$1 = this;var pred__73674 = cljs.core.keyword_identical_QMARK_;var expr__73675 = k__20843__auto__;if(cljs.core.truth_((function (){var G__73677 = new cljs.core.Keyword(null,"rels","rels",1770187185);var G__73678 = expr__73675;return (pred__73674.cljs$core$IFn$_invoke$arity$2 ? pred__73674.cljs$core$IFn$_invoke$arity$2(G__73677,G__73678) : pred__73674.call(null,G__73677,G__73678));
})()))
{return (new datascript.query.Context(G__73670,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73679 = new cljs.core.Keyword(null,"sources","sources",-321166424);var G__73680 = expr__73675;return (pred__73674.cljs$core$IFn$_invoke$arity$2 ? pred__73674.cljs$core$IFn$_invoke$arity$2(G__73679,G__73680) : pred__73674.call(null,G__73679,G__73680));
})()))
{return (new datascript.query.Context(self__.rels,G__73670,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73681 = new cljs.core.Keyword(null,"rules","rules",1198912366);var G__73682 = expr__73675;return (pred__73674.cljs$core$IFn$_invoke$arity$2 ? pred__73674.cljs$core$IFn$_invoke$arity$2(G__73681,G__73682) : pred__73674.call(null,G__73681,G__73682));
})()))
{return (new datascript.query.Context(self__.rels,self__.sources,G__73670,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20843__auto__,G__73670),null));
}
}
}
});
datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20849__auto__){var self__ = this;
var this__20849__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20834__auto__,G__73670){var self__ = this;
var this__20834__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__73670,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20840__auto__,entry__20841__auto__){var self__ = this;
var this__20840__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20841__auto__))
{return cljs.core._assoc(this__20840__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20840__auto____$1,entry__20841__auto__);
}
});
datascript.query.Context.cljs$lang$type = true;
datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__20898__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});
datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__20898__auto__,writer__20899__auto__){return cljs.core._write(writer__20899__auto__,"datascript.query/Context");
});
datascript.query.__GT_Context = (function __GT_Context(rels,sources,rules){return (new datascript.query.Context(rels,sources,rules));
});
datascript.query.map__GT_Context = (function map__GT_Context(G__73672){return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__73672),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__73672),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__73672),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__73672,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.array_seq([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0))));
});

/**
* @constructor
* @param {*} attrs
* @param {*} tuples
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20835__auto__,k__20836__auto__){var self__ = this;
var this__20835__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20835__auto____$1,k__20836__auto__,null);
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20837__auto__,k73685,else__20838__auto__){var self__ = this;
var this__20837__auto____$1 = this;var G__73687 = (((k73685 instanceof cljs.core.Keyword))?k73685.fqn:null);switch (G__73687) {
case "tuples":
return self__.tuples;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73685,else__20838__auto__);

}
});
datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20851__auto__,writer__20852__auto__,opts__20853__auto__){var self__ = this;
var this__20851__auto____$1 = this;var pr_pair__20854__auto__ = ((function (this__20851__auto____$1){
return (function (keyval__20855__auto__){return cljs.core.pr_sequential_writer(writer__20852__auto__,cljs.core.pr_writer,""," ","",opts__20853__auto__,keyval__20855__auto__);
});})(this__20851__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20852__auto__,pr_pair__20854__auto__,"#datascript.query.Relation{",", ","}",opts__20853__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20833__auto__){var self__ = this;
var this__20833__auto____$1 = this;return self__.__meta;
});
datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20828__auto__){var self__ = this;
var this__20828__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20839__auto__){var self__ = this;
var this__20839__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20830__auto__){var self__ = this;
var this__20830__auto____$1 = this;var h__20502__auto__ = self__.__hash;if(!((h__20502__auto__ == null)))
{return h__20502__auto__;
} else
{var h__20502__auto____$1 = cljs.core.hash_imap(this__20830__auto____$1);self__.__hash = h__20502__auto____$1;
return h__20502__auto____$1;
}
});
datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20831__auto__,other__20832__auto__){var self__ = this;
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
datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20844__auto__,k__20846__auto__){var self__ = this;
var this__20844__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__20846__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20844__auto____$1),self__.__meta),k__20846__auto__);
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20846__auto__)),null));
}
});
datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20842__auto__,k__20843__auto__,G__73684){var self__ = this;
var this__20842__auto____$1 = this;var pred__73688 = cljs.core.keyword_identical_QMARK_;var expr__73689 = k__20843__auto__;if(cljs.core.truth_((function (){var G__73691 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713);var G__73692 = expr__73689;return (pred__73688.cljs$core$IFn$_invoke$arity$2 ? pred__73688.cljs$core$IFn$_invoke$arity$2(G__73691,G__73692) : pred__73688.call(null,G__73691,G__73692));
})()))
{return (new datascript.query.Relation(G__73684,self__.tuples,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__73693 = new cljs.core.Keyword(null,"tuples","tuples",-676032639);var G__73694 = expr__73689;return (pred__73688.cljs$core$IFn$_invoke$arity$2 ? pred__73688.cljs$core$IFn$_invoke$arity$2(G__73693,G__73694) : pred__73688.call(null,G__73693,G__73694));
})()))
{return (new datascript.query.Relation(self__.attrs,G__73684,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20843__auto__,G__73684),null));
}
}
});
datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20849__auto__){var self__ = this;
var this__20849__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20834__auto__,G__73684){var self__ = this;
var this__20834__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,G__73684,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20840__auto__,entry__20841__auto__){var self__ = this;
var this__20840__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20841__auto__))
{return cljs.core._assoc(this__20840__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20840__auto____$1,entry__20841__auto__);
}
});
datascript.query.Relation.cljs$lang$type = true;
datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__20898__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});
datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__20898__auto__,writer__20899__auto__){return cljs.core._write(writer__20899__auto__,"datascript.query/Relation");
});
datascript.query.__GT_Relation = (function __GT_Relation(attrs,tuples){return (new datascript.query.Relation(attrs,tuples));
});
datascript.query.map__GT_Relation = (function map__GT_Relation(G__73686){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__73686),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__73686),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__73686,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.array_seq([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0))));
});
datascript.query.intersect_keys = (function intersect_keys(attrs1,attrs2){return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
/**
* @param {...*} var_args
*/
datascript.query.concatv = (function() { 
var concatv__delegate = function (xs){return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,xs));
};
var concatv = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return concatv__delegate.call(this,xs);};
concatv.cljs$lang$maxFixedArity = 0;
concatv.cljs$lang$applyTo = (function (arglist__73696){
var xs = cljs.core.seq(arglist__73696);
return concatv__delegate(xs);
});
concatv.cljs$core$IFn$_invoke$arity$variadic = concatv__delegate;
return concatv;
})()
;
datascript.query.source_QMARK_ = (function source_QMARK_(sym){return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.free_var_QMARK_ = (function free_var_QMARK_(sym){return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),sym));
});
datascript.query.looks_like_QMARK_ = (function looks_like_QMARK_(pattern,form){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern))
{return cljs.core.sequential_QMARK_(form);
} else
{if(cljs.core.sequential_QMARK_(pattern))
{return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__73708){var vec__73709 = p__73708;var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73709,(0),null);var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73709,(1),null);return looks_like_QMARK_(pattern_el,form_el);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else
{var G__73710 = form;return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(G__73710) : pattern.call(null,G__73710));

}
}
}
}
});
datascript.query.join_tuples = (function join_tuples(t1,idxs1,t2,idxs2){var l1 = idxs1.length;var l2 = idxs2.length;var res = (new Array((l1 + l2)));var n__21258__auto___73711 = l1;var i_73712 = (0);while(true){
if((i_73712 < n__21258__auto___73711))
{(res[i_73712] = (t1[(idxs1[i_73712])]));
{
var G__73713 = (i_73712 + (1));
i_73712 = G__73713;
continue;
}
} else
{}
break;
}
var n__21258__auto___73714 = l2;var i_73715 = (0);while(true){
if((i_73715 < n__21258__auto___73714))
{(res[(l1 + i_73715)] = (t2[(idxs2[i_73715])]));
{
var G__73716 = (i_73715 + (1));
i_73715 = G__73716;
continue;
}
} else
{}
break;
}
return res;
});
datascript.query.sum_rel = (function sum_rel(a,b){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(a),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(b))));
});
datascript.query.prod_rel = (function() {
var prod_rel = null;
var prod_rel__0 = (function (){return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[]], null)));
});
var prod_rel__2 = (function (rel1,rel2){var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),(function (){var iter__21069__auto__ = ((function (attrs1,attrs2,idxs1,idxs2){
return (function iter__73728(s__73729){return (new cljs.core.LazySeq(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (){var s__73729__$1 = s__73729;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73729__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__21065__auto__ = ((function (s__73729__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function iter__73730(s__73731){return (new cljs.core.LazySeq(null,((function (s__73729__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function (){var s__73731__$1 = s__73731;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__73731__$1);if(temp__4126__auto____$1)
{var s__73731__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__73731__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73731__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73733 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73732 = (0);while(true){
if((i__73732 < size__21068__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73732);cljs.core.chunk_append(b__73733,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
{
var G__73739 = (i__73732 + (1));
i__73732 = G__73739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73733),iter__73730(cljs.core.chunk_rest(s__73731__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73733),null);
}
} else
{var t2 = cljs.core.first(s__73731__$2);return cljs.core.cons(datascript.query.join_tuples(t1,idxs1,t2,idxs2),iter__73730(cljs.core.rest(s__73731__$2)));
}
} else
{return null;
}
break;
}
});})(s__73729__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(s__73729__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
;var fs__21066__auto__ = cljs.core.seq(iterys__21065__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2)));if(fs__21066__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__21066__auto__,iter__73728(cljs.core.rest(s__73729__$1)));
} else
{{
var G__73740 = cljs.core.rest(s__73729__$1);
s__73729__$1 = G__73740;
continue;
}
}
} else
{return null;
}
break;
}
});})(attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(attrs1,attrs2,idxs1,idxs2))
;return iter__21069__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1));
})()));
});
prod_rel = function(rel1,rel2){
switch(arguments.length){
case 0:
return prod_rel__0.call(this);
case 2:
return prod_rel__2.call(this,rel1,rel2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prod_rel.cljs$core$IFn$_invoke$arity$0 = prod_rel__0;
prod_rel.cljs$core$IFn$_invoke$arity$2 = prod_rel__2;
return prod_rel;
})()
;
/**
* @param {...*} var_args
*/
datascript.query._differ_QMARK_ = (function() { 
var _differ_QMARK___delegate = function (xs){var l = cljs.core.count(xs);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
};
var _differ_QMARK_ = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _differ_QMARK___delegate.call(this,xs);};
_differ_QMARK_.cljs$lang$maxFixedArity = 0;
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__73741){
var xs = cljs.core.seq(arglist__73741);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.query._get_else = (function _get_else(db,e,a,else_val){var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datom = temp__4124__auto__;return datom.v;
} else
{return else_val;
}
});
/**
* @param {...*} var_args
*/
datascript.query._get_some = (function() { 
var _get_some__delegate = function (db,e,as){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){var temp__4126__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4126__auto__))
{var datom = temp__4126__auto__;return cljs.core.reduced(datom.v);
} else
{return null;
}
}),null,as);
};
var _get_some = function (db,e,var_args){
var as = null;if (arguments.length > 2) {
  as = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return _get_some__delegate.call(this,db,e,as);};
_get_some.cljs$lang$maxFixedArity = 2;
_get_some.cljs$lang$applyTo = (function (arglist__73742){
var db = cljs.core.first(arglist__73742);
arglist__73742 = cljs.core.next(arglist__73742);
var e = cljs.core.first(arglist__73742);
var as = cljs.core.rest(arglist__73742);
return _get_some__delegate(db,e,as);
});
_get_some.cljs$core$IFn$_invoke$arity$variadic = _get_some__delegate;
return _get_some;
})()
;
datascript.query._missing_QMARK_ = (function _missing_QMARK_(db,e,a){return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core._GT_,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),new cljs.core.Symbol(null,"min","min",2085523049,null),(function() {
var G__73744 = null;
var G__73744__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,coll);
});
var G__73744__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else
{if((x < cljs.core.last(acc)))
{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else
{return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__73744 = function(n,coll){
switch(arguments.length){
case 1:
return G__73744__1.call(this,n);
case 2:
return G__73744__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73744.cljs$core$IFn$_invoke$arity$1 = G__73744__1;
G__73744.cljs$core$IFn$_invoke$arity$2 = G__73744__2;
return G__73744;
})()
,new cljs.core.Symbol(null,"max","max",1701898075,null),(function() {
var G__73745 = null;
var G__73745__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,coll);
});
var G__73745__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else
{if((x > cljs.core.first(acc)))
{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else
{return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__73745 = function(n,coll){
switch(arguments.length){
case 1:
return G__73745__1.call(this,n);
case 2:
return G__73745__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73745.cljs$core$IFn$_invoke$arity$1 = G__73745__1;
G__73745.cljs$core$IFn$_invoke$arity$2 = G__73745__2;
return G__73745;
})()
,new cljs.core.Symbol(null,"sum","sum",1777518341,null),(function (p1__73743_SHARP_){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),p1__73743_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),(function() {
var G__73746 = null;
var G__73746__1 = (function (coll){return cljs.core.rand_nth(coll);
});
var G__73746__2 = (function (n,coll){return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){return cljs.core.rand_nth(coll);
})));
});
G__73746 = function(n,coll){
switch(arguments.length){
case 1:
return G__73746__1.call(this,n);
case 2:
return G__73746__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73746.cljs$core$IFn$_invoke$arity$1 = G__73746__1;
G__73746.cljs$core$IFn$_invoke$arity$2 = G__73746__2;
return G__73746;
})()
,new cljs.core.Symbol(null,"sample","sample",1719555128,null),(function (n,coll){return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
}),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.count], null);
datascript.query.in__GT_rel = (function in__GT_rel(form,value){var pred__73768 = datascript.query.looks_like_QMARK_;var expr__73769 = form;if(cljs.core.truth_((function (){var G__73771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null);var G__73772 = expr__73769;return (pred__73768.cljs$core$IFn$_invoke$arity$2 ? pred__73768.cljs$core$IFn$_invoke$arity$2(G__73771,G__73772) : pred__73768.call(null,G__73771,G__73772));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__73768,expr__73769){
return (function (p1__73747_SHARP_){return in__GT_rel(cljs.core.first(form),p1__73747_SHARP_);
});})(pred__73768,expr__73769))
,value));
} else
{if(cljs.core.truth_((function (){var G__73773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__73774 = expr__73769;return (pred__73768.cljs$core$IFn$_invoke$arity$2 ? pred__73768.cljs$core$IFn$_invoke$arity$2(G__73773,G__73774) : pred__73768.call(null,G__73773,G__73774));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__73768,expr__73769){
return (function (p1__73748_SHARP_){return in__GT_rel(cljs.core.first(form),p1__73748_SHARP_);
});})(pred__73768,expr__73769))
,value));
} else
{if(cljs.core.truth_((function (){var G__73775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__73776 = expr__73769;return (pred__73768.cljs$core$IFn$_invoke$arity$2 ? pred__73768.cljs$core$IFn$_invoke$arity$2(G__73775,G__73776) : pred__73768.call(null,G__73775,G__73776));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (pred__73768,expr__73769){
return (function (p1__73749_SHARP_,p2__73750_SHARP_){return in__GT_rel(p1__73749_SHARP_,p2__73750_SHARP_);
});})(pred__73768,expr__73769))
,form,value));
} else
{if(cljs.core.truth_((function (){var G__73777 = new cljs.core.Symbol(null,"_","_",-1201019570,null);var G__73778 = expr__73769;return (pred__73768.cljs$core$IFn$_invoke$arity$2 ? pred__73768.cljs$core$IFn$_invoke$arity$2(G__73777,G__73778) : pred__73768.call(null,G__73777,G__73778));
})()))
{return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([form,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[value]], null)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__73769))));
}
}
}
}
});
datascript.query.parse_rules = (function parse_rules(rules){var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.parse_in = (function parse_in(context,p__73779){var vec__73781 = p__73779;var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73781,(0),null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73781,(1),null);if(datascript.query.source_QMARK_(in$))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),cljs.core.assoc,in$,value);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"%","%",-950237169,null),in$))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,datascript.query.in__GT_rel(in$,value));

}
}
});
datascript.query.parse_ins = (function parse_ins(context,ins,values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.parse_in,context,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,ins,values));
});
datascript.query.tuple_key_fn = (function tuple_key_fn(idxs){if((cljs.core.count(idxs) === (1)))
{var idx = cljs.core.first(idxs);return ((function (idx){
return (function (tuple){return (tuple[idx]);
});
;})(idx))
} else
{var idxs__$1 = cljs.core.to_array(idxs);return ((function (idxs__$1){
return (function (tuple){return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(idxs__$1.map(((function (idxs__$1){
return (function (p1__73782_SHARP_){return (tuple[p1__73782_SHARP_]);
});})(idxs__$1))
));
});
;})(idxs__$1))
}
});
datascript.query.hash_attrs = (function hash_attrs(idxs,tuples){var key_fn = datascript.query.tuple_key_fn(idxs);var tuples__$1 = tuples;var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
var temp__4124__auto__ = cljs.core.first(tuples__$1);if(cljs.core.truth_(temp__4124__auto__))
{var tuple = temp__4124__auto__;var key = (function (){var G__73784 = tuple;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__73784) : key_fn.call(null,G__73784));
})();{
var G__73785 = cljs.core.next(tuples__$1);
var G__73786 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__73785;
hash_table = G__73786;
continue;
}
} else
{return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function hash_join(rel1,rel2){var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));var common_idxs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,common_attrs);var common_idxs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,common_attrs);var keep_attrs1 = cljs.core.keys(attrs1);var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));var hash = datascript.query.hash_attrs(common_idxs1,tuples1);var key_fn = datascript.query.tuple_key_fn(common_idxs2);var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc,tuple2){var key = (function (){var G__73788 = tuple2;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__73788) : key_fn.call(null,G__73788));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);if(cljs.core.truth_(temp__4124__auto__))
{var tuples1__$1 = temp__4124__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc__$1,tuple1){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,acc,tuples1__$1);
} else
{return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples));
});
datascript.query.lookup_pattern_db = (function lookup_pattern_db(db,pattern){var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__73789_SHARP_){if((p1__73789_SHARP_ instanceof cljs.core.Symbol))
{return null;
} else
{return p1__73789_SHARP_;
}
}),pattern);var datoms = datascript.core._search(db,search_pattern);var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__73792){var vec__73793 = p__73792;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73793,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73793,(1),null);return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));return (new datascript.query.Relation(attr__GT_prop,datoms));
});
datascript.query.matches_pattern_QMARK_ = (function matches_pattern_QMARK_(pattern,tuple){var tuple__$1 = tuple;var pattern__$1 = pattern;while(true){
if(cljs.core.truth_((function (){var and__19697__auto__ = tuple__$1;if(cljs.core.truth_(and__19697__auto__))
{return pattern__$1;
} else
{return and__19697__auto__;
}
})()))
{var t = cljs.core.first(tuple__$1);var p = cljs.core.first(pattern__$1);if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))
{{
var G__73794 = cljs.core.next(tuple__$1);
var G__73795 = cljs.core.next(pattern__$1);
tuple__$1 = G__73794;
pattern__$1 = G__73795;
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function lookup_pattern_coll(coll,pattern){var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73796_SHARP_){return datascript.query.matches_pattern_QMARK_(pattern,p1__73796_SHARP_);
}),coll);var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__73799){var vec__73800 = p__73799;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73800,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73800,(1),null);return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data)));
});
datascript.query.lookup_pattern = (function lookup_pattern(context,clause){var vec__73802 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73802,(0),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73802,(1),null);var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);if((source instanceof datascript.core.DB))
{return datascript.query.lookup_pattern_db(source,pattern);
} else
{return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function collapse_rels(rels,new_rel){var rels__$1 = rels;var new_rel__$1 = new_rel;var acc = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(rels__$1);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel)))))
{{
var G__73803 = cljs.core.next(rels__$1);
var G__73804 = datascript.query.hash_join(rel,new_rel__$1);
var G__73805 = acc;
rels__$1 = G__73803;
new_rel__$1 = G__73804;
acc = G__73805;
continue;
}
} else
{{
var G__73806 = cljs.core.next(rels__$1);
var G__73807 = new_rel__$1;
var G__73808 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__73806;
new_rel__$1 = G__73807;
acc = G__73808;
continue;
}
}
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function context_resolve_val(context,sym){var temp__4126__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73809_SHARP_){return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__73809_SHARP_),sym);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));if(cljs.core.truth_(temp__4126__auto__))
{var rel = temp__4126__auto__;return (cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else
{return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function rel_contains_attrs_QMARK_(rel,attrs){return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function rel_prod_by_attrs(context,attrs){var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73810_SHARP_){return datascript.query.rel_contains_attrs_QMARK_(p1__73810_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__73811_SHARP_){return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__73811_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function _call_fn(context,rel,f,args){return (function (tuple){var resolved_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73812_SHARP_){if((p1__73812_SHARP_ instanceof cljs.core.Symbol))
{var or__19711__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),p1__73812_SHARP_);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return (tuple[cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__73812_SHARP_)]);
}
} else
{return p1__73812_SHARP_;
}
}),args);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,resolved_args);
});
});
datascript.query.filter_by_pred = (function filter_by_pred(context,clause){var vec__73817 = clause;var vec__73818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73817,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73818,(0),null);var args = cljs.core.nthnext(vec__73818,(1));var pred = (function (){var or__19711__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__73819 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73819,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73819,(1),null);var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);var new_rel = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (vec__73817,vec__73818,f,args,pred,vec__73819,context__$1,production,tuple_pred){
return (function (p1__73813_SHARP_){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__73813_SHARP_);
});})(vec__73817,vec__73818,f,args,pred,vec__73819,context__$1,production,tuple_pred))
);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function bind_by_fn(context,clause){var vec__73825 = clause;var vec__73826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73825,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73826,(0),null);var args = cljs.core.nthnext(vec__73826,(1));var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73825,(1),null);var fun = (function (){var or__19711__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__73827 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73827,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73827,(1),null);var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);var new_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__73825,vec__73826,f,args,out,fun,vec__73827,context__$1,production,tuple_fn){
return (function (p1__73820_SHARP_){var val = (function (){var G__73828 = p1__73820_SHARP_;return (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(G__73828) : tuple_fn.call(null,G__73828));
})();var rel = datascript.query.in__GT_rel(out,val);return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__73820_SHARP_], null))),rel);
});})(vec__73825,vec__73826,f,args,out,fun,vec__73827,context__$1,production,tuple_fn))
,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production)));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function rule_QMARK_(context,clause){return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = (function (){var G__73829 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__73829) : cljs.core.atom.call(null,G__73829));
})();
datascript.query.expand_rule = (function expand_rule(clause,context,used_args){var vec__73854 = clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73854,(0),null);var call_args = cljs.core.nthnext(vec__73854,(1));var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);var iter__21069__auto__ = ((function (vec__73854,rule,call_args,seqid,branches){
return (function iter__73855(s__73856){return (new cljs.core.LazySeq(null,((function (vec__73854,rule,call_args,seqid,branches){
return (function (){var s__73856__$1 = s__73856;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73856__$1);if(temp__4126__auto__)
{var s__73856__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73856__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73856__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73858 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73857 = (0);while(true){
if((i__73857 < size__21068__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73857);var vec__73869 = branch;var vec__73870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73869,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73870,(0),null);var rule_args = cljs.core.nthnext(vec__73870,(1));var clauses = cljs.core.nthnext(vec__73869,(1));var replacements = cljs.core.zipmap(rule_args,call_args);cljs.core.chunk_append(b__73858,clojure.walk.postwalk(((function (i__73857,vec__73869,vec__73870,_,rule_args,clauses,replacements,branch,c__21067__auto__,size__21068__auto__,b__73858,s__73856__$2,temp__4126__auto__,vec__73854,rule,call_args,seqid,branches){
return (function (p1__73830_SHARP_){if(datascript.query.free_var_QMARK_(p1__73830_SHARP_))
{var or__19711__auto__ = (function (){var G__73872 = p1__73830_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__73872) : replacements.call(null,G__73872));
})();if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__73830_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__73830_SHARP_;
}
});})(i__73857,vec__73869,vec__73870,_,rule_args,clauses,replacements,branch,c__21067__auto__,size__21068__auto__,b__73858,s__73856__$2,temp__4126__auto__,vec__73854,rule,call_args,seqid,branches))
,clauses));
{
var G__73877 = (i__73857 + (1));
i__73857 = G__73877;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73858),iter__73855(cljs.core.chunk_rest(s__73856__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73858),null);
}
} else
{var branch = cljs.core.first(s__73856__$2);var vec__73873 = branch;var vec__73874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73873,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73874,(0),null);var rule_args = cljs.core.nthnext(vec__73874,(1));var clauses = cljs.core.nthnext(vec__73873,(1));var replacements = cljs.core.zipmap(rule_args,call_args);return cljs.core.cons(clojure.walk.postwalk(((function (vec__73873,vec__73874,_,rule_args,clauses,replacements,branch,s__73856__$2,temp__4126__auto__,vec__73854,rule,call_args,seqid,branches){
return (function (p1__73830_SHARP_){if(datascript.query.free_var_QMARK_(p1__73830_SHARP_))
{var or__19711__auto__ = (function (){var G__73876 = p1__73830_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__73876) : replacements.call(null,G__73876));
})();if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__73830_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__73830_SHARP_;
}
});})(vec__73873,vec__73874,_,rule_args,clauses,replacements,branch,s__73856__$2,temp__4126__auto__,vec__73854,rule,call_args,seqid,branches))
,clauses),iter__73855(cljs.core.rest(s__73856__$2)));
}
} else
{return null;
}
break;
}
});})(vec__73854,rule,call_args,seqid,branches))
,null,null));
});})(vec__73854,rule,call_args,seqid,branches))
;return iter__21069__auto__(branches);
});
datascript.query.remove_pairs = (function remove_pairs(xs,ys){var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__73880){var vec__73881 = p__73880;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73881,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73881,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function rule_gen_guards(rule_clause,used_args){var vec__73893 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73893,(0),null);var call_args = cljs.core.nthnext(vec__73893,(1));var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);var iter__21069__auto__ = ((function (vec__73893,rule,call_args,prev_call_args){
return (function iter__73894(s__73895){return (new cljs.core.LazySeq(null,((function (vec__73893,rule,call_args,prev_call_args){
return (function (){var s__73895__$1 = s__73895;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73895__$1);if(temp__4126__auto__)
{var s__73895__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73895__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73895__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73897 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73896 = (0);while(true){
if((i__73896 < size__21068__auto__))
{var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73896);var vec__73902 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73902,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73902,(1),null);cljs.core.chunk_append(b__73897,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null));
{
var G__73904 = (i__73896 + (1));
i__73896 = G__73904;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73897),iter__73894(cljs.core.chunk_rest(s__73895__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73897),null);
}
} else
{var prev_args = cljs.core.first(s__73895__$2);var vec__73903 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73903,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73903,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null),iter__73894(cljs.core.rest(s__73895__$2)));
}
} else
{return null;
}
break;
}
});})(vec__73893,rule,call_args,prev_call_args))
,null,null));
});})(vec__73893,rule,call_args,prev_call_args))
;return iter__21069__auto__(prev_call_args);
});
datascript.query.walk_collect = (function walk_collect(form,pred){var res = (function (){var G__73909 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__73909) : cljs.core.atom.call(null,G__73909));
})();clojure.walk.postwalk(((function (res){
return (function (p1__73905_SHARP_){if(cljs.core.truth_((function (){var G__73910 = p1__73905_SHARP_;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__73910) : pred.call(null,G__73910));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__73905_SHARP_);
} else
{}
return p1__73905_SHARP_;
});})(res))
,form);
var G__73911 = res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__73911) : cljs.core.deref.call(null,G__73911));
});
datascript.query.split_guards = (function split_guards(clauses,guards){var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));var pred = ((function (bound_vars){
return (function (p__73915){var vec__73916 = p__73915;var vec__73917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73916,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73917,(0),null);var vars = cljs.core.nthnext(vec__73917,(1));return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function solve_rule(context,clause){var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__73918_SHARP_){return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__73918_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;var stack = cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY));while(true){
var temp__4124__auto__ = cljs.core.first(stack);if(cljs.core.truth_(temp__4124__auto__))
{var frame = temp__4124__auto__;var vec__73933 = cljs.core.split_with(((function (stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__73919_SHARP_){return !(datascript.query.rule_QMARK_(context,p1__73919_SHARP_));
});})(stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73933,(0),null);var vec__73934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73933,(1),null);var rule_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73934,(0),null);var next_clauses = cljs.core.nthnext(vec__73934,(1));if((rule_clause == null))
{var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);var tuples = (function (){var G__73935 = context__$1;var G__73936 = final_attrs;return (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(G__73935,G__73936) : datascript.query._collect.call(null,G__73935,G__73936));
})();var new_rel = (new datascript.query.Relation(final_attrs_map,tuples));{
var G__73945 = cljs.core.next(stack);
var G__73946 = datascript.query.sum_rel(rel,new_rel);
stack = G__73945;
rel = G__73946;
continue;
}
} else
{var vec__73937 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73937,(0),null);var call_args = cljs.core.nthnext(vec__73937,(1));var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));var vec__73938 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73938,(0),null);var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73938,(1),null);if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__73937,rule,call_args,guards,vec__73938,active_gs,pending_gs,vec__73933,clauses,vec__73934,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__73920_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__73920_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__73937,rule,call_args,guards,vec__73938,active_gs,pending_gs,vec__73933,clauses,vec__73934,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs)))
{{
var G__73947 = cljs.core.next(stack);
var G__73948 = rel;
stack = G__73947;
rel = G__73948;
continue;
}
} else
{var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);if(cljs.core.truth_(empty_rels_QMARK_(prefix_context)))
{{
var G__73949 = cljs.core.next(stack);
var G__73950 = rel;
stack = G__73949;
rel = G__73950;
continue;
}
} else
{var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));var branches = datascript.query.expand_rule(rule_clause,context,used_args);{
var G__73951 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__21069__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__73937,rule,call_args,guards,vec__73938,active_gs,pending_gs,vec__73933,clauses,vec__73934,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__73939(s__73940){return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__73937,rule,call_args,guards,vec__73938,active_gs,pending_gs,vec__73933,clauses,vec__73934,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){var s__73940__$1 = s__73940;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73940__$1);if(temp__4126__auto__)
{var s__73940__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73940__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73940__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73942 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73941 = (0);while(true){
if((i__73941 < size__21068__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73941);cljs.core.chunk_append(b__73942,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));
{
var G__73953 = (i__73941 + (1));
i__73941 = G__73953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73942),iter__73939(cljs.core.chunk_rest(s__73940__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73942),null);
}
} else
{var branch = cljs.core.first(s__73940__$2);return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),iter__73939(cljs.core.rest(s__73940__$2)));
}
} else
{return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__73937,rule,call_args,guards,vec__73938,active_gs,pending_gs,vec__73933,clauses,vec__73934,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__73937,rule,call_args,guards,vec__73938,active_gs,pending_gs,vec__73933,clauses,vec__73934,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;return iter__21069__auto__(branches);
})(),cljs.core.next(stack));
var G__73952 = rel;
stack = G__73951;
rel = G__73952;
continue;
}
}
}
}
} else
{return rel;
}
break;
}
});
datascript.query._resolve_clause = (function _resolve_clause(context,clause){var pred__73963 = datascript.query.looks_like_QMARK_;var expr__73964 = clause;if(cljs.core.truth_((function (){var G__73966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__73967 = expr__73964;return (pred__73963.cljs$core$IFn$_invoke$arity$2 ? pred__73963.cljs$core$IFn$_invoke$arity$2(G__73966,G__73967) : pred__73963.call(null,G__73966,G__73967));
})()))
{return datascript.query.filter_by_pred(context,clause);
} else
{if(cljs.core.truth_((function (){var G__73968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);var G__73969 = expr__73964;return (pred__73963.cljs$core$IFn$_invoke$arity$2 ? pred__73963.cljs$core$IFn$_invoke$arity$2(G__73968,G__73969) : pred__73963.call(null,G__73968,G__73969));
})()))
{return datascript.query.bind_by_fn(context,clause);
} else
{if(cljs.core.truth_((function (){var G__73970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__73971 = expr__73964;return (pred__73963.cljs$core$IFn$_invoke$arity$2 ? pred__73963.cljs$core$IFn$_invoke$arity$2(G__73970,G__73971) : pred__73963.call(null,G__73970,G__73971));
})()))
{var relation = datascript.query.lookup_pattern(context,clause);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__73964))));
}
}
}
});
datascript.query.resolve_clause = (function resolve_clause(context,clause){if(datascript.query.rule_QMARK_(context,clause))
{var vec__73973 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73973,(0),null);var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73973,(1),null);var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
} else
{return datascript.query._resolve_clause(context,clause);
}
});
datascript.query._q = (function _q(context,clauses){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function() {
var _collect = null;
var _collect__2 = (function (context,symbols){var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);return _collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Array(cljs.core.count(symbols)))], null),rels,symbols);
});
var _collect__3 = (function (acc,rels,symbols){while(true){
var temp__4124__auto__ = cljs.core.first(rels);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);if(cljs.core.empty_QMARK_(keep_attrs))
{{
var G__74000 = acc;
var G__74001 = cljs.core.next(rels);
var G__74002 = symbols;
acc = G__74000;
rels = G__74001;
symbols = G__74002;
continue;
}
} else
{var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__4124__auto__){
return (function (p1__73974_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__73974_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4124__auto__))
,symbols));var len = cljs.core.count(symbols);{
var G__74003 = (function (){var iter__21069__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__73989(s__73990){return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__73990__$1 = s__73990;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73990__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__21065__auto__ = ((function (s__73990__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__73991(s__73992){return (new cljs.core.LazySeq(null,((function (s__73990__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__73992__$1 = s__73992;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__73992__$1);if(temp__4126__auto____$1)
{var s__73992__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__73992__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73992__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73994 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73993 = (0);while(true){
if((i__73993 < size__21068__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73993);cljs.core.chunk_append(b__73994,(function (){var res = cljs.core.aclone(t1);var n__21258__auto___74006 = len;var i_74007 = (0);while(true){
if((i_74007 < n__21258__auto___74006))
{var temp__4126__auto___74008__$2 = (copy_map[i_74007]);if(cljs.core.truth_(temp__4126__auto___74008__$2))
{var idx_74009 = temp__4126__auto___74008__$2;(res[i_74007] = (t2[idx_74009]));
} else
{}
{
var G__74010 = (i_74007 + (1));
i_74007 = G__74010;
continue;
}
} else
{}
break;
}
return res;
})());
{
var G__74011 = (i__73993 + (1));
i__73993 = G__74011;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73994),iter__73991(cljs.core.chunk_rest(s__73992__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73994),null);
}
} else
{var t2 = cljs.core.first(s__73992__$2);return cljs.core.cons((function (){var res = cljs.core.aclone(t1);var n__21258__auto___74012 = len;var i_74013 = (0);while(true){
if((i_74013 < n__21258__auto___74012))
{var temp__4126__auto___74014__$2 = (copy_map[i_74013]);if(cljs.core.truth_(temp__4126__auto___74014__$2))
{var idx_74015 = temp__4126__auto___74014__$2;(res[i_74013] = (t2[idx_74015]));
} else
{}
{
var G__74016 = (i_74013 + (1));
i_74013 = G__74016;
continue;
}
} else
{}
break;
}
return res;
})(),iter__73991(cljs.core.rest(s__73992__$2)));
}
} else
{return null;
}
break;
}
});})(s__73990__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(s__73990__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;var fs__21066__auto__ = cljs.core.seq(iterys__21065__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));if(fs__21066__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__21066__auto__,iter__73989(cljs.core.rest(s__73990__$1)));
} else
{{
var G__74017 = cljs.core.rest(s__73990__$1);
s__73990__$1 = G__74017;
continue;
}
}
} else
{return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;return iter__21069__auto__(acc);
})();
var G__74004 = cljs.core.next(rels);
var G__74005 = symbols;
acc = G__74003;
rels = G__74004;
symbols = G__74005;
continue;
}
}
} else
{return acc;
}
break;
}
});
_collect = function(acc,rels,symbols){
switch(arguments.length){
case 2:
return _collect__2.call(this,acc,rels);
case 3:
return _collect__3.call(this,acc,rels,symbols);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_collect.cljs$core$IFn$_invoke$arity$2 = _collect__2;
_collect.cljs$core$IFn$_invoke$arity$3 = _collect__3;
return _collect;
})()
;
datascript.query.collect = (function collect(context,symbols){return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});
datascript.query.find_attrs = (function find_attrs(q){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74018_SHARP_){if(cljs.core.sequential_QMARK_(p1__74018_SHARP_))
{return cljs.core.last(p1__74018_SHARP_);
} else
{return p1__74018_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
});
datascript.query._aggregate = (function _aggregate(q,context,tuples){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (form,fixed_value,i){if(cljs.core.sequential_QMARK_(form))
{var vec__74024 = form;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74024,(0),null);var args = cljs.core.nthnext(vec__74024,(1));var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__74024,f,args){
return (function (p1__74019_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__74019_SHARP_,i);
});})(vec__74024,f,args))
,tuples);var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__74024,f,args,vals){
return (function (p1__74020_SHARP_){if((p1__74020_SHARP_ instanceof cljs.core.Symbol))
{return datascript.query.context_resolve_val(context,p1__74020_SHARP_);
} else
{return p1__74020_SHARP_;
}
});})(vec__74024,f,args,vals))
,cljs.core.butlast(args));var f__$1 = (function (){var or__19711__auto__ = (function (){var G__74026 = f;return (datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1 ? datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1(G__74026) : datascript.query.built_in_aggregates.call(null,G__74026));
})();if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else
{return fixed_value;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.aggregate = (function aggregate(q,context,resultset){var group_idxs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__74027_SHARP_,p2__74028_SHARP_){if(cljs.core.sequential_QMARK_(p1__74027_SHARP_))
{return null;
} else
{return p2__74028_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));var group_fn = ((function (group_idxs){
return (function (tuple){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__74029_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__74029_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;var grouped = cljs.core.group_by(group_fn,resultset);var iter__21069__auto__ = ((function (group_idxs,group_fn,grouped){
return (function iter__74040(s__74041){return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){var s__74041__$1 = s__74041;while(true){
var temp__4126__auto__ = cljs.core.seq(s__74041__$1);if(temp__4126__auto__)
{var s__74041__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__74041__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__74041__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__74043 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__74042 = (0);while(true){
if((i__74042 < size__21068__auto__))
{var vec__74048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__74042);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74048,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74048,(1),null);cljs.core.chunk_append(b__74043,datascript.query._aggregate(q,context,tuples));
{
var G__74050 = (i__74042 + (1));
i__74042 = G__74050;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__74043),iter__74040(cljs.core.chunk_rest(s__74041__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__74043),null);
}
} else
{var vec__74049 = cljs.core.first(s__74041__$2);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74049,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74049,(1),null);return cljs.core.cons(datascript.query._aggregate(q,context,tuples),iter__74040(cljs.core.rest(s__74041__$2)));
}
} else
{return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;return iter__21069__auto__(grouped);
});
datascript.query.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first(qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__74051 = parsed;
var G__74052 = q;
var G__74053 = cljs.core.next(qs);
parsed = G__74051;
key = G__74052;
qs = G__74053;
continue;
}
} else
{{
var G__74054 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__74055 = key;
var G__74056 = cljs.core.next(qs);
parsed = G__74054;
key = G__74055;
qs = G__74056;
continue;
}
}
} else
{return parsed;
}
break;
}
});
/**
* @param {...*} var_args
*/
datascript.query.q = (function() { 
var q__delegate = function (q__$1,inputs){var q__$2 = ((cljs.core.sequential_QMARK_(q__$1))?datascript.query.parse_query(q__$1):q__$1);var find = datascript.query.find_attrs(q__$2);var ins = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(q__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$2);var context = datascript.query.parse_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),ins,inputs);var resultset = datascript.query.collect(datascript.query._q(context,wheres),find);var G__74059 = resultset;var G__74059__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$2))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__74059,q__$2,find,ins,wheres,context,resultset){
return (function (p1__74057_SHARP_){return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__74057_SHARP_,(0),cljs.core.count(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2)));
});})(G__74059,q__$2,find,ins,wheres,context,resultset))
,G__74059):G__74059);var G__74059__$2 = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2))))?datascript.query.aggregate(q__$2,context,G__74059__$1):G__74059__$1);return G__74059__$2;
};
var q = function (q__$1,var_args){
var inputs = null;if (arguments.length > 1) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,q__$1,inputs);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__74060){
var q__$1 = cljs.core.first(arglist__74060);
var inputs = cljs.core.rest(arglist__74060);
return q__delegate(q__$1,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
//# sourceMappingURL=query.js.map