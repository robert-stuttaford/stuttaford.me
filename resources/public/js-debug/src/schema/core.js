goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('clojure.string');
goog.require('clojure.string');
schema.core.Schema = (function (){var obj35239 = {};return obj35239;
})();
schema.core.walker = (function walker(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.schema$core$Schema$walker$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.schema$core$Schema$walker$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (schema.core.walker[(function (){var G__35243 = x__20512__auto__;return goog.typeOf(G__35243);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (schema.core.walker["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});
schema.core.explain = (function explain(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.schema$core$Schema$explain$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.schema$core$Schema$explain$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (schema.core.explain[(function (){var G__35247 = x__20512__auto__;return goog.typeOf(G__35247);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (schema.core.explain["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
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
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){var subschema_walker35249 = schema.core.subschema_walker;try{schema.core.subschema_walker = sub_walker;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker35249;
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
schema.core.validate = (function validate(schema__$1,value){var temp__4126__auto___35250 = schema.core.check(schema__$1,value);if(cljs.core.truth_(temp__4126__auto___35250))
{var error_35251 = temp__4126__auto___35250;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_35251], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_35251], null));
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
return (function (x){var or__19267__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__19267__auto__ = (this$ === x.constructor);if(or__19267__auto__)
{return or__19267__auto__;
} else
{return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var G__35252 = x;return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__35252) : class_walker.call(null,G__35252));
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
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35254,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35256 = (((k35254 instanceof cljs.core.Keyword))?k35254.fqn:null);switch (G__35256) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35254,else__20414__auto__);

}
});
schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.AnythingSchema{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35253){var self__ = this;
var this__20418__auto____$1 = this;var pred__35257 = cljs.core.keyword_identical_QMARK_;var expr__35258 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35260 = new cljs.core.Keyword(null,"_","_",1453416199);var G__35261 = expr__35258;return (pred__35257.cljs$core$IFn$_invoke$arity$2 ? pred__35257.cljs$core$IFn$_invoke$arity$2(G__35260,G__35261) : pred__35257.call(null,G__35260,G__35261));
})()))
{return (new schema.core.AnythingSchema(G__35253,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35253),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35253){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,G__35253,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
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
schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});
schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/AnythingSchema");
});
schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){return (new schema.core.AnythingSchema(_));
});
schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__35255){return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__35255),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35255,new cljs.core.Keyword(null,"_","_",1453416199))));
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
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35264,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35266 = (((k35264 instanceof cljs.core.Keyword))?k35264.fqn:null);switch (G__35266) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35264,else__20414__auto__);

}
});
schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.EqSchema{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35263){var self__ = this;
var this__20418__auto____$1 = this;var pred__35267 = cljs.core.keyword_identical_QMARK_;var expr__35268 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35270 = new cljs.core.Keyword(null,"v","v",21465059);var G__35271 = expr__35268;return (pred__35267.cljs$core$IFn$_invoke$arity$2 ? pred__35267.cljs$core$IFn$_invoke$arity$2(G__35270,G__35271) : pred__35267.call(null,G__35270,G__35271));
})()))
{return (new schema.core.EqSchema(G__35263,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35263),null));
}
});
schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35263){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.EqSchema(self__.v,G__35263,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
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
schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});
schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/EqSchema");
});
schema.core.__GT_EqSchema = (function __GT_EqSchema(v){return (new schema.core.EqSchema(v));
});
schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__35265){return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__35265),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35265,new cljs.core.Keyword(null,"v","v",21465059))));
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
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35274,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35276 = (((k35274 instanceof cljs.core.Keyword))?k35274.fqn:null);switch (G__35276) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35274,else__20414__auto__);

}
});
schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.EnumSchema{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35273){var self__ = this;
var this__20418__auto____$1 = this;var pred__35277 = cljs.core.keyword_identical_QMARK_;var expr__35278 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35280 = new cljs.core.Keyword(null,"vs","vs",-2022097090);var G__35281 = expr__35278;return (pred__35277.cljs$core$IFn$_invoke$arity$2 ? pred__35277.cljs$core$IFn$_invoke$arity$2(G__35280,G__35281) : pred__35277.call(null,G__35280,G__35281));
})()))
{return (new schema.core.EnumSchema(G__35273,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35273),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35273){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,G__35273,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
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
schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});
schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/EnumSchema");
});
schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){return (new schema.core.EnumSchema(vs));
});
schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__35275){return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__35275),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35275,new cljs.core.Keyword(null,"vs","vs",-2022097090))));
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
enum$.cljs$lang$applyTo = (function (arglist__35283){
var vs = cljs.core.seq(arglist__35283);
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
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35285,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35287 = (((k35285 instanceof cljs.core.Keyword))?k35285.fqn:null);switch (G__35287) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35285,else__20414__auto__);

}
});
schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.Predicate{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35284){var self__ = this;
var this__20418__auto____$1 = this;var pred__35288 = cljs.core.keyword_identical_QMARK_;var expr__35289 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35291 = new cljs.core.Keyword(null,"p?","p?",-1172161701);var G__35292 = expr__35289;return (pred__35288.cljs$core$IFn$_invoke$arity$2 ? pred__35288.cljs$core$IFn$_invoke$arity$2(G__35291,G__35292) : pred__35288.call(null,G__35291,G__35292));
})()))
{return (new schema.core.Predicate(G__35284,self__.pred_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__35293 = new cljs.core.Keyword(null,"pred-name","pred-name",-3677451);var G__35294 = expr__35289;return (pred__35288.cljs$core$IFn$_invoke$arity$2 ? pred__35288.cljs$core$IFn$_invoke$arity$2(G__35293,G__35294) : pred__35288.call(null,G__35293,G__35294));
})()))
{return (new schema.core.Predicate(self__.p_QMARK_,G__35284,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35284),null));
}
}
});
schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35284){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__35284,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
schema.core.Predicate.prototype.schema$core$Schema$ = true;
schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){var temp__4124__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__35296 = x;return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35296) : self__.p_QMARK_.call(null,G__35296));
})()))
{return null;
} else
{return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e35295){if((e35295 instanceof Object))
{var e = e35295;return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else
{throw e35295;

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
schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});
schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/Predicate");
});
schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){return (new schema.core.Predicate(p_QMARK_,pred_name));
});
schema.core.map__GT_Predicate = (function map__GT_Predicate(G__35286){return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__35286),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__35286),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35286,new cljs.core.Keyword(null,"p?","p?",-1172161701),cljs.core.array_seq([new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], 0))));
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
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35301,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35303 = (((k35301 instanceof cljs.core.Keyword))?k35301.fqn:null);switch (G__35303) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35301,else__20414__auto__);

}
});
schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.Protocol{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35300){var self__ = this;
var this__20418__auto____$1 = this;var pred__35304 = cljs.core.keyword_identical_QMARK_;var expr__35305 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35307 = new cljs.core.Keyword(null,"p","p",151049309);var G__35308 = expr__35305;return (pred__35304.cljs$core$IFn$_invoke$arity$2 ? pred__35304.cljs$core$IFn$_invoke$arity$2(G__35307,G__35308) : pred__35304.call(null,G__35307,G__35308));
})()))
{return (new schema.core.Protocol(G__35300,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35300),null));
}
});
schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35300){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.Protocol(self__.p,G__35300,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
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
schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});
schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/Protocol");
});
schema.core.__GT_Protocol = (function __GT_Protocol(p){return (new schema.core.Protocol(p));
});
schema.core.map__GT_Protocol = (function map__GT_Protocol(G__35302){return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__35302),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35302,new cljs.core.Keyword(null,"p","p",151049309))));
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
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35311,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35313 = (((k35311 instanceof cljs.core.Keyword))?k35311.fqn:null);switch (G__35313) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35311,else__20414__auto__);

}
});
schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.Maybe{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35310){var self__ = this;
var this__20418__auto____$1 = this;var pred__35314 = cljs.core.keyword_identical_QMARK_;var expr__35315 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35317 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__35318 = expr__35315;return (pred__35314.cljs$core$IFn$_invoke$arity$2 ? pred__35314.cljs$core$IFn$_invoke$arity$2(G__35317,G__35318) : pred__35314.call(null,G__35317,G__35318));
})()))
{return (new schema.core.Maybe(G__35310,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35310),null));
}
});
schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35310){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.Maybe(self__.schema,G__35310,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
schema.core.Maybe.prototype.schema$core$Schema$ = true;
schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));return ((function (sub_walker,this$__$1){
return (function (x){if((x == null))
{return null;
} else
{var G__35319 = x;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__35319) : sub_walker.call(null,G__35319));
}
});
;})(sub_walker,this$__$1))
});
schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});
schema.core.Maybe.cljs$lang$type = true;
schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});
schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/Maybe");
});
schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});
schema.core.map__GT_Maybe = (function map__GT_Maybe(G__35312){return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__35312),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35312,new cljs.core.Keyword(null,"schema","schema",-1582001791))));
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
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35322,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35324 = (((k35322 instanceof cljs.core.Keyword))?k35322.fqn:null);switch (G__35324) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35322,else__20414__auto__);

}
});
schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.NamedSchema{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35321){var self__ = this;
var this__20418__auto____$1 = this;var pred__35325 = cljs.core.keyword_identical_QMARK_;var expr__35326 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35328 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__35329 = expr__35326;return (pred__35325.cljs$core$IFn$_invoke$arity$2 ? pred__35325.cljs$core$IFn$_invoke$arity$2(G__35328,G__35329) : pred__35325.call(null,G__35328,G__35329));
})()))
{return (new schema.core.NamedSchema(G__35321,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__35330 = new cljs.core.Keyword(null,"name","name",1843675177);var G__35331 = expr__35326;return (pred__35325.cljs$core$IFn$_invoke$arity$2 ? pred__35325.cljs$core$IFn$_invoke$arity$2(G__35330,G__35331) : pred__35325.call(null,G__35330,G__35331));
})()))
{return (new schema.core.NamedSchema(self__.schema,G__35321,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35321),null));
}
}
});
schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35321){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,G__35321,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
schema.core.NamedSchema.prototype.schema$core$Schema$ = true;
schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));return ((function (sub_walker,this$__$1){
return (function (x){return schema.utils.wrap_error_name(self__.name,(function (){var G__35332 = x;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__35332) : sub_walker.call(null,G__35332));
})());
});
;})(sub_walker,this$__$1))
});
schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
schema.core.NamedSchema.cljs$lang$type = true;
schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});
schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/NamedSchema");
});
schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});
schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__35323){return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__35323),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__35323),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35323,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"name","name",1843675177)], 0))));
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
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35335,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35337 = (((k35335 instanceof cljs.core.Keyword))?k35335.fqn:null);switch (G__35337) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35335,else__20414__auto__);

}
});
schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.Either{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35334){var self__ = this;
var this__20418__auto____$1 = this;var pred__35338 = cljs.core.keyword_identical_QMARK_;var expr__35339 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35341 = new cljs.core.Keyword(null,"schemas","schemas",575070579);var G__35342 = expr__35339;return (pred__35338.cljs$core$IFn$_invoke$arity$2 ? pred__35338.cljs$core$IFn$_invoke$arity$2(G__35341,G__35342) : pred__35338.call(null,G__35341,G__35342));
})()))
{return (new schema.core.Either(G__35334,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35334),null));
}
});
schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35334){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.Either(self__.schemas,G__35334,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
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
var G__35344 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__35344;
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
schema.core.Either.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});
schema.core.Either.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/Either");
});
schema.core.__GT_Either = (function __GT_Either(schemas){return (new schema.core.Either(schemas));
});
schema.core.map__GT_Either = (function map__GT_Either(G__35336){return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__35336),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35336,new cljs.core.Keyword(null,"schemas","schemas",575070579))));
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
either.cljs$lang$applyTo = (function (arglist__35345){
var schemas = cljs.core.seq(arglist__35345);
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
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35347,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35349 = (((k35347 instanceof cljs.core.Keyword))?k35347.fqn:null);switch (G__35349) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35347,else__20414__auto__);

}
});
schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.Both{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35346){var self__ = this;
var this__20418__auto____$1 = this;var pred__35350 = cljs.core.keyword_identical_QMARK_;var expr__35351 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35353 = new cljs.core.Keyword(null,"schemas","schemas",575070579);var G__35354 = expr__35351;return (pred__35350.cljs$core$IFn$_invoke$arity$2 ? pred__35350.cljs$core$IFn$_invoke$arity$2(G__35353,G__35354) : pred__35350.call(null,G__35353,G__35354));
})()))
{return (new schema.core.Both(G__35346,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35346),null));
}
});
schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35346){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.Both(self__.schemas,G__35346,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
schema.core.Both.prototype.schema$core$Schema$ = true;
schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){if(schema.utils.error_QMARK_(x__$1))
{return x__$1;
} else
{var G__35355 = x__$1;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__35355) : sub_walker.call(null,G__35355));
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
schema.core.Both.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});
schema.core.Both.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/Both");
});
schema.core.__GT_Both = (function __GT_Both(schemas){return (new schema.core.Both(schemas));
});
schema.core.map__GT_Both = (function map__GT_Both(G__35348){return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__35348),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35348,new cljs.core.Keyword(null,"schemas","schemas",575070579))));
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
both.cljs$lang$applyTo = (function (arglist__35357){
var schemas = cljs.core.seq(arglist__35357);
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
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35359,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35361 = (((k35359 instanceof cljs.core.Keyword))?k35359.fqn:null);switch (G__35361) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35359,else__20414__auto__);

}
});
schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35358){var self__ = this;
var this__20418__auto____$1 = this;var pred__35362 = cljs.core.keyword_identical_QMARK_;var expr__35363 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35365 = new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355);var G__35366 = expr__35363;return (pred__35362.cljs$core$IFn$_invoke$arity$2 ? pred__35362.cljs$core$IFn$_invoke$arity$2(G__35365,G__35366) : pred__35362.call(null,G__35365,G__35366));
})()))
{return (new schema.core.ConditionalSchema(G__35358,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35358),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35358){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__35358,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;
schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__35367){var vec__35368 = p__35367;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35368,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35368,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);return ((function (preds_and_walkers,this$__$1){
return (function (x){var temp__4124__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__35369){var vec__35370 = p__35369;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35370,(0),null);var G__35371 = x;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__35371) : pred.call(null,G__35371));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));if(cljs.core.truth_(temp__4124__auto__))
{var vec__35372 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(0),null);var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(1),null);var G__35373 = x;return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__35373) : match.call(null,G__35373));
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
return (function (p__35374){var vec__35375 = p__35374;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});
schema.core.ConditionalSchema.cljs$lang$type = true;
schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});
schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/ConditionalSchema");
});
schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){return (new schema.core.ConditionalSchema(preds_and_schemas));
});
schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__35360){return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__35360),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35360,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355))));
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
return (new schema.core.ConditionalSchema((function (){var iter__20662__auto__ = (function iter__35387(s__35388){return (new cljs.core.LazySeq(null,(function (){var s__35388__$1 = s__35388;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35388__$1);if(temp__4126__auto__)
{var s__35388__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35388__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35388__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35390 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35389 = (0);while(true){
if((i__35389 < size__20661__auto__))
{var vec__35395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35389);var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35395,(1),null);cljs.core.chunk_append(b__35390,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null));
{
var G__35397 = (i__35389 + (1));
i__35389 = G__35397;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35390),iter__35387(cljs.core.chunk_rest(s__35388__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35390),null);
}
} else
{var vec__35396 = cljs.core.first(s__35388__$2);var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null),iter__35387(cljs.core.rest(s__35388__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()));
};
var conditional = function (var_args){
var preds_and_schemas = null;if (arguments.length > 0) {
  preds_and_schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__35398){
var preds_and_schemas = cljs.core.seq(arglist__35398);
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
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35400,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35402 = (((k35400 instanceof cljs.core.Keyword))?k35400.fqn:null);switch (G__35402) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35400,else__20414__auto__);

}
});
schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.RequiredKey{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35399){var self__ = this;
var this__20418__auto____$1 = this;var pred__35403 = cljs.core.keyword_identical_QMARK_;var expr__35404 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35406 = new cljs.core.Keyword(null,"k","k",-2146297393);var G__35407 = expr__35404;return (pred__35403.cljs$core$IFn$_invoke$arity$2 ? pred__35403.cljs$core$IFn$_invoke$arity$2(G__35406,G__35407) : pred__35403.call(null,G__35406,G__35407));
})()))
{return (new schema.core.RequiredKey(G__35399,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35399),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35399){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,G__35399,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
schema.core.RequiredKey.cljs$lang$type = true;
schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});
schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/RequiredKey");
});
schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){return (new schema.core.RequiredKey(k));
});
schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__35401){return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__35401),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35401,new cljs.core.Keyword(null,"k","k",-2146297393))));
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
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35410,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35412 = (((k35410 instanceof cljs.core.Keyword))?k35410.fqn:null);switch (G__35412) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35410,else__20414__auto__);

}
});
schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.OptionalKey{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35409){var self__ = this;
var this__20418__auto____$1 = this;var pred__35413 = cljs.core.keyword_identical_QMARK_;var expr__35414 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35416 = new cljs.core.Keyword(null,"k","k",-2146297393);var G__35417 = expr__35414;return (pred__35413.cljs$core$IFn$_invoke$arity$2 ? pred__35413.cljs$core$IFn$_invoke$arity$2(G__35416,G__35417) : pred__35413.call(null,G__35416,G__35417));
})()))
{return (new schema.core.OptionalKey(G__35409,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35409),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35409){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,G__35409,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
schema.core.OptionalKey.cljs$lang$type = true;
schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});
schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/OptionalKey");
});
schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){return (new schema.core.OptionalKey(k));
});
schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__35411){return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__35411),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35411,new cljs.core.Keyword(null,"k","k",-2146297393))));
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
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35420,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35422 = (((k35420 instanceof cljs.core.Keyword))?k35420.fqn:null);switch (G__35422) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35420,else__20414__auto__);

}
});
schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.MapEntry{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kspec","kspec",-1151232248),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35419){var self__ = this;
var this__20418__auto____$1 = this;var pred__35423 = cljs.core.keyword_identical_QMARK_;var expr__35424 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35426 = new cljs.core.Keyword(null,"kspec","kspec",-1151232248);var G__35427 = expr__35424;return (pred__35423.cljs$core$IFn$_invoke$arity$2 ? pred__35423.cljs$core$IFn$_invoke$arity$2(G__35426,G__35427) : pred__35423.call(null,G__35426,G__35427));
})()))
{return (new schema.core.MapEntry(G__35419,self__.val_schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__35428 = new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619);var G__35429 = expr__35424;return (pred__35423.cljs$core$IFn$_invoke$arity$2 ? pred__35423.cljs$core$IFn$_invoke$arity$2(G__35428,G__35429) : pred__35423.call(null,G__35428,G__35429));
})()))
{return (new schema.core.MapEntry(self__.kspec,G__35419,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35419),null));
}
}
});
schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35419){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__35419,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
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
{var vec__35430 = x;var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35430,(0),null);var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35430,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0))))));
}
var vres = (function (){var G__35431 = xv;return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__35431) : val_walker.call(null,G__35431));
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
{var out_k = (function (){var G__35432 = cljs.core.key(x);return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__35432) : key_walker.call(null,G__35432));
})();var out_ke = schema.utils.error_val(out_k);var out_v = (function (){var G__35433 = cljs.core.val(x);return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__35433) : val_walker.call(null,G__35433));
})();var out_ve = schema.utils.error_val(out_v);if(cljs.core.truth_((function (){var or__19267__auto__ = out_ke;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return out_ve;
}
})()))
{return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__19267__auto__ = out_ke;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.key(x);
}
})(),(function (){var or__19267__auto__ = out_ve;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
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
schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});
schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/MapEntry");
});
schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__35421){return (new schema.core.MapEntry(new cljs.core.Keyword(null,"kspec","kspec",-1151232248).cljs$core$IFn$_invoke$arity$1(G__35421),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__35421),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35421,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),cljs.core.array_seq([new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], 0))));
});
schema.core.map_entry = (function map_entry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));if((cljs.core.count(key_schemata) < (2)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}
return cljs.core.first(key_schemata);
});
schema.core.map_walker = (function map_walker(map_schema){var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20662__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__35457(s__35458){return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){var s__35458__$1 = s__35458;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35458__$1);if(temp__4126__auto__)
{var s__35458__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35458__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35458__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35460 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35459 = (0);while(true){
if((i__35459 < size__20661__auto__))
{var vec__35465 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35459);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35465,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35465,(1),null);cljs.core.chunk_append(b__35460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));
{
var G__35478 = (i__35459 + (1));
i__35459 = G__35478;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35460),iter__35457(cljs.core.chunk_rest(s__35458__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35460),null);
}
} else
{var vec__35466 = cljs.core.first(s__35458__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__35457(cljs.core.rest(s__35458__$2)));
}
} else
{return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;return iter__20662__auto__(explicit_schema);
})());var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__35435_SHARP_){return (cljs.core.count(p1__35435_SHARP_) > (1));
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
return (function (out__$1,e){var G__35467 = out__$1;var G__35468 = (function (){var G__35469 = e;return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__35469) : extra_walker.call(null,G__35469));
})();return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35467,G__35468) : err_conj.call(null,G__35467,G__35468));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__35470){var vec__35471 = p__35470;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35471,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35471,(1),null);var G__35472 = out__$1;var G__35473 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35472,G__35473) : err_conj.call(null,G__35472,G__35473));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,x__$1);
} else
{var vec__35474 = cljs.core.first(explicit_walkers__$1);var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35474,(0),null);var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35474,(1),null);{
var G__35479 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x__$1,wk);
var G__35480 = cljs.core.next(explicit_walkers__$1);
var G__35481 = (function (){var G__35475 = out;var G__35476 = (function (){var G__35477 = (function (){var or__19267__auto__ = cljs.core.find(x__$1,wk);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return schema.core._PLUS_missing_PLUS_;
}
})();return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__35477) : wv.call(null,G__35477));
})();return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35475,G__35476) : err_conj.call(null,G__35475,G__35476));
})();
x__$1 = G__35479;
explicit_walkers__$1 = G__35480;
out = G__35481;
continue;
}
}
break;
}
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20662__auto__ = (function iter__35492(s__35493){return (new cljs.core.LazySeq(null,(function (){var s__35493__$1 = s__35493;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35493__$1);if(temp__4126__auto__)
{var s__35493__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35493__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35493__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35495 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35494 = (0);while(true){
if((i__35494 < size__20661__auto__))
{var vec__35500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35494);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500,(1),null);cljs.core.chunk_append(b__35495,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));
{
var G__35502 = (i__35494 + (1));
i__35494 = G__35502;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35495),iter__35492(cljs.core.chunk_rest(s__35493__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35495),null);
}
} else
{var vec__35501 = cljs.core.first(s__35493__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35501,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35501,(1),null);return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__35492(cljs.core.rest(s__35493__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(this$);
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
return (function (x){var or__19267__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var vec__35503 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503,(0),null);var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503,(1),null);if(cljs.core.seq(bad))
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
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35505,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35507 = (((k35505 instanceof cljs.core.Keyword))?k35505.fqn:null);switch (G__35507) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35505,else__20414__auto__);

}
});
schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.One{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35504){var self__ = this;
var this__20418__auto____$1 = this;var pred__35508 = cljs.core.keyword_identical_QMARK_;var expr__35509 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35511 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__35512 = expr__35509;return (pred__35508.cljs$core$IFn$_invoke$arity$2 ? pred__35508.cljs$core$IFn$_invoke$arity$2(G__35511,G__35512) : pred__35508.call(null,G__35511,G__35512));
})()))
{return (new schema.core.One(G__35504,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__35513 = new cljs.core.Keyword(null,"optional?","optional?",1184638129);var G__35514 = expr__35509;return (pred__35508.cljs$core$IFn$_invoke$arity$2 ? pred__35508.cljs$core$IFn$_invoke$arity$2(G__35513,G__35514) : pred__35508.call(null,G__35513,G__35514));
})()))
{return (new schema.core.One(self__.schema,G__35504,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__35515 = new cljs.core.Keyword(null,"name","name",1843675177);var G__35516 = expr__35509;return (pred__35508.cljs$core$IFn$_invoke$arity$2 ? pred__35508.cljs$core$IFn$_invoke$arity$2(G__35515,G__35516) : pred__35508.call(null,G__35515,G__35516));
})()))
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__35504,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35504),null));
}
}
}
});
schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35504){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__35504,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
schema.core.One.cljs$lang$type = true;
schema.core.One.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});
schema.core.One.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/One");
});
schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){return (new schema.core.One(schema__$1,optional_QMARK_,name));
});
schema.core.map__GT_One = (function map__GT_One(G__35506){return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__35506),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__35506),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__35506),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35506,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], 0))));
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
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){var vec__35523 = cljs.core.split_with((function (p1__35518_SHARP_){return ((p1__35518_SHARP_ instanceof schema.core.One)) && (cljs.core.not(new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__35518_SHARP_)));
}),s);var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35523,(0),null);var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35523,(1),null);var vec__35524 = cljs.core.split_with(((function (vec__35523,required,more){
return (function (p1__35519_SHARP_){var and__19255__auto__ = (p1__35519_SHARP_ instanceof schema.core.One);if(and__19255__auto__)
{return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__35519_SHARP_);
} else
{return and__19255__auto__;
}
});})(vec__35523,required,more))
,more);var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(0),null);var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(1),null);if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__35523,required,more,vec__35524,optional,more__$1){
return (function (p1__35520_SHARP_){return !((p1__35520_SHARP_ instanceof schema.core.One));
});})(vec__35523,required,more,vec__35524,optional,more__$1))
,more__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;
cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;var vec__35525 = schema.core.parse_sequence_schema(this$__$1);var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525,(0),null);var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35525,(1),null);var single_walkers = cljs.core.vec((function (){var iter__20662__auto__ = ((function (vec__35525,singles,multi,this$__$1){
return (function iter__35526(s__35527){return (new cljs.core.LazySeq(null,((function (vec__35525,singles,multi,this$__$1){
return (function (){var s__35527__$1 = s__35527;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35527__$1);if(temp__4126__auto__)
{var s__35527__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35527__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35527__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35529 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35528 = (0);while(true){
if((i__35528 < size__20661__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35528);cljs.core.chunk_append(b__35529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));
{
var G__35557 = (i__35528 + (1));
i__35528 = G__35557;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35529),iter__35526(cljs.core.chunk_rest(s__35527__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35529),null);
}
} else
{var s = cljs.core.first(s__35527__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__35526(cljs.core.rest(s__35527__$2)));
}
} else
{return null;
}
break;
}
});})(vec__35525,singles,multi,this$__$1))
,null,null));
});})(vec__35525,singles,multi,this$__$1))
;return iter__20662__auto__(singles);
})());var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);var err_conj = schema.utils.result_builder(((function (vec__35525,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__35525,singles,multi,single_walkers,multi_walker,this$__$1))
);return ((function (vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){var or__19267__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var single_walkers__$1 = single_walkers;var x__$1 = x;var out = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(single_walkers__$1);if(cljs.core.truth_(temp__4124__auto__))
{var vec__35532 = temp__4124__auto__;var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(0),null);var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(1),null);if(cljs.core.empty_QMARK_(x__$1))
{if(cljs.core.truth_(first_single.optional_QMARK_))
{return out;
} else
{var G__35533 = out;var G__35534 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__35533,vec__35532,first_single,single_walker,temp__4124__auto__,or__19267__auto__,vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__20662__auto__ = ((function (single_walkers__$1,x__$1,out,G__35533,vec__35532,first_single,single_walker,temp__4124__auto__,or__19267__auto__,vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__35535(s__35536){return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__35533,vec__35532,first_single,single_walker,temp__4124__auto__,or__19267__auto__,vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){var s__35536__$1 = s__35536;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35536__$1);if(temp__4126__auto__)
{var s__35536__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35536__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35536__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35538 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35537 = (0);while(true){
if((i__35537 < size__20661__auto__))
{var vec__35543 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35537);var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35543,(0),null);if(cljs.core.not(single.optional_QMARK_))
{cljs.core.chunk_append(b__35538,single.name);
{
var G__35558 = (i__35537 + (1));
i__35537 = G__35558;
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
{return cljs.core.chunk_cons(cljs.core.chunk(b__35538),iter__35535(cljs.core.chunk_rest(s__35536__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35538),null);
}
} else
{var vec__35544 = cljs.core.first(s__35536__$2);var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35544,(0),null);if(cljs.core.not(single.optional_QMARK_))
{return cljs.core.cons(single.name,iter__35535(cljs.core.rest(s__35536__$2)));
} else
{return null;
}
}
} else
{return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__35533,vec__35532,first_single,single_walker,temp__4124__auto__,or__19267__auto__,vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__35533,vec__35532,first_single,single_walker,temp__4124__auto__,or__19267__auto__,vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;return iter__20662__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__35533,vec__35532,first_single,single_walker,temp__4124__auto__,or__19267__auto__,vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35533,G__35534) : err_conj.call(null,G__35533,G__35534));
}
} else
{{
var G__35559 = cljs.core.next(single_walkers__$1);
var G__35560 = cljs.core.rest(x__$1);
var G__35561 = (function (){var G__35545 = out;var G__35546 = schema.utils.wrap_error_name(first_single.name,(function (){var G__35547 = cljs.core.first(x__$1);return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__35547) : single_walker.call(null,G__35547));
})());return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35545,G__35546) : err_conj.call(null,G__35545,G__35546));
})();
single_walkers__$1 = G__35559;
x__$1 = G__35560;
out = G__35561;
continue;
}
}
} else
{if(cljs.core.truth_(multi))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else
{if(cljs.core.seq(x__$1))
{var G__35548 = out;var G__35549 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__35548,temp__4124__auto__,or__19267__auto__,vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__35548,temp__4124__auto__,or__19267__auto__,vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35548,G__35549) : err_conj.call(null,G__35548,G__35549));
} else
{return out;

}
}
}
break;
}
}
});
;})(vec__35525,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});
cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;var vec__35550 = schema.core.parse_sequence_schema(this$__$1);var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35550,(0),null);var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35550,(1),null);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__20662__auto__ = ((function (vec__35550,singles,multi,this$__$1){
return (function iter__35551(s__35552){return (new cljs.core.LazySeq(null,((function (vec__35550,singles,multi,this$__$1){
return (function (){var s__35552__$1 = s__35552;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35552__$1);if(temp__4126__auto__)
{var s__35552__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35552__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35552__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35554 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35553 = (0);while(true){
if((i__35553 < size__20661__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35553);cljs.core.chunk_append(b__35554,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));
{
var G__35562 = (i__35553 + (1));
i__35553 = G__35562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35554),iter__35551(cljs.core.chunk_rest(s__35552__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35554),null);
}
} else
{var s = cljs.core.first(s__35552__$2);return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__35551(cljs.core.rest(s__35552__$2)));
}
} else
{return null;
}
break;
}
});})(vec__35550,singles,multi,this$__$1))
,null,null));
});})(vec__35550,singles,multi,this$__$1))
;return iter__20662__auto__(singles);
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
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35564,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35566 = (((k35564 instanceof cljs.core.Keyword))?k35564.fqn:null);switch (G__35566) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35564,else__20414__auto__);

}
});
schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.Record{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35563){var self__ = this;
var this__20418__auto____$1 = this;var pred__35567 = cljs.core.keyword_identical_QMARK_;var expr__35568 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35570 = new cljs.core.Keyword(null,"klass","klass",-1386752349);var G__35571 = expr__35568;return (pred__35567.cljs$core$IFn$_invoke$arity$2 ? pred__35567.cljs$core$IFn$_invoke$arity$2(G__35570,G__35571) : pred__35567.call(null,G__35570,G__35571));
})()))
{return (new schema.core.Record(G__35563,self__.schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__35572 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__35573 = expr__35568;return (pred__35567.cljs$core$IFn$_invoke$arity$2 ? pred__35567.cljs$core$IFn$_invoke$arity$2(G__35572,G__35573) : pred__35567.call(null,G__35572,G__35573));
})()))
{return (new schema.core.Record(self__.klass,G__35563,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35563),null));
}
}
});
schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35563){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,G__35563,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
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
return (function (r){var or__19267__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var res = (function (){var G__35574 = r;return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__35574) : map_checker.call(null,G__35574));
})();if(schema.utils.error_QMARK_(res))
{return res;
} else
{var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__35575 = r;return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__35575) : pred_checker.call(null,G__35575));
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
schema.core.Record.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});
schema.core.Record.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/Record");
});
schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){return (new schema.core.Record(klass,schema__$1));
});
schema.core.map__GT_Record = (function map__GT_Record(G__35565){return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__35565),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__35565),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35565,new cljs.core.Keyword(null,"klass","klass",-1386752349),cljs.core.array_seq([new cljs.core.Keyword(null,"schema","schema",-1582001791)], 0))));
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
schema.core.explain_input_schema = (function explain_input_schema(input_schema){var vec__35580 = cljs.core.split_with((function (p1__35577_SHARP_){return (p1__35577_SHARP_ instanceof schema.core.One);
}),input_schema);var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580,(0),null);var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580,(1),null);return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__35580,required,more){
return (function (p1__35578_SHARP_){return schema.core.explain(p1__35578_SHARP_.schema);
});})(vec__35580,required,more))
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
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k35582,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__35584 = (((k35582 instanceof cljs.core.Keyword))?k35582.fqn:null);switch (G__35584) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35582,else__20414__auto__);

}
});
schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#schema.core.FnSchema{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__35581){var self__ = this;
var this__20418__auto____$1 = this;var pred__35585 = cljs.core.keyword_identical_QMARK_;var expr__35586 = k__20419__auto__;if(cljs.core.truth_((function (){var G__35588 = new cljs.core.Keyword(null,"output-schema","output-schema",272504137);var G__35589 = expr__35586;return (pred__35585.cljs$core$IFn$_invoke$arity$2 ? pred__35585.cljs$core$IFn$_invoke$arity$2(G__35588,G__35589) : pred__35585.call(null,G__35588,G__35589));
})()))
{return (new schema.core.FnSchema(G__35581,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__35590 = new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805);var G__35591 = expr__35586;return (pred__35585.cljs$core$IFn$_invoke$arity$2 ? pred__35585.cljs$core$IFn$_invoke$arity$2(G__35590,G__35591) : pred__35585.call(null,G__35590,G__35591));
})()))
{return (new schema.core.FnSchema(self__.output_schema,G__35581,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__35581),null));
}
}
});
schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__35581){var self__ = this;
var this__20409__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__35581,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
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
schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});
schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"schema.core/FnSchema");
});
schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){return (new schema.core.FnSchema(output_schema,input_schemas));
});
schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__35583){return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__35583),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__35583),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35583,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),cljs.core.array_seq([new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], 0))));
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
var or__19267__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
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