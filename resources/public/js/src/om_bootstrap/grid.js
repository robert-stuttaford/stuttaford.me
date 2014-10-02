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
var ufv___38477 = schema.utils.use_fn_validation;var output_schema38465_38478 = om_bootstrap.types.Component;var input_schema38466_38479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38467_38480 = schema.core.checker(input_schema38466_38479);var output_checker38468_38481 = schema.core.checker(output_schema38465_38478);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___38477,output_schema38465_38478,input_schema38466_38479,input_checker38467_38480,output_checker38468_38481){
return (function() { 
var grid__delegate = function (G__38469,rest38470){var validate__837__auto__ = ufv___38477.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38482 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38469,rest38470);var temp__4126__auto___38483 = (function (){var G__38474 = args__838__auto___38482;return (input_checker38467_38480.cljs$core$IFn$_invoke$arity$1 ? input_checker38467_38480.cljs$core$IFn$_invoke$arity$1(G__38474) : input_checker38467_38480.call(null,G__38474));
})();if(cljs.core.truth_(temp__4126__auto___38483))
{var error__839__auto___38484 = temp__4126__auto___38483;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38484], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38466_38479,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38482,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38484], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38469;var children = rest38470;while(true){
var vec__38475 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38485 = (function (){var G__38476 = o__840__auto__;return (output_checker38468_38481.cljs$core$IFn$_invoke$arity$1 ? output_checker38468_38481.cljs$core$IFn$_invoke$arity$1(G__38476) : output_checker38468_38481.call(null,G__38476));
})();if(cljs.core.truth_(temp__4126__auto___38485))
{var error__839__auto___38486 = temp__4126__auto___38485;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38486], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38465_38478,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38486], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__38469,var_args){
var rest38470 = null;if (arguments.length > 1) {
  rest38470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__38469,rest38470);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__38487){
var G__38469 = cljs.core.first(arglist__38487);
var rest38470 = cljs.core.rest(arglist__38487);
return grid__delegate(G__38469,rest38470);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___38477,output_schema38465_38478,input_schema38466_38479,input_checker38467_38480,output_checker38468_38481))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema38465_38478,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38466_38479], null)));
var ufv___38498 = schema.utils.use_fn_validation;var output_schema38488_38499 = om_bootstrap.types.Component;var input_schema38489_38500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38490_38501 = schema.core.checker(input_schema38489_38500);var output_checker38491_38502 = schema.core.checker(output_schema38488_38499);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___38498,output_schema38488_38499,input_schema38489_38500,input_checker38490_38501,output_checker38491_38502){
return (function() { 
var row__delegate = function (G__38492,rest38493){var validate__837__auto__ = ufv___38498.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38503 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38492,rest38493);var temp__4126__auto___38504 = (function (){var G__38496 = args__838__auto___38503;return (input_checker38490_38501.cljs$core$IFn$_invoke$arity$1 ? input_checker38490_38501.cljs$core$IFn$_invoke$arity$1(G__38496) : input_checker38490_38501.call(null,G__38496));
})();if(cljs.core.truth_(temp__4126__auto___38504))
{var error__839__auto___38505 = temp__4126__auto___38504;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38505], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38489_38500,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38503,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38505], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38492;var children = rest38493;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38506 = (function (){var G__38497 = o__840__auto__;return (output_checker38491_38502.cljs$core$IFn$_invoke$arity$1 ? output_checker38491_38502.cljs$core$IFn$_invoke$arity$1(G__38497) : output_checker38491_38502.call(null,G__38497));
})();if(cljs.core.truth_(temp__4126__auto___38506))
{var error__839__auto___38507 = temp__4126__auto___38506;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38507], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38488_38499,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38507], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__38492,var_args){
var rest38493 = null;if (arguments.length > 1) {
  rest38493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__38492,rest38493);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__38508){
var G__38492 = cljs.core.first(arglist__38508);
var rest38493 = cljs.core.rest(arglist__38508);
return row__delegate(G__38492,rest38493);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___38498,output_schema38488_38499,input_schema38489_38500,input_checker38490_38501,output_checker38491_38502))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema38488_38499,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38489_38500], null)));
var ufv___38525 = schema.utils.use_fn_validation;var output_schema38509_38526 = om_bootstrap.types.Component;var input_schema38510_38527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38511_38528 = schema.core.checker(input_schema38510_38527);var output_checker38512_38529 = schema.core.checker(output_schema38509_38526);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___38525,output_schema38509_38526,input_schema38510_38527,input_checker38511_38528,output_checker38512_38529){
return (function() { 
var col__delegate = function (G__38513,rest38514){var validate__837__auto__ = ufv___38525.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38530 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38513,rest38514);var temp__4126__auto___38531 = (function (){var G__38520 = args__838__auto___38530;return (input_checker38511_38528.cljs$core$IFn$_invoke$arity$1 ? input_checker38511_38528.cljs$core$IFn$_invoke$arity$1(G__38520) : input_checker38511_38528.call(null,G__38520));
})();if(cljs.core.truth_(temp__4126__auto___38531))
{var error__839__auto___38532 = temp__4126__auto___38531;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38532], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38510_38527,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38530,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38532], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38513;var children = rest38514;while(true){
var vec__38521 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38521,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38521,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38521,bs,props,validate__837__auto__,ufv___38525,output_schema38509_38526,input_schema38510_38527,input_checker38511_38528,output_checker38512_38529){
return (function (p__38522){var vec__38523 = p__38522;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__38521,bs,props,validate__837__auto__,ufv___38525,output_schema38509_38526,input_schema38510_38527,input_checker38511_38528,output_checker38512_38529))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38533 = (function (){var G__38524 = o__840__auto__;return (output_checker38512_38529.cljs$core$IFn$_invoke$arity$1 ? output_checker38512_38529.cljs$core$IFn$_invoke$arity$1(G__38524) : output_checker38512_38529.call(null,G__38524));
})();if(cljs.core.truth_(temp__4126__auto___38533))
{var error__839__auto___38534 = temp__4126__auto___38533;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38534], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38509_38526,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38534], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__38513,var_args){
var rest38514 = null;if (arguments.length > 1) {
  rest38514 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__38513,rest38514);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__38535){
var G__38513 = cljs.core.first(arglist__38535);
var rest38514 = cljs.core.rest(arglist__38535);
return col__delegate(G__38513,rest38514);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___38525,output_schema38509_38526,input_schema38510_38527,input_checker38511_38528,output_checker38512_38529))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema38509_38526,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38510_38527], null)));
//# sourceMappingURL=grid.js.map