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
var ufv___38500 = schema.utils.use_fn_validation;var output_schema38488_38501 = om_bootstrap.types.Component;var input_schema38489_38502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38490_38503 = schema.core.checker(input_schema38489_38502);var output_checker38491_38504 = schema.core.checker(output_schema38488_38501);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___38500,output_schema38488_38501,input_schema38489_38502,input_checker38490_38503,output_checker38491_38504){
return (function() { 
var grid__delegate = function (G__38492,rest38493){var validate__837__auto__ = ufv___38500.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38505 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38492,rest38493);var temp__4126__auto___38506 = (function (){var G__38497 = args__838__auto___38505;return (input_checker38490_38503.cljs$core$IFn$_invoke$arity$1 ? input_checker38490_38503.cljs$core$IFn$_invoke$arity$1(G__38497) : input_checker38490_38503.call(null,G__38497));
})();if(cljs.core.truth_(temp__4126__auto___38506))
{var error__839__auto___38507 = temp__4126__auto___38506;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38507], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38489_38502,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38505,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38507], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38492;var children = rest38493;while(true){
var vec__38498 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38498,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38498,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38508 = (function (){var G__38499 = o__840__auto__;return (output_checker38491_38504.cljs$core$IFn$_invoke$arity$1 ? output_checker38491_38504.cljs$core$IFn$_invoke$arity$1(G__38499) : output_checker38491_38504.call(null,G__38499));
})();if(cljs.core.truth_(temp__4126__auto___38508))
{var error__839__auto___38509 = temp__4126__auto___38508;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38509], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38488_38501,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38509], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__38492,var_args){
var rest38493 = null;if (arguments.length > 1) {
  rest38493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__38492,rest38493);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__38510){
var G__38492 = cljs.core.first(arglist__38510);
var rest38493 = cljs.core.rest(arglist__38510);
return grid__delegate(G__38492,rest38493);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___38500,output_schema38488_38501,input_schema38489_38502,input_checker38490_38503,output_checker38491_38504))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema38488_38501,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38489_38502], null)));
var ufv___38521 = schema.utils.use_fn_validation;var output_schema38511_38522 = om_bootstrap.types.Component;var input_schema38512_38523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38513_38524 = schema.core.checker(input_schema38512_38523);var output_checker38514_38525 = schema.core.checker(output_schema38511_38522);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___38521,output_schema38511_38522,input_schema38512_38523,input_checker38513_38524,output_checker38514_38525){
return (function() { 
var row__delegate = function (G__38515,rest38516){var validate__837__auto__ = ufv___38521.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38526 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38515,rest38516);var temp__4126__auto___38527 = (function (){var G__38519 = args__838__auto___38526;return (input_checker38513_38524.cljs$core$IFn$_invoke$arity$1 ? input_checker38513_38524.cljs$core$IFn$_invoke$arity$1(G__38519) : input_checker38513_38524.call(null,G__38519));
})();if(cljs.core.truth_(temp__4126__auto___38527))
{var error__839__auto___38528 = temp__4126__auto___38527;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38528], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38512_38523,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38526,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38528], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38515;var children = rest38516;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38529 = (function (){var G__38520 = o__840__auto__;return (output_checker38514_38525.cljs$core$IFn$_invoke$arity$1 ? output_checker38514_38525.cljs$core$IFn$_invoke$arity$1(G__38520) : output_checker38514_38525.call(null,G__38520));
})();if(cljs.core.truth_(temp__4126__auto___38529))
{var error__839__auto___38530 = temp__4126__auto___38529;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38530], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38511_38522,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38530], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__38515,var_args){
var rest38516 = null;if (arguments.length > 1) {
  rest38516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__38515,rest38516);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__38531){
var G__38515 = cljs.core.first(arglist__38531);
var rest38516 = cljs.core.rest(arglist__38531);
return row__delegate(G__38515,rest38516);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___38521,output_schema38511_38522,input_schema38512_38523,input_checker38513_38524,output_checker38514_38525))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema38511_38522,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38512_38523], null)));
var ufv___38548 = schema.utils.use_fn_validation;var output_schema38532_38549 = om_bootstrap.types.Component;var input_schema38533_38550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38534_38551 = schema.core.checker(input_schema38533_38550);var output_checker38535_38552 = schema.core.checker(output_schema38532_38549);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___38548,output_schema38532_38549,input_schema38533_38550,input_checker38534_38551,output_checker38535_38552){
return (function() { 
var col__delegate = function (G__38536,rest38537){var validate__837__auto__ = ufv___38548.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38553 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38536,rest38537);var temp__4126__auto___38554 = (function (){var G__38543 = args__838__auto___38553;return (input_checker38534_38551.cljs$core$IFn$_invoke$arity$1 ? input_checker38534_38551.cljs$core$IFn$_invoke$arity$1(G__38543) : input_checker38534_38551.call(null,G__38543));
})();if(cljs.core.truth_(temp__4126__auto___38554))
{var error__839__auto___38555 = temp__4126__auto___38554;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38555], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38533_38550,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38553,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38555], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38536;var children = rest38537;while(true){
var vec__38544 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38544,bs,props,validate__837__auto__,ufv___38548,output_schema38532_38549,input_schema38533_38550,input_checker38534_38551,output_checker38535_38552){
return (function (p__38545){var vec__38546 = p__38545;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38546,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38546,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__38544,bs,props,validate__837__auto__,ufv___38548,output_schema38532_38549,input_schema38533_38550,input_checker38534_38551,output_checker38535_38552))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38556 = (function (){var G__38547 = o__840__auto__;return (output_checker38535_38552.cljs$core$IFn$_invoke$arity$1 ? output_checker38535_38552.cljs$core$IFn$_invoke$arity$1(G__38547) : output_checker38535_38552.call(null,G__38547));
})();if(cljs.core.truth_(temp__4126__auto___38556))
{var error__839__auto___38557 = temp__4126__auto___38556;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38557], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38532_38549,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38557], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__38536,var_args){
var rest38537 = null;if (arguments.length > 1) {
  rest38537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__38536,rest38537);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__38558){
var G__38536 = cljs.core.first(arglist__38558);
var rest38537 = cljs.core.rest(arglist__38558);
return col__delegate(G__38536,rest38537);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___38548,output_schema38532_38549,input_schema38533_38550,input_checker38534_38551,output_checker38535_38552))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema38532_38549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38533_38550], null)));
//# sourceMappingURL=grid.js.map