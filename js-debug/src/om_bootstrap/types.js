goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___74440 = schema.utils.use_fn_validation;var output_schema74431_74441 = schema.core.Any;var input_schema74432_74442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker74433_74443 = schema.core.checker(input_schema74432_74442);var output_checker74434_74444 = schema.core.checker(output_schema74431_74441);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___74440,output_schema74431_74441,input_schema74432_74442,input_checker74433_74443,output_checker74434_74444){
return (function schema_keys(G__74435){var validate__837__auto__ = ufv___74440.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74435], null);var temp__4126__auto___74446 = (function (){var G__74438 = args__838__auto___74445;return (input_checker74433_74443.cljs$core$IFn$_invoke$arity$1 ? input_checker74433_74443.cljs$core$IFn$_invoke$arity$1(G__74438) : input_checker74433_74443.call(null,G__74438));
})();if(cljs.core.truth_(temp__4126__auto___74446))
{var error__839__auto___74447 = temp__4126__auto___74446;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74447], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74432_74442,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74445,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74447], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__74435;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___74440,output_schema74431_74441,input_schema74432_74442,input_checker74433_74443,output_checker74434_74444){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___74440,output_schema74431_74441,input_schema74432_74442,input_checker74433_74443,output_checker74434_74444))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74448 = (function (){var G__74439 = o__840__auto__;return (output_checker74434_74444.cljs$core$IFn$_invoke$arity$1 ? output_checker74434_74444.cljs$core$IFn$_invoke$arity$1(G__74439) : output_checker74434_74444.call(null,G__74439));
})();if(cljs.core.truth_(temp__4126__auto___74448))
{var error__839__auto___74449 = temp__4126__auto___74448;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74449], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74431_74441,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74449], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___74440,output_schema74431_74441,input_schema74432_74442,input_checker74433_74443,output_checker74434_74444))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema74431_74441,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74432_74442], null)));
var ufv___74459 = schema.utils.use_fn_validation;var output_schema74450_74460 = schema.core.Any;var input_schema74451_74461 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker74452_74462 = schema.core.checker(input_schema74451_74461);var output_checker74453_74463 = schema.core.checker(output_schema74450_74460);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___74459,output_schema74450_74460,input_schema74451_74461,input_checker74452_74462,output_checker74453_74463){
return (function at_least(G__74454){var validate__837__auto__ = ufv___74459.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74454], null);var temp__4126__auto___74465 = (function (){var G__74457 = args__838__auto___74464;return (input_checker74452_74462.cljs$core$IFn$_invoke$arity$1 ? input_checker74452_74462.cljs$core$IFn$_invoke$arity$1(G__74457) : input_checker74452_74462.call(null,G__74457));
})();if(cljs.core.truth_(temp__4126__auto___74465))
{var error__839__auto___74466 = temp__4126__auto___74465;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74466], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74451_74461,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74464,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74466], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__74454;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74467 = (function (){var G__74458 = o__840__auto__;return (output_checker74453_74463.cljs$core$IFn$_invoke$arity$1 ? output_checker74453_74463.cljs$core$IFn$_invoke$arity$1(G__74458) : output_checker74453_74463.call(null,G__74458));
})();if(cljs.core.truth_(temp__4126__auto___74467))
{var error__839__auto___74468 = temp__4126__auto___74467;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74468], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74450_74460,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74468], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___74459,output_schema74450_74460,input_schema74451_74461,input_checker74452_74462,output_checker74453_74463))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema74450_74460,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74451_74461], null)));
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
var ufv___74492 = schema.utils.use_fn_validation;var output_schema74469_74493 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema74470_74494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema74475_74495 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker74471_74496 = schema.core.checker(input_schema74470_74494);var output_checker74472_74497 = schema.core.checker(output_schema74469_74493);var input_checker74476_74498 = schema.core.checker(input_schema74475_74495);var output_checker74477_74499 = schema.core.checker(output_schema74469_74493);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___74492,output_schema74469_74493,input_schema74470_74494,input_schema74475_74495,input_checker74471_74496,output_checker74472_74497,input_checker74476_74498,output_checker74477_74499){
return (function() {
var separate = null;
var separate__2 = (function (G__74473,G__74474){var validate__837__auto__ = ufv___74492.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74473,G__74474], null);var temp__4126__auto___74501 = (function (){var G__74488 = args__838__auto___74500;return (input_checker74471_74496.cljs$core$IFn$_invoke$arity$1 ? input_checker74471_74496.cljs$core$IFn$_invoke$arity$1(G__74488) : input_checker74471_74496.call(null,G__74488));
})();if(cljs.core.truth_(temp__4126__auto___74501))
{var error__839__auto___74502 = temp__4126__auto___74501;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74502], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74470_74494,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74500,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74502], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__74473;var opts = G__74474;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74503 = (function (){var G__74489 = o__840__auto__;return (output_checker74472_74497.cljs$core$IFn$_invoke$arity$1 ? output_checker74472_74497.cljs$core$IFn$_invoke$arity$1(G__74489) : output_checker74472_74497.call(null,G__74489));
})();if(cljs.core.truth_(temp__4126__auto___74503))
{var error__839__auto___74504 = temp__4126__auto___74503;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74504], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74469_74493,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74504], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__74478,G__74479,G__74480){var validate__837__auto__ = ufv___74492.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74478,G__74479,G__74480], null);var temp__4126__auto___74506 = (function (){var G__74490 = args__838__auto___74505;return (input_checker74476_74498.cljs$core$IFn$_invoke$arity$1 ? input_checker74476_74498.cljs$core$IFn$_invoke$arity$1(G__74490) : input_checker74476_74498.call(null,G__74490));
})();if(cljs.core.truth_(temp__4126__auto___74506))
{var error__839__auto___74507 = temp__4126__auto___74506;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74507], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74475_74495,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74505,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74507], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__74478;var opts = G__74479;var defaults = G__74480;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74508 = (function (){var G__74491 = o__840__auto__;return (output_checker74477_74499.cljs$core$IFn$_invoke$arity$1 ? output_checker74477_74499.cljs$core$IFn$_invoke$arity$1(G__74491) : output_checker74477_74499.call(null,G__74491));
})();if(cljs.core.truth_(temp__4126__auto___74508))
{var error__839__auto___74509 = temp__4126__auto___74508;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74509], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74469_74493,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74509], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__74478,G__74479,G__74480){
switch(arguments.length){
case 2:
return separate__2.call(this,G__74478,G__74479);
case 3:
return separate__3.call(this,G__74478,G__74479,G__74480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___74492,output_schema74469_74493,input_schema74470_74494,input_schema74475_74495,input_checker74471_74496,output_checker74472_74497,input_checker74476_74498,output_checker74477_74499))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema74469_74493,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74470_74494,input_schema74475_74495], null)));
var ufv___74533 = schema.utils.use_fn_validation;var output_schema74510_74534 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema74511_74535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker74512_74536 = schema.core.checker(input_schema74511_74535);var output_checker74513_74537 = schema.core.checker(output_schema74510_74534);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___74533,output_schema74510_74534,input_schema74511_74535,input_checker74512_74536,output_checker74513_74537){
return (function bs_class_set(G__74514){var validate__837__auto__ = ufv___74533.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74538 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74514], null);var temp__4126__auto___74539 = (function (){var G__74524 = args__838__auto___74538;return (input_checker74512_74536.cljs$core$IFn$_invoke$arity$1 ? input_checker74512_74536.cljs$core$IFn$_invoke$arity$1(G__74524) : input_checker74512_74536.call(null,G__74524));
})();if(cljs.core.truth_(temp__4126__auto___74539))
{var error__839__auto___74540 = temp__4126__auto___74539;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74540], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74511_74535,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74538,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74540], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__74526 = G__74514;var map__74527 = G__74526;var map__74527__$1 = ((cljs.core.seq_QMARK_(map__74527))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74527):map__74527);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74527__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74527__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74527__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__74526__$1 = G__74526;while(true){
var map__74528 = G__74526__$1;var map__74528__$1 = ((cljs.core.seq_QMARK_(map__74528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74528):map__74528);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74528__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74528__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74528__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__74529 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__74529) : om_bootstrap.types.class_map.call(null,G__74529));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__74530 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__74530) : om_bootstrap.types.size_map.call(null,G__74530));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__74531 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__74531) : om_bootstrap.types.style_map.call(null,G__74531));
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
{var temp__4126__auto___74541 = (function (){var G__74532 = o__840__auto__;return (output_checker74513_74537.cljs$core$IFn$_invoke$arity$1 ? output_checker74513_74537.cljs$core$IFn$_invoke$arity$1(G__74532) : output_checker74513_74537.call(null,G__74532));
})();if(cljs.core.truth_(temp__4126__auto___74541))
{var error__839__auto___74542 = temp__4126__auto___74541;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74542], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74510_74534,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74542], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___74533,output_schema74510_74534,input_schema74511_74535,input_checker74512_74536,output_checker74513_74537))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema74510_74534,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74511_74535], null)));
//# sourceMappingURL=types.js.map