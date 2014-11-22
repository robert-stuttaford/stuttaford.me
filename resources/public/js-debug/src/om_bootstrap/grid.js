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
var ufv___48085 = schema.utils.use_fn_validation;var output_schema48073_48086 = om_bootstrap.types.Component;var input_schema48074_48087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48075_48088 = schema.core.checker(input_schema48074_48087);var output_checker48076_48089 = schema.core.checker(output_schema48073_48086);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___48085,output_schema48073_48086,input_schema48074_48087,input_checker48075_48088,output_checker48076_48089){
return (function() { 
var grid__delegate = function (G__48077,rest48078){var validate__837__auto__ = ufv___48085.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48090 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48077,rest48078);var temp__4126__auto___48091 = (function (){var G__48082 = args__838__auto___48090;return (input_checker48075_48088.cljs$core$IFn$_invoke$arity$1 ? input_checker48075_48088.cljs$core$IFn$_invoke$arity$1(G__48082) : input_checker48075_48088.call(null,G__48082));
})();if(cljs.core.truth_(temp__4126__auto___48091))
{var error__839__auto___48092 = temp__4126__auto___48091;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48092], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48074_48087,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48090,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48092], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48077;var children = rest48078;while(true){
var vec__48083 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48093 = (function (){var G__48084 = o__840__auto__;return (output_checker48076_48089.cljs$core$IFn$_invoke$arity$1 ? output_checker48076_48089.cljs$core$IFn$_invoke$arity$1(G__48084) : output_checker48076_48089.call(null,G__48084));
})();if(cljs.core.truth_(temp__4126__auto___48093))
{var error__839__auto___48094 = temp__4126__auto___48093;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48094], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48073_48086,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48094], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__48077,var_args){
var rest48078 = null;if (arguments.length > 1) {
  rest48078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__48077,rest48078);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__48095){
var G__48077 = cljs.core.first(arglist__48095);
var rest48078 = cljs.core.rest(arglist__48095);
return grid__delegate(G__48077,rest48078);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___48085,output_schema48073_48086,input_schema48074_48087,input_checker48075_48088,output_checker48076_48089))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema48073_48086,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48074_48087], null)));
var ufv___48106 = schema.utils.use_fn_validation;var output_schema48096_48107 = om_bootstrap.types.Component;var input_schema48097_48108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48098_48109 = schema.core.checker(input_schema48097_48108);var output_checker48099_48110 = schema.core.checker(output_schema48096_48107);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___48106,output_schema48096_48107,input_schema48097_48108,input_checker48098_48109,output_checker48099_48110){
return (function() { 
var row__delegate = function (G__48100,rest48101){var validate__837__auto__ = ufv___48106.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48111 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48100,rest48101);var temp__4126__auto___48112 = (function (){var G__48104 = args__838__auto___48111;return (input_checker48098_48109.cljs$core$IFn$_invoke$arity$1 ? input_checker48098_48109.cljs$core$IFn$_invoke$arity$1(G__48104) : input_checker48098_48109.call(null,G__48104));
})();if(cljs.core.truth_(temp__4126__auto___48112))
{var error__839__auto___48113 = temp__4126__auto___48112;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48113], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48097_48108,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48111,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48113], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48100;var children = rest48101;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48114 = (function (){var G__48105 = o__840__auto__;return (output_checker48099_48110.cljs$core$IFn$_invoke$arity$1 ? output_checker48099_48110.cljs$core$IFn$_invoke$arity$1(G__48105) : output_checker48099_48110.call(null,G__48105));
})();if(cljs.core.truth_(temp__4126__auto___48114))
{var error__839__auto___48115 = temp__4126__auto___48114;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48115], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48096_48107,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48115], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__48100,var_args){
var rest48101 = null;if (arguments.length > 1) {
  rest48101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__48100,rest48101);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__48116){
var G__48100 = cljs.core.first(arglist__48116);
var rest48101 = cljs.core.rest(arglist__48116);
return row__delegate(G__48100,rest48101);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___48106,output_schema48096_48107,input_schema48097_48108,input_checker48098_48109,output_checker48099_48110))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema48096_48107,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48097_48108], null)));
var ufv___48133 = schema.utils.use_fn_validation;var output_schema48117_48134 = om_bootstrap.types.Component;var input_schema48118_48135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48119_48136 = schema.core.checker(input_schema48118_48135);var output_checker48120_48137 = schema.core.checker(output_schema48117_48134);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___48133,output_schema48117_48134,input_schema48118_48135,input_checker48119_48136,output_checker48120_48137){
return (function() { 
var col__delegate = function (G__48121,rest48122){var validate__837__auto__ = ufv___48133.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48138 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48121,rest48122);var temp__4126__auto___48139 = (function (){var G__48128 = args__838__auto___48138;return (input_checker48119_48136.cljs$core$IFn$_invoke$arity$1 ? input_checker48119_48136.cljs$core$IFn$_invoke$arity$1(G__48128) : input_checker48119_48136.call(null,G__48128));
})();if(cljs.core.truth_(temp__4126__auto___48139))
{var error__839__auto___48140 = temp__4126__auto___48139;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48140], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48118_48135,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48138,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48140], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48121;var children = rest48122;while(true){
var vec__48129 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48129,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48129,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__48129,bs,props,validate__837__auto__,ufv___48133,output_schema48117_48134,input_schema48118_48135,input_checker48119_48136,output_checker48120_48137){
return (function (p__48130){var vec__48131 = p__48130;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__48129,bs,props,validate__837__auto__,ufv___48133,output_schema48117_48134,input_schema48118_48135,input_checker48119_48136,output_checker48120_48137))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48141 = (function (){var G__48132 = o__840__auto__;return (output_checker48120_48137.cljs$core$IFn$_invoke$arity$1 ? output_checker48120_48137.cljs$core$IFn$_invoke$arity$1(G__48132) : output_checker48120_48137.call(null,G__48132));
})();if(cljs.core.truth_(temp__4126__auto___48141))
{var error__839__auto___48142 = temp__4126__auto___48141;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48142], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48117_48134,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48142], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__48121,var_args){
var rest48122 = null;if (arguments.length > 1) {
  rest48122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__48121,rest48122);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__48143){
var G__48121 = cljs.core.first(arglist__48143);
var rest48122 = cljs.core.rest(arglist__48143);
return col__delegate(G__48121,rest48122);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___48133,output_schema48117_48134,input_schema48118_48135,input_checker48119_48136,output_checker48120_48137))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema48117_48134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48118_48135], null)));
//# sourceMappingURL=grid.js.map