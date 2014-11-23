goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___38326 = schema.utils.use_fn_validation;var output_schema38317_38327 = schema.core.Any;var input_schema38318_38328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker38319_38329 = schema.core.checker(input_schema38318_38328);var output_checker38320_38330 = schema.core.checker(output_schema38317_38327);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___38326,output_schema38317_38327,input_schema38318_38328,input_checker38319_38329,output_checker38320_38330){
return (function schema_keys(G__38321){var validate__837__auto__ = ufv___38326.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38321], null);var temp__4126__auto___38332 = (function (){var G__38324 = args__838__auto___38331;return (input_checker38319_38329.cljs$core$IFn$_invoke$arity$1 ? input_checker38319_38329.cljs$core$IFn$_invoke$arity$1(G__38324) : input_checker38319_38329.call(null,G__38324));
})();if(cljs.core.truth_(temp__4126__auto___38332))
{var error__839__auto___38333 = temp__4126__auto___38332;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38333], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38318_38328,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38331,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38333], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38321;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___38326,output_schema38317_38327,input_schema38318_38328,input_checker38319_38329,output_checker38320_38330){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___38326,output_schema38317_38327,input_schema38318_38328,input_checker38319_38329,output_checker38320_38330))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38334 = (function (){var G__38325 = o__840__auto__;return (output_checker38320_38330.cljs$core$IFn$_invoke$arity$1 ? output_checker38320_38330.cljs$core$IFn$_invoke$arity$1(G__38325) : output_checker38320_38330.call(null,G__38325));
})();if(cljs.core.truth_(temp__4126__auto___38334))
{var error__839__auto___38335 = temp__4126__auto___38334;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38335], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38317_38327,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38335], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38326,output_schema38317_38327,input_schema38318_38328,input_checker38319_38329,output_checker38320_38330))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema38317_38327,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38318_38328], null)));
var ufv___38345 = schema.utils.use_fn_validation;var output_schema38336_38346 = schema.core.Any;var input_schema38337_38347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker38338_38348 = schema.core.checker(input_schema38337_38347);var output_checker38339_38349 = schema.core.checker(output_schema38336_38346);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___38345,output_schema38336_38346,input_schema38337_38347,input_checker38338_38348,output_checker38339_38349){
return (function at_least(G__38340){var validate__837__auto__ = ufv___38345.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38340], null);var temp__4126__auto___38351 = (function (){var G__38343 = args__838__auto___38350;return (input_checker38338_38348.cljs$core$IFn$_invoke$arity$1 ? input_checker38338_38348.cljs$core$IFn$_invoke$arity$1(G__38343) : input_checker38338_38348.call(null,G__38343));
})();if(cljs.core.truth_(temp__4126__auto___38351))
{var error__839__auto___38352 = temp__4126__auto___38351;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38352], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38337_38347,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38350,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38352], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38340;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38353 = (function (){var G__38344 = o__840__auto__;return (output_checker38339_38349.cljs$core$IFn$_invoke$arity$1 ? output_checker38339_38349.cljs$core$IFn$_invoke$arity$1(G__38344) : output_checker38339_38349.call(null,G__38344));
})();if(cljs.core.truth_(temp__4126__auto___38353))
{var error__839__auto___38354 = temp__4126__auto___38353;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38354], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38336_38346,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38354], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38345,output_schema38336_38346,input_schema38337_38347,input_checker38338_38348,output_checker38339_38349))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema38336_38346,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38337_38347], null)));
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
var ufv___38378 = schema.utils.use_fn_validation;var output_schema38355_38379 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema38356_38380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema38361_38381 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker38357_38382 = schema.core.checker(input_schema38356_38380);var output_checker38358_38383 = schema.core.checker(output_schema38355_38379);var input_checker38362_38384 = schema.core.checker(input_schema38361_38381);var output_checker38363_38385 = schema.core.checker(output_schema38355_38379);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___38378,output_schema38355_38379,input_schema38356_38380,input_schema38361_38381,input_checker38357_38382,output_checker38358_38383,input_checker38362_38384,output_checker38363_38385){
return (function() {
var separate = null;
var separate__2 = (function (G__38359,G__38360){var validate__837__auto__ = ufv___38378.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38359,G__38360], null);var temp__4126__auto___38387 = (function (){var G__38374 = args__838__auto___38386;return (input_checker38357_38382.cljs$core$IFn$_invoke$arity$1 ? input_checker38357_38382.cljs$core$IFn$_invoke$arity$1(G__38374) : input_checker38357_38382.call(null,G__38374));
})();if(cljs.core.truth_(temp__4126__auto___38387))
{var error__839__auto___38388 = temp__4126__auto___38387;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38388], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38356_38380,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38386,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38388], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38359;var opts = G__38360;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38389 = (function (){var G__38375 = o__840__auto__;return (output_checker38358_38383.cljs$core$IFn$_invoke$arity$1 ? output_checker38358_38383.cljs$core$IFn$_invoke$arity$1(G__38375) : output_checker38358_38383.call(null,G__38375));
})();if(cljs.core.truth_(temp__4126__auto___38389))
{var error__839__auto___38390 = temp__4126__auto___38389;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38390], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38355_38379,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38390], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__38364,G__38365,G__38366){var validate__837__auto__ = ufv___38378.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38391 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38364,G__38365,G__38366], null);var temp__4126__auto___38392 = (function (){var G__38376 = args__838__auto___38391;return (input_checker38362_38384.cljs$core$IFn$_invoke$arity$1 ? input_checker38362_38384.cljs$core$IFn$_invoke$arity$1(G__38376) : input_checker38362_38384.call(null,G__38376));
})();if(cljs.core.truth_(temp__4126__auto___38392))
{var error__839__auto___38393 = temp__4126__auto___38392;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38393], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38361_38381,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38391,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38393], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__38364;var opts = G__38365;var defaults = G__38366;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38394 = (function (){var G__38377 = o__840__auto__;return (output_checker38363_38385.cljs$core$IFn$_invoke$arity$1 ? output_checker38363_38385.cljs$core$IFn$_invoke$arity$1(G__38377) : output_checker38363_38385.call(null,G__38377));
})();if(cljs.core.truth_(temp__4126__auto___38394))
{var error__839__auto___38395 = temp__4126__auto___38394;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38395], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38355_38379,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38395], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__38364,G__38365,G__38366){
switch(arguments.length){
case 2:
return separate__2.call(this,G__38364,G__38365);
case 3:
return separate__3.call(this,G__38364,G__38365,G__38366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___38378,output_schema38355_38379,input_schema38356_38380,input_schema38361_38381,input_checker38357_38382,output_checker38358_38383,input_checker38362_38384,output_checker38363_38385))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema38355_38379,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38356_38380,input_schema38361_38381], null)));
var ufv___38419 = schema.utils.use_fn_validation;var output_schema38396_38420 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema38397_38421 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker38398_38422 = schema.core.checker(input_schema38397_38421);var output_checker38399_38423 = schema.core.checker(output_schema38396_38420);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___38419,output_schema38396_38420,input_schema38397_38421,input_checker38398_38422,output_checker38399_38423){
return (function bs_class_set(G__38400){var validate__837__auto__ = ufv___38419.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38400], null);var temp__4126__auto___38425 = (function (){var G__38410 = args__838__auto___38424;return (input_checker38398_38422.cljs$core$IFn$_invoke$arity$1 ? input_checker38398_38422.cljs$core$IFn$_invoke$arity$1(G__38410) : input_checker38398_38422.call(null,G__38410));
})();if(cljs.core.truth_(temp__4126__auto___38425))
{var error__839__auto___38426 = temp__4126__auto___38425;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38426], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38397_38421,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38424,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38426], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__38412 = G__38400;var map__38413 = G__38412;var map__38413__$1 = ((cljs.core.seq_QMARK_(map__38413))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38413):map__38413);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38413__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38413__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38413__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__38412__$1 = G__38412;while(true){
var map__38414 = G__38412__$1;var map__38414__$1 = ((cljs.core.seq_QMARK_(map__38414))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38414):map__38414);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__38415 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__38415) : om_bootstrap.types.class_map.call(null,G__38415));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__38416 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__38416) : om_bootstrap.types.size_map.call(null,G__38416));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__38417 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__38417) : om_bootstrap.types.style_map.call(null,G__38417));
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
{var temp__4126__auto___38427 = (function (){var G__38418 = o__840__auto__;return (output_checker38399_38423.cljs$core$IFn$_invoke$arity$1 ? output_checker38399_38423.cljs$core$IFn$_invoke$arity$1(G__38418) : output_checker38399_38423.call(null,G__38418));
})();if(cljs.core.truth_(temp__4126__auto___38427))
{var error__839__auto___38428 = temp__4126__auto___38427;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38428], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38396_38420,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38428], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38419,output_schema38396_38420,input_schema38397_38421,input_checker38398_38422,output_checker38399_38423))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema38396_38420,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38397_38421], null)));
//# sourceMappingURL=types.js.map