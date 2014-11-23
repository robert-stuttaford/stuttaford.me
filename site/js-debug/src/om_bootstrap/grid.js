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
var ufv___77110 = schema.utils.use_fn_validation;var output_schema77098_77111 = om_bootstrap.types.Component;var input_schema77099_77112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker77100_77113 = schema.core.checker(input_schema77099_77112);var output_checker77101_77114 = schema.core.checker(output_schema77098_77111);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___77110,output_schema77098_77111,input_schema77099_77112,input_checker77100_77113,output_checker77101_77114){
return (function() { 
var grid__delegate = function (G__77102,rest77103){var validate__837__auto__ = ufv___77110.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77115 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__77102,rest77103);var temp__4126__auto___77116 = (function (){var G__77107 = args__838__auto___77115;return (input_checker77100_77113.cljs$core$IFn$_invoke$arity$1 ? input_checker77100_77113.cljs$core$IFn$_invoke$arity$1(G__77107) : input_checker77100_77113.call(null,G__77107));
})();if(cljs.core.truth_(temp__4126__auto___77116))
{var error__839__auto___77117 = temp__4126__auto___77116;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77117], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77099_77112,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77115,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77117], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__77102;var children = rest77103;while(true){
var vec__77108 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77108,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77108,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77118 = (function (){var G__77109 = o__840__auto__;return (output_checker77101_77114.cljs$core$IFn$_invoke$arity$1 ? output_checker77101_77114.cljs$core$IFn$_invoke$arity$1(G__77109) : output_checker77101_77114.call(null,G__77109));
})();if(cljs.core.truth_(temp__4126__auto___77118))
{var error__839__auto___77119 = temp__4126__auto___77118;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77119], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77098_77111,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77119], null));
} else
{}
} else
{}
return o__840__auto__;
};
var grid = function (G__77102,var_args){
var rest77103 = null;if (arguments.length > 1) {
  rest77103 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__77102,rest77103);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__77120){
var G__77102 = cljs.core.first(arglist__77120);
var rest77103 = cljs.core.rest(arglist__77120);
return grid__delegate(G__77102,rest77103);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___77110,output_schema77098_77111,input_schema77099_77112,input_checker77100_77113,output_checker77101_77114))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.grid),schema.core.make_fn_schema(output_schema77098_77111,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77099_77112], null)));
var ufv___77131 = schema.utils.use_fn_validation;var output_schema77121_77132 = om_bootstrap.types.Component;var input_schema77122_77133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker77123_77134 = schema.core.checker(input_schema77122_77133);var output_checker77124_77135 = schema.core.checker(output_schema77121_77132);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___77131,output_schema77121_77132,input_schema77122_77133,input_checker77123_77134,output_checker77124_77135){
return (function() { 
var row__delegate = function (G__77125,rest77126){var validate__837__auto__ = ufv___77131.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77136 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__77125,rest77126);var temp__4126__auto___77137 = (function (){var G__77129 = args__838__auto___77136;return (input_checker77123_77134.cljs$core$IFn$_invoke$arity$1 ? input_checker77123_77134.cljs$core$IFn$_invoke$arity$1(G__77129) : input_checker77123_77134.call(null,G__77129));
})();if(cljs.core.truth_(temp__4126__auto___77137))
{var error__839__auto___77138 = temp__4126__auto___77137;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77138], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77122_77133,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77136,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77138], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__77125;var children = rest77126;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77139 = (function (){var G__77130 = o__840__auto__;return (output_checker77124_77135.cljs$core$IFn$_invoke$arity$1 ? output_checker77124_77135.cljs$core$IFn$_invoke$arity$1(G__77130) : output_checker77124_77135.call(null,G__77130));
})();if(cljs.core.truth_(temp__4126__auto___77139))
{var error__839__auto___77140 = temp__4126__auto___77139;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77140], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77121_77132,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77140], null));
} else
{}
} else
{}
return o__840__auto__;
};
var row = function (G__77125,var_args){
var rest77126 = null;if (arguments.length > 1) {
  rest77126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__77125,rest77126);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__77141){
var G__77125 = cljs.core.first(arglist__77141);
var rest77126 = cljs.core.rest(arglist__77141);
return row__delegate(G__77125,rest77126);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___77131,output_schema77121_77132,input_schema77122_77133,input_checker77123_77134,output_checker77124_77135))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.row),schema.core.make_fn_schema(output_schema77121_77132,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77122_77133], null)));
var ufv___77158 = schema.utils.use_fn_validation;var output_schema77142_77159 = om_bootstrap.types.Component;var input_schema77143_77160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker77144_77161 = schema.core.checker(input_schema77143_77160);var output_checker77145_77162 = schema.core.checker(output_schema77142_77159);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___77158,output_schema77142_77159,input_schema77143_77160,input_checker77144_77161,output_checker77145_77162){
return (function() { 
var col__delegate = function (G__77146,rest77147){var validate__837__auto__ = ufv___77158.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77163 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__77146,rest77147);var temp__4126__auto___77164 = (function (){var G__77153 = args__838__auto___77163;return (input_checker77144_77161.cljs$core$IFn$_invoke$arity$1 ? input_checker77144_77161.cljs$core$IFn$_invoke$arity$1(G__77153) : input_checker77144_77161.call(null,G__77153));
})();if(cljs.core.truth_(temp__4126__auto___77164))
{var error__839__auto___77165 = temp__4126__auto___77164;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77165], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77143_77160,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77163,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77165], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__77146;var children = rest77147;while(true){
var vec__77154 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77154,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77154,(1),null);var class$ = om_tools.dom.class_set(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__77154,bs,props,validate__837__auto__,ufv___77158,output_schema77142_77159,input_schema77143_77160,input_checker77144_77161,output_checker77145_77162){
return (function (p__77155){var vec__77156 = p__77155;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77156,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77156,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__77154,bs,props,validate__837__auto__,ufv___77158,output_schema77142_77159,input_schema77143_77160,input_checker77144_77161,output_checker77145_77162))
,cljs.core.select_keys(bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77166 = (function (){var G__77157 = o__840__auto__;return (output_checker77145_77162.cljs$core$IFn$_invoke$arity$1 ? output_checker77145_77162.cljs$core$IFn$_invoke$arity$1(G__77157) : output_checker77145_77162.call(null,G__77157));
})();if(cljs.core.truth_(temp__4126__auto___77166))
{var error__839__auto___77167 = temp__4126__auto___77166;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77167], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77142_77159,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77167], null));
} else
{}
} else
{}
return o__840__auto__;
};
var col = function (G__77146,var_args){
var rest77147 = null;if (arguments.length > 1) {
  rest77147 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__77146,rest77147);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__77168){
var G__77146 = cljs.core.first(arglist__77168);
var rest77147 = cljs.core.rest(arglist__77168);
return col__delegate(G__77146,rest77147);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___77158,output_schema77142_77159,input_schema77143_77160,input_checker77144_77161,output_checker77145_77162))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.grid.col),schema.core.make_fn_schema(output_schema77142_77159,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77143_77160], null)));
//# sourceMappingURL=grid.js.map