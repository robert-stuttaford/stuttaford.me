goog.provide('om_bootstrap.random');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om_bootstrap.mixins');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
var ufv___39059 = schema.utils.use_fn_validation;var output_schema39049_39060 = om_bootstrap.types.Component;var input_schema39050_39061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39051_39062 = schema.core.checker(input_schema39050_39061);var output_checker39052_39063 = schema.core.checker(output_schema39049_39060);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___39059,output_schema39049_39060,input_schema39050_39061,input_checker39051_39062,output_checker39052_39063){
return (function() { 
var jumbotron__delegate = function (G__39053,rest39054){var validate__837__auto__ = ufv___39059.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39064 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39053,rest39054);var temp__4126__auto___39065 = (function (){var G__39057 = args__838__auto___39064;return (input_checker39051_39062.cljs$core$IFn$_invoke$arity$1 ? input_checker39051_39062.cljs$core$IFn$_invoke$arity$1(G__39057) : input_checker39051_39062.call(null,G__39057));
})();if(cljs.core.truth_(temp__4126__auto___39065))
{var error__839__auto___39066 = temp__4126__auto___39065;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39066], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39050_39061,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39064,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39066], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39053;var children = rest39054;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39067 = (function (){var G__39058 = o__840__auto__;return (output_checker39052_39063.cljs$core$IFn$_invoke$arity$1 ? output_checker39052_39063.cljs$core$IFn$_invoke$arity$1(G__39058) : output_checker39052_39063.call(null,G__39058));
})();if(cljs.core.truth_(temp__4126__auto___39067))
{var error__839__auto___39068 = temp__4126__auto___39067;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39068], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39049_39060,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39068], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__39053,var_args){
var rest39054 = null;if (arguments.length > 1) {
  rest39054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__39053,rest39054);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__39069){
var G__39053 = cljs.core.first(arglist__39069);
var rest39054 = cljs.core.rest(arglist__39069);
return jumbotron__delegate(G__39053,rest39054);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___39059,output_schema39049_39060,input_schema39050_39061,input_checker39051_39062,output_checker39052_39063))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema39049_39060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39050_39061], null)));
var ufv___39082 = schema.utils.use_fn_validation;var output_schema39070_39083 = om_bootstrap.types.Component;var input_schema39071_39084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39072_39085 = schema.core.checker(input_schema39071_39084);var output_checker39073_39086 = schema.core.checker(output_schema39070_39083);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___39082,output_schema39070_39083,input_schema39071_39084,input_checker39072_39085,output_checker39073_39086){
return (function() { 
var label__delegate = function (G__39074,rest39075){var validate__837__auto__ = ufv___39082.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39087 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39074,rest39075);var temp__4126__auto___39088 = (function (){var G__39079 = args__838__auto___39087;return (input_checker39072_39085.cljs$core$IFn$_invoke$arity$1 ? input_checker39072_39085.cljs$core$IFn$_invoke$arity$1(G__39079) : input_checker39072_39085.call(null,G__39079));
})();if(cljs.core.truth_(temp__4126__auto___39088))
{var error__839__auto___39089 = temp__4126__auto___39088;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39089], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39071_39084,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39087,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39089], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39074;var children = rest39075;while(true){
var vec__39080 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39080,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39080,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39090 = (function (){var G__39081 = o__840__auto__;return (output_checker39073_39086.cljs$core$IFn$_invoke$arity$1 ? output_checker39073_39086.cljs$core$IFn$_invoke$arity$1(G__39081) : output_checker39073_39086.call(null,G__39081));
})();if(cljs.core.truth_(temp__4126__auto___39090))
{var error__839__auto___39091 = temp__4126__auto___39090;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39091], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39070_39083,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39091], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__39074,var_args){
var rest39075 = null;if (arguments.length > 1) {
  rest39075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__39074,rest39075);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__39092){
var G__39074 = cljs.core.first(arglist__39092);
var rest39075 = cljs.core.rest(arglist__39092);
return label__delegate(G__39074,rest39075);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___39082,output_schema39070_39083,input_schema39071_39084,input_checker39072_39085,output_checker39073_39086))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema39070_39083,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39071_39084], null)));
var ufv___39105 = schema.utils.use_fn_validation;var output_schema39093_39106 = om_bootstrap.types.Component;var input_schema39094_39107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39095_39108 = schema.core.checker(input_schema39094_39107);var output_checker39096_39109 = schema.core.checker(output_schema39093_39106);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___39105,output_schema39093_39106,input_schema39094_39107,input_checker39095_39108,output_checker39096_39109){
return (function() { 
var well__delegate = function (G__39097,rest39098){var validate__837__auto__ = ufv___39105.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39110 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39097,rest39098);var temp__4126__auto___39111 = (function (){var G__39102 = args__838__auto___39110;return (input_checker39095_39108.cljs$core$IFn$_invoke$arity$1 ? input_checker39095_39108.cljs$core$IFn$_invoke$arity$1(G__39102) : input_checker39095_39108.call(null,G__39102));
})();if(cljs.core.truth_(temp__4126__auto___39111))
{var error__839__auto___39112 = temp__4126__auto___39111;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39112], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39094_39107,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39110,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39112], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39097;var children = rest39098;while(true){
var vec__39103 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39103,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39103,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39113 = (function (){var G__39104 = o__840__auto__;return (output_checker39096_39109.cljs$core$IFn$_invoke$arity$1 ? output_checker39096_39109.cljs$core$IFn$_invoke$arity$1(G__39104) : output_checker39096_39109.call(null,G__39104));
})();if(cljs.core.truth_(temp__4126__auto___39113))
{var error__839__auto___39114 = temp__4126__auto___39113;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39114], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39093_39106,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39114], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__39097,var_args){
var rest39098 = null;if (arguments.length > 1) {
  rest39098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__39097,rest39098);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__39115){
var G__39097 = cljs.core.first(arglist__39115);
var rest39098 = cljs.core.rest(arglist__39115);
return well__delegate(G__39097,rest39098);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___39105,output_schema39093_39106,input_schema39094_39107,input_checker39095_39108,output_checker39096_39109))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema39093_39106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39094_39107], null)));
var ufv___39126 = schema.utils.use_fn_validation;var output_schema39116_39127 = om_bootstrap.types.Component;var input_schema39117_39128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39118_39129 = schema.core.checker(input_schema39117_39128);var output_checker39119_39130 = schema.core.checker(output_schema39116_39127);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___39126,output_schema39116_39127,input_schema39117_39128,input_checker39118_39129,output_checker39119_39130){
return (function() { 
var page_header__delegate = function (G__39120,rest39121){var validate__837__auto__ = ufv___39126.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39131 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39120,rest39121);var temp__4126__auto___39132 = (function (){var G__39124 = args__838__auto___39131;return (input_checker39118_39129.cljs$core$IFn$_invoke$arity$1 ? input_checker39118_39129.cljs$core$IFn$_invoke$arity$1(G__39124) : input_checker39118_39129.call(null,G__39124));
})();if(cljs.core.truth_(temp__4126__auto___39132))
{var error__839__auto___39133 = temp__4126__auto___39132;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39133], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39117_39128,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39131,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39133], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39120;var children = rest39121;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39134 = (function (){var G__39125 = o__840__auto__;return (output_checker39119_39130.cljs$core$IFn$_invoke$arity$1 ? output_checker39119_39130.cljs$core$IFn$_invoke$arity$1(G__39125) : output_checker39119_39130.call(null,G__39125));
})();if(cljs.core.truth_(temp__4126__auto___39134))
{var error__839__auto___39135 = temp__4126__auto___39134;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39135], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39116_39127,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39135], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__39120,var_args){
var rest39121 = null;if (arguments.length > 1) {
  rest39121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__39120,rest39121);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__39136){
var G__39120 = cljs.core.first(arglist__39136);
var rest39121 = cljs.core.rest(arglist__39136);
return page_header__delegate(G__39120,rest39121);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___39126,output_schema39116_39127,input_schema39117_39128,input_checker39118_39129,output_checker39119_39130))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema39116_39127,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39117_39128], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___39151 = schema.utils.use_fn_validation;var output_schema39137_39152 = om_bootstrap.types.Component;var input_schema39138_39153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39139_39154 = schema.core.checker(input_schema39138_39153);var output_checker39140_39155 = schema.core.checker(output_schema39137_39152);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___39151,output_schema39137_39152,input_schema39138_39153,input_checker39139_39154,output_checker39140_39155){
return (function() { 
var tooltip__delegate = function (G__39141,rest39142){var validate__837__auto__ = ufv___39151.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39156 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39141,rest39142);var temp__4126__auto___39157 = (function (){var G__39147 = args__838__auto___39156;return (input_checker39139_39154.cljs$core$IFn$_invoke$arity$1 ? input_checker39139_39154.cljs$core$IFn$_invoke$arity$1(G__39147) : input_checker39139_39154.call(null,G__39147));
})();if(cljs.core.truth_(temp__4126__auto___39157))
{var error__839__auto___39158 = temp__4126__auto___39157;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39158], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39138_39153,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39156,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39158], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39141;var children = rest39142;while(true){
var vec__39148 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19357__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__39149 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__39149);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39159 = (function (){var G__39150 = o__840__auto__;return (output_checker39140_39155.cljs$core$IFn$_invoke$arity$1 ? output_checker39140_39155.cljs$core$IFn$_invoke$arity$1(G__39150) : output_checker39140_39155.call(null,G__39150));
})();if(cljs.core.truth_(temp__4126__auto___39159))
{var error__839__auto___39160 = temp__4126__auto___39159;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39160], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39137_39152,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39160], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__39141,var_args){
var rest39142 = null;if (arguments.length > 1) {
  rest39142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__39141,rest39142);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__39161){
var G__39141 = cljs.core.first(arglist__39161);
var rest39142 = cljs.core.rest(arglist__39161);
return tooltip__delegate(G__39141,rest39142);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___39151,output_schema39137_39152,input_schema39138_39153,input_checker39139_39154,output_checker39140_39155))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema39137_39152,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39138_39153], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__24143__auto__ = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));(descriptor__24143__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__24143__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__24172__auto__,owner39162,p__39164){var vec__39190 = p__39164;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39190,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39194 = schema.core.Any;var input_schema39195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39191","map39191",1086681014,null))], null);var input_checker39196 = schema.core.checker(input_schema39195);var output_checker39197 = schema.core.checker(output_schema39194);return schema.core.schematize_fn(((function (ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__){
return (function fnk39193(G__39198){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39198], null);var temp__4126__auto___39216 = (function (){var G__39207 = args__838__auto___39215;return (input_checker39196.cljs$core$IFn$_invoke$arity$1 ? input_checker39196.cljs$core$IFn$_invoke$arity$1(G__39207) : input_checker39196.call(null,G__39207));
})();if(cljs.core.truth_(temp__4126__auto___39216))
{var error__839__auto___39217 = temp__4126__auto___39216;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39193","fnk39193",-192442458,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39217], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39195,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39215,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39217], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39191 = G__39198;while(true){
if(cljs.core.map_QMARK_(map39191))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39191], 0))));
}
var map39192 = plumbing.fnk.schema.safe_get(map39191,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map39192,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map39192,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map39192,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39191,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t39208 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t39208 = (function (map39192,owner,opts__24173__auto__,props,fnk39193,G__39198,children,input_schema39195,owner39162,output_checker39197,data__24172__auto__,alert_STAR_,vec__39190,map39191,p__39164,input_checker39196,validate__837__auto__,ufv__,bs,output_schema39194,meta39209){
this.map39192 = map39192;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.props = props;
this.fnk39193 = fnk39193;
this.G__39198 = G__39198;
this.children = children;
this.input_schema39195 = input_schema39195;
this.owner39162 = owner39162;
this.output_checker39197 = output_checker39197;
this.data__24172__auto__ = data__24172__auto__;
this.alert_STAR_ = alert_STAR_;
this.vec__39190 = vec__39190;
this.map39191 = map39191;
this.p__39164 = p__39164;
this.input_checker39196 = input_checker39196;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.bs = bs;
this.output_schema39194 = output_schema39194;
this.meta39209 = meta39209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t39208.cljs$lang$type = true;
om_bootstrap.random.t39208.cljs$lang$ctorStr = "om-bootstrap.random/t39208";
om_bootstrap.random.t39208.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"om-bootstrap.random/t39208");
});})(owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__))
;
om_bootstrap.random.t39208.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t39208.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__))
;
om_bootstrap.random.t39208.prototype.om$core$IRender$ = true;
om_bootstrap.random.t39208.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__39211 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__39212 = "&times;";return React.DOM.button(G__39211,G__39212);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__))
;
om_bootstrap.random.t39208.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t39208.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19335__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19335__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19335__auto__;
}
})()))
{var G__39213 = self__.owner;G__39213.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__39213;
} else
{return null;
}
});})(owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__))
;
om_bootstrap.random.t39208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__){
return (function (_39210){var self__ = this;
var _39210__$1 = this;return self__.meta39209;
});})(owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__))
;
om_bootstrap.random.t39208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__){
return (function (_39210,meta39209__$1){var self__ = this;
var _39210__$1 = this;return (new om_bootstrap.random.t39208(self__.map39192,self__.owner,self__.opts__24173__auto__,self__.props,self__.fnk39193,self__.G__39198,self__.children,self__.input_schema39195,self__.owner39162,self__.output_checker39197,self__.data__24172__auto__,self__.alert_STAR_,self__.vec__39190,self__.map39191,self__.p__39164,self__.input_checker39196,self__.validate__837__auto__,self__.ufv__,self__.bs,self__.output_schema39194,meta39209__$1));
});})(owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__))
;
om_bootstrap.random.__GT_t39208 = ((function (owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__){
return (function __GT_t39208(map39192__$1,owner__$1,opts__24173__auto____$1,props__$1,fnk39193__$1,G__39198__$1,children__$1,input_schema39195__$1,owner39162__$1,output_checker39197__$1,data__24172__auto____$1,alert_STAR___$1,vec__39190__$1,map39191__$1,p__39164__$1,input_checker39196__$1,validate__837__auto____$1,ufv____$1,bs__$1,output_schema39194__$1,meta39209){return (new om_bootstrap.random.t39208(map39192__$1,owner__$1,opts__24173__auto____$1,props__$1,fnk39193__$1,G__39198__$1,children__$1,input_schema39195__$1,owner39162__$1,output_checker39197__$1,data__24172__auto____$1,alert_STAR___$1,vec__39190__$1,map39191__$1,p__39164__$1,input_checker39196__$1,validate__837__auto____$1,ufv____$1,bs__$1,output_schema39194__$1,meta39209));
});})(owner,children,props,bs,map39192,validate__837__auto__,ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__))
;
}
return (new om_bootstrap.random.t39208(map39192,owner,opts__24173__auto__,props,fnk39193,G__39198,children,input_schema39195,owner39162,output_checker39197,data__24172__auto__,alert_STAR_,vec__39190,map39191,p__39164,input_checker39196,validate__837__auto__,ufv__,bs,output_schema39194,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39218 = (function (){var G__39214 = o__840__auto__;return (output_checker39197.cljs$core$IFn$_invoke$arity$1 ? output_checker39197.cljs$core$IFn$_invoke$arity$1(G__39214) : output_checker39197.call(null,G__39214));
})();if(cljs.core.truth_(temp__4126__auto___39218))
{var error__839__auto___39219 = temp__4126__auto___39218;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39193","fnk39193",-192442458,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39219], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39194,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39219], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39194,input_schema39195,input_checker39196,output_checker39197,vec__39190,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema39194,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39195], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39162,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var alert_STAR_ = function (data__24172__auto__,owner39162,var_args){
var p__39164 = null;if (arguments.length > 2) {
  p__39164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24172__auto__,owner39162,p__39164);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__39220){
var data__24172__auto__ = cljs.core.first(arglist__39220);
arglist__39220 = cljs.core.next(arglist__39220);
var owner39162 = cljs.core.first(arglist__39220);
var p__39164 = cljs.core.rest(arglist__39220);
return alert_STAR___delegate(data__24172__auto__,owner39162,p__39164);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24141__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24141__auto__,m39163){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24141__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m39163], 0)));
});
__GT_alert_STAR_ = function(cursor__24141__auto__,m39163){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24141__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24141__auto__,m39163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___39233 = schema.utils.use_fn_validation;var output_schema39221_39234 = om_bootstrap.types.Component;var input_schema39222_39235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39223_39236 = schema.core.checker(input_schema39222_39235);var output_checker39224_39237 = schema.core.checker(output_schema39221_39234);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___39233,output_schema39221_39234,input_schema39222_39235,input_checker39223_39236,output_checker39224_39237){
return (function() { 
var alert__$1__delegate = function (G__39225,rest39226){var validate__837__auto__ = ufv___39233.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39238 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39225,rest39226);var temp__4126__auto___39239 = (function (){var G__39230 = args__838__auto___39238;return (input_checker39223_39236.cljs$core$IFn$_invoke$arity$1 ? input_checker39223_39236.cljs$core$IFn$_invoke$arity$1(G__39230) : input_checker39223_39236.call(null,G__39230));
})();if(cljs.core.truth_(temp__4126__auto___39239))
{var error__839__auto___39240 = temp__4126__auto___39239;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39240], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39222_39235,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39238,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39240], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39225;var children = rest39226;while(true){
var vec__39231 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39231,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39231,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39241 = (function (){var G__39232 = o__840__auto__;return (output_checker39224_39237.cljs$core$IFn$_invoke$arity$1 ? output_checker39224_39237.cljs$core$IFn$_invoke$arity$1(G__39232) : output_checker39224_39237.call(null,G__39232));
})();if(cljs.core.truth_(temp__4126__auto___39241))
{var error__839__auto___39242 = temp__4126__auto___39241;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39242], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39221_39234,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39242], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__39225,var_args){
var rest39226 = null;if (arguments.length > 1) {
  rest39226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__39225,rest39226);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__39243){
var G__39225 = cljs.core.first(arglist__39243);
var rest39226 = cljs.core.rest(arglist__39243);
return alert__$1__delegate(G__39225,rest39226);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___39233,output_schema39221_39234,input_schema39222_39235,input_checker39223_39236,output_checker39224_39237))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema39221_39234,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39222_39235], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___39258 = schema.utils.use_fn_validation;var output_schema39244_39259 = om_bootstrap.types.Component;var input_schema39245_39260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39246_39261 = schema.core.checker(input_schema39245_39260);var output_checker39247_39262 = schema.core.checker(output_schema39244_39259);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___39258,output_schema39244_39259,input_schema39245_39260,input_checker39246_39261,output_checker39247_39262){
return (function() { 
var popover__delegate = function (G__39248,rest39249){var validate__837__auto__ = ufv___39258.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39263 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39248,rest39249);var temp__4126__auto___39264 = (function (){var G__39254 = args__838__auto___39263;return (input_checker39246_39261.cljs$core$IFn$_invoke$arity$1 ? input_checker39246_39261.cljs$core$IFn$_invoke$arity$1(G__39254) : input_checker39246_39261.call(null,G__39254));
})();if(cljs.core.truth_(temp__4126__auto___39264))
{var error__839__auto___39265 = temp__4126__auto___39264;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39265], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39245_39260,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39263,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39265], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39248;var children = rest39249;while(true){
var vec__39255 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39255,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39255,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19357__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__39256 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__39256);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39266 = (function (){var G__39257 = o__840__auto__;return (output_checker39247_39262.cljs$core$IFn$_invoke$arity$1 ? output_checker39247_39262.cljs$core$IFn$_invoke$arity$1(G__39257) : output_checker39247_39262.call(null,G__39257));
})();if(cljs.core.truth_(temp__4126__auto___39266))
{var error__839__auto___39267 = temp__4126__auto___39266;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39267], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39244_39259,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39267], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__39248,var_args){
var rest39249 = null;if (arguments.length > 1) {
  rest39249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__39248,rest39249);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__39268){
var G__39248 = cljs.core.first(arglist__39268);
var rest39249 = cljs.core.rest(arglist__39268);
return popover__delegate(G__39248,rest39249);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___39258,output_schema39244_39259,input_schema39245_39260,input_checker39246_39261,output_checker39247_39262))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema39244_39259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39245_39260], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___39281 = schema.utils.use_fn_validation;var output_schema39269_39282 = om_bootstrap.types.Component;var input_schema39270_39283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39271_39284 = schema.core.checker(input_schema39270_39283);var output_checker39272_39285 = schema.core.checker(output_schema39269_39282);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___39281,output_schema39269_39282,input_schema39270_39283,input_checker39271_39284,output_checker39272_39285){
return (function() { 
var badge__delegate = function (G__39273,rest39274){var validate__837__auto__ = ufv___39281.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39286 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39273,rest39274);var temp__4126__auto___39287 = (function (){var G__39278 = args__838__auto___39286;return (input_checker39271_39284.cljs$core$IFn$_invoke$arity$1 ? input_checker39271_39284.cljs$core$IFn$_invoke$arity$1(G__39278) : input_checker39271_39284.call(null,G__39278));
})();if(cljs.core.truth_(temp__4126__auto___39287))
{var error__839__auto___39288 = temp__4126__auto___39287;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39288], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39270_39283,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39286,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39288], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39273;var children = rest39274;while(true){
var vec__39279 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39279,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39279,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39289 = (function (){var G__39280 = o__840__auto__;return (output_checker39272_39285.cljs$core$IFn$_invoke$arity$1 ? output_checker39272_39285.cljs$core$IFn$_invoke$arity$1(G__39280) : output_checker39272_39285.call(null,G__39280));
})();if(cljs.core.truth_(temp__4126__auto___39289))
{var error__839__auto___39290 = temp__4126__auto___39289;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39290], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39269_39282,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39290], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__39273,var_args){
var rest39274 = null;if (arguments.length > 1) {
  rest39274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__39273,rest39274);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__39291){
var G__39273 = cljs.core.first(arglist__39291);
var rest39274 = cljs.core.rest(arglist__39291);
return badge__delegate(G__39273,rest39274);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___39281,output_schema39269_39282,input_schema39270_39283,input_checker39271_39284,output_checker39272_39285))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema39269_39282,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39270_39283], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___39304 = schema.utils.use_fn_validation;var output_schema39292_39305 = om_bootstrap.types.Component;var input_schema39293_39306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39294_39307 = schema.core.checker(input_schema39293_39306);var output_checker39295_39308 = schema.core.checker(output_schema39292_39305);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___39304,output_schema39292_39305,input_schema39293_39306,input_checker39294_39307,output_checker39295_39308){
return (function() { 
var glyphicon__delegate = function (G__39296,rest39297){var validate__837__auto__ = ufv___39304.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39309 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39296,rest39297);var temp__4126__auto___39310 = (function (){var G__39301 = args__838__auto___39309;return (input_checker39294_39307.cljs$core$IFn$_invoke$arity$1 ? input_checker39294_39307.cljs$core$IFn$_invoke$arity$1(G__39301) : input_checker39294_39307.call(null,G__39301));
})();if(cljs.core.truth_(temp__4126__auto___39310))
{var error__839__auto___39311 = temp__4126__auto___39310;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39311], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39293_39306,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39309,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39311], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39296;var children = rest39297;while(true){
var vec__39302 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39302,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39302,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39312 = (function (){var G__39303 = o__840__auto__;return (output_checker39295_39308.cljs$core$IFn$_invoke$arity$1 ? output_checker39295_39308.cljs$core$IFn$_invoke$arity$1(G__39303) : output_checker39295_39308.call(null,G__39303));
})();if(cljs.core.truth_(temp__4126__auto___39312))
{var error__839__auto___39313 = temp__4126__auto___39312;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39313], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39292_39305,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39313], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__39296,var_args){
var rest39297 = null;if (arguments.length > 1) {
  rest39297 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__39296,rest39297);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__39314){
var G__39296 = cljs.core.first(arglist__39314);
var rest39297 = cljs.core.rest(arglist__39314);
return glyphicon__delegate(G__39296,rest39297);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___39304,output_schema39292_39305,input_schema39293_39306,input_checker39294_39307,output_checker39295_39308))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema39292_39305,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39293_39306], null)));
//# sourceMappingURL=random.js.map