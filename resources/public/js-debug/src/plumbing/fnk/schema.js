goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__867__868__auto__){var G__72014 = p1__867__868__auto__;if(G__72014)
{var bit__20968__auto__ = null;if(cljs.core.truth_((function (){var or__19711__auto__ = bit__20968__auto__;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return G__72014.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__72014.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__72014);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__72014);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72015_SHARP_){return (cljs.core.val(p1__72015_SHARP_) > (1));
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
var vec__72017 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72017,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72017,(1),null);var p = vec__72017;if(cljs.core.truth_(p))
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
var ufv___72027 = schema.utils.use_fn_validation;var output_schema72018_72028 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema72019_72029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker72020_72030 = schema.core.checker(input_schema72019_72029);var output_checker72021_72031 = schema.core.checker(output_schema72018_72028);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___72027,output_schema72018_72028,input_schema72019_72029,input_checker72020_72030,output_checker72021_72031){
return (function unwrap_schema_form_key(G__72022){var validate__837__auto__ = ufv___72027.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___72032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72022], null);var temp__4126__auto___72033 = (function (){var G__72025 = args__838__auto___72032;return (input_checker72020_72030.cljs$core$IFn$_invoke$arity$1 ? input_checker72020_72030.cljs$core$IFn$_invoke$arity$1(G__72025) : input_checker72020_72030.call(null,G__72025));
})();if(cljs.core.truth_(temp__4126__auto___72033))
{var error__839__auto___72034 = temp__4126__auto___72033;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72034], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72019_72029,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___72032,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72034], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var k = G__72022;while(true){
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
{var temp__4126__auto___72035 = (function (){var G__72026 = o__840__auto__;return (output_checker72021_72031.cljs$core$IFn$_invoke$arity$1 ? output_checker72021_72031.cljs$core$IFn$_invoke$arity$1(G__72026) : output_checker72021_72031.call(null,G__72026));
})();if(cljs.core.truth_(temp__4126__auto___72035))
{var error__839__auto___72036 = temp__4126__auto___72035;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72036], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72018_72028,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72036], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___72027,output_schema72018_72028,input_schema72019_72029,input_checker72020_72030,output_checker72021_72031))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema72018_72028,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72019_72029], null)));
var ufv___72046 = schema.utils.use_fn_validation;var output_schema72037_72047 = schema.core.Any;var input_schema72038_72048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker72039_72049 = schema.core.checker(input_schema72038_72048);var output_checker72040_72050 = schema.core.checker(output_schema72037_72047);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___72046,output_schema72037_72047,input_schema72038_72048,input_checker72039_72049,output_checker72040_72050){
return (function explicit_schema_key_map(G__72041){var validate__837__auto__ = ufv___72046.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___72051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72041], null);var temp__4126__auto___72052 = (function (){var G__72044 = args__838__auto___72051;return (input_checker72039_72049.cljs$core$IFn$_invoke$arity$1 ? input_checker72039_72049.cljs$core$IFn$_invoke$arity$1(G__72044) : input_checker72039_72049.call(null,G__72044));
})();if(cljs.core.truth_(temp__4126__auto___72052))
{var error__839__auto___72053 = temp__4126__auto___72052;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72053], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72038_72048,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___72051,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72053], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__72041;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___72054 = (function (){var G__72045 = o__840__auto__;return (output_checker72040_72050.cljs$core$IFn$_invoke$arity$1 ? output_checker72040_72050.cljs$core$IFn$_invoke$arity$1(G__72045) : output_checker72040_72050.call(null,G__72045));
})();if(cljs.core.truth_(temp__4126__auto___72054))
{var error__839__auto___72055 = temp__4126__auto___72054;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72055], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72037_72047,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72055], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___72046,output_schema72037_72047,input_schema72038_72048,input_checker72039_72049,output_checker72040_72050))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema72037_72047,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72038_72048], null)));
var ufv___72065 = schema.utils.use_fn_validation;var output_schema72056_72066 = schema.core.Any;var input_schema72057_72067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker72058_72068 = schema.core.checker(input_schema72057_72067);var output_checker72059_72069 = schema.core.checker(output_schema72056_72066);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___72065,output_schema72056_72066,input_schema72057_72067,input_checker72058_72068,output_checker72059_72069){
return (function split_schema_keys(G__72060){var validate__837__auto__ = ufv___72065.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___72070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72060], null);var temp__4126__auto___72071 = (function (){var G__72063 = args__838__auto___72070;return (input_checker72058_72068.cljs$core$IFn$_invoke$arity$1 ? input_checker72058_72068.cljs$core$IFn$_invoke$arity$1(G__72063) : input_checker72058_72068.call(null,G__72063));
})();if(cljs.core.truth_(temp__4126__auto___72071))
{var error__839__auto___72072 = temp__4126__auto___72071;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72072], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72057_72067,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___72070,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72072], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__72060;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___72073 = (function (){var G__72064 = o__840__auto__;return (output_checker72059_72069.cljs$core$IFn$_invoke$arity$1 ? output_checker72059_72069.cljs$core$IFn$_invoke$arity$1(G__72064) : output_checker72059_72069.call(null,G__72064));
})();if(cljs.core.truth_(temp__4126__auto___72073))
{var error__839__auto___72074 = temp__4126__auto___72073;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72074], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72056_72066,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72074], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___72065,output_schema72056_72066,input_schema72057_72067,input_checker72058_72068,output_checker72059_72069))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema72056_72066,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72057_72067], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__72083){var vec__72084 = p__72083;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72084,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72084,(1),null);var pk = (function (){var G__72085 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__72085) : key_project.call(null,G__72085));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__72086 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72086,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72086,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72087 = ok;var G__72088 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__72087,G__72088) : key_combine.call(null,G__72087,G__72088));
})(),(function (){var G__72089 = ov;var G__72090 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__72089,G__72090) : val_combine.call(null,G__72089,G__72090));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__72091){
var key_project = cljs.core.first(arglist__72091);
arglist__72091 = cljs.core.next(arglist__72091);
var key_combine = cljs.core.first(arglist__72091);
arglist__72091 = cljs.core.next(arglist__72091);
var val_combine = cljs.core.first(arglist__72091);
var maps = cljs.core.rest(arglist__72091);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___72105 = schema.utils.use_fn_validation;var output_schema72093_72106 = plumbing.fnk.schema.InputSchema;var input_schema72094_72107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker72095_72108 = schema.core.checker(input_schema72094_72107);var output_checker72096_72109 = schema.core.checker(output_schema72093_72106);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___72105,output_schema72093_72106,input_schema72094_72107,input_checker72095_72108,output_checker72096_72109){
return (function union_input_schemata(G__72097,G__72098){var validate__837__auto__ = ufv___72105.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___72110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72097,G__72098], null);var temp__4126__auto___72111 = (function (){var G__72103 = args__838__auto___72110;return (input_checker72095_72108.cljs$core$IFn$_invoke$arity$1 ? input_checker72095_72108.cljs$core$IFn$_invoke$arity$1(G__72103) : input_checker72095_72108.call(null,G__72103));
})();if(cljs.core.truth_(temp__4126__auto___72111))
{var error__839__auto___72112 = temp__4126__auto___72111;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72112], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72094_72107,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___72110,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72112], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var i1 = G__72097;var i2 = G__72098;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___72105,output_schema72093_72106,input_schema72094_72107,input_checker72095_72108,output_checker72096_72109){
return (function (p1__72092_SHARP_){if(schema.core.specific_key_QMARK_(p1__72092_SHARP_))
{return schema.core.explicit_schema_key(p1__72092_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__837__auto__,ufv___72105,output_schema72093_72106,input_schema72094_72107,input_checker72095_72108,output_checker72096_72109))
,((function (validate__837__auto__,ufv___72105,output_schema72093_72106,input_schema72094_72107,input_checker72095_72108,output_checker72096_72109){
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
});})(validate__837__auto__,ufv___72105,output_schema72093_72106,input_schema72094_72107,input_checker72095_72108,output_checker72096_72109))
,((function (validate__837__auto__,ufv___72105,output_schema72093_72106,input_schema72094_72107,input_checker72095_72108,output_checker72096_72109){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__837__auto__,ufv___72105,output_schema72093_72106,input_schema72094_72107,input_checker72095_72108,output_checker72096_72109))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___72113 = (function (){var G__72104 = o__840__auto__;return (output_checker72096_72109.cljs$core$IFn$_invoke$arity$1 ? output_checker72096_72109.cljs$core$IFn$_invoke$arity$1(G__72104) : output_checker72096_72109.call(null,G__72104));
})();if(cljs.core.truth_(temp__4126__auto___72113))
{var error__839__auto___72114 = temp__4126__auto___72113;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72114], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72093_72106,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72114], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___72105,output_schema72093_72106,input_schema72094_72107,input_checker72095_72108,output_checker72096_72109))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema72093_72106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72094_72107], null)));
var ufv___72124 = schema.utils.use_fn_validation;var output_schema72115_72125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema72116_72126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker72117_72127 = schema.core.checker(input_schema72116_72126);var output_checker72118_72128 = schema.core.checker(output_schema72115_72125);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___72124,output_schema72115_72125,input_schema72116_72126,input_checker72117_72127,output_checker72118_72128){
return (function required_toplevel_keys(G__72119){var validate__837__auto__ = ufv___72124.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___72129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72119], null);var temp__4126__auto___72130 = (function (){var G__72122 = args__838__auto___72129;return (input_checker72117_72127.cljs$core$IFn$_invoke$arity$1 ? input_checker72117_72127.cljs$core$IFn$_invoke$arity$1(G__72122) : input_checker72117_72127.call(null,G__72122));
})();if(cljs.core.truth_(temp__4126__auto___72130))
{var error__839__auto___72131 = temp__4126__auto___72130;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72131], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72116_72126,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___72129,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72131], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input_schema = G__72119;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___72124,output_schema72115_72125,input_schema72116_72126,input_checker72117_72127,output_checker72118_72128){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__837__auto__,ufv___72124,output_schema72115_72125,input_schema72116_72126,input_checker72117_72127,output_checker72118_72128))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___72132 = (function (){var G__72123 = o__840__auto__;return (output_checker72118_72128.cljs$core$IFn$_invoke$arity$1 ? output_checker72118_72128.cljs$core$IFn$_invoke$arity$1(G__72123) : output_checker72118_72128.call(null,G__72123));
})();if(cljs.core.truth_(temp__4126__auto___72132))
{var error__839__auto___72133 = temp__4126__auto___72132;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72133], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72115_72125,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72133], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___72124,output_schema72115_72125,input_schema72116_72126,input_checker72117_72127,output_checker72118_72128))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema72115_72125,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72116_72126], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21069__auto__ = (function iter__72148(s__72149){return (new cljs.core.LazySeq(null,(function (){var s__72149__$1 = s__72149;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72149__$1);if(temp__4126__auto__)
{var s__72149__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72149__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__72149__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__72151 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__72150 = (0);while(true){
if((i__72150 < size__21068__auto__))
{var vec__72156 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__72150);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72156,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72156,(1),null);cljs.core.chunk_append(b__72151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__72158 = (i__72150 + (1));
i__72150 = G__72158;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72151),iter__72148(cljs.core.chunk_rest(s__72149__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72151),null);
}
} else
{var vec__72157 = cljs.core.first(s__72149__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72157,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72157,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__72148(cljs.core.rest(s__72149__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21069__auto__ = (function iter__72177(s__72178){return (new cljs.core.LazySeq(null,(function (){var s__72178__$1 = s__72178;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72178__$1);if(temp__4126__auto__)
{var s__72178__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72178__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__72178__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__72180 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__72179 = (0);while(true){
if((i__72179 < size__21068__auto__))
{var vec__72185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__72179);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72185,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72185,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__72180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__72187 = (i__72179 + (1));
i__72179 = G__72187;
continue;
}
} else
{{
var G__72188 = (i__72179 + (1));
i__72179 = G__72188;
continue;
}
}
} else
{{
var G__72189 = (i__72179 + (1));
i__72179 = G__72189;
continue;
}
}
} else
{{
var G__72190 = (i__72179 + (1));
i__72179 = G__72190;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72180),iter__72177(cljs.core.chunk_rest(s__72178__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72180),null);
}
} else
{var vec__72186 = cljs.core.first(s__72178__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72186,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72186,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__72177(cljs.core.rest(s__72178__$2)));
} else
{{
var G__72191 = cljs.core.rest(s__72178__$2);
s__72178__$1 = G__72191;
continue;
}
}
} else
{{
var G__72192 = cljs.core.rest(s__72178__$2);
s__72178__$1 = G__72192;
continue;
}
}
} else
{{
var G__72193 = cljs.core.rest(s__72178__$2);
s__72178__$1 = G__72193;
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
});return iter__21069__auto__(input_schema);
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
var ufv___72220 = schema.utils.use_fn_validation;var output_schema72194_72221 = schema.core.Any;var input_schema72195_72222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker72196_72223 = schema.core.checker(input_schema72195_72222);var output_checker72197_72224 = schema.core.checker(output_schema72194_72221);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___72220,output_schema72194_72221,input_schema72195_72222,input_checker72196_72223,output_checker72197_72224){
return (function compose_schemata(G__72198,G__72199){var validate__837__auto__ = true;if(validate__837__auto__)
{var args__838__auto___72225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72198,G__72199], null);var temp__4126__auto___72226 = (function (){var G__72210 = args__838__auto___72225;return (input_checker72196_72223.cljs$core$IFn$_invoke$arity$1 ? input_checker72196_72223.cljs$core$IFn$_invoke$arity$1(G__72210) : input_checker72196_72223.call(null,G__72210));
})();if(cljs.core.truth_(temp__4126__auto___72226))
{var error__839__auto___72227 = temp__4126__auto___72226;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72227], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72195_72222,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___72225,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72227], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__72213 = G__72198;var vec__72215 = G__72213;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72215,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72215,(1),null);var G__72214 = G__72199;var vec__72216 = G__72214;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72216,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72216,(1),null);var G__72213__$1 = G__72213;var G__72214__$1 = G__72214;while(true){
var vec__72217 = G__72213__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72217,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72217,(1),null);var vec__72218 = G__72214__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72218,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72218,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__837__auto__)
{var temp__4126__auto___72228 = (function (){var G__72219 = o__840__auto__;return (output_checker72197_72224.cljs$core$IFn$_invoke$arity$1 ? output_checker72197_72224.cljs$core$IFn$_invoke$arity$1(G__72219) : output_checker72197_72224.call(null,G__72219));
})();if(cljs.core.truth_(temp__4126__auto___72228))
{var error__839__auto___72229 = temp__4126__auto___72228;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72229], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72194_72221,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72229], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___72220,output_schema72194_72221,input_schema72195_72222,input_checker72196_72223,output_checker72197_72224))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema72194_72221,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72195_72222], null)));
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
var ufv___72332 = schema.utils.use_fn_validation;var output_schema72230_72333 = schema.core.Any;var input_schema72231_72334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker72232_72335 = schema.core.checker(input_schema72231_72334);var output_checker72233_72336 = schema.core.checker(output_schema72230_72333);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336){
return (function split_schema(G__72234,G__72235){var validate__837__auto__ = ufv___72332.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___72337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72234,G__72235], null);var temp__4126__auto___72338 = (function (){var G__72284 = args__838__auto___72337;return (input_checker72232_72335.cljs$core$IFn$_invoke$arity$1 ? input_checker72232_72335.cljs$core$IFn$_invoke$arity$1(G__72284) : input_checker72232_72335.call(null,G__72284));
})();if(cljs.core.truth_(temp__4126__auto___72338))
{var error__839__auto___72339 = temp__4126__auto___72338;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72339], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72231_72334,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___72337,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72339], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__72234;var ks = G__72235;while(true){
var ks__$1 = cljs.core.set(ks);var iter__21069__auto__ = ((function (ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336){
return (function iter__72285(s__72286){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336){
return (function (){var s__72286__$1 = s__72286;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72286__$1);if(temp__4126__auto__)
{var s__72286__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72286__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__72286__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__72288 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__72287 = (0);while(true){
if((i__72287 < size__21068__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__72287);cljs.core.chunk_append(b__72288,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21069__auto__ = ((function (i__72287,in_QMARK_,c__21067__auto__,size__21068__auto__,b__72288,s__72286__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336){
return (function iter__72311(s__72312){return (new cljs.core.LazySeq(null,((function (i__72287,in_QMARK_,c__21067__auto__,size__21068__auto__,b__72288,s__72286__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336){
return (function (){var s__72312__$1 = s__72312;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__72312__$1);if(temp__4126__auto____$1)
{var s__72312__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__72312__$2))
{var c__21067__auto____$1 = cljs.core.chunk_first(s__72312__$2);var size__21068__auto____$1 = cljs.core.count(c__21067__auto____$1);var b__72314 = cljs.core.chunk_buffer(size__21068__auto____$1);if((function (){var i__72313 = (0);while(true){
if((i__72313 < size__21068__auto____$1))
{var vec__72319 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto____$1,i__72313);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72319,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72319,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__72314,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__72340 = (i__72313 + (1));
i__72313 = G__72340;
continue;
}
} else
{{
var G__72341 = (i__72313 + (1));
i__72313 = G__72341;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72314),iter__72311(cljs.core.chunk_rest(s__72312__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72314),null);
}
} else
{var vec__72320 = cljs.core.first(s__72312__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72320,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72320,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__72311(cljs.core.rest(s__72312__$2)));
} else
{{
var G__72342 = cljs.core.rest(s__72312__$2);
s__72312__$1 = G__72342;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__72287,in_QMARK_,c__21067__auto__,size__21068__auto__,b__72288,s__72286__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336))
,null,null));
});})(i__72287,in_QMARK_,c__21067__auto__,size__21068__auto__,b__72288,s__72286__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336))
;return iter__21069__auto__(s);
})()));
{
var G__72343 = (i__72287 + (1));
i__72287 = G__72343;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72288),iter__72285(cljs.core.chunk_rest(s__72286__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72288),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__72286__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21069__auto__ = ((function (in_QMARK_,s__72286__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336){
return (function iter__72321(s__72322){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__72286__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336){
return (function (){var s__72322__$1 = s__72322;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__72322__$1);if(temp__4126__auto____$1)
{var s__72322__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__72322__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__72322__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__72324 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__72323 = (0);while(true){
if((i__72323 < size__21068__auto__))
{var vec__72329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__72323);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72329,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72329,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__72324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__72344 = (i__72323 + (1));
i__72323 = G__72344;
continue;
}
} else
{{
var G__72345 = (i__72323 + (1));
i__72323 = G__72345;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72324),iter__72321(cljs.core.chunk_rest(s__72322__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72324),null);
}
} else
{var vec__72330 = cljs.core.first(s__72322__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72330,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72330,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__72321(cljs.core.rest(s__72322__$2)));
} else
{{
var G__72346 = cljs.core.rest(s__72322__$2);
s__72322__$1 = G__72346;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__72286__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336))
,null,null));
});})(in_QMARK_,s__72286__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336))
;return iter__21069__auto__(s);
})()),iter__72285(cljs.core.rest(s__72286__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336))
,null,null));
});})(ks__$1,validate__837__auto__,ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336))
;return iter__21069__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___72347 = (function (){var G__72331 = o__840__auto__;return (output_checker72233_72336.cljs$core$IFn$_invoke$arity$1 ? output_checker72233_72336.cljs$core$IFn$_invoke$arity$1(G__72331) : output_checker72233_72336.call(null,G__72331));
})();if(cljs.core.truth_(temp__4126__auto___72347))
{var error__839__auto___72348 = temp__4126__auto___72347;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72348], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72230_72333,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72348], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___72332,output_schema72230_72333,input_schema72231_72334,input_checker72232_72335,output_checker72233_72336))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema72230_72333,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72231_72334], null)));
var ufv___72383 = schema.utils.use_fn_validation;var output_schema72349_72384 = plumbing.fnk.schema.GraphIOSchemata;var input_schema72350_72385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker72351_72386 = schema.core.checker(input_schema72350_72385);var output_checker72352_72387 = schema.core.checker(output_schema72349_72384);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___72383,output_schema72349_72384,input_schema72350_72385,input_checker72351_72386,output_checker72352_72387){
return (function sequence_schemata(G__72353,G__72354){var validate__837__auto__ = ufv___72383.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___72388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72353,G__72354], null);var temp__4126__auto___72389 = (function (){var G__72369 = args__838__auto___72388;return (input_checker72351_72386.cljs$core$IFn$_invoke$arity$1 ? input_checker72351_72386.cljs$core$IFn$_invoke$arity$1(G__72369) : input_checker72351_72386.call(null,G__72369));
})();if(cljs.core.truth_(temp__4126__auto___72389))
{var error__839__auto___72390 = temp__4126__auto___72389;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72390], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72350_72385,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___72388,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72390], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__72373 = G__72353;var vec__72375 = G__72373;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72375,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72375,(1),null);var G__72374 = G__72354;var vec__72376 = G__72374;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72376,(0),null);var vec__72377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72376,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72377,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72377,(1),null);var G__72373__$1 = G__72373;var G__72374__$1 = G__72374;while(true){
var vec__72378 = G__72373__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72378,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72378,(1),null);var vec__72379 = G__72374__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72379,(0),null);var vec__72380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72379,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72380,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72380,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__72381 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72381,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72381,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___72391 = (function (){var G__72382 = o__840__auto__;return (output_checker72352_72387.cljs$core$IFn$_invoke$arity$1 ? output_checker72352_72387.cljs$core$IFn$_invoke$arity$1(G__72382) : output_checker72352_72387.call(null,G__72382));
})();if(cljs.core.truth_(temp__4126__auto___72391))
{var error__839__auto___72392 = temp__4126__auto___72391;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___72392], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72349_72384,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___72392], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___72383,output_schema72349_72384,input_schema72350_72385,input_checker72351_72386,output_checker72352_72387))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema72349_72384,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72350_72385], null)));
//# sourceMappingURL=schema.js.map