goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by looking up the proper merge function and in the
* supplied map of key -> merge-fn and using that for the big merge. If
* a key doesn't have a merge function, the right value wins (as with
* merge).
*/
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key(e);var v = cljs.core.val(e);var temp__4124__auto__ = (function (){var and__19335__auto__ = cljs.core.contains_QMARK_(m,k);if(and__19335__auto__)
{var G__38253 = k;return (k__GT_fn.cljs$core$IFn$_invoke$arity$1 ? k__GT_fn.cljs$core$IFn$_invoke$arity$1(G__38253) : k__GT_fn.call(null,G__38253));
} else
{return and__19335__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__38254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__38255 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38254,G__38255) : f.call(null,G__38254,G__38255));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19357__auto__ = m1;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___38265 = schema.utils.use_fn_validation;var output_schema38256_38266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema38257_38267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker38258_38268 = schema.core.checker(input_schema38257_38267);var output_checker38259_38269 = schema.core.checker(output_schema38256_38266);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___38265,output_schema38256_38266,input_schema38257_38267,input_checker38258_38268,output_checker38259_38269){
return (function collectify(G__38260){var validate__837__auto__ = ufv___38265.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38260], null);var temp__4126__auto___38271 = (function (){var G__38263 = args__838__auto___38270;return (input_checker38258_38268.cljs$core$IFn$_invoke$arity$1 ? input_checker38258_38268.cljs$core$IFn$_invoke$arity$1(G__38263) : input_checker38258_38268.call(null,G__38263));
})();if(cljs.core.truth_(temp__4126__auto___38271))
{var error__839__auto___38272 = temp__4126__auto___38271;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38272], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38257_38267,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38270,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38272], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var x = G__38260;while(true){
if(cljs.core.sequential_QMARK_(x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38273 = (function (){var G__38264 = o__840__auto__;return (output_checker38259_38269.cljs$core$IFn$_invoke$arity$1 ? output_checker38259_38269.cljs$core$IFn$_invoke$arity$1(G__38264) : output_checker38259_38269.call(null,G__38264));
})();if(cljs.core.truth_(temp__4126__auto___38273))
{var error__839__auto___38274 = temp__4126__auto___38273;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38274], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38256_38266,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38274], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38265,output_schema38256_38266,input_schema38257_38267,input_checker38258_38268,output_checker38259_38269))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.collectify),schema.core.make_fn_schema(output_schema38256_38266,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38257_38267], null)));
var ufv___38284 = schema.utils.use_fn_validation;var output_schema38275_38285 = schema.core.Bool;var input_schema38276_38286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker38277_38287 = schema.core.checker(input_schema38276_38286);var output_checker38278_38288 = schema.core.checker(output_schema38275_38285);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___38284,output_schema38275_38285,input_schema38276_38286,input_checker38277_38287,output_checker38278_38288){
return (function strict_valid_component_QMARK_(G__38279){var validate__837__auto__ = ufv___38284.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38279], null);var temp__4126__auto___38290 = (function (){var G__38282 = args__838__auto___38289;return (input_checker38277_38287.cljs$core$IFn$_invoke$arity$1 ? input_checker38277_38287.cljs$core$IFn$_invoke$arity$1(G__38282) : input_checker38277_38287.call(null,G__38282));
})();if(cljs.core.truth_(temp__4126__auto___38290))
{var error__839__auto___38291 = temp__4126__auto___38290;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38291], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38276_38286,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38289,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38291], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__38279;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38292 = (function (){var G__38283 = o__840__auto__;return (output_checker38278_38288.cljs$core$IFn$_invoke$arity$1 ? output_checker38278_38288.cljs$core$IFn$_invoke$arity$1(G__38283) : output_checker38278_38288.call(null,G__38283));
})();if(cljs.core.truth_(temp__4126__auto___38292))
{var error__839__auto___38293 = temp__4126__auto___38292;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38293], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38275_38285,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38293], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38284,output_schema38275_38285,input_schema38276_38286,input_checker38277_38287,output_checker38278_38288))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema(output_schema38275_38285,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38276_38286], null)));
var ufv___38303 = schema.utils.use_fn_validation;var output_schema38294_38304 = schema.core.Bool;var input_schema38295_38305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker38296_38306 = schema.core.checker(input_schema38295_38305);var output_checker38297_38307 = schema.core.checker(output_schema38294_38304);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___38303,output_schema38294_38304,input_schema38295_38305,input_checker38296_38306,output_checker38297_38307){
return (function valid_component_QMARK_(G__38298){var validate__837__auto__ = ufv___38303.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38298], null);var temp__4126__auto___38309 = (function (){var G__38301 = args__838__auto___38308;return (input_checker38296_38306.cljs$core$IFn$_invoke$arity$1 ? input_checker38296_38306.cljs$core$IFn$_invoke$arity$1(G__38301) : input_checker38296_38306.call(null,G__38301));
})();if(cljs.core.truth_(temp__4126__auto___38309))
{var error__839__auto___38310 = temp__4126__auto___38309;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38310], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38295_38305,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38308,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38310], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__38298;while(true){
var or__19357__auto__ = typeof child === 'string';if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = typeof child === 'number';if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_(child);
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38311 = (function (){var G__38302 = o__840__auto__;return (output_checker38297_38307.cljs$core$IFn$_invoke$arity$1 ? output_checker38297_38307.cljs$core$IFn$_invoke$arity$1(G__38302) : output_checker38297_38307.call(null,G__38302));
})();if(cljs.core.truth_(temp__4126__auto___38311))
{var error__839__auto___38312 = temp__4126__auto___38311;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38312], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38294_38304,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38312], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38303,output_schema38294_38304,input_schema38295_38305,input_checker38296_38306,output_checker38297_38307))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema(output_schema38294_38304,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38295_38305], null)));
var ufv___38322 = schema.utils.use_fn_validation;var output_schema38313_38323 = schema.core.Bool;var input_schema38314_38324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker38315_38325 = schema.core.checker(input_schema38314_38324);var output_checker38316_38326 = schema.core.checker(output_schema38313_38323);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___38322,output_schema38313_38323,input_schema38314_38324,input_checker38315_38325,output_checker38316_38326){
return (function some_valid_component_QMARK_(G__38317){var validate__837__auto__ = ufv___38322.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38317], null);var temp__4126__auto___38328 = (function (){var G__38320 = args__838__auto___38327;return (input_checker38315_38325.cljs$core$IFn$_invoke$arity$1 ? input_checker38315_38325.cljs$core$IFn$_invoke$arity$1(G__38320) : input_checker38315_38325.call(null,G__38320));
})();if(cljs.core.truth_(temp__4126__auto___38328))
{var error__839__auto___38329 = temp__4126__auto___38328;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38329], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38314_38324,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38327,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38329], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var children = G__38317;while(true){
return cljs.core.boolean$(cljs.core.some(om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38330 = (function (){var G__38321 = o__840__auto__;return (output_checker38316_38326.cljs$core$IFn$_invoke$arity$1 ? output_checker38316_38326.cljs$core$IFn$_invoke$arity$1(G__38321) : output_checker38316_38326.call(null,G__38321));
})();if(cljs.core.truth_(temp__4126__auto___38330))
{var error__839__auto___38331 = temp__4126__auto___38330;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38331], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38313_38323,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38331], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38322,output_schema38313_38323,input_schema38314_38324,input_checker38315_38325,output_checker38316_38326))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema(output_schema38313_38323,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38314_38324], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__19335__auto__ = l;if(cljs.core.truth_(and__19335__auto__))
{return r;
} else
{return and__19335__auto__;
}
})()))
{return (function() { 
var G__38332__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(l,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(r,args);
};
var G__38332 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38332__delegate.call(this,args);};
G__38332.cljs$lang$maxFixedArity = 0;
G__38332.cljs$lang$applyTo = (function (arglist__38333){
var args = cljs.core.seq(arglist__38333);
return G__38332__delegate(args);
});
G__38332.cljs$core$IFn$_invoke$arity$variadic = G__38332__delegate;
return G__38332;
})()
;
} else
{var or__19357__auto__ = l;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return r;
}
}
});
/**
* Map of React keyword to a custom function for its merge. Tries to
* do a decent job with event handlers as well; currently only
* handles :on-select :on-click, :on-blur, kebab-cased as om-tools
* prefers.
*/
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
});var orig_fn = ((function (merge_class){
return (function (l,r){var or__19357__auto__ = l;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return r;
}
});})(merge_class))
;var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){return null;
});})(merge_class,orig_fn))
;return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
* Merges two maps that represent React properties. Merges occur
* according to the functions defined in `react-merges`.
* @param {...*} var_args
*/
om_bootstrap.util.merge_props = (function() { 
var merge_props__delegate = function (prop_maps){var react_merge = (function react_merge(xs){return om_bootstrap.util.merge_with_fns(om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function normalize_class(m){if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"class","class",-2030961996)))
{return react_merge(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else
{return m;
}
});
return react_merge(cljs.core.map.cljs$core$IFn$_invoke$arity$2(normalize_class,prop_maps));
};
var merge_props = function (var_args){
var prop_maps = null;if (arguments.length > 0) {
  prop_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_props__delegate.call(this,prop_maps);};
merge_props.cljs$lang$maxFixedArity = 0;
merge_props.cljs$lang$applyTo = (function (arglist__38334){
var prop_maps = cljs.core.seq(arglist__38334);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj38342 = {};return obj38342;
})();var seq__38343_38347 = cljs.core.seq(cljs.core.js_keys(arr));var chunk__38344_38348 = null;var count__38345_38349 = (0);var i__38346_38350 = (0);while(true){
if((i__38346_38350 < count__38345_38349))
{var k_38351 = chunk__38344_38348.cljs$core$IIndexed$_nth$arity$2(null,i__38346_38350);if(cljs.core.truth_(arr.hasOwnProperty(k_38351)))
{(ret[k_38351] = (arr[k_38351]));
} else
{}
{
var G__38352 = seq__38343_38347;
var G__38353 = chunk__38344_38348;
var G__38354 = count__38345_38349;
var G__38355 = (i__38346_38350 + (1));
seq__38343_38347 = G__38352;
chunk__38344_38348 = G__38353;
count__38345_38349 = G__38354;
i__38346_38350 = G__38355;
continue;
}
} else
{var temp__4126__auto___38356 = cljs.core.seq(seq__38343_38347);if(temp__4126__auto___38356)
{var seq__38343_38357__$1 = temp__4126__auto___38356;if(cljs.core.chunked_seq_QMARK_(seq__38343_38357__$1))
{var c__20792__auto___38358 = cljs.core.chunk_first(seq__38343_38357__$1);{
var G__38359 = cljs.core.chunk_rest(seq__38343_38357__$1);
var G__38360 = c__20792__auto___38358;
var G__38361 = cljs.core.count(c__20792__auto___38358);
var G__38362 = (0);
seq__38343_38347 = G__38359;
chunk__38344_38348 = G__38360;
count__38345_38349 = G__38361;
i__38346_38350 = G__38362;
continue;
}
} else
{var k_38363 = cljs.core.first(seq__38343_38357__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_38363)))
{(ret[k_38363] = (arr[k_38363]));
} else
{}
{
var G__38364 = cljs.core.next(seq__38343_38357__$1);
var G__38365 = null;
var G__38366 = (0);
var G__38367 = (0);
seq__38343_38347 = G__38364;
chunk__38344_38348 = G__38365;
count__38345_38349 = G__38366;
i__38346_38350 = G__38367;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
/**
* Merges the supplied extra properties into the underlying Om cursor
* and calls the constructor to clone the React component.
* 
* Requires that the supplied child has an Om cursor attached to it!
*/
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props(child);return child.constructor((function (){var G__38370 = om_bootstrap.util.copy_js(child.props);(G__38370["__om_cursor"] = ((cljs.core.fn_QMARK_(extra_props))?(function (){var G__38371 = om_props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__38371) : extra_props.call(null,G__38371));
})():om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_props,extra_props], 0))));
return G__38370;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(child.props,cljs.core.array_seq([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));var new_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.fn_QMARK_(extra_props))?(function (){var G__38373 = props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__38373) : extra_props.call(null,G__38373));
})():om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,extra_props], 0))),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);if(cljs.core.truth_(temp__4126__auto__))
{var children = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else
{return null;
}
})()], 0));return child.constructor(cljs.core.clj__GT_js(new_props));
});
/**
* Returns a shallow copy of the supplied component (child); the copy
* will have any props provided by extra-props merged in. Props are
* merged in the same manner as merge-props, so props like :class will
* be merged intelligently.
* 
* extra-props can be a function of the old props that returns new
* props, OR it can be a map of props.
* 
* If the supplied child is an Om component, any supplied extra
* properties will be merged into the underlying cursor and accessible
* in the Om constructor.
*/
om_bootstrap.util.clone_with_props = (function() {
var clone_with_props = null;
var clone_with_props__1 = (function (child){return clone_with_props.cljs$core$IFn$_invoke$arity$2(child,cljs.core.PersistentArrayMap.EMPTY);
});
var clone_with_props__2 = (function (child,extra_props){if(cljs.core.not(om_bootstrap.util.strict_valid_component_QMARK_(child)))
{return child;
} else
{if((cljs.core.map_QMARK_(extra_props)) && (cljs.core.empty_QMARK_(extra_props)))
{return child.constructor(child.props);
} else
{if(cljs.core.truth_(om.core.get_props(child)))
{return om_bootstrap.util.clone_om(child,extra_props);
} else
{return om_bootstrap.util.clone_basic_react(child,extra_props);

}
}
}
});
clone_with_props = function(child,extra_props){
switch(arguments.length){
case 1:
return clone_with_props__1.call(this,child);
case 2:
return clone_with_props__2.call(this,child,extra_props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_with_props.cljs$core$IFn$_invoke$arity$1 = clone_with_props__1;
clone_with_props.cljs$core$IFn$_invoke$arity$2 = clone_with_props__2;
return clone_with_props;
})()
;
//# sourceMappingURL=util.js.map