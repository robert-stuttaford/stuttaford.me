goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.string.format');
/**
* Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
* schema need not depend on plumbing.
* @param {...*} var_args
*/
schema.utils.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0))))));
}
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19687__auto__ = m;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__20913__auto__ = (function iter__43966(s__43967){return (new cljs.core.LazySeq(null,(function (){var s__43967__$1 = s__43967;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43967__$1);if(temp__4126__auto__)
{var s__43967__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43967__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__43967__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__43969 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__43968 = (0);while(true){
if((i__43968 < size__20912__auto__))
{var vec__43974 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__43968);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43974,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43974,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__43969,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__43976 = (i__43968 + (1));
i__43968 = G__43976;
continue;
}
} else
{{
var G__43977 = (i__43968 + (1));
i__43968 = G__43977;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43969),iter__43966(cljs.core.chunk_rest(s__43967__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43969),null);
}
} else
{var vec__43975 = cljs.core.first(s__43967__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43975,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43975,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__43966(cljs.core.rest(s__43967__$2)));
} else
{{
var G__43978 = cljs.core.rest(s__43967__$2);
s__43967__$1 = G__43978;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__43979){
var m = cljs.core.first(arglist__43979);
var kvs = cljs.core.rest(arglist__43979);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
schema.utils.type_of = (function type_of(x){return typeof x;
});
/**
* What class can we associate the fn schema with? In Clojure use the class of the fn; in
* cljs just use the fn itself.
*/
schema.utils.fn_schema_bearer = (function fn_schema_bearer(f){return f;
});
/**
* @param {...*} var_args
*/
schema.utils.format_STAR_ = (function() { 
var format_STAR___delegate = function (fmt,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
};
var format_STAR_ = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format_STAR___delegate.call(this,fmt,args);};
format_STAR_.cljs$lang$maxFixedArity = 1;
format_STAR_.cljs$lang$applyTo = (function (arglist__43980){
var fmt = cljs.core.first(arglist__43980);
var args = cljs.core.rest(arglist__43980);
return format_STAR___delegate(fmt,args);
});
format_STAR_.cljs$core$IFn$_invoke$arity$variadic = format_STAR___delegate;
return format_STAR_;
})()
;
/**
* Provide a descriptive short name for a value.
*/
schema.utils.value_name = (function value_name(value){var t = schema.utils.type_of(value);if((cljs.core.count((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))) < (20)))
{return value;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(("a-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)));
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.ValidationError.cljs$lang$type = true;
schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";
schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"schema.utils/ValidationError");
});
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer((function (){var G__43981 = this$__$1;return (schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(G__43981) : schema.utils.validation_error_explain.call(null,G__43981));
})(),writer,opts);
});
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.validation_error_explain = (function validation_error_explain(err){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__43983 = err.expectation_delay;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43983) : cljs.core.deref.call(null,G__43983));
})()),(function (){var or__19687__auto__ = err.fail_explanation;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.NamedError.cljs$lang$type = true;
schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";
schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"schema.utils/NamedError");
});
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer((function (){var G__43984 = this$__$1;return (schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(G__43984) : schema.utils.named_error_explain.call(null,G__43984));
})(),writer,opts);
});
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){return (new schema.utils.NamedError(name,error));
});
schema.utils.named_error_explain = (function named_error_explain(err){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k43986,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__43988 = (((k43986 instanceof cljs.core.Keyword))?k43986.fqn:null);switch (G__43988) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43986,else__20653__auto__);

}
});
schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__43985){var self__ = this;
var this__20657__auto____$1 = this;var pred__43989 = cljs.core.keyword_identical_QMARK_;var expr__43990 = k__20658__auto__;if(cljs.core.truth_((function (){var G__43992 = new cljs.core.Keyword(null,"error","error",-978969032);var G__43993 = expr__43990;return (pred__43989.cljs$core$IFn$_invoke$arity$2 ? pred__43989.cljs$core$IFn$_invoke$arity$2(G__43992,G__43993) : pred__43989.call(null,G__43992,G__43993));
})()))
{return (new schema.utils.ErrorContainer(G__43985,self__.__meta,self__.__extmap,null));
} else
{return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__43985),null));
}
});
schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__43985){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.utils.ErrorContainer(self__.error,G__43985,self__.__extmap,self__.__hash));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.utils.ErrorContainer.cljs$lang$type = true;
schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});
schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.utils/ErrorContainer");
});
schema.utils.__GT_ErrorContainer = (function __GT_ErrorContainer(error){return (new schema.utils.ErrorContainer(error));
});
schema.utils.map__GT_ErrorContainer = (function map__GT_ErrorContainer(G__43987){return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__43987),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43987,new cljs.core.Keyword(null,"error","error",-978969032))));
});
/**
* Distinguish a value (must be non-nil) as an error.
*/
schema.utils.error = (function error(x){if(cljs.core.truth_(x))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"x","x",-555367584,null)], 0))))));
}
return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function error_QMARK_(x){return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function error_val(x){if(schema.utils.error_QMARK_(x))
{return x.error;
} else
{return null;
}
});
/**
* If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
*/
schema.utils.wrap_error_name = (function wrap_error_name(name,maybe_error){var temp__4124__auto__ = schema.utils.error_val(maybe_error);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return schema.utils.error(schema.utils.__GT_NamedError(name,e));
} else
{return maybe_error;
}
});
/**
* Build up a result by conjing values, producing an error if at least one
* sub-value returns an error.
*/
schema.utils.result_builder = (function result_builder(lift_to_error){return (function conjer(m,e){var temp__4124__auto__ = schema.utils.error_val(e);if(cljs.core.truth_(temp__4124__auto__))
{var err = temp__4124__auto__;return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__19687__auto__ = schema.utils.error_val(m);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{var G__43998 = m;return (lift_to_error.cljs$core$IFn$_invoke$arity$1 ? lift_to_error.cljs$core$IFn$_invoke$arity$1(G__43998) : lift_to_error.call(null,G__43998));
}
})(),err));
} else
{var temp__4124__auto____$1 = schema.utils.error_val(m);if(cljs.core.truth_(temp__4124__auto____$1))
{var merr = temp__4124__auto____$1;return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(merr,null));
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function declare_class_schema_BANG_(klass,schema__$1){return (klass["schema$utils$schema"] = schema__$1);
});
schema.utils.class_schema = (function class_schema(klass){return (klass["schema$utils$schema"]);
});
schema.utils.PSimpleCell = (function (){var obj44000 = {};return obj44000;
})();
schema.utils.get_cell = (function get_cell(this$){if((function (){var and__19670__auto__ = this$;if(and__19670__auto__)
{return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else
{return and__19670__auto__;
}
})())
{return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else
{var x__20728__auto__ = (((this$ == null))?null:this$);return (function (){var or__19687__auto__ = (schema.utils.get_cell[(function (){var G__44004 = x__20728__auto__;return goog.typeOf(G__44004);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (schema.utils.get_cell["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});
schema.utils.set_cell = (function set_cell(this$,x){if((function (){var and__19670__auto__ = this$;if(and__19670__auto__)
{return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else
{return and__19670__auto__;
}
})())
{return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else
{var x__20728__auto__ = (((this$ == null))?null:this$);return (function (){var or__19687__auto__ = (schema.utils.set_cell[(function (){var G__44008 = x__20728__auto__;return goog.typeOf(G__44008);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (schema.utils.set_cell["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});

/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.cljs$lang$type = true;
schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";
schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"schema.utils/SimpleVCell");
});
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.q;
});
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return self__.q = x;
});
schema.utils.__GT_SimpleVCell = (function __GT_SimpleVCell(q){return (new schema.utils.SimpleVCell(q));
});
/**
* Turn on run-time function validation for functions compiled when
* *compile-function-validation* was true -- has no effect for functions compiled
* when it is false.
*/
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.get_cell,schema.utils.use_fn_validation);
schema.utils.use_fn_validation.set_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.set_cell,schema.utils.use_fn_validation);
//# sourceMappingURL=utils.js.map