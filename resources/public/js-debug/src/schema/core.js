goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('clojure.string');
goog.require('clojure.string');
schema.core.Schema = (function (){var obj45873 = {};return obj45873;
})();
schema.core.walker = (function walker(this$){if((function (){var and__19277__auto__ = this$;if(and__19277__auto__)
{return this$.schema$core$Schema$walker$arity$1;
} else
{return and__19277__auto__;
}
})())
{return this$.schema$core$Schema$walker$arity$1(this$);
} else
{var x__20556__auto__ = (((this$ == null))?null:this$);return (function (){var or__19289__auto__ = (schema.core.walker[(function (){var G__45877 = x__20556__auto__;return goog.typeOf(G__45877);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (schema.core.walker["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});
schema.core.explain = (function explain(this$){if((function (){var and__19277__auto__ = this$;if(and__19277__auto__)
{return this$.schema$core$Schema$explain$arity$1;
} else
{return and__19277__auto__;
}
})())
{return this$.schema$core$Schema$explain$arity$1(this$);
} else
{var x__20556__auto__ = (((this$ == null))?null:this$);return (function (){var or__19289__auto__ = (schema.core.explain[(function (){var G__45881 = x__20556__auto__;return goog.typeOf(G__45881);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (schema.core.explain["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
})().call(null,this$);
}
});
/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){throw (new Error(("Walking is unsupported outside of start-walker; all composite schemas must eagerly bind subschema-walkers outside the returned walker.")));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){var subschema_walker45883 = schema.core.subschema_walker;try{schema.core.subschema_walker = sub_walker;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker45883;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.core.walker,schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){return schema.core.checker(schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){var temp__4126__auto___45884 = schema.core.check(schema__$1,value);if(cljs.core.truth_(temp__4126__auto___45884))
{var error_45885 = temp__4126__auto___45884;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_45885], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_45885], null));
} else
{}
return value;
});
(schema.core.Schema["function"] = true);
(schema.core.walker["function"] = (function (this$){var class_walker = (function (){var temp__4124__auto__ = schema.utils.class_schema(this$);if(cljs.core.truth_(temp__4124__auto__))
{var more_schema = temp__4124__auto__;return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else
{return cljs.core.identity;
}
})();return ((function (class_walker){
return (function (x){var or__19289__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__19289__auto__ = (this$ === x.constructor);if(or__19289__auto__)
{return or__19289__auto__;
} else
{return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{var G__45886 = x;return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__45886) : class_walker.call(null,G__45886));
}
});
;})(class_walker))
}));
(schema.core.explain["function"] = (function (this$){var temp__4124__auto__ = schema.utils.class_schema(this$);if(cljs.core.truth_(temp__4124__auto__))
{var more_schema = temp__4124__auto__;return schema.core.explain(more_schema);
} else
{return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap){
this._ = _;
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
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45888,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45890 = (((k45888 instanceof cljs.core.Keyword))?k45888.fqn:null);switch (G__45890) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45888,else__20475__auto__);

}
});
schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.AnythingSchema{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45887){var self__ = this;
var this__20479__auto____$1 = this;var pred__45891 = cljs.core.keyword_identical_QMARK_;var expr__45892 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45894 = new cljs.core.Keyword(null,"_","_",1453416199);var G__45895 = expr__45892;return (pred__45891.cljs$core$IFn$_invoke$arity$2 ? pred__45891.cljs$core$IFn$_invoke$arity$2(G__45894,G__45895) : pred__45891.call(null,G__45894,G__45895));
})()))
{return (new schema.core.AnythingSchema(G__45887,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45887),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45887){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,G__45887,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;
schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.identity;
});
schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});
schema.core.AnythingSchema.cljs$lang$type = true;
schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});
schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/AnythingSchema");
});
schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){return (new schema.core.AnythingSchema(_));
});
schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__45889){return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__45889),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45889,new cljs.core.Keyword(null,"_","_",1453416199))));
});
/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.EqSchema = (function (v,__meta,__extmap){
this.v = v;
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
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45898,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45900 = (((k45898 instanceof cljs.core.Keyword))?k45898.fqn:null);switch (G__45900) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45898,else__20475__auto__);

}
});
schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.EqSchema{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45897){var self__ = this;
var this__20479__auto____$1 = this;var pred__45901 = cljs.core.keyword_identical_QMARK_;var expr__45902 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45904 = new cljs.core.Keyword(null,"v","v",21465059);var G__45905 = expr__45902;return (pred__45901.cljs$core$IFn$_invoke$arity$2 ? pred__45901.cljs$core$IFn$_invoke$arity$2(G__45904,G__45905) : pred__45901.call(null,G__45904,G__45905));
})()))
{return (new schema.core.EqSchema(G__45897,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45897),null));
}
});
schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45897){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.EqSchema(self__.v,G__45897,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.EqSchema.prototype.schema$core$Schema$ = true;
schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,x))
{return x;
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});
schema.core.EqSchema.cljs$lang$type = true;
schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});
schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/EqSchema");
});
schema.core.__GT_EqSchema = (function __GT_EqSchema(v){return (new schema.core.EqSchema(v));
});
schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__45899){return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__45899),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45899,new cljs.core.Keyword(null,"v","v",21465059))));
});
/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){return (new schema.core.EqSchema(v));
});

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap){
this.vs = vs;
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
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45908,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45910 = (((k45908 instanceof cljs.core.Keyword))?k45908.fqn:null);switch (G__45910) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45908,else__20475__auto__);

}
});
schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.EnumSchema{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45907){var self__ = this;
var this__20479__auto____$1 = this;var pred__45911 = cljs.core.keyword_identical_QMARK_;var expr__45912 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45914 = new cljs.core.Keyword(null,"vs","vs",-2022097090);var G__45915 = expr__45912;return (pred__45911.cljs$core$IFn$_invoke$arity$2 ? pred__45911.cljs$core$IFn$_invoke$arity$2(G__45914,G__45915) : pred__45911.call(null,G__45914,G__45915));
})()))
{return (new schema.core.EnumSchema(G__45907,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45907),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45907){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,G__45907,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.EnumSchema.prototype.schema$core$Schema$ = true;
schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.contains_QMARK_(self__.vs,x))
{return x;
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});
schema.core.EnumSchema.cljs$lang$type = true;
schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});
schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/EnumSchema");
});
schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){return (new schema.core.EnumSchema(vs));
});
schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__45909){return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__45909),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45909,new cljs.core.Keyword(null,"vs","vs",-2022097090))));
});
/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){return (new schema.core.EnumSchema(cljs.core.set(vs)));
};
var enum$ = function (var_args){
var vs = null;if (arguments.length > 0) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__45917){
var vs = cljs.core.seq(arglist__45917);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
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
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45919,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45921 = (((k45919 instanceof cljs.core.Keyword))?k45919.fqn:null);switch (G__45921) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45919,else__20475__auto__);

}
});
schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.Predicate{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45918){var self__ = this;
var this__20479__auto____$1 = this;var pred__45922 = cljs.core.keyword_identical_QMARK_;var expr__45923 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45925 = new cljs.core.Keyword(null,"p?","p?",-1172161701);var G__45926 = expr__45923;return (pred__45922.cljs$core$IFn$_invoke$arity$2 ? pred__45922.cljs$core$IFn$_invoke$arity$2(G__45925,G__45926) : pred__45922.call(null,G__45925,G__45926));
})()))
{return (new schema.core.Predicate(G__45918,self__.pred_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45927 = new cljs.core.Keyword(null,"pred-name","pred-name",-3677451);var G__45928 = expr__45923;return (pred__45922.cljs$core$IFn$_invoke$arity$2 ? pred__45922.cljs$core$IFn$_invoke$arity$2(G__45927,G__45928) : pred__45922.call(null,G__45927,G__45928));
})()))
{return (new schema.core.Predicate(self__.p_QMARK_,G__45918,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45918),null));
}
}
});
schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45918){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__45918,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.Predicate.prototype.schema$core$Schema$ = true;
schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){var temp__4124__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__45930 = x;return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__45930) : self__.p_QMARK_.call(null,G__45930));
})()))
{return null;
} else
{return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e45929){if((e45929 instanceof Object))
{var e = e45929;return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else
{throw e45929;

}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var reason = temp__4124__auto__;return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4124__auto__,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4124__auto__,this$__$1))
,null)),reason));
} else
{return x;
}
});
;})(this$__$1))
});
schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_))
{return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_))
{return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_))
{return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else
{return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
});
schema.core.Predicate.cljs$lang$type = true;
schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});
schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/Predicate");
});
schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){return (new schema.core.Predicate(p_QMARK_,pred_name));
});
schema.core.map__GT_Predicate = (function map__GT_Predicate(G__45920){return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__45920),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__45920),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45920,new cljs.core.Keyword(null,"p?","p?",-1172161701),cljs.core.array_seq([new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], 0))));
});
/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){return pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){if(cljs.core.ifn_QMARK_(p_QMARK_))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}
return (new schema.core.Predicate(p_QMARK_,pred_name));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Protocol = (function (p,__meta,__extmap){
this.p = p;
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
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45935,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45937 = (((k45935 instanceof cljs.core.Keyword))?k45935.fqn:null);switch (G__45937) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45935,else__20475__auto__);

}
});
schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.Protocol{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45934){var self__ = this;
var this__20479__auto____$1 = this;var pred__45938 = cljs.core.keyword_identical_QMARK_;var expr__45939 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45941 = new cljs.core.Keyword(null,"p","p",151049309);var G__45942 = expr__45939;return (pred__45938.cljs$core$IFn$_invoke$arity$2 ? pred__45938.cljs$core$IFn$_invoke$arity$2(G__45941,G__45942) : pred__45938.call(null,G__45941,G__45942));
})()))
{return (new schema.core.Protocol(G__45934,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45934),null));
}
});
schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45934){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.Protocol(self__.p,G__45934,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.Protocol.prototype.schema$core$Schema$ = true;
schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.truth_(new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x)))
{return x;
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});
schema.core.Protocol.cljs$lang$type = true;
schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});
schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/Protocol");
});
schema.core.__GT_Protocol = (function __GT_Protocol(p){return (new schema.core.Protocol(p));
});
schema.core.map__GT_Protocol = (function map__GT_Protocol(G__45936){return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__45936),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45936,new cljs.core.Keyword(null,"p","p",151049309))));
});
RegExp.prototype.schema$core$Schema$ = true;
RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(!(typeof x === 'string'))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else
{if(cljs.core.not(cljs.core.re_find(this$__$1,x)))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.explain(this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else
{return x;

}
}
});
;})(this$__$1))
});
RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(("#\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)).slice((1),(-1)))+"\""));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
* A regular expression
*/
schema.core.Regex = RegExp;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Maybe = (function (schema,__meta,__extmap){
this.schema = schema;
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
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45945,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45947 = (((k45945 instanceof cljs.core.Keyword))?k45945.fqn:null);switch (G__45947) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45945,else__20475__auto__);

}
});
schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.Maybe{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45944){var self__ = this;
var this__20479__auto____$1 = this;var pred__45948 = cljs.core.keyword_identical_QMARK_;var expr__45949 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45951 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__45952 = expr__45949;return (pred__45948.cljs$core$IFn$_invoke$arity$2 ? pred__45948.cljs$core$IFn$_invoke$arity$2(G__45951,G__45952) : pred__45948.call(null,G__45951,G__45952));
})()))
{return (new schema.core.Maybe(G__45944,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45944),null));
}
});
schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45944){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.Maybe(self__.schema,G__45944,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.Maybe.prototype.schema$core$Schema$ = true;
schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));return ((function (sub_walker,this$__$1){
return (function (x){if((x == null))
{return null;
} else
{var G__45953 = x;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__45953) : sub_walker.call(null,G__45953));
}
});
;})(sub_walker,this$__$1))
});
schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});
schema.core.Maybe.cljs$lang$type = true;
schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});
schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/Maybe");
});
schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});
schema.core.map__GT_Maybe = (function map__GT_Maybe(G__45946){return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45946),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45946,new cljs.core.Keyword(null,"schema","schema",-1582001791))));
});
/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap){
this.schema = schema;
this.name = name;
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
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45956,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45958 = (((k45956 instanceof cljs.core.Keyword))?k45956.fqn:null);switch (G__45958) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45956,else__20475__auto__);

}
});
schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.NamedSchema{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45955){var self__ = this;
var this__20479__auto____$1 = this;var pred__45959 = cljs.core.keyword_identical_QMARK_;var expr__45960 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45962 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__45963 = expr__45960;return (pred__45959.cljs$core$IFn$_invoke$arity$2 ? pred__45959.cljs$core$IFn$_invoke$arity$2(G__45962,G__45963) : pred__45959.call(null,G__45962,G__45963));
})()))
{return (new schema.core.NamedSchema(G__45955,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__45964 = new cljs.core.Keyword(null,"name","name",1843675177);var G__45965 = expr__45960;return (pred__45959.cljs$core$IFn$_invoke$arity$2 ? pred__45959.cljs$core$IFn$_invoke$arity$2(G__45964,G__45965) : pred__45959.call(null,G__45964,G__45965));
})()))
{return (new schema.core.NamedSchema(self__.schema,G__45955,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45955),null));
}
}
});
schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45955){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,G__45955,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.NamedSchema.prototype.schema$core$Schema$ = true;
schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));return ((function (sub_walker,this$__$1){
return (function (x){return schema.utils.wrap_error_name(self__.name,(function (){var G__45966 = x;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__45966) : sub_walker.call(null,G__45966));
})());
});
;})(sub_walker,this$__$1))
});
schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
schema.core.NamedSchema.cljs$lang$type = true;
schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});
schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/NamedSchema");
});
schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});
schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__45957){return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45957),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__45957),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45957,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"name","name",1843675177)], 0))));
});
/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Either = (function (schemas,__meta,__extmap){
this.schemas = schemas;
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
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45969,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45971 = (((k45969 instanceof cljs.core.Keyword))?k45969.fqn:null);switch (G__45971) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45969,else__20475__auto__);

}
});
schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.Either{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45968){var self__ = this;
var this__20479__auto____$1 = this;var pred__45972 = cljs.core.keyword_identical_QMARK_;var expr__45973 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45975 = new cljs.core.Keyword(null,"schemas","schemas",575070579);var G__45976 = expr__45973;return (pred__45972.cljs$core$IFn$_invoke$arity$2 ? pred__45972.cljs$core$IFn$_invoke$arity$2(G__45975,G__45976) : pred__45972.call(null,G__45975,G__45976));
})()))
{return (new schema.core.Either(G__45968,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45968),null));
}
});
schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45968){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.Either(self__.schemas,G__45968,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.Either.prototype.schema$core$Schema$ = true;
schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){var sub_walkers__$1 = cljs.core.seq(sub_walkers);while(true){
if(cljs.core.not(sub_walkers__$1))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else
{var res = cljs.core.first(sub_walkers__$1).call(null,x);if(!(schema.utils.error_QMARK_(res)))
{return res;
} else
{{
var G__45978 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__45978;
continue;
}
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});
schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});
schema.core.Either.cljs$lang$type = true;
schema.core.Either.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});
schema.core.Either.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/Either");
});
schema.core.__GT_Either = (function __GT_Either(schemas){return (new schema.core.Either(schemas));
});
schema.core.map__GT_Either = (function map__GT_Either(G__45970){return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__45970),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45970,new cljs.core.Keyword(null,"schemas","schemas",575070579))));
});
/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){return (new schema.core.Either(schemas));
};
var either = function (var_args){
var schemas = null;if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__45979){
var schemas = cljs.core.seq(arglist__45979);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Both = (function (schemas,__meta,__extmap){
this.schemas = schemas;
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
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45981,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45983 = (((k45981 instanceof cljs.core.Keyword))?k45981.fqn:null);switch (G__45983) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45981,else__20475__auto__);

}
});
schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.Both{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45980){var self__ = this;
var this__20479__auto____$1 = this;var pred__45984 = cljs.core.keyword_identical_QMARK_;var expr__45985 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45987 = new cljs.core.Keyword(null,"schemas","schemas",575070579);var G__45988 = expr__45985;return (pred__45984.cljs$core$IFn$_invoke$arity$2 ? pred__45984.cljs$core$IFn$_invoke$arity$2(G__45987,G__45988) : pred__45984.call(null,G__45987,G__45988));
})()))
{return (new schema.core.Both(G__45980,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45980),null));
}
});
schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45980){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.Both(self__.schemas,G__45980,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.Both.prototype.schema$core$Schema$ = true;
schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){if(schema.utils.error_QMARK_(x__$1))
{return x__$1;
} else
{var G__45989 = x__$1;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__45989) : sub_walker.call(null,G__45989));
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});
schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});
schema.core.Both.cljs$lang$type = true;
schema.core.Both.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});
schema.core.Both.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/Both");
});
schema.core.__GT_Both = (function __GT_Both(schemas){return (new schema.core.Both(schemas));
});
schema.core.map__GT_Both = (function map__GT_Both(G__45982){return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__45982),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45982,new cljs.core.Keyword(null,"schemas","schemas",575070579))));
});
/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){return (new schema.core.Both(schemas));
};
var both = function (var_args){
var schemas = null;if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__45991){
var schemas = cljs.core.seq(arglist__45991);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap){
this.preds_and_schemas = preds_and_schemas;
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
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k45993,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__45995 = (((k45993 instanceof cljs.core.Keyword))?k45993.fqn:null);switch (G__45995) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45993,else__20475__auto__);

}
});
schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__45992){var self__ = this;
var this__20479__auto____$1 = this;var pred__45996 = cljs.core.keyword_identical_QMARK_;var expr__45997 = k__20480__auto__;if(cljs.core.truth_((function (){var G__45999 = new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355);var G__46000 = expr__45997;return (pred__45996.cljs$core$IFn$_invoke$arity$2 ? pred__45996.cljs$core$IFn$_invoke$arity$2(G__45999,G__46000) : pred__45996.call(null,G__45999,G__46000));
})()))
{return (new schema.core.ConditionalSchema(G__45992,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__45992),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__45992){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__45992,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;
schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__46001){var vec__46002 = p__46001;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46002,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46002,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);return ((function (preds_and_walkers,this$__$1){
return (function (x){var temp__4124__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__46003){var vec__46004 = p__46003;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46004,(0),null);var G__46005 = x;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__46005) : pred.call(null,G__46005));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));if(cljs.core.truth_(temp__4124__auto__))
{var vec__46006 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46006,(0),null);var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46006,(1),null);var G__46007 = x;return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__46007) : match.call(null,G__46007));
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4124__auto__,preds_and_walkers,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4124__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__46008){var vec__46009 = p__46008;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46009,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46009,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});
schema.core.ConditionalSchema.cljs$lang$type = true;
schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});
schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/ConditionalSchema");
});
schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){return (new schema.core.ConditionalSchema(preds_and_schemas));
});
schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__45994){return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__45994),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45994,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355))));
});
/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}
return (new schema.core.ConditionalSchema((function (){var iter__20684__auto__ = (function iter__46021(s__46022){return (new cljs.core.LazySeq(null,(function (){var s__46022__$1 = s__46022;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46022__$1);if(temp__4126__auto__)
{var s__46022__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46022__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46022__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46024 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46023 = (0);while(true){
if((i__46023 < size__20683__auto__))
{var vec__46029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46023);var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46029,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46029,(1),null);cljs.core.chunk_append(b__46024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null));
{
var G__46031 = (i__46023 + (1));
i__46023 = G__46031;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46024),iter__46021(cljs.core.chunk_rest(s__46022__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46024),null);
}
} else
{var vec__46030 = cljs.core.first(s__46022__$2);var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46030,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46030,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null),iter__46021(cljs.core.rest(s__46022__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()));
};
var conditional = function (var_args){
var preds_and_schemas = null;if (arguments.length > 0) {
  preds_and_schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__46032){
var preds_and_schemas = cljs.core.seq(arglist__46032);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325);

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.RequiredKey = (function (k,__meta,__extmap){
this.k = k;
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
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k46034,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__46036 = (((k46034 instanceof cljs.core.Keyword))?k46034.fqn:null);switch (G__46036) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46034,else__20475__auto__);

}
});
schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.RequiredKey{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__46033){var self__ = this;
var this__20479__auto____$1 = this;var pred__46037 = cljs.core.keyword_identical_QMARK_;var expr__46038 = k__20480__auto__;if(cljs.core.truth_((function (){var G__46040 = new cljs.core.Keyword(null,"k","k",-2146297393);var G__46041 = expr__46038;return (pred__46037.cljs$core$IFn$_invoke$arity$2 ? pred__46037.cljs$core$IFn$_invoke$arity$2(G__46040,G__46041) : pred__46037.call(null,G__46040,G__46041));
})()))
{return (new schema.core.RequiredKey(G__46033,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__46033),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__46033){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,G__46033,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.RequiredKey.cljs$lang$type = true;
schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});
schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/RequiredKey");
});
schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){return (new schema.core.RequiredKey(k));
});
schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__46035){return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__46035),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46035,new cljs.core.Keyword(null,"k","k",-2146297393))));
});
/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){if((k instanceof cljs.core.Keyword))
{return k;
} else
{return (new schema.core.RequiredKey(k));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.OptionalKey = (function (k,__meta,__extmap){
this.k = k;
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
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k46044,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__46046 = (((k46044 instanceof cljs.core.Keyword))?k46044.fqn:null);switch (G__46046) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46044,else__20475__auto__);

}
});
schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.OptionalKey{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__46043){var self__ = this;
var this__20479__auto____$1 = this;var pred__46047 = cljs.core.keyword_identical_QMARK_;var expr__46048 = k__20480__auto__;if(cljs.core.truth_((function (){var G__46050 = new cljs.core.Keyword(null,"k","k",-2146297393);var G__46051 = expr__46048;return (pred__46047.cljs$core$IFn$_invoke$arity$2 ? pred__46047.cljs$core$IFn$_invoke$arity$2(G__46050,G__46051) : pred__46047.call(null,G__46050,G__46051));
})()))
{return (new schema.core.OptionalKey(G__46043,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__46043),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__46043){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,G__46043,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.OptionalKey.cljs$lang$type = true;
schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});
schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/OptionalKey");
});
schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){return (new schema.core.OptionalKey(k));
});
schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__46045){return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__46045),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46045,new cljs.core.Keyword(null,"k","k",-2146297393))));
});
/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){return (new schema.core.OptionalKey(k));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){if((ks instanceof cljs.core.Keyword))
{return ks;
} else
{if((ks instanceof schema.core.RequiredKey))
{return ks.k;
} else
{if(schema.core.optional_key_QMARK_(ks))
{return ks.k;
} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){return (schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){if(schema.core.specific_key_QMARK_(kspec))
{if((kspec instanceof cljs.core.Keyword))
{return kspec;
} else
{return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else
{return schema.core.explain(kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap){
this.kspec = kspec;
this.val_schema = val_schema;
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
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k46054,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__46056 = (((k46054 instanceof cljs.core.Keyword))?k46054.fqn:null);switch (G__46056) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46054,else__20475__auto__);

}
});
schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.MapEntry{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kspec","kspec",-1151232248),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__46053){var self__ = this;
var this__20479__auto____$1 = this;var pred__46057 = cljs.core.keyword_identical_QMARK_;var expr__46058 = k__20480__auto__;if(cljs.core.truth_((function (){var G__46060 = new cljs.core.Keyword(null,"kspec","kspec",-1151232248);var G__46061 = expr__46058;return (pred__46057.cljs$core$IFn$_invoke$arity$2 ? pred__46057.cljs$core$IFn$_invoke$arity$2(G__46060,G__46061) : pred__46057.call(null,G__46060,G__46061));
})()))
{return (new schema.core.MapEntry(G__46053,self__.val_schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__46062 = new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619);var G__46063 = expr__46058;return (pred__46057.cljs$core$IFn$_invoke$arity$2 ? pred__46057.cljs$core$IFn$_invoke$arity$2(G__46062,G__46063) : pred__46057.call(null,G__46062,G__46063));
})()))
{return (new schema.core.MapEntry(self__.kspec,G__46053,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__46053),null));
}
}
});
schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__46053){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__46053,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.MapEntry.prototype.schema$core$Schema$ = true;
schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));if(schema.core.specific_key_QMARK_(self__.kspec))
{var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);var k = schema.core.explicit_schema_key(self__.kspec);return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){if((schema.core._PLUS_missing_PLUS_ === x))
{if(optional_QMARK_)
{return null;
} else
{return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else
{if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else
{var vec__46064 = x;var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46064,(0),null);var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46064,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0))))));
}
var vres = (function (){var G__46065 = xv;return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__46065) : val_walker.call(null,G__46065));
})();var temp__4124__auto__ = schema.utils.error_val(vres);if(cljs.core.truth_(temp__4124__auto__))
{var ve = temp__4124__auto__;return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else
{var key_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.kspec) : schema.core.subschema_walker.call(null,self__.kspec));return ((function (key_walker,val_walker,this$__$1){
return (function (x){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else
{var out_k = (function (){var G__46066 = cljs.core.key(x);return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__46066) : key_walker.call(null,G__46066));
})();var out_ke = schema.utils.error_val(out_k);var out_v = (function (){var G__46067 = cljs.core.val(x);return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__46067) : val_walker.call(null,G__46067));
})();var out_ve = schema.utils.error_val(out_v);if(cljs.core.truth_((function (){var or__19289__auto__ = out_ke;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return out_ve;
}
})()))
{return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__19289__auto__ = out_ke;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.key(x);
}
})(),(function (){var or__19289__auto__ = out_ve;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});
schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain_kspec(self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});
schema.core.MapEntry.cljs$lang$type = true;
schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});
schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/MapEntry");
});
schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__46055){return (new schema.core.MapEntry(new cljs.core.Keyword(null,"kspec","kspec",-1151232248).cljs$core$IFn$_invoke$arity$1(G__46055),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__46055),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46055,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),cljs.core.array_seq([new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], 0))));
});
schema.core.map_entry = (function map_entry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));if((cljs.core.count(key_schemata) < (2)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}
return cljs.core.first(key_schemata);
});
schema.core.map_walker = (function map_walker(map_schema){var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20684__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__46091(s__46092){return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){var s__46092__$1 = s__46092;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46092__$1);if(temp__4126__auto__)
{var s__46092__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46092__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46092__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46094 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46093 = (0);while(true){
if((i__46093 < size__20683__auto__))
{var vec__46099 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46093);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46099,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46099,(1),null);cljs.core.chunk_append(b__46094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));
{
var G__46112 = (i__46093 + (1));
i__46093 = G__46112;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46094),iter__46091(cljs.core.chunk_rest(s__46092__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46094),null);
}
} else
{var vec__46100 = cljs.core.first(s__46092__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46100,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46100,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__46091(cljs.core.rest(s__46092__$2)));
}
} else
{return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;return iter__20684__auto__(explicit_schema);
})());var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__46069_SHARP_){return (cljs.core.count(p1__46069_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}
return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){if(!(cljs.core.map_QMARK_(x)))
{return schema.utils.error(schema.utils.__GT_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else
{var x__$1 = x;var explicit_walkers__$1 = cljs.core.seq(explicit_walkers);var out = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.not(explicit_walkers__$1))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(extra_walker)?((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){var G__46101 = out__$1;var G__46102 = (function (){var G__46103 = e;return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__46103) : extra_walker.call(null,G__46103));
})();return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__46101,G__46102) : err_conj.call(null,G__46101,G__46102));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__46104){var vec__46105 = p__46104;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46105,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46105,(1),null);var G__46106 = out__$1;var G__46107 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__46106,G__46107) : err_conj.call(null,G__46106,G__46107));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,x__$1);
} else
{var vec__46108 = cljs.core.first(explicit_walkers__$1);var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46108,(0),null);var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46108,(1),null);{
var G__46113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x__$1,wk);
var G__46114 = cljs.core.next(explicit_walkers__$1);
var G__46115 = (function (){var G__46109 = out;var G__46110 = (function (){var G__46111 = (function (){var or__19289__auto__ = cljs.core.find(x__$1,wk);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return schema.core._PLUS_missing_PLUS_;
}
})();return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__46111) : wv.call(null,G__46111));
})();return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__46109,G__46110) : err_conj.call(null,G__46109,G__46110));
})();
x__$1 = G__46113;
explicit_walkers__$1 = G__46114;
out = G__46115;
continue;
}
}
break;
}
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20684__auto__ = (function iter__46126(s__46127){return (new cljs.core.LazySeq(null,(function (){var s__46127__$1 = s__46127;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46127__$1);if(temp__4126__auto__)
{var s__46127__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46127__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46127__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46129 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46128 = (0);while(true){
if((i__46128 < size__20683__auto__))
{var vec__46134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46128);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46134,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46134,(1),null);cljs.core.chunk_append(b__46129,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));
{
var G__46136 = (i__46128 + (1));
i__46128 = G__46136;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46129),iter__46126(cljs.core.chunk_rest(s__46127__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46129),null);
}
} else
{var vec__46135 = cljs.core.first(s__46127__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46135,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46135,(1),null);return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__46126(cljs.core.rest(s__46127__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;
cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_walker(this$__$1);
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_walker(this$__$1);
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;
cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1)))
{} else
{throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.first(this$__$1)) : schema.core.subschema_walker.call(null,cljs.core.first(this$__$1)));return ((function (sub_walker,this$__$1){
return (function (x){var or__19289__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{var vec__46137 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46137,(0),null);var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46137,(1),null);if(cljs.core.seq(bad))
{return schema.utils.error(cljs.core.set(bad));
} else
{return cljs.core.set(good);
}
}
});
;})(sub_walker,this$__$1))
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
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
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k46139,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__46141 = (((k46139 instanceof cljs.core.Keyword))?k46139.fqn:null);switch (G__46141) {
case "name":
return self__.name;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46139,else__20475__auto__);

}
});
schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.One{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__46138){var self__ = this;
var this__20479__auto____$1 = this;var pred__46142 = cljs.core.keyword_identical_QMARK_;var expr__46143 = k__20480__auto__;if(cljs.core.truth_((function (){var G__46145 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__46146 = expr__46143;return (pred__46142.cljs$core$IFn$_invoke$arity$2 ? pred__46142.cljs$core$IFn$_invoke$arity$2(G__46145,G__46146) : pred__46142.call(null,G__46145,G__46146));
})()))
{return (new schema.core.One(G__46138,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__46147 = new cljs.core.Keyword(null,"optional?","optional?",1184638129);var G__46148 = expr__46143;return (pred__46142.cljs$core$IFn$_invoke$arity$2 ? pred__46142.cljs$core$IFn$_invoke$arity$2(G__46147,G__46148) : pred__46142.call(null,G__46147,G__46148));
})()))
{return (new schema.core.One(self__.schema,G__46138,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__46149 = new cljs.core.Keyword(null,"name","name",1843675177);var G__46150 = expr__46143;return (pred__46142.cljs$core$IFn$_invoke$arity$2 ? pred__46142.cljs$core$IFn$_invoke$arity$2(G__46149,G__46150) : pred__46142.call(null,G__46149,G__46150));
})()))
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__46138,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__46138),null));
}
}
}
});
schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__46138){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__46138,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.One.cljs$lang$type = true;
schema.core.One.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});
schema.core.One.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/One");
});
schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){return (new schema.core.One(schema__$1,optional_QMARK_,name));
});
schema.core.map__GT_One = (function map__GT_One(G__46140){return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__46140),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__46140),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__46140),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46140,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], 0))));
});
/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){return (new schema.core.One(schema__$1,false,name));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){return (new schema.core.One(schema__$1,true,name));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){var vec__46157 = cljs.core.split_with((function (p1__46152_SHARP_){return ((p1__46152_SHARP_ instanceof schema.core.One)) && (cljs.core.not(new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__46152_SHARP_)));
}),s);var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46157,(0),null);var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46157,(1),null);var vec__46158 = cljs.core.split_with(((function (vec__46157,required,more){
return (function (p1__46153_SHARP_){var and__19277__auto__ = (p1__46153_SHARP_ instanceof schema.core.One);if(and__19277__auto__)
{return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__46153_SHARP_);
} else
{return and__19277__auto__;
}
});})(vec__46157,required,more))
,more);var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46158,(0),null);var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46158,(1),null);if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__46157,required,more,vec__46158,optional,more__$1){
return (function (p1__46154_SHARP_){return !((p1__46154_SHARP_ instanceof schema.core.One));
});})(vec__46157,required,more,vec__46158,optional,more__$1))
,more__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;
cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;var vec__46159 = schema.core.parse_sequence_schema(this$__$1);var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46159,(0),null);var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46159,(1),null);var single_walkers = cljs.core.vec((function (){var iter__20684__auto__ = ((function (vec__46159,singles,multi,this$__$1){
return (function iter__46160(s__46161){return (new cljs.core.LazySeq(null,((function (vec__46159,singles,multi,this$__$1){
return (function (){var s__46161__$1 = s__46161;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46161__$1);if(temp__4126__auto__)
{var s__46161__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46161__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46161__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46163 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46162 = (0);while(true){
if((i__46162 < size__20683__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46162);cljs.core.chunk_append(b__46163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));
{
var G__46191 = (i__46162 + (1));
i__46162 = G__46191;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46163),iter__46160(cljs.core.chunk_rest(s__46161__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46163),null);
}
} else
{var s = cljs.core.first(s__46161__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__46160(cljs.core.rest(s__46161__$2)));
}
} else
{return null;
}
break;
}
});})(vec__46159,singles,multi,this$__$1))
,null,null));
});})(vec__46159,singles,multi,this$__$1))
;return iter__20684__auto__(singles);
})());var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);var err_conj = schema.utils.result_builder(((function (vec__46159,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__46159,singles,multi,single_walkers,multi_walker,this$__$1))
);return ((function (vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){var or__19289__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{var single_walkers__$1 = single_walkers;var x__$1 = x;var out = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(single_walkers__$1);if(cljs.core.truth_(temp__4124__auto__))
{var vec__46166 = temp__4124__auto__;var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46166,(0),null);var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46166,(1),null);if(cljs.core.empty_QMARK_(x__$1))
{if(cljs.core.truth_(first_single.optional_QMARK_))
{return out;
} else
{var G__46167 = out;var G__46168 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__46167,vec__46166,first_single,single_walker,temp__4124__auto__,or__19289__auto__,vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__20684__auto__ = ((function (single_walkers__$1,x__$1,out,G__46167,vec__46166,first_single,single_walker,temp__4124__auto__,or__19289__auto__,vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__46169(s__46170){return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__46167,vec__46166,first_single,single_walker,temp__4124__auto__,or__19289__auto__,vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){var s__46170__$1 = s__46170;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46170__$1);if(temp__4126__auto__)
{var s__46170__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46170__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46170__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46172 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46171 = (0);while(true){
if((i__46171 < size__20683__auto__))
{var vec__46177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46171);var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46177,(0),null);if(cljs.core.not(single.optional_QMARK_))
{cljs.core.chunk_append(b__46172,single.name);
{
var G__46192 = (i__46171 + (1));
i__46171 = G__46192;
continue;
}
} else
{return null;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46172),iter__46169(cljs.core.chunk_rest(s__46170__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46172),null);
}
} else
{var vec__46178 = cljs.core.first(s__46170__$2);var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46178,(0),null);if(cljs.core.not(single.optional_QMARK_))
{return cljs.core.cons(single.name,iter__46169(cljs.core.rest(s__46170__$2)));
} else
{return null;
}
}
} else
{return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__46167,vec__46166,first_single,single_walker,temp__4124__auto__,or__19289__auto__,vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__46167,vec__46166,first_single,single_walker,temp__4124__auto__,or__19289__auto__,vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;return iter__20684__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__46167,vec__46166,first_single,single_walker,temp__4124__auto__,or__19289__auto__,vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__46167,G__46168) : err_conj.call(null,G__46167,G__46168));
}
} else
{{
var G__46193 = cljs.core.next(single_walkers__$1);
var G__46194 = cljs.core.rest(x__$1);
var G__46195 = (function (){var G__46179 = out;var G__46180 = schema.utils.wrap_error_name(first_single.name,(function (){var G__46181 = cljs.core.first(x__$1);return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__46181) : single_walker.call(null,G__46181));
})());return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__46179,G__46180) : err_conj.call(null,G__46179,G__46180));
})();
single_walkers__$1 = G__46193;
x__$1 = G__46194;
out = G__46195;
continue;
}
}
} else
{if(cljs.core.truth_(multi))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else
{if(cljs.core.seq(x__$1))
{var G__46182 = out;var G__46183 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__46182,temp__4124__auto__,or__19289__auto__,vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__46182,temp__4124__auto__,or__19289__auto__,vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__46182,G__46183) : err_conj.call(null,G__46182,G__46183));
} else
{return out;

}
}
}
break;
}
}
});
;})(vec__46159,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});
cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;var vec__46184 = schema.core.parse_sequence_schema(this$__$1);var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46184,(0),null);var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46184,(1),null);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__20684__auto__ = ((function (vec__46184,singles,multi,this$__$1){
return (function iter__46185(s__46186){return (new cljs.core.LazySeq(null,((function (vec__46184,singles,multi,this$__$1){
return (function (){var s__46186__$1 = s__46186;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46186__$1);if(temp__4126__auto__)
{var s__46186__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46186__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46186__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46188 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46187 = (0);while(true){
if((i__46187 < size__20683__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46187);cljs.core.chunk_append(b__46188,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));
{
var G__46196 = (i__46187 + (1));
i__46187 = G__46196;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46188),iter__46185(cljs.core.chunk_rest(s__46186__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46188),null);
}
} else
{var s = cljs.core.first(s__46186__$2);return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__46185(cljs.core.rest(s__46186__$2)));
}
} else
{return null;
}
break;
}
});})(vec__46184,singles,multi,this$__$1))
,null,null));
});})(vec__46184,singles,multi,this$__$1))
;return iter__20684__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Record = (function (klass,schema,__meta,__extmap){
this.klass = klass;
this.schema = schema;
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
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k46198,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__46200 = (((k46198 instanceof cljs.core.Keyword))?k46198.fqn:null);switch (G__46200) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46198,else__20475__auto__);

}
});
schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.Record{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__46197){var self__ = this;
var this__20479__auto____$1 = this;var pred__46201 = cljs.core.keyword_identical_QMARK_;var expr__46202 = k__20480__auto__;if(cljs.core.truth_((function (){var G__46204 = new cljs.core.Keyword(null,"klass","klass",-1386752349);var G__46205 = expr__46202;return (pred__46201.cljs$core$IFn$_invoke$arity$2 ? pred__46201.cljs$core$IFn$_invoke$arity$2(G__46204,G__46205) : pred__46201.call(null,G__46204,G__46205));
})()))
{return (new schema.core.Record(G__46197,self__.schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__46206 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__46207 = expr__46202;return (pred__46201.cljs$core$IFn$_invoke$arity$2 ? pred__46201.cljs$core$IFn$_invoke$arity$2(G__46206,G__46207) : pred__46201.call(null,G__46206,G__46207));
})()))
{return (new schema.core.Record(self__.klass,G__46197,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__46197),null));
}
}
});
schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__46197){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,G__46197,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.Record.prototype.schema$core$Schema$ = true;
schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));var pred_checker = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);if(cljs.core.truth_(temp__4126__auto__))
{var evf = temp__4126__auto__;return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else
{return null;
}
})();return ((function (map_checker,pred_checker,this$__$1){
return (function (r){var or__19289__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{var res = (function (){var G__46208 = r;return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__46208) : map_checker.call(null,G__46208));
})();if(schema.utils.error_QMARK_(res))
{return res;
} else
{var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__46209 = r;return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__46209) : pred_checker.call(null,G__46209));
})():null);if(schema.utils.error_QMARK_(pred_res))
{return pred_res;
} else
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r,res], 0));
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});
schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),new cljs.core.Symbol(null,"record","record",861424668,null));
});
schema.core.Record.cljs$lang$type = true;
schema.core.Record.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});
schema.core.Record.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/Record");
});
schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){return (new schema.core.Record(klass,schema__$1));
});
schema.core.map__GT_Record = (function map__GT_Record(G__46199){return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__46199),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__46199),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46199,new cljs.core.Keyword(null,"klass","klass",-1386752349),cljs.core.array_seq([new cljs.core.Keyword(null,"schema","schema",-1582001791)], 0))));
});
/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){if(cljs.core.map_QMARK_(schema__$1))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}
return (new schema.core.Record(klass,schema__$1));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){var vec__46214 = cljs.core.split_with((function (p1__46211_SHARP_){return (p1__46211_SHARP_ instanceof schema.core.One);
}),input_schema);var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46214,(0),null);var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46214,(1),null);return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__46214,required,more){
return (function (p1__46212_SHARP_){return schema.core.explain(p1__46212_SHARP_.schema);
});})(vec__46214,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
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
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k46216,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__46218 = (((k46216 instanceof cljs.core.Keyword))?k46216.fqn:null);switch (G__46218) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46216,else__20475__auto__);

}
});
schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#schema.core.FnSchema{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
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
schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__46215){var self__ = this;
var this__20479__auto____$1 = this;var pred__46219 = cljs.core.keyword_identical_QMARK_;var expr__46220 = k__20480__auto__;if(cljs.core.truth_((function (){var G__46222 = new cljs.core.Keyword(null,"output-schema","output-schema",272504137);var G__46223 = expr__46220;return (pred__46219.cljs$core$IFn$_invoke$arity$2 ? pred__46219.cljs$core$IFn$_invoke$arity$2(G__46222,G__46223) : pred__46219.call(null,G__46222,G__46223));
})()))
{return (new schema.core.FnSchema(G__46215,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__46224 = new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805);var G__46225 = expr__46220;return (pred__46219.cljs$core$IFn$_invoke$arity$2 ? pred__46219.cljs$core$IFn$_invoke$arity$2(G__46224,G__46225) : pred__46219.call(null,G__46224,G__46225));
})()))
{return (new schema.core.FnSchema(self__.output_schema,G__46215,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__46215),null));
}
}
});
schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__46215){var self__ = this;
var this__20471__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__46215,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
schema.core.FnSchema.prototype.schema$core$Schema$ = true;
schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.fn_QMARK_(x))
{return x;
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count(self__.input_schemas) > (1)))
{return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else
{return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});
schema.core.FnSchema.cljs$lang$type = true;
schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});
schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"schema.core/FnSchema");
});
schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){return (new schema.core.FnSchema(output_schema,input_schemas));
});
schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__46217){return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__46217),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__46217),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46217,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),cljs.core.array_seq([new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], 0))));
});
schema.core.arity = (function arity(input_schema){if(cljs.core.seq(input_schema))
{if((cljs.core.last(input_schema) instanceof schema.core.One))
{return cljs.core.count(input_schema);
} else
{return Number.MAX_VALUE;
}
} else
{return (0);
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regargless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){if(cljs.core.seq(input_schemas))
{} else
{throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas))
{} else
{throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas))))
{} else
{throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}
return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){if(cljs.core.fn_QMARK_(f))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}
var or__19289__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{var m__759__auto__ = cljs.core.meta(f);var k__760__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);var temp__4124__auto__ = cljs.core.find(m__759__auto__,k__760__auto__);if(cljs.core.truth_(temp__4124__auto__))
{var pair__761__auto__ = temp__4124__auto__;return cljs.core.val(pair__761__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__760__auto__,m__759__auto__], 0))));
}
}
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){return cljs.core.with_meta(schema__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
});
schema.core.schema_name = (function schema_name(schema__$1){return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
//# sourceMappingURL=core.js.map