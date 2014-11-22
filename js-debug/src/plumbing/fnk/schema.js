goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__867__868__auto__){var G__44364 = p1__867__868__auto__;if(G__44364)
{var bit__20770__auto__ = null;if(cljs.core.truth_((function (){var or__19687__auto__ = bit__20770__auto__;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return G__44364.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__44364.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__44364);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__44364);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44365_SHARP_){return (cljs.core.val(p1__44365_SHARP_) > (1));
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
var vec__44367 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44367,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44367,(1),null);var p = vec__44367;if(cljs.core.truth_(p))
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
var ufv___44377 = schema.utils.use_fn_validation;var output_schema44368_44378 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema44369_44379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker44370_44380 = schema.core.checker(input_schema44369_44379);var output_checker44371_44381 = schema.core.checker(output_schema44368_44378);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___44377,output_schema44368_44378,input_schema44369_44379,input_checker44370_44380,output_checker44371_44381){
return (function unwrap_schema_form_key(G__44372){var validate__837__auto__ = ufv___44377.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44372], null);var temp__4126__auto___44383 = (function (){var G__44375 = args__838__auto___44382;return (input_checker44370_44380.cljs$core$IFn$_invoke$arity$1 ? input_checker44370_44380.cljs$core$IFn$_invoke$arity$1(G__44375) : input_checker44370_44380.call(null,G__44375));
})();if(cljs.core.truth_(temp__4126__auto___44383))
{var error__839__auto___44384 = temp__4126__auto___44383;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44384], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44369_44379,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44382,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44384], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var k = G__44372;while(true){
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
{var temp__4126__auto___44385 = (function (){var G__44376 = o__840__auto__;return (output_checker44371_44381.cljs$core$IFn$_invoke$arity$1 ? output_checker44371_44381.cljs$core$IFn$_invoke$arity$1(G__44376) : output_checker44371_44381.call(null,G__44376));
})();if(cljs.core.truth_(temp__4126__auto___44385))
{var error__839__auto___44386 = temp__4126__auto___44385;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44386], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44368_44378,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44386], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___44377,output_schema44368_44378,input_schema44369_44379,input_checker44370_44380,output_checker44371_44381))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema44368_44378,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44369_44379], null)));
var ufv___44396 = schema.utils.use_fn_validation;var output_schema44387_44397 = schema.core.Any;var input_schema44388_44398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker44389_44399 = schema.core.checker(input_schema44388_44398);var output_checker44390_44400 = schema.core.checker(output_schema44387_44397);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___44396,output_schema44387_44397,input_schema44388_44398,input_checker44389_44399,output_checker44390_44400){
return (function explicit_schema_key_map(G__44391){var validate__837__auto__ = ufv___44396.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44391], null);var temp__4126__auto___44402 = (function (){var G__44394 = args__838__auto___44401;return (input_checker44389_44399.cljs$core$IFn$_invoke$arity$1 ? input_checker44389_44399.cljs$core$IFn$_invoke$arity$1(G__44394) : input_checker44389_44399.call(null,G__44394));
})();if(cljs.core.truth_(temp__4126__auto___44402))
{var error__839__auto___44403 = temp__4126__auto___44402;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44403], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44388_44398,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44401,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44403], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__44391;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44404 = (function (){var G__44395 = o__840__auto__;return (output_checker44390_44400.cljs$core$IFn$_invoke$arity$1 ? output_checker44390_44400.cljs$core$IFn$_invoke$arity$1(G__44395) : output_checker44390_44400.call(null,G__44395));
})();if(cljs.core.truth_(temp__4126__auto___44404))
{var error__839__auto___44405 = temp__4126__auto___44404;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44405], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44387_44397,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44405], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___44396,output_schema44387_44397,input_schema44388_44398,input_checker44389_44399,output_checker44390_44400))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema44387_44397,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44388_44398], null)));
var ufv___44415 = schema.utils.use_fn_validation;var output_schema44406_44416 = schema.core.Any;var input_schema44407_44417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker44408_44418 = schema.core.checker(input_schema44407_44417);var output_checker44409_44419 = schema.core.checker(output_schema44406_44416);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___44415,output_schema44406_44416,input_schema44407_44417,input_checker44408_44418,output_checker44409_44419){
return (function split_schema_keys(G__44410){var validate__837__auto__ = ufv___44415.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44420 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44410], null);var temp__4126__auto___44421 = (function (){var G__44413 = args__838__auto___44420;return (input_checker44408_44418.cljs$core$IFn$_invoke$arity$1 ? input_checker44408_44418.cljs$core$IFn$_invoke$arity$1(G__44413) : input_checker44408_44418.call(null,G__44413));
})();if(cljs.core.truth_(temp__4126__auto___44421))
{var error__839__auto___44422 = temp__4126__auto___44421;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44422], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44407_44417,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44420,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44422], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__44410;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44423 = (function (){var G__44414 = o__840__auto__;return (output_checker44409_44419.cljs$core$IFn$_invoke$arity$1 ? output_checker44409_44419.cljs$core$IFn$_invoke$arity$1(G__44414) : output_checker44409_44419.call(null,G__44414));
})();if(cljs.core.truth_(temp__4126__auto___44423))
{var error__839__auto___44424 = temp__4126__auto___44423;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44424], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44406_44416,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44424], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___44415,output_schema44406_44416,input_schema44407_44417,input_checker44408_44418,output_checker44409_44419))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema44406_44416,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44407_44417], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__44433){var vec__44434 = p__44433;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44434,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44434,(1),null);var pk = (function (){var G__44435 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__44435) : key_project.call(null,G__44435));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__44436 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44436,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44436,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44437 = ok;var G__44438 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__44437,G__44438) : key_combine.call(null,G__44437,G__44438));
})(),(function (){var G__44439 = ov;var G__44440 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__44439,G__44440) : val_combine.call(null,G__44439,G__44440));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__44441){
var key_project = cljs.core.first(arglist__44441);
arglist__44441 = cljs.core.next(arglist__44441);
var key_combine = cljs.core.first(arglist__44441);
arglist__44441 = cljs.core.next(arglist__44441);
var val_combine = cljs.core.first(arglist__44441);
var maps = cljs.core.rest(arglist__44441);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___44455 = schema.utils.use_fn_validation;var output_schema44443_44456 = plumbing.fnk.schema.InputSchema;var input_schema44444_44457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker44445_44458 = schema.core.checker(input_schema44444_44457);var output_checker44446_44459 = schema.core.checker(output_schema44443_44456);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___44455,output_schema44443_44456,input_schema44444_44457,input_checker44445_44458,output_checker44446_44459){
return (function union_input_schemata(G__44447,G__44448){var validate__837__auto__ = ufv___44455.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44447,G__44448], null);var temp__4126__auto___44461 = (function (){var G__44453 = args__838__auto___44460;return (input_checker44445_44458.cljs$core$IFn$_invoke$arity$1 ? input_checker44445_44458.cljs$core$IFn$_invoke$arity$1(G__44453) : input_checker44445_44458.call(null,G__44453));
})();if(cljs.core.truth_(temp__4126__auto___44461))
{var error__839__auto___44462 = temp__4126__auto___44461;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44462], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44444_44457,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44460,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44462], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var i1 = G__44447;var i2 = G__44448;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___44455,output_schema44443_44456,input_schema44444_44457,input_checker44445_44458,output_checker44446_44459){
return (function (p1__44442_SHARP_){if(schema.core.specific_key_QMARK_(p1__44442_SHARP_))
{return schema.core.explicit_schema_key(p1__44442_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__837__auto__,ufv___44455,output_schema44443_44456,input_schema44444_44457,input_checker44445_44458,output_checker44446_44459))
,((function (validate__837__auto__,ufv___44455,output_schema44443_44456,input_schema44444_44457,input_checker44445_44458,output_checker44446_44459){
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
});})(validate__837__auto__,ufv___44455,output_schema44443_44456,input_schema44444_44457,input_checker44445_44458,output_checker44446_44459))
,((function (validate__837__auto__,ufv___44455,output_schema44443_44456,input_schema44444_44457,input_checker44445_44458,output_checker44446_44459){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__837__auto__,ufv___44455,output_schema44443_44456,input_schema44444_44457,input_checker44445_44458,output_checker44446_44459))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44463 = (function (){var G__44454 = o__840__auto__;return (output_checker44446_44459.cljs$core$IFn$_invoke$arity$1 ? output_checker44446_44459.cljs$core$IFn$_invoke$arity$1(G__44454) : output_checker44446_44459.call(null,G__44454));
})();if(cljs.core.truth_(temp__4126__auto___44463))
{var error__839__auto___44464 = temp__4126__auto___44463;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44464], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44443_44456,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44464], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___44455,output_schema44443_44456,input_schema44444_44457,input_checker44445_44458,output_checker44446_44459))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema44443_44456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44444_44457], null)));
var ufv___44474 = schema.utils.use_fn_validation;var output_schema44465_44475 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema44466_44476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker44467_44477 = schema.core.checker(input_schema44466_44476);var output_checker44468_44478 = schema.core.checker(output_schema44465_44475);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___44474,output_schema44465_44475,input_schema44466_44476,input_checker44467_44477,output_checker44468_44478){
return (function required_toplevel_keys(G__44469){var validate__837__auto__ = ufv___44474.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44469], null);var temp__4126__auto___44480 = (function (){var G__44472 = args__838__auto___44479;return (input_checker44467_44477.cljs$core$IFn$_invoke$arity$1 ? input_checker44467_44477.cljs$core$IFn$_invoke$arity$1(G__44472) : input_checker44467_44477.call(null,G__44472));
})();if(cljs.core.truth_(temp__4126__auto___44480))
{var error__839__auto___44481 = temp__4126__auto___44480;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44481], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44466_44476,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44479,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44481], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input_schema = G__44469;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___44474,output_schema44465_44475,input_schema44466_44476,input_checker44467_44477,output_checker44468_44478){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__837__auto__,ufv___44474,output_schema44465_44475,input_schema44466_44476,input_checker44467_44477,output_checker44468_44478))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44482 = (function (){var G__44473 = o__840__auto__;return (output_checker44468_44478.cljs$core$IFn$_invoke$arity$1 ? output_checker44468_44478.cljs$core$IFn$_invoke$arity$1(G__44473) : output_checker44468_44478.call(null,G__44473));
})();if(cljs.core.truth_(temp__4126__auto___44482))
{var error__839__auto___44483 = temp__4126__auto___44482;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44483], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44465_44475,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44483], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___44474,output_schema44465_44475,input_schema44466_44476,input_checker44467_44477,output_checker44468_44478))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema44465_44475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44466_44476], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20913__auto__ = (function iter__44498(s__44499){return (new cljs.core.LazySeq(null,(function (){var s__44499__$1 = s__44499;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44499__$1);if(temp__4126__auto__)
{var s__44499__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44499__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44499__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44501 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44500 = (0);while(true){
if((i__44500 < size__20912__auto__))
{var vec__44506 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44500);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(1),null);cljs.core.chunk_append(b__44501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__44508 = (i__44500 + (1));
i__44500 = G__44508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44501),iter__44498(cljs.core.chunk_rest(s__44499__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44501),null);
}
} else
{var vec__44507 = cljs.core.first(s__44499__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44507,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44507,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__44498(cljs.core.rest(s__44499__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20913__auto__ = (function iter__44527(s__44528){return (new cljs.core.LazySeq(null,(function (){var s__44528__$1 = s__44528;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44528__$1);if(temp__4126__auto__)
{var s__44528__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44528__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44528__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44530 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44529 = (0);while(true){
if((i__44529 < size__20912__auto__))
{var vec__44535 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44529);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44535,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44535,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__44530,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__44537 = (i__44529 + (1));
i__44529 = G__44537;
continue;
}
} else
{{
var G__44538 = (i__44529 + (1));
i__44529 = G__44538;
continue;
}
}
} else
{{
var G__44539 = (i__44529 + (1));
i__44529 = G__44539;
continue;
}
}
} else
{{
var G__44540 = (i__44529 + (1));
i__44529 = G__44540;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44530),iter__44527(cljs.core.chunk_rest(s__44528__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44530),null);
}
} else
{var vec__44536 = cljs.core.first(s__44528__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44536,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44536,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__44527(cljs.core.rest(s__44528__$2)));
} else
{{
var G__44541 = cljs.core.rest(s__44528__$2);
s__44528__$1 = G__44541;
continue;
}
}
} else
{{
var G__44542 = cljs.core.rest(s__44528__$2);
s__44528__$1 = G__44542;
continue;
}
}
} else
{{
var G__44543 = cljs.core.rest(s__44528__$2);
s__44528__$1 = G__44543;
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
});return iter__20913__auto__(input_schema);
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
var ufv___44570 = schema.utils.use_fn_validation;var output_schema44544_44571 = schema.core.Any;var input_schema44545_44572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker44546_44573 = schema.core.checker(input_schema44545_44572);var output_checker44547_44574 = schema.core.checker(output_schema44544_44571);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___44570,output_schema44544_44571,input_schema44545_44572,input_checker44546_44573,output_checker44547_44574){
return (function compose_schemata(G__44548,G__44549){var validate__837__auto__ = true;if(validate__837__auto__)
{var args__838__auto___44575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44548,G__44549], null);var temp__4126__auto___44576 = (function (){var G__44560 = args__838__auto___44575;return (input_checker44546_44573.cljs$core$IFn$_invoke$arity$1 ? input_checker44546_44573.cljs$core$IFn$_invoke$arity$1(G__44560) : input_checker44546_44573.call(null,G__44560));
})();if(cljs.core.truth_(temp__4126__auto___44576))
{var error__839__auto___44577 = temp__4126__auto___44576;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44577], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44545_44572,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44575,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44577], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__44563 = G__44548;var vec__44565 = G__44563;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44565,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44565,(1),null);var G__44564 = G__44549;var vec__44566 = G__44564;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44566,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44566,(1),null);var G__44563__$1 = G__44563;var G__44564__$1 = G__44564;while(true){
var vec__44567 = G__44563__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44567,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44567,(1),null);var vec__44568 = G__44564__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__837__auto__)
{var temp__4126__auto___44578 = (function (){var G__44569 = o__840__auto__;return (output_checker44547_44574.cljs$core$IFn$_invoke$arity$1 ? output_checker44547_44574.cljs$core$IFn$_invoke$arity$1(G__44569) : output_checker44547_44574.call(null,G__44569));
})();if(cljs.core.truth_(temp__4126__auto___44578))
{var error__839__auto___44579 = temp__4126__auto___44578;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44579], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44544_44571,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44579], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___44570,output_schema44544_44571,input_schema44545_44572,input_checker44546_44573,output_checker44547_44574))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema44544_44571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44545_44572], null)));
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
var ufv___44682 = schema.utils.use_fn_validation;var output_schema44580_44683 = schema.core.Any;var input_schema44581_44684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker44582_44685 = schema.core.checker(input_schema44581_44684);var output_checker44583_44686 = schema.core.checker(output_schema44580_44683);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686){
return (function split_schema(G__44584,G__44585){var validate__837__auto__ = ufv___44682.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44584,G__44585], null);var temp__4126__auto___44688 = (function (){var G__44634 = args__838__auto___44687;return (input_checker44582_44685.cljs$core$IFn$_invoke$arity$1 ? input_checker44582_44685.cljs$core$IFn$_invoke$arity$1(G__44634) : input_checker44582_44685.call(null,G__44634));
})();if(cljs.core.truth_(temp__4126__auto___44688))
{var error__839__auto___44689 = temp__4126__auto___44688;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44689], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44581_44684,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44687,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44689], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__44584;var ks = G__44585;while(true){
var ks__$1 = cljs.core.set(ks);var iter__20913__auto__ = ((function (ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686){
return (function iter__44635(s__44636){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686){
return (function (){var s__44636__$1 = s__44636;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44636__$1);if(temp__4126__auto__)
{var s__44636__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44636__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44636__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44638 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44637 = (0);while(true){
if((i__44637 < size__20912__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44637);cljs.core.chunk_append(b__44638,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20913__auto__ = ((function (i__44637,in_QMARK_,c__20911__auto__,size__20912__auto__,b__44638,s__44636__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686){
return (function iter__44661(s__44662){return (new cljs.core.LazySeq(null,((function (i__44637,in_QMARK_,c__20911__auto__,size__20912__auto__,b__44638,s__44636__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686){
return (function (){var s__44662__$1 = s__44662;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__44662__$1);if(temp__4126__auto____$1)
{var s__44662__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__44662__$2))
{var c__20911__auto____$1 = cljs.core.chunk_first(s__44662__$2);var size__20912__auto____$1 = cljs.core.count(c__20911__auto____$1);var b__44664 = cljs.core.chunk_buffer(size__20912__auto____$1);if((function (){var i__44663 = (0);while(true){
if((i__44663 < size__20912__auto____$1))
{var vec__44669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto____$1,i__44663);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44669,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44669,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__44664,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__44690 = (i__44663 + (1));
i__44663 = G__44690;
continue;
}
} else
{{
var G__44691 = (i__44663 + (1));
i__44663 = G__44691;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44664),iter__44661(cljs.core.chunk_rest(s__44662__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44664),null);
}
} else
{var vec__44670 = cljs.core.first(s__44662__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44670,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44670,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__44661(cljs.core.rest(s__44662__$2)));
} else
{{
var G__44692 = cljs.core.rest(s__44662__$2);
s__44662__$1 = G__44692;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__44637,in_QMARK_,c__20911__auto__,size__20912__auto__,b__44638,s__44636__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686))
,null,null));
});})(i__44637,in_QMARK_,c__20911__auto__,size__20912__auto__,b__44638,s__44636__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686))
;return iter__20913__auto__(s);
})()));
{
var G__44693 = (i__44637 + (1));
i__44637 = G__44693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44638),iter__44635(cljs.core.chunk_rest(s__44636__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44638),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__44636__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20913__auto__ = ((function (in_QMARK_,s__44636__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686){
return (function iter__44671(s__44672){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__44636__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686){
return (function (){var s__44672__$1 = s__44672;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__44672__$1);if(temp__4126__auto____$1)
{var s__44672__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__44672__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__44672__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__44674 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__44673 = (0);while(true){
if((i__44673 < size__20912__auto__))
{var vec__44679 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__44673);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44679,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44679,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__44674,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__44694 = (i__44673 + (1));
i__44673 = G__44694;
continue;
}
} else
{{
var G__44695 = (i__44673 + (1));
i__44673 = G__44695;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44674),iter__44671(cljs.core.chunk_rest(s__44672__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44674),null);
}
} else
{var vec__44680 = cljs.core.first(s__44672__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44680,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44680,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__44671(cljs.core.rest(s__44672__$2)));
} else
{{
var G__44696 = cljs.core.rest(s__44672__$2);
s__44672__$1 = G__44696;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__44636__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686))
,null,null));
});})(in_QMARK_,s__44636__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686))
;return iter__20913__auto__(s);
})()),iter__44635(cljs.core.rest(s__44636__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686))
,null,null));
});})(ks__$1,validate__837__auto__,ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686))
;return iter__20913__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44697 = (function (){var G__44681 = o__840__auto__;return (output_checker44583_44686.cljs$core$IFn$_invoke$arity$1 ? output_checker44583_44686.cljs$core$IFn$_invoke$arity$1(G__44681) : output_checker44583_44686.call(null,G__44681));
})();if(cljs.core.truth_(temp__4126__auto___44697))
{var error__839__auto___44698 = temp__4126__auto___44697;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44698], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44580_44683,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44698], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___44682,output_schema44580_44683,input_schema44581_44684,input_checker44582_44685,output_checker44583_44686))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema44580_44683,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44581_44684], null)));
var ufv___44733 = schema.utils.use_fn_validation;var output_schema44699_44734 = plumbing.fnk.schema.GraphIOSchemata;var input_schema44700_44735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker44701_44736 = schema.core.checker(input_schema44700_44735);var output_checker44702_44737 = schema.core.checker(output_schema44699_44734);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___44733,output_schema44699_44734,input_schema44700_44735,input_checker44701_44736,output_checker44702_44737){
return (function sequence_schemata(G__44703,G__44704){var validate__837__auto__ = ufv___44733.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44703,G__44704], null);var temp__4126__auto___44739 = (function (){var G__44719 = args__838__auto___44738;return (input_checker44701_44736.cljs$core$IFn$_invoke$arity$1 ? input_checker44701_44736.cljs$core$IFn$_invoke$arity$1(G__44719) : input_checker44701_44736.call(null,G__44719));
})();if(cljs.core.truth_(temp__4126__auto___44739))
{var error__839__auto___44740 = temp__4126__auto___44739;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44740], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44700_44735,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44738,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44740], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__44723 = G__44703;var vec__44725 = G__44723;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44725,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44725,(1),null);var G__44724 = G__44704;var vec__44726 = G__44724;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44726,(0),null);var vec__44727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44726,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(1),null);var G__44723__$1 = G__44723;var G__44724__$1 = G__44724;while(true){
var vec__44728 = G__44723__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44728,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44728,(1),null);var vec__44729 = G__44724__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44729,(0),null);var vec__44730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44729,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44730,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44730,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__44731 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44731,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44731,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44741 = (function (){var G__44732 = o__840__auto__;return (output_checker44702_44737.cljs$core$IFn$_invoke$arity$1 ? output_checker44702_44737.cljs$core$IFn$_invoke$arity$1(G__44732) : output_checker44702_44737.call(null,G__44732));
})();if(cljs.core.truth_(temp__4126__auto___44741))
{var error__839__auto___44742 = temp__4126__auto___44741;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44742], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44699_44734,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44742], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___44733,output_schema44699_44734,input_schema44700_44735,input_checker44701_44736,output_checker44702_44737))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema44699_44734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44700_44735], null)));
//# sourceMappingURL=schema.js.map