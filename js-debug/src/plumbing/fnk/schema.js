goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__867__868__auto__){var G__52854 = p1__867__868__auto__;if(G__52854)
{var bit__20556__auto__ = null;if(cljs.core.truth_((function (){var or__19289__auto__ = bit__20556__auto__;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return G__52854.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__52854.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__52854);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__52854);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52855_SHARP_){return (cljs.core.val(p1__52855_SHARP_) > (1));
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
var vec__52857 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52857,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52857,(1),null);var p = vec__52857;if(cljs.core.truth_(p))
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
var ufv___52867 = schema.utils.use_fn_validation;var output_schema52858_52868 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema52859_52869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker52860_52870 = schema.core.checker(input_schema52859_52869);var output_checker52861_52871 = schema.core.checker(output_schema52858_52868);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___52867,output_schema52858_52868,input_schema52859_52869,input_checker52860_52870,output_checker52861_52871){
return (function unwrap_schema_form_key(G__52862){var validate__837__auto__ = ufv___52867.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___52872 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52862], null);var temp__4126__auto___52873 = (function (){var G__52865 = args__838__auto___52872;return (input_checker52860_52870.cljs$core$IFn$_invoke$arity$1 ? input_checker52860_52870.cljs$core$IFn$_invoke$arity$1(G__52865) : input_checker52860_52870.call(null,G__52865));
})();if(cljs.core.truth_(temp__4126__auto___52873))
{var error__839__auto___52874 = temp__4126__auto___52873;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52874], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52859_52869,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___52872,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52874], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var k = G__52862;while(true){
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
{var temp__4126__auto___52875 = (function (){var G__52866 = o__840__auto__;return (output_checker52861_52871.cljs$core$IFn$_invoke$arity$1 ? output_checker52861_52871.cljs$core$IFn$_invoke$arity$1(G__52866) : output_checker52861_52871.call(null,G__52866));
})();if(cljs.core.truth_(temp__4126__auto___52875))
{var error__839__auto___52876 = temp__4126__auto___52875;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52876], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52858_52868,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52876], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___52867,output_schema52858_52868,input_schema52859_52869,input_checker52860_52870,output_checker52861_52871))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema52858_52868,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52859_52869], null)));
var ufv___52886 = schema.utils.use_fn_validation;var output_schema52877_52887 = schema.core.Any;var input_schema52878_52888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker52879_52889 = schema.core.checker(input_schema52878_52888);var output_checker52880_52890 = schema.core.checker(output_schema52877_52887);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___52886,output_schema52877_52887,input_schema52878_52888,input_checker52879_52889,output_checker52880_52890){
return (function explicit_schema_key_map(G__52881){var validate__837__auto__ = ufv___52886.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___52891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52881], null);var temp__4126__auto___52892 = (function (){var G__52884 = args__838__auto___52891;return (input_checker52879_52889.cljs$core$IFn$_invoke$arity$1 ? input_checker52879_52889.cljs$core$IFn$_invoke$arity$1(G__52884) : input_checker52879_52889.call(null,G__52884));
})();if(cljs.core.truth_(temp__4126__auto___52892))
{var error__839__auto___52893 = temp__4126__auto___52892;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52893], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52878_52888,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___52891,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52893], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__52881;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___52894 = (function (){var G__52885 = o__840__auto__;return (output_checker52880_52890.cljs$core$IFn$_invoke$arity$1 ? output_checker52880_52890.cljs$core$IFn$_invoke$arity$1(G__52885) : output_checker52880_52890.call(null,G__52885));
})();if(cljs.core.truth_(temp__4126__auto___52894))
{var error__839__auto___52895 = temp__4126__auto___52894;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52895], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52877_52887,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52895], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___52886,output_schema52877_52887,input_schema52878_52888,input_checker52879_52889,output_checker52880_52890))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema52877_52887,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52878_52888], null)));
var ufv___52905 = schema.utils.use_fn_validation;var output_schema52896_52906 = schema.core.Any;var input_schema52897_52907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker52898_52908 = schema.core.checker(input_schema52897_52907);var output_checker52899_52909 = schema.core.checker(output_schema52896_52906);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___52905,output_schema52896_52906,input_schema52897_52907,input_checker52898_52908,output_checker52899_52909){
return (function split_schema_keys(G__52900){var validate__837__auto__ = ufv___52905.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___52910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52900], null);var temp__4126__auto___52911 = (function (){var G__52903 = args__838__auto___52910;return (input_checker52898_52908.cljs$core$IFn$_invoke$arity$1 ? input_checker52898_52908.cljs$core$IFn$_invoke$arity$1(G__52903) : input_checker52898_52908.call(null,G__52903));
})();if(cljs.core.truth_(temp__4126__auto___52911))
{var error__839__auto___52912 = temp__4126__auto___52911;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52912], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52897_52907,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___52910,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52912], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__52900;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___52913 = (function (){var G__52904 = o__840__auto__;return (output_checker52899_52909.cljs$core$IFn$_invoke$arity$1 ? output_checker52899_52909.cljs$core$IFn$_invoke$arity$1(G__52904) : output_checker52899_52909.call(null,G__52904));
})();if(cljs.core.truth_(temp__4126__auto___52913))
{var error__839__auto___52914 = temp__4126__auto___52913;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52914], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52896_52906,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52914], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___52905,output_schema52896_52906,input_schema52897_52907,input_checker52898_52908,output_checker52899_52909))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema52896_52906,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52897_52907], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__52923){var vec__52924 = p__52923;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52924,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52924,(1),null);var pk = (function (){var G__52925 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__52925) : key_project.call(null,G__52925));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__52926 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52926,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52926,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52927 = ok;var G__52928 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__52927,G__52928) : key_combine.call(null,G__52927,G__52928));
})(),(function (){var G__52929 = ov;var G__52930 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__52929,G__52930) : val_combine.call(null,G__52929,G__52930));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__52931){
var key_project = cljs.core.first(arglist__52931);
arglist__52931 = cljs.core.next(arglist__52931);
var key_combine = cljs.core.first(arglist__52931);
arglist__52931 = cljs.core.next(arglist__52931);
var val_combine = cljs.core.first(arglist__52931);
var maps = cljs.core.rest(arglist__52931);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___52945 = schema.utils.use_fn_validation;var output_schema52933_52946 = plumbing.fnk.schema.InputSchema;var input_schema52934_52947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker52935_52948 = schema.core.checker(input_schema52934_52947);var output_checker52936_52949 = schema.core.checker(output_schema52933_52946);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___52945,output_schema52933_52946,input_schema52934_52947,input_checker52935_52948,output_checker52936_52949){
return (function union_input_schemata(G__52937,G__52938){var validate__837__auto__ = ufv___52945.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___52950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52937,G__52938], null);var temp__4126__auto___52951 = (function (){var G__52943 = args__838__auto___52950;return (input_checker52935_52948.cljs$core$IFn$_invoke$arity$1 ? input_checker52935_52948.cljs$core$IFn$_invoke$arity$1(G__52943) : input_checker52935_52948.call(null,G__52943));
})();if(cljs.core.truth_(temp__4126__auto___52951))
{var error__839__auto___52952 = temp__4126__auto___52951;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52952], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52934_52947,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___52950,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52952], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var i1 = G__52937;var i2 = G__52938;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___52945,output_schema52933_52946,input_schema52934_52947,input_checker52935_52948,output_checker52936_52949){
return (function (p1__52932_SHARP_){if(schema.core.specific_key_QMARK_(p1__52932_SHARP_))
{return schema.core.explicit_schema_key(p1__52932_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__837__auto__,ufv___52945,output_schema52933_52946,input_schema52934_52947,input_checker52935_52948,output_checker52936_52949))
,((function (validate__837__auto__,ufv___52945,output_schema52933_52946,input_schema52934_52947,input_checker52935_52948,output_checker52936_52949){
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
});})(validate__837__auto__,ufv___52945,output_schema52933_52946,input_schema52934_52947,input_checker52935_52948,output_checker52936_52949))
,((function (validate__837__auto__,ufv___52945,output_schema52933_52946,input_schema52934_52947,input_checker52935_52948,output_checker52936_52949){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__837__auto__,ufv___52945,output_schema52933_52946,input_schema52934_52947,input_checker52935_52948,output_checker52936_52949))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___52953 = (function (){var G__52944 = o__840__auto__;return (output_checker52936_52949.cljs$core$IFn$_invoke$arity$1 ? output_checker52936_52949.cljs$core$IFn$_invoke$arity$1(G__52944) : output_checker52936_52949.call(null,G__52944));
})();if(cljs.core.truth_(temp__4126__auto___52953))
{var error__839__auto___52954 = temp__4126__auto___52953;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52954], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52933_52946,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52954], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___52945,output_schema52933_52946,input_schema52934_52947,input_checker52935_52948,output_checker52936_52949))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema52933_52946,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52934_52947], null)));
var ufv___52964 = schema.utils.use_fn_validation;var output_schema52955_52965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema52956_52966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker52957_52967 = schema.core.checker(input_schema52956_52966);var output_checker52958_52968 = schema.core.checker(output_schema52955_52965);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___52964,output_schema52955_52965,input_schema52956_52966,input_checker52957_52967,output_checker52958_52968){
return (function required_toplevel_keys(G__52959){var validate__837__auto__ = ufv___52964.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___52969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__52959], null);var temp__4126__auto___52970 = (function (){var G__52962 = args__838__auto___52969;return (input_checker52957_52967.cljs$core$IFn$_invoke$arity$1 ? input_checker52957_52967.cljs$core$IFn$_invoke$arity$1(G__52962) : input_checker52957_52967.call(null,G__52962));
})();if(cljs.core.truth_(temp__4126__auto___52970))
{var error__839__auto___52971 = temp__4126__auto___52970;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52971], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema52956_52966,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___52969,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52971], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input_schema = G__52959;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___52964,output_schema52955_52965,input_schema52956_52966,input_checker52957_52967,output_checker52958_52968){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__837__auto__,ufv___52964,output_schema52955_52965,input_schema52956_52966,input_checker52957_52967,output_checker52958_52968))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___52972 = (function (){var G__52963 = o__840__auto__;return (output_checker52958_52968.cljs$core$IFn$_invoke$arity$1 ? output_checker52958_52968.cljs$core$IFn$_invoke$arity$1(G__52963) : output_checker52958_52968.call(null,G__52963));
})();if(cljs.core.truth_(temp__4126__auto___52972))
{var error__839__auto___52973 = temp__4126__auto___52972;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___52973], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema52955_52965,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___52973], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___52964,output_schema52955_52965,input_schema52956_52966,input_checker52957_52967,output_checker52958_52968))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema52955_52965,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema52956_52966], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20686__auto__ = (function iter__52988(s__52989){return (new cljs.core.LazySeq(null,(function (){var s__52989__$1 = s__52989;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52989__$1);if(temp__4126__auto__)
{var s__52989__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52989__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__52989__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__52991 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__52990 = (0);while(true){
if((i__52990 < size__20685__auto__))
{var vec__52996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__52990);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52996,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52996,(1),null);cljs.core.chunk_append(b__52991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__52998 = (i__52990 + (1));
i__52990 = G__52998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52991),iter__52988(cljs.core.chunk_rest(s__52989__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52991),null);
}
} else
{var vec__52997 = cljs.core.first(s__52989__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52997,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52997,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__52988(cljs.core.rest(s__52989__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20686__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20686__auto__ = (function iter__53017(s__53018){return (new cljs.core.LazySeq(null,(function (){var s__53018__$1 = s__53018;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53018__$1);if(temp__4126__auto__)
{var s__53018__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53018__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53018__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53020 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53019 = (0);while(true){
if((i__53019 < size__20685__auto__))
{var vec__53025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53019);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53025,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53025,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__53020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__53027 = (i__53019 + (1));
i__53019 = G__53027;
continue;
}
} else
{{
var G__53028 = (i__53019 + (1));
i__53019 = G__53028;
continue;
}
}
} else
{{
var G__53029 = (i__53019 + (1));
i__53019 = G__53029;
continue;
}
}
} else
{{
var G__53030 = (i__53019 + (1));
i__53019 = G__53030;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53020),iter__53017(cljs.core.chunk_rest(s__53018__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53020),null);
}
} else
{var vec__53026 = cljs.core.first(s__53018__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53026,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53026,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__53017(cljs.core.rest(s__53018__$2)));
} else
{{
var G__53031 = cljs.core.rest(s__53018__$2);
s__53018__$1 = G__53031;
continue;
}
}
} else
{{
var G__53032 = cljs.core.rest(s__53018__$2);
s__53018__$1 = G__53032;
continue;
}
}
} else
{{
var G__53033 = cljs.core.rest(s__53018__$2);
s__53018__$1 = G__53033;
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
});return iter__20686__auto__(input_schema);
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
var ufv___53060 = schema.utils.use_fn_validation;var output_schema53034_53061 = schema.core.Any;var input_schema53035_53062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker53036_53063 = schema.core.checker(input_schema53035_53062);var output_checker53037_53064 = schema.core.checker(output_schema53034_53061);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___53060,output_schema53034_53061,input_schema53035_53062,input_checker53036_53063,output_checker53037_53064){
return (function compose_schemata(G__53038,G__53039){var validate__837__auto__ = true;if(validate__837__auto__)
{var args__838__auto___53065 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53038,G__53039], null);var temp__4126__auto___53066 = (function (){var G__53050 = args__838__auto___53065;return (input_checker53036_53063.cljs$core$IFn$_invoke$arity$1 ? input_checker53036_53063.cljs$core$IFn$_invoke$arity$1(G__53050) : input_checker53036_53063.call(null,G__53050));
})();if(cljs.core.truth_(temp__4126__auto___53066))
{var error__839__auto___53067 = temp__4126__auto___53066;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53067], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53035_53062,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53065,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53067], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__53053 = G__53038;var vec__53055 = G__53053;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53055,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53055,(1),null);var G__53054 = G__53039;var vec__53056 = G__53054;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53056,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53056,(1),null);var G__53053__$1 = G__53053;var G__53054__$1 = G__53054;while(true){
var vec__53057 = G__53053__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53057,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53057,(1),null);var vec__53058 = G__53054__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53058,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53058,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__837__auto__)
{var temp__4126__auto___53068 = (function (){var G__53059 = o__840__auto__;return (output_checker53037_53064.cljs$core$IFn$_invoke$arity$1 ? output_checker53037_53064.cljs$core$IFn$_invoke$arity$1(G__53059) : output_checker53037_53064.call(null,G__53059));
})();if(cljs.core.truth_(temp__4126__auto___53068))
{var error__839__auto___53069 = temp__4126__auto___53068;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53069], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53034_53061,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53069], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53060,output_schema53034_53061,input_schema53035_53062,input_checker53036_53063,output_checker53037_53064))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema53034_53061,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53035_53062], null)));
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
var ufv___53172 = schema.utils.use_fn_validation;var output_schema53070_53173 = schema.core.Any;var input_schema53071_53174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker53072_53175 = schema.core.checker(input_schema53071_53174);var output_checker53073_53176 = schema.core.checker(output_schema53070_53173);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176){
return (function split_schema(G__53074,G__53075){var validate__837__auto__ = ufv___53172.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53074,G__53075], null);var temp__4126__auto___53178 = (function (){var G__53124 = args__838__auto___53177;return (input_checker53072_53175.cljs$core$IFn$_invoke$arity$1 ? input_checker53072_53175.cljs$core$IFn$_invoke$arity$1(G__53124) : input_checker53072_53175.call(null,G__53124));
})();if(cljs.core.truth_(temp__4126__auto___53178))
{var error__839__auto___53179 = temp__4126__auto___53178;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53179], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53071_53174,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53177,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53179], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__53074;var ks = G__53075;while(true){
var ks__$1 = cljs.core.set(ks);var iter__20686__auto__ = ((function (ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176){
return (function iter__53125(s__53126){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176){
return (function (){var s__53126__$1 = s__53126;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53126__$1);if(temp__4126__auto__)
{var s__53126__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53126__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53126__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53128 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53127 = (0);while(true){
if((i__53127 < size__20685__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53127);cljs.core.chunk_append(b__53128,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20686__auto__ = ((function (i__53127,in_QMARK_,c__20683__auto__,size__20685__auto__,b__53128,s__53126__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176){
return (function iter__53151(s__53152){return (new cljs.core.LazySeq(null,((function (i__53127,in_QMARK_,c__20683__auto__,size__20685__auto__,b__53128,s__53126__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176){
return (function (){var s__53152__$1 = s__53152;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__53152__$1);if(temp__4126__auto____$1)
{var s__53152__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__53152__$2))
{var c__20683__auto____$1 = cljs.core.chunk_first(s__53152__$2);var size__20685__auto____$1 = cljs.core.count(c__20683__auto____$1);var b__53154 = cljs.core.chunk_buffer(size__20685__auto____$1);if((function (){var i__53153 = (0);while(true){
if((i__53153 < size__20685__auto____$1))
{var vec__53159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto____$1,i__53153);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53159,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53159,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__53154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53180 = (i__53153 + (1));
i__53153 = G__53180;
continue;
}
} else
{{
var G__53181 = (i__53153 + (1));
i__53153 = G__53181;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53154),iter__53151(cljs.core.chunk_rest(s__53152__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53154),null);
}
} else
{var vec__53160 = cljs.core.first(s__53152__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53160,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53160,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53151(cljs.core.rest(s__53152__$2)));
} else
{{
var G__53182 = cljs.core.rest(s__53152__$2);
s__53152__$1 = G__53182;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__53127,in_QMARK_,c__20683__auto__,size__20685__auto__,b__53128,s__53126__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176))
,null,null));
});})(i__53127,in_QMARK_,c__20683__auto__,size__20685__auto__,b__53128,s__53126__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176))
;return iter__20686__auto__(s);
})()));
{
var G__53183 = (i__53127 + (1));
i__53127 = G__53183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53128),iter__53125(cljs.core.chunk_rest(s__53126__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53128),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__53126__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20686__auto__ = ((function (in_QMARK_,s__53126__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176){
return (function iter__53161(s__53162){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__53126__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176){
return (function (){var s__53162__$1 = s__53162;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__53162__$1);if(temp__4126__auto____$1)
{var s__53162__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__53162__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53162__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53164 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53163 = (0);while(true){
if((i__53163 < size__20685__auto__))
{var vec__53169 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53163);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53169,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53169,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__53164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53184 = (i__53163 + (1));
i__53163 = G__53184;
continue;
}
} else
{{
var G__53185 = (i__53163 + (1));
i__53163 = G__53185;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53164),iter__53161(cljs.core.chunk_rest(s__53162__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53164),null);
}
} else
{var vec__53170 = cljs.core.first(s__53162__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53170,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53170,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53161(cljs.core.rest(s__53162__$2)));
} else
{{
var G__53186 = cljs.core.rest(s__53162__$2);
s__53162__$1 = G__53186;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__53126__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176))
,null,null));
});})(in_QMARK_,s__53126__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176))
;return iter__20686__auto__(s);
})()),iter__53125(cljs.core.rest(s__53126__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176))
,null,null));
});})(ks__$1,validate__837__auto__,ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176))
;return iter__20686__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___53187 = (function (){var G__53171 = o__840__auto__;return (output_checker53073_53176.cljs$core$IFn$_invoke$arity$1 ? output_checker53073_53176.cljs$core$IFn$_invoke$arity$1(G__53171) : output_checker53073_53176.call(null,G__53171));
})();if(cljs.core.truth_(temp__4126__auto___53187))
{var error__839__auto___53188 = temp__4126__auto___53187;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53188], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53070_53173,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53188], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53172,output_schema53070_53173,input_schema53071_53174,input_checker53072_53175,output_checker53073_53176))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema53070_53173,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53071_53174], null)));
var ufv___53223 = schema.utils.use_fn_validation;var output_schema53189_53224 = plumbing.fnk.schema.GraphIOSchemata;var input_schema53190_53225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker53191_53226 = schema.core.checker(input_schema53190_53225);var output_checker53192_53227 = schema.core.checker(output_schema53189_53224);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___53223,output_schema53189_53224,input_schema53190_53225,input_checker53191_53226,output_checker53192_53227){
return (function sequence_schemata(G__53193,G__53194){var validate__837__auto__ = ufv___53223.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53193,G__53194], null);var temp__4126__auto___53229 = (function (){var G__53209 = args__838__auto___53228;return (input_checker53191_53226.cljs$core$IFn$_invoke$arity$1 ? input_checker53191_53226.cljs$core$IFn$_invoke$arity$1(G__53209) : input_checker53191_53226.call(null,G__53209));
})();if(cljs.core.truth_(temp__4126__auto___53229))
{var error__839__auto___53230 = temp__4126__auto___53229;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53230], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53190_53225,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53228,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53230], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__53213 = G__53193;var vec__53215 = G__53213;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53215,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53215,(1),null);var G__53214 = G__53194;var vec__53216 = G__53214;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53216,(0),null);var vec__53217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53216,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53217,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53217,(1),null);var G__53213__$1 = G__53213;var G__53214__$1 = G__53214;while(true){
var vec__53218 = G__53213__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53218,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53218,(1),null);var vec__53219 = G__53214__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53219,(0),null);var vec__53220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53219,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53220,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53220,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__53221 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53221,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53221,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___53231 = (function (){var G__53222 = o__840__auto__;return (output_checker53192_53227.cljs$core$IFn$_invoke$arity$1 ? output_checker53192_53227.cljs$core$IFn$_invoke$arity$1(G__53222) : output_checker53192_53227.call(null,G__53222));
})();if(cljs.core.truth_(temp__4126__auto___53231))
{var error__839__auto___53232 = temp__4126__auto___53231;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53232], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53189_53224,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53232], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53223,output_schema53189_53224,input_schema53190_53225,input_checker53191_53226,output_checker53192_53227))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema53189_53224,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53190_53225], null)));
//# sourceMappingURL=schema.js.map