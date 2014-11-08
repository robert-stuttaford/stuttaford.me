goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_bootstrap.util');
goog.require('om_bootstrap.util');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.types');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(schema.core.Int)));
var ufv___56507 = schema.utils.use_fn_validation;var output_schema56495_56508 = om_bootstrap.types.Component;var input_schema56496_56509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56497_56510 = schema.core.checker(input_schema56496_56509);var output_checker56498_56511 = schema.core.checker(output_schema56495_56508);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___56507,output_schema56495_56508,input_schema56496_56509,input_checker56497_56510,output_checker56498_56511){
return (function() { 
var grid__delegate = function (G__56499,rest56500){var validate__837__auto__ = ufv___56507.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56512 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56499,rest56500);var temp__4126__auto___56513 = (function (){var G__56504 = args__838__auto___56512;return (input_checker56497_56510.cljs$core$IFn$_invoke$arity$1 ? input_checker56497_56510.cljs$core$IFn$_invoke$arity$1(G__56504) : input_checker56497_56510.call(null,G__56504));
})();if(cljs.core.truth_(temp__4126__auto___56513))
{var error__839__auto___56514 = temp__4126__auto___56513;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56514], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56496_56509,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56512,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56514], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56499;var children = rest56500;while(true){
var vec__56505 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56505,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56505,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56515 = (function (){var G__56506 = o__840__auto__;return (output_checker56498_56511.cljs$core$IFn$_invoke$arity$1 ? output_checker56498_56511.cljs$core$IFn$_invoke$arity$1(G__56506) : output_checker56498_56511.call(null,G__56506));
})();if(cljs.core.truth_(temp__4126__auto___56515))
{var error__839__auto___56516 = temp__4126__auto___56515;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56516], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56495_56508,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56516], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__56499,var_args){
var rest56500 = null;if (arguments.length > 1) {
  rest56500 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__56499,rest56500);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__56517){
var G__56499 = cljs.core.first(arglist__56517);
var rest56500 = cljs.core.rest(arglist__56517);
return grid__delegate(G__56499,rest56500);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___56507,output_schema56495_56508,input_schema56496_56509,input_checker56497_56510,output_checker56498_56511))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema56495_56508,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56496_56509], null)));
var ufv___56528 = schema.utils.use_fn_validation;var output_schema56518_56529 = om_bootstrap.types.Component;var input_schema56519_56530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56520_56531 = schema.core.checker(input_schema56519_56530);var output_checker56521_56532 = schema.core.checker(output_schema56518_56529);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___56528,output_schema56518_56529,input_schema56519_56530,input_checker56520_56531,output_checker56521_56532){
return (function() { 
var row__delegate = function (G__56522,rest56523){var validate__837__auto__ = ufv___56528.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56533 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56522,rest56523);var temp__4126__auto___56534 = (function (){var G__56526 = args__838__auto___56533;return (input_checker56520_56531.cljs$core$IFn$_invoke$arity$1 ? input_checker56520_56531.cljs$core$IFn$_invoke$arity$1(G__56526) : input_checker56520_56531.call(null,G__56526));
})();if(cljs.core.truth_(temp__4126__auto___56534))
{var error__839__auto___56535 = temp__4126__auto___56534;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56535], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56519_56530,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56533,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56535], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56522;var children = rest56523;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56536 = (function (){var G__56527 = o__840__auto__;return (output_checker56521_56532.cljs$core$IFn$_invoke$arity$1 ? output_checker56521_56532.cljs$core$IFn$_invoke$arity$1(G__56527) : output_checker56521_56532.call(null,G__56527));
})();if(cljs.core.truth_(temp__4126__auto___56536))
{var error__839__auto___56537 = temp__4126__auto___56536;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56537], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56518_56529,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56537], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__56522,var_args){
var rest56523 = null;if (arguments.length > 1) {
  rest56523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__56522,rest56523);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__56538){
var G__56522 = cljs.core.first(arglist__56538);
var rest56523 = cljs.core.rest(arglist__56538);
return row__delegate(G__56522,rest56523);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___56528,output_schema56518_56529,input_schema56519_56530,input_checker56520_56531,output_checker56521_56532))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema56518_56529,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56519_56530], null)));
var ufv___56555 = schema.utils.use_fn_validation;var output_schema56539_56556 = om_bootstrap.types.Component;var input_schema56540_56557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56541_56558 = schema.core.checker(input_schema56540_56557);var output_checker56542_56559 = schema.core.checker(output_schema56539_56556);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___56555,output_schema56539_56556,input_schema56540_56557,input_checker56541_56558,output_checker56542_56559){
return (function() { 
var col__delegate = function (G__56543,rest56544){var validate__837__auto__ = ufv___56555.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56560 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56543,rest56544);var temp__4126__auto___56561 = (function (){var G__56550 = args__838__auto___56560;return (input_checker56541_56558.cljs$core$IFn$_invoke$arity$1 ? input_checker56541_56558.cljs$core$IFn$_invoke$arity$1(G__56550) : input_checker56541_56558.call(null,G__56550));
})();if(cljs.core.truth_(temp__4126__auto___56561))
{var error__839__auto___56562 = temp__4126__auto___56561;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56562], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56540_56557,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56560,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56562], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56543;var children = rest56544;while(true){
var vec__56551 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56551,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56551,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__56551,bs,props,validate__837__auto__,ufv___56555,output_schema56539_56556,input_schema56540_56557,input_checker56541_56558,output_checker56542_56559){
return (function (p__56552){var vec__56553 = p__56552;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__56551,bs,props,validate__837__auto__,ufv___56555,output_schema56539_56556,input_schema56540_56557,input_checker56541_56558,output_checker56542_56559))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56563 = (function (){var G__56554 = o__840__auto__;return (output_checker56542_56559.cljs$core$IFn$_invoke$arity$1 ? output_checker56542_56559.cljs$core$IFn$_invoke$arity$1(G__56554) : output_checker56542_56559.call(null,G__56554));
})();if(cljs.core.truth_(temp__4126__auto___56563))
{var error__839__auto___56564 = temp__4126__auto___56563;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56564], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56539_56556,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56564], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__56543,var_args){
var rest56544 = null;if (arguments.length > 1) {
  rest56544 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__56543,rest56544);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__56565){
var G__56543 = cljs.core.first(arglist__56565);
var rest56544 = cljs.core.rest(arglist__56565);
return col__delegate(G__56543,rest56544);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___56555,output_schema56539_56556,input_schema56540_56557,input_checker56541_56558,output_checker56542_56559))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema56539_56556,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56540_56557], null)));
//# sourceMappingURL=grid.js.map