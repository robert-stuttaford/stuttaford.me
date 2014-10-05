goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___48570 = schema.utils.use_fn_validation;var output_schema48561_48571 = schema.core.Any;var input_schema48562_48572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker48563_48573 = schema.core.checker(input_schema48562_48572);var output_checker48564_48574 = schema.core.checker(output_schema48561_48571);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___48570,output_schema48561_48571,input_schema48562_48572,input_checker48563_48573,output_checker48564_48574){
return (function schema_keys(G__48565){var validate__837__auto__ = ufv___48570.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48565], null);var temp__4126__auto___48576 = (function (){var G__48568 = args__838__auto___48575;return (input_checker48563_48573.cljs$core$IFn$_invoke$arity$1 ? input_checker48563_48573.cljs$core$IFn$_invoke$arity$1(G__48568) : input_checker48563_48573.call(null,G__48568));
})();if(cljs.core.truth_(temp__4126__auto___48576))
{var error__839__auto___48577 = temp__4126__auto___48576;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48577], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48562_48572,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48575,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48577], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__48565;while(true){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (validate__837__auto__,ufv___48570,output_schema48561_48571,input_schema48562_48572,input_checker48563_48573,output_checker48564_48574){
return (function (k){if(schema.core.optional_key_QMARK_(k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__837__auto__,ufv___48570,output_schema48561_48571,input_schema48562_48572,input_checker48563_48573,output_checker48564_48574))
,cljs.core.keys(schema__$1));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48578 = (function (){var G__48569 = o__840__auto__;return (output_checker48564_48574.cljs$core$IFn$_invoke$arity$1 ? output_checker48564_48574.cljs$core$IFn$_invoke$arity$1(G__48569) : output_checker48564_48574.call(null,G__48569));
})();if(cljs.core.truth_(temp__4126__auto___48578))
{var error__839__auto___48579 = temp__4126__auto___48578;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48579], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48561_48571,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48579], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___48570,output_schema48561_48571,input_schema48562_48572,input_checker48563_48573,output_checker48564_48574))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.schema_keys),schema.core.make_fn_schema(output_schema48561_48571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48562_48572], null)));
var ufv___48589 = schema.utils.use_fn_validation;var output_schema48580_48590 = schema.core.Any;var input_schema48581_48591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker48582_48592 = schema.core.checker(input_schema48581_48591);var output_checker48583_48593 = schema.core.checker(output_schema48580_48590);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___48589,output_schema48580_48590,input_schema48581_48591,input_checker48582_48592,output_checker48583_48593){
return (function at_least(G__48584){var validate__837__auto__ = ufv___48589.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48584], null);var temp__4126__auto___48595 = (function (){var G__48587 = args__838__auto___48594;return (input_checker48582_48592.cljs$core$IFn$_invoke$arity$1 ? input_checker48582_48592.cljs$core$IFn$_invoke$arity$1(G__48587) : input_checker48582_48592.call(null,G__48587));
})();if(cljs.core.truth_(temp__4126__auto___48595))
{var error__839__auto___48596 = temp__4126__auto___48595;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48596], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48581_48591,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48594,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48596], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__48584;while(true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48597 = (function (){var G__48588 = o__840__auto__;return (output_checker48583_48593.cljs$core$IFn$_invoke$arity$1 ? output_checker48583_48593.cljs$core$IFn$_invoke$arity$1(G__48588) : output_checker48583_48593.call(null,G__48588));
})();if(cljs.core.truth_(temp__4126__auto___48597))
{var error__839__auto___48598 = temp__4126__auto___48597;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48598], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48580_48590,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48598], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___48589,output_schema48580_48590,input_schema48581_48591,input_checker48582_48592,output_checker48583_48593))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.at_least),schema.core.make_fn_schema(output_schema48580_48590,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48581_48591], null)));
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
var ufv___48622 = schema.utils.use_fn_validation;var output_schema48599_48623 = schema.core.pair(new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema48600_48624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema48605_48625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker48601_48626 = schema.core.checker(input_schema48600_48624);var output_checker48602_48627 = schema.core.checker(output_schema48599_48623);var input_checker48606_48628 = schema.core.checker(input_schema48605_48625);var output_checker48607_48629 = schema.core.checker(output_schema48599_48623);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___48622,output_schema48599_48623,input_schema48600_48624,input_schema48605_48625,input_checker48601_48626,output_checker48602_48627,input_checker48606_48628,output_checker48607_48629){
return (function() {
var separate = null;
var separate__2 = (function (G__48603,G__48604){var validate__837__auto__ = ufv___48622.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48603,G__48604], null);var temp__4126__auto___48631 = (function (){var G__48618 = args__838__auto___48630;return (input_checker48601_48626.cljs$core$IFn$_invoke$arity$1 ? input_checker48601_48626.cljs$core$IFn$_invoke$arity$1(G__48618) : input_checker48601_48626.call(null,G__48618));
})();if(cljs.core.truth_(temp__4126__auto___48631))
{var error__839__auto___48632 = temp__4126__auto___48631;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48632], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48600_48624,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48630,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48632], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__48603;var opts = G__48604;while(true){
return separate.cljs$core$IFn$_invoke$arity$3(schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48633 = (function (){var G__48619 = o__840__auto__;return (output_checker48602_48627.cljs$core$IFn$_invoke$arity$1 ? output_checker48602_48627.cljs$core$IFn$_invoke$arity$1(G__48619) : output_checker48602_48627.call(null,G__48619));
})();if(cljs.core.truth_(temp__4126__auto___48633))
{var error__839__auto___48634 = temp__4126__auto___48633;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48634], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48599_48623,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48634], null));
} else
{}
} else
{}
return o__840__auto__;
});
var separate__3 = (function (G__48608,G__48609,G__48610){var validate__837__auto__ = ufv___48622.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48608,G__48609,G__48610], null);var temp__4126__auto___48636 = (function (){var G__48620 = args__838__auto___48635;return (input_checker48606_48628.cljs$core$IFn$_invoke$arity$1 ? input_checker48606_48628.cljs$core$IFn$_invoke$arity$1(G__48620) : input_checker48606_48628.call(null,G__48620));
})();if(cljs.core.truth_(temp__4126__auto___48636))
{var error__839__auto___48637 = temp__4126__auto___48636;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48637], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48605_48625,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48635,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48637], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var schema__$1 = G__48608;var opts = G__48609;var defaults = G__48610;while(true){
var ks = cljs.core.set(om_bootstrap.types.schema_keys(om_bootstrap.types.bootstrap(schema__$1)));var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48638 = (function (){var G__48621 = o__840__auto__;return (output_checker48607_48629.cljs$core$IFn$_invoke$arity$1 ? output_checker48607_48629.cljs$core$IFn$_invoke$arity$1(G__48621) : output_checker48607_48629.call(null,G__48621));
})();if(cljs.core.truth_(temp__4126__auto___48638))
{var error__839__auto___48639 = temp__4126__auto___48638;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48639], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48599_48623,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48639], null));
} else
{}
} else
{}
return o__840__auto__;
});
separate = function(G__48608,G__48609,G__48610){
switch(arguments.length){
case 2:
return separate__2.call(this,G__48608,G__48609);
case 3:
return separate__3.call(this,G__48608,G__48609,G__48610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___48622,output_schema48599_48623,input_schema48600_48624,input_schema48605_48625,input_checker48601_48626,output_checker48602_48627,input_checker48606_48628,output_checker48607_48629))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.separate),schema.core.make_fn_schema(output_schema48599_48623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48600_48624,input_schema48605_48625], null)));
var ufv___48663 = schema.utils.use_fn_validation;var output_schema48640_48664 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema48641_48665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.types.at_least(om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker48642_48666 = schema.core.checker(input_schema48641_48665);var output_checker48643_48667 = schema.core.checker(output_schema48640_48664);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___48663,output_schema48640_48664,input_schema48641_48665,input_checker48642_48666,output_checker48643_48667){
return (function bs_class_set(G__48644){var validate__837__auto__ = ufv___48663.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48644], null);var temp__4126__auto___48669 = (function (){var G__48654 = args__838__auto___48668;return (input_checker48642_48666.cljs$core$IFn$_invoke$arity$1 ? input_checker48642_48666.cljs$core$IFn$_invoke$arity$1(G__48654) : input_checker48642_48666.call(null,G__48654));
})();if(cljs.core.truth_(temp__4126__auto___48669))
{var error__839__auto___48670 = temp__4126__auto___48669;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48670], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48641_48665,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48668,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48670], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__48656 = G__48644;var map__48657 = G__48656;var map__48657__$1 = ((cljs.core.seq_QMARK_(map__48657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48657):map__48657);var bs_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48657__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48657__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48657__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__48656__$1 = G__48656;while(true){
var map__48658 = G__48656__$1;var map__48658__$1 = ((cljs.core.seq_QMARK_(map__48658))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48658):map__48658);var bs_size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48658__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48658__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48658__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = (function (){var G__48659 = bs_class__$1;return (om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.class_map.cljs$core$IFn$_invoke$arity$1(G__48659) : om_bootstrap.types.class_map.call(null,G__48659));
})();if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(klass))+"-");return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = (function (){var G__48660 = bs_size__$1;return (om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.size_map.cljs$core$IFn$_invoke$arity$1(G__48660) : om_bootstrap.types.size_map.call(null,G__48660));
})();if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = (function (){var G__48661 = bs_style__$1;return (om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1 ? om_bootstrap.types.style_map.cljs$core$IFn$_invoke$arity$1(G__48661) : om_bootstrap.types.style_map.call(null,G__48661));
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
{var temp__4126__auto___48671 = (function (){var G__48662 = o__840__auto__;return (output_checker48643_48667.cljs$core$IFn$_invoke$arity$1 ? output_checker48643_48667.cljs$core$IFn$_invoke$arity$1(G__48662) : output_checker48643_48667.call(null,G__48662));
})();if(cljs.core.truth_(temp__4126__auto___48671))
{var error__839__auto___48672 = temp__4126__auto___48671;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48672], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48640_48664,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48672], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___48663,output_schema48640_48664,input_schema48641_48665,input_checker48642_48666,output_checker48643_48667))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.types.bs_class_set),schema.core.make_fn_schema(output_schema48640_48664,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48641_48665], null)));
//# sourceMappingURL=types.js.map