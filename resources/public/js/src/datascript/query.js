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
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20785__auto__,k__20786__auto__){var self__ = this;
var this__20785__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20785__auto____$1,k__20786__auto__,null);
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20787__auto__,k37557,else__20788__auto__){var self__ = this;
var this__20787__auto____$1 = this;var G__37559 = (((k37557 instanceof cljs.core.Keyword))?k37557.fqn:null);switch (G__37559) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37557,else__20788__auto__);

}
});
datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20799__auto__,writer__20800__auto__,opts__20801__auto__){var self__ = this;
var this__20799__auto____$1 = this;var pr_pair__20802__auto__ = ((function (this__20799__auto____$1){
return (function (keyval__20803__auto__){return cljs.core.pr_sequential_writer(writer__20800__auto__,cljs.core.pr_writer,""," ","",opts__20801__auto__,keyval__20803__auto__);
});})(this__20799__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20800__auto__,pr_pair__20802__auto__,"#datascript.query.Context{",", ","}",opts__20801__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20783__auto__){var self__ = this;
var this__20783__auto____$1 = this;return self__.__meta;
});
datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20779__auto__){var self__ = this;
var this__20779__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20789__auto__){var self__ = this;
var this__20789__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20780__auto__){var self__ = this;
var this__20780__auto____$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_imap(this__20780__auto____$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20781__auto__,other__20782__auto__){var self__ = this;
var this__20781__auto____$1 = this;if(cljs.core.truth_((function (){var and__19621__auto__ = other__20782__auto__;if(cljs.core.truth_(and__19621__auto__))
{return ((this__20781__auto____$1.constructor === other__20782__auto__.constructor)) && (cljs.core.equiv_map(this__20781__auto____$1,other__20782__auto__));
} else
{return and__19621__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20794__auto__,k__20795__auto__){var self__ = this;
var this__20794__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__20795__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20794__auto____$1),self__.__meta),k__20795__auto__);
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20795__auto__)),null));
}
});
datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20792__auto__,k__20793__auto__,G__37556){var self__ = this;
var this__20792__auto____$1 = this;var pred__37560 = cljs.core.keyword_identical_QMARK_;var expr__37561 = k__20793__auto__;if(cljs.core.truth_((function (){var G__37563 = new cljs.core.Keyword(null,"rels","rels",1770187185);var G__37564 = expr__37561;return (pred__37560.cljs$core$IFn$_invoke$arity$2 ? pred__37560.cljs$core$IFn$_invoke$arity$2(G__37563,G__37564) : pred__37560.call(null,G__37563,G__37564));
})()))
{return (new datascript.query.Context(G__37556,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37565 = new cljs.core.Keyword(null,"sources","sources",-321166424);var G__37566 = expr__37561;return (pred__37560.cljs$core$IFn$_invoke$arity$2 ? pred__37560.cljs$core$IFn$_invoke$arity$2(G__37565,G__37566) : pred__37560.call(null,G__37565,G__37566));
})()))
{return (new datascript.query.Context(self__.rels,G__37556,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37567 = new cljs.core.Keyword(null,"rules","rules",1198912366);var G__37568 = expr__37561;return (pred__37560.cljs$core$IFn$_invoke$arity$2 ? pred__37560.cljs$core$IFn$_invoke$arity$2(G__37567,G__37568) : pred__37560.call(null,G__37567,G__37568));
})()))
{return (new datascript.query.Context(self__.rels,self__.sources,G__37556,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20793__auto__,G__37556),null));
}
}
}
});
datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20797__auto__){var self__ = this;
var this__20797__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20784__auto__,G__37556){var self__ = this;
var this__20784__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__37556,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20790__auto__,entry__20791__auto__){var self__ = this;
var this__20790__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20791__auto__))
{return cljs.core._assoc(this__20790__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20791__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20791__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20790__auto____$1,entry__20791__auto__);
}
});
datascript.query.Context.cljs$lang$type = true;
datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__20834__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});
datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__20834__auto__,writer__20835__auto__){return cljs.core._write(writer__20835__auto__,"datascript.query/Context");
});
datascript.query.__GT_Context = (function __GT_Context(rels,sources,rules){return (new datascript.query.Context(rels,sources,rules));
});
datascript.query.map__GT_Context = (function map__GT_Context(G__37558){return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__37558),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__37558),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__37558),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37558,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.array_seq([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0))));
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
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20785__auto__,k__20786__auto__){var self__ = this;
var this__20785__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20785__auto____$1,k__20786__auto__,null);
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20787__auto__,k37571,else__20788__auto__){var self__ = this;
var this__20787__auto____$1 = this;var G__37573 = (((k37571 instanceof cljs.core.Keyword))?k37571.fqn:null);switch (G__37573) {
case "tuples":
return self__.tuples;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37571,else__20788__auto__);

}
});
datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20799__auto__,writer__20800__auto__,opts__20801__auto__){var self__ = this;
var this__20799__auto____$1 = this;var pr_pair__20802__auto__ = ((function (this__20799__auto____$1){
return (function (keyval__20803__auto__){return cljs.core.pr_sequential_writer(writer__20800__auto__,cljs.core.pr_writer,""," ","",opts__20801__auto__,keyval__20803__auto__);
});})(this__20799__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20800__auto__,pr_pair__20802__auto__,"#datascript.query.Relation{",", ","}",opts__20801__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20783__auto__){var self__ = this;
var this__20783__auto____$1 = this;return self__.__meta;
});
datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20779__auto__){var self__ = this;
var this__20779__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20789__auto__){var self__ = this;
var this__20789__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20780__auto__){var self__ = this;
var this__20780__auto____$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_imap(this__20780__auto____$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20781__auto__,other__20782__auto__){var self__ = this;
var this__20781__auto____$1 = this;if(cljs.core.truth_((function (){var and__19621__auto__ = other__20782__auto__;if(cljs.core.truth_(and__19621__auto__))
{return ((this__20781__auto____$1.constructor === other__20782__auto__.constructor)) && (cljs.core.equiv_map(this__20781__auto____$1,other__20782__auto__));
} else
{return and__19621__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20794__auto__,k__20795__auto__){var self__ = this;
var this__20794__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__20795__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20794__auto____$1),self__.__meta),k__20795__auto__);
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20795__auto__)),null));
}
});
datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20792__auto__,k__20793__auto__,G__37570){var self__ = this;
var this__20792__auto____$1 = this;var pred__37574 = cljs.core.keyword_identical_QMARK_;var expr__37575 = k__20793__auto__;if(cljs.core.truth_((function (){var G__37577 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713);var G__37578 = expr__37575;return (pred__37574.cljs$core$IFn$_invoke$arity$2 ? pred__37574.cljs$core$IFn$_invoke$arity$2(G__37577,G__37578) : pred__37574.call(null,G__37577,G__37578));
})()))
{return (new datascript.query.Relation(G__37570,self__.tuples,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__37579 = new cljs.core.Keyword(null,"tuples","tuples",-676032639);var G__37580 = expr__37575;return (pred__37574.cljs$core$IFn$_invoke$arity$2 ? pred__37574.cljs$core$IFn$_invoke$arity$2(G__37579,G__37580) : pred__37574.call(null,G__37579,G__37580));
})()))
{return (new datascript.query.Relation(self__.attrs,G__37570,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20793__auto__,G__37570),null));
}
}
});
datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20797__auto__){var self__ = this;
var this__20797__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20784__auto__,G__37570){var self__ = this;
var this__20784__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,G__37570,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20790__auto__,entry__20791__auto__){var self__ = this;
var this__20790__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20791__auto__))
{return cljs.core._assoc(this__20790__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20791__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20791__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20790__auto____$1,entry__20791__auto__);
}
});
datascript.query.Relation.cljs$lang$type = true;
datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__20834__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});
datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__20834__auto__,writer__20835__auto__){return cljs.core._write(writer__20835__auto__,"datascript.query/Relation");
});
datascript.query.__GT_Relation = (function __GT_Relation(attrs,tuples){return (new datascript.query.Relation(attrs,tuples));
});
datascript.query.map__GT_Relation = (function map__GT_Relation(G__37572){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__37572),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__37572),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37572,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.array_seq([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0))));
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
concatv.cljs$lang$applyTo = (function (arglist__37582){
var xs = cljs.core.seq(arglist__37582);
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
{return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__37594){var vec__37595 = p__37594;var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37595,(0),null);var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37595,(1),null);return looks_like_QMARK_(pattern_el,form_el);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else
{var G__37596 = form;return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(G__37596) : pattern.call(null,G__37596));

}
}
}
}
});
datascript.query.join_tuples = (function join_tuples(t1,idxs1,t2,idxs2){var l1 = idxs1.length;var l2 = idxs2.length;var res = (new Array((l1 + l2)));var n__21341__auto___37597 = l1;var i_37598 = (0);while(true){
if((i_37598 < n__21341__auto___37597))
{(res[i_37598] = (t1[(idxs1[i_37598])]));
{
var G__37599 = (i_37598 + (1));
i_37598 = G__37599;
continue;
}
} else
{}
break;
}
var n__21341__auto___37600 = l2;var i_37601 = (0);while(true){
if((i_37601 < n__21341__auto___37600))
{(res[(l1 + i_37601)] = (t2[(idxs2[i_37601])]));
{
var G__37602 = (i_37601 + (1));
i_37601 = G__37602;
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
var prod_rel__2 = (function (rel1,rel2){var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),(function (){var iter__21074__auto__ = ((function (attrs1,attrs2,idxs1,idxs2){
return (function iter__37614(s__37615){return (new cljs.core.LazySeq(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (){var s__37615__$1 = s__37615;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37615__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__21070__auto__ = ((function (s__37615__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function iter__37616(s__37617){return (new cljs.core.LazySeq(null,((function (s__37615__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function (){var s__37617__$1 = s__37617;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__37617__$1);if(temp__4126__auto____$1)
{var s__37617__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__37617__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__37617__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__37619 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__37618 = (0);while(true){
if((i__37618 < size__21073__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__37618);cljs.core.chunk_append(b__37619,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
{
var G__37625 = (i__37618 + (1));
i__37618 = G__37625;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37619),iter__37616(cljs.core.chunk_rest(s__37617__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37619),null);
}
} else
{var t2 = cljs.core.first(s__37617__$2);return cljs.core.cons(datascript.query.join_tuples(t1,idxs1,t2,idxs2),iter__37616(cljs.core.rest(s__37617__$2)));
}
} else
{return null;
}
break;
}
});})(s__37615__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(s__37615__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
;var fs__21071__auto__ = cljs.core.seq(iterys__21070__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2)));if(fs__21071__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__21071__auto__,iter__37614(cljs.core.rest(s__37615__$1)));
} else
{{
var G__37626 = cljs.core.rest(s__37615__$1);
s__37615__$1 = G__37626;
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
;return iter__21074__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1));
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
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__37627){
var xs = cljs.core.seq(arglist__37627);
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
_get_some.cljs$lang$applyTo = (function (arglist__37628){
var db = cljs.core.first(arglist__37628);
arglist__37628 = cljs.core.next(arglist__37628);
var e = cljs.core.first(arglist__37628);
var as = cljs.core.rest(arglist__37628);
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
var G__37630 = null;
var G__37630__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,coll);
});
var G__37630__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
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
G__37630 = function(n,coll){
switch(arguments.length){
case 1:
return G__37630__1.call(this,n);
case 2:
return G__37630__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37630.cljs$core$IFn$_invoke$arity$1 = G__37630__1;
G__37630.cljs$core$IFn$_invoke$arity$2 = G__37630__2;
return G__37630;
})()
,new cljs.core.Symbol(null,"max","max",1701898075,null),(function() {
var G__37631 = null;
var G__37631__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,coll);
});
var G__37631__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
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
G__37631 = function(n,coll){
switch(arguments.length){
case 1:
return G__37631__1.call(this,n);
case 2:
return G__37631__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37631.cljs$core$IFn$_invoke$arity$1 = G__37631__1;
G__37631.cljs$core$IFn$_invoke$arity$2 = G__37631__2;
return G__37631;
})()
,new cljs.core.Symbol(null,"sum","sum",1777518341,null),(function (p1__37629_SHARP_){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),p1__37629_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),(function() {
var G__37632 = null;
var G__37632__1 = (function (coll){return cljs.core.rand_nth(coll);
});
var G__37632__2 = (function (n,coll){return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){return cljs.core.rand_nth(coll);
})));
});
G__37632 = function(n,coll){
switch(arguments.length){
case 1:
return G__37632__1.call(this,n);
case 2:
return G__37632__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37632.cljs$core$IFn$_invoke$arity$1 = G__37632__1;
G__37632.cljs$core$IFn$_invoke$arity$2 = G__37632__2;
return G__37632;
})()
,new cljs.core.Symbol(null,"sample","sample",1719555128,null),(function (n,coll){return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
}),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.count], null);
datascript.query.in__GT_rel = (function in__GT_rel(form,value){var pred__37654 = datascript.query.looks_like_QMARK_;var expr__37655 = form;if(cljs.core.truth_((function (){var G__37657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null);var G__37658 = expr__37655;return (pred__37654.cljs$core$IFn$_invoke$arity$2 ? pred__37654.cljs$core$IFn$_invoke$arity$2(G__37657,G__37658) : pred__37654.call(null,G__37657,G__37658));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__37654,expr__37655){
return (function (p1__37633_SHARP_){return in__GT_rel(cljs.core.first(form),p1__37633_SHARP_);
});})(pred__37654,expr__37655))
,value));
} else
{if(cljs.core.truth_((function (){var G__37659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__37660 = expr__37655;return (pred__37654.cljs$core$IFn$_invoke$arity$2 ? pred__37654.cljs$core$IFn$_invoke$arity$2(G__37659,G__37660) : pred__37654.call(null,G__37659,G__37660));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__37654,expr__37655){
return (function (p1__37634_SHARP_){return in__GT_rel(cljs.core.first(form),p1__37634_SHARP_);
});})(pred__37654,expr__37655))
,value));
} else
{if(cljs.core.truth_((function (){var G__37661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__37662 = expr__37655;return (pred__37654.cljs$core$IFn$_invoke$arity$2 ? pred__37654.cljs$core$IFn$_invoke$arity$2(G__37661,G__37662) : pred__37654.call(null,G__37661,G__37662));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (pred__37654,expr__37655){
return (function (p1__37635_SHARP_,p2__37636_SHARP_){return in__GT_rel(p1__37635_SHARP_,p2__37636_SHARP_);
});})(pred__37654,expr__37655))
,form,value));
} else
{if(cljs.core.truth_((function (){var G__37663 = new cljs.core.Symbol(null,"_","_",-1201019570,null);var G__37664 = expr__37655;return (pred__37654.cljs$core$IFn$_invoke$arity$2 ? pred__37654.cljs$core$IFn$_invoke$arity$2(G__37663,G__37664) : pred__37654.call(null,G__37663,G__37664));
})()))
{return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([form,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[value]], null)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37655))));
}
}
}
}
});
datascript.query.parse_rules = (function parse_rules(rules){var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.parse_in = (function parse_in(context,p__37665){var vec__37667 = p__37665;var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(0),null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(1),null);if(datascript.query.source_QMARK_(in$))
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
return (function (p1__37668_SHARP_){return (tuple[p1__37668_SHARP_]);
});})(idxs__$1))
));
});
;})(idxs__$1))
}
});
datascript.query.hash_attrs = (function hash_attrs(idxs,tuples){var key_fn = datascript.query.tuple_key_fn(idxs);var tuples__$1 = tuples;var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
var temp__4124__auto__ = cljs.core.first(tuples__$1);if(cljs.core.truth_(temp__4124__auto__))
{var tuple = temp__4124__auto__;var key = (function (){var G__37670 = tuple;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__37670) : key_fn.call(null,G__37670));
})();{
var G__37671 = cljs.core.next(tuples__$1);
var G__37672 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__37671;
hash_table = G__37672;
continue;
}
} else
{return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function hash_join(rel1,rel2){var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));var common_idxs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,common_attrs);var common_idxs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,common_attrs);var keep_attrs1 = cljs.core.keys(attrs1);var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));var hash = datascript.query.hash_attrs(common_idxs1,tuples1);var key_fn = datascript.query.tuple_key_fn(common_idxs2);var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc,tuple2){var key = (function (){var G__37674 = tuple2;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__37674) : key_fn.call(null,G__37674));
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
datascript.query.lookup_pattern_db = (function lookup_pattern_db(db,pattern){var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37675_SHARP_){if((p1__37675_SHARP_ instanceof cljs.core.Symbol))
{return null;
} else
{return p1__37675_SHARP_;
}
}),pattern);var datoms = datascript.core._search(db,search_pattern);var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__37678){var vec__37679 = p__37678;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37679,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37679,(1),null);return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));return (new datascript.query.Relation(attr__GT_prop,datoms));
});
datascript.query.matches_pattern_QMARK_ = (function matches_pattern_QMARK_(pattern,tuple){var tuple__$1 = tuple;var pattern__$1 = pattern;while(true){
if(cljs.core.truth_((function (){var and__19621__auto__ = tuple__$1;if(cljs.core.truth_(and__19621__auto__))
{return pattern__$1;
} else
{return and__19621__auto__;
}
})()))
{var t = cljs.core.first(tuple__$1);var p = cljs.core.first(pattern__$1);if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))
{{
var G__37680 = cljs.core.next(tuple__$1);
var G__37681 = cljs.core.next(pattern__$1);
tuple__$1 = G__37680;
pattern__$1 = G__37681;
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
datascript.query.lookup_pattern_coll = (function lookup_pattern_coll(coll,pattern){var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37682_SHARP_){return datascript.query.matches_pattern_QMARK_(pattern,p1__37682_SHARP_);
}),coll);var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__37685){var vec__37686 = p__37685;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37686,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37686,(1),null);return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data)));
});
datascript.query.lookup_pattern = (function lookup_pattern(context,clause){var vec__37688 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37688,(0),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37688,(1),null);var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);if((source instanceof datascript.core.DB))
{return datascript.query.lookup_pattern_db(source,pattern);
} else
{return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function collapse_rels(rels,new_rel){var rels__$1 = rels;var new_rel__$1 = new_rel;var acc = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(rels__$1);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel)))))
{{
var G__37689 = cljs.core.next(rels__$1);
var G__37690 = datascript.query.hash_join(rel,new_rel__$1);
var G__37691 = acc;
rels__$1 = G__37689;
new_rel__$1 = G__37690;
acc = G__37691;
continue;
}
} else
{{
var G__37692 = cljs.core.next(rels__$1);
var G__37693 = new_rel__$1;
var G__37694 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__37692;
new_rel__$1 = G__37693;
acc = G__37694;
continue;
}
}
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function context_resolve_val(context,sym){var temp__4126__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37695_SHARP_){return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__37695_SHARP_),sym);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));if(cljs.core.truth_(temp__4126__auto__))
{var rel = temp__4126__auto__;return (cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else
{return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function rel_contains_attrs_QMARK_(rel,attrs){return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function rel_prod_by_attrs(context,attrs){var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37696_SHARP_){return datascript.query.rel_contains_attrs_QMARK_(p1__37696_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__37697_SHARP_){return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__37697_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function _call_fn(context,rel,f,args){return (function (tuple){var resolved_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37698_SHARP_){if((p1__37698_SHARP_ instanceof cljs.core.Symbol))
{var or__19663__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),p1__37698_SHARP_);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (tuple[cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__37698_SHARP_)]);
}
} else
{return p1__37698_SHARP_;
}
}),args);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,resolved_args);
});
});
datascript.query.filter_by_pred = (function filter_by_pred(context,clause){var vec__37703 = clause;var vec__37704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37704,(0),null);var args = cljs.core.nthnext(vec__37704,(1));var pred = (function (){var or__19663__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__37705 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(1),null);var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);var new_rel = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (vec__37703,vec__37704,f,args,pred,vec__37705,context__$1,production,tuple_pred){
return (function (p1__37699_SHARP_){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__37699_SHARP_);
});})(vec__37703,vec__37704,f,args,pred,vec__37705,context__$1,production,tuple_pred))
);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function bind_by_fn(context,clause){var vec__37711 = clause;var vec__37712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37711,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37712,(0),null);var args = cljs.core.nthnext(vec__37712,(1));var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37711,(1),null);var fun = (function (){var or__19663__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__37713 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(1),null);var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);var new_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__37711,vec__37712,f,args,out,fun,vec__37713,context__$1,production,tuple_fn){
return (function (p1__37706_SHARP_){var val = (function (){var G__37714 = p1__37706_SHARP_;return (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(G__37714) : tuple_fn.call(null,G__37714));
})();var rel = datascript.query.in__GT_rel(out,val);return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37706_SHARP_], null))),rel);
});})(vec__37711,vec__37712,f,args,out,fun,vec__37713,context__$1,production,tuple_fn))
,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production)));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function rule_QMARK_(context,clause){return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = (function (){var G__37715 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37715) : cljs.core.atom.call(null,G__37715));
})();
datascript.query.expand_rule = (function expand_rule(clause,context,used_args){var vec__37740 = clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740,(0),null);var call_args = cljs.core.nthnext(vec__37740,(1));var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);var iter__21074__auto__ = ((function (vec__37740,rule,call_args,seqid,branches){
return (function iter__37741(s__37742){return (new cljs.core.LazySeq(null,((function (vec__37740,rule,call_args,seqid,branches){
return (function (){var s__37742__$1 = s__37742;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37742__$1);if(temp__4126__auto__)
{var s__37742__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37742__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__37742__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__37744 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__37743 = (0);while(true){
if((i__37743 < size__21073__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__37743);var vec__37755 = branch;var vec__37756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37755,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756,(0),null);var rule_args = cljs.core.nthnext(vec__37756,(1));var clauses = cljs.core.nthnext(vec__37755,(1));var replacements = cljs.core.zipmap(rule_args,call_args);cljs.core.chunk_append(b__37744,clojure.walk.postwalk(((function (i__37743,vec__37755,vec__37756,_,rule_args,clauses,replacements,branch,c__21072__auto__,size__21073__auto__,b__37744,s__37742__$2,temp__4126__auto__,vec__37740,rule,call_args,seqid,branches){
return (function (p1__37716_SHARP_){if(datascript.query.free_var_QMARK_(p1__37716_SHARP_))
{var or__19663__auto__ = (function (){var G__37758 = p1__37716_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__37758) : replacements.call(null,G__37758));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__37716_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__37716_SHARP_;
}
});})(i__37743,vec__37755,vec__37756,_,rule_args,clauses,replacements,branch,c__21072__auto__,size__21073__auto__,b__37744,s__37742__$2,temp__4126__auto__,vec__37740,rule,call_args,seqid,branches))
,clauses));
{
var G__37763 = (i__37743 + (1));
i__37743 = G__37763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37744),iter__37741(cljs.core.chunk_rest(s__37742__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37744),null);
}
} else
{var branch = cljs.core.first(s__37742__$2);var vec__37759 = branch;var vec__37760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37759,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37760,(0),null);var rule_args = cljs.core.nthnext(vec__37760,(1));var clauses = cljs.core.nthnext(vec__37759,(1));var replacements = cljs.core.zipmap(rule_args,call_args);return cljs.core.cons(clojure.walk.postwalk(((function (vec__37759,vec__37760,_,rule_args,clauses,replacements,branch,s__37742__$2,temp__4126__auto__,vec__37740,rule,call_args,seqid,branches){
return (function (p1__37716_SHARP_){if(datascript.query.free_var_QMARK_(p1__37716_SHARP_))
{var or__19663__auto__ = (function (){var G__37762 = p1__37716_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__37762) : replacements.call(null,G__37762));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__37716_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__37716_SHARP_;
}
});})(vec__37759,vec__37760,_,rule_args,clauses,replacements,branch,s__37742__$2,temp__4126__auto__,vec__37740,rule,call_args,seqid,branches))
,clauses),iter__37741(cljs.core.rest(s__37742__$2)));
}
} else
{return null;
}
break;
}
});})(vec__37740,rule,call_args,seqid,branches))
,null,null));
});})(vec__37740,rule,call_args,seqid,branches))
;return iter__21074__auto__(branches);
});
datascript.query.remove_pairs = (function remove_pairs(xs,ys){var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37766){var vec__37767 = p__37766;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37767,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37767,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function rule_gen_guards(rule_clause,used_args){var vec__37779 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37779,(0),null);var call_args = cljs.core.nthnext(vec__37779,(1));var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);var iter__21074__auto__ = ((function (vec__37779,rule,call_args,prev_call_args){
return (function iter__37780(s__37781){return (new cljs.core.LazySeq(null,((function (vec__37779,rule,call_args,prev_call_args){
return (function (){var s__37781__$1 = s__37781;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37781__$1);if(temp__4126__auto__)
{var s__37781__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37781__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__37781__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__37783 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__37782 = (0);while(true){
if((i__37782 < size__21073__auto__))
{var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__37782);var vec__37788 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37788,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37788,(1),null);cljs.core.chunk_append(b__37783,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null));
{
var G__37790 = (i__37782 + (1));
i__37782 = G__37790;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37783),iter__37780(cljs.core.chunk_rest(s__37781__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37783),null);
}
} else
{var prev_args = cljs.core.first(s__37781__$2);var vec__37789 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37789,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37789,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null),iter__37780(cljs.core.rest(s__37781__$2)));
}
} else
{return null;
}
break;
}
});})(vec__37779,rule,call_args,prev_call_args))
,null,null));
});})(vec__37779,rule,call_args,prev_call_args))
;return iter__21074__auto__(prev_call_args);
});
datascript.query.walk_collect = (function walk_collect(form,pred){var res = (function (){var G__37795 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37795) : cljs.core.atom.call(null,G__37795));
})();clojure.walk.postwalk(((function (res){
return (function (p1__37791_SHARP_){if(cljs.core.truth_((function (){var G__37796 = p1__37791_SHARP_;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__37796) : pred.call(null,G__37796));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__37791_SHARP_);
} else
{}
return p1__37791_SHARP_;
});})(res))
,form);
var G__37797 = res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37797) : cljs.core.deref.call(null,G__37797));
});
datascript.query.split_guards = (function split_guards(clauses,guards){var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));var pred = ((function (bound_vars){
return (function (p__37801){var vec__37802 = p__37801;var vec__37803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37802,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37803,(0),null);var vars = cljs.core.nthnext(vec__37803,(1));return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function solve_rule(context,clause){var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__37804_SHARP_){return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__37804_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;var stack = cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY));while(true){
var temp__4124__auto__ = cljs.core.first(stack);if(cljs.core.truth_(temp__4124__auto__))
{var frame = temp__4124__auto__;var vec__37819 = cljs.core.split_with(((function (stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__37805_SHARP_){return !(datascript.query.rule_QMARK_(context,p1__37805_SHARP_));
});})(stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37819,(0),null);var vec__37820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37819,(1),null);var rule_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37820,(0),null);var next_clauses = cljs.core.nthnext(vec__37820,(1));if((rule_clause == null))
{var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);var tuples = (function (){var G__37821 = context__$1;var G__37822 = final_attrs;return (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(G__37821,G__37822) : datascript.query._collect.call(null,G__37821,G__37822));
})();var new_rel = (new datascript.query.Relation(final_attrs_map,tuples));{
var G__37831 = cljs.core.next(stack);
var G__37832 = datascript.query.sum_rel(rel,new_rel);
stack = G__37831;
rel = G__37832;
continue;
}
} else
{var vec__37823 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37823,(0),null);var call_args = cljs.core.nthnext(vec__37823,(1));var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));var vec__37824 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37824,(0),null);var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37824,(1),null);if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__37823,rule,call_args,guards,vec__37824,active_gs,pending_gs,vec__37819,clauses,vec__37820,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__37806_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__37806_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__37823,rule,call_args,guards,vec__37824,active_gs,pending_gs,vec__37819,clauses,vec__37820,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs)))
{{
var G__37833 = cljs.core.next(stack);
var G__37834 = rel;
stack = G__37833;
rel = G__37834;
continue;
}
} else
{var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);if(cljs.core.truth_(empty_rels_QMARK_(prefix_context)))
{{
var G__37835 = cljs.core.next(stack);
var G__37836 = rel;
stack = G__37835;
rel = G__37836;
continue;
}
} else
{var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));var branches = datascript.query.expand_rule(rule_clause,context,used_args);{
var G__37837 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__21074__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__37823,rule,call_args,guards,vec__37824,active_gs,pending_gs,vec__37819,clauses,vec__37820,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__37825(s__37826){return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__37823,rule,call_args,guards,vec__37824,active_gs,pending_gs,vec__37819,clauses,vec__37820,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){var s__37826__$1 = s__37826;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37826__$1);if(temp__4126__auto__)
{var s__37826__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37826__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__37826__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__37828 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__37827 = (0);while(true){
if((i__37827 < size__21073__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__37827);cljs.core.chunk_append(b__37828,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));
{
var G__37839 = (i__37827 + (1));
i__37827 = G__37839;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37828),iter__37825(cljs.core.chunk_rest(s__37826__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37828),null);
}
} else
{var branch = cljs.core.first(s__37826__$2);return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),iter__37825(cljs.core.rest(s__37826__$2)));
}
} else
{return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__37823,rule,call_args,guards,vec__37824,active_gs,pending_gs,vec__37819,clauses,vec__37820,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__37823,rule,call_args,guards,vec__37824,active_gs,pending_gs,vec__37819,clauses,vec__37820,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;return iter__21074__auto__(branches);
})(),cljs.core.next(stack));
var G__37838 = rel;
stack = G__37837;
rel = G__37838;
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
datascript.query._resolve_clause = (function _resolve_clause(context,clause){var pred__37849 = datascript.query.looks_like_QMARK_;var expr__37850 = clause;if(cljs.core.truth_((function (){var G__37852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__37853 = expr__37850;return (pred__37849.cljs$core$IFn$_invoke$arity$2 ? pred__37849.cljs$core$IFn$_invoke$arity$2(G__37852,G__37853) : pred__37849.call(null,G__37852,G__37853));
})()))
{return datascript.query.filter_by_pred(context,clause);
} else
{if(cljs.core.truth_((function (){var G__37854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);var G__37855 = expr__37850;return (pred__37849.cljs$core$IFn$_invoke$arity$2 ? pred__37849.cljs$core$IFn$_invoke$arity$2(G__37854,G__37855) : pred__37849.call(null,G__37854,G__37855));
})()))
{return datascript.query.bind_by_fn(context,clause);
} else
{if(cljs.core.truth_((function (){var G__37856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__37857 = expr__37850;return (pred__37849.cljs$core$IFn$_invoke$arity$2 ? pred__37849.cljs$core$IFn$_invoke$arity$2(G__37856,G__37857) : pred__37849.call(null,G__37856,G__37857));
})()))
{var relation = datascript.query.lookup_pattern(context,clause);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37850))));
}
}
}
});
datascript.query.resolve_clause = (function resolve_clause(context,clause){if(datascript.query.rule_QMARK_(context,clause))
{var vec__37859 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37859,(0),null);var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37859,(1),null);var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
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
var G__37886 = acc;
var G__37887 = cljs.core.next(rels);
var G__37888 = symbols;
acc = G__37886;
rels = G__37887;
symbols = G__37888;
continue;
}
} else
{var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__4124__auto__){
return (function (p1__37860_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__37860_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4124__auto__))
,symbols));var len = cljs.core.count(symbols);{
var G__37889 = (function (){var iter__21074__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__37875(s__37876){return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__37876__$1 = s__37876;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37876__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__21070__auto__ = ((function (s__37876__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__37877(s__37878){return (new cljs.core.LazySeq(null,((function (s__37876__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__37878__$1 = s__37878;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__37878__$1);if(temp__4126__auto____$1)
{var s__37878__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__37878__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__37878__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__37880 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__37879 = (0);while(true){
if((i__37879 < size__21073__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__37879);cljs.core.chunk_append(b__37880,(function (){var res = cljs.core.aclone(t1);var n__21341__auto___37892 = len;var i_37893 = (0);while(true){
if((i_37893 < n__21341__auto___37892))
{var temp__4126__auto___37894__$2 = (copy_map[i_37893]);if(cljs.core.truth_(temp__4126__auto___37894__$2))
{var idx_37895 = temp__4126__auto___37894__$2;(res[i_37893] = (t2[idx_37895]));
} else
{}
{
var G__37896 = (i_37893 + (1));
i_37893 = G__37896;
continue;
}
} else
{}
break;
}
return res;
})());
{
var G__37897 = (i__37879 + (1));
i__37879 = G__37897;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37880),iter__37877(cljs.core.chunk_rest(s__37878__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37880),null);
}
} else
{var t2 = cljs.core.first(s__37878__$2);return cljs.core.cons((function (){var res = cljs.core.aclone(t1);var n__21341__auto___37898 = len;var i_37899 = (0);while(true){
if((i_37899 < n__21341__auto___37898))
{var temp__4126__auto___37900__$2 = (copy_map[i_37899]);if(cljs.core.truth_(temp__4126__auto___37900__$2))
{var idx_37901 = temp__4126__auto___37900__$2;(res[i_37899] = (t2[idx_37901]));
} else
{}
{
var G__37902 = (i_37899 + (1));
i_37899 = G__37902;
continue;
}
} else
{}
break;
}
return res;
})(),iter__37877(cljs.core.rest(s__37878__$2)));
}
} else
{return null;
}
break;
}
});})(s__37876__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(s__37876__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;var fs__21071__auto__ = cljs.core.seq(iterys__21070__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));if(fs__21071__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__21071__auto__,iter__37875(cljs.core.rest(s__37876__$1)));
} else
{{
var G__37903 = cljs.core.rest(s__37876__$1);
s__37876__$1 = G__37903;
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
;return iter__21074__auto__(acc);
})();
var G__37890 = cljs.core.next(rels);
var G__37891 = symbols;
acc = G__37889;
rels = G__37890;
symbols = G__37891;
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
datascript.query.find_attrs = (function find_attrs(q){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37904_SHARP_){if(cljs.core.sequential_QMARK_(p1__37904_SHARP_))
{return cljs.core.last(p1__37904_SHARP_);
} else
{return p1__37904_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
});
datascript.query._aggregate = (function _aggregate(q,context,tuples){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (form,fixed_value,i){if(cljs.core.sequential_QMARK_(form))
{var vec__37910 = form;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37910,(0),null);var args = cljs.core.nthnext(vec__37910,(1));var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__37910,f,args){
return (function (p1__37905_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__37905_SHARP_,i);
});})(vec__37910,f,args))
,tuples);var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__37910,f,args,vals){
return (function (p1__37906_SHARP_){if((p1__37906_SHARP_ instanceof cljs.core.Symbol))
{return datascript.query.context_resolve_val(context,p1__37906_SHARP_);
} else
{return p1__37906_SHARP_;
}
});})(vec__37910,f,args,vals))
,cljs.core.butlast(args));var f__$1 = (function (){var or__19663__auto__ = (function (){var G__37912 = f;return (datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1 ? datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1(G__37912) : datascript.query.built_in_aggregates.call(null,G__37912));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else
{return fixed_value;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.aggregate = (function aggregate(q,context,resultset){var group_idxs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37913_SHARP_,p2__37914_SHARP_){if(cljs.core.sequential_QMARK_(p1__37913_SHARP_))
{return null;
} else
{return p2__37914_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));var group_fn = ((function (group_idxs){
return (function (tuple){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__37915_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__37915_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;var grouped = cljs.core.group_by(group_fn,resultset);var iter__21074__auto__ = ((function (group_idxs,group_fn,grouped){
return (function iter__37926(s__37927){return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){var s__37927__$1 = s__37927;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37927__$1);if(temp__4126__auto__)
{var s__37927__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37927__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__37927__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__37929 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__37928 = (0);while(true){
if((i__37928 < size__21073__auto__))
{var vec__37934 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__37928);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37934,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37934,(1),null);cljs.core.chunk_append(b__37929,datascript.query._aggregate(q,context,tuples));
{
var G__37936 = (i__37928 + (1));
i__37928 = G__37936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37929),iter__37926(cljs.core.chunk_rest(s__37927__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37929),null);
}
} else
{var vec__37935 = cljs.core.first(s__37927__$2);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37935,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37935,(1),null);return cljs.core.cons(datascript.query._aggregate(q,context,tuples),iter__37926(cljs.core.rest(s__37927__$2)));
}
} else
{return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;return iter__21074__auto__(grouped);
});
datascript.query.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first(qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__37937 = parsed;
var G__37938 = q;
var G__37939 = cljs.core.next(qs);
parsed = G__37937;
key = G__37938;
qs = G__37939;
continue;
}
} else
{{
var G__37940 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__37941 = key;
var G__37942 = cljs.core.next(qs);
parsed = G__37940;
key = G__37941;
qs = G__37942;
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
var q__delegate = function (q__$1,inputs){var q__$2 = ((cljs.core.sequential_QMARK_(q__$1))?datascript.query.parse_query(q__$1):q__$1);var find = datascript.query.find_attrs(q__$2);var ins = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(q__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$2);var context = datascript.query.parse_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),ins,inputs);var resultset = datascript.query.collect(datascript.query._q(context,wheres),find);var G__37945 = resultset;var G__37945__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$2))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__37945,q__$2,find,ins,wheres,context,resultset){
return (function (p1__37943_SHARP_){return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__37943_SHARP_,(0),cljs.core.count(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2)));
});})(G__37945,q__$2,find,ins,wheres,context,resultset))
,G__37945):G__37945);var G__37945__$2 = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2))))?datascript.query.aggregate(q__$2,context,G__37945__$1):G__37945__$1);return G__37945__$2;
};
var q = function (q__$1,var_args){
var inputs = null;if (arguments.length > 1) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,q__$1,inputs);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__37946){
var q__$1 = cljs.core.first(arglist__37946);
var inputs = cljs.core.rest(arglist__37946);
return q__delegate(q__$1,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
//# sourceMappingURL=query.js.map