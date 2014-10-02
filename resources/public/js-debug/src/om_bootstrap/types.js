goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___38385 = schema.utils.use_fn_validation;var output_schema38376_38386 = schema.core.Any;var input_schema38377_38387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker38378_38388 = schema.core.checker(input_schema38377_38387);var output_checker38379_38389 = schema.core.checker(output_schema38376_38386);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___38385,output_schema38376_38386,input_schema38377_38387,input_checker38378_38388,output_checker38379_38389){
return (function schema_keys(G__38380){var validate__837__auto__ = ufv___38385.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38380], null);var temp__4126__auto___38391 = (function (){var G__38383 = args__838__auto___38390;return (input_checker38378_38388.cljs$core$IFn$_invoke$arity$1 ? input_checker38378_38388.cljs$core$IFn$_invoke$arity$1(G__38383) : input_checker38378_38388.call(null,G__38383));
})();if(cljs.core.truth_(temp__4126__auto___38391))
{var error__839__auto___38392 = temp__4126__auto___38391;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38392], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38377_38387,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38390,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38392], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38380;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___38385,output_schema38376_38386,input_schema38377_38387,input_checker38378_38388,output_checker38379_38389){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___38385,output_schema38376_38386,input_schema38377_38387,input_checker38378_38388,output_checker38379_38389))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38393 = (function (){var G__38384 = o__840__auto__;return (output_checker38379_38389.cljs$core$IFn$_invoke$arity$1 ? output_checker38379_38389.cljs$core$IFn$_invoke$arity$1(G__38384) : output_checker38379_38389.call(null,G__38384));
})();if(cljs.core.truth_(temp__4126__auto___38393))
{var error__839__auto___38394 = temp__4126__auto___38393;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38394], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38376_38386,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38394], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38385,output_schema38376_38386,input_schema38377_38387,input_checker38378_38388,output_checker38379_38389))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema38376_38386,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38377_38387], null)));
var ufv___38404 = schema.utils.use_fn_validation;var output_schema38395_38405 = schema.core.Any;var input_schema38396_38406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker38397_38407 = schema.core.checker(input_schema38396_38406);var output_checker38398_38408 = schema.core.checker(output_schema38395_38405);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___38404,output_schema38395_38405,input_schema38396_38406,input_checker38397_38407,output_checker38398_38408){
return (function at_least(G__38399){var validate__837__auto__ = ufv___38404.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38399], null);var temp__4126__auto___38410 = (function (){var G__38402 = args__838__auto___38409;return (input_checker38397_38407.cljs$core$IFn$_invoke$arity$1 ? input_checker38397_38407.cljs$core$IFn$_invoke$arity$1(G__38402) : input_checker38397_38407.call(null,G__38402));
})();if(cljs.core.truth_(temp__4126__auto___38410))
{var error__839__auto___38411 = temp__4126__auto___38410;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38411], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38396_38406,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38409,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38411], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38399;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38412 = (function (){var G__38403 = o__840__auto__;return (output_checker38398_38408.cljs$core$IFn$_invoke$arity$1 ? output_checker38398_38408.cljs$core$IFn$_invoke$arity$1(G__38403) : output_checker38398_38408.call(null,G__38403));
})();if(cljs.core.truth_(temp__4126__auto___38412))
{var error__839__auto___38413 = temp__4126__auto___38412;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38413], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38395_38405,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38413], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38404,output_schema38395_38405,input_schema38396_38406,input_checker38397_38407,output_checker38398_38408))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema38395_38405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38396_38406], null)));
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
var ufv___38437 = schema.utils.use_fn_validation;var output_schema38414_38438 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema38415_38439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema38420_38440 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker38416_38441 = schema.core.checker(input_schema38415_38439);var output_checker38417_38442 = schema.core.checker(output_schema38414_38438);var input_checker38421_38443 = schema.core.checker(input_schema38420_38440);var output_checker38422_38444 = schema.core.checker(output_schema38414_38438);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___38437,output_schema38414_38438,input_schema38415_38439,input_schema38420_38440,input_checker38416_38441,output_checker38417_38442,input_checker38421_38443,output_checker38422_38444){
return (function() {
var separate = null;
var separate__2 = (function (G__38418,G__38419){var validate__837__auto__ = ufv___38437.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38445 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38418,G__38419], null);var temp__4126__auto___38446 = (function (){var G__38433 = args__838__auto___38445;return (input_checker38416_38441.cljs$core$IFn$_invoke$arity$1 ? input_checker38416_38441.cljs$core$IFn$_invoke$arity$1(G__38433) : input_checker38416_38441.call(null,G__38433));
})();if(cljs.core.truth_(temp__4126__auto___38446))
{var error__839__auto___38447 = temp__4126__auto___38446;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38447], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38415_38439,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38445,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38447], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38418;var opts = G__38419;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38448 = (function (){var G__38434 = o__840__auto__;return (output_checker38417_38442.cljs$core$IFn$_invoke$arity$1 ? output_checker38417_38442.cljs$core$IFn$_invoke$arity$1(G__38434) : output_checker38417_38442.call(null,G__38434));
})();if(cljs.core.truth_(temp__4126__auto___38448))
{var error__839__auto___38449 = temp__4126__auto___38448;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38449], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38414_38438,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38449], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__38423,G__38424,G__38425){var validate__837__auto__ = ufv___38437.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38450 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38423,G__38424,G__38425], null);var temp__4126__auto___38451 = (function (){var G__38435 = args__838__auto___38450;return (input_checker38421_38443.cljs$core$IFn$_invoke$arity$1 ? input_checker38421_38443.cljs$core$IFn$_invoke$arity$1(G__38435) : input_checker38421_38443.call(null,G__38435));
})();if(cljs.core.truth_(temp__4126__auto___38451))
{var error__839__auto___38452 = temp__4126__auto___38451;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38452], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38420_38440,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38450,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38452], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38423;var opts = G__38424;var defaults = G__38425;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38453 = (function (){var G__38436 = o__840__auto__;return (output_checker38422_38444.cljs$core$IFn$_invoke$arity$1 ? output_checker38422_38444.cljs$core$IFn$_invoke$arity$1(G__38436) : output_checker38422_38444.call(null,G__38436));
})();if(cljs.core.truth_(temp__4126__auto___38453))
{var error__839__auto___38454 = temp__4126__auto___38453;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38454], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38414_38438,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38454], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__38423,G__38424,G__38425){
switch(arguments.length){
case 2:
return separate__2.call(this,G__38423,G__38424);
case 3:
return separate__3.call(this,G__38423,G__38424,G__38425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___38437,output_schema38414_38438,input_schema38415_38439,input_schema38420_38440,input_checker38416_38441,output_checker38417_38442,input_checker38421_38443,output_checker38422_38444))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema38414_38438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38415_38439,input_schema38420_38440], null)));
var ufv___38478 = schema.utils.use_fn_validation;var output_schema38455_38479 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema38456_38480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker38457_38481 = schema.core.checker(input_schema38456_38480);var output_checker38458_38482 = schema.core.checker(output_schema38455_38479);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___38478,output_schema38455_38479,input_schema38456_38480,input_checker38457_38481,output_checker38458_38482){
return (function bs_class_set(G__38459){var validate__837__auto__ = ufv___38478.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38459], null);var temp__4126__auto___38484 = (function (){var G__38469 = args__838__auto___38483;return (input_checker38457_38481.cljs$core$IFn$_invoke$arity$1 ? input_checker38457_38481.cljs$core$IFn$_invoke$arity$1(G__38469) : input_checker38457_38481.call(null,G__38469));
})();if(cljs.core.truth_(temp__4126__auto___38484))
{var error__839__auto___38485 = temp__4126__auto___38484;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38485], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38456_38480,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38483,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38485], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__38471 = G__38459;var map__38472 = G__38471;var map__38472__$1 = ((cljs.core.seq_QMARK_(map__38472))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38472):map__38472);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__38471__$1 = G__38471;while(true){
var map__38473 = G__38471__$1;var map__38473__$1 = ((cljs.core.seq_QMARK_(map__38473))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38473):map__38473);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38473__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38473__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38473__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__38474 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__38474) : om_bootstrap.types.class_map.call(null,G__38474));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__38475 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__38475) : om_bootstrap.types.size_map.call(null,G__38475));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__38476 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__38476) : om_bootstrap.types.style_map.call(null,G__38476));
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
{var temp__4126__auto___38486 = (function (){var G__38477 = o__840__auto__;return (output_checker38458_38482.cljs$core$IFn$_invoke$arity$1 ? output_checker38458_38482.cljs$core$IFn$_invoke$arity$1(G__38477) : output_checker38458_38482.call(null,G__38477));
})();if(cljs.core.truth_(temp__4126__auto___38486))
{var error__839__auto___38487 = temp__4126__auto___38486;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38487], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38455_38479,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38487], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38478,output_schema38455_38479,input_schema38456_38480,input_checker38457_38481,output_checker38458_38482))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema38455_38479,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38456_38480], null)));
//# sourceMappingURL=types.js.map