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
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key(e);var v = cljs.core.val(e);var temp__4124__auto__ = (function (){var and__19267__auto__ = cljs.core.contains_QMARK_(m,k);if(and__19267__auto__)
{var G__55535 = k;return (k__GT_fn.cljs$core$IFn$_invoke$arity$1 ? k__GT_fn.cljs$core$IFn$_invoke$arity$1(G__55535) : k__GT_fn.call(null,G__55535));
} else
{return and__19267__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__55536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__55537 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__55536,G__55537) : f.call(null,G__55536,G__55537));
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
var ufv___55547 = schema.utils.use_fn_validation;var output_schema55538_55548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema55539_55549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker55540_55550 = schema.core.checker(input_schema55539_55549);var output_checker55541_55551 = schema.core.checker(output_schema55538_55548);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___55547,output_schema55538_55548,input_schema55539_55549,input_checker55540_55550,output_checker55541_55551){
return (function collectify(G__55542){var validate__837__auto__ = ufv___55547.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55542], null);var temp__4126__auto___55553 = (function (){var G__55545 = args__838__auto___55552;return (input_checker55540_55550.cljs$core$IFn$_invoke$arity$1 ? input_checker55540_55550.cljs$core$IFn$_invoke$arity$1(G__55545) : input_checker55540_55550.call(null,G__55545));
})();if(cljs.core.truth_(temp__4126__auto___55553))
{var error__839__auto___55554 = temp__4126__auto___55553;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55554], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55539_55549,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55552,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55554], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var x = G__55542;while(true){
if(cljs.core.sequential_QMARK_(x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55555 = (function (){var G__55546 = o__840__auto__;return (output_checker55541_55551.cljs$core$IFn$_invoke$arity$1 ? output_checker55541_55551.cljs$core$IFn$_invoke$arity$1(G__55546) : output_checker55541_55551.call(null,G__55546));
})();if(cljs.core.truth_(temp__4126__auto___55555))
{var error__839__auto___55556 = temp__4126__auto___55555;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55556], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55538_55548,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55556], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55547,output_schema55538_55548,input_schema55539_55549,input_checker55540_55550,output_checker55541_55551))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.collectify),schema.core.make_fn_schema(output_schema55538_55548,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55539_55549], null)));
var ufv___55566 = schema.utils.use_fn_validation;var output_schema55557_55567 = schema.core.Bool;var input_schema55558_55568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker55559_55569 = schema.core.checker(input_schema55558_55568);var output_checker55560_55570 = schema.core.checker(output_schema55557_55567);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___55566,output_schema55557_55567,input_schema55558_55568,input_checker55559_55569,output_checker55560_55570){
return (function strict_valid_component_QMARK_(G__55561){var validate__837__auto__ = ufv___55566.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55561], null);var temp__4126__auto___55572 = (function (){var G__55564 = args__838__auto___55571;return (input_checker55559_55569.cljs$core$IFn$_invoke$arity$1 ? input_checker55559_55569.cljs$core$IFn$_invoke$arity$1(G__55564) : input_checker55559_55569.call(null,G__55564));
})();if(cljs.core.truth_(temp__4126__auto___55572))
{var error__839__auto___55573 = temp__4126__auto___55572;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55573], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55558_55568,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55571,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55573], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__55561;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55574 = (function (){var G__55565 = o__840__auto__;return (output_checker55560_55570.cljs$core$IFn$_invoke$arity$1 ? output_checker55560_55570.cljs$core$IFn$_invoke$arity$1(G__55565) : output_checker55560_55570.call(null,G__55565));
})();if(cljs.core.truth_(temp__4126__auto___55574))
{var error__839__auto___55575 = temp__4126__auto___55574;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55575], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55557_55567,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55575], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55566,output_schema55557_55567,input_schema55558_55568,input_checker55559_55569,output_checker55560_55570))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema(output_schema55557_55567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55558_55568], null)));
var ufv___55585 = schema.utils.use_fn_validation;var output_schema55576_55586 = schema.core.Bool;var input_schema55577_55587 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker55578_55588 = schema.core.checker(input_schema55577_55587);var output_checker55579_55589 = schema.core.checker(output_schema55576_55586);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___55585,output_schema55576_55586,input_schema55577_55587,input_checker55578_55588,output_checker55579_55589){
return (function valid_component_QMARK_(G__55580){var validate__837__auto__ = ufv___55585.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55580], null);var temp__4126__auto___55591 = (function (){var G__55583 = args__838__auto___55590;return (input_checker55578_55588.cljs$core$IFn$_invoke$arity$1 ? input_checker55578_55588.cljs$core$IFn$_invoke$arity$1(G__55583) : input_checker55578_55588.call(null,G__55583));
})();if(cljs.core.truth_(temp__4126__auto___55591))
{var error__839__auto___55592 = temp__4126__auto___55591;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55592], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55577_55587,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55590,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55592], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__55580;while(true){
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
{var temp__4126__auto___55593 = (function (){var G__55584 = o__840__auto__;return (output_checker55579_55589.cljs$core$IFn$_invoke$arity$1 ? output_checker55579_55589.cljs$core$IFn$_invoke$arity$1(G__55584) : output_checker55579_55589.call(null,G__55584));
})();if(cljs.core.truth_(temp__4126__auto___55593))
{var error__839__auto___55594 = temp__4126__auto___55593;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55594], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55576_55586,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55594], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55585,output_schema55576_55586,input_schema55577_55587,input_checker55578_55588,output_checker55579_55589))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema(output_schema55576_55586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55577_55587], null)));
var ufv___55604 = schema.utils.use_fn_validation;var output_schema55595_55605 = schema.core.Bool;var input_schema55596_55606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker55597_55607 = schema.core.checker(input_schema55596_55606);var output_checker55598_55608 = schema.core.checker(output_schema55595_55605);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___55604,output_schema55595_55605,input_schema55596_55606,input_checker55597_55607,output_checker55598_55608){
return (function some_valid_component_QMARK_(G__55599){var validate__837__auto__ = ufv___55604.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55599], null);var temp__4126__auto___55610 = (function (){var G__55602 = args__838__auto___55609;return (input_checker55597_55607.cljs$core$IFn$_invoke$arity$1 ? input_checker55597_55607.cljs$core$IFn$_invoke$arity$1(G__55602) : input_checker55597_55607.call(null,G__55602));
})();if(cljs.core.truth_(temp__4126__auto___55610))
{var error__839__auto___55611 = temp__4126__auto___55610;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55611], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55596_55606,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55609,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55611], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var children = G__55599;while(true){
return cljs.core.boolean$(cljs.core.some(om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55612 = (function (){var G__55603 = o__840__auto__;return (output_checker55598_55608.cljs$core$IFn$_invoke$arity$1 ? output_checker55598_55608.cljs$core$IFn$_invoke$arity$1(G__55603) : output_checker55598_55608.call(null,G__55603));
})();if(cljs.core.truth_(temp__4126__auto___55612))
{var error__839__auto___55613 = temp__4126__auto___55612;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55613], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55595_55605,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55613], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55604,output_schema55595_55605,input_schema55596_55606,input_checker55597_55607,output_checker55598_55608))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema(output_schema55595_55605,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55596_55606], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__19267__auto__ = l;if(cljs.core.truth_(and__19267__auto__))
{return r;
} else
{return and__19267__auto__;
}
})()))
{return (function() { 
var G__55614__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(l,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(r,args);
};
var G__55614 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55614__delegate.call(this,args);};
G__55614.cljs$lang$maxFixedArity = 0;
G__55614.cljs$lang$applyTo = (function (arglist__55615){
var args = cljs.core.seq(arglist__55615);
return G__55614__delegate(args);
});
G__55614.cljs$core$IFn$_invoke$arity$variadic = G__55614__delegate;
return G__55614;
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
merge_props.cljs$lang$applyTo = (function (arglist__55616){
var prop_maps = cljs.core.seq(arglist__55616);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj55624 = {};return obj55624;
})();var seq__55625_55629 = cljs.core.seq(cljs.core.js_keys(arr));var chunk__55626_55630 = null;var count__55627_55631 = (0);var i__55628_55632 = (0);while(true){
if((i__55628_55632 < count__55627_55631))
{var k_55633 = chunk__55626_55630.cljs$core$IIndexed$_nth$arity$2(null,i__55628_55632);if(cljs.core.truth_(arr.hasOwnProperty(k_55633)))
{(ret[k_55633] = (arr[k_55633]));
} else
{}
{
var G__55634 = seq__55625_55629;
var G__55635 = chunk__55626_55630;
var G__55636 = count__55627_55631;
var G__55637 = (i__55628_55632 + (1));
seq__55625_55629 = G__55634;
chunk__55626_55630 = G__55635;
count__55627_55631 = G__55636;
i__55628_55632 = G__55637;
continue;
}
} else
{var temp__4126__auto___55638 = cljs.core.seq(seq__55625_55629);if(temp__4126__auto___55638)
{var seq__55625_55639__$1 = temp__4126__auto___55638;if(cljs.core.chunked_seq_QMARK_(seq__55625_55639__$1))
{var c__20735__auto___55640 = cljs.core.chunk_first(seq__55625_55639__$1);{
var G__55641 = cljs.core.chunk_rest(seq__55625_55639__$1);
var G__55642 = c__20735__auto___55640;
var G__55643 = cljs.core.count(c__20735__auto___55640);
var G__55644 = (0);
seq__55625_55629 = G__55641;
chunk__55626_55630 = G__55642;
count__55627_55631 = G__55643;
i__55628_55632 = G__55644;
continue;
}
} else
{var k_55645 = cljs.core.first(seq__55625_55639__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_55645)))
{(ret[k_55645] = (arr[k_55645]));
} else
{}
{
var G__55646 = cljs.core.next(seq__55625_55639__$1);
var G__55647 = null;
var G__55648 = (0);
var G__55649 = (0);
seq__55625_55629 = G__55646;
chunk__55626_55630 = G__55647;
count__55627_55631 = G__55648;
i__55628_55632 = G__55649;
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
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props(child);return child.constructor((function (){var G__55652 = om_bootstrap.util.copy_js(child.props);(G__55652["__om_cursor"] = ((cljs.core.fn_QMARK_(extra_props))?(function (){var G__55653 = om_props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__55653) : extra_props.call(null,G__55653));
})():om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_props,extra_props], 0))));
return G__55652;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(child.props,cljs.core.array_seq([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));var new_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.fn_QMARK_(extra_props))?(function (){var G__55655 = props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__55655) : extra_props.call(null,G__55655));
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