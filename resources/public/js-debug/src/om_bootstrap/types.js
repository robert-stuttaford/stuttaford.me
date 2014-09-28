goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___55667 = schema.utils.use_fn_validation;var output_schema55658_55668 = schema.core.Any;var input_schema55659_55669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker55660_55670 = schema.core.checker(input_schema55659_55669);var output_checker55661_55671 = schema.core.checker(output_schema55658_55668);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___55667,output_schema55658_55668,input_schema55659_55669,input_checker55660_55670,output_checker55661_55671){
return (function schema_keys(G__55662){var validate__837__auto__ = ufv___55667.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55662], null);var temp__4126__auto___55673 = (function (){var G__55665 = args__838__auto___55672;return (input_checker55660_55670.cljs$core$IFn$_invoke$arity$1 ? input_checker55660_55670.cljs$core$IFn$_invoke$arity$1(G__55665) : input_checker55660_55670.call(null,G__55665));
})();if(cljs.core.truth_(temp__4126__auto___55673))
{var error__839__auto___55674 = temp__4126__auto___55673;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55674], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55659_55669,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55672,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55674], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__55662;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___55667,output_schema55658_55668,input_schema55659_55669,input_checker55660_55670,output_checker55661_55671){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___55667,output_schema55658_55668,input_schema55659_55669,input_checker55660_55670,output_checker55661_55671))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55675 = (function (){var G__55666 = o__840__auto__;return (output_checker55661_55671.cljs$core$IFn$_invoke$arity$1 ? output_checker55661_55671.cljs$core$IFn$_invoke$arity$1(G__55666) : output_checker55661_55671.call(null,G__55666));
})();if(cljs.core.truth_(temp__4126__auto___55675))
{var error__839__auto___55676 = temp__4126__auto___55675;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55676], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55658_55668,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55676], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55667,output_schema55658_55668,input_schema55659_55669,input_checker55660_55670,output_checker55661_55671))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema55658_55668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55659_55669], null)));
var ufv___55686 = schema.utils.use_fn_validation;var output_schema55677_55687 = schema.core.Any;var input_schema55678_55688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker55679_55689 = schema.core.checker(input_schema55678_55688);var output_checker55680_55690 = schema.core.checker(output_schema55677_55687);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___55686,output_schema55677_55687,input_schema55678_55688,input_checker55679_55689,output_checker55680_55690){
return (function at_least(G__55681){var validate__837__auto__ = ufv___55686.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55681], null);var temp__4126__auto___55692 = (function (){var G__55684 = args__838__auto___55691;return (input_checker55679_55689.cljs$core$IFn$_invoke$arity$1 ? input_checker55679_55689.cljs$core$IFn$_invoke$arity$1(G__55684) : input_checker55679_55689.call(null,G__55684));
})();if(cljs.core.truth_(temp__4126__auto___55692))
{var error__839__auto___55693 = temp__4126__auto___55692;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55693], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55678_55688,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55691,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55693], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__55681;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55694 = (function (){var G__55685 = o__840__auto__;return (output_checker55680_55690.cljs$core$IFn$_invoke$arity$1 ? output_checker55680_55690.cljs$core$IFn$_invoke$arity$1(G__55685) : output_checker55680_55690.call(null,G__55685));
})();if(cljs.core.truth_(temp__4126__auto___55694))
{var error__839__auto___55695 = temp__4126__auto___55694;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55695], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55677_55687,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55695], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55686,output_schema55677_55687,input_schema55678_55688,input_checker55679_55689,output_checker55680_55690))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema55677_55687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55678_55688], null)));
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
var ufv___55719 = schema.utils.use_fn_validation;var output_schema55696_55720 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema55697_55721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema55702_55722 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker55698_55723 = schema.core.checker(input_schema55697_55721);var output_checker55699_55724 = schema.core.checker(output_schema55696_55720);var input_checker55703_55725 = schema.core.checker(input_schema55702_55722);var output_checker55704_55726 = schema.core.checker(output_schema55696_55720);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___55719,output_schema55696_55720,input_schema55697_55721,input_schema55702_55722,input_checker55698_55723,output_checker55699_55724,input_checker55703_55725,output_checker55704_55726){
return (function() {
var separate = null;
var separate__2 = (function (G__55700,G__55701){var validate__837__auto__ = ufv___55719.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55700,G__55701], null);var temp__4126__auto___55728 = (function (){var G__55715 = args__838__auto___55727;return (input_checker55698_55723.cljs$core$IFn$_invoke$arity$1 ? input_checker55698_55723.cljs$core$IFn$_invoke$arity$1(G__55715) : input_checker55698_55723.call(null,G__55715));
})();if(cljs.core.truth_(temp__4126__auto___55728))
{var error__839__auto___55729 = temp__4126__auto___55728;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55729], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55697_55721,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55727,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55729], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__55700;var opts = G__55701;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55730 = (function (){var G__55716 = o__840__auto__;return (output_checker55699_55724.cljs$core$IFn$_invoke$arity$1 ? output_checker55699_55724.cljs$core$IFn$_invoke$arity$1(G__55716) : output_checker55699_55724.call(null,G__55716));
})();if(cljs.core.truth_(temp__4126__auto___55730))
{var error__839__auto___55731 = temp__4126__auto___55730;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55731], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55696_55720,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55731], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__55705,G__55706,G__55707){var validate__837__auto__ = ufv___55719.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55732 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55705,G__55706,G__55707], null);var temp__4126__auto___55733 = (function (){var G__55717 = args__838__auto___55732;return (input_checker55703_55725.cljs$core$IFn$_invoke$arity$1 ? input_checker55703_55725.cljs$core$IFn$_invoke$arity$1(G__55717) : input_checker55703_55725.call(null,G__55717));
})();if(cljs.core.truth_(temp__4126__auto___55733))
{var error__839__auto___55734 = temp__4126__auto___55733;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55734], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55702_55722,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55732,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55734], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__55705;var opts = G__55706;var defaults = G__55707;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55735 = (function (){var G__55718 = o__840__auto__;return (output_checker55704_55726.cljs$core$IFn$_invoke$arity$1 ? output_checker55704_55726.cljs$core$IFn$_invoke$arity$1(G__55718) : output_checker55704_55726.call(null,G__55718));
})();if(cljs.core.truth_(temp__4126__auto___55735))
{var error__839__auto___55736 = temp__4126__auto___55735;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55736], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55696_55720,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55736], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__55705,G__55706,G__55707){
switch(arguments.length){
case 2:
return separate__2.call(this,G__55705,G__55706);
case 3:
return separate__3.call(this,G__55705,G__55706,G__55707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___55719,output_schema55696_55720,input_schema55697_55721,input_schema55702_55722,input_checker55698_55723,output_checker55699_55724,input_checker55703_55725,output_checker55704_55726))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema55696_55720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55697_55721,input_schema55702_55722], null)));
var ufv___55760 = schema.utils.use_fn_validation;var output_schema55737_55761 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema55738_55762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker55739_55763 = schema.core.checker(input_schema55738_55762);var output_checker55740_55764 = schema.core.checker(output_schema55737_55761);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___55760,output_schema55737_55761,input_schema55738_55762,input_checker55739_55763,output_checker55740_55764){
return (function bs_class_set(G__55741){var validate__837__auto__ = ufv___55760.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55741], null);var temp__4126__auto___55766 = (function (){var G__55751 = args__838__auto___55765;return (input_checker55739_55763.cljs$core$IFn$_invoke$arity$1 ? input_checker55739_55763.cljs$core$IFn$_invoke$arity$1(G__55751) : input_checker55739_55763.call(null,G__55751));
})();if(cljs.core.truth_(temp__4126__auto___55766))
{var error__839__auto___55767 = temp__4126__auto___55766;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55767], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55738_55762,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55765,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55767], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__55753 = G__55741;var map__55754 = G__55753;var map__55754__$1 = ((cljs.core.seq_QMARK_(map__55754))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55754):map__55754);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55754__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55754__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55754__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__55753__$1 = G__55753;while(true){
var map__55755 = G__55753__$1;var map__55755__$1 = ((cljs.core.seq_QMARK_(map__55755))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55755):map__55755);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__55756 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__55756) : om_bootstrap.types.class_map.call(null,G__55756));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__55757 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__55757) : om_bootstrap.types.size_map.call(null,G__55757));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__55758 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__55758) : om_bootstrap.types.style_map.call(null,G__55758));
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
{var temp__4126__auto___55768 = (function (){var G__55759 = o__840__auto__;return (output_checker55740_55764.cljs$core$IFn$_invoke$arity$1 ? output_checker55740_55764.cljs$core$IFn$_invoke$arity$1(G__55759) : output_checker55740_55764.call(null,G__55759));
})();if(cljs.core.truth_(temp__4126__auto___55768))
{var error__839__auto___55769 = temp__4126__auto___55768;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55769], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55737_55761,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55769], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55760,output_schema55737_55761,input_schema55738_55762,input_checker55739_55763,output_checker55740_55764))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema55737_55761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55738_55762], null)));
//# sourceMappingURL=types.js.map