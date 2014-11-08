goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___55420 = schema.utils.use_fn_validation;var output_schema55411_55421 = schema.core.Any;var input_schema55412_55422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker55413_55423 = schema.core.checker(input_schema55412_55422);var output_checker55414_55424 = schema.core.checker(output_schema55411_55421);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___55420,output_schema55411_55421,input_schema55412_55422,input_checker55413_55423,output_checker55414_55424){
return (function schema_keys(G__55415){var validate__837__auto__ = ufv___55420.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55415], null);var temp__4126__auto___55426 = (function (){var G__55418 = args__838__auto___55425;return (input_checker55413_55423.cljs$core$IFn$_invoke$arity$1 ? input_checker55413_55423.cljs$core$IFn$_invoke$arity$1(G__55418) : input_checker55413_55423.call(null,G__55418));
})();if(cljs.core.truth_(temp__4126__auto___55426))
{var error__839__auto___55427 = temp__4126__auto___55426;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55427], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55412_55422,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55425,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55427], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__55415;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___55420,output_schema55411_55421,input_schema55412_55422,input_checker55413_55423,output_checker55414_55424){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___55420,output_schema55411_55421,input_schema55412_55422,input_checker55413_55423,output_checker55414_55424))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55428 = (function (){var G__55419 = o__840__auto__;return (output_checker55414_55424.cljs$core$IFn$_invoke$arity$1 ? output_checker55414_55424.cljs$core$IFn$_invoke$arity$1(G__55419) : output_checker55414_55424.call(null,G__55419));
})();if(cljs.core.truth_(temp__4126__auto___55428))
{var error__839__auto___55429 = temp__4126__auto___55428;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55429], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55411_55421,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55429], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55420,output_schema55411_55421,input_schema55412_55422,input_checker55413_55423,output_checker55414_55424))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema55411_55421,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55412_55422], null)));
var ufv___55439 = schema.utils.use_fn_validation;var output_schema55430_55440 = schema.core.Any;var input_schema55431_55441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker55432_55442 = schema.core.checker(input_schema55431_55441);var output_checker55433_55443 = schema.core.checker(output_schema55430_55440);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___55439,output_schema55430_55440,input_schema55431_55441,input_checker55432_55442,output_checker55433_55443){
return (function at_least(G__55434){var validate__837__auto__ = ufv___55439.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55434], null);var temp__4126__auto___55445 = (function (){var G__55437 = args__838__auto___55444;return (input_checker55432_55442.cljs$core$IFn$_invoke$arity$1 ? input_checker55432_55442.cljs$core$IFn$_invoke$arity$1(G__55437) : input_checker55432_55442.call(null,G__55437));
})();if(cljs.core.truth_(temp__4126__auto___55445))
{var error__839__auto___55446 = temp__4126__auto___55445;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55446], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55431_55441,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55444,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55446], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__55434;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55447 = (function (){var G__55438 = o__840__auto__;return (output_checker55433_55443.cljs$core$IFn$_invoke$arity$1 ? output_checker55433_55443.cljs$core$IFn$_invoke$arity$1(G__55438) : output_checker55433_55443.call(null,G__55438));
})();if(cljs.core.truth_(temp__4126__auto___55447))
{var error__839__auto___55448 = temp__4126__auto___55447;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55448], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55430_55440,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55448], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55439,output_schema55430_55440,input_schema55431_55441,input_checker55432_55442,output_checker55433_55443))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema55430_55440,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55431_55441], null)));
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
var ufv___55472 = schema.utils.use_fn_validation;var output_schema55449_55473 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema55450_55474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema55455_55475 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker55451_55476 = schema.core.checker(input_schema55450_55474);var output_checker55452_55477 = schema.core.checker(output_schema55449_55473);var input_checker55456_55478 = schema.core.checker(input_schema55455_55475);var output_checker55457_55479 = schema.core.checker(output_schema55449_55473);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___55472,output_schema55449_55473,input_schema55450_55474,input_schema55455_55475,input_checker55451_55476,output_checker55452_55477,input_checker55456_55478,output_checker55457_55479){
return (function() {
var separate = null;
var separate__2 = (function (G__55453,G__55454){var validate__837__auto__ = ufv___55472.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55453,G__55454], null);var temp__4126__auto___55481 = (function (){var G__55468 = args__838__auto___55480;return (input_checker55451_55476.cljs$core$IFn$_invoke$arity$1 ? input_checker55451_55476.cljs$core$IFn$_invoke$arity$1(G__55468) : input_checker55451_55476.call(null,G__55468));
})();if(cljs.core.truth_(temp__4126__auto___55481))
{var error__839__auto___55482 = temp__4126__auto___55481;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55482], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55450_55474,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55480,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55482], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__55453;var opts = G__55454;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55483 = (function (){var G__55469 = o__840__auto__;return (output_checker55452_55477.cljs$core$IFn$_invoke$arity$1 ? output_checker55452_55477.cljs$core$IFn$_invoke$arity$1(G__55469) : output_checker55452_55477.call(null,G__55469));
})();if(cljs.core.truth_(temp__4126__auto___55483))
{var error__839__auto___55484 = temp__4126__auto___55483;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55484], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55449_55473,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55484], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__55458,G__55459,G__55460){var validate__837__auto__ = ufv___55472.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55485 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55458,G__55459,G__55460], null);var temp__4126__auto___55486 = (function (){var G__55470 = args__838__auto___55485;return (input_checker55456_55478.cljs$core$IFn$_invoke$arity$1 ? input_checker55456_55478.cljs$core$IFn$_invoke$arity$1(G__55470) : input_checker55456_55478.call(null,G__55470));
})();if(cljs.core.truth_(temp__4126__auto___55486))
{var error__839__auto___55487 = temp__4126__auto___55486;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55487], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55455_55475,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55485,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55487], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__55458;var opts = G__55459;var defaults = G__55460;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55488 = (function (){var G__55471 = o__840__auto__;return (output_checker55457_55479.cljs$core$IFn$_invoke$arity$1 ? output_checker55457_55479.cljs$core$IFn$_invoke$arity$1(G__55471) : output_checker55457_55479.call(null,G__55471));
})();if(cljs.core.truth_(temp__4126__auto___55488))
{var error__839__auto___55489 = temp__4126__auto___55488;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55489], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55449_55473,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55489], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__55458,G__55459,G__55460){
switch(arguments.length){
case 2:
return separate__2.call(this,G__55458,G__55459);
case 3:
return separate__3.call(this,G__55458,G__55459,G__55460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___55472,output_schema55449_55473,input_schema55450_55474,input_schema55455_55475,input_checker55451_55476,output_checker55452_55477,input_checker55456_55478,output_checker55457_55479))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema55449_55473,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55450_55474,input_schema55455_55475], null)));
var ufv___55513 = schema.utils.use_fn_validation;var output_schema55490_55514 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema55491_55515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker55492_55516 = schema.core.checker(input_schema55491_55515);var output_checker55493_55517 = schema.core.checker(output_schema55490_55514);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___55513,output_schema55490_55514,input_schema55491_55515,input_checker55492_55516,output_checker55493_55517){
return (function bs_class_set(G__55494){var validate__837__auto__ = ufv___55513.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55494], null);var temp__4126__auto___55519 = (function (){var G__55504 = args__838__auto___55518;return (input_checker55492_55516.cljs$core$IFn$_invoke$arity$1 ? input_checker55492_55516.cljs$core$IFn$_invoke$arity$1(G__55504) : input_checker55492_55516.call(null,G__55504));
})();if(cljs.core.truth_(temp__4126__auto___55519))
{var error__839__auto___55520 = temp__4126__auto___55519;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55520], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55491_55515,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55518,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55520], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__55506 = G__55494;var map__55507 = G__55506;var map__55507__$1 = ((cljs.core.seq_QMARK_(map__55507))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55507):map__55507);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55507__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55507__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55507__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__55506__$1 = G__55506;while(true){
var map__55508 = G__55506__$1;var map__55508__$1 = ((cljs.core.seq_QMARK_(map__55508))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55508):map__55508);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55508__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55508__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55508__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__55509 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__55509) : om_bootstrap.types.class_map.call(null,G__55509));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__55510 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__55510) : om_bootstrap.types.size_map.call(null,G__55510));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__55511 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__55511) : om_bootstrap.types.style_map.call(null,G__55511));
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
{var temp__4126__auto___55521 = (function (){var G__55512 = o__840__auto__;return (output_checker55493_55517.cljs$core$IFn$_invoke$arity$1 ? output_checker55493_55517.cljs$core$IFn$_invoke$arity$1(G__55512) : output_checker55493_55517.call(null,G__55512));
})();if(cljs.core.truth_(temp__4126__auto___55521))
{var error__839__auto___55522 = temp__4126__auto___55521;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55522], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55490_55514,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55522], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55513,output_schema55490_55514,input_schema55491_55515,input_checker55492_55516,output_checker55493_55517))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema55490_55514,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55491_55515], null)));
//# sourceMappingURL=types.js.map