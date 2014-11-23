goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__867__868__auto__){var G__35861 = p1__867__868__auto__;if(G__35861)
{var bit__20917__auto__ = null;if(cljs.core.truth_((function (){var or__19663__auto__ = bit__20917__auto__;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return G__35861.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__35861.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35861);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35861);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35862_SHARP_){return (cljs.core.val(p1__35862_SHARP_) > (1));
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
var vec__35864 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35864,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35864,(1),null);var p = vec__35864;if(cljs.core.truth_(p))
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
var ufv___35874 = schema.utils.use_fn_validation;var output_schema35865_35875 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema35866_35876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker35867_35877 = schema.core.checker(input_schema35866_35876);var output_checker35868_35878 = schema.core.checker(output_schema35865_35875);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___35874,output_schema35865_35875,input_schema35866_35876,input_checker35867_35877,output_checker35868_35878){
return (function unwrap_schema_form_key(G__35869){var validate__837__auto__ = ufv___35874.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35869], null);var temp__4126__auto___35880 = (function (){var G__35872 = args__838__auto___35879;return (input_checker35867_35877.cljs$core$IFn$_invoke$arity$1 ? input_checker35867_35877.cljs$core$IFn$_invoke$arity$1(G__35872) : input_checker35867_35877.call(null,G__35872));
})();if(cljs.core.truth_(temp__4126__auto___35880))
{var error__839__auto___35881 = temp__4126__auto___35880;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35881], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35866_35876,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35879,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35881], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var k = G__35869;while(true){
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
{var temp__4126__auto___35882 = (function (){var G__35873 = o__840__auto__;return (output_checker35868_35878.cljs$core$IFn$_invoke$arity$1 ? output_checker35868_35878.cljs$core$IFn$_invoke$arity$1(G__35873) : output_checker35868_35878.call(null,G__35873));
})();if(cljs.core.truth_(temp__4126__auto___35882))
{var error__839__auto___35883 = temp__4126__auto___35882;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35883], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35865_35875,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35883], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35874,output_schema35865_35875,input_schema35866_35876,input_checker35867_35877,output_checker35868_35878))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema35865_35875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35866_35876], null)));
var ufv___35893 = schema.utils.use_fn_validation;var output_schema35884_35894 = schema.core.Any;var input_schema35885_35895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker35886_35896 = schema.core.checker(input_schema35885_35895);var output_checker35887_35897 = schema.core.checker(output_schema35884_35894);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___35893,output_schema35884_35894,input_schema35885_35895,input_checker35886_35896,output_checker35887_35897){
return (function explicit_schema_key_map(G__35888){var validate__837__auto__ = ufv___35893.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35898 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35888], null);var temp__4126__auto___35899 = (function (){var G__35891 = args__838__auto___35898;return (input_checker35886_35896.cljs$core$IFn$_invoke$arity$1 ? input_checker35886_35896.cljs$core$IFn$_invoke$arity$1(G__35891) : input_checker35886_35896.call(null,G__35891));
})();if(cljs.core.truth_(temp__4126__auto___35899))
{var error__839__auto___35900 = temp__4126__auto___35899;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35900], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35885_35895,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35898,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35900], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__35888;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35901 = (function (){var G__35892 = o__840__auto__;return (output_checker35887_35897.cljs$core$IFn$_invoke$arity$1 ? output_checker35887_35897.cljs$core$IFn$_invoke$arity$1(G__35892) : output_checker35887_35897.call(null,G__35892));
})();if(cljs.core.truth_(temp__4126__auto___35901))
{var error__839__auto___35902 = temp__4126__auto___35901;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35902], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35884_35894,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35902], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35893,output_schema35884_35894,input_schema35885_35895,input_checker35886_35896,output_checker35887_35897))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema35884_35894,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35885_35895], null)));
var ufv___35912 = schema.utils.use_fn_validation;var output_schema35903_35913 = schema.core.Any;var input_schema35904_35914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker35905_35915 = schema.core.checker(input_schema35904_35914);var output_checker35906_35916 = schema.core.checker(output_schema35903_35913);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___35912,output_schema35903_35913,input_schema35904_35914,input_checker35905_35915,output_checker35906_35916){
return (function split_schema_keys(G__35907){var validate__837__auto__ = ufv___35912.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35917 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35907], null);var temp__4126__auto___35918 = (function (){var G__35910 = args__838__auto___35917;return (input_checker35905_35915.cljs$core$IFn$_invoke$arity$1 ? input_checker35905_35915.cljs$core$IFn$_invoke$arity$1(G__35910) : input_checker35905_35915.call(null,G__35910));
})();if(cljs.core.truth_(temp__4126__auto___35918))
{var error__839__auto___35919 = temp__4126__auto___35918;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35919], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35904_35914,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35917,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35919], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__35907;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35920 = (function (){var G__35911 = o__840__auto__;return (output_checker35906_35916.cljs$core$IFn$_invoke$arity$1 ? output_checker35906_35916.cljs$core$IFn$_invoke$arity$1(G__35911) : output_checker35906_35916.call(null,G__35911));
})();if(cljs.core.truth_(temp__4126__auto___35920))
{var error__839__auto___35921 = temp__4126__auto___35920;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35921], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35903_35913,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35921], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35912,output_schema35903_35913,input_schema35904_35914,input_checker35905_35915,output_checker35906_35916))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema35903_35913,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35904_35914], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__35930){var vec__35931 = p__35930;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35931,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35931,(1),null);var pk = (function (){var G__35932 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__35932) : key_project.call(null,G__35932));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__35933 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35934 = ok;var G__35935 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__35934,G__35935) : key_combine.call(null,G__35934,G__35935));
})(),(function (){var G__35936 = ov;var G__35937 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__35936,G__35937) : val_combine.call(null,G__35936,G__35937));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__35938){
var key_project = cljs.core.first(arglist__35938);
arglist__35938 = cljs.core.next(arglist__35938);
var key_combine = cljs.core.first(arglist__35938);
arglist__35938 = cljs.core.next(arglist__35938);
var val_combine = cljs.core.first(arglist__35938);
var maps = cljs.core.rest(arglist__35938);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___35952 = schema.utils.use_fn_validation;var output_schema35940_35953 = plumbing.fnk.schema.InputSchema;var input_schema35941_35954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker35942_35955 = schema.core.checker(input_schema35941_35954);var output_checker35943_35956 = schema.core.checker(output_schema35940_35953);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___35952,output_schema35940_35953,input_schema35941_35954,input_checker35942_35955,output_checker35943_35956){
return (function union_input_schemata(G__35944,G__35945){var validate__837__auto__ = ufv___35952.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35944,G__35945], null);var temp__4126__auto___35958 = (function (){var G__35950 = args__838__auto___35957;return (input_checker35942_35955.cljs$core$IFn$_invoke$arity$1 ? input_checker35942_35955.cljs$core$IFn$_invoke$arity$1(G__35950) : input_checker35942_35955.call(null,G__35950));
})();if(cljs.core.truth_(temp__4126__auto___35958))
{var error__839__auto___35959 = temp__4126__auto___35958;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35959], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35941_35954,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35957,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35959], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var i1 = G__35944;var i2 = G__35945;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___35952,output_schema35940_35953,input_schema35941_35954,input_checker35942_35955,output_checker35943_35956){
return (function (p1__35939_SHARP_){if(schema.core.specific_key_QMARK_(p1__35939_SHARP_))
{return schema.core.explicit_schema_key(p1__35939_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__837__auto__,ufv___35952,output_schema35940_35953,input_schema35941_35954,input_checker35942_35955,output_checker35943_35956))
,((function (validate__837__auto__,ufv___35952,output_schema35940_35953,input_schema35941_35954,input_checker35942_35955,output_checker35943_35956){
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
});})(validate__837__auto__,ufv___35952,output_schema35940_35953,input_schema35941_35954,input_checker35942_35955,output_checker35943_35956))
,((function (validate__837__auto__,ufv___35952,output_schema35940_35953,input_schema35941_35954,input_checker35942_35955,output_checker35943_35956){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__837__auto__,ufv___35952,output_schema35940_35953,input_schema35941_35954,input_checker35942_35955,output_checker35943_35956))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35960 = (function (){var G__35951 = o__840__auto__;return (output_checker35943_35956.cljs$core$IFn$_invoke$arity$1 ? output_checker35943_35956.cljs$core$IFn$_invoke$arity$1(G__35951) : output_checker35943_35956.call(null,G__35951));
})();if(cljs.core.truth_(temp__4126__auto___35960))
{var error__839__auto___35961 = temp__4126__auto___35960;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35961], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35940_35953,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35961], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35952,output_schema35940_35953,input_schema35941_35954,input_checker35942_35955,output_checker35943_35956))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema35940_35953,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35941_35954], null)));
var ufv___35971 = schema.utils.use_fn_validation;var output_schema35962_35972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema35963_35973 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker35964_35974 = schema.core.checker(input_schema35963_35973);var output_checker35965_35975 = schema.core.checker(output_schema35962_35972);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___35971,output_schema35962_35972,input_schema35963_35973,input_checker35964_35974,output_checker35965_35975){
return (function required_toplevel_keys(G__35966){var validate__837__auto__ = ufv___35971.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35966], null);var temp__4126__auto___35977 = (function (){var G__35969 = args__838__auto___35976;return (input_checker35964_35974.cljs$core$IFn$_invoke$arity$1 ? input_checker35964_35974.cljs$core$IFn$_invoke$arity$1(G__35969) : input_checker35964_35974.call(null,G__35969));
})();if(cljs.core.truth_(temp__4126__auto___35977))
{var error__839__auto___35978 = temp__4126__auto___35977;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35978], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35963_35973,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35976,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35978], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input_schema = G__35966;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___35971,output_schema35962_35972,input_schema35963_35973,input_checker35964_35974,output_checker35965_35975){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__837__auto__,ufv___35971,output_schema35962_35972,input_schema35963_35973,input_checker35964_35974,output_checker35965_35975))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35979 = (function (){var G__35970 = o__840__auto__;return (output_checker35965_35975.cljs$core$IFn$_invoke$arity$1 ? output_checker35965_35975.cljs$core$IFn$_invoke$arity$1(G__35970) : output_checker35965_35975.call(null,G__35970));
})();if(cljs.core.truth_(temp__4126__auto___35979))
{var error__839__auto___35980 = temp__4126__auto___35979;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35980], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35962_35972,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35980], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35971,output_schema35962_35972,input_schema35963_35973,input_checker35964_35974,output_checker35965_35975))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema35962_35972,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35963_35973], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21074__auto__ = (function iter__35995(s__35996){return (new cljs.core.LazySeq(null,(function (){var s__35996__$1 = s__35996;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35996__$1);if(temp__4126__auto__)
{var s__35996__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35996__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__35996__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__35998 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__35997 = (0);while(true){
if((i__35997 < size__21073__auto__))
{var vec__36003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__35997);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36003,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36003,(1),null);cljs.core.chunk_append(b__35998,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__36005 = (i__35997 + (1));
i__35997 = G__36005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35998),iter__35995(cljs.core.chunk_rest(s__35996__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35998),null);
}
} else
{var vec__36004 = cljs.core.first(s__35996__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36004,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36004,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__35995(cljs.core.rest(s__35996__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21074__auto__ = (function iter__36024(s__36025){return (new cljs.core.LazySeq(null,(function (){var s__36025__$1 = s__36025;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36025__$1);if(temp__4126__auto__)
{var s__36025__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36025__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36025__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36027 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36026 = (0);while(true){
if((i__36026 < size__21073__auto__))
{var vec__36032 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36026);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36032,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36032,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__36027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__36034 = (i__36026 + (1));
i__36026 = G__36034;
continue;
}
} else
{{
var G__36035 = (i__36026 + (1));
i__36026 = G__36035;
continue;
}
}
} else
{{
var G__36036 = (i__36026 + (1));
i__36026 = G__36036;
continue;
}
}
} else
{{
var G__36037 = (i__36026 + (1));
i__36026 = G__36037;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36027),iter__36024(cljs.core.chunk_rest(s__36025__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36027),null);
}
} else
{var vec__36033 = cljs.core.first(s__36025__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36033,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36033,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__36024(cljs.core.rest(s__36025__$2)));
} else
{{
var G__36038 = cljs.core.rest(s__36025__$2);
s__36025__$1 = G__36038;
continue;
}
}
} else
{{
var G__36039 = cljs.core.rest(s__36025__$2);
s__36025__$1 = G__36039;
continue;
}
}
} else
{{
var G__36040 = cljs.core.rest(s__36025__$2);
s__36025__$1 = G__36040;
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
});return iter__21074__auto__(input_schema);
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
var ufv___36067 = schema.utils.use_fn_validation;var output_schema36041_36068 = schema.core.Any;var input_schema36042_36069 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker36043_36070 = schema.core.checker(input_schema36042_36069);var output_checker36044_36071 = schema.core.checker(output_schema36041_36068);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___36067,output_schema36041_36068,input_schema36042_36069,input_checker36043_36070,output_checker36044_36071){
return (function compose_schemata(G__36045,G__36046){var validate__837__auto__ = true;if(validate__837__auto__)
{var args__838__auto___36072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36045,G__36046], null);var temp__4126__auto___36073 = (function (){var G__36057 = args__838__auto___36072;return (input_checker36043_36070.cljs$core$IFn$_invoke$arity$1 ? input_checker36043_36070.cljs$core$IFn$_invoke$arity$1(G__36057) : input_checker36043_36070.call(null,G__36057));
})();if(cljs.core.truth_(temp__4126__auto___36073))
{var error__839__auto___36074 = temp__4126__auto___36073;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___36074], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36042_36069,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___36072,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___36074], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__36060 = G__36045;var vec__36062 = G__36060;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(1),null);var G__36061 = G__36046;var vec__36063 = G__36061;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36063,(1),null);var G__36060__$1 = G__36060;var G__36061__$1 = G__36061;while(true){
var vec__36064 = G__36060__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36064,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36064,(1),null);var vec__36065 = G__36061__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36065,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36065,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__837__auto__)
{var temp__4126__auto___36075 = (function (){var G__36066 = o__840__auto__;return (output_checker36044_36071.cljs$core$IFn$_invoke$arity$1 ? output_checker36044_36071.cljs$core$IFn$_invoke$arity$1(G__36066) : output_checker36044_36071.call(null,G__36066));
})();if(cljs.core.truth_(temp__4126__auto___36075))
{var error__839__auto___36076 = temp__4126__auto___36075;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___36076], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36041_36068,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___36076], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___36067,output_schema36041_36068,input_schema36042_36069,input_checker36043_36070,output_checker36044_36071))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema36041_36068,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36042_36069], null)));
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
var ufv___36179 = schema.utils.use_fn_validation;var output_schema36077_36180 = schema.core.Any;var input_schema36078_36181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker36079_36182 = schema.core.checker(input_schema36078_36181);var output_checker36080_36183 = schema.core.checker(output_schema36077_36180);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183){
return (function split_schema(G__36081,G__36082){var validate__837__auto__ = ufv___36179.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___36184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36081,G__36082], null);var temp__4126__auto___36185 = (function (){var G__36131 = args__838__auto___36184;return (input_checker36079_36182.cljs$core$IFn$_invoke$arity$1 ? input_checker36079_36182.cljs$core$IFn$_invoke$arity$1(G__36131) : input_checker36079_36182.call(null,G__36131));
})();if(cljs.core.truth_(temp__4126__auto___36185))
{var error__839__auto___36186 = temp__4126__auto___36185;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___36186], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36078_36181,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___36184,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___36186], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__36081;var ks = G__36082;while(true){
var ks__$1 = cljs.core.set(ks);var iter__21074__auto__ = ((function (ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183){
return (function iter__36132(s__36133){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183){
return (function (){var s__36133__$1 = s__36133;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36133__$1);if(temp__4126__auto__)
{var s__36133__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36133__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36133__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36135 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36134 = (0);while(true){
if((i__36134 < size__21073__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36134);cljs.core.chunk_append(b__36135,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21074__auto__ = ((function (i__36134,in_QMARK_,c__21072__auto__,size__21073__auto__,b__36135,s__36133__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183){
return (function iter__36158(s__36159){return (new cljs.core.LazySeq(null,((function (i__36134,in_QMARK_,c__21072__auto__,size__21073__auto__,b__36135,s__36133__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183){
return (function (){var s__36159__$1 = s__36159;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__36159__$1);if(temp__4126__auto____$1)
{var s__36159__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__36159__$2))
{var c__21072__auto____$1 = cljs.core.chunk_first(s__36159__$2);var size__21073__auto____$1 = cljs.core.count(c__21072__auto____$1);var b__36161 = cljs.core.chunk_buffer(size__21073__auto____$1);if((function (){var i__36160 = (0);while(true){
if((i__36160 < size__21073__auto____$1))
{var vec__36166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto____$1,i__36160);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36166,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36166,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__36161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36187 = (i__36160 + (1));
i__36160 = G__36187;
continue;
}
} else
{{
var G__36188 = (i__36160 + (1));
i__36160 = G__36188;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36161),iter__36158(cljs.core.chunk_rest(s__36159__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36161),null);
}
} else
{var vec__36167 = cljs.core.first(s__36159__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36167,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36167,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36158(cljs.core.rest(s__36159__$2)));
} else
{{
var G__36189 = cljs.core.rest(s__36159__$2);
s__36159__$1 = G__36189;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__36134,in_QMARK_,c__21072__auto__,size__21073__auto__,b__36135,s__36133__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183))
,null,null));
});})(i__36134,in_QMARK_,c__21072__auto__,size__21073__auto__,b__36135,s__36133__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183))
;return iter__21074__auto__(s);
})()));
{
var G__36190 = (i__36134 + (1));
i__36134 = G__36190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36135),iter__36132(cljs.core.chunk_rest(s__36133__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36135),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__36133__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21074__auto__ = ((function (in_QMARK_,s__36133__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183){
return (function iter__36168(s__36169){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__36133__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183){
return (function (){var s__36169__$1 = s__36169;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__36169__$1);if(temp__4126__auto____$1)
{var s__36169__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__36169__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36169__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36171 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36170 = (0);while(true){
if((i__36170 < size__21073__auto__))
{var vec__36176 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36170);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36176,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36176,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__36171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36191 = (i__36170 + (1));
i__36170 = G__36191;
continue;
}
} else
{{
var G__36192 = (i__36170 + (1));
i__36170 = G__36192;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36171),iter__36168(cljs.core.chunk_rest(s__36169__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36171),null);
}
} else
{var vec__36177 = cljs.core.first(s__36169__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36177,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36177,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36168(cljs.core.rest(s__36169__$2)));
} else
{{
var G__36193 = cljs.core.rest(s__36169__$2);
s__36169__$1 = G__36193;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__36133__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183))
,null,null));
});})(in_QMARK_,s__36133__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183))
;return iter__21074__auto__(s);
})()),iter__36132(cljs.core.rest(s__36133__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183))
,null,null));
});})(ks__$1,validate__837__auto__,ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183))
;return iter__21074__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___36194 = (function (){var G__36178 = o__840__auto__;return (output_checker36080_36183.cljs$core$IFn$_invoke$arity$1 ? output_checker36080_36183.cljs$core$IFn$_invoke$arity$1(G__36178) : output_checker36080_36183.call(null,G__36178));
})();if(cljs.core.truth_(temp__4126__auto___36194))
{var error__839__auto___36195 = temp__4126__auto___36194;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___36195], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36077_36180,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___36195], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___36179,output_schema36077_36180,input_schema36078_36181,input_checker36079_36182,output_checker36080_36183))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema36077_36180,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36078_36181], null)));
var ufv___36230 = schema.utils.use_fn_validation;var output_schema36196_36231 = plumbing.fnk.schema.GraphIOSchemata;var input_schema36197_36232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker36198_36233 = schema.core.checker(input_schema36197_36232);var output_checker36199_36234 = schema.core.checker(output_schema36196_36231);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___36230,output_schema36196_36231,input_schema36197_36232,input_checker36198_36233,output_checker36199_36234){
return (function sequence_schemata(G__36200,G__36201){var validate__837__auto__ = ufv___36230.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___36235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36200,G__36201], null);var temp__4126__auto___36236 = (function (){var G__36216 = args__838__auto___36235;return (input_checker36198_36233.cljs$core$IFn$_invoke$arity$1 ? input_checker36198_36233.cljs$core$IFn$_invoke$arity$1(G__36216) : input_checker36198_36233.call(null,G__36216));
})();if(cljs.core.truth_(temp__4126__auto___36236))
{var error__839__auto___36237 = temp__4126__auto___36236;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___36237], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36197_36232,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___36235,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___36237], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__36220 = G__36200;var vec__36222 = G__36220;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36222,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36222,(1),null);var G__36221 = G__36201;var vec__36223 = G__36221;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36223,(0),null);var vec__36224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36223,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36224,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36224,(1),null);var G__36220__$1 = G__36220;var G__36221__$1 = G__36221;while(true){
var vec__36225 = G__36220__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(1),null);var vec__36226 = G__36221__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36226,(0),null);var vec__36227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36226,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36227,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36227,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__36228 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___36238 = (function (){var G__36229 = o__840__auto__;return (output_checker36199_36234.cljs$core$IFn$_invoke$arity$1 ? output_checker36199_36234.cljs$core$IFn$_invoke$arity$1(G__36229) : output_checker36199_36234.call(null,G__36229));
})();if(cljs.core.truth_(temp__4126__auto___36238))
{var error__839__auto___36239 = temp__4126__auto___36238;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___36239], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36196_36231,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___36239], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___36230,output_schema36196_36231,input_schema36197_36232,input_checker36198_36233,output_checker36199_36234))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema36196_36231,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36197_36232], null)));
//# sourceMappingURL=schema.js.map