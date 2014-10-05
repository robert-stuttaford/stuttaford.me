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
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key(e);var v = cljs.core.val(e);var temp__4124__auto__ = (function (){var and__19277__auto__ = cljs.core.contains_QMARK_(m,k);if(and__19277__auto__)
{var G__48438 = k;return (k__GT_fn.cljs$core$IFn$_invoke$arity$1 ? k__GT_fn.cljs$core$IFn$_invoke$arity$1(G__48438) : k__GT_fn.call(null,G__48438));
} else
{return and__19277__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__48439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__48440 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48439,G__48440) : f.call(null,G__48439,G__48440));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19289__auto__ = m1;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___48450 = schema.utils.use_fn_validation;var output_schema48441_48451 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema48442_48452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker48443_48453 = schema.core.checker(input_schema48442_48452);var output_checker48444_48454 = schema.core.checker(output_schema48441_48451);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___48450,output_schema48441_48451,input_schema48442_48452,input_checker48443_48453,output_checker48444_48454){
return (function collectify(G__48445){var validate__837__auto__ = ufv___48450.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48445], null);var temp__4126__auto___48456 = (function (){var G__48448 = args__838__auto___48455;return (input_checker48443_48453.cljs$core$IFn$_invoke$arity$1 ? input_checker48443_48453.cljs$core$IFn$_invoke$arity$1(G__48448) : input_checker48443_48453.call(null,G__48448));
})();if(cljs.core.truth_(temp__4126__auto___48456))
{var error__839__auto___48457 = temp__4126__auto___48456;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48457], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48442_48452,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48455,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48457], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var x = G__48445;while(true){
if(cljs.core.sequential_QMARK_(x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48458 = (function (){var G__48449 = o__840__auto__;return (output_checker48444_48454.cljs$core$IFn$_invoke$arity$1 ? output_checker48444_48454.cljs$core$IFn$_invoke$arity$1(G__48449) : output_checker48444_48454.call(null,G__48449));
})();if(cljs.core.truth_(temp__4126__auto___48458))
{var error__839__auto___48459 = temp__4126__auto___48458;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48459], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48441_48451,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48459], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___48450,output_schema48441_48451,input_schema48442_48452,input_checker48443_48453,output_checker48444_48454))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.collectify),schema.core.make_fn_schema(output_schema48441_48451,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48442_48452], null)));
var ufv___48469 = schema.utils.use_fn_validation;var output_schema48460_48470 = schema.core.Bool;var input_schema48461_48471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker48462_48472 = schema.core.checker(input_schema48461_48471);var output_checker48463_48473 = schema.core.checker(output_schema48460_48470);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___48469,output_schema48460_48470,input_schema48461_48471,input_checker48462_48472,output_checker48463_48473){
return (function strict_valid_component_QMARK_(G__48464){var validate__837__auto__ = ufv___48469.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48464], null);var temp__4126__auto___48475 = (function (){var G__48467 = args__838__auto___48474;return (input_checker48462_48472.cljs$core$IFn$_invoke$arity$1 ? input_checker48462_48472.cljs$core$IFn$_invoke$arity$1(G__48467) : input_checker48462_48472.call(null,G__48467));
})();if(cljs.core.truth_(temp__4126__auto___48475))
{var error__839__auto___48476 = temp__4126__auto___48475;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48476], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48461_48471,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48474,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48476], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__48464;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48477 = (function (){var G__48468 = o__840__auto__;return (output_checker48463_48473.cljs$core$IFn$_invoke$arity$1 ? output_checker48463_48473.cljs$core$IFn$_invoke$arity$1(G__48468) : output_checker48463_48473.call(null,G__48468));
})();if(cljs.core.truth_(temp__4126__auto___48477))
{var error__839__auto___48478 = temp__4126__auto___48477;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48478], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48460_48470,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48478], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___48469,output_schema48460_48470,input_schema48461_48471,input_checker48462_48472,output_checker48463_48473))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema(output_schema48460_48470,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48461_48471], null)));
var ufv___48488 = schema.utils.use_fn_validation;var output_schema48479_48489 = schema.core.Bool;var input_schema48480_48490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker48481_48491 = schema.core.checker(input_schema48480_48490);var output_checker48482_48492 = schema.core.checker(output_schema48479_48489);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___48488,output_schema48479_48489,input_schema48480_48490,input_checker48481_48491,output_checker48482_48492){
return (function valid_component_QMARK_(G__48483){var validate__837__auto__ = ufv___48488.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48483], null);var temp__4126__auto___48494 = (function (){var G__48486 = args__838__auto___48493;return (input_checker48481_48491.cljs$core$IFn$_invoke$arity$1 ? input_checker48481_48491.cljs$core$IFn$_invoke$arity$1(G__48486) : input_checker48481_48491.call(null,G__48486));
})();if(cljs.core.truth_(temp__4126__auto___48494))
{var error__839__auto___48495 = temp__4126__auto___48494;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48495], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48480_48490,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48493,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48495], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__48483;while(true){
var or__19289__auto__ = typeof child === 'string';if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = typeof child === 'number';if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_(child);
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48496 = (function (){var G__48487 = o__840__auto__;return (output_checker48482_48492.cljs$core$IFn$_invoke$arity$1 ? output_checker48482_48492.cljs$core$IFn$_invoke$arity$1(G__48487) : output_checker48482_48492.call(null,G__48487));
})();if(cljs.core.truth_(temp__4126__auto___48496))
{var error__839__auto___48497 = temp__4126__auto___48496;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48497], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48479_48489,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48497], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___48488,output_schema48479_48489,input_schema48480_48490,input_checker48481_48491,output_checker48482_48492))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema(output_schema48479_48489,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48480_48490], null)));
var ufv___48507 = schema.utils.use_fn_validation;var output_schema48498_48508 = schema.core.Bool;var input_schema48499_48509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker48500_48510 = schema.core.checker(input_schema48499_48509);var output_checker48501_48511 = schema.core.checker(output_schema48498_48508);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___48507,output_schema48498_48508,input_schema48499_48509,input_checker48500_48510,output_checker48501_48511){
return (function some_valid_component_QMARK_(G__48502){var validate__837__auto__ = ufv___48507.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48502], null);var temp__4126__auto___48513 = (function (){var G__48505 = args__838__auto___48512;return (input_checker48500_48510.cljs$core$IFn$_invoke$arity$1 ? input_checker48500_48510.cljs$core$IFn$_invoke$arity$1(G__48505) : input_checker48500_48510.call(null,G__48505));
})();if(cljs.core.truth_(temp__4126__auto___48513))
{var error__839__auto___48514 = temp__4126__auto___48513;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48514], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48499_48509,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48512,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48514], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var children = G__48502;while(true){
return cljs.core.boolean$(cljs.core.some(om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48515 = (function (){var G__48506 = o__840__auto__;return (output_checker48501_48511.cljs$core$IFn$_invoke$arity$1 ? output_checker48501_48511.cljs$core$IFn$_invoke$arity$1(G__48506) : output_checker48501_48511.call(null,G__48506));
})();if(cljs.core.truth_(temp__4126__auto___48515))
{var error__839__auto___48516 = temp__4126__auto___48515;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48516], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48498_48508,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48516], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___48507,output_schema48498_48508,input_schema48499_48509,input_checker48500_48510,output_checker48501_48511))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema(output_schema48498_48508,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48499_48509], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__19277__auto__ = l;if(cljs.core.truth_(and__19277__auto__))
{return r;
} else
{return and__19277__auto__;
}
})()))
{return (function() { 
var G__48517__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(l,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(r,args);
};
var G__48517 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__48517__delegate.call(this,args);};
G__48517.cljs$lang$maxFixedArity = 0;
G__48517.cljs$lang$applyTo = (function (arglist__48518){
var args = cljs.core.seq(arglist__48518);
return G__48517__delegate(args);
});
G__48517.cljs$core$IFn$_invoke$arity$variadic = G__48517__delegate;
return G__48517;
})()
;
} else
{var or__19289__auto__ = l;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
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
return (function (l,r){var or__19289__auto__ = l;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
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
merge_props.cljs$lang$applyTo = (function (arglist__48519){
var prop_maps = cljs.core.seq(arglist__48519);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj48527 = {};return obj48527;
})();var seq__48528_48532 = cljs.core.seq(cljs.core.js_keys(arr));var chunk__48529_48533 = null;var count__48530_48534 = (0);var i__48531_48535 = (0);while(true){
if((i__48531_48535 < count__48530_48534))
{var k_48536 = chunk__48529_48533.cljs$core$IIndexed$_nth$arity$2(null,i__48531_48535);if(cljs.core.truth_(arr.hasOwnProperty(k_48536)))
{(ret[k_48536] = (arr[k_48536]));
} else
{}
{
var G__48537 = seq__48528_48532;
var G__48538 = chunk__48529_48533;
var G__48539 = count__48530_48534;
var G__48540 = (i__48531_48535 + (1));
seq__48528_48532 = G__48537;
chunk__48529_48533 = G__48538;
count__48530_48534 = G__48539;
i__48531_48535 = G__48540;
continue;
}
} else
{var temp__4126__auto___48541 = cljs.core.seq(seq__48528_48532);if(temp__4126__auto___48541)
{var seq__48528_48542__$1 = temp__4126__auto___48541;if(cljs.core.chunked_seq_QMARK_(seq__48528_48542__$1))
{var c__20721__auto___48543 = cljs.core.chunk_first(seq__48528_48542__$1);{
var G__48544 = cljs.core.chunk_rest(seq__48528_48542__$1);
var G__48545 = c__20721__auto___48543;
var G__48546 = cljs.core.count(c__20721__auto___48543);
var G__48547 = (0);
seq__48528_48532 = G__48544;
chunk__48529_48533 = G__48545;
count__48530_48534 = G__48546;
i__48531_48535 = G__48547;
continue;
}
} else
{var k_48548 = cljs.core.first(seq__48528_48542__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_48548)))
{(ret[k_48548] = (arr[k_48548]));
} else
{}
{
var G__48549 = cljs.core.next(seq__48528_48542__$1);
var G__48550 = null;
var G__48551 = (0);
var G__48552 = (0);
seq__48528_48532 = G__48549;
chunk__48529_48533 = G__48550;
count__48530_48534 = G__48551;
i__48531_48535 = G__48552;
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
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props(child);return child.constructor((function (){var G__48555 = om_bootstrap.util.copy_js(child.props);(G__48555["__om_cursor"] = ((cljs.core.fn_QMARK_(extra_props))?(function (){var G__48556 = om_props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__48556) : extra_props.call(null,G__48556));
})():om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_props,extra_props], 0))));
return G__48555;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(child.props,cljs.core.array_seq([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));var new_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.fn_QMARK_(extra_props))?(function (){var G__48558 = props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__48558) : extra_props.call(null,G__48558));
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