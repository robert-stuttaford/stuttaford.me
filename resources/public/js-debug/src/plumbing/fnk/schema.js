goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__867__868__auto__){var G__35551 = p1__867__868__auto__;if(G__35551)
{var bit__20596__auto__ = null;if(cljs.core.truth_((function (){var or__19357__auto__ = bit__20596__auto__;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return G__35551.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__35551.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35551);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__35551);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35552_SHARP_){return (cljs.core.val(p1__35552_SHARP_) > (1));
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
var vec__35554 = cljs.core.find(m,k);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35554,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35554,(1),null);var p = vec__35554;if(cljs.core.truth_(p))
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
var ufv___35564 = schema.utils.use_fn_validation;var output_schema35555_35565 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema35556_35566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker35557_35567 = schema.core.checker(input_schema35556_35566);var output_checker35558_35568 = schema.core.checker(output_schema35555_35565);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___35564,output_schema35555_35565,input_schema35556_35566,input_checker35557_35567,output_checker35558_35568){
return (function unwrap_schema_form_key(G__35559){var validate__837__auto__ = ufv___35564.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35559], null);var temp__4126__auto___35570 = (function (){var G__35562 = args__838__auto___35569;return (input_checker35557_35567.cljs$core$IFn$_invoke$arity$1 ? input_checker35557_35567.cljs$core$IFn$_invoke$arity$1(G__35562) : input_checker35557_35567.call(null,G__35562));
})();if(cljs.core.truth_(temp__4126__auto___35570))
{var error__839__auto___35571 = temp__4126__auto___35570;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35571], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35556_35566,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35569,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35571], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var k = G__35559;while(true){
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
{var temp__4126__auto___35572 = (function (){var G__35563 = o__840__auto__;return (output_checker35558_35568.cljs$core$IFn$_invoke$arity$1 ? output_checker35558_35568.cljs$core$IFn$_invoke$arity$1(G__35563) : output_checker35558_35568.call(null,G__35563));
})();if(cljs.core.truth_(temp__4126__auto___35572))
{var error__839__auto___35573 = temp__4126__auto___35572;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35573], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35555_35565,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35573], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35564,output_schema35555_35565,input_schema35556_35566,input_checker35557_35567,output_checker35558_35568))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema35555_35565,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35556_35566], null)));
var ufv___35583 = schema.utils.use_fn_validation;var output_schema35574_35584 = schema.core.Any;var input_schema35575_35585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker35576_35586 = schema.core.checker(input_schema35575_35585);var output_checker35577_35587 = schema.core.checker(output_schema35574_35584);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___35583,output_schema35574_35584,input_schema35575_35585,input_checker35576_35586,output_checker35577_35587){
return (function explicit_schema_key_map(G__35578){var validate__837__auto__ = ufv___35583.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35578], null);var temp__4126__auto___35589 = (function (){var G__35581 = args__838__auto___35588;return (input_checker35576_35586.cljs$core$IFn$_invoke$arity$1 ? input_checker35576_35586.cljs$core$IFn$_invoke$arity$1(G__35581) : input_checker35576_35586.call(null,G__35581));
})();if(cljs.core.truth_(temp__4126__auto___35589))
{var error__839__auto___35590 = temp__4126__auto___35589;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35590], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35575_35585,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35588,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35590], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__35578;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35591 = (function (){var G__35582 = o__840__auto__;return (output_checker35577_35587.cljs$core$IFn$_invoke$arity$1 ? output_checker35577_35587.cljs$core$IFn$_invoke$arity$1(G__35582) : output_checker35577_35587.call(null,G__35582));
})();if(cljs.core.truth_(temp__4126__auto___35591))
{var error__839__auto___35592 = temp__4126__auto___35591;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35592], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35574_35584,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35592], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35583,output_schema35574_35584,input_schema35575_35585,input_checker35576_35586,output_checker35577_35587))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema35574_35584,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35575_35585], null)));
var ufv___35602 = schema.utils.use_fn_validation;var output_schema35593_35603 = schema.core.Any;var input_schema35594_35604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker35595_35605 = schema.core.checker(input_schema35594_35604);var output_checker35596_35606 = schema.core.checker(output_schema35593_35603);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___35602,output_schema35593_35603,input_schema35594_35604,input_checker35595_35605,output_checker35596_35606){
return (function split_schema_keys(G__35597){var validate__837__auto__ = ufv___35602.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35597], null);var temp__4126__auto___35608 = (function (){var G__35600 = args__838__auto___35607;return (input_checker35595_35605.cljs$core$IFn$_invoke$arity$1 ? input_checker35595_35605.cljs$core$IFn$_invoke$arity$1(G__35600) : input_checker35595_35605.call(null,G__35600));
})();if(cljs.core.truth_(temp__4126__auto___35608))
{var error__839__auto___35609 = temp__4126__auto___35608;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35609], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35594_35604,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35607,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35609], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__35597;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35610 = (function (){var G__35601 = o__840__auto__;return (output_checker35596_35606.cljs$core$IFn$_invoke$arity$1 ? output_checker35596_35606.cljs$core$IFn$_invoke$arity$1(G__35601) : output_checker35596_35606.call(null,G__35601));
})();if(cljs.core.truth_(temp__4126__auto___35610))
{var error__839__auto___35611 = temp__4126__auto___35610;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35611], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35593_35603,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35611], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35602,output_schema35593_35603,input_schema35594_35604,input_checker35595_35605,output_checker35596_35606))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema35593_35603,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35594_35604], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__35620){var vec__35621 = p__35620;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35621,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35621,(1),null);var pk = (function (){var G__35622 = k;return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__35622) : key_project.call(null,G__35622));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__35623 = temp__4124__auto__;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35623,(0),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35623,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35624 = ok;var G__35625 = k;return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__35624,G__35625) : key_combine.call(null,G__35624,G__35625));
})(),(function (){var G__35626 = ov;var G__35627 = v;return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__35626,G__35627) : val_combine.call(null,G__35626,G__35627));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__35628){
var key_project = cljs.core.first(arglist__35628);
arglist__35628 = cljs.core.next(arglist__35628);
var key_combine = cljs.core.first(arglist__35628);
arglist__35628 = cljs.core.next(arglist__35628);
var val_combine = cljs.core.first(arglist__35628);
var maps = cljs.core.rest(arglist__35628);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___35642 = schema.utils.use_fn_validation;var output_schema35630_35643 = plumbing.fnk.schema.InputSchema;var input_schema35631_35644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker35632_35645 = schema.core.checker(input_schema35631_35644);var output_checker35633_35646 = schema.core.checker(output_schema35630_35643);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___35642,output_schema35630_35643,input_schema35631_35644,input_checker35632_35645,output_checker35633_35646){
return (function union_input_schemata(G__35634,G__35635){var validate__837__auto__ = ufv___35642.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35634,G__35635], null);var temp__4126__auto___35648 = (function (){var G__35640 = args__838__auto___35647;return (input_checker35632_35645.cljs$core$IFn$_invoke$arity$1 ? input_checker35632_35645.cljs$core$IFn$_invoke$arity$1(G__35640) : input_checker35632_35645.call(null,G__35640));
})();if(cljs.core.truth_(temp__4126__auto___35648))
{var error__839__auto___35649 = temp__4126__auto___35648;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35649], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35631_35644,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35647,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35649], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var i1 = G__35634;var i2 = G__35635;while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___35642,output_schema35630_35643,input_schema35631_35644,input_checker35632_35645,output_checker35633_35646){
return (function (p1__35629_SHARP_){if(schema.core.specific_key_QMARK_(p1__35629_SHARP_))
{return schema.core.explicit_schema_key(p1__35629_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__837__auto__,ufv___35642,output_schema35630_35643,input_schema35631_35644,input_checker35632_35645,output_checker35633_35646))
,((function (validate__837__auto__,ufv___35642,output_schema35630_35643,input_schema35631_35644,input_checker35632_35645,output_checker35633_35646){
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
});})(validate__837__auto__,ufv___35642,output_schema35630_35643,input_schema35631_35644,input_checker35632_35645,output_checker35633_35646))
,((function (validate__837__auto__,ufv___35642,output_schema35630_35643,input_schema35631_35644,input_checker35632_35645,output_checker35633_35646){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2)))
{return union_input_schemata(s1,s2);
} else
{return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__837__auto__,ufv___35642,output_schema35630_35643,input_schema35631_35644,input_checker35632_35645,output_checker35633_35646))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35650 = (function (){var G__35641 = o__840__auto__;return (output_checker35633_35646.cljs$core$IFn$_invoke$arity$1 ? output_checker35633_35646.cljs$core$IFn$_invoke$arity$1(G__35641) : output_checker35633_35646.call(null,G__35641));
})();if(cljs.core.truth_(temp__4126__auto___35650))
{var error__839__auto___35651 = temp__4126__auto___35650;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35651], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35630_35643,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35651], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35642,output_schema35630_35643,input_schema35631_35644,input_checker35632_35645,output_checker35633_35646))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema35630_35643,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35631_35644], null)));
var ufv___35661 = schema.utils.use_fn_validation;var output_schema35652_35662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema35653_35663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker35654_35664 = schema.core.checker(input_schema35653_35663);var output_checker35655_35665 = schema.core.checker(output_schema35652_35662);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___35661,output_schema35652_35662,input_schema35653_35663,input_checker35654_35664,output_checker35655_35665){
return (function required_toplevel_keys(G__35656){var validate__837__auto__ = ufv___35661.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35656], null);var temp__4126__auto___35667 = (function (){var G__35659 = args__838__auto___35666;return (input_checker35654_35664.cljs$core$IFn$_invoke$arity$1 ? input_checker35654_35664.cljs$core$IFn$_invoke$arity$1(G__35659) : input_checker35654_35664.call(null,G__35659));
})();if(cljs.core.truth_(temp__4126__auto___35667))
{var error__839__auto___35668 = temp__4126__auto___35667;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35668], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35653_35663,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35666,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35668], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input_schema = G__35656;while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___35661,output_schema35652_35662,input_schema35653_35663,input_checker35654_35664,output_checker35655_35665){
return (function (k){if(schema.core.required_key_QMARK_(k))
{return schema.core.explicit_schema_key(k);
} else
{return null;
}
});})(validate__837__auto__,ufv___35661,output_schema35652_35662,input_schema35653_35663,input_checker35654_35664,output_checker35655_35665))
,cljs.core.keys(input_schema));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35669 = (function (){var G__35660 = o__840__auto__;return (output_checker35655_35665.cljs$core$IFn$_invoke$arity$1 ? output_checker35655_35665.cljs$core$IFn$_invoke$arity$1(G__35660) : output_checker35655_35665.call(null,G__35660));
})();if(cljs.core.truth_(temp__4126__auto___35669))
{var error__839__auto___35670 = temp__4126__auto___35669;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35670], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35652_35662,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35670], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35661,output_schema35652_35662,input_schema35653_35663,input_checker35654_35664,output_checker35655_35665))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema35652_35662,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35653_35663], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr))))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20735__auto__ = (function iter__35685(s__35686){return (new cljs.core.LazySeq(null,(function (){var s__35686__$1 = s__35686;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35686__$1);if(temp__4126__auto__)
{var s__35686__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35686__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__35686__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__35688 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__35687 = (0);while(true){
if((i__35687 < size__20734__auto__))
{var vec__35693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__35687);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35693,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35693,(1),null);cljs.core.chunk_append(b__35688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));
{
var G__35695 = (i__35687 + (1));
i__35687 = G__35695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35688),iter__35685(cljs.core.chunk_rest(s__35686__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35688),null);
}
} else
{var vec__35694 = cljs.core.first(s__35686__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35694,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35694,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__35685(cljs.core.rest(s__35686__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20735__auto__(expr);
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
{return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20735__auto__ = (function iter__35714(s__35715){return (new cljs.core.LazySeq(null,(function (){var s__35715__$1 = s__35715;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35715__$1);if(temp__4126__auto__)
{var s__35715__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35715__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__35715__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__35717 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__35716 = (0);while(true){
if((i__35716 < size__20734__auto__))
{var vec__35722 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__35716);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35722,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35722,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append(b__35717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__35724 = (i__35716 + (1));
i__35716 = G__35724;
continue;
}
} else
{{
var G__35725 = (i__35716 + (1));
i__35716 = G__35725;
continue;
}
}
} else
{{
var G__35726 = (i__35716 + (1));
i__35716 = G__35726;
continue;
}
}
} else
{{
var G__35727 = (i__35716 + (1));
i__35716 = G__35727;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35717),iter__35714(cljs.core.chunk_rest(s__35715__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35717),null);
}
} else
{var vec__35723 = cljs.core.first(s__35715__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35723,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35723,(1),null);if(schema.core.specific_key_QMARK_(k))
{var required_QMARK_ = schema.core.required_key_QMARK_(k);var raw_k = schema.core.explicit_schema_key(k);var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__35714(cljs.core.rest(s__35715__$2)));
} else
{{
var G__35728 = cljs.core.rest(s__35715__$2);
s__35715__$1 = G__35728;
continue;
}
}
} else
{{
var G__35729 = cljs.core.rest(s__35715__$2);
s__35715__$1 = G__35729;
continue;
}
}
} else
{{
var G__35730 = cljs.core.rest(s__35715__$2);
s__35715__$1 = G__35730;
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
});return iter__20735__auto__(input_schema);
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
var ufv___35757 = schema.utils.use_fn_validation;var output_schema35731_35758 = schema.core.Any;var input_schema35732_35759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker35733_35760 = schema.core.checker(input_schema35732_35759);var output_checker35734_35761 = schema.core.checker(output_schema35731_35758);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___35757,output_schema35731_35758,input_schema35732_35759,input_checker35733_35760,output_checker35734_35761){
return (function compose_schemata(G__35735,G__35736){var validate__837__auto__ = true;if(validate__837__auto__)
{var args__838__auto___35762 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35735,G__35736], null);var temp__4126__auto___35763 = (function (){var G__35747 = args__838__auto___35762;return (input_checker35733_35760.cljs$core$IFn$_invoke$arity$1 ? input_checker35733_35760.cljs$core$IFn$_invoke$arity$1(G__35747) : input_checker35733_35760.call(null,G__35747));
})();if(cljs.core.truth_(temp__4126__auto___35763))
{var error__839__auto___35764 = temp__4126__auto___35763;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35764], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35732_35759,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35762,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35764], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__35750 = G__35735;var vec__35752 = G__35750;var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35752,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35752,(1),null);var G__35751 = G__35736;var vec__35753 = G__35751;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753,(1),null);var G__35750__$1 = G__35750;var G__35751__$1 = G__35751;while(true){
var vec__35754 = G__35750__$1;var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(1),null);var vec__35755 = G__35751__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(1),null);plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__837__auto__)
{var temp__4126__auto___35765 = (function (){var G__35756 = o__840__auto__;return (output_checker35734_35761.cljs$core$IFn$_invoke$arity$1 ? output_checker35734_35761.cljs$core$IFn$_invoke$arity$1(G__35756) : output_checker35734_35761.call(null,G__35756));
})();if(cljs.core.truth_(temp__4126__auto___35765))
{var error__839__auto___35766 = temp__4126__auto___35765;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35766], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35731_35758,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35766], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35757,output_schema35731_35758,input_schema35732_35759,input_checker35733_35760,output_checker35734_35761))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema35731_35758,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35732_35759], null)));
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
var ufv___35869 = schema.utils.use_fn_validation;var output_schema35767_35870 = schema.core.Any;var input_schema35768_35871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker35769_35872 = schema.core.checker(input_schema35768_35871);var output_checker35770_35873 = schema.core.checker(output_schema35767_35870);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873){
return (function split_schema(G__35771,G__35772){var validate__837__auto__ = ufv___35869.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35771,G__35772], null);var temp__4126__auto___35875 = (function (){var G__35821 = args__838__auto___35874;return (input_checker35769_35872.cljs$core$IFn$_invoke$arity$1 ? input_checker35769_35872.cljs$core$IFn$_invoke$arity$1(G__35821) : input_checker35769_35872.call(null,G__35821));
})();if(cljs.core.truth_(temp__4126__auto___35875))
{var error__839__auto___35876 = temp__4126__auto___35875;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35876], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35768_35871,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35874,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35876], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var s = G__35771;var ks = G__35772;while(true){
var ks__$1 = cljs.core.set(ks);var iter__20735__auto__ = ((function (ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873){
return (function iter__35822(s__35823){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873){
return (function (){var s__35823__$1 = s__35823;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35823__$1);if(temp__4126__auto__)
{var s__35823__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35823__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__35823__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__35825 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__35824 = (0);while(true){
if((i__35824 < size__20734__auto__))
{var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__35824);cljs.core.chunk_append(b__35825,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20735__auto__ = ((function (i__35824,in_QMARK_,c__20733__auto__,size__20734__auto__,b__35825,s__35823__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873){
return (function iter__35848(s__35849){return (new cljs.core.LazySeq(null,((function (i__35824,in_QMARK_,c__20733__auto__,size__20734__auto__,b__35825,s__35823__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873){
return (function (){var s__35849__$1 = s__35849;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__35849__$1);if(temp__4126__auto____$1)
{var s__35849__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__35849__$2))
{var c__20733__auto____$1 = cljs.core.chunk_first(s__35849__$2);var size__20734__auto____$1 = cljs.core.count(c__20733__auto____$1);var b__35851 = cljs.core.chunk_buffer(size__20734__auto____$1);if((function (){var i__35850 = (0);while(true){
if((i__35850 < size__20734__auto____$1))
{var vec__35856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto____$1,i__35850);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35856,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35856,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__35851,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__35877 = (i__35850 + (1));
i__35850 = G__35877;
continue;
}
} else
{{
var G__35878 = (i__35850 + (1));
i__35850 = G__35878;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35851),iter__35848(cljs.core.chunk_rest(s__35849__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35851),null);
}
} else
{var vec__35857 = cljs.core.first(s__35849__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35857,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35857,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35848(cljs.core.rest(s__35849__$2)));
} else
{{
var G__35879 = cljs.core.rest(s__35849__$2);
s__35849__$1 = G__35879;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__35824,in_QMARK_,c__20733__auto__,size__20734__auto__,b__35825,s__35823__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873))
,null,null));
});})(i__35824,in_QMARK_,c__20733__auto__,size__20734__auto__,b__35825,s__35823__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873))
;return iter__20735__auto__(s);
})()));
{
var G__35880 = (i__35824 + (1));
i__35824 = G__35880;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35825),iter__35822(cljs.core.chunk_rest(s__35823__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35825),null);
}
} else
{var in_QMARK_ = cljs.core.first(s__35823__$2);return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20735__auto__ = ((function (in_QMARK_,s__35823__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873){
return (function iter__35858(s__35859){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__35823__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873){
return (function (){var s__35859__$1 = s__35859;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__35859__$1);if(temp__4126__auto____$1)
{var s__35859__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__35859__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__35859__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__35861 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__35860 = (0);while(true){
if((i__35860 < size__20734__auto__))
{var vec__35866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__35860);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35866,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35866,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{cljs.core.chunk_append(b__35861,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__35881 = (i__35860 + (1));
i__35860 = G__35881;
continue;
}
} else
{{
var G__35882 = (i__35860 + (1));
i__35860 = G__35882;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35861),iter__35858(cljs.core.chunk_rest(s__35859__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35861),null);
}
} else
{var vec__35867 = cljs.core.first(s__35859__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35867,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35867,(1),null);if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)))))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35858(cljs.core.rest(s__35859__$2)));
} else
{{
var G__35883 = cljs.core.rest(s__35859__$2);
s__35859__$1 = G__35883;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__35823__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873))
,null,null));
});})(in_QMARK_,s__35823__$2,temp__4126__auto__,ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873))
;return iter__20735__auto__(s);
})()),iter__35822(cljs.core.rest(s__35823__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873))
,null,null));
});})(ks__$1,validate__837__auto__,ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873))
;return iter__20735__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35884 = (function (){var G__35868 = o__840__auto__;return (output_checker35770_35873.cljs$core$IFn$_invoke$arity$1 ? output_checker35770_35873.cljs$core$IFn$_invoke$arity$1(G__35868) : output_checker35770_35873.call(null,G__35868));
})();if(cljs.core.truth_(temp__4126__auto___35884))
{var error__839__auto___35885 = temp__4126__auto___35884;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35885], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35767_35870,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35885], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35869,output_schema35767_35870,input_schema35768_35871,input_checker35769_35872,output_checker35770_35873))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema35767_35870,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35768_35871], null)));
var ufv___35920 = schema.utils.use_fn_validation;var output_schema35886_35921 = plumbing.fnk.schema.GraphIOSchemata;var input_schema35887_35922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker35888_35923 = schema.core.checker(input_schema35887_35922);var output_checker35889_35924 = schema.core.checker(output_schema35886_35921);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___35920,output_schema35886_35921,input_schema35887_35922,input_checker35888_35923,output_checker35889_35924){
return (function sequence_schemata(G__35890,G__35891){var validate__837__auto__ = ufv___35920.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___35925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35890,G__35891], null);var temp__4126__auto___35926 = (function (){var G__35906 = args__838__auto___35925;return (input_checker35888_35923.cljs$core$IFn$_invoke$arity$1 ? input_checker35888_35923.cljs$core$IFn$_invoke$arity$1(G__35906) : input_checker35888_35923.call(null,G__35906));
})();if(cljs.core.truth_(temp__4126__auto___35926))
{var error__839__auto___35927 = temp__4126__auto___35926;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35927], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35887_35922,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___35925,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35927], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__35910 = G__35890;var vec__35912 = G__35910;var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35912,(0),null);var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35912,(1),null);var G__35911 = G__35891;var vec__35913 = G__35911;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(0),null);var vec__35914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(1),null);var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(0),null);var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(1),null);var G__35910__$1 = G__35910;var G__35911__$1 = G__35911;while(true){
var vec__35915 = G__35910__$1;var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(0),null);var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(1),null);var vec__35916 = G__35911__$1;var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35916,(0),null);var vec__35917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35916,(1),null);var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35917,(0),null);var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35917,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1)))
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
var vec__35918 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(0),null);var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(1),null);plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___35928 = (function (){var G__35919 = o__840__auto__;return (output_checker35889_35924.cljs$core$IFn$_invoke$arity$1 ? output_checker35889_35924.cljs$core$IFn$_invoke$arity$1(G__35919) : output_checker35889_35924.call(null,G__35919));
})();if(cljs.core.truth_(temp__4126__auto___35928))
{var error__839__auto___35929 = temp__4126__auto___35928;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___35929], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35886_35921,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___35929], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___35920,output_schema35886_35921,input_schema35887_35922,input_checker35888_35923,output_checker35889_35924))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema35886_35921,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35887_35922], null)));
//# sourceMappingURL=schema.js.map