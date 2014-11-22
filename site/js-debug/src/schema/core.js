goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('clojure.string');
goog.require('clojure.string');
schema.core.Schema = (function (){var obj44010 = {};return obj44010;
})();
schema.core.walker = (function walker(this$){if((function (){var and__19670__auto__ = this$;if(and__19670__auto__)
{return this$.schema$core$Schema$walker$arity$1;
} else
{return and__19670__auto__;
}
})())
{return this$.schema$core$Schema$walker$arity$1(this$);
} else
{var x__20728__auto__ = (((this$ == null))?null:this$);return (function (){var or__19687__auto__ = (schema.core.walker[(function (){var G__44014 = x__20728__auto__;return goog.typeOf(G__44014);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (schema.core.walker["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});
schema.core.explain = (function explain(this$){if((function (){var and__19670__auto__ = this$;if(and__19670__auto__)
{return this$.schema$core$Schema$explain$arity$1;
} else
{return and__19670__auto__;
}
})())
{return this$.schema$core$Schema$explain$arity$1(this$);
} else
{var x__20728__auto__ = (((this$ == null))?null:this$);return (function (){var or__19687__auto__ = (schema.core.explain[(function (){var G__44018 = x__20728__auto__;return goog.typeOf(G__44018);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (schema.core.explain["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
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
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){var subschema_walker44020 = schema.core.subschema_walker;try{schema.core.subschema_walker = sub_walker;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker44020;
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
schema.core.validate = (function validate(schema__$1,value){var temp__4126__auto___44021 = schema.core.check(schema__$1,value);if(cljs.core.truth_(temp__4126__auto___44021))
{var error_44022 = temp__4126__auto___44021;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_44022], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_44022], null));
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
return (function (x){var or__19687__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__19687__auto__ = (this$ === x.constructor);if(or__19687__auto__)
{return or__19687__auto__;
} else
{return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{var G__44023 = x;return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__44023) : class_walker.call(null,G__44023));
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
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44025,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44027 = (((k44025 instanceof cljs.core.Keyword))?k44025.fqn:null);switch (G__44027) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44025,else__20653__auto__);

}
});
schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.AnythingSchema{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44024){var self__ = this;
var this__20657__auto____$1 = this;var pred__44028 = cljs.core.keyword_identical_QMARK_;var expr__44029 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44031 = new cljs.core.Keyword(null,"_","_",1453416199);var G__44032 = expr__44029;return (pred__44028.cljs$core$IFn$_invoke$arity$2 ? pred__44028.cljs$core$IFn$_invoke$arity$2(G__44031,G__44032) : pred__44028.call(null,G__44031,G__44032));
})()))
{return (new schema.core.AnythingSchema(G__44024,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44024),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44024){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,G__44024,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
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
schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});
schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/AnythingSchema");
});
schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){return (new schema.core.AnythingSchema(_));
});
schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__44026){return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__44026),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44026,new cljs.core.Keyword(null,"_","_",1453416199))));
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
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44035,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44037 = (((k44035 instanceof cljs.core.Keyword))?k44035.fqn:null);switch (G__44037) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44035,else__20653__auto__);

}
});
schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.EqSchema{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44034){var self__ = this;
var this__20657__auto____$1 = this;var pred__44038 = cljs.core.keyword_identical_QMARK_;var expr__44039 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44041 = new cljs.core.Keyword(null,"v","v",21465059);var G__44042 = expr__44039;return (pred__44038.cljs$core$IFn$_invoke$arity$2 ? pred__44038.cljs$core$IFn$_invoke$arity$2(G__44041,G__44042) : pred__44038.call(null,G__44041,G__44042));
})()))
{return (new schema.core.EqSchema(G__44034,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44034),null));
}
});
schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44034){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.EqSchema(self__.v,G__44034,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
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
schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});
schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/EqSchema");
});
schema.core.__GT_EqSchema = (function __GT_EqSchema(v){return (new schema.core.EqSchema(v));
});
schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__44036){return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__44036),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44036,new cljs.core.Keyword(null,"v","v",21465059))));
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
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44045,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44047 = (((k44045 instanceof cljs.core.Keyword))?k44045.fqn:null);switch (G__44047) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44045,else__20653__auto__);

}
});
schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.EnumSchema{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44044){var self__ = this;
var this__20657__auto____$1 = this;var pred__44048 = cljs.core.keyword_identical_QMARK_;var expr__44049 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44051 = new cljs.core.Keyword(null,"vs","vs",-2022097090);var G__44052 = expr__44049;return (pred__44048.cljs$core$IFn$_invoke$arity$2 ? pred__44048.cljs$core$IFn$_invoke$arity$2(G__44051,G__44052) : pred__44048.call(null,G__44051,G__44052));
})()))
{return (new schema.core.EnumSchema(G__44044,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44044),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44044){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,G__44044,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
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
schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});
schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/EnumSchema");
});
schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){return (new schema.core.EnumSchema(vs));
});
schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__44046){return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__44046),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44046,new cljs.core.Keyword(null,"vs","vs",-2022097090))));
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
enum$.cljs$lang$applyTo = (function (arglist__44054){
var vs = cljs.core.seq(arglist__44054);
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
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44056,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44058 = (((k44056 instanceof cljs.core.Keyword))?k44056.fqn:null);switch (G__44058) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44056,else__20653__auto__);

}
});
schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.Predicate{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44055){var self__ = this;
var this__20657__auto____$1 = this;var pred__44059 = cljs.core.keyword_identical_QMARK_;var expr__44060 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44062 = new cljs.core.Keyword(null,"p?","p?",-1172161701);var G__44063 = expr__44060;return (pred__44059.cljs$core$IFn$_invoke$arity$2 ? pred__44059.cljs$core$IFn$_invoke$arity$2(G__44062,G__44063) : pred__44059.call(null,G__44062,G__44063));
})()))
{return (new schema.core.Predicate(G__44055,self__.pred_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__44064 = new cljs.core.Keyword(null,"pred-name","pred-name",-3677451);var G__44065 = expr__44060;return (pred__44059.cljs$core$IFn$_invoke$arity$2 ? pred__44059.cljs$core$IFn$_invoke$arity$2(G__44064,G__44065) : pred__44059.call(null,G__44064,G__44065));
})()))
{return (new schema.core.Predicate(self__.p_QMARK_,G__44055,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44055),null));
}
}
});
schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44055){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__44055,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.core.Predicate.prototype.schema$core$Schema$ = true;
schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){var temp__4124__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__44067 = x;return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__44067) : self__.p_QMARK_.call(null,G__44067));
})()))
{return null;
} else
{return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e44066){if((e44066 instanceof Object))
{var e = e44066;return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else
{throw e44066;

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
schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});
schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/Predicate");
});
schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){return (new schema.core.Predicate(p_QMARK_,pred_name));
});
schema.core.map__GT_Predicate = (function map__GT_Predicate(G__44057){return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__44057),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__44057),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44057,new cljs.core.Keyword(null,"p?","p?",-1172161701),cljs.core.array_seq([new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], 0))));
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
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44072,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44074 = (((k44072 instanceof cljs.core.Keyword))?k44072.fqn:null);switch (G__44074) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44072,else__20653__auto__);

}
});
schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.Protocol{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44071){var self__ = this;
var this__20657__auto____$1 = this;var pred__44075 = cljs.core.keyword_identical_QMARK_;var expr__44076 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44078 = new cljs.core.Keyword(null,"p","p",151049309);var G__44079 = expr__44076;return (pred__44075.cljs$core$IFn$_invoke$arity$2 ? pred__44075.cljs$core$IFn$_invoke$arity$2(G__44078,G__44079) : pred__44075.call(null,G__44078,G__44079));
})()))
{return (new schema.core.Protocol(G__44071,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44071),null));
}
});
schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44071){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.Protocol(self__.p,G__44071,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
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
schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});
schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/Protocol");
});
schema.core.__GT_Protocol = (function __GT_Protocol(p){return (new schema.core.Protocol(p));
});
schema.core.map__GT_Protocol = (function map__GT_Protocol(G__44073){return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__44073),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44073,new cljs.core.Keyword(null,"p","p",151049309))));
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
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44082,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44084 = (((k44082 instanceof cljs.core.Keyword))?k44082.fqn:null);switch (G__44084) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44082,else__20653__auto__);

}
});
schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.Maybe{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44081){var self__ = this;
var this__20657__auto____$1 = this;var pred__44085 = cljs.core.keyword_identical_QMARK_;var expr__44086 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44088 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__44089 = expr__44086;return (pred__44085.cljs$core$IFn$_invoke$arity$2 ? pred__44085.cljs$core$IFn$_invoke$arity$2(G__44088,G__44089) : pred__44085.call(null,G__44088,G__44089));
})()))
{return (new schema.core.Maybe(G__44081,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44081),null));
}
});
schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44081){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.Maybe(self__.schema,G__44081,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.core.Maybe.prototype.schema$core$Schema$ = true;
schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));return ((function (sub_walker,this$__$1){
return (function (x){if((x == null))
{return null;
} else
{var G__44090 = x;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__44090) : sub_walker.call(null,G__44090));
}
});
;})(sub_walker,this$__$1))
});
schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});
schema.core.Maybe.cljs$lang$type = true;
schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});
schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/Maybe");
});
schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});
schema.core.map__GT_Maybe = (function map__GT_Maybe(G__44083){return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__44083),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44083,new cljs.core.Keyword(null,"schema","schema",-1582001791))));
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
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44093,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44095 = (((k44093 instanceof cljs.core.Keyword))?k44093.fqn:null);switch (G__44095) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44093,else__20653__auto__);

}
});
schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.NamedSchema{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44092){var self__ = this;
var this__20657__auto____$1 = this;var pred__44096 = cljs.core.keyword_identical_QMARK_;var expr__44097 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44099 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__44100 = expr__44097;return (pred__44096.cljs$core$IFn$_invoke$arity$2 ? pred__44096.cljs$core$IFn$_invoke$arity$2(G__44099,G__44100) : pred__44096.call(null,G__44099,G__44100));
})()))
{return (new schema.core.NamedSchema(G__44092,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__44101 = new cljs.core.Keyword(null,"name","name",1843675177);var G__44102 = expr__44097;return (pred__44096.cljs$core$IFn$_invoke$arity$2 ? pred__44096.cljs$core$IFn$_invoke$arity$2(G__44101,G__44102) : pred__44096.call(null,G__44101,G__44102));
})()))
{return (new schema.core.NamedSchema(self__.schema,G__44092,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44092),null));
}
}
});
schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44092){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,G__44092,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.core.NamedSchema.prototype.schema$core$Schema$ = true;
schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));return ((function (sub_walker,this$__$1){
return (function (x){return schema.utils.wrap_error_name(self__.name,(function (){var G__44103 = x;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__44103) : sub_walker.call(null,G__44103));
})());
});
;})(sub_walker,this$__$1))
});
schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
schema.core.NamedSchema.cljs$lang$type = true;
schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});
schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/NamedSchema");
});
schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});
schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__44094){return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__44094),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__44094),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44094,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"name","name",1843675177)], 0))));
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
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44106,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44108 = (((k44106 instanceof cljs.core.Keyword))?k44106.fqn:null);switch (G__44108) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44106,else__20653__auto__);

}
});
schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.Either{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44105){var self__ = this;
var this__20657__auto____$1 = this;var pred__44109 = cljs.core.keyword_identical_QMARK_;var expr__44110 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44112 = new cljs.core.Keyword(null,"schemas","schemas",575070579);var G__44113 = expr__44110;return (pred__44109.cljs$core$IFn$_invoke$arity$2 ? pred__44109.cljs$core$IFn$_invoke$arity$2(G__44112,G__44113) : pred__44109.call(null,G__44112,G__44113));
})()))
{return (new schema.core.Either(G__44105,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44105),null));
}
});
schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44105){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.Either(self__.schemas,G__44105,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
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
var G__44115 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__44115;
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
schema.core.Either.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});
schema.core.Either.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/Either");
});
schema.core.__GT_Either = (function __GT_Either(schemas){return (new schema.core.Either(schemas));
});
schema.core.map__GT_Either = (function map__GT_Either(G__44107){return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__44107),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44107,new cljs.core.Keyword(null,"schemas","schemas",575070579))));
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
either.cljs$lang$applyTo = (function (arglist__44116){
var schemas = cljs.core.seq(arglist__44116);
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
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44118,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44120 = (((k44118 instanceof cljs.core.Keyword))?k44118.fqn:null);switch (G__44120) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44118,else__20653__auto__);

}
});
schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.Both{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44117){var self__ = this;
var this__20657__auto____$1 = this;var pred__44121 = cljs.core.keyword_identical_QMARK_;var expr__44122 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44124 = new cljs.core.Keyword(null,"schemas","schemas",575070579);var G__44125 = expr__44122;return (pred__44121.cljs$core$IFn$_invoke$arity$2 ? pred__44121.cljs$core$IFn$_invoke$arity$2(G__44124,G__44125) : pred__44121.call(null,G__44124,G__44125));
})()))
{return (new schema.core.Both(G__44117,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44117),null));
}
});
schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44117){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.Both(self__.schemas,G__44117,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.core.Both.prototype.schema$core$Schema$ = true;
schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){if(schema.utils.error_QMARK_(x__$1))
{return x__$1;
} else
{var G__44126 = x__$1;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__44126) : sub_walker.call(null,G__44126));
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
schema.core.Both.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});
schema.core.Both.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/Both");
});
schema.core.__GT_Both = (function __GT_Both(schemas){return (new schema.core.Both(schemas));
});
schema.core.map__GT_Both = (function map__GT_Both(G__44119){return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__44119),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44119,new cljs.core.Keyword(null,"schemas","schemas",575070579))));
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
both.cljs$lang$applyTo = (function (arglist__44128){
var schemas = cljs.core.seq(arglist__44128);
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
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44130,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44132 = (((k44130 instanceof cljs.core.Keyword))?k44130.fqn:null);switch (G__44132) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44130,else__20653__auto__);

}
});
schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44129){var self__ = this;
var this__20657__auto____$1 = this;var pred__44133 = cljs.core.keyword_identical_QMARK_;var expr__44134 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44136 = new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355);var G__44137 = expr__44134;return (pred__44133.cljs$core$IFn$_invoke$arity$2 ? pred__44133.cljs$core$IFn$_invoke$arity$2(G__44136,G__44137) : pred__44133.call(null,G__44136,G__44137));
})()))
{return (new schema.core.ConditionalSchema(G__44129,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44129),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44129){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__44129,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;
schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__44138){var vec__44139 = p__44138;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44139,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44139,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);return ((function (preds_and_walkers,this$__$1){
return (function (x){var temp__4124__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__44140){var vec__44141 = p__44140;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44141,(0),null);var G__44142 = x;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__44142) : pred.call(null,G__44142));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));if(cljs.core.truth_(temp__4124__auto__))
{var vec__44143 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44143,(0),null);var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44143,(1),null);var G__44144 = x;return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__44144) : match.call(null,G__44144));
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
return (function (p__44145){var vec__44146 = p__44145;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44146,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44146,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});
schema.core.ConditionalSchema.cljs$lang$type = true;
schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});
schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/ConditionalSchema");
});
schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){return (new schema.core.ConditionalSchema(preds_and_schemas));
});
schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__44131){return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__44131),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44131,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355))));
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
return (new schema.core.ConditionalSchema((function (){var iter__20913__auto__ = (function iter__44158(s__44159){return (new cljs.core.LazySeq(null,(function (){var s__44159__$1 = s__44159;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44159__$1);if(temp__4126__auto__)
{var s__44159__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44159__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44159__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44161 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44160 = (0);while(true){
if((i__44160 < size__20912__auto__))
{var vec__44166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44160);var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(1),null);cljs.core.chunk_append(b__44161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null));
{
var G__44168 = (i__44160 + (1));
i__44160 = G__44168;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44161),iter__44158(cljs.core.chunk_rest(s__44159__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44161),null);
}
} else
{var vec__44167 = cljs.core.first(s__44159__$2);var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44167,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44167,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly(true):pred),schema__$1], null),iter__44158(cljs.core.rest(s__44159__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()));
};
var conditional = function (var_args){
var preds_and_schemas = null;if (arguments.length > 0) {
  preds_and_schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__44169){
var preds_and_schemas = cljs.core.seq(arglist__44169);
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
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44171,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44173 = (((k44171 instanceof cljs.core.Keyword))?k44171.fqn:null);switch (G__44173) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44171,else__20653__auto__);

}
});
schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.RequiredKey{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44170){var self__ = this;
var this__20657__auto____$1 = this;var pred__44174 = cljs.core.keyword_identical_QMARK_;var expr__44175 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44177 = new cljs.core.Keyword(null,"k","k",-2146297393);var G__44178 = expr__44175;return (pred__44174.cljs$core$IFn$_invoke$arity$2 ? pred__44174.cljs$core$IFn$_invoke$arity$2(G__44177,G__44178) : pred__44174.call(null,G__44177,G__44178));
})()))
{return (new schema.core.RequiredKey(G__44170,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44170),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44170){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,G__44170,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.core.RequiredKey.cljs$lang$type = true;
schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});
schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/RequiredKey");
});
schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){return (new schema.core.RequiredKey(k));
});
schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__44172){return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__44172),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44172,new cljs.core.Keyword(null,"k","k",-2146297393))));
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
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44181,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44183 = (((k44181 instanceof cljs.core.Keyword))?k44181.fqn:null);switch (G__44183) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44181,else__20653__auto__);

}
});
schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.OptionalKey{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44180){var self__ = this;
var this__20657__auto____$1 = this;var pred__44184 = cljs.core.keyword_identical_QMARK_;var expr__44185 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44187 = new cljs.core.Keyword(null,"k","k",-2146297393);var G__44188 = expr__44185;return (pred__44184.cljs$core$IFn$_invoke$arity$2 ? pred__44184.cljs$core$IFn$_invoke$arity$2(G__44187,G__44188) : pred__44184.call(null,G__44187,G__44188));
})()))
{return (new schema.core.OptionalKey(G__44180,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44180),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44180){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,G__44180,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.core.OptionalKey.cljs$lang$type = true;
schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});
schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/OptionalKey");
});
schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){return (new schema.core.OptionalKey(k));
});
schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__44182){return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__44182),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44182,new cljs.core.Keyword(null,"k","k",-2146297393))));
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
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44191,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44193 = (((k44191 instanceof cljs.core.Keyword))?k44191.fqn:null);switch (G__44193) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44191,else__20653__auto__);

}
});
schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.MapEntry{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kspec","kspec",-1151232248),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44190){var self__ = this;
var this__20657__auto____$1 = this;var pred__44194 = cljs.core.keyword_identical_QMARK_;var expr__44195 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44197 = new cljs.core.Keyword(null,"kspec","kspec",-1151232248);var G__44198 = expr__44195;return (pred__44194.cljs$core$IFn$_invoke$arity$2 ? pred__44194.cljs$core$IFn$_invoke$arity$2(G__44197,G__44198) : pred__44194.call(null,G__44197,G__44198));
})()))
{return (new schema.core.MapEntry(G__44190,self__.val_schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__44199 = new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619);var G__44200 = expr__44195;return (pred__44194.cljs$core$IFn$_invoke$arity$2 ? pred__44194.cljs$core$IFn$_invoke$arity$2(G__44199,G__44200) : pred__44194.call(null,G__44199,G__44200));
})()))
{return (new schema.core.MapEntry(self__.kspec,G__44190,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44190),null));
}
}
});
schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44190){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__44190,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
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
{var vec__44201 = x;var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44201,(0),null);var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44201,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0))))));
}
var vres = (function (){var G__44202 = xv;return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__44202) : val_walker.call(null,G__44202));
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
{var out_k = (function (){var G__44203 = cljs.core.key(x);return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__44203) : key_walker.call(null,G__44203));
})();var out_ke = schema.utils.error_val(out_k);var out_v = (function (){var G__44204 = cljs.core.val(x);return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__44204) : val_walker.call(null,G__44204));
})();var out_ve = schema.utils.error_val(out_v);if(cljs.core.truth_((function (){var or__19687__auto__ = out_ke;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return out_ve;
}
})()))
{return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__19687__auto__ = out_ke;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return cljs.core.key(x);
}
})(),(function (){var or__19687__auto__ = out_ve;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
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
schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});
schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/MapEntry");
});
schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__44192){return (new schema.core.MapEntry(new cljs.core.Keyword(null,"kspec","kspec",-1151232248).cljs$core$IFn$_invoke$arity$1(G__44192),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__44192),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44192,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),cljs.core.array_seq([new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], 0))));
});
schema.core.map_entry = (function map_entry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));if((cljs.core.count(key_schemata) < (2)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}
return cljs.core.first(key_schemata);
});
schema.core.map_walker = (function map_walker(map_schema){var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20913__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__44228(s__44229){return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){var s__44229__$1 = s__44229;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44229__$1);if(temp__4126__auto__)
{var s__44229__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44229__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44229__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44231 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44230 = (0);while(true){
if((i__44230 < size__20912__auto__))
{var vec__44236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44230);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(1),null);cljs.core.chunk_append(b__44231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));
{
var G__44249 = (i__44230 + (1));
i__44230 = G__44249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44231),iter__44228(cljs.core.chunk_rest(s__44229__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44231),null);
}
} else
{var vec__44237 = cljs.core.first(s__44229__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44237,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44237,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__44228(cljs.core.rest(s__44229__$2)));
}
} else
{return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;return iter__20913__auto__(explicit_schema);
})());var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__44206_SHARP_){return (cljs.core.count(p1__44206_SHARP_) > (1));
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
return (function (out__$1,e){var G__44238 = out__$1;var G__44239 = (function (){var G__44240 = e;return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__44240) : extra_walker.call(null,G__44240));
})();return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__44238,G__44239) : err_conj.call(null,G__44238,G__44239));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__44241){var vec__44242 = p__44241;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44242,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44242,(1),null);var G__44243 = out__$1;var G__44244 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__44243,G__44244) : err_conj.call(null,G__44243,G__44244));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,x__$1);
} else
{var vec__44245 = cljs.core.first(explicit_walkers__$1);var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44245,(0),null);var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44245,(1),null);{
var G__44250 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x__$1,wk);
var G__44251 = cljs.core.next(explicit_walkers__$1);
var G__44252 = (function (){var G__44246 = out;var G__44247 = (function (){var G__44248 = (function (){var or__19687__auto__ = cljs.core.find(x__$1,wk);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return schema.core._PLUS_missing_PLUS_;
}
})();return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__44248) : wv.call(null,G__44248));
})();return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__44246,G__44247) : err_conj.call(null,G__44246,G__44247));
})();
x__$1 = G__44250;
explicit_walkers__$1 = G__44251;
out = G__44252;
continue;
}
}
break;
}
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20913__auto__ = (function iter__44263(s__44264){return (new cljs.core.LazySeq(null,(function (){var s__44264__$1 = s__44264;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44264__$1);if(temp__4126__auto__)
{var s__44264__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44264__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44264__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44266 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44265 = (0);while(true){
if((i__44265 < size__20912__auto__))
{var vec__44271 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44265);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44271,(1),null);cljs.core.chunk_append(b__44266,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));
{
var G__44273 = (i__44265 + (1));
i__44265 = G__44273;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44266),iter__44263(cljs.core.chunk_rest(s__44264__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44266),null);
}
} else
{var vec__44272 = cljs.core.first(s__44264__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44272,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44272,(1),null);return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__44263(cljs.core.rest(s__44264__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(this$);
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
return (function (x){var or__19687__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{var vec__44274 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44274,(0),null);var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44274,(1),null);if(cljs.core.seq(bad))
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
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44276,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44278 = (((k44276 instanceof cljs.core.Keyword))?k44276.fqn:null);switch (G__44278) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44276,else__20653__auto__);

}
});
schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.One{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44275){var self__ = this;
var this__20657__auto____$1 = this;var pred__44279 = cljs.core.keyword_identical_QMARK_;var expr__44280 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44282 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__44283 = expr__44280;return (pred__44279.cljs$core$IFn$_invoke$arity$2 ? pred__44279.cljs$core$IFn$_invoke$arity$2(G__44282,G__44283) : pred__44279.call(null,G__44282,G__44283));
})()))
{return (new schema.core.One(G__44275,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__44284 = new cljs.core.Keyword(null,"optional?","optional?",1184638129);var G__44285 = expr__44280;return (pred__44279.cljs$core$IFn$_invoke$arity$2 ? pred__44279.cljs$core$IFn$_invoke$arity$2(G__44284,G__44285) : pred__44279.call(null,G__44284,G__44285));
})()))
{return (new schema.core.One(self__.schema,G__44275,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__44286 = new cljs.core.Keyword(null,"name","name",1843675177);var G__44287 = expr__44280;return (pred__44279.cljs$core$IFn$_invoke$arity$2 ? pred__44279.cljs$core$IFn$_invoke$arity$2(G__44286,G__44287) : pred__44279.call(null,G__44286,G__44287));
})()))
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__44275,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44275),null));
}
}
}
});
schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44275){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__44275,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
schema.core.One.cljs$lang$type = true;
schema.core.One.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});
schema.core.One.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/One");
});
schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){return (new schema.core.One(schema__$1,optional_QMARK_,name));
});
schema.core.map__GT_One = (function map__GT_One(G__44277){return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__44277),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__44277),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__44277),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44277,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.array_seq([new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], 0))));
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
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){var vec__44294 = cljs.core.split_with((function (p1__44289_SHARP_){return ((p1__44289_SHARP_ instanceof schema.core.One)) && (cljs.core.not(new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__44289_SHARP_)));
}),s);var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44294,(0),null);var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44294,(1),null);var vec__44295 = cljs.core.split_with(((function (vec__44294,required,more){
return (function (p1__44290_SHARP_){var and__19670__auto__ = (p1__44290_SHARP_ instanceof schema.core.One);if(and__19670__auto__)
{return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__44290_SHARP_);
} else
{return and__19670__auto__;
}
});})(vec__44294,required,more))
,more);var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44295,(0),null);var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44295,(1),null);if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__44294,required,more,vec__44295,optional,more__$1){
return (function (p1__44291_SHARP_){return !((p1__44291_SHARP_ instanceof schema.core.One));
});})(vec__44294,required,more,vec__44295,optional,more__$1))
,more__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;
cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;var vec__44296 = schema.core.parse_sequence_schema(this$__$1);var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44296,(0),null);var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44296,(1),null);var single_walkers = cljs.core.vec((function (){var iter__20913__auto__ = ((function (vec__44296,singles,multi,this$__$1){
return (function iter__44297(s__44298){return (new cljs.core.LazySeq(null,((function (vec__44296,singles,multi,this$__$1){
return (function (){var s__44298__$1 = s__44298;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44298__$1);if(temp__4126__auto__)
{var s__44298__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44298__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44298__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44300 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44299 = (0);while(true){
if((i__44299 < size__20912__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44299);cljs.core.chunk_append(b__44300,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));
{
var G__44328 = (i__44299 + (1));
i__44299 = G__44328;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44300),iter__44297(cljs.core.chunk_rest(s__44298__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44300),null);
}
} else
{var s = cljs.core.first(s__44298__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__44297(cljs.core.rest(s__44298__$2)));
}
} else
{return null;
}
break;
}
});})(vec__44296,singles,multi,this$__$1))
,null,null));
});})(vec__44296,singles,multi,this$__$1))
;return iter__20913__auto__(singles);
})());var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);var err_conj = schema.utils.result_builder(((function (vec__44296,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__44296,singles,multi,single_walkers,multi_walker,this$__$1))
);return ((function (vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){var or__19687__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{var single_walkers__$1 = single_walkers;var x__$1 = x;var out = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(single_walkers__$1);if(cljs.core.truth_(temp__4124__auto__))
{var vec__44303 = temp__4124__auto__;var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(0),null);var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(1),null);if(cljs.core.empty_QMARK_(x__$1))
{if(cljs.core.truth_(first_single.optional_QMARK_))
{return out;
} else
{var G__44304 = out;var G__44305 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__44304,vec__44303,first_single,single_walker,temp__4124__auto__,or__19687__auto__,vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__20913__auto__ = ((function (single_walkers__$1,x__$1,out,G__44304,vec__44303,first_single,single_walker,temp__4124__auto__,or__19687__auto__,vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__44306(s__44307){return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__44304,vec__44303,first_single,single_walker,temp__4124__auto__,or__19687__auto__,vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){var s__44307__$1 = s__44307;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44307__$1);if(temp__4126__auto__)
{var s__44307__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44307__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44307__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44309 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44308 = (0);while(true){
if((i__44308 < size__20912__auto__))
{var vec__44314 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44308);var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44314,(0),null);if(cljs.core.not(single.optional_QMARK_))
{cljs.core.chunk_append(b__44309,single.name);
{
var G__44329 = (i__44308 + (1));
i__44308 = G__44329;
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
{return cljs.core.chunk_cons(cljs.core.chunk(b__44309),iter__44306(cljs.core.chunk_rest(s__44307__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44309),null);
}
} else
{var vec__44315 = cljs.core.first(s__44307__$2);var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44315,(0),null);if(cljs.core.not(single.optional_QMARK_))
{return cljs.core.cons(single.name,iter__44306(cljs.core.rest(s__44307__$2)));
} else
{return null;
}
}
} else
{return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__44304,vec__44303,first_single,single_walker,temp__4124__auto__,or__19687__auto__,vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__44304,vec__44303,first_single,single_walker,temp__4124__auto__,or__19687__auto__,vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;return iter__20913__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__44304,vec__44303,first_single,single_walker,temp__4124__auto__,or__19687__auto__,vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__44304,G__44305) : err_conj.call(null,G__44304,G__44305));
}
} else
{{
var G__44330 = cljs.core.next(single_walkers__$1);
var G__44331 = cljs.core.rest(x__$1);
var G__44332 = (function (){var G__44316 = out;var G__44317 = schema.utils.wrap_error_name(first_single.name,(function (){var G__44318 = cljs.core.first(x__$1);return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__44318) : single_walker.call(null,G__44318));
})());return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__44316,G__44317) : err_conj.call(null,G__44316,G__44317));
})();
single_walkers__$1 = G__44330;
x__$1 = G__44331;
out = G__44332;
continue;
}
}
} else
{if(cljs.core.truth_(multi))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else
{if(cljs.core.seq(x__$1))
{var G__44319 = out;var G__44320 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__44319,temp__4124__auto__,or__19687__auto__,vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__44319,temp__4124__auto__,or__19687__auto__,vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__44319,G__44320) : err_conj.call(null,G__44319,G__44320));
} else
{return out;

}
}
}
break;
}
}
});
;})(vec__44296,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});
cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;var vec__44321 = schema.core.parse_sequence_schema(this$__$1);var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44321,(0),null);var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44321,(1),null);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__20913__auto__ = ((function (vec__44321,singles,multi,this$__$1){
return (function iter__44322(s__44323){return (new cljs.core.LazySeq(null,((function (vec__44321,singles,multi,this$__$1){
return (function (){var s__44323__$1 = s__44323;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44323__$1);if(temp__4126__auto__)
{var s__44323__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44323__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44323__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44325 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44324 = (0);while(true){
if((i__44324 < size__20912__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44324);cljs.core.chunk_append(b__44325,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));
{
var G__44333 = (i__44324 + (1));
i__44324 = G__44333;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44325),iter__44322(cljs.core.chunk_rest(s__44323__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44325),null);
}
} else
{var s = cljs.core.first(s__44323__$2);return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__44322(cljs.core.rest(s__44323__$2)));
}
} else
{return null;
}
break;
}
});})(vec__44321,singles,multi,this$__$1))
,null,null));
});})(vec__44321,singles,multi,this$__$1))
;return iter__20913__auto__(singles);
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
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44335,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44337 = (((k44335 instanceof cljs.core.Keyword))?k44335.fqn:null);switch (G__44337) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44335,else__20653__auto__);

}
});
schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.Record{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44334){var self__ = this;
var this__20657__auto____$1 = this;var pred__44338 = cljs.core.keyword_identical_QMARK_;var expr__44339 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44341 = new cljs.core.Keyword(null,"klass","klass",-1386752349);var G__44342 = expr__44339;return (pred__44338.cljs$core$IFn$_invoke$arity$2 ? pred__44338.cljs$core$IFn$_invoke$arity$2(G__44341,G__44342) : pred__44338.call(null,G__44341,G__44342));
})()))
{return (new schema.core.Record(G__44334,self__.schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__44343 = new cljs.core.Keyword(null,"schema","schema",-1582001791);var G__44344 = expr__44339;return (pred__44338.cljs$core$IFn$_invoke$arity$2 ? pred__44338.cljs$core$IFn$_invoke$arity$2(G__44343,G__44344) : pred__44338.call(null,G__44343,G__44344));
})()))
{return (new schema.core.Record(self__.klass,G__44334,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44334),null));
}
}
});
schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44334){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,G__44334,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
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
return (function (r){var or__19687__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{var res = (function (){var G__44345 = r;return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__44345) : map_checker.call(null,G__44345));
})();if(schema.utils.error_QMARK_(res))
{return res;
} else
{var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__44346 = r;return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__44346) : pred_checker.call(null,G__44346));
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
schema.core.Record.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});
schema.core.Record.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/Record");
});
schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){return (new schema.core.Record(klass,schema__$1));
});
schema.core.map__GT_Record = (function map__GT_Record(G__44336){return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__44336),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__44336),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44336,new cljs.core.Keyword(null,"klass","klass",-1386752349),cljs.core.array_seq([new cljs.core.Keyword(null,"schema","schema",-1582001791)], 0))));
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
schema.core.explain_input_schema = (function explain_input_schema(input_schema){var vec__44351 = cljs.core.split_with((function (p1__44348_SHARP_){return (p1__44348_SHARP_ instanceof schema.core.One);
}),input_schema);var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44351,(0),null);var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44351,(1),null);return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__44351,required,more){
return (function (p1__44349_SHARP_){return schema.core.explain(p1__44349_SHARP_.schema);
});})(vec__44351,required,more))
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
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k44353,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__44355 = (((k44353 instanceof cljs.core.Keyword))?k44353.fqn:null);switch (G__44355) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44353,else__20653__auto__);

}
});
schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#schema.core.FnSchema{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
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
schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__44352){var self__ = this;
var this__20657__auto____$1 = this;var pred__44356 = cljs.core.keyword_identical_QMARK_;var expr__44357 = k__20658__auto__;if(cljs.core.truth_((function (){var G__44359 = new cljs.core.Keyword(null,"output-schema","output-schema",272504137);var G__44360 = expr__44357;return (pred__44356.cljs$core$IFn$_invoke$arity$2 ? pred__44356.cljs$core$IFn$_invoke$arity$2(G__44359,G__44360) : pred__44356.call(null,G__44359,G__44360));
})()))
{return (new schema.core.FnSchema(G__44352,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__44361 = new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805);var G__44362 = expr__44357;return (pred__44356.cljs$core$IFn$_invoke$arity$2 ? pred__44356.cljs$core$IFn$_invoke$arity$2(G__44361,G__44362) : pred__44356.call(null,G__44361,G__44362));
})()))
{return (new schema.core.FnSchema(self__.output_schema,G__44352,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__44352),null));
}
}
});
schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__44352){var self__ = this;
var this__20649__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__44352,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
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
schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});
schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"schema.core/FnSchema");
});
schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){return (new schema.core.FnSchema(output_schema,input_schemas));
});
schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__44354){return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__44354),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__44354),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44354,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),cljs.core.array_seq([new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], 0))));
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
var or__19687__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
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