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
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key(e);var v = cljs.core.val(e);var temp__4124__auto__ = (function (){var and__19564__auto__ = cljs.core.contains_QMARK_(m,k);if(and__19564__auto__)
{var G__55288 = k;return (k__GT_fn.cljs$core$IFn$_invoke$arity$1 ? k__GT_fn.cljs$core$IFn$_invoke$arity$1(G__55288) : k__GT_fn.call(null,G__55288));
} else
{return and__19564__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__55289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__55290 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__55289,G__55290) : f.call(null,G__55289,G__55290));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19586__auto__ = m1;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___55300 = schema.utils.use_fn_validation;var output_schema55291_55301 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema55292_55302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker55293_55303 = schema.core.checker(input_schema55292_55302);var output_checker55294_55304 = schema.core.checker(output_schema55291_55301);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___55300,output_schema55291_55301,input_schema55292_55302,input_checker55293_55303,output_checker55294_55304){
return (function collectify(G__55295){var validate__837__auto__ = ufv___55300.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55295], null);var temp__4126__auto___55306 = (function (){var G__55298 = args__838__auto___55305;return (input_checker55293_55303.cljs$core$IFn$_invoke$arity$1 ? input_checker55293_55303.cljs$core$IFn$_invoke$arity$1(G__55298) : input_checker55293_55303.call(null,G__55298));
})();if(cljs.core.truth_(temp__4126__auto___55306))
{var error__839__auto___55307 = temp__4126__auto___55306;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55307], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55292_55302,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55305,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55307], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var x = G__55295;while(true){
if(cljs.core.sequential_QMARK_(x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55308 = (function (){var G__55299 = o__840__auto__;return (output_checker55294_55304.cljs$core$IFn$_invoke$arity$1 ? output_checker55294_55304.cljs$core$IFn$_invoke$arity$1(G__55299) : output_checker55294_55304.call(null,G__55299));
})();if(cljs.core.truth_(temp__4126__auto___55308))
{var error__839__auto___55309 = temp__4126__auto___55308;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55309], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55291_55301,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55309], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55300,output_schema55291_55301,input_schema55292_55302,input_checker55293_55303,output_checker55294_55304))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.collectify),schema.core.make_fn_schema(output_schema55291_55301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55292_55302], null)));
var ufv___55319 = schema.utils.use_fn_validation;var output_schema55310_55320 = schema.core.Bool;var input_schema55311_55321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker55312_55322 = schema.core.checker(input_schema55311_55321);var output_checker55313_55323 = schema.core.checker(output_schema55310_55320);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___55319,output_schema55310_55320,input_schema55311_55321,input_checker55312_55322,output_checker55313_55323){
return (function strict_valid_component_QMARK_(G__55314){var validate__837__auto__ = ufv___55319.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55314], null);var temp__4126__auto___55325 = (function (){var G__55317 = args__838__auto___55324;return (input_checker55312_55322.cljs$core$IFn$_invoke$arity$1 ? input_checker55312_55322.cljs$core$IFn$_invoke$arity$1(G__55317) : input_checker55312_55322.call(null,G__55317));
})();if(cljs.core.truth_(temp__4126__auto___55325))
{var error__839__auto___55326 = temp__4126__auto___55325;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55326], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55311_55321,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55324,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55326], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__55314;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55327 = (function (){var G__55318 = o__840__auto__;return (output_checker55313_55323.cljs$core$IFn$_invoke$arity$1 ? output_checker55313_55323.cljs$core$IFn$_invoke$arity$1(G__55318) : output_checker55313_55323.call(null,G__55318));
})();if(cljs.core.truth_(temp__4126__auto___55327))
{var error__839__auto___55328 = temp__4126__auto___55327;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55328], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55310_55320,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55328], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55319,output_schema55310_55320,input_schema55311_55321,input_checker55312_55322,output_checker55313_55323))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema(output_schema55310_55320,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55311_55321], null)));
var ufv___55338 = schema.utils.use_fn_validation;var output_schema55329_55339 = schema.core.Bool;var input_schema55330_55340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker55331_55341 = schema.core.checker(input_schema55330_55340);var output_checker55332_55342 = schema.core.checker(output_schema55329_55339);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___55338,output_schema55329_55339,input_schema55330_55340,input_checker55331_55341,output_checker55332_55342){
return (function valid_component_QMARK_(G__55333){var validate__837__auto__ = ufv___55338.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55333], null);var temp__4126__auto___55344 = (function (){var G__55336 = args__838__auto___55343;return (input_checker55331_55341.cljs$core$IFn$_invoke$arity$1 ? input_checker55331_55341.cljs$core$IFn$_invoke$arity$1(G__55336) : input_checker55331_55341.call(null,G__55336));
})();if(cljs.core.truth_(temp__4126__auto___55344))
{var error__839__auto___55345 = temp__4126__auto___55344;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55345], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55330_55340,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55343,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55345], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__55333;while(true){
var or__19586__auto__ = typeof child === 'string';if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = typeof child === 'number';if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_(child);
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55346 = (function (){var G__55337 = o__840__auto__;return (output_checker55332_55342.cljs$core$IFn$_invoke$arity$1 ? output_checker55332_55342.cljs$core$IFn$_invoke$arity$1(G__55337) : output_checker55332_55342.call(null,G__55337));
})();if(cljs.core.truth_(temp__4126__auto___55346))
{var error__839__auto___55347 = temp__4126__auto___55346;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55347], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55329_55339,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55347], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55338,output_schema55329_55339,input_schema55330_55340,input_checker55331_55341,output_checker55332_55342))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema(output_schema55329_55339,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55330_55340], null)));
var ufv___55357 = schema.utils.use_fn_validation;var output_schema55348_55358 = schema.core.Bool;var input_schema55349_55359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker55350_55360 = schema.core.checker(input_schema55349_55359);var output_checker55351_55361 = schema.core.checker(output_schema55348_55358);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___55357,output_schema55348_55358,input_schema55349_55359,input_checker55350_55360,output_checker55351_55361){
return (function some_valid_component_QMARK_(G__55352){var validate__837__auto__ = ufv___55357.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55352], null);var temp__4126__auto___55363 = (function (){var G__55355 = args__838__auto___55362;return (input_checker55350_55360.cljs$core$IFn$_invoke$arity$1 ? input_checker55350_55360.cljs$core$IFn$_invoke$arity$1(G__55355) : input_checker55350_55360.call(null,G__55355));
})();if(cljs.core.truth_(temp__4126__auto___55363))
{var error__839__auto___55364 = temp__4126__auto___55363;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55364], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55349_55359,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55362,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55364], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var children = G__55352;while(true){
return cljs.core.boolean$(cljs.core.some(om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55365 = (function (){var G__55356 = o__840__auto__;return (output_checker55351_55361.cljs$core$IFn$_invoke$arity$1 ? output_checker55351_55361.cljs$core$IFn$_invoke$arity$1(G__55356) : output_checker55351_55361.call(null,G__55356));
})();if(cljs.core.truth_(temp__4126__auto___55365))
{var error__839__auto___55366 = temp__4126__auto___55365;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55366], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55348_55358,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55366], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55357,output_schema55348_55358,input_schema55349_55359,input_checker55350_55360,output_checker55351_55361))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema(output_schema55348_55358,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55349_55359], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__19564__auto__ = l;if(cljs.core.truth_(and__19564__auto__))
{return r;
} else
{return and__19564__auto__;
}
})()))
{return (function() { 
var G__55367__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(l,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(r,args);
};
var G__55367 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55367__delegate.call(this,args);};
G__55367.cljs$lang$maxFixedArity = 0;
G__55367.cljs$lang$applyTo = (function (arglist__55368){
var args = cljs.core.seq(arglist__55368);
return G__55367__delegate(args);
});
G__55367.cljs$core$IFn$_invoke$arity$variadic = G__55367__delegate;
return G__55367;
})()
;
} else
{var or__19586__auto__ = l;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
return (function (l,r){var or__19586__auto__ = l;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
merge_props.cljs$lang$applyTo = (function (arglist__55369){
var prop_maps = cljs.core.seq(arglist__55369);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj55377 = {};return obj55377;
})();var seq__55378_55382 = cljs.core.seq(cljs.core.js_keys(arr));var chunk__55379_55383 = null;var count__55380_55384 = (0);var i__55381_55385 = (0);while(true){
if((i__55381_55385 < count__55380_55384))
{var k_55386 = chunk__55379_55383.cljs$core$IIndexed$_nth$arity$2(null,i__55381_55385);if(cljs.core.truth_(arr.hasOwnProperty(k_55386)))
{(ret[k_55386] = (arr[k_55386]));
} else
{}
{
var G__55387 = seq__55378_55382;
var G__55388 = chunk__55379_55383;
var G__55389 = count__55380_55384;
var G__55390 = (i__55381_55385 + (1));
seq__55378_55382 = G__55387;
chunk__55379_55383 = G__55388;
count__55380_55384 = G__55389;
i__55381_55385 = G__55390;
continue;
}
} else
{var temp__4126__auto___55391 = cljs.core.seq(seq__55378_55382);if(temp__4126__auto___55391)
{var seq__55378_55392__$1 = temp__4126__auto___55391;if(cljs.core.chunked_seq_QMARK_(seq__55378_55392__$1))
{var c__21046__auto___55393 = cljs.core.chunk_first(seq__55378_55392__$1);{
var G__55394 = cljs.core.chunk_rest(seq__55378_55392__$1);
var G__55395 = c__21046__auto___55393;
var G__55396 = cljs.core.count(c__21046__auto___55393);
var G__55397 = (0);
seq__55378_55382 = G__55394;
chunk__55379_55383 = G__55395;
count__55380_55384 = G__55396;
i__55381_55385 = G__55397;
continue;
}
} else
{var k_55398 = cljs.core.first(seq__55378_55392__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_55398)))
{(ret[k_55398] = (arr[k_55398]));
} else
{}
{
var G__55399 = cljs.core.next(seq__55378_55392__$1);
var G__55400 = null;
var G__55401 = (0);
var G__55402 = (0);
seq__55378_55382 = G__55399;
chunk__55379_55383 = G__55400;
count__55380_55384 = G__55401;
i__55381_55385 = G__55402;
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
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props(child);return child.constructor((function (){var G__55405 = om_bootstrap.util.copy_js(child.props);(G__55405["__om_cursor"] = ((cljs.core.fn_QMARK_(extra_props))?(function (){var G__55406 = om_props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__55406) : extra_props.call(null,G__55406));
})():om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_props,extra_props], 0))));
return G__55405;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(child.props,cljs.core.array_seq([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));var new_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.fn_QMARK_(extra_props))?(function (){var G__55408 = props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__55408) : extra_props.call(null,G__55408));
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