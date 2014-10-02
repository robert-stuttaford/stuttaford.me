goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___38362 = schema.utils.use_fn_validation;var output_schema38353_38363 = schema.core.Any;var input_schema38354_38364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker38355_38365 = schema.core.checker(input_schema38354_38364);var output_checker38356_38366 = schema.core.checker(output_schema38353_38363);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___38362,output_schema38353_38363,input_schema38354_38364,input_checker38355_38365,output_checker38356_38366){
return (function schema_keys(G__38357){var validate__837__auto__ = ufv___38362.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38357], null);var temp__4126__auto___38368 = (function (){var G__38360 = args__838__auto___38367;return (input_checker38355_38365.cljs$core$IFn$_invoke$arity$1 ? input_checker38355_38365.cljs$core$IFn$_invoke$arity$1(G__38360) : input_checker38355_38365.call(null,G__38360));
})();if(cljs.core.truth_(temp__4126__auto___38368))
{var error__839__auto___38369 = temp__4126__auto___38368;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38369], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38354_38364,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38367,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38369], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38357;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___38362,output_schema38353_38363,input_schema38354_38364,input_checker38355_38365,output_checker38356_38366){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___38362,output_schema38353_38363,input_schema38354_38364,input_checker38355_38365,output_checker38356_38366))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38370 = (function (){var G__38361 = o__840__auto__;return (output_checker38356_38366.cljs$core$IFn$_invoke$arity$1 ? output_checker38356_38366.cljs$core$IFn$_invoke$arity$1(G__38361) : output_checker38356_38366.call(null,G__38361));
})();if(cljs.core.truth_(temp__4126__auto___38370))
{var error__839__auto___38371 = temp__4126__auto___38370;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38371], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38353_38363,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38371], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38362,output_schema38353_38363,input_schema38354_38364,input_checker38355_38365,output_checker38356_38366))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema38353_38363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38354_38364], null)));
var ufv___38381 = schema.utils.use_fn_validation;var output_schema38372_38382 = schema.core.Any;var input_schema38373_38383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker38374_38384 = schema.core.checker(input_schema38373_38383);var output_checker38375_38385 = schema.core.checker(output_schema38372_38382);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___38381,output_schema38372_38382,input_schema38373_38383,input_checker38374_38384,output_checker38375_38385){
return (function at_least(G__38376){var validate__837__auto__ = ufv___38381.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38376], null);var temp__4126__auto___38387 = (function (){var G__38379 = args__838__auto___38386;return (input_checker38374_38384.cljs$core$IFn$_invoke$arity$1 ? input_checker38374_38384.cljs$core$IFn$_invoke$arity$1(G__38379) : input_checker38374_38384.call(null,G__38379));
})();if(cljs.core.truth_(temp__4126__auto___38387))
{var error__839__auto___38388 = temp__4126__auto___38387;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38388], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38373_38383,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38386,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38388], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38376;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38389 = (function (){var G__38380 = o__840__auto__;return (output_checker38375_38385.cljs$core$IFn$_invoke$arity$1 ? output_checker38375_38385.cljs$core$IFn$_invoke$arity$1(G__38380) : output_checker38375_38385.call(null,G__38380));
})();if(cljs.core.truth_(temp__4126__auto___38389))
{var error__839__auto___38390 = temp__4126__auto___38389;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38390], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38372_38382,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38390], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38381,output_schema38372_38382,input_schema38373_38383,input_checker38374_38384,output_checker38375_38385))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema38372_38382,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38373_38383], null)));
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
var ufv___38414 = schema.utils.use_fn_validation;var output_schema38391_38415 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema38392_38416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema38397_38417 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker38393_38418 = schema.core.checker(input_schema38392_38416);var output_checker38394_38419 = schema.core.checker(output_schema38391_38415);var input_checker38398_38420 = schema.core.checker(input_schema38397_38417);var output_checker38399_38421 = schema.core.checker(output_schema38391_38415);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___38414,output_schema38391_38415,input_schema38392_38416,input_schema38397_38417,input_checker38393_38418,output_checker38394_38419,input_checker38398_38420,output_checker38399_38421){
return (function() {
var separate = null;
var separate__2 = (function (G__38395,G__38396){var validate__837__auto__ = ufv___38414.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38395,G__38396], null);var temp__4126__auto___38423 = (function (){var G__38410 = args__838__auto___38422;return (input_checker38393_38418.cljs$core$IFn$_invoke$arity$1 ? input_checker38393_38418.cljs$core$IFn$_invoke$arity$1(G__38410) : input_checker38393_38418.call(null,G__38410));
})();if(cljs.core.truth_(temp__4126__auto___38423))
{var error__839__auto___38424 = temp__4126__auto___38423;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38424], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38392_38416,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38422,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38424], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38395;var opts = G__38396;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38425 = (function (){var G__38411 = o__840__auto__;return (output_checker38394_38419.cljs$core$IFn$_invoke$arity$1 ? output_checker38394_38419.cljs$core$IFn$_invoke$arity$1(G__38411) : output_checker38394_38419.call(null,G__38411));
})();if(cljs.core.truth_(temp__4126__auto___38425))
{var error__839__auto___38426 = temp__4126__auto___38425;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38426], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38391_38415,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38426], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__38400,G__38401,G__38402){var validate__837__auto__ = ufv___38414.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38427 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38400,G__38401,G__38402], null);var temp__4126__auto___38428 = (function (){var G__38412 = args__838__auto___38427;return (input_checker38398_38420.cljs$core$IFn$_invoke$arity$1 ? input_checker38398_38420.cljs$core$IFn$_invoke$arity$1(G__38412) : input_checker38398_38420.call(null,G__38412));
})();if(cljs.core.truth_(temp__4126__auto___38428))
{var error__839__auto___38429 = temp__4126__auto___38428;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38429], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38397_38417,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38427,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38429], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38400;var opts = G__38401;var defaults = G__38402;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38430 = (function (){var G__38413 = o__840__auto__;return (output_checker38399_38421.cljs$core$IFn$_invoke$arity$1 ? output_checker38399_38421.cljs$core$IFn$_invoke$arity$1(G__38413) : output_checker38399_38421.call(null,G__38413));
})();if(cljs.core.truth_(temp__4126__auto___38430))
{var error__839__auto___38431 = temp__4126__auto___38430;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38431], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38391_38415,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38431], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__38400,G__38401,G__38402){
switch(arguments.length){
case 2:
return separate__2.call(this,G__38400,G__38401);
case 3:
return separate__3.call(this,G__38400,G__38401,G__38402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___38414,output_schema38391_38415,input_schema38392_38416,input_schema38397_38417,input_checker38393_38418,output_checker38394_38419,input_checker38398_38420,output_checker38399_38421))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema38391_38415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38392_38416,input_schema38397_38417], null)));
var ufv___38455 = schema.utils.use_fn_validation;var output_schema38432_38456 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema38433_38457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker38434_38458 = schema.core.checker(input_schema38433_38457);var output_checker38435_38459 = schema.core.checker(output_schema38432_38456);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___38455,output_schema38432_38456,input_schema38433_38457,input_checker38434_38458,output_checker38435_38459){
return (function bs_class_set(G__38436){var validate__837__auto__ = ufv___38455.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38436], null);var temp__4126__auto___38461 = (function (){var G__38446 = args__838__auto___38460;return (input_checker38434_38458.cljs$core$IFn$_invoke$arity$1 ? input_checker38434_38458.cljs$core$IFn$_invoke$arity$1(G__38446) : input_checker38434_38458.call(null,G__38446));
})();if(cljs.core.truth_(temp__4126__auto___38461))
{var error__839__auto___38462 = temp__4126__auto___38461;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38462], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38433_38457,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38460,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38462], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__38448 = G__38436;var map__38449 = G__38448;var map__38449__$1 = ((cljs.core.seq_QMARK_(map__38449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38449):map__38449);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38449__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38449__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38449__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__38448__$1 = G__38448;while(true){
var map__38450 = G__38448__$1;var map__38450__$1 = ((cljs.core.seq_QMARK_(map__38450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38450):map__38450);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38450__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38450__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38450__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__38451 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__38451) : om_bootstrap.types.class_map.call(null,G__38451));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__38452 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__38452) : om_bootstrap.types.size_map.call(null,G__38452));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__38453 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__38453) : om_bootstrap.types.style_map.call(null,G__38453));
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
{var temp__4126__auto___38463 = (function (){var G__38454 = o__840__auto__;return (output_checker38435_38459.cljs$core$IFn$_invoke$arity$1 ? output_checker38435_38459.cljs$core$IFn$_invoke$arity$1(G__38454) : output_checker38435_38459.call(null,G__38454));
})();if(cljs.core.truth_(temp__4126__auto___38463))
{var error__839__auto___38464 = temp__4126__auto___38463;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38464], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38432_38456,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38464], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38455,output_schema38432_38456,input_schema38433_38457,input_checker38434_38458,output_checker38435_38459))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema38432_38456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38433_38457], null)));
//# sourceMappingURL=types.js.map