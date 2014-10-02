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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19347__auto__ = m;if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__20763__auto__ = (function iter__35153(s__35154){return (new cljs.core.LazySeq(null,(function (){var s__35154__$1 = s__35154;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35154__$1);if(temp__4126__auto__)
{var s__35154__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35154__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__35154__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__35156 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__35155 = (0);while(true){
if((i__35155 < size__20762__auto__))
{var vec__35161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__35155);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35161,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35161,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__35156,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__35163 = (i__35155 + (1));
i__35155 = G__35163;
continue;
}
} else
{{
var G__35164 = (i__35155 + (1));
i__35155 = G__35164;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35156),iter__35153(cljs.core.chunk_rest(s__35154__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35156),null);
}
} else
{var vec__35162 = cljs.core.first(s__35154__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35162,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35162,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35153(cljs.core.rest(s__35154__$2)));
} else
{{
var G__35165 = cljs.core.rest(s__35154__$2);
s__35154__$1 = G__35165;
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
});return iter__20763__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__35166){
var m = cljs.core.first(arglist__35166);
var kvs = cljs.core.rest(arglist__35166);
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
format_STAR_.cljs$lang$applyTo = (function (arglist__35167){
var fmt = cljs.core.first(arglist__35167);
var args = cljs.core.rest(arglist__35167);
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
schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"schema.utils/ValidationError");
});
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer((function (){var G__35168 = this$__$1;return (schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(G__35168) : schema.utils.validation_error_explain.call(null,G__35168));
})(),writer,opts);
});
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.validation_error_explain = (function validation_error_explain(err){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__35170 = err.expectation_delay;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35170) : cljs.core.deref.call(null,G__35170));
})()),(function (){var or__19347__auto__ = err.fail_explanation;if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
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
schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"schema.utils/NamedError");
});
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer((function (){var G__35171 = this$__$1;return (schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(G__35171) : schema.utils.named_error_explain.call(null,G__35171));
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
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20516__auto__,k__20517__auto__){var self__ = this;
var this__20516__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20516__auto____$1,k__20517__auto__,null);
});
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20518__auto__,k35173,else__20519__auto__){var self__ = this;
var this__20518__auto____$1 = this;var G__35175 = (((k35173 instanceof cljs.core.Keyword))?k35173.fqn:null);switch (G__35175) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35173,else__20519__auto__);

}
});
schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20530__auto__,writer__20531__auto__,opts__20532__auto__){var self__ = this;
var this__20530__auto____$1 = this;var pr_pair__20533__auto__ = ((function (this__20530__auto____$1){
return (function (keyval__20534__auto__){return cljs.core.pr_sequential_writer(writer__20531__auto__,cljs.core.pr_writer,""," ","",opts__20532__auto__,keyval__20534__auto__);
});})(this__20530__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20531__auto__,pr_pair__20533__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__20532__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20514__auto__){var self__ = this;
var this__20514__auto____$1 = this;return self__.__meta;
});
schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20510__auto__){var self__ = this;
var this__20510__auto____$1 = this;return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20520__auto__){var self__ = this;
var this__20520__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20511__auto__){var self__ = this;
var this__20511__auto____$1 = this;var h__20183__auto__ = self__.__hash;if(!((h__20183__auto__ == null)))
{return h__20183__auto__;
} else
{var h__20183__auto____$1 = cljs.core.hash_imap(this__20511__auto____$1);self__.__hash = h__20183__auto____$1;
return h__20183__auto____$1;
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20512__auto__,other__20513__auto__){var self__ = this;
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
schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20525__auto__,k__20526__auto__){var self__ = this;
var this__20525__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__20526__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20525__auto____$1),self__.__meta),k__20526__auto__);
} else
{return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20526__auto__)),null));
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20523__auto__,k__20524__auto__,G__35172){var self__ = this;
var this__20523__auto____$1 = this;var pred__35176 = cljs.core.keyword_identical_QMARK_;var expr__35177 = k__20524__auto__;if(cljs.core.truth_((function (){var G__35179 = new cljs.core.Keyword(null,"error","error",-978969032);var G__35180 = expr__35177;return (pred__35176.cljs$core$IFn$_invoke$arity$2 ? pred__35176.cljs$core$IFn$_invoke$arity$2(G__35179,G__35180) : pred__35176.call(null,G__35179,G__35180));
})()))
{return (new schema.utils.ErrorContainer(G__35172,self__.__meta,self__.__extmap,null));
} else
{return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20524__auto__,G__35172),null));
}
});
schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20528__auto__){var self__ = this;
var this__20528__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20515__auto__,G__35172){var self__ = this;
var this__20515__auto____$1 = this;return (new schema.utils.ErrorContainer(self__.error,G__35172,self__.__extmap,self__.__hash));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20521__auto__,entry__20522__auto__){var self__ = this;
var this__20521__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20522__auto__))
{return cljs.core._assoc(this__20521__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20521__auto____$1,entry__20522__auto__);
}
});
schema.utils.ErrorContainer.cljs$lang$type = true;
schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__20561__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});
schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__20561__auto__,writer__20562__auto__){return cljs.core._write(writer__20562__auto__,"schema.utils/ErrorContainer");
});
schema.utils.__GT_ErrorContainer = (function __GT_ErrorContainer(error){return (new schema.utils.ErrorContainer(error));
});
schema.utils.map__GT_ErrorContainer = (function map__GT_ErrorContainer(G__35174){return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__35174),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35174,new cljs.core.Keyword(null,"error","error",-978969032))));
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
{var err = temp__4124__auto__;return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__19347__auto__ = schema.utils.error_val(m);if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
} else
{var G__35185 = m;return (lift_to_error.cljs$core$IFn$_invoke$arity$1 ? lift_to_error.cljs$core$IFn$_invoke$arity$1(G__35185) : lift_to_error.call(null,G__35185));
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
schema.utils.PSimpleCell = (function (){var obj35187 = {};return obj35187;
})();
schema.utils.get_cell = (function get_cell(this$){if((function (){var and__19325__auto__ = this$;if(and__19325__auto__)
{return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else
{return and__19325__auto__;
}
})())
{return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else
{var x__20576__auto__ = (((this$ == null))?null:this$);return (function (){var or__19347__auto__ = (schema.utils.get_cell[(function (){var G__35191 = x__20576__auto__;return goog.typeOf(G__35191);
})()]);if(or__19347__auto__)
{return or__19347__auto__;
} else
{var or__19347__auto____$1 = (schema.utils.get_cell["_"]);if(or__19347__auto____$1)
{return or__19347__auto____$1;
} else
{throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});
schema.utils.set_cell = (function set_cell(this$,x){if((function (){var and__19325__auto__ = this$;if(and__19325__auto__)
{return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else
{return and__19325__auto__;
}
})())
{return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else
{var x__20576__auto__ = (((this$ == null))?null:this$);return (function (){var or__19347__auto__ = (schema.utils.set_cell[(function (){var G__35195 = x__20576__auto__;return goog.typeOf(G__35195);
})()]);if(or__19347__auto__)
{return or__19347__auto__;
} else
{var or__19347__auto____$1 = (schema.utils.set_cell["_"]);if(or__19347__auto____$1)
{return or__19347__auto____$1;
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
schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"schema.utils/SimpleVCell");
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