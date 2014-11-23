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
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key(e);var v = cljs.core.val(e);var temp__4124__auto__ = (function (){var and__19697__auto__ = cljs.core.contains_QMARK_(m,k);if(and__19697__auto__)
{var G__74308 = k;return (k__GT_fn.cljs$core$IFn$_invoke$arity$1 ? k__GT_fn.cljs$core$IFn$_invoke$arity$1(G__74308) : k__GT_fn.call(null,G__74308));
} else
{return and__19697__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__74309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__74310 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__74309,G__74310) : f.call(null,G__74309,G__74310));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19711__auto__ = m1;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___74320 = schema.utils.use_fn_validation;var output_schema74311_74321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema74312_74322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker74313_74323 = schema.core.checker(input_schema74312_74322);var output_checker74314_74324 = schema.core.checker(output_schema74311_74321);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___74320,output_schema74311_74321,input_schema74312_74322,input_checker74313_74323,output_checker74314_74324){
return (function collectify(G__74315){var validate__837__auto__ = ufv___74320.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74315], null);var temp__4126__auto___74326 = (function (){var G__74318 = args__838__auto___74325;return (input_checker74313_74323.cljs$core$IFn$_invoke$arity$1 ? input_checker74313_74323.cljs$core$IFn$_invoke$arity$1(G__74318) : input_checker74313_74323.call(null,G__74318));
})();if(cljs.core.truth_(temp__4126__auto___74326))
{var error__839__auto___74327 = temp__4126__auto___74326;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74327], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74312_74322,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74325,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74327], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var x = G__74315;while(true){
if(cljs.core.sequential_QMARK_(x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74328 = (function (){var G__74319 = o__840__auto__;return (output_checker74314_74324.cljs$core$IFn$_invoke$arity$1 ? output_checker74314_74324.cljs$core$IFn$_invoke$arity$1(G__74319) : output_checker74314_74324.call(null,G__74319));
})();if(cljs.core.truth_(temp__4126__auto___74328))
{var error__839__auto___74329 = temp__4126__auto___74328;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74329], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74311_74321,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74329], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___74320,output_schema74311_74321,input_schema74312_74322,input_checker74313_74323,output_checker74314_74324))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.collectify),schema.core.make_fn_schema(output_schema74311_74321,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74312_74322], null)));
var ufv___74339 = schema.utils.use_fn_validation;var output_schema74330_74340 = schema.core.Bool;var input_schema74331_74341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker74332_74342 = schema.core.checker(input_schema74331_74341);var output_checker74333_74343 = schema.core.checker(output_schema74330_74340);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___74339,output_schema74330_74340,input_schema74331_74341,input_checker74332_74342,output_checker74333_74343){
return (function strict_valid_component_QMARK_(G__74334){var validate__837__auto__ = ufv___74339.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74334], null);var temp__4126__auto___74345 = (function (){var G__74337 = args__838__auto___74344;return (input_checker74332_74342.cljs$core$IFn$_invoke$arity$1 ? input_checker74332_74342.cljs$core$IFn$_invoke$arity$1(G__74337) : input_checker74332_74342.call(null,G__74337));
})();if(cljs.core.truth_(temp__4126__auto___74345))
{var error__839__auto___74346 = temp__4126__auto___74345;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74346], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74331_74341,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74344,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74346], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__74334;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74347 = (function (){var G__74338 = o__840__auto__;return (output_checker74333_74343.cljs$core$IFn$_invoke$arity$1 ? output_checker74333_74343.cljs$core$IFn$_invoke$arity$1(G__74338) : output_checker74333_74343.call(null,G__74338));
})();if(cljs.core.truth_(temp__4126__auto___74347))
{var error__839__auto___74348 = temp__4126__auto___74347;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74348], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74330_74340,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74348], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___74339,output_schema74330_74340,input_schema74331_74341,input_checker74332_74342,output_checker74333_74343))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema(output_schema74330_74340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74331_74341], null)));
var ufv___74358 = schema.utils.use_fn_validation;var output_schema74349_74359 = schema.core.Bool;var input_schema74350_74360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker74351_74361 = schema.core.checker(input_schema74350_74360);var output_checker74352_74362 = schema.core.checker(output_schema74349_74359);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___74358,output_schema74349_74359,input_schema74350_74360,input_checker74351_74361,output_checker74352_74362){
return (function valid_component_QMARK_(G__74353){var validate__837__auto__ = ufv___74358.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74363 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74353], null);var temp__4126__auto___74364 = (function (){var G__74356 = args__838__auto___74363;return (input_checker74351_74361.cljs$core$IFn$_invoke$arity$1 ? input_checker74351_74361.cljs$core$IFn$_invoke$arity$1(G__74356) : input_checker74351_74361.call(null,G__74356));
})();if(cljs.core.truth_(temp__4126__auto___74364))
{var error__839__auto___74365 = temp__4126__auto___74364;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74365], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74350_74360,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74363,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74365], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__74353;while(true){
var or__19711__auto__ = typeof child === 'string';if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = typeof child === 'number';if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_(child);
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74366 = (function (){var G__74357 = o__840__auto__;return (output_checker74352_74362.cljs$core$IFn$_invoke$arity$1 ? output_checker74352_74362.cljs$core$IFn$_invoke$arity$1(G__74357) : output_checker74352_74362.call(null,G__74357));
})();if(cljs.core.truth_(temp__4126__auto___74366))
{var error__839__auto___74367 = temp__4126__auto___74366;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74367], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74349_74359,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74367], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___74358,output_schema74349_74359,input_schema74350_74360,input_checker74351_74361,output_checker74352_74362))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema(output_schema74349_74359,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74350_74360], null)));
var ufv___74377 = schema.utils.use_fn_validation;var output_schema74368_74378 = schema.core.Bool;var input_schema74369_74379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker74370_74380 = schema.core.checker(input_schema74369_74379);var output_checker74371_74381 = schema.core.checker(output_schema74368_74378);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___74377,output_schema74368_74378,input_schema74369_74379,input_checker74370_74380,output_checker74371_74381){
return (function some_valid_component_QMARK_(G__74372){var validate__837__auto__ = ufv___74377.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74372], null);var temp__4126__auto___74383 = (function (){var G__74375 = args__838__auto___74382;return (input_checker74370_74380.cljs$core$IFn$_invoke$arity$1 ? input_checker74370_74380.cljs$core$IFn$_invoke$arity$1(G__74375) : input_checker74370_74380.call(null,G__74375));
})();if(cljs.core.truth_(temp__4126__auto___74383))
{var error__839__auto___74384 = temp__4126__auto___74383;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74384], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74369_74379,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74382,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74384], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var children = G__74372;while(true){
return cljs.core.boolean$(cljs.core.some(om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74385 = (function (){var G__74376 = o__840__auto__;return (output_checker74371_74381.cljs$core$IFn$_invoke$arity$1 ? output_checker74371_74381.cljs$core$IFn$_invoke$arity$1(G__74376) : output_checker74371_74381.call(null,G__74376));
})();if(cljs.core.truth_(temp__4126__auto___74385))
{var error__839__auto___74386 = temp__4126__auto___74385;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74386], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74368_74378,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74386], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___74377,output_schema74368_74378,input_schema74369_74379,input_checker74370_74380,output_checker74371_74381))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema(output_schema74368_74378,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74369_74379], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__19697__auto__ = l;if(cljs.core.truth_(and__19697__auto__))
{return r;
} else
{return and__19697__auto__;
}
})()))
{return (function() { 
var G__74387__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(l,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(r,args);
};
var G__74387 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__74387__delegate.call(this,args);};
G__74387.cljs$lang$maxFixedArity = 0;
G__74387.cljs$lang$applyTo = (function (arglist__74388){
var args = cljs.core.seq(arglist__74388);
return G__74387__delegate(args);
});
G__74387.cljs$core$IFn$_invoke$arity$variadic = G__74387__delegate;
return G__74387;
})()
;
} else
{var or__19711__auto__ = l;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
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
return (function (l,r){var or__19711__auto__ = l;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
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
merge_props.cljs$lang$applyTo = (function (arglist__74389){
var prop_maps = cljs.core.seq(arglist__74389);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj74397 = {};return obj74397;
})();var seq__74398_74402 = cljs.core.seq(cljs.core.js_keys(arr));var chunk__74399_74403 = null;var count__74400_74404 = (0);var i__74401_74405 = (0);while(true){
if((i__74401_74405 < count__74400_74404))
{var k_74406 = chunk__74399_74403.cljs$core$IIndexed$_nth$arity$2(null,i__74401_74405);if(cljs.core.truth_(arr.hasOwnProperty(k_74406)))
{(ret[k_74406] = (arr[k_74406]));
} else
{}
{
var G__74407 = seq__74398_74402;
var G__74408 = chunk__74399_74403;
var G__74409 = count__74400_74404;
var G__74410 = (i__74401_74405 + (1));
seq__74398_74402 = G__74407;
chunk__74399_74403 = G__74408;
count__74400_74404 = G__74409;
i__74401_74405 = G__74410;
continue;
}
} else
{var temp__4126__auto___74411 = cljs.core.seq(seq__74398_74402);if(temp__4126__auto___74411)
{var seq__74398_74412__$1 = temp__4126__auto___74411;if(cljs.core.chunked_seq_QMARK_(seq__74398_74412__$1))
{var c__21100__auto___74413 = cljs.core.chunk_first(seq__74398_74412__$1);{
var G__74414 = cljs.core.chunk_rest(seq__74398_74412__$1);
var G__74415 = c__21100__auto___74413;
var G__74416 = cljs.core.count(c__21100__auto___74413);
var G__74417 = (0);
seq__74398_74402 = G__74414;
chunk__74399_74403 = G__74415;
count__74400_74404 = G__74416;
i__74401_74405 = G__74417;
continue;
}
} else
{var k_74418 = cljs.core.first(seq__74398_74412__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_74418)))
{(ret[k_74418] = (arr[k_74418]));
} else
{}
{
var G__74419 = cljs.core.next(seq__74398_74412__$1);
var G__74420 = null;
var G__74421 = (0);
var G__74422 = (0);
seq__74398_74402 = G__74419;
chunk__74399_74403 = G__74420;
count__74400_74404 = G__74421;
i__74401_74405 = G__74422;
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
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props(child);return child.constructor((function (){var G__74425 = om_bootstrap.util.copy_js(child.props);(G__74425["__om_cursor"] = ((cljs.core.fn_QMARK_(extra_props))?(function (){var G__74426 = om_props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__74426) : extra_props.call(null,G__74426));
})():om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_props,extra_props], 0))));
return G__74425;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(child.props,cljs.core.array_seq([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));var new_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.fn_QMARK_(extra_props))?(function (){var G__74428 = props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__74428) : extra_props.call(null,G__74428));
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