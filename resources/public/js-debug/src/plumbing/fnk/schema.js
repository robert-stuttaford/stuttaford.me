goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__867__868__auto__){var G__46227 = p1__867__868__auto__;if(G__46227)
{var bit__20605__auto__ = null;if(cljs.core.truth_((function (){var or__19289__auto__ = bit__20605__auto__;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return G__46227.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__46227.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__46227);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__46227);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46228_SHARP_){return (cljs.core.val(p1__46228_SHARP_) > (1));
}),cljs.core.frequencies(things)));if(cljs.core.empty_QMARK_(repeated_things))
{return null;
} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_(m))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}
var vec__46230 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46230,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46230,(1),null);var p = vec__46230;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___46240 = schema.utils.use_fn_validation;var output_schema46231_46241 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema46232_46242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker46233_46243 = schema.core.checker(input_schema46232_46242);var output_checker46234_46244 = schema.core.checker(output_schema46231_46241);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___46240,output_schema46231_46241,input_schema46232_46242,input_checker46233_46243,output_checker46234_46244){
return (function unwrap_schema_form_key(G__46235){var validate__837__auto__ = ufv___46240.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46245 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46235], null);var temp__4126__auto___46246 = (function (){var G__46238 = args__838__auto___46245;return (input_checker46233_46243.cljs$core$IFn$_invoke$arity$1 ? input_checker46233_46243.cljs$core$IFn$_invoke$arity$1(G__46238) : input_checker46233_46243.call(null,G__46238));
})();if(cljs.core.truth_(temp__4126__auto___46246))
{var error__839__auto___46247 = temp__4126__auto___46246;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46247], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46232_46242,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46245,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46247], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var k = G__46235;while(true){
if(schema.core.specific_key_QMARK_(k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else
{if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46248 = (function (){var G__46239 = o__840__auto__;return (output_checker46234_46244.cljs$core$IFn$_invoke$arity$1 ? output_checker46234_46244.cljs$core$IFn$_invoke$arity$1(G__46239) : output_checker46234_46244.call(null,G__46239));
})();if(cljs.core.truth_(temp__4126__auto___46248))
{var error__839__auto___46249 = temp__4126__auto___46248;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46249], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46231_46241,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46249], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46240,output_schema46231_46241,input_schema46232_46242,input_checker46233_46243,output_checker46234_46244))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema46231_46241,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46232_46242], null)));
var ufv___46259 = schema.utils.use_fn_validation;var output_schema46250_46260 = schema.core.Any;var input_schema46251_46261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker46252_46262 = schema.core.checker(input_schema46251_46261);var output_checker46253_46263 = schema.core.checker(output_schema46250_46260);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___46259,output_schema46250_46260,input_schema46251_46261,input_checker46252_46262,output_checker46253_46263){
return (function explicit_schema_key_map(G__46254){var validate__837__auto__ = ufv___46259.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46254], null);var temp__4126__auto___46265 = (function (){var G__46257 = args__838__auto___46264;return (input_checker46252_46262.cljs$core$IFn$_invoke$arity$1 ? input_checker46252_46262.cljs$core$IFn$_invoke$arity$1(G__46257) : input_checker46252_46262.call(null,G__46257));
})();if(cljs.core.truth_(temp__4126__auto___46265))
{var error__839__auto___46266 = temp__4126__auto___46265;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46266], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46251_46261,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46264,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46266], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__46254;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46267 = (function (){var G__46258 = o__840__auto__;return (output_checker46253_46263.cljs$core$IFn$_invoke$arity$1 ? output_checker46253_46263.cljs$core$IFn$_invoke$arity$1(G__46258) : output_checker46253_46263.call(null,G__46258));
})();if(cljs.core.truth_(temp__4126__auto___46267))
{var error__839__auto___46268 = temp__4126__auto___46267;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46268], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46250_46260,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46268], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46259,output_schema46250_46260,input_schema46251_46261,input_checker46252_46262,output_checker46253_46263))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema46250_46260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46251_46261], null)));
var ufv___46278 = schema.utils.use_fn_validation;var output_schema46269_46279 = schema.core.Any;var input_schema46270_46280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker46271_46281 = schema.core.checker(input_schema46270_46280);var output_checker46272_46282 = schema.core.checker(output_schema46269_46279);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___46278,output_schema46269_46279,input_schema46270_46280,input_checker46271_46281,output_checker46272_46282){
return (function split_schema_keys(G__46273){var validate__837__auto__ = ufv___46278.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46273], null);var temp__4126__auto___46284 = (function (){var G__46276 = args__838__auto___46283;return (input_checker46271_46281.cljs$core$IFn$_invoke$arity$1 ? input_checker46271_46281.cljs$core$IFn$_invoke$arity$1(G__46276) : input_checker46271_46281.call(null,G__46276));
})();if(cljs.core.truth_(temp__4126__auto___46284))
{var error__839__auto___46285 = temp__4126__auto___46284;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46285], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46270_46280,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46283,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46285], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__46273;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46286 = (function (){var G__46277 = o__840__auto__;return (output_checker46272_46282.cljs$core$IFn$_invoke$arity$1 ? output_checker46272_46282.cljs$core$IFn$_invoke$arity$1(G__46277) : output_checker46272_46282.call(null,G__46277));
})();if(cljs.core.truth_(temp__4126__auto___46286))
{var error__839__auto___46287 = temp__4126__auto___46286;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46287], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46269_46279,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46287], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46278,output_schema46269_46279,input_schema46270_46280,input_checker46271_46281,output_checker46272_46282))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema46269_46279,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46270_46280], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__46296){var vec__46297 = p__46296;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46297,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46297,(1),null);var pk = (function (){var G__46298 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__46298) : key_project.call(null,G__46298));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__46299 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46299,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46299,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46300 = ok;var G__46301 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__46300,G__46301) : key_combine.call(null,G__46300,G__46301));
})(),(function (){var G__46302 = ov;var G__46303 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__46302,G__46303) : val_combine.call(null,G__46302,G__46303));
})()], null));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__46304){
var key_project = cljs.core.first(arglist__46304);
arglist__46304 = cljs.core.next(arglist__46304);
var key_combine = cljs.core.first(arglist__46304);
arglist__46304 = cljs.core.next(arglist__46304);
var val_combine = cljs.core.first(arglist__46304);
var maps = cljs.core.rest(arglist__46304);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___46318 = schema.utils.use_fn_validation;var output_schema46306_46319 = plumbing.fnk.schema.InputSchema;var input_schema46307_46320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker46308_46321 = schema.core.checker(input_schema46307_46320);var output_checker46309_46322 = schema.core.checker(output_schema46306_46319);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___46318,output_schema46306_46319,input_schema46307_46320,input_checker46308_46321,output_checker46309_46322){
return (function union_input_schemata(G__46310,G__46311){var validate__837__auto__ = ufv___46318.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46310,G__46311], null);var temp__4126__auto___46324 = (function (){var G__46316 = args__838__auto___46323;return (input_checker46308_46321.cljs$core$IFn$_invoke$arity$1 ? input_checker46308_46321.cljs$core$IFn$_invoke$arity$1(G__46316) : input_checker46308_46321.call(null,G__46316));
})();if(cljs.core.truth_(temp__4126__auto___46324))
{var error__839__auto___46325 = temp__4126__auto___46324;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46325], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46307_46320,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46323,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46325], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var i1 = G__46310;var i2 = G__46311;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___46318,output_schema46306_46319,input_schema46307_46320,input_checker46308_46321,output_checker46309_46322){
return (function (p1__46305_SHARP_){if(schema.core.specific_key_QMARK_(p1__46305_SHARP_))
{return schema.core.explicit_schema_key(p1__46305_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__837__auto__,ufv___46318,output_schema46306_46319,input_schema46307_46320,input_checker46308_46321,output_checker46309_46322))
,((function (validate__837__auto__,ufv___46318,output_schema46306_46319,input_schema46307_46320,input_checker46308_46321,output_checker46309_46322){
return (function (k1,k2){if(schema.core.required_key_QMARK_(k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_(k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_(k1))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))], 0))))));
}
return k1;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))
{return k1;
} else
{throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__837__auto__,ufv___46318,output_schema46306_46319,input_schema46307_46320,input_checker46308_46321,output_checker46309_46322))
,((function (validate__837__auto__,ufv___46318,output_schema46306_46319,input_schema46307_46320,input_checker46308_46321,output_checker46309_46322){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__837__auto__,ufv___46318,output_schema46306_46319,input_schema46307_46320,input_checker46308_46321,output_checker46309_46322))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46326 = (function (){var G__46317 = o__840__auto__;return (output_checker46309_46322.cljs$core$IFn$_invoke$arity$1 ? output_checker46309_46322.cljs$core$IFn$_invoke$arity$1(G__46317) : output_checker46309_46322.call(null,G__46317));
})();if(cljs.core.truth_(temp__4126__auto___46326))
{var error__839__auto___46327 = temp__4126__auto___46326;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46327], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46306_46319,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46327], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46318,output_schema46306_46319,input_schema46307_46320,input_checker46308_46321,output_checker46309_46322))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema46306_46319,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46307_46320], null)));
var ufv___46337 = schema.utils.use_fn_validation;var output_schema46328_46338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema46329_46339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker46330_46340 = schema.core.checker(input_schema46329_46339);var output_checker46331_46341 = schema.core.checker(output_schema46328_46338);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___46337,output_schema46328_46338,input_schema46329_46339,input_checker46330_46340,output_checker46331_46341){
return (function required_toplevel_keys(G__46332){var validate__837__auto__ = ufv___46337.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46332], null);var temp__4126__auto___46343 = (function (){var G__46335 = args__838__auto___46342;return (input_checker46330_46340.cljs$core$IFn$_invoke$arity$1 ? input_checker46330_46340.cljs$core$IFn$_invoke$arity$1(G__46335) : input_checker46330_46340.call(null,G__46335));
})();if(cljs.core.truth_(temp__4126__auto___46343))
{var error__839__auto___46344 = temp__4126__auto___46343;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46344], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46329_46339,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46342,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46344], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input_schema = G__46332;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___46337,output_schema46328_46338,input_schema46329_46339,input_checker46330_46340,output_checker46331_46341){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__837__auto__,ufv___46337,output_schema46328_46338,input_schema46329_46339,input_checker46330_46340,output_checker46331_46341))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46345 = (function (){var G__46336 = o__840__auto__;return (output_checker46331_46341.cljs$core$IFn$_invoke$arity$1 ? output_checker46331_46341.cljs$core$IFn$_invoke$arity$1(G__46336) : output_checker46331_46341.call(null,G__46336));
})();if(cljs.core.truth_(temp__4126__auto___46345))
{var error__839__auto___46346 = temp__4126__auto___46345;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46346], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46328_46338,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46346], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46337,output_schema46328_46338,input_schema46329_46339,input_checker46330_46340,output_checker46331_46341))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema46328_46338,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46329_46339], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20684__auto__ = (function iter__46361(s__46362){return (new cljs.core.LazySeq(null,(function (){var s__46362__$1 = s__46362;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46362__$1);if(temp__4126__auto__)
{var s__46362__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46362__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46362__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46364 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46363 = (0);while(true){
if((i__46363 < size__20683__auto__))
{var vec__46369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46363);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46369,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46369,(1),null);cljs.core.chunk_append(b__46364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__46371 = (i__46363 + (1));
i__46363 = G__46371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46364),iter__46361(cljs.core.chunk_rest(s__46362__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46364),null);
}
} else
{var vec__46370 = cljs.core.first(s__46362__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46370,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46370,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__46361(cljs.core.rest(s__46362__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_(input_schema)))
{return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_(output_schema)))
{return schema.utils.error(schema.utils.__GT_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20684__auto__ = (function iter__46390(s__46391){return (new cljs.core.LazySeq(null,(function (){var s__46391__$1 = s__46391;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46391__$1);if(temp__4126__auto__)
{var s__46391__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46391__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46391__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46393 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46392 = (0);while(true){
if((i__46392 < size__20683__auto__))
{var vec__46398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46392);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46398,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46398,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__46393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__46400 = (i__46392 + (1));
i__46392 = G__46400;
continue;
}
} else
{{
var G__46401 = (i__46392 + (1));
i__46392 = G__46401;
continue;
}
}
} else
{{
var G__46402 = (i__46392 + (1));
i__46392 = G__46402;
continue;
}
}
} else
{{
var G__46403 = (i__46392 + (1));
i__46392 = G__46403;
continue;
}
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
{var vec__46399 = cljs.core.first(s__46391__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46399,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46399,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__46390(cljs.core.rest(s__46391__$2)));
} else
{{
var G__46404 = cljs.core.rest(s__46391__$2);
s__46391__$1 = G__46404;
continue;
}
}
} else
{{
var G__46405 = cljs.core.rest(s__46391__$2);
s__46391__$1 = G__46405;
continue;
}
}
} else
{{
var G__46406 = cljs.core.rest(s__46391__$2);
s__46391__$1 = G__46406;
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
});return iter__20684__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___46433 = schema.utils.use_fn_validation;var output_schema46407_46434 = schema.core.Any;var input_schema46408_46435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker46409_46436 = schema.core.checker(input_schema46408_46435);var output_checker46410_46437 = schema.core.checker(output_schema46407_46434);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___46433,output_schema46407_46434,input_schema46408_46435,input_checker46409_46436,output_checker46410_46437){
return (function compose_schemata(G__46411,G__46412){var validate__837__auto__ = true;if(validate__837__auto__)
{var args__838__auto___46438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46411,G__46412], null);var temp__4126__auto___46439 = (function (){var G__46423 = args__838__auto___46438;return (input_checker46409_46436.cljs$core$IFn$_invoke$arity$1 ? input_checker46409_46436.cljs$core$IFn$_invoke$arity$1(G__46423) : input_checker46409_46436.call(null,G__46423));
})();if(cljs.core.truth_(temp__4126__auto___46439))
{var error__839__auto___46440 = temp__4126__auto___46439;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46440], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46408_46435,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46438,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46440], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__46426 = G__46411;var vec__46428 = G__46426;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46428,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46428,(1),null);var G__46427 = G__46412;var vec__46429 = G__46427;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46429,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46429,(1),null);var G__46426__$1 = G__46426;var G__46427__$1 = G__46427;while(true){
var vec__46430 = G__46426__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46430,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46430,(1),null);var vec__46431 = G__46427__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46431,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46431,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__837__auto__)
{var temp__4126__auto___46441 = (function (){var G__46432 = o__840__auto__;return (output_checker46410_46437.cljs$core$IFn$_invoke$arity$1 ? output_checker46410_46437.cljs$core$IFn$_invoke$arity$1(G__46432) : output_checker46410_46437.call(null,G__46432));
})();if(cljs.core.truth_(temp__4126__auto___46441))
{var error__839__auto___46442 = temp__4126__auto___46441;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46442], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46407_46434,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46442], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46433,output_schema46407_46434,input_schema46408_46435,input_checker46409_46436,output_checker46410_46437))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema46407_46434,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46408_46435], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_(m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k)))
{return schema.core.optional_key(k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___46545 = schema.utils.use_fn_validation;var output_schema46443_46546 = schema.core.Any;var input_schema46444_46547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker46445_46548 = schema.core.checker(input_schema46444_46547);var output_checker46446_46549 = schema.core.checker(output_schema46443_46546);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549){
return (function split_schema(G__46447,G__46448){var validate__837__auto__ = ufv___46545.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46447,G__46448], null);var temp__4126__auto___46551 = (function (){var G__46497 = args__838__auto___46550;return (input_checker46445_46548.cljs$core$IFn$_invoke$arity$1 ? input_checker46445_46548.cljs$core$IFn$_invoke$arity$1(G__46497) : input_checker46445_46548.call(null,G__46497));
})();if(cljs.core.truth_(temp__4126__auto___46551))
{var error__839__auto___46552 = temp__4126__auto___46551;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46552], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46444_46547,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46550,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46552], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__46447;var ks = G__46448;while(true){
var ks__$1 = cljs.core.set(ks);var iter__20684__auto__ = ((function (ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549){
return (function iter__46498(s__46499){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549){
return (function (){var s__46499__$1 = s__46499;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46499__$1);if(temp__4126__auto__)
{var s__46499__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46499__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46499__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46501 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46500 = (0);while(true){
if((i__46500 < size__20683__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46500);cljs.core.chunk_append(b__46501,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20684__auto__ = ((function (i__46500,in_QMARK_,c__20682__auto__,size__20683__auto__,b__46501,s__46499__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549){
return (function iter__46524(s__46525){return (new cljs.core.LazySeq(null,((function (i__46500,in_QMARK_,c__20682__auto__,size__20683__auto__,b__46501,s__46499__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549){
return (function (){var s__46525__$1 = s__46525;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46525__$1);if(temp__4126__auto____$1)
{var s__46525__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46525__$2))
{var c__20682__auto____$1 = cljs.core.chunk_first(s__46525__$2);var size__20683__auto____$1 = cljs.core.count(c__20682__auto____$1);var b__46527 = cljs.core.chunk_buffer(size__20683__auto____$1);if((function (){var i__46526 = (0);while(true){
if((i__46526 < size__20683__auto____$1))
{var vec__46532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto____$1,i__46526);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46532,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46532,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__46527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__46553 = (i__46526 + (1));
i__46526 = G__46553;
continue;
}
} else
{{
var G__46554 = (i__46526 + (1));
i__46526 = G__46554;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46527),iter__46524(cljs.core.chunk_rest(s__46525__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46527),null);
}
} else
{var vec__46533 = cljs.core.first(s__46525__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46533,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46533,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__46524(cljs.core.rest(s__46525__$2)));
} else
{{
var G__46555 = cljs.core.rest(s__46525__$2);
s__46525__$1 = G__46555;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__46500,in_QMARK_,c__20682__auto__,size__20683__auto__,b__46501,s__46499__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549))
,null,null));
});})(i__46500,in_QMARK_,c__20682__auto__,size__20683__auto__,b__46501,s__46499__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549))
;return iter__20684__auto__(s);
})()));
{
var G__46556 = (i__46500 + (1));
i__46500 = G__46556;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46501),iter__46498(cljs.core.chunk_rest(s__46499__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46501),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__46499__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20684__auto__ = ((function (in_QMARK_,s__46499__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549){
return (function iter__46534(s__46535){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__46499__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549){
return (function (){var s__46535__$1 = s__46535;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46535__$1);if(temp__4126__auto____$1)
{var s__46535__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46535__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46535__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46537 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46536 = (0);while(true){
if((i__46536 < size__20683__auto__))
{var vec__46542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46536);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46542,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46542,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__46537,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__46557 = (i__46536 + (1));
i__46536 = G__46557;
continue;
}
} else
{{
var G__46558 = (i__46536 + (1));
i__46536 = G__46558;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46537),iter__46534(cljs.core.chunk_rest(s__46535__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46537),null);
}
} else
{var vec__46543 = cljs.core.first(s__46535__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46543,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46543,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__46534(cljs.core.rest(s__46535__$2)));
} else
{{
var G__46559 = cljs.core.rest(s__46535__$2);
s__46535__$1 = G__46559;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__46499__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549))
,null,null));
});})(in_QMARK_,s__46499__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549))
;return iter__20684__auto__(s);
})()),iter__46498(cljs.core.rest(s__46499__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549))
,null,null));
});})(ks__$1,validate__837__auto__,ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549))
;return iter__20684__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46560 = (function (){var G__46544 = o__840__auto__;return (output_checker46446_46549.cljs$core$IFn$_invoke$arity$1 ? output_checker46446_46549.cljs$core$IFn$_invoke$arity$1(G__46544) : output_checker46446_46549.call(null,G__46544));
})();if(cljs.core.truth_(temp__4126__auto___46560))
{var error__839__auto___46561 = temp__4126__auto___46560;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46561], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46443_46546,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46561], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46545,output_schema46443_46546,input_schema46444_46547,input_checker46445_46548,output_checker46446_46549))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema46443_46546,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46444_46547], null)));
var ufv___46596 = schema.utils.use_fn_validation;var output_schema46562_46597 = plumbing.fnk.schema.GraphIOSchemata;var input_schema46563_46598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker46564_46599 = schema.core.checker(input_schema46563_46598);var output_checker46565_46600 = schema.core.checker(output_schema46562_46597);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___46596,output_schema46562_46597,input_schema46563_46598,input_checker46564_46599,output_checker46565_46600){
return (function sequence_schemata(G__46566,G__46567){var validate__837__auto__ = ufv___46596.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46566,G__46567], null);var temp__4126__auto___46602 = (function (){var G__46582 = args__838__auto___46601;return (input_checker46564_46599.cljs$core$IFn$_invoke$arity$1 ? input_checker46564_46599.cljs$core$IFn$_invoke$arity$1(G__46582) : input_checker46564_46599.call(null,G__46582));
})();if(cljs.core.truth_(temp__4126__auto___46602))
{var error__839__auto___46603 = temp__4126__auto___46602;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46603], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46563_46598,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46601,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46603], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__46586 = G__46566;var vec__46588 = G__46586;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46588,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46588,(1),null);var G__46587 = G__46567;var vec__46589 = G__46587;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46589,(0),null);var vec__46590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46589,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46590,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46590,(1),null);var G__46586__$1 = G__46586;var G__46587__$1 = G__46587;while(true){
var vec__46591 = G__46586__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46591,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46591,(1),null);var vec__46592 = G__46587__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46592,(0),null);var vec__46593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46592,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}
var vec__46594 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46594,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46594,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46604 = (function (){var G__46595 = o__840__auto__;return (output_checker46565_46600.cljs$core$IFn$_invoke$arity$1 ? output_checker46565_46600.cljs$core$IFn$_invoke$arity$1(G__46595) : output_checker46565_46600.call(null,G__46595));
})();if(cljs.core.truth_(temp__4126__auto___46604))
{var error__839__auto___46605 = temp__4126__auto___46604;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46605], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46562_46597,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46605], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46596,output_schema46562_46597,input_schema46563_46598,input_checker46564_46599,output_checker46565_46600))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema46562_46597,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46563_46598], null)));
//# sourceMappingURL=schema.js.map