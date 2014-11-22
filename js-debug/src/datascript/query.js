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
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k46021,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__46023 = (((k46021 instanceof cljs.core.Keyword))?k46021.fqn:null);switch (G__46023) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46021,else__20653__auto__);

}
});
datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#datascript.query.Context{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__46020){var self__ = this;
var this__20657__auto____$1 = this;var pred__46024 = cljs.core.keyword_identical_QMARK_;var expr__46025 = k__20658__auto__;if(cljs.core.truth_((function (){var G__46027 = new cljs.core.Keyword(null,"rels","rels",1770187185);var G__46028 = expr__46025;return (pred__46024.cljs$core$IFn$_invoke$arity$2 ? pred__46024.cljs$core$IFn$_invoke$arity$2(G__46027,G__46028) : pred__46024.call(null,G__46027,G__46028));
})()))
{return (new datascript.query.Context(G__46020,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__46029 = new cljs.core.Keyword(null,"sources","sources",-321166424);var G__46030 = expr__46025;return (pred__46024.cljs$core$IFn$_invoke$arity$2 ? pred__46024.cljs$core$IFn$_invoke$arity$2(G__46029,G__46030) : pred__46024.call(null,G__46029,G__46030));
})()))
{return (new datascript.query.Context(self__.rels,G__46020,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__46031 = new cljs.core.Keyword(null,"rules","rules",1198912366);var G__46032 = expr__46025;return (pred__46024.cljs$core$IFn$_invoke$arity$2 ? pred__46024.cljs$core$IFn$_invoke$arity$2(G__46031,G__46032) : pred__46024.call(null,G__46031,G__46032));
})()))
{return (new datascript.query.Context(self__.rels,self__.sources,G__46020,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__46020),null));
}
}
}
});
datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__46020){var self__ = this;
var this__20649__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__46020,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
datascript.query.Context.cljs$lang$type = true;
datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});
datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"datascript.query/Context");
});
datascript.query.__GT_Context = (function __GT_Context(rels,sources,rules){return (new datascript.query.Context(rels,sources,rules));
});
datascript.query.map__GT_Context = (function map__GT_Context(G__46022){return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__46022),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__46022),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__46022),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46022,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.array_seq([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0))));
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
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k46035,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__46037 = (((k46035 instanceof cljs.core.Keyword))?k46035.fqn:null);switch (G__46037) {
case "tuples":
return self__.tuples;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46035,else__20653__auto__);

}
});
datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#datascript.query.Relation{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__46034){var self__ = this;
var this__20657__auto____$1 = this;var pred__46038 = cljs.core.keyword_identical_QMARK_;var expr__46039 = k__20658__auto__;if(cljs.core.truth_((function (){var G__46041 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713);var G__46042 = expr__46039;return (pred__46038.cljs$core$IFn$_invoke$arity$2 ? pred__46038.cljs$core$IFn$_invoke$arity$2(G__46041,G__46042) : pred__46038.call(null,G__46041,G__46042));
})()))
{return (new datascript.query.Relation(G__46034,self__.tuples,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__46043 = new cljs.core.Keyword(null,"tuples","tuples",-676032639);var G__46044 = expr__46039;return (pred__46038.cljs$core$IFn$_invoke$arity$2 ? pred__46038.cljs$core$IFn$_invoke$arity$2(G__46043,G__46044) : pred__46038.call(null,G__46043,G__46044));
})()))
{return (new datascript.query.Relation(self__.attrs,G__46034,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__46034),null));
}
}
});
datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__46034){var self__ = this;
var this__20649__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,G__46034,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
datascript.query.Relation.cljs$lang$type = true;
datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});
datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"datascript.query/Relation");
});
datascript.query.__GT_Relation = (function __GT_Relation(attrs,tuples){return (new datascript.query.Relation(attrs,tuples));
});
datascript.query.map__GT_Relation = (function map__GT_Relation(G__46036){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__46036),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__46036),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46036,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.array_seq([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0))));
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
concatv.cljs$lang$applyTo = (function (arglist__46046){
var xs = cljs.core.seq(arglist__46046);
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
{return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__46058){var vec__46059 = p__46058;var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46059,(0),null);var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46059,(1),null);return looks_like_QMARK_(pattern_el,form_el);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else
{var G__46060 = form;return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(G__46060) : pattern.call(null,G__46060));

}
}
}
}
});
datascript.query.join_tuples = (function join_tuples(t1,idxs1,t2,idxs2){var l1 = idxs1.length;var l2 = idxs2.length;var res = (new Array((l1 + l2)));var n__21075__auto___46061 = l1;var i_46062 = (0);while(true){
if((i_46062 < n__21075__auto___46061))
{(res[i_46062] = (t1[(idxs1[i_46062])]));
{
var G__46063 = (i_46062 + (1));
i_46062 = G__46063;
continue;
}
} else
{}
break;
}
var n__21075__auto___46064 = l2;var i_46065 = (0);while(true){
if((i_46065 < n__21075__auto___46064))
{(res[(l1 + i_46065)] = (t2[(idxs2[i_46065])]));
{
var G__46066 = (i_46065 + (1));
i_46065 = G__46066;
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
var prod_rel__2 = (function (rel1,rel2){var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),(function (){var iter__20913__auto__ = ((function (attrs1,attrs2,idxs1,idxs2){
return (function iter__46078(s__46079){return (new cljs.core.LazySeq(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (){var s__46079__$1 = s__46079;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46079__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__20909__auto__ = ((function (s__46079__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function iter__46080(s__46081){return (new cljs.core.LazySeq(null,((function (s__46079__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function (){var s__46081__$1 = s__46081;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46081__$1);if(temp__4126__auto____$1)
{var s__46081__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46081__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__46081__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__46083 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__46082 = (0);while(true){
if((i__46082 < size__20912__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__46082);cljs.core.chunk_append(b__46083,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
{
var G__46089 = (i__46082 + (1));
i__46082 = G__46089;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46083),iter__46080(cljs.core.chunk_rest(s__46081__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46083),null);
}
} else
{var t2 = cljs.core.first(s__46081__$2);return cljs.core.cons(datascript.query.join_tuples(t1,idxs1,t2,idxs2),iter__46080(cljs.core.rest(s__46081__$2)));
}
} else
{return null;
}
break;
}
});})(s__46079__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(s__46079__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
;var fs__20910__auto__ = cljs.core.seq(iterys__20909__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2)));if(fs__20910__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20910__auto__,iter__46078(cljs.core.rest(s__46079__$1)));
} else
{{
var G__46090 = cljs.core.rest(s__46079__$1);
s__46079__$1 = G__46090;
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
;return iter__20913__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1));
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
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__46091){
var xs = cljs.core.seq(arglist__46091);
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
_get_some.cljs$lang$applyTo = (function (arglist__46092){
var db = cljs.core.first(arglist__46092);
arglist__46092 = cljs.core.next(arglist__46092);
var e = cljs.core.first(arglist__46092);
var as = cljs.core.rest(arglist__46092);
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
var G__46094 = null;
var G__46094__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,coll);
});
var G__46094__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
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
G__46094 = function(n,coll){
switch(arguments.length){
case 1:
return G__46094__1.call(this,n);
case 2:
return G__46094__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46094.cljs$core$IFn$_invoke$arity$1 = G__46094__1;
G__46094.cljs$core$IFn$_invoke$arity$2 = G__46094__2;
return G__46094;
})()
,new cljs.core.Symbol(null,"max","max",1701898075,null),(function() {
var G__46095 = null;
var G__46095__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,coll);
});
var G__46095__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
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
G__46095 = function(n,coll){
switch(arguments.length){
case 1:
return G__46095__1.call(this,n);
case 2:
return G__46095__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46095.cljs$core$IFn$_invoke$arity$1 = G__46095__1;
G__46095.cljs$core$IFn$_invoke$arity$2 = G__46095__2;
return G__46095;
})()
,new cljs.core.Symbol(null,"sum","sum",1777518341,null),(function (p1__46093_SHARP_){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),p1__46093_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),(function() {
var G__46096 = null;
var G__46096__1 = (function (coll){return cljs.core.rand_nth(coll);
});
var G__46096__2 = (function (n,coll){return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){return cljs.core.rand_nth(coll);
})));
});
G__46096 = function(n,coll){
switch(arguments.length){
case 1:
return G__46096__1.call(this,n);
case 2:
return G__46096__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46096.cljs$core$IFn$_invoke$arity$1 = G__46096__1;
G__46096.cljs$core$IFn$_invoke$arity$2 = G__46096__2;
return G__46096;
})()
,new cljs.core.Symbol(null,"sample","sample",1719555128,null),(function (n,coll){return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
}),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.count], null);
datascript.query.in__GT_rel = (function in__GT_rel(form,value){var pred__46118 = datascript.query.looks_like_QMARK_;var expr__46119 = form;if(cljs.core.truth_((function (){var G__46121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null);var G__46122 = expr__46119;return (pred__46118.cljs$core$IFn$_invoke$arity$2 ? pred__46118.cljs$core$IFn$_invoke$arity$2(G__46121,G__46122) : pred__46118.call(null,G__46121,G__46122));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__46118,expr__46119){
return (function (p1__46097_SHARP_){return in__GT_rel(cljs.core.first(form),p1__46097_SHARP_);
});})(pred__46118,expr__46119))
,value));
} else
{if(cljs.core.truth_((function (){var G__46123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__46124 = expr__46119;return (pred__46118.cljs$core$IFn$_invoke$arity$2 ? pred__46118.cljs$core$IFn$_invoke$arity$2(G__46123,G__46124) : pred__46118.call(null,G__46123,G__46124));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__46118,expr__46119){
return (function (p1__46098_SHARP_){return in__GT_rel(cljs.core.first(form),p1__46098_SHARP_);
});})(pred__46118,expr__46119))
,value));
} else
{if(cljs.core.truth_((function (){var G__46125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__46126 = expr__46119;return (pred__46118.cljs$core$IFn$_invoke$arity$2 ? pred__46118.cljs$core$IFn$_invoke$arity$2(G__46125,G__46126) : pred__46118.call(null,G__46125,G__46126));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (pred__46118,expr__46119){
return (function (p1__46099_SHARP_,p2__46100_SHARP_){return in__GT_rel(p1__46099_SHARP_,p2__46100_SHARP_);
});})(pred__46118,expr__46119))
,form,value));
} else
{if(cljs.core.truth_((function (){var G__46127 = new cljs.core.Symbol(null,"_","_",-1201019570,null);var G__46128 = expr__46119;return (pred__46118.cljs$core$IFn$_invoke$arity$2 ? pred__46118.cljs$core$IFn$_invoke$arity$2(G__46127,G__46128) : pred__46118.call(null,G__46127,G__46128));
})()))
{return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([form,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[value]], null)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__46119))));
}
}
}
}
});
datascript.query.parse_rules = (function parse_rules(rules){var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.parse_in = (function parse_in(context,p__46129){var vec__46131 = p__46129;var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46131,(0),null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46131,(1),null);if(datascript.query.source_QMARK_(in$))
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
return (function (p1__46132_SHARP_){return (tuple[p1__46132_SHARP_]);
});})(idxs__$1))
));
});
;})(idxs__$1))
}
});
datascript.query.hash_attrs = (function hash_attrs(idxs,tuples){var key_fn = datascript.query.tuple_key_fn(idxs);var tuples__$1 = tuples;var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
var temp__4124__auto__ = cljs.core.first(tuples__$1);if(cljs.core.truth_(temp__4124__auto__))
{var tuple = temp__4124__auto__;var key = (function (){var G__46134 = tuple;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__46134) : key_fn.call(null,G__46134));
})();{
var G__46135 = cljs.core.next(tuples__$1);
var G__46136 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__46135;
hash_table = G__46136;
continue;
}
} else
{return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function hash_join(rel1,rel2){var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));var common_idxs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,common_attrs);var common_idxs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,common_attrs);var keep_attrs1 = cljs.core.keys(attrs1);var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));var hash = datascript.query.hash_attrs(common_idxs1,tuples1);var key_fn = datascript.query.tuple_key_fn(common_idxs2);var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc,tuple2){var key = (function (){var G__46138 = tuple2;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__46138) : key_fn.call(null,G__46138));
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
datascript.query.lookup_pattern_db = (function lookup_pattern_db(db,pattern){var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46139_SHARP_){if((p1__46139_SHARP_ instanceof cljs.core.Symbol))
{return null;
} else
{return p1__46139_SHARP_;
}
}),pattern);var datoms = datascript.core._search(db,search_pattern);var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__46142){var vec__46143 = p__46142;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46143,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46143,(1),null);return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));return (new datascript.query.Relation(attr__GT_prop,datoms));
});
datascript.query.matches_pattern_QMARK_ = (function matches_pattern_QMARK_(pattern,tuple){var tuple__$1 = tuple;var pattern__$1 = pattern;while(true){
if(cljs.core.truth_((function (){var and__19670__auto__ = tuple__$1;if(cljs.core.truth_(and__19670__auto__))
{return pattern__$1;
} else
{return and__19670__auto__;
}
})()))
{var t = cljs.core.first(tuple__$1);var p = cljs.core.first(pattern__$1);if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))
{{
var G__46144 = cljs.core.next(tuple__$1);
var G__46145 = cljs.core.next(pattern__$1);
tuple__$1 = G__46144;
pattern__$1 = G__46145;
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
datascript.query.lookup_pattern_coll = (function lookup_pattern_coll(coll,pattern){var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46146_SHARP_){return datascript.query.matches_pattern_QMARK_(pattern,p1__46146_SHARP_);
}),coll);var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__46149){var vec__46150 = p__46149;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46150,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46150,(1),null);return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data)));
});
datascript.query.lookup_pattern = (function lookup_pattern(context,clause){var vec__46152 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46152,(0),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46152,(1),null);var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);if((source instanceof datascript.core.DB))
{return datascript.query.lookup_pattern_db(source,pattern);
} else
{return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function collapse_rels(rels,new_rel){var rels__$1 = rels;var new_rel__$1 = new_rel;var acc = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(rels__$1);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel)))))
{{
var G__46153 = cljs.core.next(rels__$1);
var G__46154 = datascript.query.hash_join(rel,new_rel__$1);
var G__46155 = acc;
rels__$1 = G__46153;
new_rel__$1 = G__46154;
acc = G__46155;
continue;
}
} else
{{
var G__46156 = cljs.core.next(rels__$1);
var G__46157 = new_rel__$1;
var G__46158 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__46156;
new_rel__$1 = G__46157;
acc = G__46158;
continue;
}
}
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function context_resolve_val(context,sym){var temp__4126__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46159_SHARP_){return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__46159_SHARP_),sym);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));if(cljs.core.truth_(temp__4126__auto__))
{var rel = temp__4126__auto__;return (cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else
{return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function rel_contains_attrs_QMARK_(rel,attrs){return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function rel_prod_by_attrs(context,attrs){var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46160_SHARP_){return datascript.query.rel_contains_attrs_QMARK_(p1__46160_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__46161_SHARP_){return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__46161_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function _call_fn(context,rel,f,args){return (function (tuple){var resolved_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46162_SHARP_){if((p1__46162_SHARP_ instanceof cljs.core.Symbol))
{var or__19687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),p1__46162_SHARP_);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return (tuple[cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__46162_SHARP_)]);
}
} else
{return p1__46162_SHARP_;
}
}),args);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,resolved_args);
});
});
datascript.query.filter_by_pred = (function filter_by_pred(context,clause){var vec__46167 = clause;var vec__46168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46167,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(0),null);var args = cljs.core.nthnext(vec__46168,(1));var pred = (function (){var or__19687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__46169 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46169,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46169,(1),null);var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);var new_rel = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (vec__46167,vec__46168,f,args,pred,vec__46169,context__$1,production,tuple_pred){
return (function (p1__46163_SHARP_){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__46163_SHARP_);
});})(vec__46167,vec__46168,f,args,pred,vec__46169,context__$1,production,tuple_pred))
);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function bind_by_fn(context,clause){var vec__46175 = clause;var vec__46176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46175,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46176,(0),null);var args = cljs.core.nthnext(vec__46176,(1));var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46175,(1),null);var fun = (function (){var or__19687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__46177 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46177,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46177,(1),null);var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);var new_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__46175,vec__46176,f,args,out,fun,vec__46177,context__$1,production,tuple_fn){
return (function (p1__46170_SHARP_){var val = (function (){var G__46178 = p1__46170_SHARP_;return (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(G__46178) : tuple_fn.call(null,G__46178));
})();var rel = datascript.query.in__GT_rel(out,val);return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46170_SHARP_], null))),rel);
});})(vec__46175,vec__46176,f,args,out,fun,vec__46177,context__$1,production,tuple_fn))
,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production)));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function rule_QMARK_(context,clause){return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = (function (){var G__46179 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46179) : cljs.core.atom.call(null,G__46179));
})();
datascript.query.expand_rule = (function expand_rule(clause,context,used_args){var vec__46204 = clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46204,(0),null);var call_args = cljs.core.nthnext(vec__46204,(1));var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);var iter__20913__auto__ = ((function (vec__46204,rule,call_args,seqid,branches){
return (function iter__46205(s__46206){return (new cljs.core.LazySeq(null,((function (vec__46204,rule,call_args,seqid,branches){
return (function (){var s__46206__$1 = s__46206;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46206__$1);if(temp__4126__auto__)
{var s__46206__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46206__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__46206__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__46208 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__46207 = (0);while(true){
if((i__46207 < size__20912__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__46207);var vec__46219 = branch;var vec__46220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46219,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46220,(0),null);var rule_args = cljs.core.nthnext(vec__46220,(1));var clauses = cljs.core.nthnext(vec__46219,(1));var replacements = cljs.core.zipmap(rule_args,call_args);cljs.core.chunk_append(b__46208,clojure.walk.postwalk(((function (i__46207,vec__46219,vec__46220,_,rule_args,clauses,replacements,branch,c__20911__auto__,size__20912__auto__,b__46208,s__46206__$2,temp__4126__auto__,vec__46204,rule,call_args,seqid,branches){
return (function (p1__46180_SHARP_){if(datascript.query.free_var_QMARK_(p1__46180_SHARP_))
{var or__19687__auto__ = (function (){var G__46222 = p1__46180_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__46222) : replacements.call(null,G__46222));
})();if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__46180_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__46180_SHARP_;
}
});})(i__46207,vec__46219,vec__46220,_,rule_args,clauses,replacements,branch,c__20911__auto__,size__20912__auto__,b__46208,s__46206__$2,temp__4126__auto__,vec__46204,rule,call_args,seqid,branches))
,clauses));
{
var G__46227 = (i__46207 + (1));
i__46207 = G__46227;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46208),iter__46205(cljs.core.chunk_rest(s__46206__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46208),null);
}
} else
{var branch = cljs.core.first(s__46206__$2);var vec__46223 = branch;var vec__46224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46223,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46224,(0),null);var rule_args = cljs.core.nthnext(vec__46224,(1));var clauses = cljs.core.nthnext(vec__46223,(1));var replacements = cljs.core.zipmap(rule_args,call_args);return cljs.core.cons(clojure.walk.postwalk(((function (vec__46223,vec__46224,_,rule_args,clauses,replacements,branch,s__46206__$2,temp__4126__auto__,vec__46204,rule,call_args,seqid,branches){
return (function (p1__46180_SHARP_){if(datascript.query.free_var_QMARK_(p1__46180_SHARP_))
{var or__19687__auto__ = (function (){var G__46226 = p1__46180_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__46226) : replacements.call(null,G__46226));
})();if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__46180_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__46180_SHARP_;
}
});})(vec__46223,vec__46224,_,rule_args,clauses,replacements,branch,s__46206__$2,temp__4126__auto__,vec__46204,rule,call_args,seqid,branches))
,clauses),iter__46205(cljs.core.rest(s__46206__$2)));
}
} else
{return null;
}
break;
}
});})(vec__46204,rule,call_args,seqid,branches))
,null,null));
});})(vec__46204,rule,call_args,seqid,branches))
;return iter__20913__auto__(branches);
});
datascript.query.remove_pairs = (function remove_pairs(xs,ys){var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46230){var vec__46231 = p__46230;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46231,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46231,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function rule_gen_guards(rule_clause,used_args){var vec__46243 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46243,(0),null);var call_args = cljs.core.nthnext(vec__46243,(1));var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);var iter__20913__auto__ = ((function (vec__46243,rule,call_args,prev_call_args){
return (function iter__46244(s__46245){return (new cljs.core.LazySeq(null,((function (vec__46243,rule,call_args,prev_call_args){
return (function (){var s__46245__$1 = s__46245;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46245__$1);if(temp__4126__auto__)
{var s__46245__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46245__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__46245__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__46247 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__46246 = (0);while(true){
if((i__46246 < size__20912__auto__))
{var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__46246);var vec__46252 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(1),null);cljs.core.chunk_append(b__46247,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null));
{
var G__46254 = (i__46246 + (1));
i__46246 = G__46254;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46247),iter__46244(cljs.core.chunk_rest(s__46245__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46247),null);
}
} else
{var prev_args = cljs.core.first(s__46245__$2);var vec__46253 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46253,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46253,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null),iter__46244(cljs.core.rest(s__46245__$2)));
}
} else
{return null;
}
break;
}
});})(vec__46243,rule,call_args,prev_call_args))
,null,null));
});})(vec__46243,rule,call_args,prev_call_args))
;return iter__20913__auto__(prev_call_args);
});
datascript.query.walk_collect = (function walk_collect(form,pred){var res = (function (){var G__46259 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46259) : cljs.core.atom.call(null,G__46259));
})();clojure.walk.postwalk(((function (res){
return (function (p1__46255_SHARP_){if(cljs.core.truth_((function (){var G__46260 = p1__46255_SHARP_;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__46260) : pred.call(null,G__46260));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__46255_SHARP_);
} else
{}
return p1__46255_SHARP_;
});})(res))
,form);
var G__46261 = res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46261) : cljs.core.deref.call(null,G__46261));
});
datascript.query.split_guards = (function split_guards(clauses,guards){var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));var pred = ((function (bound_vars){
return (function (p__46265){var vec__46266 = p__46265;var vec__46267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46266,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46267,(0),null);var vars = cljs.core.nthnext(vec__46267,(1));return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function solve_rule(context,clause){var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__46268_SHARP_){return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__46268_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;var stack = cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY));while(true){
var temp__4124__auto__ = cljs.core.first(stack);if(cljs.core.truth_(temp__4124__auto__))
{var frame = temp__4124__auto__;var vec__46283 = cljs.core.split_with(((function (stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__46269_SHARP_){return !(datascript.query.rule_QMARK_(context,p1__46269_SHARP_));
});})(stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46283,(0),null);var vec__46284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46283,(1),null);var rule_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(0),null);var next_clauses = cljs.core.nthnext(vec__46284,(1));if((rule_clause == null))
{var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);var tuples = (function (){var G__46285 = context__$1;var G__46286 = final_attrs;return (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(G__46285,G__46286) : datascript.query._collect.call(null,G__46285,G__46286));
})();var new_rel = (new datascript.query.Relation(final_attrs_map,tuples));{
var G__46295 = cljs.core.next(stack);
var G__46296 = datascript.query.sum_rel(rel,new_rel);
stack = G__46295;
rel = G__46296;
continue;
}
} else
{var vec__46287 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46287,(0),null);var call_args = cljs.core.nthnext(vec__46287,(1));var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));var vec__46288 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46288,(0),null);var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46288,(1),null);if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__46287,rule,call_args,guards,vec__46288,active_gs,pending_gs,vec__46283,clauses,vec__46284,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__46270_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__46270_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__46287,rule,call_args,guards,vec__46288,active_gs,pending_gs,vec__46283,clauses,vec__46284,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs)))
{{
var G__46297 = cljs.core.next(stack);
var G__46298 = rel;
stack = G__46297;
rel = G__46298;
continue;
}
} else
{var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);if(cljs.core.truth_(empty_rels_QMARK_(prefix_context)))
{{
var G__46299 = cljs.core.next(stack);
var G__46300 = rel;
stack = G__46299;
rel = G__46300;
continue;
}
} else
{var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));var branches = datascript.query.expand_rule(rule_clause,context,used_args);{
var G__46301 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__20913__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__46287,rule,call_args,guards,vec__46288,active_gs,pending_gs,vec__46283,clauses,vec__46284,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__46289(s__46290){return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__46287,rule,call_args,guards,vec__46288,active_gs,pending_gs,vec__46283,clauses,vec__46284,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){var s__46290__$1 = s__46290;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46290__$1);if(temp__4126__auto__)
{var s__46290__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46290__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__46290__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__46292 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__46291 = (0);while(true){
if((i__46291 < size__20912__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__46291);cljs.core.chunk_append(b__46292,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));
{
var G__46303 = (i__46291 + (1));
i__46291 = G__46303;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46292),iter__46289(cljs.core.chunk_rest(s__46290__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46292),null);
}
} else
{var branch = cljs.core.first(s__46290__$2);return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),iter__46289(cljs.core.rest(s__46290__$2)));
}
} else
{return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__46287,rule,call_args,guards,vec__46288,active_gs,pending_gs,vec__46283,clauses,vec__46284,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__46287,rule,call_args,guards,vec__46288,active_gs,pending_gs,vec__46283,clauses,vec__46284,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;return iter__20913__auto__(branches);
})(),cljs.core.next(stack));
var G__46302 = rel;
stack = G__46301;
rel = G__46302;
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
datascript.query._resolve_clause = (function _resolve_clause(context,clause){var pred__46313 = datascript.query.looks_like_QMARK_;var expr__46314 = clause;if(cljs.core.truth_((function (){var G__46316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__46317 = expr__46314;return (pred__46313.cljs$core$IFn$_invoke$arity$2 ? pred__46313.cljs$core$IFn$_invoke$arity$2(G__46316,G__46317) : pred__46313.call(null,G__46316,G__46317));
})()))
{return datascript.query.filter_by_pred(context,clause);
} else
{if(cljs.core.truth_((function (){var G__46318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);var G__46319 = expr__46314;return (pred__46313.cljs$core$IFn$_invoke$arity$2 ? pred__46313.cljs$core$IFn$_invoke$arity$2(G__46318,G__46319) : pred__46313.call(null,G__46318,G__46319));
})()))
{return datascript.query.bind_by_fn(context,clause);
} else
{if(cljs.core.truth_((function (){var G__46320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__46321 = expr__46314;return (pred__46313.cljs$core$IFn$_invoke$arity$2 ? pred__46313.cljs$core$IFn$_invoke$arity$2(G__46320,G__46321) : pred__46313.call(null,G__46320,G__46321));
})()))
{var relation = datascript.query.lookup_pattern(context,clause);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__46314))));
}
}
}
});
datascript.query.resolve_clause = (function resolve_clause(context,clause){if(datascript.query.rule_QMARK_(context,clause))
{var vec__46323 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46323,(0),null);var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46323,(1),null);var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
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
var G__46350 = acc;
var G__46351 = cljs.core.next(rels);
var G__46352 = symbols;
acc = G__46350;
rels = G__46351;
symbols = G__46352;
continue;
}
} else
{var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__4124__auto__){
return (function (p1__46324_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__46324_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4124__auto__))
,symbols));var len = cljs.core.count(symbols);{
var G__46353 = (function (){var iter__20913__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__46339(s__46340){return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__46340__$1 = s__46340;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46340__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__20909__auto__ = ((function (s__46340__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__46341(s__46342){return (new cljs.core.LazySeq(null,((function (s__46340__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__46342__$1 = s__46342;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46342__$1);if(temp__4126__auto____$1)
{var s__46342__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46342__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__46342__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__46344 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__46343 = (0);while(true){
if((i__46343 < size__20912__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__46343);cljs.core.chunk_append(b__46344,(function (){var res = cljs.core.aclone(t1);var n__21075__auto___46356 = len;var i_46357 = (0);while(true){
if((i_46357 < n__21075__auto___46356))
{var temp__4126__auto___46358__$2 = (copy_map[i_46357]);if(cljs.core.truth_(temp__4126__auto___46358__$2))
{var idx_46359 = temp__4126__auto___46358__$2;(res[i_46357] = (t2[idx_46359]));
} else
{}
{
var G__46360 = (i_46357 + (1));
i_46357 = G__46360;
continue;
}
} else
{}
break;
}
return res;
})());
{
var G__46361 = (i__46343 + (1));
i__46343 = G__46361;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46344),iter__46341(cljs.core.chunk_rest(s__46342__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46344),null);
}
} else
{var t2 = cljs.core.first(s__46342__$2);return cljs.core.cons((function (){var res = cljs.core.aclone(t1);var n__21075__auto___46362 = len;var i_46363 = (0);while(true){
if((i_46363 < n__21075__auto___46362))
{var temp__4126__auto___46364__$2 = (copy_map[i_46363]);if(cljs.core.truth_(temp__4126__auto___46364__$2))
{var idx_46365 = temp__4126__auto___46364__$2;(res[i_46363] = (t2[idx_46365]));
} else
{}
{
var G__46366 = (i_46363 + (1));
i_46363 = G__46366;
continue;
}
} else
{}
break;
}
return res;
})(),iter__46341(cljs.core.rest(s__46342__$2)));
}
} else
{return null;
}
break;
}
});})(s__46340__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(s__46340__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;var fs__20910__auto__ = cljs.core.seq(iterys__20909__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));if(fs__20910__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__20910__auto__,iter__46339(cljs.core.rest(s__46340__$1)));
} else
{{
var G__46367 = cljs.core.rest(s__46340__$1);
s__46340__$1 = G__46367;
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
;return iter__20913__auto__(acc);
})();
var G__46354 = cljs.core.next(rels);
var G__46355 = symbols;
acc = G__46353;
rels = G__46354;
symbols = G__46355;
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
datascript.query.find_attrs = (function find_attrs(q){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46368_SHARP_){if(cljs.core.sequential_QMARK_(p1__46368_SHARP_))
{return cljs.core.last(p1__46368_SHARP_);
} else
{return p1__46368_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
});
datascript.query._aggregate = (function _aggregate(q,context,tuples){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (form,fixed_value,i){if(cljs.core.sequential_QMARK_(form))
{var vec__46374 = form;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46374,(0),null);var args = cljs.core.nthnext(vec__46374,(1));var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__46374,f,args){
return (function (p1__46369_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__46369_SHARP_,i);
});})(vec__46374,f,args))
,tuples);var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__46374,f,args,vals){
return (function (p1__46370_SHARP_){if((p1__46370_SHARP_ instanceof cljs.core.Symbol))
{return datascript.query.context_resolve_val(context,p1__46370_SHARP_);
} else
{return p1__46370_SHARP_;
}
});})(vec__46374,f,args,vals))
,cljs.core.butlast(args));var f__$1 = (function (){var or__19687__auto__ = (function (){var G__46376 = f;return (datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1 ? datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1(G__46376) : datascript.query.built_in_aggregates.call(null,G__46376));
})();if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else
{return fixed_value;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.aggregate = (function aggregate(q,context,resultset){var group_idxs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__46377_SHARP_,p2__46378_SHARP_){if(cljs.core.sequential_QMARK_(p1__46377_SHARP_))
{return null;
} else
{return p2__46378_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));var group_fn = ((function (group_idxs){
return (function (tuple){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__46379_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__46379_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;var grouped = cljs.core.group_by(group_fn,resultset);var iter__20913__auto__ = ((function (group_idxs,group_fn,grouped){
return (function iter__46390(s__46391){return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){var s__46391__$1 = s__46391;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46391__$1);if(temp__4126__auto__)
{var s__46391__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46391__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__46391__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__46393 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__46392 = (0);while(true){
if((i__46392 < size__20912__auto__))
{var vec__46398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__46392);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46398,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46398,(1),null);cljs.core.chunk_append(b__46393,datascript.query._aggregate(q,context,tuples));
{
var G__46400 = (i__46392 + (1));
i__46392 = G__46400;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46393),iter__46390(cljs.core.chunk_rest(s__46391__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46393),null);
}
} else
{var vec__46399 = cljs.core.first(s__46391__$2);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46399,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46399,(1),null);return cljs.core.cons(datascript.query._aggregate(q,context,tuples),iter__46390(cljs.core.rest(s__46391__$2)));
}
} else
{return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;return iter__20913__auto__(grouped);
});
datascript.query.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first(qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__46401 = parsed;
var G__46402 = q;
var G__46403 = cljs.core.next(qs);
parsed = G__46401;
key = G__46402;
qs = G__46403;
continue;
}
} else
{{
var G__46404 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__46405 = key;
var G__46406 = cljs.core.next(qs);
parsed = G__46404;
key = G__46405;
qs = G__46406;
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
var q__delegate = function (q__$1,inputs){var q__$2 = ((cljs.core.sequential_QMARK_(q__$1))?datascript.query.parse_query(q__$1):q__$1);var find = datascript.query.find_attrs(q__$2);var ins = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(q__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$2);var context = datascript.query.parse_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),ins,inputs);var resultset = datascript.query.collect(datascript.query._q(context,wheres),find);var G__46409 = resultset;var G__46409__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$2))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__46409,q__$2,find,ins,wheres,context,resultset){
return (function (p1__46407_SHARP_){return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__46407_SHARP_,(0),cljs.core.count(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2)));
});})(G__46409,q__$2,find,ins,wheres,context,resultset))
,G__46409):G__46409);var G__46409__$2 = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2))))?datascript.query.aggregate(q__$2,context,G__46409__$1):G__46409__$1);return G__46409__$2;
};
var q = function (q__$1,var_args){
var inputs = null;if (arguments.length > 1) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,q__$1,inputs);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__46410){
var q__$1 = cljs.core.first(arglist__46410);
var inputs = cljs.core.rest(arglist__46410);
return q__delegate(q__$1,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
//# sourceMappingURL=query.js.map