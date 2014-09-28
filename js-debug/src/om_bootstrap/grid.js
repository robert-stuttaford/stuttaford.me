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
var ufv___55782 = schema.utils.use_fn_validation;var output_schema55770_55783 = om_bootstrap.types.Component;var input_schema55771_55784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker55772_55785 = schema.core.checker(input_schema55771_55784);var output_checker55773_55786 = schema.core.checker(output_schema55770_55783);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___55782,output_schema55770_55783,input_schema55771_55784,input_checker55772_55785,output_checker55773_55786){
return (function() { 
var grid__delegate = function (G__55774,rest55775){var validate__837__auto__ = ufv___55782.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55787 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__55774,rest55775);var temp__4126__auto___55788 = (function (){var G__55779 = args__838__auto___55787;return (input_checker55772_55785.cljs$core$IFn$_invoke$arity$1 ? input_checker55772_55785.cljs$core$IFn$_invoke$arity$1(G__55779) : input_checker55772_55785.call(null,G__55779));
})();if(cljs.core.truth_(temp__4126__auto___55788))
{var error__839__auto___55789 = temp__4126__auto___55788;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55789], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55771_55784,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55787,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55789], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__55774;var children = rest55775;while(true){
var vec__55780 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55780,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55780,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55790 = (function (){var G__55781 = o__840__auto__;return (output_checker55773_55786.cljs$core$IFn$_invoke$arity$1 ? output_checker55773_55786.cljs$core$IFn$_invoke$arity$1(G__55781) : output_checker55773_55786.call(null,G__55781));
})();if(cljs.core.truth_(temp__4126__auto___55790))
{var error__839__auto___55791 = temp__4126__auto___55790;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55791], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55770_55783,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55791], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__55774,var_args){
var rest55775 = null;if (arguments.length > 1) {
  rest55775 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__55774,rest55775);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__55792){
var G__55774 = cljs.core.first(arglist__55792);
var rest55775 = cljs.core.rest(arglist__55792);
return grid__delegate(G__55774,rest55775);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___55782,output_schema55770_55783,input_schema55771_55784,input_checker55772_55785,output_checker55773_55786))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema55770_55783,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55771_55784], null)));
var ufv___55803 = schema.utils.use_fn_validation;var output_schema55793_55804 = om_bootstrap.types.Component;var input_schema55794_55805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker55795_55806 = schema.core.checker(input_schema55794_55805);var output_checker55796_55807 = schema.core.checker(output_schema55793_55804);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___55803,output_schema55793_55804,input_schema55794_55805,input_checker55795_55806,output_checker55796_55807){
return (function() { 
var row__delegate = function (G__55797,rest55798){var validate__837__auto__ = ufv___55803.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55808 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__55797,rest55798);var temp__4126__auto___55809 = (function (){var G__55801 = args__838__auto___55808;return (input_checker55795_55806.cljs$core$IFn$_invoke$arity$1 ? input_checker55795_55806.cljs$core$IFn$_invoke$arity$1(G__55801) : input_checker55795_55806.call(null,G__55801));
})();if(cljs.core.truth_(temp__4126__auto___55809))
{var error__839__auto___55810 = temp__4126__auto___55809;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55810], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55794_55805,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55808,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55810], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__55797;var children = rest55798;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55811 = (function (){var G__55802 = o__840__auto__;return (output_checker55796_55807.cljs$core$IFn$_invoke$arity$1 ? output_checker55796_55807.cljs$core$IFn$_invoke$arity$1(G__55802) : output_checker55796_55807.call(null,G__55802));
})();if(cljs.core.truth_(temp__4126__auto___55811))
{var error__839__auto___55812 = temp__4126__auto___55811;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55812], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55793_55804,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55812], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__55797,var_args){
var rest55798 = null;if (arguments.length > 1) {
  rest55798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__55797,rest55798);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__55813){
var G__55797 = cljs.core.first(arglist__55813);
var rest55798 = cljs.core.rest(arglist__55813);
return row__delegate(G__55797,rest55798);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___55803,output_schema55793_55804,input_schema55794_55805,input_checker55795_55806,output_checker55796_55807))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema55793_55804,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55794_55805], null)));
var ufv___55830 = schema.utils.use_fn_validation;var output_schema55814_55831 = om_bootstrap.types.Component;var input_schema55815_55832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker55816_55833 = schema.core.checker(input_schema55815_55832);var output_checker55817_55834 = schema.core.checker(output_schema55814_55831);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___55830,output_schema55814_55831,input_schema55815_55832,input_checker55816_55833,output_checker55817_55834){
return (function() { 
var col__delegate = function (G__55818,rest55819){var validate__837__auto__ = ufv___55830.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55835 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__55818,rest55819);var temp__4126__auto___55836 = (function (){var G__55825 = args__838__auto___55835;return (input_checker55816_55833.cljs$core$IFn$_invoke$arity$1 ? input_checker55816_55833.cljs$core$IFn$_invoke$arity$1(G__55825) : input_checker55816_55833.call(null,G__55825));
})();if(cljs.core.truth_(temp__4126__auto___55836))
{var error__839__auto___55837 = temp__4126__auto___55836;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55837], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55815_55832,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55835,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55837], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__55818;var children = rest55819;while(true){
var vec__55826 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55826,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55826,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__55826,bs,props,validate__837__auto__,ufv___55830,output_schema55814_55831,input_schema55815_55832,input_checker55816_55833,output_checker55817_55834){
return (function (p__55827){var vec__55828 = p__55827;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55828,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55828,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__55826,bs,props,validate__837__auto__,ufv___55830,output_schema55814_55831,input_schema55815_55832,input_checker55816_55833,output_checker55817_55834))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55838 = (function (){var G__55829 = o__840__auto__;return (output_checker55817_55834.cljs$core$IFn$_invoke$arity$1 ? output_checker55817_55834.cljs$core$IFn$_invoke$arity$1(G__55829) : output_checker55817_55834.call(null,G__55829));
})();if(cljs.core.truth_(temp__4126__auto___55838))
{var error__839__auto___55839 = temp__4126__auto___55838;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55839], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55814_55831,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55839], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__55818,var_args){
var rest55819 = null;if (arguments.length > 1) {
  rest55819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__55818,rest55819);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__55840){
var G__55818 = cljs.core.first(arglist__55840);
var rest55819 = cljs.core.rest(arglist__55840);
return col__delegate(G__55818,rest55819);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___55830,output_schema55814_55831,input_schema55815_55832,input_checker55816_55833,output_checker55817_55834))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema55814_55831,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55815_55832], null)));
//# sourceMappingURL=grid.js.map