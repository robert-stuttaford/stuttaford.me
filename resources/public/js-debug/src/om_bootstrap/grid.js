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
var ufv___38570 = schema.utils.use_fn_validation;var output_schema38558_38571 = om_bootstrap.types.Component;var input_schema38559_38572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38560_38573 = schema.core.checker(input_schema38559_38572);var output_checker38561_38574 = schema.core.checker(output_schema38558_38571);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___38570,output_schema38558_38571,input_schema38559_38572,input_checker38560_38573,output_checker38561_38574){
return (function() { 
var grid__delegate = function (G__38562,rest38563){var validate__837__auto__ = ufv___38570.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38575 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38562,rest38563);var temp__4126__auto___38576 = (function (){var G__38567 = args__838__auto___38575;return (input_checker38560_38573.cljs$core$IFn$_invoke$arity$1 ? input_checker38560_38573.cljs$core$IFn$_invoke$arity$1(G__38567) : input_checker38560_38573.call(null,G__38567));
})();if(cljs.core.truth_(temp__4126__auto___38576))
{var error__839__auto___38577 = temp__4126__auto___38576;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38577], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38559_38572,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38575,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38577], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38562;var children = rest38563;while(true){
var vec__38568 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38578 = (function (){var G__38569 = o__840__auto__;return (output_checker38561_38574.cljs$core$IFn$_invoke$arity$1 ? output_checker38561_38574.cljs$core$IFn$_invoke$arity$1(G__38569) : output_checker38561_38574.call(null,G__38569));
})();if(cljs.core.truth_(temp__4126__auto___38578))
{var error__839__auto___38579 = temp__4126__auto___38578;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38579], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38558_38571,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38579], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__38562,var_args){
var rest38563 = null;if (arguments.length > 1) {
  rest38563 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__38562,rest38563);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__38580){
var G__38562 = cljs.core.first(arglist__38580);
var rest38563 = cljs.core.rest(arglist__38580);
return grid__delegate(G__38562,rest38563);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___38570,output_schema38558_38571,input_schema38559_38572,input_checker38560_38573,output_checker38561_38574))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema38558_38571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38559_38572], null)));
var ufv___38591 = schema.utils.use_fn_validation;var output_schema38581_38592 = om_bootstrap.types.Component;var input_schema38582_38593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38583_38594 = schema.core.checker(input_schema38582_38593);var output_checker38584_38595 = schema.core.checker(output_schema38581_38592);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___38591,output_schema38581_38592,input_schema38582_38593,input_checker38583_38594,output_checker38584_38595){
return (function() { 
var row__delegate = function (G__38585,rest38586){var validate__837__auto__ = ufv___38591.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38596 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38585,rest38586);var temp__4126__auto___38597 = (function (){var G__38589 = args__838__auto___38596;return (input_checker38583_38594.cljs$core$IFn$_invoke$arity$1 ? input_checker38583_38594.cljs$core$IFn$_invoke$arity$1(G__38589) : input_checker38583_38594.call(null,G__38589));
})();if(cljs.core.truth_(temp__4126__auto___38597))
{var error__839__auto___38598 = temp__4126__auto___38597;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38598], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38582_38593,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38596,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38598], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38585;var children = rest38586;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38599 = (function (){var G__38590 = o__840__auto__;return (output_checker38584_38595.cljs$core$IFn$_invoke$arity$1 ? output_checker38584_38595.cljs$core$IFn$_invoke$arity$1(G__38590) : output_checker38584_38595.call(null,G__38590));
})();if(cljs.core.truth_(temp__4126__auto___38599))
{var error__839__auto___38600 = temp__4126__auto___38599;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38600], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38581_38592,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38600], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__38585,var_args){
var rest38586 = null;if (arguments.length > 1) {
  rest38586 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__38585,rest38586);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__38601){
var G__38585 = cljs.core.first(arglist__38601);
var rest38586 = cljs.core.rest(arglist__38601);
return row__delegate(G__38585,rest38586);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___38591,output_schema38581_38592,input_schema38582_38593,input_checker38583_38594,output_checker38584_38595))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema38581_38592,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38582_38593], null)));
var ufv___38618 = schema.utils.use_fn_validation;var output_schema38602_38619 = om_bootstrap.types.Component;var input_schema38603_38620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38604_38621 = schema.core.checker(input_schema38603_38620);var output_checker38605_38622 = schema.core.checker(output_schema38602_38619);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___38618,output_schema38602_38619,input_schema38603_38620,input_checker38604_38621,output_checker38605_38622){
return (function() { 
var col__delegate = function (G__38606,rest38607){var validate__837__auto__ = ufv___38618.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38623 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38606,rest38607);var temp__4126__auto___38624 = (function (){var G__38613 = args__838__auto___38623;return (input_checker38604_38621.cljs$core$IFn$_invoke$arity$1 ? input_checker38604_38621.cljs$core$IFn$_invoke$arity$1(G__38613) : input_checker38604_38621.call(null,G__38613));
})();if(cljs.core.truth_(temp__4126__auto___38624))
{var error__839__auto___38625 = temp__4126__auto___38624;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38625], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38603_38620,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38623,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38625], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38606;var children = rest38607;while(true){
var vec__38614 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38614,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38614,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38614,bs,props,validate__837__auto__,ufv___38618,output_schema38602_38619,input_schema38603_38620,input_checker38604_38621,output_checker38605_38622){
return (function (p__38615){var vec__38616 = p__38615;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38616,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38616,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__38614,bs,props,validate__837__auto__,ufv___38618,output_schema38602_38619,input_schema38603_38620,input_checker38604_38621,output_checker38605_38622))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38626 = (function (){var G__38617 = o__840__auto__;return (output_checker38605_38622.cljs$core$IFn$_invoke$arity$1 ? output_checker38605_38622.cljs$core$IFn$_invoke$arity$1(G__38617) : output_checker38605_38622.call(null,G__38617));
})();if(cljs.core.truth_(temp__4126__auto___38626))
{var error__839__auto___38627 = temp__4126__auto___38626;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38627], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38602_38619,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38627], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__38606,var_args){
var rest38607 = null;if (arguments.length > 1) {
  rest38607 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__38606,rest38607);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__38628){
var G__38606 = cljs.core.first(arglist__38628);
var rest38607 = cljs.core.rest(arglist__38628);
return col__delegate(G__38606,rest38607);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___38618,output_schema38602_38619,input_schema38603_38620,input_checker38604_38621,output_checker38605_38622))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema38602_38619,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38603_38620], null)));
//# sourceMappingURL=grid.js.map