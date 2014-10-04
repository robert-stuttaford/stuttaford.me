goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___38455 = schema.utils.use_fn_validation;var output_schema38446_38456 = schema.core.Any;var input_schema38447_38457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker38448_38458 = schema.core.checker(input_schema38447_38457);var output_checker38449_38459 = schema.core.checker(output_schema38446_38456);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___38455,output_schema38446_38456,input_schema38447_38457,input_checker38448_38458,output_checker38449_38459){
return (function schema_keys(G__38450){var validate__837__auto__ = ufv___38455.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38450], null);var temp__4126__auto___38461 = (function (){var G__38453 = args__838__auto___38460;return (input_checker38448_38458.cljs$core$IFn$_invoke$arity$1 ? input_checker38448_38458.cljs$core$IFn$_invoke$arity$1(G__38453) : input_checker38448_38458.call(null,G__38453));
})();if(cljs.core.truth_(temp__4126__auto___38461))
{var error__839__auto___38462 = temp__4126__auto___38461;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38462], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38447_38457,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38460,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38462], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38450;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___38455,output_schema38446_38456,input_schema38447_38457,input_checker38448_38458,output_checker38449_38459){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___38455,output_schema38446_38456,input_schema38447_38457,input_checker38448_38458,output_checker38449_38459))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38463 = (function (){var G__38454 = o__840__auto__;return (output_checker38449_38459.cljs$core$IFn$_invoke$arity$1 ? output_checker38449_38459.cljs$core$IFn$_invoke$arity$1(G__38454) : output_checker38449_38459.call(null,G__38454));
})();if(cljs.core.truth_(temp__4126__auto___38463))
{var error__839__auto___38464 = temp__4126__auto___38463;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38464], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38446_38456,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38464], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38455,output_schema38446_38456,input_schema38447_38457,input_checker38448_38458,output_checker38449_38459))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema38446_38456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38447_38457], null)));
var ufv___38474 = schema.utils.use_fn_validation;var output_schema38465_38475 = schema.core.Any;var input_schema38466_38476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker38467_38477 = schema.core.checker(input_schema38466_38476);var output_checker38468_38478 = schema.core.checker(output_schema38465_38475);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___38474,output_schema38465_38475,input_schema38466_38476,input_checker38467_38477,output_checker38468_38478){
return (function at_least(G__38469){var validate__837__auto__ = ufv___38474.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38469], null);var temp__4126__auto___38480 = (function (){var G__38472 = args__838__auto___38479;return (input_checker38467_38477.cljs$core$IFn$_invoke$arity$1 ? input_checker38467_38477.cljs$core$IFn$_invoke$arity$1(G__38472) : input_checker38467_38477.call(null,G__38472));
})();if(cljs.core.truth_(temp__4126__auto___38480))
{var error__839__auto___38481 = temp__4126__auto___38480;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38481], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38466_38476,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38479,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38481], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38469;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38482 = (function (){var G__38473 = o__840__auto__;return (output_checker38468_38478.cljs$core$IFn$_invoke$arity$1 ? output_checker38468_38478.cljs$core$IFn$_invoke$arity$1(G__38473) : output_checker38468_38478.call(null,G__38473));
})();if(cljs.core.truth_(temp__4126__auto___38482))
{var error__839__auto___38483 = temp__4126__auto___38482;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38483], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38465_38475,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38483], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38474,output_schema38465_38475,input_schema38466_38476,input_checker38467_38477,output_checker38468_38478))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema38465_38475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38466_38476], null)));
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
var ufv___38507 = schema.utils.use_fn_validation;var output_schema38484_38508 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema38485_38509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema38490_38510 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker38486_38511 = schema.core.checker(input_schema38485_38509);var output_checker38487_38512 = schema.core.checker(output_schema38484_38508);var input_checker38491_38513 = schema.core.checker(input_schema38490_38510);var output_checker38492_38514 = schema.core.checker(output_schema38484_38508);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___38507,output_schema38484_38508,input_schema38485_38509,input_schema38490_38510,input_checker38486_38511,output_checker38487_38512,input_checker38491_38513,output_checker38492_38514){
return (function() {
var separate = null;
var separate__2 = (function (G__38488,G__38489){var validate__837__auto__ = ufv___38507.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38488,G__38489], null);var temp__4126__auto___38516 = (function (){var G__38503 = args__838__auto___38515;return (input_checker38486_38511.cljs$core$IFn$_invoke$arity$1 ? input_checker38486_38511.cljs$core$IFn$_invoke$arity$1(G__38503) : input_checker38486_38511.call(null,G__38503));
})();if(cljs.core.truth_(temp__4126__auto___38516))
{var error__839__auto___38517 = temp__4126__auto___38516;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38517], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38485_38509,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38515,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38517], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38488;var opts = G__38489;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38518 = (function (){var G__38504 = o__840__auto__;return (output_checker38487_38512.cljs$core$IFn$_invoke$arity$1 ? output_checker38487_38512.cljs$core$IFn$_invoke$arity$1(G__38504) : output_checker38487_38512.call(null,G__38504));
})();if(cljs.core.truth_(temp__4126__auto___38518))
{var error__839__auto___38519 = temp__4126__auto___38518;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38519], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38484_38508,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38519], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__38493,G__38494,G__38495){var validate__837__auto__ = ufv___38507.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38493,G__38494,G__38495], null);var temp__4126__auto___38521 = (function (){var G__38505 = args__838__auto___38520;return (input_checker38491_38513.cljs$core$IFn$_invoke$arity$1 ? input_checker38491_38513.cljs$core$IFn$_invoke$arity$1(G__38505) : input_checker38491_38513.call(null,G__38505));
})();if(cljs.core.truth_(temp__4126__auto___38521))
{var error__839__auto___38522 = temp__4126__auto___38521;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38522], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38490_38510,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38520,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38522], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38493;var opts = G__38494;var defaults = G__38495;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38523 = (function (){var G__38506 = o__840__auto__;return (output_checker38492_38514.cljs$core$IFn$_invoke$arity$1 ? output_checker38492_38514.cljs$core$IFn$_invoke$arity$1(G__38506) : output_checker38492_38514.call(null,G__38506));
})();if(cljs.core.truth_(temp__4126__auto___38523))
{var error__839__auto___38524 = temp__4126__auto___38523;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38524], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38484_38508,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38524], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__38493,G__38494,G__38495){
switch(arguments.length){
case 2:
return separate__2.call(this,G__38493,G__38494);
case 3:
return separate__3.call(this,G__38493,G__38494,G__38495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___38507,output_schema38484_38508,input_schema38485_38509,input_schema38490_38510,input_checker38486_38511,output_checker38487_38512,input_checker38491_38513,output_checker38492_38514))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema38484_38508,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38485_38509,input_schema38490_38510], null)));
var ufv___38548 = schema.utils.use_fn_validation;var output_schema38525_38549 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema38526_38550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker38527_38551 = schema.core.checker(input_schema38526_38550);var output_checker38528_38552 = schema.core.checker(output_schema38525_38549);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___38548,output_schema38525_38549,input_schema38526_38550,input_checker38527_38551,output_checker38528_38552){
return (function bs_class_set(G__38529){var validate__837__auto__ = ufv___38548.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38529], null);var temp__4126__auto___38554 = (function (){var G__38539 = args__838__auto___38553;return (input_checker38527_38551.cljs$core$IFn$_invoke$arity$1 ? input_checker38527_38551.cljs$core$IFn$_invoke$arity$1(G__38539) : input_checker38527_38551.call(null,G__38539));
})();if(cljs.core.truth_(temp__4126__auto___38554))
{var error__839__auto___38555 = temp__4126__auto___38554;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38555], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38526_38550,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38553,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38555], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__38541 = G__38529;var map__38542 = G__38541;var map__38542__$1 = ((cljs.core.seq_QMARK_(map__38542))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38542):map__38542);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38542__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38542__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38542__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__38541__$1 = G__38541;while(true){
var map__38543 = G__38541__$1;var map__38543__$1 = ((cljs.core.seq_QMARK_(map__38543))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38543):map__38543);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38543__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38543__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38543__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__38544 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__38544) : om_bootstrap.types.class_map.call(null,G__38544));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__38545 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__38545) : om_bootstrap.types.size_map.call(null,G__38545));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__38546 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__38546) : om_bootstrap.types.style_map.call(null,G__38546));
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
{var temp__4126__auto___38556 = (function (){var G__38547 = o__840__auto__;return (output_checker38528_38552.cljs$core$IFn$_invoke$arity$1 ? output_checker38528_38552.cljs$core$IFn$_invoke$arity$1(G__38547) : output_checker38528_38552.call(null,G__38547));
})();if(cljs.core.truth_(temp__4126__auto___38556))
{var error__839__auto___38557 = temp__4126__auto___38556;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38557], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38525_38549,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38557], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38548,output_schema38525_38549,input_schema38526_38550,input_checker38527_38551,output_checker38528_38552))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema38525_38549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38526_38550], null)));
//# sourceMappingURL=types.js.map