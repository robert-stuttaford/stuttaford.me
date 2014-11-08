goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__867__868__auto__){var G__53042 = p1__867__868__auto__;if(G__53042)
{var bit__20847__auto__ = null;if(cljs.core.truth_((function (){var or__19586__auto__ = bit__20847__auto__;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return G__53042.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__53042.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__53042);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__53042);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53043_SHARP_){return (cljs.core.val(p1__53043_SHARP_) > (1));
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
var vec__53045 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(1),null);var p = vec__53045;if(cljs.core.truth_(p))
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
var ufv___53055 = schema.utils.use_fn_validation;var output_schema53046_53056 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema53047_53057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker53048_53058 = schema.core.checker(input_schema53047_53057);var output_checker53049_53059 = schema.core.checker(output_schema53046_53056);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___53055,output_schema53046_53056,input_schema53047_53057,input_checker53048_53058,output_checker53049_53059){
return (function unwrap_schema_form_key(G__53050){var validate__837__auto__ = ufv___53055.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53050], null);var temp__4126__auto___53061 = (function (){var G__53053 = args__838__auto___53060;return (input_checker53048_53058.cljs$core$IFn$_invoke$arity$1 ? input_checker53048_53058.cljs$core$IFn$_invoke$arity$1(G__53053) : input_checker53048_53058.call(null,G__53053));
})();if(cljs.core.truth_(temp__4126__auto___53061))
{var error__839__auto___53062 = temp__4126__auto___53061;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53062], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53047_53057,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53060,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53062], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var k = G__53050;while(true){
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
{var temp__4126__auto___53063 = (function (){var G__53054 = o__840__auto__;return (output_checker53049_53059.cljs$core$IFn$_invoke$arity$1 ? output_checker53049_53059.cljs$core$IFn$_invoke$arity$1(G__53054) : output_checker53049_53059.call(null,G__53054));
})();if(cljs.core.truth_(temp__4126__auto___53063))
{var error__839__auto___53064 = temp__4126__auto___53063;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53064], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53046_53056,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53064], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53055,output_schema53046_53056,input_schema53047_53057,input_checker53048_53058,output_checker53049_53059))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema53046_53056,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53047_53057], null)));
var ufv___53074 = schema.utils.use_fn_validation;var output_schema53065_53075 = schema.core.Any;var input_schema53066_53076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker53067_53077 = schema.core.checker(input_schema53066_53076);var output_checker53068_53078 = schema.core.checker(output_schema53065_53075);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___53074,output_schema53065_53075,input_schema53066_53076,input_checker53067_53077,output_checker53068_53078){
return (function explicit_schema_key_map(G__53069){var validate__837__auto__ = ufv___53074.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53069], null);var temp__4126__auto___53080 = (function (){var G__53072 = args__838__auto___53079;return (input_checker53067_53077.cljs$core$IFn$_invoke$arity$1 ? input_checker53067_53077.cljs$core$IFn$_invoke$arity$1(G__53072) : input_checker53067_53077.call(null,G__53072));
})();if(cljs.core.truth_(temp__4126__auto___53080))
{var error__839__auto___53081 = temp__4126__auto___53080;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53081], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53066_53076,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53079,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53081], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__53069;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___53082 = (function (){var G__53073 = o__840__auto__;return (output_checker53068_53078.cljs$core$IFn$_invoke$arity$1 ? output_checker53068_53078.cljs$core$IFn$_invoke$arity$1(G__53073) : output_checker53068_53078.call(null,G__53073));
})();if(cljs.core.truth_(temp__4126__auto___53082))
{var error__839__auto___53083 = temp__4126__auto___53082;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53083], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53065_53075,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53083], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53074,output_schema53065_53075,input_schema53066_53076,input_checker53067_53077,output_checker53068_53078))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema53065_53075,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53066_53076], null)));
var ufv___53093 = schema.utils.use_fn_validation;var output_schema53084_53094 = schema.core.Any;var input_schema53085_53095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker53086_53096 = schema.core.checker(input_schema53085_53095);var output_checker53087_53097 = schema.core.checker(output_schema53084_53094);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___53093,output_schema53084_53094,input_schema53085_53095,input_checker53086_53096,output_checker53087_53097){
return (function split_schema_keys(G__53088){var validate__837__auto__ = ufv___53093.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53088], null);var temp__4126__auto___53099 = (function (){var G__53091 = args__838__auto___53098;return (input_checker53086_53096.cljs$core$IFn$_invoke$arity$1 ? input_checker53086_53096.cljs$core$IFn$_invoke$arity$1(G__53091) : input_checker53086_53096.call(null,G__53091));
})();if(cljs.core.truth_(temp__4126__auto___53099))
{var error__839__auto___53100 = temp__4126__auto___53099;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53100], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53085_53095,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53098,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53100], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__53088;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___53101 = (function (){var G__53092 = o__840__auto__;return (output_checker53087_53097.cljs$core$IFn$_invoke$arity$1 ? output_checker53087_53097.cljs$core$IFn$_invoke$arity$1(G__53092) : output_checker53087_53097.call(null,G__53092));
})();if(cljs.core.truth_(temp__4126__auto___53101))
{var error__839__auto___53102 = temp__4126__auto___53101;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53102], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53084_53094,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53102], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53093,output_schema53084_53094,input_schema53085_53095,input_checker53086_53096,output_checker53087_53097))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema53084_53094,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53085_53095], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__53111){var vec__53112 = p__53111;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53112,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53112,(1),null);var pk = (function (){var G__53113 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__53113) : key_project.call(null,G__53113));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__53114 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53114,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53114,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53115 = ok;var G__53116 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__53115,G__53116) : key_combine.call(null,G__53115,G__53116));
})(),(function (){var G__53117 = ov;var G__53118 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__53117,G__53118) : val_combine.call(null,G__53117,G__53118));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__53119){
var key_project = cljs.core.first(arglist__53119);
arglist__53119 = cljs.core.next(arglist__53119);
var key_combine = cljs.core.first(arglist__53119);
arglist__53119 = cljs.core.next(arglist__53119);
var val_combine = cljs.core.first(arglist__53119);
var maps = cljs.core.rest(arglist__53119);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___53133 = schema.utils.use_fn_validation;var output_schema53121_53134 = plumbing.fnk.schema.InputSchema;var input_schema53122_53135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker53123_53136 = schema.core.checker(input_schema53122_53135);var output_checker53124_53137 = schema.core.checker(output_schema53121_53134);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___53133,output_schema53121_53134,input_schema53122_53135,input_checker53123_53136,output_checker53124_53137){
return (function union_input_schemata(G__53125,G__53126){var validate__837__auto__ = ufv___53133.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53125,G__53126], null);var temp__4126__auto___53139 = (function (){var G__53131 = args__838__auto___53138;return (input_checker53123_53136.cljs$core$IFn$_invoke$arity$1 ? input_checker53123_53136.cljs$core$IFn$_invoke$arity$1(G__53131) : input_checker53123_53136.call(null,G__53131));
})();if(cljs.core.truth_(temp__4126__auto___53139))
{var error__839__auto___53140 = temp__4126__auto___53139;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53140], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53122_53135,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53138,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53140], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var i1 = G__53125;var i2 = G__53126;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___53133,output_schema53121_53134,input_schema53122_53135,input_checker53123_53136,output_checker53124_53137){
return (function (p1__53120_SHARP_){if(schema.core.specific_key_QMARK_(p1__53120_SHARP_))
{return schema.core.explicit_schema_key(p1__53120_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__837__auto__,ufv___53133,output_schema53121_53134,input_schema53122_53135,input_checker53123_53136,output_checker53124_53137))
,((function (validate__837__auto__,ufv___53133,output_schema53121_53134,input_schema53122_53135,input_checker53123_53136,output_checker53124_53137){
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
});})(validate__837__auto__,ufv___53133,output_schema53121_53134,input_schema53122_53135,input_checker53123_53136,output_checker53124_53137))
,((function (validate__837__auto__,ufv___53133,output_schema53121_53134,input_schema53122_53135,input_checker53123_53136,output_checker53124_53137){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__837__auto__,ufv___53133,output_schema53121_53134,input_schema53122_53135,input_checker53123_53136,output_checker53124_53137))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___53141 = (function (){var G__53132 = o__840__auto__;return (output_checker53124_53137.cljs$core$IFn$_invoke$arity$1 ? output_checker53124_53137.cljs$core$IFn$_invoke$arity$1(G__53132) : output_checker53124_53137.call(null,G__53132));
})();if(cljs.core.truth_(temp__4126__auto___53141))
{var error__839__auto___53142 = temp__4126__auto___53141;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53142], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53121_53134,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53142], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53133,output_schema53121_53134,input_schema53122_53135,input_checker53123_53136,output_checker53124_53137))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema53121_53134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53122_53135], null)));
var ufv___53152 = schema.utils.use_fn_validation;var output_schema53143_53153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema53144_53154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker53145_53155 = schema.core.checker(input_schema53144_53154);var output_checker53146_53156 = schema.core.checker(output_schema53143_53153);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___53152,output_schema53143_53153,input_schema53144_53154,input_checker53145_53155,output_checker53146_53156){
return (function required_toplevel_keys(G__53147){var validate__837__auto__ = ufv___53152.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53147], null);var temp__4126__auto___53158 = (function (){var G__53150 = args__838__auto___53157;return (input_checker53145_53155.cljs$core$IFn$_invoke$arity$1 ? input_checker53145_53155.cljs$core$IFn$_invoke$arity$1(G__53150) : input_checker53145_53155.call(null,G__53150));
})();if(cljs.core.truth_(temp__4126__auto___53158))
{var error__839__auto___53159 = temp__4126__auto___53158;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53159], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53144_53154,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53157,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53159], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input_schema = G__53147;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___53152,output_schema53143_53153,input_schema53144_53154,input_checker53145_53155,output_checker53146_53156){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__837__auto__,ufv___53152,output_schema53143_53153,input_schema53144_53154,input_checker53145_53155,output_checker53146_53156))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___53160 = (function (){var G__53151 = o__840__auto__;return (output_checker53146_53156.cljs$core$IFn$_invoke$arity$1 ? output_checker53146_53156.cljs$core$IFn$_invoke$arity$1(G__53151) : output_checker53146_53156.call(null,G__53151));
})();if(cljs.core.truth_(temp__4126__auto___53160))
{var error__839__auto___53161 = temp__4126__auto___53160;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53161], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53143_53153,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53161], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53152,output_schema53143_53153,input_schema53144_53154,input_checker53145_53155,output_checker53146_53156))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema53143_53153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53144_53154], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20990__auto__ = (function iter__53176(s__53177){return (new cljs.core.LazySeq(null,(function (){var s__53177__$1 = s__53177;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53177__$1);if(temp__4126__auto__)
{var s__53177__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53177__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__53177__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__53179 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__53178 = (0);while(true){
if((i__53178 < size__20989__auto__))
{var vec__53184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__53178);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53184,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53184,(1),null);cljs.core.chunk_append(b__53179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__53186 = (i__53178 + (1));
i__53178 = G__53186;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53179),iter__53176(cljs.core.chunk_rest(s__53177__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53179),null);
}
} else
{var vec__53185 = cljs.core.first(s__53177__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53185,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53185,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__53176(cljs.core.rest(s__53177__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20990__auto__ = (function iter__53205(s__53206){return (new cljs.core.LazySeq(null,(function (){var s__53206__$1 = s__53206;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53206__$1);if(temp__4126__auto__)
{var s__53206__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53206__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__53206__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__53208 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__53207 = (0);while(true){
if((i__53207 < size__20989__auto__))
{var vec__53213 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__53207);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53213,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53213,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__53208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__53215 = (i__53207 + (1));
i__53207 = G__53215;
continue;
}
} else
{{
var G__53216 = (i__53207 + (1));
i__53207 = G__53216;
continue;
}
}
} else
{{
var G__53217 = (i__53207 + (1));
i__53207 = G__53217;
continue;
}
}
} else
{{
var G__53218 = (i__53207 + (1));
i__53207 = G__53218;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53208),iter__53205(cljs.core.chunk_rest(s__53206__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53208),null);
}
} else
{var vec__53214 = cljs.core.first(s__53206__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53214,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53214,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__53205(cljs.core.rest(s__53206__$2)));
} else
{{
var G__53219 = cljs.core.rest(s__53206__$2);
s__53206__$1 = G__53219;
continue;
}
}
} else
{{
var G__53220 = cljs.core.rest(s__53206__$2);
s__53206__$1 = G__53220;
continue;
}
}
} else
{{
var G__53221 = cljs.core.rest(s__53206__$2);
s__53206__$1 = G__53221;
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
});return iter__20990__auto__(input_schema);
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
var ufv___53248 = schema.utils.use_fn_validation;var output_schema53222_53249 = schema.core.Any;var input_schema53223_53250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker53224_53251 = schema.core.checker(input_schema53223_53250);var output_checker53225_53252 = schema.core.checker(output_schema53222_53249);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___53248,output_schema53222_53249,input_schema53223_53250,input_checker53224_53251,output_checker53225_53252){
return (function compose_schemata(G__53226,G__53227){var validate__837__auto__ = true;if(validate__837__auto__)
{var args__838__auto___53253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53226,G__53227], null);var temp__4126__auto___53254 = (function (){var G__53238 = args__838__auto___53253;return (input_checker53224_53251.cljs$core$IFn$_invoke$arity$1 ? input_checker53224_53251.cljs$core$IFn$_invoke$arity$1(G__53238) : input_checker53224_53251.call(null,G__53238));
})();if(cljs.core.truth_(temp__4126__auto___53254))
{var error__839__auto___53255 = temp__4126__auto___53254;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53255], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53223_53250,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53253,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53255], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__53241 = G__53226;var vec__53243 = G__53241;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53243,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53243,(1),null);var G__53242 = G__53227;var vec__53244 = G__53242;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53244,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53244,(1),null);var G__53241__$1 = G__53241;var G__53242__$1 = G__53242;while(true){
var vec__53245 = G__53241__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53245,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53245,(1),null);var vec__53246 = G__53242__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53246,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53246,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__837__auto__)
{var temp__4126__auto___53256 = (function (){var G__53247 = o__840__auto__;return (output_checker53225_53252.cljs$core$IFn$_invoke$arity$1 ? output_checker53225_53252.cljs$core$IFn$_invoke$arity$1(G__53247) : output_checker53225_53252.call(null,G__53247));
})();if(cljs.core.truth_(temp__4126__auto___53256))
{var error__839__auto___53257 = temp__4126__auto___53256;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53257], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53222_53249,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53257], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53248,output_schema53222_53249,input_schema53223_53250,input_checker53224_53251,output_checker53225_53252))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema53222_53249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53223_53250], null)));
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
var ufv___53360 = schema.utils.use_fn_validation;var output_schema53258_53361 = schema.core.Any;var input_schema53259_53362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker53260_53363 = schema.core.checker(input_schema53259_53362);var output_checker53261_53364 = schema.core.checker(output_schema53258_53361);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364){
return (function split_schema(G__53262,G__53263){var validate__837__auto__ = ufv___53360.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53262,G__53263], null);var temp__4126__auto___53366 = (function (){var G__53312 = args__838__auto___53365;return (input_checker53260_53363.cljs$core$IFn$_invoke$arity$1 ? input_checker53260_53363.cljs$core$IFn$_invoke$arity$1(G__53312) : input_checker53260_53363.call(null,G__53312));
})();if(cljs.core.truth_(temp__4126__auto___53366))
{var error__839__auto___53367 = temp__4126__auto___53366;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53367], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53259_53362,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53365,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53367], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__53262;var ks = G__53263;while(true){
var ks__$1 = cljs.core.set(ks);var iter__20990__auto__ = ((function (ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364){
return (function iter__53313(s__53314){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364){
return (function (){var s__53314__$1 = s__53314;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53314__$1);if(temp__4126__auto__)
{var s__53314__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53314__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__53314__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__53316 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__53315 = (0);while(true){
if((i__53315 < size__20989__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__53315);cljs.core.chunk_append(b__53316,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20990__auto__ = ((function (i__53315,in_QMARK_,c__20988__auto__,size__20989__auto__,b__53316,s__53314__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364){
return (function iter__53339(s__53340){return (new cljs.core.LazySeq(null,((function (i__53315,in_QMARK_,c__20988__auto__,size__20989__auto__,b__53316,s__53314__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364){
return (function (){var s__53340__$1 = s__53340;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__53340__$1);if(temp__4126__auto____$1)
{var s__53340__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__53340__$2))
{var c__20988__auto____$1 = cljs.core.chunk_first(s__53340__$2);var size__20989__auto____$1 = cljs.core.count(c__20988__auto____$1);var b__53342 = cljs.core.chunk_buffer(size__20989__auto____$1);if((function (){var i__53341 = (0);while(true){
if((i__53341 < size__20989__auto____$1))
{var vec__53347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto____$1,i__53341);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53347,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53347,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__53342,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53368 = (i__53341 + (1));
i__53341 = G__53368;
continue;
}
} else
{{
var G__53369 = (i__53341 + (1));
i__53341 = G__53369;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53342),iter__53339(cljs.core.chunk_rest(s__53340__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53342),null);
}
} else
{var vec__53348 = cljs.core.first(s__53340__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53348,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53348,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53339(cljs.core.rest(s__53340__$2)));
} else
{{
var G__53370 = cljs.core.rest(s__53340__$2);
s__53340__$1 = G__53370;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__53315,in_QMARK_,c__20988__auto__,size__20989__auto__,b__53316,s__53314__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364))
,null,null));
});})(i__53315,in_QMARK_,c__20988__auto__,size__20989__auto__,b__53316,s__53314__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364))
;return iter__20990__auto__(s);
})()));
{
var G__53371 = (i__53315 + (1));
i__53315 = G__53371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53316),iter__53313(cljs.core.chunk_rest(s__53314__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53316),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__53314__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20990__auto__ = ((function (in_QMARK_,s__53314__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364){
return (function iter__53349(s__53350){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__53314__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364){
return (function (){var s__53350__$1 = s__53350;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__53350__$1);if(temp__4126__auto____$1)
{var s__53350__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__53350__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__53350__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__53352 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__53351 = (0);while(true){
if((i__53351 < size__20989__auto__))
{var vec__53357 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__53351);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53357,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53357,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__53352,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53372 = (i__53351 + (1));
i__53351 = G__53372;
continue;
}
} else
{{
var G__53373 = (i__53351 + (1));
i__53351 = G__53373;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53352),iter__53349(cljs.core.chunk_rest(s__53350__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53352),null);
}
} else
{var vec__53358 = cljs.core.first(s__53350__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53358,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53358,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53349(cljs.core.rest(s__53350__$2)));
} else
{{
var G__53374 = cljs.core.rest(s__53350__$2);
s__53350__$1 = G__53374;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__53314__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364))
,null,null));
});})(in_QMARK_,s__53314__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364))
;return iter__20990__auto__(s);
})()),iter__53313(cljs.core.rest(s__53314__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364))
,null,null));
});})(ks__$1,validate__837__auto__,ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364))
;return iter__20990__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___53375 = (function (){var G__53359 = o__840__auto__;return (output_checker53261_53364.cljs$core$IFn$_invoke$arity$1 ? output_checker53261_53364.cljs$core$IFn$_invoke$arity$1(G__53359) : output_checker53261_53364.call(null,G__53359));
})();if(cljs.core.truth_(temp__4126__auto___53375))
{var error__839__auto___53376 = temp__4126__auto___53375;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53376], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53258_53361,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53376], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53360,output_schema53258_53361,input_schema53259_53362,input_checker53260_53363,output_checker53261_53364))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema53258_53361,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53259_53362], null)));
var ufv___53411 = schema.utils.use_fn_validation;var output_schema53377_53412 = plumbing.fnk.schema.GraphIOSchemata;var input_schema53378_53413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker53379_53414 = schema.core.checker(input_schema53378_53413);var output_checker53380_53415 = schema.core.checker(output_schema53377_53412);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___53411,output_schema53377_53412,input_schema53378_53413,input_checker53379_53414,output_checker53380_53415){
return (function sequence_schemata(G__53381,G__53382){var validate__837__auto__ = ufv___53411.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___53416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53381,G__53382], null);var temp__4126__auto___53417 = (function (){var G__53397 = args__838__auto___53416;return (input_checker53379_53414.cljs$core$IFn$_invoke$arity$1 ? input_checker53379_53414.cljs$core$IFn$_invoke$arity$1(G__53397) : input_checker53379_53414.call(null,G__53397));
})();if(cljs.core.truth_(temp__4126__auto___53417))
{var error__839__auto___53418 = temp__4126__auto___53417;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53418], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53378_53413,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___53416,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53418], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__53401 = G__53381;var vec__53403 = G__53401;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53403,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53403,(1),null);var G__53402 = G__53382;var vec__53404 = G__53402;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53404,(0),null);var vec__53405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53404,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53405,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53405,(1),null);var G__53401__$1 = G__53401;var G__53402__$1 = G__53402;while(true){
var vec__53406 = G__53401__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53406,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53406,(1),null);var vec__53407 = G__53402__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53407,(0),null);var vec__53408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53407,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53408,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53408,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__53409 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53409,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53409,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___53419 = (function (){var G__53410 = o__840__auto__;return (output_checker53380_53415.cljs$core$IFn$_invoke$arity$1 ? output_checker53380_53415.cljs$core$IFn$_invoke$arity$1(G__53410) : output_checker53380_53415.call(null,G__53410));
})();if(cljs.core.truth_(temp__4126__auto___53419))
{var error__839__auto___53420 = temp__4126__auto___53419;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___53420], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53377_53412,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___53420], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___53411,output_schema53377_53412,input_schema53378_53413,input_checker53379_53414,output_checker53380_53415))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema53377_53412,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53378_53413], null)));
//# sourceMappingURL=schema.js.map