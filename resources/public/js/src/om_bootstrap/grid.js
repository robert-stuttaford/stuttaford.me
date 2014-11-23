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
var ufv___40996 = schema.utils.use_fn_validation;var output_schema40984_40997 = om_bootstrap.types.Component;var input_schema40985_40998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker40986_40999 = schema.core.checker(input_schema40985_40998);var output_checker40987_41000 = schema.core.checker(output_schema40984_40997);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___40996,output_schema40984_40997,input_schema40985_40998,input_checker40986_40999,output_checker40987_41000){
return (function() { 
var grid__delegate = function (G__40988,rest40989){var validate__837__auto__ = ufv___40996.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41001 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__40988,rest40989);var temp__4126__auto___41002 = (function (){var G__40993 = args__838__auto___41001;return (input_checker40986_40999.cljs$core$IFn$_invoke$arity$1 ? input_checker40986_40999.cljs$core$IFn$_invoke$arity$1(G__40993) : input_checker40986_40999.call(null,G__40993));
})();if(cljs.core.truth_(temp__4126__auto___41002))
{var error__839__auto___41003 = temp__4126__auto___41002;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41003], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40985_40998,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41001,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41003], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__40988;var children = rest40989;while(true){
var vec__40994 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40994,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40994,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41004 = (function (){var G__40995 = o__840__auto__;return (output_checker40987_41000.cljs$core$IFn$_invoke$arity$1 ? output_checker40987_41000.cljs$core$IFn$_invoke$arity$1(G__40995) : output_checker40987_41000.call(null,G__40995));
})();if(cljs.core.truth_(temp__4126__auto___41004))
{var error__839__auto___41005 = temp__4126__auto___41004;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41005], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40984_40997,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41005], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__40988,var_args){
var rest40989 = null;if (arguments.length > 1) {
  rest40989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__40988,rest40989);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__41006){
var G__40988 = cljs.core.first(arglist__41006);
var rest40989 = cljs.core.rest(arglist__41006);
return grid__delegate(G__40988,rest40989);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___40996,output_schema40984_40997,input_schema40985_40998,input_checker40986_40999,output_checker40987_41000))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema40984_40997,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40985_40998], null)));
var ufv___41017 = schema.utils.use_fn_validation;var output_schema41007_41018 = om_bootstrap.types.Component;var input_schema41008_41019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker41009_41020 = schema.core.checker(input_schema41008_41019);var output_checker41010_41021 = schema.core.checker(output_schema41007_41018);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___41017,output_schema41007_41018,input_schema41008_41019,input_checker41009_41020,output_checker41010_41021){
return (function() { 
var row__delegate = function (G__41011,rest41012){var validate__837__auto__ = ufv___41017.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41022 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__41011,rest41012);var temp__4126__auto___41023 = (function (){var G__41015 = args__838__auto___41022;return (input_checker41009_41020.cljs$core$IFn$_invoke$arity$1 ? input_checker41009_41020.cljs$core$IFn$_invoke$arity$1(G__41015) : input_checker41009_41020.call(null,G__41015));
})();if(cljs.core.truth_(temp__4126__auto___41023))
{var error__839__auto___41024 = temp__4126__auto___41023;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41024], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41008_41019,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41022,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41024], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__41011;var children = rest41012;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41025 = (function (){var G__41016 = o__840__auto__;return (output_checker41010_41021.cljs$core$IFn$_invoke$arity$1 ? output_checker41010_41021.cljs$core$IFn$_invoke$arity$1(G__41016) : output_checker41010_41021.call(null,G__41016));
})();if(cljs.core.truth_(temp__4126__auto___41025))
{var error__839__auto___41026 = temp__4126__auto___41025;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41026], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41007_41018,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41026], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__41011,var_args){
var rest41012 = null;if (arguments.length > 1) {
  rest41012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__41011,rest41012);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__41027){
var G__41011 = cljs.core.first(arglist__41027);
var rest41012 = cljs.core.rest(arglist__41027);
return row__delegate(G__41011,rest41012);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___41017,output_schema41007_41018,input_schema41008_41019,input_checker41009_41020,output_checker41010_41021))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema41007_41018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41008_41019], null)));
var ufv___41044 = schema.utils.use_fn_validation;var output_schema41028_41045 = om_bootstrap.types.Component;var input_schema41029_41046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker41030_41047 = schema.core.checker(input_schema41029_41046);var output_checker41031_41048 = schema.core.checker(output_schema41028_41045);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___41044,output_schema41028_41045,input_schema41029_41046,input_checker41030_41047,output_checker41031_41048){
return (function() { 
var col__delegate = function (G__41032,rest41033){var validate__837__auto__ = ufv___41044.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41049 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__41032,rest41033);var temp__4126__auto___41050 = (function (){var G__41039 = args__838__auto___41049;return (input_checker41030_41047.cljs$core$IFn$_invoke$arity$1 ? input_checker41030_41047.cljs$core$IFn$_invoke$arity$1(G__41039) : input_checker41030_41047.call(null,G__41039));
})();if(cljs.core.truth_(temp__4126__auto___41050))
{var error__839__auto___41051 = temp__4126__auto___41050;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41051], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41029_41046,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41049,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41051], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__41032;var children = rest41033;while(true){
var vec__41040 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41040,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41040,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__41040,bs,props,validate__837__auto__,ufv___41044,output_schema41028_41045,input_schema41029_41046,input_checker41030_41047,output_checker41031_41048){
return (function (p__41041){var vec__41042 = p__41041;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41042,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41042,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__41040,bs,props,validate__837__auto__,ufv___41044,output_schema41028_41045,input_schema41029_41046,input_checker41030_41047,output_checker41031_41048))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41052 = (function (){var G__41043 = o__840__auto__;return (output_checker41031_41048.cljs$core$IFn$_invoke$arity$1 ? output_checker41031_41048.cljs$core$IFn$_invoke$arity$1(G__41043) : output_checker41031_41048.call(null,G__41043));
})();if(cljs.core.truth_(temp__4126__auto___41052))
{var error__839__auto___41053 = temp__4126__auto___41052;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41053], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41028_41045,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41053], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__41032,var_args){
var rest41033 = null;if (arguments.length > 1) {
  rest41033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__41032,rest41033);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__41054){
var G__41032 = cljs.core.first(arglist__41054);
var rest41033 = cljs.core.rest(arglist__41054);
return col__delegate(G__41032,rest41033);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___41044,output_schema41028_41045,input_schema41029_41046,input_checker41030_41047,output_checker41031_41048))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema41028_41045,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41029_41046], null)));
//# sourceMappingURL=grid.js.map