goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__867__868__auto__){var G__35593 = p1__867__868__auto__;if(G__35593)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__35593.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__35593.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35593);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35593);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35594_SHARP_){return (cljs.core.val(p1__35594_SHARP_) > (1));
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
var vec__35596 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35596,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35596,(1),null);var p = vec__35596;if(cljs.core.truth_(p))
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
var ufv___35606 = schema.utils.use_fn_validation;var output_schema35597_35607 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema35598_35608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker35599_35609 = schema.core.checker(input_schema35598_35608);var output_checker35600_35610 = schema.core.checker(output_schema35597_35607);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___35606,output_schema35597_35607,input_schema35598_35608,input_checker35599_35609,output_checker35600_35610){
return (function unwrap_schema_form_key(G__35601){var validate__837__auto__ = ufv___35606.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35601], null);var temp__4126__auto___35612 = (function (){var G__35604 = args__838__auto___35611;return (input_checker35599_35609.cljs$core$IFn$_invoke$arity$1 ? input_checker35599_35609.cljs$core$IFn$_invoke$arity$1(G__35604) : input_checker35599_35609.call(null,G__35604));
})();if(cljs.core.truth_(temp__4126__auto___35612))
{var error__839__auto___35613 = temp__4126__auto___35612;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35613], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35598_35608,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35611,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35613], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var k = G__35601;while(true){
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
{var temp__4126__auto___35614 = (function (){var G__35605 = o__840__auto__;return (output_checker35600_35610.cljs$core$IFn$_invoke$arity$1 ? output_checker35600_35610.cljs$core$IFn$_invoke$arity$1(G__35605) : output_checker35600_35610.call(null,G__35605));
})();if(cljs.core.truth_(temp__4126__auto___35614))
{var error__839__auto___35615 = temp__4126__auto___35614;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35615], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35597_35607,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35615], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35606,output_schema35597_35607,input_schema35598_35608,input_checker35599_35609,output_checker35600_35610))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema35597_35607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35598_35608], null)));
var ufv___35625 = schema.utils.use_fn_validation;var output_schema35616_35626 = schema.core.Any;var input_schema35617_35627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker35618_35628 = schema.core.checker(input_schema35617_35627);var output_checker35619_35629 = schema.core.checker(output_schema35616_35626);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___35625,output_schema35616_35626,input_schema35617_35627,input_checker35618_35628,output_checker35619_35629){
return (function explicit_schema_key_map(G__35620){var validate__837__auto__ = ufv___35625.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35620], null);var temp__4126__auto___35631 = (function (){var G__35623 = args__838__auto___35630;return (input_checker35618_35628.cljs$core$IFn$_invoke$arity$1 ? input_checker35618_35628.cljs$core$IFn$_invoke$arity$1(G__35623) : input_checker35618_35628.call(null,G__35623));
})();if(cljs.core.truth_(temp__4126__auto___35631))
{var error__839__auto___35632 = temp__4126__auto___35631;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35632], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35617_35627,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35630,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35632], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__35620;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35633 = (function (){var G__35624 = o__840__auto__;return (output_checker35619_35629.cljs$core$IFn$_invoke$arity$1 ? output_checker35619_35629.cljs$core$IFn$_invoke$arity$1(G__35624) : output_checker35619_35629.call(null,G__35624));
})();if(cljs.core.truth_(temp__4126__auto___35633))
{var error__839__auto___35634 = temp__4126__auto___35633;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35634], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35616_35626,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35634], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35625,output_schema35616_35626,input_schema35617_35627,input_checker35618_35628,output_checker35619_35629))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema35616_35626,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35617_35627], null)));
var ufv___35644 = schema.utils.use_fn_validation;var output_schema35635_35645 = schema.core.Any;var input_schema35636_35646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker35637_35647 = schema.core.checker(input_schema35636_35646);var output_checker35638_35648 = schema.core.checker(output_schema35635_35645);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___35644,output_schema35635_35645,input_schema35636_35646,input_checker35637_35647,output_checker35638_35648){
return (function split_schema_keys(G__35639){var validate__837__auto__ = ufv___35644.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35639], null);var temp__4126__auto___35650 = (function (){var G__35642 = args__838__auto___35649;return (input_checker35637_35647.cljs$core$IFn$_invoke$arity$1 ? input_checker35637_35647.cljs$core$IFn$_invoke$arity$1(G__35642) : input_checker35637_35647.call(null,G__35642));
})();if(cljs.core.truth_(temp__4126__auto___35650))
{var error__839__auto___35651 = temp__4126__auto___35650;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35651], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35636_35646,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35649,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35651], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__35639;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35652 = (function (){var G__35643 = o__840__auto__;return (output_checker35638_35648.cljs$core$IFn$_invoke$arity$1 ? output_checker35638_35648.cljs$core$IFn$_invoke$arity$1(G__35643) : output_checker35638_35648.call(null,G__35643));
})();if(cljs.core.truth_(temp__4126__auto___35652))
{var error__839__auto___35653 = temp__4126__auto___35652;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35653], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35635_35645,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35653], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35644,output_schema35635_35645,input_schema35636_35646,input_checker35637_35647,output_checker35638_35648))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema35635_35645,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35636_35646], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__35662){var vec__35663 = p__35662;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35663,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35663,(1),null);var pk = (function (){var G__35664 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__35664) : key_project.call(null,G__35664));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__35665 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35666 = ok;var G__35667 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__35666,G__35667) : key_combine.call(null,G__35666,G__35667));
})(),(function (){var G__35668 = ov;var G__35669 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__35668,G__35669) : val_combine.call(null,G__35668,G__35669));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__35670){
var key_project = cljs.core.first(arglist__35670);
arglist__35670 = cljs.core.next(arglist__35670);
var key_combine = cljs.core.first(arglist__35670);
arglist__35670 = cljs.core.next(arglist__35670);
var val_combine = cljs.core.first(arglist__35670);
var maps = cljs.core.rest(arglist__35670);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___35684 = schema.utils.use_fn_validation;var output_schema35672_35685 = plumbing.fnk.schema.InputSchema;var input_schema35673_35686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker35674_35687 = schema.core.checker(input_schema35673_35686);var output_checker35675_35688 = schema.core.checker(output_schema35672_35685);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___35684,output_schema35672_35685,input_schema35673_35686,input_checker35674_35687,output_checker35675_35688){
return (function union_input_schemata(G__35676,G__35677){var validate__837__auto__ = ufv___35684.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35676,G__35677], null);var temp__4126__auto___35690 = (function (){var G__35682 = args__838__auto___35689;return (input_checker35674_35687.cljs$core$IFn$_invoke$arity$1 ? input_checker35674_35687.cljs$core$IFn$_invoke$arity$1(G__35682) : input_checker35674_35687.call(null,G__35682));
})();if(cljs.core.truth_(temp__4126__auto___35690))
{var error__839__auto___35691 = temp__4126__auto___35690;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35691], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35673_35686,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35689,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35691], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var i1 = G__35676;var i2 = G__35677;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___35684,output_schema35672_35685,input_schema35673_35686,input_checker35674_35687,output_checker35675_35688){
return (function (p1__35671_SHARP_){if(schema.core.specific_key_QMARK_(p1__35671_SHARP_))
{return schema.core.explicit_schema_key(p1__35671_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__837__auto__,ufv___35684,output_schema35672_35685,input_schema35673_35686,input_checker35674_35687,output_checker35675_35688))
,((function (validate__837__auto__,ufv___35684,output_schema35672_35685,input_schema35673_35686,input_checker35674_35687,output_checker35675_35688){
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
});})(validate__837__auto__,ufv___35684,output_schema35672_35685,input_schema35673_35686,input_checker35674_35687,output_checker35675_35688))
,((function (validate__837__auto__,ufv___35684,output_schema35672_35685,input_schema35673_35686,input_checker35674_35687,output_checker35675_35688){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__837__auto__,ufv___35684,output_schema35672_35685,input_schema35673_35686,input_checker35674_35687,output_checker35675_35688))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35692 = (function (){var G__35683 = o__840__auto__;return (output_checker35675_35688.cljs$core$IFn$_invoke$arity$1 ? output_checker35675_35688.cljs$core$IFn$_invoke$arity$1(G__35683) : output_checker35675_35688.call(null,G__35683));
})();if(cljs.core.truth_(temp__4126__auto___35692))
{var error__839__auto___35693 = temp__4126__auto___35692;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35693], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35672_35685,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35693], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35684,output_schema35672_35685,input_schema35673_35686,input_checker35674_35687,output_checker35675_35688))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema35672_35685,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35673_35686], null)));
var ufv___35703 = schema.utils.use_fn_validation;var output_schema35694_35704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema35695_35705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker35696_35706 = schema.core.checker(input_schema35695_35705);var output_checker35697_35707 = schema.core.checker(output_schema35694_35704);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___35703,output_schema35694_35704,input_schema35695_35705,input_checker35696_35706,output_checker35697_35707){
return (function required_toplevel_keys(G__35698){var validate__837__auto__ = ufv___35703.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35698], null);var temp__4126__auto___35709 = (function (){var G__35701 = args__838__auto___35708;return (input_checker35696_35706.cljs$core$IFn$_invoke$arity$1 ? input_checker35696_35706.cljs$core$IFn$_invoke$arity$1(G__35701) : input_checker35696_35706.call(null,G__35701));
})();if(cljs.core.truth_(temp__4126__auto___35709))
{var error__839__auto___35710 = temp__4126__auto___35709;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35710], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35695_35705,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35708,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35710], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input_schema = G__35698;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___35703,output_schema35694_35704,input_schema35695_35705,input_checker35696_35706,output_checker35697_35707){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__837__auto__,ufv___35703,output_schema35694_35704,input_schema35695_35705,input_checker35696_35706,output_checker35697_35707))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35711 = (function (){var G__35702 = o__840__auto__;return (output_checker35697_35707.cljs$core$IFn$_invoke$arity$1 ? output_checker35697_35707.cljs$core$IFn$_invoke$arity$1(G__35702) : output_checker35697_35707.call(null,G__35702));
})();if(cljs.core.truth_(temp__4126__auto___35711))
{var error__839__auto___35712 = temp__4126__auto___35711;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35712], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35694_35704,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35712], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35703,output_schema35694_35704,input_schema35695_35705,input_checker35696_35706,output_checker35697_35707))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema35694_35704,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35695_35705], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20662__auto__ = (function iter__35727(s__35728){return (new cljs.core.LazySeq(null,(function (){var s__35728__$1 = s__35728;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35728__$1);if(temp__4126__auto__)
{var s__35728__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35728__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35728__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35730 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35729 = (0);while(true){
if((i__35729 < size__20661__auto__))
{var vec__35735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35729);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35735,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35735,(1),null);cljs.core.chunk_append(b__35730,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__35737 = (i__35729 + (1));
i__35729 = G__35737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35730),iter__35727(cljs.core.chunk_rest(s__35728__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35730),null);
}
} else
{var vec__35736 = cljs.core.first(s__35728__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35736,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35736,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__35727(cljs.core.rest(s__35728__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20662__auto__ = (function iter__35756(s__35757){return (new cljs.core.LazySeq(null,(function (){var s__35757__$1 = s__35757;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35757__$1);if(temp__4126__auto__)
{var s__35757__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35757__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35757__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35759 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35758 = (0);while(true){
if((i__35758 < size__20661__auto__))
{var vec__35764 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35758);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35764,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35764,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__35759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__35766 = (i__35758 + (1));
i__35758 = G__35766;
continue;
}
} else
{{
var G__35767 = (i__35758 + (1));
i__35758 = G__35767;
continue;
}
}
} else
{{
var G__35768 = (i__35758 + (1));
i__35758 = G__35768;
continue;
}
}
} else
{{
var G__35769 = (i__35758 + (1));
i__35758 = G__35769;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35759),iter__35756(cljs.core.chunk_rest(s__35757__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35759),null);
}
} else
{var vec__35765 = cljs.core.first(s__35757__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35765,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35765,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__35756(cljs.core.rest(s__35757__$2)));
} else
{{
var G__35770 = cljs.core.rest(s__35757__$2);
s__35757__$1 = G__35770;
continue;
}
}
} else
{{
var G__35771 = cljs.core.rest(s__35757__$2);
s__35757__$1 = G__35771;
continue;
}
}
} else
{{
var G__35772 = cljs.core.rest(s__35757__$2);
s__35757__$1 = G__35772;
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
});return iter__20662__auto__(input_schema);
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
var ufv___35799 = schema.utils.use_fn_validation;var output_schema35773_35800 = schema.core.Any;var input_schema35774_35801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker35775_35802 = schema.core.checker(input_schema35774_35801);var output_checker35776_35803 = schema.core.checker(output_schema35773_35800);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___35799,output_schema35773_35800,input_schema35774_35801,input_checker35775_35802,output_checker35776_35803){
return (function compose_schemata(G__35777,G__35778){var validate__837__auto__ = true;if(validate__837__auto__)
{var args__838__auto___35804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35777,G__35778], null);var temp__4126__auto___35805 = (function (){var G__35789 = args__838__auto___35804;return (input_checker35775_35802.cljs$core$IFn$_invoke$arity$1 ? input_checker35775_35802.cljs$core$IFn$_invoke$arity$1(G__35789) : input_checker35775_35802.call(null,G__35789));
})();if(cljs.core.truth_(temp__4126__auto___35805))
{var error__839__auto___35806 = temp__4126__auto___35805;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35806], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35774_35801,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35804,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35806], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__35792 = G__35777;var vec__35794 = G__35792;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35794,(1),null);var G__35793 = G__35778;var vec__35795 = G__35793;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(1),null);var G__35792__$1 = G__35792;var G__35793__$1 = G__35793;while(true){
var vec__35796 = G__35792__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35796,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35796,(1),null);var vec__35797 = G__35793__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35797,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35797,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__837__auto__)
{var temp__4126__auto___35807 = (function (){var G__35798 = o__840__auto__;return (output_checker35776_35803.cljs$core$IFn$_invoke$arity$1 ? output_checker35776_35803.cljs$core$IFn$_invoke$arity$1(G__35798) : output_checker35776_35803.call(null,G__35798));
})();if(cljs.core.truth_(temp__4126__auto___35807))
{var error__839__auto___35808 = temp__4126__auto___35807;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35808], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35773_35800,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35808], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35799,output_schema35773_35800,input_schema35774_35801,input_checker35775_35802,output_checker35776_35803))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema35773_35800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35774_35801], null)));
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
var ufv___35911 = schema.utils.use_fn_validation;var output_schema35809_35912 = schema.core.Any;var input_schema35810_35913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker35811_35914 = schema.core.checker(input_schema35810_35913);var output_checker35812_35915 = schema.core.checker(output_schema35809_35912);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915){
return (function split_schema(G__35813,G__35814){var validate__837__auto__ = ufv___35911.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35813,G__35814], null);var temp__4126__auto___35917 = (function (){var G__35863 = args__838__auto___35916;return (input_checker35811_35914.cljs$core$IFn$_invoke$arity$1 ? input_checker35811_35914.cljs$core$IFn$_invoke$arity$1(G__35863) : input_checker35811_35914.call(null,G__35863));
})();if(cljs.core.truth_(temp__4126__auto___35917))
{var error__839__auto___35918 = temp__4126__auto___35917;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35918], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35810_35913,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35916,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35918], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__35813;var ks = G__35814;while(true){
var ks__$1 = cljs.core.set(ks);var iter__20662__auto__ = ((function (ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915){
return (function iter__35864(s__35865){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915){
return (function (){var s__35865__$1 = s__35865;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35865__$1);if(temp__4126__auto__)
{var s__35865__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35865__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35865__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35867 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35866 = (0);while(true){
if((i__35866 < size__20661__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35866);cljs.core.chunk_append(b__35867,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20662__auto__ = ((function (i__35866,in_QMARK_,c__20660__auto__,size__20661__auto__,b__35867,s__35865__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915){
return (function iter__35890(s__35891){return (new cljs.core.LazySeq(null,((function (i__35866,in_QMARK_,c__20660__auto__,size__20661__auto__,b__35867,s__35865__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915){
return (function (){var s__35891__$1 = s__35891;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__35891__$1);if(temp__4126__auto____$1)
{var s__35891__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__35891__$2))
{var c__20660__auto____$1 = cljs.core.chunk_first(s__35891__$2);var size__20661__auto____$1 = cljs.core.count(c__20660__auto____$1);var b__35893 = cljs.core.chunk_buffer(size__20661__auto____$1);if((function (){var i__35892 = (0);while(true){
if((i__35892 < size__20661__auto____$1))
{var vec__35898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto____$1,i__35892);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__35893,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__35919 = (i__35892 + (1));
i__35892 = G__35919;
continue;
}
} else
{{
var G__35920 = (i__35892 + (1));
i__35892 = G__35920;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35893),iter__35890(cljs.core.chunk_rest(s__35891__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35893),null);
}
} else
{var vec__35899 = cljs.core.first(s__35891__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35899,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35899,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35890(cljs.core.rest(s__35891__$2)));
} else
{{
var G__35921 = cljs.core.rest(s__35891__$2);
s__35891__$1 = G__35921;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__35866,in_QMARK_,c__20660__auto__,size__20661__auto__,b__35867,s__35865__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915))
,null,null));
});})(i__35866,in_QMARK_,c__20660__auto__,size__20661__auto__,b__35867,s__35865__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915))
;return iter__20662__auto__(s);
})()));
{
var G__35922 = (i__35866 + (1));
i__35866 = G__35922;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35867),iter__35864(cljs.core.chunk_rest(s__35865__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35867),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__35865__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20662__auto__ = ((function (in_QMARK_,s__35865__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915){
return (function iter__35900(s__35901){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__35865__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915){
return (function (){var s__35901__$1 = s__35901;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__35901__$1);if(temp__4126__auto____$1)
{var s__35901__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__35901__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__35901__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__35903 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__35902 = (0);while(true){
if((i__35902 < size__20661__auto__))
{var vec__35908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__35902);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35908,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35908,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__35903,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__35923 = (i__35902 + (1));
i__35902 = G__35923;
continue;
}
} else
{{
var G__35924 = (i__35902 + (1));
i__35902 = G__35924;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35903),iter__35900(cljs.core.chunk_rest(s__35901__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35903),null);
}
} else
{var vec__35909 = cljs.core.first(s__35901__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35909,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35909,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35900(cljs.core.rest(s__35901__$2)));
} else
{{
var G__35925 = cljs.core.rest(s__35901__$2);
s__35901__$1 = G__35925;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__35865__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915))
,null,null));
});})(in_QMARK_,s__35865__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915))
;return iter__20662__auto__(s);
})()),iter__35864(cljs.core.rest(s__35865__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915))
,null,null));
});})(ks__$1,validate__837__auto__,ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915))
;return iter__20662__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35926 = (function (){var G__35910 = o__840__auto__;return (output_checker35812_35915.cljs$core$IFn$_invoke$arity$1 ? output_checker35812_35915.cljs$core$IFn$_invoke$arity$1(G__35910) : output_checker35812_35915.call(null,G__35910));
})();if(cljs.core.truth_(temp__4126__auto___35926))
{var error__839__auto___35927 = temp__4126__auto___35926;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35927], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35809_35912,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35927], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35911,output_schema35809_35912,input_schema35810_35913,input_checker35811_35914,output_checker35812_35915))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema35809_35912,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35810_35913], null)));
var ufv___35962 = schema.utils.use_fn_validation;var output_schema35928_35963 = plumbing.fnk.schema.GraphIOSchemata;var input_schema35929_35964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker35930_35965 = schema.core.checker(input_schema35929_35964);var output_checker35931_35966 = schema.core.checker(output_schema35928_35963);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___35962,output_schema35928_35963,input_schema35929_35964,input_checker35930_35965,output_checker35931_35966){
return (function sequence_schemata(G__35932,G__35933){var validate__837__auto__ = ufv___35962.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35932,G__35933], null);var temp__4126__auto___35968 = (function (){var G__35948 = args__838__auto___35967;return (input_checker35930_35965.cljs$core$IFn$_invoke$arity$1 ? input_checker35930_35965.cljs$core$IFn$_invoke$arity$1(G__35948) : input_checker35930_35965.call(null,G__35948));
})();if(cljs.core.truth_(temp__4126__auto___35968))
{var error__839__auto___35969 = temp__4126__auto___35968;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35969], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35929_35964,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35967,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35969], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__35952 = G__35932;var vec__35954 = G__35952;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35954,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35954,(1),null);var G__35953 = G__35933;var vec__35955 = G__35953;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(0),null);var vec__35956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35956,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35956,(1),null);var G__35952__$1 = G__35952;var G__35953__$1 = G__35953;while(true){
var vec__35957 = G__35952__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(1),null);var vec__35958 = G__35953__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35958,(0),null);var vec__35959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35958,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__35960 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35970 = (function (){var G__35961 = o__840__auto__;return (output_checker35931_35966.cljs$core$IFn$_invoke$arity$1 ? output_checker35931_35966.cljs$core$IFn$_invoke$arity$1(G__35961) : output_checker35931_35966.call(null,G__35961));
})();if(cljs.core.truth_(temp__4126__auto___35970))
{var error__839__auto___35971 = temp__4126__auto___35970;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35971], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35928_35963,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35971], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35962,output_schema35928_35963,input_schema35929_35964,input_checker35930_35965,output_checker35931_35966))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema35928_35963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35929_35964], null)));
//# sourceMappingURL=schema.js.map