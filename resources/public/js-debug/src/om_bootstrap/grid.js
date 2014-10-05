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
var ufv___49657 = schema.utils.use_fn_validation;var output_schema49645_49658 = om_bootstrap.types.Component;var input_schema49646_49659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49647_49660 = schema.core.checker(input_schema49646_49659);var output_checker49648_49661 = schema.core.checker(output_schema49645_49658);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___49657,output_schema49645_49658,input_schema49646_49659,input_checker49647_49660,output_checker49648_49661){
return (function() { 
var grid__delegate = function (G__49649,rest49650){var validate__837__auto__ = ufv___49657.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49662 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49649,rest49650);var temp__4126__auto___49663 = (function (){var G__49654 = args__838__auto___49662;return (input_checker49647_49660.cljs$core$IFn$_invoke$arity$1 ? input_checker49647_49660.cljs$core$IFn$_invoke$arity$1(G__49654) : input_checker49647_49660.call(null,G__49654));
})();if(cljs.core.truth_(temp__4126__auto___49663))
{var error__839__auto___49664 = temp__4126__auto___49663;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49664], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49646_49659,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49662,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49664], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49649;var children = rest49650;while(true){
var vec__49655 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49655,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49655,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49665 = (function (){var G__49656 = o__840__auto__;return (output_checker49648_49661.cljs$core$IFn$_invoke$arity$1 ? output_checker49648_49661.cljs$core$IFn$_invoke$arity$1(G__49656) : output_checker49648_49661.call(null,G__49656));
})();if(cljs.core.truth_(temp__4126__auto___49665))
{var error__839__auto___49666 = temp__4126__auto___49665;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49666], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49645_49658,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49666], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__49649,var_args){
var rest49650 = null;if (arguments.length > 1) {
  rest49650 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__49649,rest49650);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__49667){
var G__49649 = cljs.core.first(arglist__49667);
var rest49650 = cljs.core.rest(arglist__49667);
return grid__delegate(G__49649,rest49650);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___49657,output_schema49645_49658,input_schema49646_49659,input_checker49647_49660,output_checker49648_49661))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema49645_49658,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49646_49659], null)));
var ufv___49678 = schema.utils.use_fn_validation;var output_schema49668_49679 = om_bootstrap.types.Component;var input_schema49669_49680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49670_49681 = schema.core.checker(input_schema49669_49680);var output_checker49671_49682 = schema.core.checker(output_schema49668_49679);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___49678,output_schema49668_49679,input_schema49669_49680,input_checker49670_49681,output_checker49671_49682){
return (function() { 
var row__delegate = function (G__49672,rest49673){var validate__837__auto__ = ufv___49678.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49683 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49672,rest49673);var temp__4126__auto___49684 = (function (){var G__49676 = args__838__auto___49683;return (input_checker49670_49681.cljs$core$IFn$_invoke$arity$1 ? input_checker49670_49681.cljs$core$IFn$_invoke$arity$1(G__49676) : input_checker49670_49681.call(null,G__49676));
})();if(cljs.core.truth_(temp__4126__auto___49684))
{var error__839__auto___49685 = temp__4126__auto___49684;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49685], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49669_49680,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49683,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49685], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49672;var children = rest49673;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49686 = (function (){var G__49677 = o__840__auto__;return (output_checker49671_49682.cljs$core$IFn$_invoke$arity$1 ? output_checker49671_49682.cljs$core$IFn$_invoke$arity$1(G__49677) : output_checker49671_49682.call(null,G__49677));
})();if(cljs.core.truth_(temp__4126__auto___49686))
{var error__839__auto___49687 = temp__4126__auto___49686;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49687], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49668_49679,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49687], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__49672,var_args){
var rest49673 = null;if (arguments.length > 1) {
  rest49673 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__49672,rest49673);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__49688){
var G__49672 = cljs.core.first(arglist__49688);
var rest49673 = cljs.core.rest(arglist__49688);
return row__delegate(G__49672,rest49673);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___49678,output_schema49668_49679,input_schema49669_49680,input_checker49670_49681,output_checker49671_49682))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema49668_49679,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49669_49680], null)));
var ufv___49705 = schema.utils.use_fn_validation;var output_schema49689_49706 = om_bootstrap.types.Component;var input_schema49690_49707 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49691_49708 = schema.core.checker(input_schema49690_49707);var output_checker49692_49709 = schema.core.checker(output_schema49689_49706);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___49705,output_schema49689_49706,input_schema49690_49707,input_checker49691_49708,output_checker49692_49709){
return (function() { 
var col__delegate = function (G__49693,rest49694){var validate__837__auto__ = ufv___49705.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49710 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49693,rest49694);var temp__4126__auto___49711 = (function (){var G__49700 = args__838__auto___49710;return (input_checker49691_49708.cljs$core$IFn$_invoke$arity$1 ? input_checker49691_49708.cljs$core$IFn$_invoke$arity$1(G__49700) : input_checker49691_49708.call(null,G__49700));
})();if(cljs.core.truth_(temp__4126__auto___49711))
{var error__839__auto___49712 = temp__4126__auto___49711;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49712], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49690_49707,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49710,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49712], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49693;var children = rest49694;while(true){
var vec__49701 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49701,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49701,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__49701,bs,props,validate__837__auto__,ufv___49705,output_schema49689_49706,input_schema49690_49707,input_checker49691_49708,output_checker49692_49709){
return (function (p__49702){var vec__49703 = p__49702;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49703,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49703,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__49701,bs,props,validate__837__auto__,ufv___49705,output_schema49689_49706,input_schema49690_49707,input_checker49691_49708,output_checker49692_49709))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49713 = (function (){var G__49704 = o__840__auto__;return (output_checker49692_49709.cljs$core$IFn$_invoke$arity$1 ? output_checker49692_49709.cljs$core$IFn$_invoke$arity$1(G__49704) : output_checker49692_49709.call(null,G__49704));
})();if(cljs.core.truth_(temp__4126__auto___49713))
{var error__839__auto___49714 = temp__4126__auto___49713;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49714], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49689_49706,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49714], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__49693,var_args){
var rest49694 = null;if (arguments.length > 1) {
  rest49694 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__49693,rest49694);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__49715){
var G__49693 = cljs.core.first(arglist__49715);
var rest49694 = cljs.core.rest(arglist__49715);
return col__delegate(G__49693,rest49694);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___49705,output_schema49689_49706,input_schema49690_49707,input_checker49691_49708,output_checker49692_49709))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema49689_49706,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49690_49707], null)));
//# sourceMappingURL=grid.js.map