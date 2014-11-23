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
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key(e);var v = cljs.core.val(e);var temp__4124__auto__ = (function (){var and__19621__auto__ = cljs.core.contains_QMARK_(m,k);if(and__19621__auto__)
{var G__38194 = k;return (k__GT_fn.cljs$core$IFn$_invoke$arity$1 ? k__GT_fn.cljs$core$IFn$_invoke$arity$1(G__38194) : k__GT_fn.call(null,G__38194));
} else
{return and__19621__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__38195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__38196 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38195,G__38196) : f.call(null,G__38195,G__38196));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19663__auto__ = m1;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___38206 = schema.utils.use_fn_validation;var output_schema38197_38207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema38198_38208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker38199_38209 = schema.core.checker(input_schema38198_38208);var output_checker38200_38210 = schema.core.checker(output_schema38197_38207);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___38206,output_schema38197_38207,input_schema38198_38208,input_checker38199_38209,output_checker38200_38210){
return (function collectify(G__38201){var validate__837__auto__ = ufv___38206.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38201], null);var temp__4126__auto___38212 = (function (){var G__38204 = args__838__auto___38211;return (input_checker38199_38209.cljs$core$IFn$_invoke$arity$1 ? input_checker38199_38209.cljs$core$IFn$_invoke$arity$1(G__38204) : input_checker38199_38209.call(null,G__38204));
})();if(cljs.core.truth_(temp__4126__auto___38212))
{var error__839__auto___38213 = temp__4126__auto___38212;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38213], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38198_38208,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38211,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38213], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var x = G__38201;while(true){
if(cljs.core.sequential_QMARK_(x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38214 = (function (){var G__38205 = o__840__auto__;return (output_checker38200_38210.cljs$core$IFn$_invoke$arity$1 ? output_checker38200_38210.cljs$core$IFn$_invoke$arity$1(G__38205) : output_checker38200_38210.call(null,G__38205));
})();if(cljs.core.truth_(temp__4126__auto___38214))
{var error__839__auto___38215 = temp__4126__auto___38214;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38215], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38197_38207,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38215], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38206,output_schema38197_38207,input_schema38198_38208,input_checker38199_38209,output_checker38200_38210))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.collectify),schema.core.make_fn_schema(output_schema38197_38207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38198_38208], null)));
var ufv___38225 = schema.utils.use_fn_validation;var output_schema38216_38226 = schema.core.Bool;var input_schema38217_38227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker38218_38228 = schema.core.checker(input_schema38217_38227);var output_checker38219_38229 = schema.core.checker(output_schema38216_38226);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___38225,output_schema38216_38226,input_schema38217_38227,input_checker38218_38228,output_checker38219_38229){
return (function strict_valid_component_QMARK_(G__38220){var validate__837__auto__ = ufv___38225.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38220], null);var temp__4126__auto___38231 = (function (){var G__38223 = args__838__auto___38230;return (input_checker38218_38228.cljs$core$IFn$_invoke$arity$1 ? input_checker38218_38228.cljs$core$IFn$_invoke$arity$1(G__38223) : input_checker38218_38228.call(null,G__38223));
})();if(cljs.core.truth_(temp__4126__auto___38231))
{var error__839__auto___38232 = temp__4126__auto___38231;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38232], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38217_38227,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38230,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38232], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__38220;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38233 = (function (){var G__38224 = o__840__auto__;return (output_checker38219_38229.cljs$core$IFn$_invoke$arity$1 ? output_checker38219_38229.cljs$core$IFn$_invoke$arity$1(G__38224) : output_checker38219_38229.call(null,G__38224));
})();if(cljs.core.truth_(temp__4126__auto___38233))
{var error__839__auto___38234 = temp__4126__auto___38233;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38234], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38216_38226,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38234], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38225,output_schema38216_38226,input_schema38217_38227,input_checker38218_38228,output_checker38219_38229))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema(output_schema38216_38226,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38217_38227], null)));
var ufv___38244 = schema.utils.use_fn_validation;var output_schema38235_38245 = schema.core.Bool;var input_schema38236_38246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker38237_38247 = schema.core.checker(input_schema38236_38246);var output_checker38238_38248 = schema.core.checker(output_schema38235_38245);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___38244,output_schema38235_38245,input_schema38236_38246,input_checker38237_38247,output_checker38238_38248){
return (function valid_component_QMARK_(G__38239){var validate__837__auto__ = ufv___38244.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38239], null);var temp__4126__auto___38250 = (function (){var G__38242 = args__838__auto___38249;return (input_checker38237_38247.cljs$core$IFn$_invoke$arity$1 ? input_checker38237_38247.cljs$core$IFn$_invoke$arity$1(G__38242) : input_checker38237_38247.call(null,G__38242));
})();if(cljs.core.truth_(temp__4126__auto___38250))
{var error__839__auto___38251 = temp__4126__auto___38250;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38251], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38236_38246,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38249,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38251], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var child = G__38239;while(true){
var or__19663__auto__ = typeof child === 'string';if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = typeof child === 'number';if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_(child);
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38252 = (function (){var G__38243 = o__840__auto__;return (output_checker38238_38248.cljs$core$IFn$_invoke$arity$1 ? output_checker38238_38248.cljs$core$IFn$_invoke$arity$1(G__38243) : output_checker38238_38248.call(null,G__38243));
})();if(cljs.core.truth_(temp__4126__auto___38252))
{var error__839__auto___38253 = temp__4126__auto___38252;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38253], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38235_38245,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38253], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38244,output_schema38235_38245,input_schema38236_38246,input_checker38237_38247,output_checker38238_38248))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema(output_schema38235_38245,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38236_38246], null)));
var ufv___38263 = schema.utils.use_fn_validation;var output_schema38254_38264 = schema.core.Bool;var input_schema38255_38265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker38256_38266 = schema.core.checker(input_schema38255_38265);var output_checker38257_38267 = schema.core.checker(output_schema38254_38264);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___38263,output_schema38254_38264,input_schema38255_38265,input_checker38256_38266,output_checker38257_38267){
return (function some_valid_component_QMARK_(G__38258){var validate__837__auto__ = ufv___38263.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38258], null);var temp__4126__auto___38269 = (function (){var G__38261 = args__838__auto___38268;return (input_checker38256_38266.cljs$core$IFn$_invoke$arity$1 ? input_checker38256_38266.cljs$core$IFn$_invoke$arity$1(G__38261) : input_checker38256_38266.call(null,G__38261));
})();if(cljs.core.truth_(temp__4126__auto___38269))
{var error__839__auto___38270 = temp__4126__auto___38269;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38270], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38255_38265,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38268,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38270], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var children = G__38258;while(true){
return cljs.core.boolean$(cljs.core.some(om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38271 = (function (){var G__38262 = o__840__auto__;return (output_checker38257_38267.cljs$core$IFn$_invoke$arity$1 ? output_checker38257_38267.cljs$core$IFn$_invoke$arity$1(G__38262) : output_checker38257_38267.call(null,G__38262));
})();if(cljs.core.truth_(temp__4126__auto___38271))
{var error__839__auto___38272 = temp__4126__auto___38271;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38272], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38254_38264,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38272], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38263,output_schema38254_38264,input_schema38255_38265,input_checker38256_38266,output_checker38257_38267))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema(output_schema38254_38264,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38255_38265], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__19621__auto__ = l;if(cljs.core.truth_(and__19621__auto__))
{return r;
} else
{return and__19621__auto__;
}
})()))
{return (function() { 
var G__38273__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(l,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(r,args);
};
var G__38273 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38273__delegate.call(this,args);};
G__38273.cljs$lang$maxFixedArity = 0;
G__38273.cljs$lang$applyTo = (function (arglist__38274){
var args = cljs.core.seq(arglist__38274);
return G__38273__delegate(args);
});
G__38273.cljs$core$IFn$_invoke$arity$variadic = G__38273__delegate;
return G__38273;
})()
;
} else
{var or__19663__auto__ = l;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
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
return (function (l,r){var or__19663__auto__ = l;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
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
merge_props.cljs$lang$applyTo = (function (arglist__38275){
var prop_maps = cljs.core.seq(arglist__38275);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj38283 = {};return obj38283;
})();var seq__38284_38288 = cljs.core.seq(cljs.core.js_keys(arr));var chunk__38285_38289 = null;var count__38286_38290 = (0);var i__38287_38291 = (0);while(true){
if((i__38287_38291 < count__38286_38290))
{var k_38292 = chunk__38285_38289.cljs$core$IIndexed$_nth$arity$2(null,i__38287_38291);if(cljs.core.truth_(arr.hasOwnProperty(k_38292)))
{(ret[k_38292] = (arr[k_38292]));
} else
{}
{
var G__38293 = seq__38284_38288;
var G__38294 = chunk__38285_38289;
var G__38295 = count__38286_38290;
var G__38296 = (i__38287_38291 + (1));
seq__38284_38288 = G__38293;
chunk__38285_38289 = G__38294;
count__38286_38290 = G__38295;
i__38287_38291 = G__38296;
continue;
}
} else
{var temp__4126__auto___38297 = cljs.core.seq(seq__38284_38288);if(temp__4126__auto___38297)
{var seq__38284_38298__$1 = temp__4126__auto___38297;if(cljs.core.chunked_seq_QMARK_(seq__38284_38298__$1))
{var c__21126__auto___38299 = cljs.core.chunk_first(seq__38284_38298__$1);{
var G__38300 = cljs.core.chunk_rest(seq__38284_38298__$1);
var G__38301 = c__21126__auto___38299;
var G__38302 = cljs.core.count(c__21126__auto___38299);
var G__38303 = (0);
seq__38284_38288 = G__38300;
chunk__38285_38289 = G__38301;
count__38286_38290 = G__38302;
i__38287_38291 = G__38303;
continue;
}
} else
{var k_38304 = cljs.core.first(seq__38284_38298__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_38304)))
{(ret[k_38304] = (arr[k_38304]));
} else
{}
{
var G__38305 = cljs.core.next(seq__38284_38298__$1);
var G__38306 = null;
var G__38307 = (0);
var G__38308 = (0);
seq__38284_38288 = G__38305;
chunk__38285_38289 = G__38306;
count__38286_38290 = G__38307;
i__38287_38291 = G__38308;
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
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props(child);return child.constructor((function (){var G__38311 = om_bootstrap.util.copy_js(child.props);(G__38311["__om_cursor"] = ((cljs.core.fn_QMARK_(extra_props))?(function (){var G__38312 = om_props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__38312) : extra_props.call(null,G__38312));
})():om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_props,extra_props], 0))));
return G__38311;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(child.props,cljs.core.array_seq([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));var new_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core.fn_QMARK_(extra_props))?(function (){var G__38314 = props;return (extra_props.cljs$core$IFn$_invoke$arity$1 ? extra_props.cljs$core$IFn$_invoke$arity$1(G__38314) : extra_props.call(null,G__38314));
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