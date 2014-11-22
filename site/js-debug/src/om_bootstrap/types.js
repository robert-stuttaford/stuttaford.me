goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___46790 = schema.utils.use_fn_validation;var output_schema46781_46791 = schema.core.Any;var input_schema46782_46792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker46783_46793 = schema.core.checker(input_schema46782_46792);var output_checker46784_46794 = schema.core.checker(output_schema46781_46791);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___46790,output_schema46781_46791,input_schema46782_46792,input_checker46783_46793,output_checker46784_46794){
return (function schema_keys(G__46785){var validate__837__auto__ = ufv___46790.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46785], null);var temp__4126__auto___46796 = (function (){var G__46788 = args__838__auto___46795;return (input_checker46783_46793.cljs$core$IFn$_invoke$arity$1 ? input_checker46783_46793.cljs$core$IFn$_invoke$arity$1(G__46788) : input_checker46783_46793.call(null,G__46788));
})();if(cljs.core.truth_(temp__4126__auto___46796))
{var error__839__auto___46797 = temp__4126__auto___46796;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46797], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46782_46792,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46795,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46797], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__46785;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___46790,output_schema46781_46791,input_schema46782_46792,input_checker46783_46793,output_checker46784_46794){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___46790,output_schema46781_46791,input_schema46782_46792,input_checker46783_46793,output_checker46784_46794))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46798 = (function (){var G__46789 = o__840__auto__;return (output_checker46784_46794.cljs$core$IFn$_invoke$arity$1 ? output_checker46784_46794.cljs$core$IFn$_invoke$arity$1(G__46789) : output_checker46784_46794.call(null,G__46789));
})();if(cljs.core.truth_(temp__4126__auto___46798))
{var error__839__auto___46799 = temp__4126__auto___46798;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46799], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46781_46791,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46799], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46790,output_schema46781_46791,input_schema46782_46792,input_checker46783_46793,output_checker46784_46794))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema46781_46791,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46782_46792], null)));
var ufv___46809 = schema.utils.use_fn_validation;var output_schema46800_46810 = schema.core.Any;var input_schema46801_46811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker46802_46812 = schema.core.checker(input_schema46801_46811);var output_checker46803_46813 = schema.core.checker(output_schema46800_46810);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___46809,output_schema46800_46810,input_schema46801_46811,input_checker46802_46812,output_checker46803_46813){
return (function at_least(G__46804){var validate__837__auto__ = ufv___46809.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46804], null);var temp__4126__auto___46815 = (function (){var G__46807 = args__838__auto___46814;return (input_checker46802_46812.cljs$core$IFn$_invoke$arity$1 ? input_checker46802_46812.cljs$core$IFn$_invoke$arity$1(G__46807) : input_checker46802_46812.call(null,G__46807));
})();if(cljs.core.truth_(temp__4126__auto___46815))
{var error__839__auto___46816 = temp__4126__auto___46815;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46816], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46801_46811,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46814,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46816], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__46804;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46817 = (function (){var G__46808 = o__840__auto__;return (output_checker46803_46813.cljs$core$IFn$_invoke$arity$1 ? output_checker46803_46813.cljs$core$IFn$_invoke$arity$1(G__46808) : output_checker46803_46813.call(null,G__46808));
})();if(cljs.core.truth_(temp__4126__auto___46817))
{var error__839__auto___46818 = temp__4126__auto___46817;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46818], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46800_46810,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46818], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46809,output_schema46800_46810,input_schema46801_46811,input_checker46802_46812,output_checker46803_46813))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema46800_46810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46801_46811], null)));
om_bootstrap.types.Component = schema.core.named(schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named(schema.core.Any,"Anything that can get rendered.");
/**
* Map of keyword to the proper bootstrap class name.
*/
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
* Map of style keywords -> styles.
*/
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.enum$,cljs.core.keys(om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.enum$,cljs.core.keys(om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.enum$,cljs.core.keys(om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key(new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key(new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
* Applies all default bootstrap options to the supplied schema. If
* the incoming schema has one of the the keys from BootstrapClass,
* that wins (even if it's required).
*/
om_bootstrap.types.bootstrap = (function bootstrap(schema__$1){var bootstrap_schema = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(cljs.core.select_keys(schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));return om_bootstrap.types.at_least(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bootstrap_schema,schema__$1], 0)));
});
var ufv___46842 = schema.utils.use_fn_validation;var output_schema46819_46843 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema46820_46844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema46825_46845 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker46821_46846 = schema.core.checker(input_schema46820_46844);var output_checker46822_46847 = schema.core.checker(output_schema46819_46843);var input_checker46826_46848 = schema.core.checker(input_schema46825_46845);var output_checker46827_46849 = schema.core.checker(output_schema46819_46843);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___46842,output_schema46819_46843,input_schema46820_46844,input_schema46825_46845,input_checker46821_46846,output_checker46822_46847,input_checker46826_46848,output_checker46827_46849){
return (function() {
var separate = null;
var separate__2 = (function (G__46823,G__46824){var validate__837__auto__ = ufv___46842.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46823,G__46824], null);var temp__4126__auto___46851 = (function (){var G__46838 = args__838__auto___46850;return (input_checker46821_46846.cljs$core$IFn$_invoke$arity$1 ? input_checker46821_46846.cljs$core$IFn$_invoke$arity$1(G__46838) : input_checker46821_46846.call(null,G__46838));
})();if(cljs.core.truth_(temp__4126__auto___46851))
{var error__839__auto___46852 = temp__4126__auto___46851;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46852], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46820_46844,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46850,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46852], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__46823;var opts = G__46824;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46853 = (function (){var G__46839 = o__840__auto__;return (output_checker46822_46847.cljs$core$IFn$_invoke$arity$1 ? output_checker46822_46847.cljs$core$IFn$_invoke$arity$1(G__46839) : output_checker46822_46847.call(null,G__46839));
})();if(cljs.core.truth_(temp__4126__auto___46853))
{var error__839__auto___46854 = temp__4126__auto___46853;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46854], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46819_46843,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46854], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__46828,G__46829,G__46830){var validate__837__auto__ = ufv___46842.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46855 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46828,G__46829,G__46830], null);var temp__4126__auto___46856 = (function (){var G__46840 = args__838__auto___46855;return (input_checker46826_46848.cljs$core$IFn$_invoke$arity$1 ? input_checker46826_46848.cljs$core$IFn$_invoke$arity$1(G__46840) : input_checker46826_46848.call(null,G__46840));
})();if(cljs.core.truth_(temp__4126__auto___46856))
{var error__839__auto___46857 = temp__4126__auto___46856;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46857], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46825_46845,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46855,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46857], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__46828;var opts = G__46829;var defaults = G__46830;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46858 = (function (){var G__46841 = o__840__auto__;return (output_checker46827_46849.cljs$core$IFn$_invoke$arity$1 ? output_checker46827_46849.cljs$core$IFn$_invoke$arity$1(G__46841) : output_checker46827_46849.call(null,G__46841));
})();if(cljs.core.truth_(temp__4126__auto___46858))
{var error__839__auto___46859 = temp__4126__auto___46858;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46859], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46819_46843,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46859], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__46828,G__46829,G__46830){
switch(arguments.length){
case 2:
return separate__2.call(this,G__46828,G__46829);
case 3:
return separate__3.call(this,G__46828,G__46829,G__46830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___46842,output_schema46819_46843,input_schema46820_46844,input_schema46825_46845,input_checker46821_46846,output_checker46822_46847,input_checker46826_46848,output_checker46827_46849))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema46819_46843,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46820_46844,input_schema46825_46845], null)));
var ufv___46883 = schema.utils.use_fn_validation;var output_schema46860_46884 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema46861_46885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker46862_46886 = schema.core.checker(input_schema46861_46885);var output_checker46863_46887 = schema.core.checker(output_schema46860_46884);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___46883,output_schema46860_46884,input_schema46861_46885,input_checker46862_46886,output_checker46863_46887){
return (function bs_class_set(G__46864){var validate__837__auto__ = ufv___46883.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46864], null);var temp__4126__auto___46889 = (function (){var G__46874 = args__838__auto___46888;return (input_checker46862_46886.cljs$core$IFn$_invoke$arity$1 ? input_checker46862_46886.cljs$core$IFn$_invoke$arity$1(G__46874) : input_checker46862_46886.call(null,G__46874));
})();if(cljs.core.truth_(temp__4126__auto___46889))
{var error__839__auto___46890 = temp__4126__auto___46889;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46890], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46861_46885,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46888,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46890], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__46876 = G__46864;var map__46877 = G__46876;var map__46877__$1 = ((cljs.core.seq_QMARK_(map__46877))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46877):map__46877);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46877__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46877__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46877__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__46876__$1 = G__46876;while(true){
var map__46878 = G__46876__$1;var map__46878__$1 = ((cljs.core.seq_QMARK_(map__46878))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46878):map__46878);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46878__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46878__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46878__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__46879 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__46879) : om_bootstrap.types.class_map.call(null,G__46879));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__46880 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__46880) : om_bootstrap.types.size_map.call(null,G__46880));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__46881 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__46881) : om_bootstrap.types.style_map.call(null,G__46881));
})();if(cljs.core.truth_(temp__4126__auto__))
{var style = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(style))),true], true, false);
} else
{return null;
}
})()], 0));
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46891 = (function (){var G__46882 = o__840__auto__;return (output_checker46863_46887.cljs$core$IFn$_invoke$arity$1 ? output_checker46863_46887.cljs$core$IFn$_invoke$arity$1(G__46882) : output_checker46863_46887.call(null,G__46882));
})();if(cljs.core.truth_(temp__4126__auto___46891))
{var error__839__auto___46892 = temp__4126__auto___46891;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46892], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46860_46884,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46892], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46883,output_schema46860_46884,input_schema46861_46885,input_checker46862_46886,output_checker46863_46887))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema46860_46884,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46861_46885], null)));
//# sourceMappingURL=types.js.map