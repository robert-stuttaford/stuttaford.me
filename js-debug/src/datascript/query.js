goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');

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
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20488__auto__,k__20489__auto__){var self__ = this;
var this__20488__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20488__auto____$1,k__20489__auto__,null);
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20490__auto__,k54367,else__20491__auto__){var self__ = this;
var this__20490__auto____$1 = this;var G__54369 = (((k54367 instanceof cljs.core.Keyword))?k54367.fqn:null);switch (G__54369) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54367,else__20491__auto__);

}
});
datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20502__auto__,writer__20503__auto__,opts__20504__auto__){var self__ = this;
var this__20502__auto____$1 = this;var pr_pair__20505__auto__ = ((function (this__20502__auto____$1){
return (function (keyval__20506__auto__){return cljs.core.pr_sequential_writer(writer__20503__auto__,cljs.core.pr_writer,""," ","",opts__20504__auto__,keyval__20506__auto__);
});})(this__20502__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20503__auto__,pr_pair__20505__auto__,"#datascript.query.Context{",", ","}",opts__20504__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20486__auto__){var self__ = this;
var this__20486__auto____$1 = this;return self__.__meta;
});
datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20482__auto__){var self__ = this;
var this__20482__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20492__auto__){var self__ = this;
var this__20492__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20483__auto__){var self__ = this;
var this__20483__auto____$1 = this;var h__20113__auto__ = self__.__hash;if(!((h__20113__auto__ == null)))
{return h__20113__auto__;
} else
{var h__20113__auto____$1 = cljs.core.hash_imap(this__20483__auto____$1);self__.__hash = h__20113__auto____$1;
return h__20113__auto____$1;
}
});
datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20484__auto__,other__20485__auto__){var self__ = this;
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
datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20497__auto__,k__20498__auto__){var self__ = this;
var this__20497__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__20498__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20497__auto____$1),self__.__meta),k__20498__auto__);
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20498__auto__)),null));
}
});
datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20495__auto__,k__20496__auto__,G__54366){var self__ = this;
var this__20495__auto____$1 = this;var pred__54370 = cljs.core.keyword_identical_QMARK_;var expr__54371 = k__20496__auto__;if(cljs.core.truth_((function (){var G__54373 = new cljs.core.Keyword(null,"rels","rels",1770187185);var G__54374 = expr__54371;return (pred__54370.cljs$core$IFn$_invoke$arity$2 ? pred__54370.cljs$core$IFn$_invoke$arity$2(G__54373,G__54374) : pred__54370.call(null,G__54373,G__54374));
})()))
{return (new datascript.query.Context(G__54366,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54375 = new cljs.core.Keyword(null,"sources","sources",-321166424);var G__54376 = expr__54371;return (pred__54370.cljs$core$IFn$_invoke$arity$2 ? pred__54370.cljs$core$IFn$_invoke$arity$2(G__54375,G__54376) : pred__54370.call(null,G__54375,G__54376));
})()))
{return (new datascript.query.Context(self__.rels,G__54366,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54377 = new cljs.core.Keyword(null,"rules","rules",1198912366);var G__54378 = expr__54371;return (pred__54370.cljs$core$IFn$_invoke$arity$2 ? pred__54370.cljs$core$IFn$_invoke$arity$2(G__54377,G__54378) : pred__54370.call(null,G__54377,G__54378));
})()))
{return (new datascript.query.Context(self__.rels,self__.sources,G__54366,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20496__auto__,G__54366),null));
}
}
}
});
datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20500__auto__){var self__ = this;
var this__20500__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20487__auto__,G__54366){var self__ = this;
var this__20487__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__54366,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20493__auto__,entry__20494__auto__){var self__ = this;
var this__20493__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20494__auto__))
{return cljs.core._assoc(this__20493__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20493__auto____$1,entry__20494__auto__);
}
});
datascript.query.Context.cljs$lang$type = true;
datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__20522__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});
datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__20522__auto__,writer__20523__auto__){return cljs.core._write(writer__20523__auto__,"datascript.query/Context");
});
datascript.query.__GT_Context = (function __GT_Context(rels,sources,rules){return (new datascript.query.Context(rels,sources,rules));
});
datascript.query.map__GT_Context = (function map__GT_Context(G__54368){return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__54368),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__54368),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__54368),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54368,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.array_seq([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0))));
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
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20488__auto__,k__20489__auto__){var self__ = this;
var this__20488__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20488__auto____$1,k__20489__auto__,null);
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20490__auto__,k54381,else__20491__auto__){var self__ = this;
var this__20490__auto____$1 = this;var G__54383 = (((k54381 instanceof cljs.core.Keyword))?k54381.fqn:null);switch (G__54383) {
case "tuples":
return self__.tuples;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54381,else__20491__auto__);

}
});
datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20502__auto__,writer__20503__auto__,opts__20504__auto__){var self__ = this;
var this__20502__auto____$1 = this;var pr_pair__20505__auto__ = ((function (this__20502__auto____$1){
return (function (keyval__20506__auto__){return cljs.core.pr_sequential_writer(writer__20503__auto__,cljs.core.pr_writer,""," ","",opts__20504__auto__,keyval__20506__auto__);
});})(this__20502__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20503__auto__,pr_pair__20505__auto__,"#datascript.query.Relation{",", ","}",opts__20504__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20486__auto__){var self__ = this;
var this__20486__auto____$1 = this;return self__.__meta;
});
datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20482__auto__){var self__ = this;
var this__20482__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20492__auto__){var self__ = this;
var this__20492__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20483__auto__){var self__ = this;
var this__20483__auto____$1 = this;var h__20113__auto__ = self__.__hash;if(!((h__20113__auto__ == null)))
{return h__20113__auto__;
} else
{var h__20113__auto____$1 = cljs.core.hash_imap(this__20483__auto____$1);self__.__hash = h__20113__auto____$1;
return h__20113__auto____$1;
}
});
datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20484__auto__,other__20485__auto__){var self__ = this;
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
datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20497__auto__,k__20498__auto__){var self__ = this;
var this__20497__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__20498__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20497__auto____$1),self__.__meta),k__20498__auto__);
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20498__auto__)),null));
}
});
datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20495__auto__,k__20496__auto__,G__54380){var self__ = this;
var this__20495__auto____$1 = this;var pred__54384 = cljs.core.keyword_identical_QMARK_;var expr__54385 = k__20496__auto__;if(cljs.core.truth_((function (){var G__54387 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713);var G__54388 = expr__54385;return (pred__54384.cljs$core$IFn$_invoke$arity$2 ? pred__54384.cljs$core$IFn$_invoke$arity$2(G__54387,G__54388) : pred__54384.call(null,G__54387,G__54388));
})()))
{return (new datascript.query.Relation(G__54380,self__.tuples,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__54389 = new cljs.core.Keyword(null,"tuples","tuples",-676032639);var G__54390 = expr__54385;return (pred__54384.cljs$core$IFn$_invoke$arity$2 ? pred__54384.cljs$core$IFn$_invoke$arity$2(G__54389,G__54390) : pred__54384.call(null,G__54389,G__54390));
})()))
{return (new datascript.query.Relation(self__.attrs,G__54380,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20496__auto__,G__54380),null));
}
}
});
datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20500__auto__){var self__ = this;
var this__20500__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20487__auto__,G__54380){var self__ = this;
var this__20487__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,G__54380,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20493__auto__,entry__20494__auto__){var self__ = this;
var this__20493__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20494__auto__))
{return cljs.core._assoc(this__20493__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20494__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20493__auto____$1,entry__20494__auto__);
}
});
datascript.query.Relation.cljs$lang$type = true;
datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__20522__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});
datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__20522__auto__,writer__20523__auto__){return cljs.core._write(writer__20523__auto__,"datascript.query/Relation");
});
datascript.query.__GT_Relation = (function __GT_Relation(attrs,tuples){return (new datascript.query.Relation(attrs,tuples));
});
datascript.query.map__GT_Relation = (function map__GT_Relation(G__54382){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__54382),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__54382),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54382,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.array_seq([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0))));
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
concatv.cljs$lang$applyTo = (function (arglist__54392){
var xs = cljs.core.seq(arglist__54392);
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
{return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__54404){var vec__54405 = p__54404;var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54405,(0),null);var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54405,(1),null);return looks_like_QMARK_(pattern_el,form_el);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else
{var G__54406 = form;return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(G__54406) : pattern.call(null,G__54406));

}
}
}
}
});
datascript.query.join_tuples = (function join_tuples(t1,idxs1,t2,idxs2){var l1 = idxs1.length;var l2 = idxs2.length;var res = (new Array((l1 + l2)));var n__20929__auto___54407 = l1;var i_54408 = (0);while(true){
if((i_54408 < n__20929__auto___54407))
{(res[i_54408] = (t1[(idxs1[i_54408])]));
{
var G__54409 = (i_54408 + (1));
i_54408 = G__54409;
continue;
}
} else
{}
break;
}
var n__20929__auto___54410 = l2;var i_54411 = (0);while(true){
if((i_54411 < n__20929__auto___54410))
{(res[(l1 + i_54411)] = (t2[(idxs2[i_54411])]));
{
var G__54412 = (i_54411 + (1));
i_54411 = G__54412;
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
datascript.query.prod_rel = (function prod_rel(rel1,rel2){var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),(function (){var iter__20686__auto__ = ((function (attrs1,attrs2,idxs1,idxs2){
return (function iter__54424(s__54425){return (new cljs.core.LazySeq(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (){var s__54425__$1 = s__54425;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54425__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__20679__auto__ = ((function (s__54425__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function iter__54426(s__54427){return (new cljs.core.LazySeq(null,((function (s__54425__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function (){var s__54427__$1 = s__54427;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__54427__$1);if(temp__4126__auto____$1)
{var s__54427__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__54427__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__54427__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__54429 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__54428 = (0);while(true){
if((i__54428 < size__20685__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__54428);cljs.core.chunk_append(b__54429,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
{
var G__54435 = (i__54428 + (1));
i__54428 = G__54435;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54429),iter__54426(cljs.core.chunk_rest(s__54427__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54429),null);
}
} else
{var t2 = cljs.core.first(s__54427__$2);return cljs.core.cons(datascript.query.join_tuples(t1,idxs1,t2,idxs2),iter__54426(cljs.core.rest(s__54427__$2)));
}
} else
{return null;
}
break;
}
});})(s__54425__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(s__54425__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
;var fs__20680__auto__ = cljs.core.seq(iterys__20679__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2)));if(fs__20680__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20680__auto__,iter__54424(cljs.core.rest(s__54425__$1)));
} else
{{
var G__54436 = cljs.core.rest(s__54425__$1);
s__54425__$1 = G__54436;
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
;return iter__20686__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1));
})()));
});
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
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__54437){
var xs = cljs.core.seq(arglist__54437);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,cljs.core._GT__EQ_,cljs.core._GT_,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),new cljs.core.Symbol(null,"min","min",2085523049,null),(function() {
var G__54439 = null;
var G__54439__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,coll);
});
var G__54439__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
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
G__54439 = function(n,coll){
switch(arguments.length){
case 1:
return G__54439__1.call(this,n);
case 2:
return G__54439__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54439.cljs$core$IFn$_invoke$arity$1 = G__54439__1;
G__54439.cljs$core$IFn$_invoke$arity$2 = G__54439__2;
return G__54439;
})()
,new cljs.core.Symbol(null,"max","max",1701898075,null),(function() {
var G__54440 = null;
var G__54440__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,coll);
});
var G__54440__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
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
G__54440 = function(n,coll){
switch(arguments.length){
case 1:
return G__54440__1.call(this,n);
case 2:
return G__54440__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54440.cljs$core$IFn$_invoke$arity$1 = G__54440__1;
G__54440.cljs$core$IFn$_invoke$arity$2 = G__54440__2;
return G__54440;
})()
,new cljs.core.Symbol(null,"sum","sum",1777518341,null),(function (p1__54438_SHARP_){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),p1__54438_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),(function() {
var G__54441 = null;
var G__54441__1 = (function (coll){return cljs.core.rand_nth(coll);
});
var G__54441__2 = (function (n,coll){return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){return cljs.core.rand_nth(coll);
})));
});
G__54441 = function(n,coll){
switch(arguments.length){
case 1:
return G__54441__1.call(this,n);
case 2:
return G__54441__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54441.cljs$core$IFn$_invoke$arity$1 = G__54441__1;
G__54441.cljs$core$IFn$_invoke$arity$2 = G__54441__2;
return G__54441;
})()
,new cljs.core.Symbol(null,"sample","sample",1719555128,null),(function (n,coll){return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
}),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.count], null);
datascript.query.in__GT_rel = (function in__GT_rel(form,value){var pred__54463 = datascript.query.looks_like_QMARK_;var expr__54464 = form;if(cljs.core.truth_((function (){var G__54466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null);var G__54467 = expr__54464;return (pred__54463.cljs$core$IFn$_invoke$arity$2 ? pred__54463.cljs$core$IFn$_invoke$arity$2(G__54466,G__54467) : pred__54463.call(null,G__54466,G__54467));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__54463,expr__54464){
return (function (p1__54442_SHARP_){return in__GT_rel(cljs.core.first(form),p1__54442_SHARP_);
});})(pred__54463,expr__54464))
,value));
} else
{if(cljs.core.truth_((function (){var G__54468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__54469 = expr__54464;return (pred__54463.cljs$core$IFn$_invoke$arity$2 ? pred__54463.cljs$core$IFn$_invoke$arity$2(G__54468,G__54469) : pred__54463.call(null,G__54468,G__54469));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__54463,expr__54464){
return (function (p1__54443_SHARP_){return in__GT_rel(cljs.core.first(form),p1__54443_SHARP_);
});})(pred__54463,expr__54464))
,value));
} else
{if(cljs.core.truth_((function (){var G__54470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__54471 = expr__54464;return (pred__54463.cljs$core$IFn$_invoke$arity$2 ? pred__54463.cljs$core$IFn$_invoke$arity$2(G__54470,G__54471) : pred__54463.call(null,G__54470,G__54471));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (pred__54463,expr__54464){
return (function (p1__54444_SHARP_,p2__54445_SHARP_){return in__GT_rel(p1__54444_SHARP_,p2__54445_SHARP_);
});})(pred__54463,expr__54464))
,form,value));
} else
{if(cljs.core.truth_((function (){var G__54472 = new cljs.core.Symbol(null,"_","_",-1201019570,null);var G__54473 = expr__54464;return (pred__54463.cljs$core$IFn$_invoke$arity$2 ? pred__54463.cljs$core$IFn$_invoke$arity$2(G__54472,G__54473) : pred__54463.call(null,G__54472,G__54473));
})()))
{return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([form,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[value]], null)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54464))));
}
}
}
}
});
datascript.query.parse_rules = (function parse_rules(rules){var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.parse_in = (function parse_in(context,p__54474){var vec__54476 = p__54474;var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(0),null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(1),null);if(datascript.query.source_QMARK_(in$))
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
return (function (p1__54477_SHARP_){return (tuple[p1__54477_SHARP_]);
});})(idxs__$1))
));
});
;})(idxs__$1))
}
});
datascript.query.hash_attrs = (function hash_attrs(idxs,tuples){var key_fn = datascript.query.tuple_key_fn(idxs);var tuples__$1 = tuples;var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
var temp__4124__auto__ = cljs.core.first(tuples__$1);if(cljs.core.truth_(temp__4124__auto__))
{var tuple = temp__4124__auto__;var key = (function (){var G__54479 = tuple;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__54479) : key_fn.call(null,G__54479));
})();{
var G__54480 = cljs.core.next(tuples__$1);
var G__54481 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__54480;
hash_table = G__54481;
continue;
}
} else
{return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function hash_join(rel1,rel2){var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));var common_idxs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,common_attrs);var common_idxs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,common_attrs);var keep_attrs1 = cljs.core.keys(attrs1);var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));var hash = datascript.query.hash_attrs(common_idxs1,tuples1);var key_fn = datascript.query.tuple_key_fn(common_idxs2);var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc,tuple2){var key = (function (){var G__54483 = tuple2;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__54483) : key_fn.call(null,G__54483));
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
datascript.query.lookup_pattern_db = (function lookup_pattern_db(db,pattern){var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54484_SHARP_){if((p1__54484_SHARP_ instanceof cljs.core.Symbol))
{return null;
} else
{return p1__54484_SHARP_;
}
}),pattern);var datoms = datascript.core._search(db,search_pattern);var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__54487){var vec__54488 = p__54487;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54488,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54488,(1),null);return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));return (new datascript.query.Relation(attr__GT_prop,datoms));
});
datascript.query.matches_pattern_QMARK_ = (function matches_pattern_QMARK_(pattern,tuple){var tuple__$1 = tuple;var pattern__$1 = pattern;while(true){
if(cljs.core.truth_((function (){var and__19267__auto__ = tuple__$1;if(cljs.core.truth_(and__19267__auto__))
{return pattern__$1;
} else
{return and__19267__auto__;
}
})()))
{var t = cljs.core.first(tuple__$1);var p = cljs.core.first(pattern__$1);if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))
{{
var G__54489 = cljs.core.next(tuple__$1);
var G__54490 = cljs.core.next(pattern__$1);
tuple__$1 = G__54489;
pattern__$1 = G__54490;
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
datascript.query.lookup_pattern_coll = (function lookup_pattern_coll(coll,pattern){var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54491_SHARP_){return datascript.query.matches_pattern_QMARK_(pattern,p1__54491_SHARP_);
}),coll);var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__54494){var vec__54495 = p__54494;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54495,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54495,(1),null);return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data)));
});
datascript.query.lookup_pattern = (function lookup_pattern(context,clause){var vec__54497 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54497,(0),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54497,(1),null);var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);if((source instanceof datascript.core.DB))
{return datascript.query.lookup_pattern_db(source,pattern);
} else
{return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function collapse_rels(rels,new_rel){var rels__$1 = rels;var new_rel__$1 = new_rel;var acc = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(rels__$1);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel)))))
{{
var G__54498 = cljs.core.next(rels__$1);
var G__54499 = datascript.query.hash_join(rel,new_rel__$1);
var G__54500 = acc;
rels__$1 = G__54498;
new_rel__$1 = G__54499;
acc = G__54500;
continue;
}
} else
{{
var G__54501 = cljs.core.next(rels__$1);
var G__54502 = new_rel__$1;
var G__54503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__54501;
new_rel__$1 = G__54502;
acc = G__54503;
continue;
}
}
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function context_resolve_val(context,sym){var temp__4126__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54504_SHARP_){return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__54504_SHARP_),sym);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));if(cljs.core.truth_(temp__4126__auto__))
{var rel = temp__4126__auto__;return (cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else
{return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function rel_contains_attrs_QMARK_(rel,attrs){return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function rel_prod_by_attrs(context,attrs){var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54505_SHARP_){return datascript.query.rel_contains_attrs_QMARK_(p1__54505_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__54506_SHARP_){return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__54506_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function _call_fn(rel,f,args){return (function (tuple){var resolved_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54507_SHARP_){if((p1__54507_SHARP_ instanceof cljs.core.Symbol))
{return (tuple[cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__54507_SHARP_)]);
} else
{return p1__54507_SHARP_;
}
}),args);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,resolved_args);
});
});
datascript.query.filter_by_pred = (function filter_by_pred(context,clause){var vec__54512 = clause;var vec__54513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54512,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54513,(0),null);var args = cljs.core.nthnext(vec__54513,(1));var pred = (function (){var or__19289__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__54514 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54514,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54514,(1),null);var tuple_pred = datascript.query._call_fn(production,pred,args);var new_rel = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (vec__54512,vec__54513,f,args,pred,vec__54514,context__$1,production,tuple_pred){
return (function (p1__54508_SHARP_){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__54508_SHARP_);
});})(vec__54512,vec__54513,f,args,pred,vec__54514,context__$1,production,tuple_pred))
);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function bind_by_fn(context,clause){var vec__54520 = clause;var vec__54521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54520,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54521,(0),null);var args = cljs.core.nthnext(vec__54521,(1));var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54520,(1),null);var fun = (function (){var or__19289__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__54522 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54522,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54522,(1),null);var tuple_fn = datascript.query._call_fn(production,fun,args);var new_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__54520,vec__54521,f,args,out,fun,vec__54522,context__$1,production,tuple_fn){
return (function (p1__54515_SHARP_){var val = (function (){var G__54523 = p1__54515_SHARP_;return (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(G__54523) : tuple_fn.call(null,G__54523));
})();var rel = datascript.query.in__GT_rel(out,val);return datascript.query.prod_rel((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54515_SHARP_], null))),rel);
});})(vec__54520,vec__54521,f,args,out,fun,vec__54522,context__$1,production,tuple_fn))
,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production)));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function rule_QMARK_(context,clause){return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = (function (){var G__54524 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__54524) : cljs.core.atom.call(null,G__54524));
})();
datascript.query.expand_rule = (function expand_rule(clause,context,used_args){var vec__54549 = clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54549,(0),null);var call_args = cljs.core.nthnext(vec__54549,(1));var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);var iter__20686__auto__ = ((function (vec__54549,rule,call_args,seqid,branches){
return (function iter__54550(s__54551){return (new cljs.core.LazySeq(null,((function (vec__54549,rule,call_args,seqid,branches){
return (function (){var s__54551__$1 = s__54551;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54551__$1);if(temp__4126__auto__)
{var s__54551__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54551__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__54551__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__54553 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__54552 = (0);while(true){
if((i__54552 < size__20685__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__54552);var vec__54564 = branch;var vec__54565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54564,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565,(0),null);var rule_args = cljs.core.nthnext(vec__54565,(1));var clauses = cljs.core.nthnext(vec__54564,(1));var replacements = cljs.core.zipmap(rule_args,call_args);cljs.core.chunk_append(b__54553,clojure.walk.postwalk(((function (i__54552,vec__54564,vec__54565,_,rule_args,clauses,replacements,branch,c__20683__auto__,size__20685__auto__,b__54553,s__54551__$2,temp__4126__auto__,vec__54549,rule,call_args,seqid,branches){
return (function (p1__54525_SHARP_){if(datascript.query.free_var_QMARK_(p1__54525_SHARP_))
{var or__19289__auto__ = (function (){var G__54567 = p1__54525_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__54567) : replacements.call(null,G__54567));
})();if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__54525_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__54525_SHARP_;
}
});})(i__54552,vec__54564,vec__54565,_,rule_args,clauses,replacements,branch,c__20683__auto__,size__20685__auto__,b__54553,s__54551__$2,temp__4126__auto__,vec__54549,rule,call_args,seqid,branches))
,clauses));
{
var G__54572 = (i__54552 + (1));
i__54552 = G__54572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54553),iter__54550(cljs.core.chunk_rest(s__54551__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54553),null);
}
} else
{var branch = cljs.core.first(s__54551__$2);var vec__54568 = branch;var vec__54569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54568,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54569,(0),null);var rule_args = cljs.core.nthnext(vec__54569,(1));var clauses = cljs.core.nthnext(vec__54568,(1));var replacements = cljs.core.zipmap(rule_args,call_args);return cljs.core.cons(clojure.walk.postwalk(((function (vec__54568,vec__54569,_,rule_args,clauses,replacements,branch,s__54551__$2,temp__4126__auto__,vec__54549,rule,call_args,seqid,branches){
return (function (p1__54525_SHARP_){if(datascript.query.free_var_QMARK_(p1__54525_SHARP_))
{var or__19289__auto__ = (function (){var G__54571 = p1__54525_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__54571) : replacements.call(null,G__54571));
})();if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__54525_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__54525_SHARP_;
}
});})(vec__54568,vec__54569,_,rule_args,clauses,replacements,branch,s__54551__$2,temp__4126__auto__,vec__54549,rule,call_args,seqid,branches))
,clauses),iter__54550(cljs.core.rest(s__54551__$2)));
}
} else
{return null;
}
break;
}
});})(vec__54549,rule,call_args,seqid,branches))
,null,null));
});})(vec__54549,rule,call_args,seqid,branches))
;return iter__20686__auto__(branches);
});
datascript.query.remove_pairs = (function remove_pairs(xs,ys){var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54575){var vec__54576 = p__54575;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54576,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54576,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function rule_gen_guards(rule_clause,used_args){var vec__54588 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54588,(0),null);var call_args = cljs.core.nthnext(vec__54588,(1));var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);var iter__20686__auto__ = ((function (vec__54588,rule,call_args,prev_call_args){
return (function iter__54589(s__54590){return (new cljs.core.LazySeq(null,((function (vec__54588,rule,call_args,prev_call_args){
return (function (){var s__54590__$1 = s__54590;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54590__$1);if(temp__4126__auto__)
{var s__54590__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54590__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__54590__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__54592 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__54591 = (0);while(true){
if((i__54591 < size__20685__auto__))
{var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__54591);var vec__54597 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54597,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54597,(1),null);cljs.core.chunk_append(b__54592,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null));
{
var G__54599 = (i__54591 + (1));
i__54591 = G__54599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54592),iter__54589(cljs.core.chunk_rest(s__54590__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54592),null);
}
} else
{var prev_args = cljs.core.first(s__54590__$2);var vec__54598 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54598,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54598,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null),iter__54589(cljs.core.rest(s__54590__$2)));
}
} else
{return null;
}
break;
}
});})(vec__54588,rule,call_args,prev_call_args))
,null,null));
});})(vec__54588,rule,call_args,prev_call_args))
;return iter__20686__auto__(prev_call_args);
});
datascript.query.walk_collect = (function walk_collect(form,pred){var res = (function (){var G__54604 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__54604) : cljs.core.atom.call(null,G__54604));
})();clojure.walk.postwalk(((function (res){
return (function (p1__54600_SHARP_){if(cljs.core.truth_((function (){var G__54605 = p1__54600_SHARP_;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__54605) : pred.call(null,G__54605));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__54600_SHARP_);
} else
{}
return p1__54600_SHARP_;
});})(res))
,form);
var G__54606 = res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54606) : cljs.core.deref.call(null,G__54606));
});
datascript.query.split_guards = (function split_guards(clauses,guards){var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));var pred = ((function (bound_vars){
return (function (p__54610){var vec__54611 = p__54610;var vec__54612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54611,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54612,(0),null);var vars = cljs.core.nthnext(vec__54612,(1));return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function solve_rule(context,clause){var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__54613_SHARP_){return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__54613_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;var stack = cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY));while(true){
var temp__4124__auto__ = cljs.core.first(stack);if(cljs.core.truth_(temp__4124__auto__))
{var frame = temp__4124__auto__;var vec__54628 = cljs.core.split_with(((function (stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__54614_SHARP_){return !(datascript.query.rule_QMARK_(context,p1__54614_SHARP_));
});})(stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54628,(0),null);var vec__54629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54628,(1),null);var rule_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54629,(0),null);var next_clauses = cljs.core.nthnext(vec__54629,(1));if((rule_clause == null))
{var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);var tuples = (function (){var G__54630 = context__$1;var G__54631 = final_attrs;return (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(G__54630,G__54631) : datascript.query._collect.call(null,G__54630,G__54631));
})();var new_rel = (new datascript.query.Relation(final_attrs_map,tuples));{
var G__54640 = cljs.core.next(stack);
var G__54641 = datascript.query.sum_rel(rel,new_rel);
stack = G__54640;
rel = G__54641;
continue;
}
} else
{var vec__54632 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54632,(0),null);var call_args = cljs.core.nthnext(vec__54632,(1));var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));var vec__54633 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54633,(0),null);var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54633,(1),null);if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__54632,rule,call_args,guards,vec__54633,active_gs,pending_gs,vec__54628,clauses,vec__54629,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__54615_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54615_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__54632,rule,call_args,guards,vec__54633,active_gs,pending_gs,vec__54628,clauses,vec__54629,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs)))
{{
var G__54642 = cljs.core.next(stack);
var G__54643 = rel;
stack = G__54642;
rel = G__54643;
continue;
}
} else
{var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);if(cljs.core.truth_(empty_rels_QMARK_(prefix_context)))
{{
var G__54644 = cljs.core.next(stack);
var G__54645 = rel;
stack = G__54644;
rel = G__54645;
continue;
}
} else
{var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));var branches = datascript.query.expand_rule(rule_clause,context,used_args);{
var G__54646 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__20686__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__54632,rule,call_args,guards,vec__54633,active_gs,pending_gs,vec__54628,clauses,vec__54629,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__54634(s__54635){return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__54632,rule,call_args,guards,vec__54633,active_gs,pending_gs,vec__54628,clauses,vec__54629,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){var s__54635__$1 = s__54635;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54635__$1);if(temp__4126__auto__)
{var s__54635__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54635__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__54635__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__54637 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__54636 = (0);while(true){
if((i__54636 < size__20685__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__54636);cljs.core.chunk_append(b__54637,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));
{
var G__54648 = (i__54636 + (1));
i__54636 = G__54648;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54637),iter__54634(cljs.core.chunk_rest(s__54635__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54637),null);
}
} else
{var branch = cljs.core.first(s__54635__$2);return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),iter__54634(cljs.core.rest(s__54635__$2)));
}
} else
{return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__54632,rule,call_args,guards,vec__54633,active_gs,pending_gs,vec__54628,clauses,vec__54629,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__54632,rule,call_args,guards,vec__54633,active_gs,pending_gs,vec__54628,clauses,vec__54629,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;return iter__20686__auto__(branches);
})(),cljs.core.next(stack));
var G__54647 = rel;
stack = G__54646;
rel = G__54647;
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
datascript.query._resolve_clause = (function _resolve_clause(context,clause){var pred__54658 = datascript.query.looks_like_QMARK_;var expr__54659 = clause;if(cljs.core.truth_((function (){var G__54661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__54662 = expr__54659;return (pred__54658.cljs$core$IFn$_invoke$arity$2 ? pred__54658.cljs$core$IFn$_invoke$arity$2(G__54661,G__54662) : pred__54658.call(null,G__54661,G__54662));
})()))
{return datascript.query.filter_by_pred(context,clause);
} else
{if(cljs.core.truth_((function (){var G__54663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);var G__54664 = expr__54659;return (pred__54658.cljs$core$IFn$_invoke$arity$2 ? pred__54658.cljs$core$IFn$_invoke$arity$2(G__54663,G__54664) : pred__54658.call(null,G__54663,G__54664));
})()))
{return datascript.query.bind_by_fn(context,clause);
} else
{if(cljs.core.truth_((function (){var G__54665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__54666 = expr__54659;return (pred__54658.cljs$core$IFn$_invoke$arity$2 ? pred__54658.cljs$core$IFn$_invoke$arity$2(G__54665,G__54666) : pred__54658.call(null,G__54665,G__54666));
})()))
{var relation = datascript.query.lookup_pattern(context,clause);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__54659))));
}
}
}
});
datascript.query.resolve_clause = (function resolve_clause(context,clause){if(datascript.query.rule_QMARK_(context,clause))
{var vec__54668 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54668,(0),null);var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54668,(1),null);var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
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
var G__54695 = acc;
var G__54696 = cljs.core.next(rels);
var G__54697 = symbols;
acc = G__54695;
rels = G__54696;
symbols = G__54697;
continue;
}
} else
{var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__4124__auto__){
return (function (p1__54669_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__54669_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4124__auto__))
,symbols));var len = cljs.core.count(symbols);{
var G__54698 = (function (){var iter__20686__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__54684(s__54685){return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__54685__$1 = s__54685;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54685__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__20679__auto__ = ((function (s__54685__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__54686(s__54687){return (new cljs.core.LazySeq(null,((function (s__54685__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__54687__$1 = s__54687;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__54687__$1);if(temp__4126__auto____$1)
{var s__54687__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__54687__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__54687__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__54689 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__54688 = (0);while(true){
if((i__54688 < size__20685__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__54688);cljs.core.chunk_append(b__54689,(function (){var res = cljs.core.aclone(t1);var n__20929__auto___54701 = len;var i_54702 = (0);while(true){
if((i_54702 < n__20929__auto___54701))
{var temp__4126__auto___54703__$2 = (copy_map[i_54702]);if(cljs.core.truth_(temp__4126__auto___54703__$2))
{var idx_54704 = temp__4126__auto___54703__$2;(res[i_54702] = (t2[idx_54704]));
} else
{}
{
var G__54705 = (i_54702 + (1));
i_54702 = G__54705;
continue;
}
} else
{}
break;
}
return res;
})());
{
var G__54706 = (i__54688 + (1));
i__54688 = G__54706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54689),iter__54686(cljs.core.chunk_rest(s__54687__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54689),null);
}
} else
{var t2 = cljs.core.first(s__54687__$2);return cljs.core.cons((function (){var res = cljs.core.aclone(t1);var n__20929__auto___54707 = len;var i_54708 = (0);while(true){
if((i_54708 < n__20929__auto___54707))
{var temp__4126__auto___54709__$2 = (copy_map[i_54708]);if(cljs.core.truth_(temp__4126__auto___54709__$2))
{var idx_54710 = temp__4126__auto___54709__$2;(res[i_54708] = (t2[idx_54710]));
} else
{}
{
var G__54711 = (i_54708 + (1));
i_54708 = G__54711;
continue;
}
} else
{}
break;
}
return res;
})(),iter__54686(cljs.core.rest(s__54687__$2)));
}
} else
{return null;
}
break;
}
});})(s__54685__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(s__54685__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;var fs__20680__auto__ = cljs.core.seq(iterys__20679__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));if(fs__20680__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20680__auto__,iter__54684(cljs.core.rest(s__54685__$1)));
} else
{{
var G__54712 = cljs.core.rest(s__54685__$1);
s__54685__$1 = G__54712;
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
;return iter__20686__auto__(acc);
})();
var G__54699 = cljs.core.next(rels);
var G__54700 = symbols;
acc = G__54698;
rels = G__54699;
symbols = G__54700;
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
datascript.query.find_attrs = (function find_attrs(q){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54713_SHARP_){if(cljs.core.sequential_QMARK_(p1__54713_SHARP_))
{return cljs.core.last(p1__54713_SHARP_);
} else
{return p1__54713_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
});
datascript.query._aggregate = (function _aggregate(q,context,tuples){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (form,fixed_value,i){if(cljs.core.sequential_QMARK_(form))
{var vec__54719 = form;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54719,(0),null);var args = cljs.core.nthnext(vec__54719,(1));var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__54719,f,args){
return (function (p1__54714_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__54714_SHARP_,i);
});})(vec__54719,f,args))
,tuples);var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__54719,f,args,vals){
return (function (p1__54715_SHARP_){if((p1__54715_SHARP_ instanceof cljs.core.Symbol))
{return datascript.query.context_resolve_val(context,p1__54715_SHARP_);
} else
{return p1__54715_SHARP_;
}
});})(vec__54719,f,args,vals))
,cljs.core.butlast(args));var f__$1 = (function (){var or__19289__auto__ = (function (){var G__54721 = f;return (datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1 ? datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1(G__54721) : datascript.query.built_in_aggregates.call(null,G__54721));
})();if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else
{return fixed_value;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.aggregate = (function aggregate(q,context,resultset){var group_idxs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__54722_SHARP_,p2__54723_SHARP_){if(cljs.core.sequential_QMARK_(p1__54722_SHARP_))
{return null;
} else
{return p2__54723_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));var group_fn = ((function (group_idxs){
return (function (tuple){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__54724_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__54724_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;var grouped = cljs.core.group_by(group_fn,resultset);var iter__20686__auto__ = ((function (group_idxs,group_fn,grouped){
return (function iter__54735(s__54736){return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){var s__54736__$1 = s__54736;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54736__$1);if(temp__4126__auto__)
{var s__54736__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54736__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__54736__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__54738 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__54737 = (0);while(true){
if((i__54737 < size__20685__auto__))
{var vec__54743 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__54737);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54743,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54743,(1),null);cljs.core.chunk_append(b__54738,datascript.query._aggregate(q,context,tuples));
{
var G__54745 = (i__54737 + (1));
i__54737 = G__54745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54738),iter__54735(cljs.core.chunk_rest(s__54736__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54738),null);
}
} else
{var vec__54744 = cljs.core.first(s__54736__$2);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54744,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54744,(1),null);return cljs.core.cons(datascript.query._aggregate(q,context,tuples),iter__54735(cljs.core.rest(s__54736__$2)));
}
} else
{return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;return iter__20686__auto__(grouped);
});
datascript.query.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first(qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__54746 = parsed;
var G__54747 = q;
var G__54748 = cljs.core.next(qs);
parsed = G__54746;
key = G__54747;
qs = G__54748;
continue;
}
} else
{{
var G__54749 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__54750 = key;
var G__54751 = cljs.core.next(qs);
parsed = G__54749;
key = G__54750;
qs = G__54751;
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
var q__delegate = function (q__$1,inputs){var q__$2 = ((cljs.core.sequential_QMARK_(q__$1))?datascript.query.parse_query(q__$1):q__$1);var find = datascript.query.find_attrs(q__$2);var ins = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(q__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$2);var context = datascript.query.parse_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),ins,inputs);var resultset = datascript.query.collect(datascript.query._q(context,wheres),find);var G__54754 = resultset;var G__54754__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$2))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__54754,q__$2,find,ins,wheres,context,resultset){
return (function (p1__54752_SHARP_){return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__54752_SHARP_,(0),cljs.core.count(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2)));
});})(G__54754,q__$2,find,ins,wheres,context,resultset))
,G__54754):G__54754);var G__54754__$2 = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2))))?datascript.query.aggregate(q__$2,context,G__54754__$1):G__54754__$1);return G__54754__$2;
};
var q = function (q__$1,var_args){
var inputs = null;if (arguments.length > 1) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,q__$1,inputs);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__54755){
var q__$1 = cljs.core.first(arglist__54755);
var inputs = cljs.core.rest(arglist__54755);
return q__delegate(q__$1,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
//# sourceMappingURL=query.js.map