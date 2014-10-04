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
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key(e);var v = cljs.core.val(e);var temp__4124__auto__ = (function (){var and__19255__auto__ = cljs.core.contains_QMARK_(m,k);if(and__19255__auto__)
{var G__38323 = k;return (k__GT_fn.cljs$core$IFn$_invoke$arity$1 ? k__GT_fn.cljs$core$IFn$_invoke$arity$1(G__38323) : k__GT_fn.call(null,G__38323));
} else
{return and__19255__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__38324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__38325 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38324,G__38325) : f.call(null,G__38324,G__38325));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19267__auto__ = m1;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___38335 = schema.utils.use_fn_validation;var output_schema38326_38336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema38327_38337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker38328_38338 = schema.core.checker(input_schema38327_38337);var output_checker38329_38339 = schema.core.checker(output_schema38326_38336);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___38335,output_schema38326_38336,input_schema38327_38337,input_checker38328_38338,output_checker38329_38339){
return (function collectify(G__38330){var validate__837__auto__ = ufv___38335.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38330], null);var temp__4126__auto___38341 = (function (){var G__38333 = args__838__auto___38340;return (input_checker38328_38338.cljs$core$IFn$_invoke$arity$1 ? input_checker38328_38338.cljs$core$IFn$_invoke$arity$1(G__38333) : input_checker38328_38338.call(null,G__38333));
})();if(cljs.core.truth_(temp__4126__auto___38341))
{var error__839__auto___38342 = temp__4126__auto___38341;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38342], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38327_38337,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38340,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38342], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var x = G__38330;while(true){
if(cljs.core.sequential_QMARK_(x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38343 = (function (){var G__38334 = o__840__auto__;return (output_checker38329_38339.cljs$core$IFn$_invoke$arity$1 ? output_checker38329_38339.cljs$core$IFn$_invoke$arity$1(G__38334) : output_checker38329_38339.call(null,G__38334));
})();if(cljs.core.truth_(temp__4126__auto___38343))
{var error__839__auto___38344 = temp__4126__auto___38343;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38344], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38326_38336,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38344], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38335,output_schema38326_38336,input_schema38327_38337,input_checker38328_38338,output_checker38329_38339))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.collectify),schema.core.make_fn_schema(output_schema38326_38336,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38327_38337], null)));
var ufv___38354 = schema.utils.use_fn_validation;var output_schema38345_38355 = schema.core.Bool;var input_schema38346_38356 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker38347_38357 = schema.core.checker(input_schema38346_38356);var output_checker38348_38358 = schema.core.checker(output_schema38345_38355);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___38354,output_schema38345_38355,input_schema38346_38356,input_checker38347_38357,output_checker38348_38358){
return (function strict_valid_component_QMARK_(G__38349){var validate__837__auto__ = ufv___38354.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38349], null);var temp__4126__auto___38360 = (function (){var G__38352 = args__838__auto___38359;return (input_checker38347_38357.cljs$core$IFn$_invoke$arity$1 ? input_checker38347_38357.cljs$core$IFn$_invoke$arity$1(G__38352) : input_checker38347_38357.call(null,G__38352));
})();if(cljs.core.truth_(temp__4126__auto___38360))
{var error__839__auto___38361 = temp__4126__auto___38360;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38361], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38346_38356,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38359,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38361], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__38349;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38362 = (function (){var G__38353 = o__840__auto__;return (output_checker38348_38358.cljs$core$IFn$_invoke$arity$1 ? output_checker38348_38358.cljs$core$IFn$_invoke$arity$1(G__38353) : output_checker38348_38358.call(null,G__38353));
})();if(cljs.core.truth_(temp__4126__auto___38362))
{var error__839__auto___38363 = temp__4126__auto___38362;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38363], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38345_38355,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38363], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38354,output_schema38345_38355,input_schema38346_38356,input_checker38347_38357,output_checker38348_38358))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema(output_schema38345_38355,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38346_38356], null)));
var ufv___38373 = schema.utils.use_fn_validation;var output_schema38364_38374 = schema.core.Bool;var input_schema38365_38375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker38366_38376 = schema.core.checker(input_schema38365_38375);var output_checker38367_38377 = schema.core.checker(output_schema38364_38374);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___38373,output_schema38364_38374,input_schema38365_38375,input_checker38366_38376,output_checker38367_38377){
return (function valid_component_QMARK_(G__38368){var validate__837__auto__ = ufv___38373.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38368], null);var temp__4126__auto___38379 = (function (){var G__38371 = args__838__auto___38378;return (input_checker38366_38376.cljs$core$IFn$_invoke$arity$1 ? input_checker38366_38376.cljs$core$IFn$_invoke$arity$1(G__38371) : input_checker38366_38376.call(null,G__38371));
})();if(cljs.core.truth_(temp__4126__auto___38379))
{var error__839__auto___38380 = temp__4126__auto___38379;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38380], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38365_38375,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38378,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38380], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__38368;while(true){
var or__19267__auto__ = typeof child === 'string';if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = typeof child === 'number';if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_(child);
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38381 = (function (){var G__38372 = o__840__auto__;return (output_checker38367_38377.cljs$core$IFn$_invoke$arity$1 ? output_checker38367_38377.cljs$core$IFn$_invoke$arity$1(G__38372) : output_checker38367_38377.call(null,G__38372));
})();if(cljs.core.truth_(temp__4126__auto___38381))
{var error__839__auto___38382 = temp__4126__auto___38381;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38382], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38364_38374,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38382], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38373,output_schema38364_38374,input_schema38365_38375,input_checker38366_38376,output_checker38367_38377))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema(output_schema38364_38374,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38365_38375], null)));
var ufv___38392 = schema.utils.use_fn_validation;var output_schema38383_38393 = schema.core.Bool;var input_schema38384_38394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker38385_38395 = schema.core.checker(input_schema38384_38394);var output_checker38386_38396 = schema.core.checker(output_schema38383_38393);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___38392,output_schema38383_38393,input_schema38384_38394,input_checker38385_38395,output_checker38386_38396){
return (function some_valid_component_QMARK_(G__38387){var validate__837__auto__ = ufv___38392.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38397 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38387], null);var temp__4126__auto___38398 = (function (){var G__38390 = args__838__auto___38397;return (input_checker38385_38395.cljs$core$IFn$_invoke$arity$1 ? input_checker38385_38395.cljs$core$IFn$_invoke$arity$1(G__38390) : input_checker38385_38395.call(null,G__38390));
})();if(cljs.core.truth_(temp__4126__auto___38398))
{var error__839__auto___38399 = temp__4126__auto___38398;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38399], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38384_38394,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38397,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38399], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var children = G__38387;while(true){
return cljs.core.boolean$(cljs.core.some(om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38400 = (function (){var G__38391 = o__840__auto__;return (output_checker38386_38396.cljs$core$IFn$_invoke$arity$1 ? output_checker38386_38396.cljs$core$IFn$_invoke$arity$1(G__38391) : output_checker38386_38396.call(null,G__38391));
})();if(cljs.core.truth_(temp__4126__auto___38400))
{var error__839__auto___38401 = temp__4126__auto___38400;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38401], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38383_38393,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38401], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38392,output_schema38383_38393,input_schema38384_38394,input_checker38385_38395,output_checker38386_38396))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema(output_schema38383_38393,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38384_38394], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__19255__auto__ = l;if(cljs.core.truth_(and__19255__auto__))
{return r;
} else
{return and__19255__auto__;
}
})()))
{return (function() { 
var G__38402__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(l,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(r,args);
};
var G__38402 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38402__delegate.call(this,args);};
G__38402.cljs$lang$maxFixedArity = 0;
G__38402.cljs$lang$applyTo = (function (arglist__38403){
var args = cljs.core.seq(arglist__38403);
return G__38402__delegate(args);
});
G__38402.cljs$core$IFn$_invoke$arity$variadic = G__38402__delegate;
return G__38402;
})()
;
} else
{var or__19267__auto__ = l;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
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
return (function (l,r){var or__19267__auto__ = l;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
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
merge_props.cljs$lang$applyTo = (function (arglist__38404){
var prop_maps = cljs.core.seq(arglist__38404);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj38412 = {};return obj38412;
})();var seq__38413_38417 = cljs.core.seq(cljs.core.js_keys(arr));var chunk__38414_38418 = null;var count__38415_38419 = (0);var i__38416_38420 = (0);while(true){
if((i__38416_38420 < count__38415_38419))
{var k_38421 = chunk__38414_38418.cljs$core$IIndexed$_nth$arity$2(null,i__38416_38420);if(cljs.core.truth_(arr.hasOwnProperty(k_38421)))
{(ret[k_38421] = (arr[k_38421]));
} else
{}
{
var G__38422 = seq__38413_38417;
var G__38423 = chunk__38414_38418;
var G__38424 = count__38415_38419;
var G__38425 = (i__38416_38420 + (1));
seq__38413_38417 = G__38422;
chunk__38414_38418 = G__38423;
count__38415_38419 = G__38424;
i__38416_38420 = G__38425;
continue;
}
} else
{var temp__4126__auto___38426 = cljs.core.seq(seq__38413_38417);if(temp__4126__auto___38426)
{var seq__38413_38427__$1 = temp__4126__auto___38426;if(cljs.core.chunked_seq_QMARK_(seq__38413_38427__$1))
{var c__20699__auto___38428 = cljs.core.chunk_first(seq__38413_38427__$1);{
var G__38429 = cljs.core.chunk_rest(seq__38413_38427__$1);
var G__38430 = c__20699__auto___38428;
var G__38431 = cljs.core.count(c__20699__auto___38428);
var G__38432 = (0);
seq__38413_38417 = G__38429;
chunk__38414_38418 = G__38430;
count__38415_38419 = G__38431;
i__38416_38420 = G__38432;
continue;
}
} else
{var k_38433 = cljs.core.first(seq__38413_38427__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_38433)))
{(ret[k_38433] = (arr[k_38433]));
} else
{}
{
var G__38434 = cljs.core.next(seq__38413_38427__$1);
var G__38435 = null;
var G__38436 = (0);
var G__38437 = (0);
seq__38413_38417 = G__38434;
chunk__38414_38418 = G__38435;
count__38415_38419 = G__38436;
i__38416_38420 = G__38437;
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
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props(child);return child.constructor((function (){var G__38440 = om_bootstrap.util.copy_js(child.props);(G__38440["__om_cursor"] = ((cljs.core.fn_QMARK_(extra_props))?(function (){var G__38441 = om_props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__38441) : extra_props.call(null,G__38441));
})():om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_props,extra_props], 0))));
return G__38440;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(child.props,cljs.core.array_seq([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));var new_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.fn_QMARK_(extra_props))?(function (){var G__38443 = props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__38443) : extra_props.call(null,G__38443));
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