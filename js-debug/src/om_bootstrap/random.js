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
var ufv___74972 = schema.utils.use_fn_validation;var output_schema74962_74973 = om_bootstrap.types.Component;var input_schema74963_74974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker74964_74975 = schema.core.checker(input_schema74963_74974);var output_checker74965_74976 = schema.core.checker(output_schema74962_74973);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___74972,output_schema74962_74973,input_schema74963_74974,input_checker74964_74975,output_checker74965_74976){
return (function() { 
var jumbotron__delegate = function (G__74966,rest74967){var validate__837__auto__ = ufv___74972.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74977 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__74966,rest74967);var temp__4126__auto___74978 = (function (){var G__74970 = args__838__auto___74977;return (input_checker74964_74975.cljs$core$IFn$_invoke$arity$1 ? input_checker74964_74975.cljs$core$IFn$_invoke$arity$1(G__74970) : input_checker74964_74975.call(null,G__74970));
})();if(cljs.core.truth_(temp__4126__auto___74978))
{var error__839__auto___74979 = temp__4126__auto___74978;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74979], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74963_74974,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74977,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74979], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__74966;var children = rest74967;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74980 = (function (){var G__74971 = o__840__auto__;return (output_checker74965_74976.cljs$core$IFn$_invoke$arity$1 ? output_checker74965_74976.cljs$core$IFn$_invoke$arity$1(G__74971) : output_checker74965_74976.call(null,G__74971));
})();if(cljs.core.truth_(temp__4126__auto___74980))
{var error__839__auto___74981 = temp__4126__auto___74980;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74981], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74962_74973,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74981], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__74966,var_args){
var rest74967 = null;if (arguments.length > 1) {
  rest74967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__74966,rest74967);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__74982){
var G__74966 = cljs.core.first(arglist__74982);
var rest74967 = cljs.core.rest(arglist__74982);
return jumbotron__delegate(G__74966,rest74967);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___74972,output_schema74962_74973,input_schema74963_74974,input_checker74964_74975,output_checker74965_74976))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema74962_74973,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74963_74974], null)));
var ufv___74995 = schema.utils.use_fn_validation;var output_schema74983_74996 = om_bootstrap.types.Component;var input_schema74984_74997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker74985_74998 = schema.core.checker(input_schema74984_74997);var output_checker74986_74999 = schema.core.checker(output_schema74983_74996);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___74995,output_schema74983_74996,input_schema74984_74997,input_checker74985_74998,output_checker74986_74999){
return (function() { 
var label__delegate = function (G__74987,rest74988){var validate__837__auto__ = ufv___74995.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75000 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__74987,rest74988);var temp__4126__auto___75001 = (function (){var G__74992 = args__838__auto___75000;return (input_checker74985_74998.cljs$core$IFn$_invoke$arity$1 ? input_checker74985_74998.cljs$core$IFn$_invoke$arity$1(G__74992) : input_checker74985_74998.call(null,G__74992));
})();if(cljs.core.truth_(temp__4126__auto___75001))
{var error__839__auto___75002 = temp__4126__auto___75001;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75002], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74984_74997,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75000,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75002], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__74987;var children = rest74988;while(true){
var vec__74993 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74993,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74993,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75003 = (function (){var G__74994 = o__840__auto__;return (output_checker74986_74999.cljs$core$IFn$_invoke$arity$1 ? output_checker74986_74999.cljs$core$IFn$_invoke$arity$1(G__74994) : output_checker74986_74999.call(null,G__74994));
})();if(cljs.core.truth_(temp__4126__auto___75003))
{var error__839__auto___75004 = temp__4126__auto___75003;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75004], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74983_74996,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75004], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__74987,var_args){
var rest74988 = null;if (arguments.length > 1) {
  rest74988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__74987,rest74988);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__75005){
var G__74987 = cljs.core.first(arglist__75005);
var rest74988 = cljs.core.rest(arglist__75005);
return label__delegate(G__74987,rest74988);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___74995,output_schema74983_74996,input_schema74984_74997,input_checker74985_74998,output_checker74986_74999))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema74983_74996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74984_74997], null)));
var ufv___75018 = schema.utils.use_fn_validation;var output_schema75006_75019 = om_bootstrap.types.Component;var input_schema75007_75020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker75008_75021 = schema.core.checker(input_schema75007_75020);var output_checker75009_75022 = schema.core.checker(output_schema75006_75019);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___75018,output_schema75006_75019,input_schema75007_75020,input_checker75008_75021,output_checker75009_75022){
return (function() { 
var well__delegate = function (G__75010,rest75011){var validate__837__auto__ = ufv___75018.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75023 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__75010,rest75011);var temp__4126__auto___75024 = (function (){var G__75015 = args__838__auto___75023;return (input_checker75008_75021.cljs$core$IFn$_invoke$arity$1 ? input_checker75008_75021.cljs$core$IFn$_invoke$arity$1(G__75015) : input_checker75008_75021.call(null,G__75015));
})();if(cljs.core.truth_(temp__4126__auto___75024))
{var error__839__auto___75025 = temp__4126__auto___75024;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75025], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75007_75020,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75023,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75025], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75010;var children = rest75011;while(true){
var vec__75016 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75016,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75016,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75026 = (function (){var G__75017 = o__840__auto__;return (output_checker75009_75022.cljs$core$IFn$_invoke$arity$1 ? output_checker75009_75022.cljs$core$IFn$_invoke$arity$1(G__75017) : output_checker75009_75022.call(null,G__75017));
})();if(cljs.core.truth_(temp__4126__auto___75026))
{var error__839__auto___75027 = temp__4126__auto___75026;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75027], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75006_75019,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75027], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__75010,var_args){
var rest75011 = null;if (arguments.length > 1) {
  rest75011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__75010,rest75011);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__75028){
var G__75010 = cljs.core.first(arglist__75028);
var rest75011 = cljs.core.rest(arglist__75028);
return well__delegate(G__75010,rest75011);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___75018,output_schema75006_75019,input_schema75007_75020,input_checker75008_75021,output_checker75009_75022))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema75006_75019,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75007_75020], null)));
var ufv___75039 = schema.utils.use_fn_validation;var output_schema75029_75040 = om_bootstrap.types.Component;var input_schema75030_75041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker75031_75042 = schema.core.checker(input_schema75030_75041);var output_checker75032_75043 = schema.core.checker(output_schema75029_75040);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___75039,output_schema75029_75040,input_schema75030_75041,input_checker75031_75042,output_checker75032_75043){
return (function() { 
var page_header__delegate = function (G__75033,rest75034){var validate__837__auto__ = ufv___75039.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75044 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__75033,rest75034);var temp__4126__auto___75045 = (function (){var G__75037 = args__838__auto___75044;return (input_checker75031_75042.cljs$core$IFn$_invoke$arity$1 ? input_checker75031_75042.cljs$core$IFn$_invoke$arity$1(G__75037) : input_checker75031_75042.call(null,G__75037));
})();if(cljs.core.truth_(temp__4126__auto___75045))
{var error__839__auto___75046 = temp__4126__auto___75045;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75046], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75030_75041,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75044,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75046], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75033;var children = rest75034;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75047 = (function (){var G__75038 = o__840__auto__;return (output_checker75032_75043.cljs$core$IFn$_invoke$arity$1 ? output_checker75032_75043.cljs$core$IFn$_invoke$arity$1(G__75038) : output_checker75032_75043.call(null,G__75038));
})();if(cljs.core.truth_(temp__4126__auto___75047))
{var error__839__auto___75048 = temp__4126__auto___75047;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75048], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75029_75040,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75048], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__75033,var_args){
var rest75034 = null;if (arguments.length > 1) {
  rest75034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__75033,rest75034);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__75049){
var G__75033 = cljs.core.first(arglist__75049);
var rest75034 = cljs.core.rest(arglist__75049);
return page_header__delegate(G__75033,rest75034);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___75039,output_schema75029_75040,input_schema75030_75041,input_checker75031_75042,output_checker75032_75043))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema75029_75040,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75030_75041], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___75064 = schema.utils.use_fn_validation;var output_schema75050_75065 = om_bootstrap.types.Component;var input_schema75051_75066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker75052_75067 = schema.core.checker(input_schema75051_75066);var output_checker75053_75068 = schema.core.checker(output_schema75050_75065);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___75064,output_schema75050_75065,input_schema75051_75066,input_checker75052_75067,output_checker75053_75068){
return (function() { 
var tooltip__delegate = function (G__75054,rest75055){var validate__837__auto__ = ufv___75064.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75069 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__75054,rest75055);var temp__4126__auto___75070 = (function (){var G__75060 = args__838__auto___75069;return (input_checker75052_75067.cljs$core$IFn$_invoke$arity$1 ? input_checker75052_75067.cljs$core$IFn$_invoke$arity$1(G__75060) : input_checker75052_75067.call(null,G__75060));
})();if(cljs.core.truth_(temp__4126__auto___75070))
{var error__839__auto___75071 = temp__4126__auto___75070;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75071], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75051_75066,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75069,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75071], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75054;var children = rest75055;while(true){
var vec__75061 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75061,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75061,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19711__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__75062 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__75062);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75072 = (function (){var G__75063 = o__840__auto__;return (output_checker75053_75068.cljs$core$IFn$_invoke$arity$1 ? output_checker75053_75068.cljs$core$IFn$_invoke$arity$1(G__75063) : output_checker75053_75068.call(null,G__75063));
})();if(cljs.core.truth_(temp__4126__auto___75072))
{var error__839__auto___75073 = temp__4126__auto___75072;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75073], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75050_75065,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75073], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__75054,var_args){
var rest75055 = null;if (arguments.length > 1) {
  rest75055 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__75054,rest75055);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__75074){
var G__75054 = cljs.core.first(arglist__75074);
var rest75055 = cljs.core.rest(arglist__75074);
return tooltip__delegate(G__75054,rest75055);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___75064,output_schema75050_75065,input_schema75051_75066,input_checker75052_75067,output_checker75053_75068))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema75050_75065,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75051_75066], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__24553__auto__ = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));(descriptor__24553__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__24553__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__24582__auto__,owner75075,p__75077){var vec__75103 = p__75077;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75103,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema75107 = schema.core.Any;var input_schema75108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map75104","map75104",-570122028,null))], null);var input_checker75109 = schema.core.checker(input_schema75108);var output_checker75110 = schema.core.checker(output_schema75107);return schema.core.schematize_fn(((function (ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__){
return (function fnk75106(G__75111){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75111], null);var temp__4126__auto___75129 = (function (){var G__75120 = args__838__auto___75128;return (input_checker75109.cljs$core$IFn$_invoke$arity$1 ? input_checker75109.cljs$core$IFn$_invoke$arity$1(G__75120) : input_checker75109.call(null,G__75120));
})();if(cljs.core.truth_(temp__4126__auto___75129))
{var error__839__auto___75130 = temp__4126__auto___75129;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75106","fnk75106",1703602106,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75130], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75108,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75128,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75130], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map75104 = G__75111;while(true){
if(cljs.core.map_QMARK_(map75104))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map75104], 0))));
}
var map75105 = plumbing.fnk.schema.safe_get(map75104,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map75105,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map75105,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map75105,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map75104,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t75121 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t75121 = (function (opts__24583__auto__,owner,props,children,G__75111,owner75075,input_schema75108,p__75077,data__24582__auto__,alert_STAR_,map75104,output_schema75107,map75105,fnk75106,validate__837__auto__,output_checker75110,ufv__,bs,input_checker75109,vec__75103,meta75122){
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.props = props;
this.children = children;
this.G__75111 = G__75111;
this.owner75075 = owner75075;
this.input_schema75108 = input_schema75108;
this.p__75077 = p__75077;
this.data__24582__auto__ = data__24582__auto__;
this.alert_STAR_ = alert_STAR_;
this.map75104 = map75104;
this.output_schema75107 = output_schema75107;
this.map75105 = map75105;
this.fnk75106 = fnk75106;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker75110 = output_checker75110;
this.ufv__ = ufv__;
this.bs = bs;
this.input_checker75109 = input_checker75109;
this.vec__75103 = vec__75103;
this.meta75122 = meta75122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t75121.cljs$lang$type = true;
om_bootstrap.random.t75121.cljs$lang$ctorStr = "om-bootstrap.random/t75121";
om_bootstrap.random.t75121.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"om-bootstrap.random/t75121");
});})(owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__))
;
om_bootstrap.random.t75121.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t75121.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__))
;
om_bootstrap.random.t75121.prototype.om$core$IRender$ = true;
om_bootstrap.random.t75121.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__75124 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__75125 = "&times;";return React.DOM.button(G__75124,G__75125);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__))
;
om_bootstrap.random.t75121.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t75121.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19697__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19697__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19697__auto__;
}
})()))
{var G__75126 = self__.owner;G__75126.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__75126;
} else
{return null;
}
});})(owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__))
;
om_bootstrap.random.t75121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__){
return (function (_75123){var self__ = this;
var _75123__$1 = this;return self__.meta75122;
});})(owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__))
;
om_bootstrap.random.t75121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__){
return (function (_75123,meta75122__$1){var self__ = this;
var _75123__$1 = this;return (new om_bootstrap.random.t75121(self__.opts__24583__auto__,self__.owner,self__.props,self__.children,self__.G__75111,self__.owner75075,self__.input_schema75108,self__.p__75077,self__.data__24582__auto__,self__.alert_STAR_,self__.map75104,self__.output_schema75107,self__.map75105,self__.fnk75106,self__.validate__837__auto__,self__.output_checker75110,self__.ufv__,self__.bs,self__.input_checker75109,self__.vec__75103,meta75122__$1));
});})(owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__))
;
om_bootstrap.random.__GT_t75121 = ((function (owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__){
return (function __GT_t75121(opts__24583__auto____$1,owner__$1,props__$1,children__$1,G__75111__$1,owner75075__$1,input_schema75108__$1,p__75077__$1,data__24582__auto____$1,alert_STAR___$1,map75104__$1,output_schema75107__$1,map75105__$1,fnk75106__$1,validate__837__auto____$1,output_checker75110__$1,ufv____$1,bs__$1,input_checker75109__$1,vec__75103__$1,meta75122){return (new om_bootstrap.random.t75121(opts__24583__auto____$1,owner__$1,props__$1,children__$1,G__75111__$1,owner75075__$1,input_schema75108__$1,p__75077__$1,data__24582__auto____$1,alert_STAR___$1,map75104__$1,output_schema75107__$1,map75105__$1,fnk75106__$1,validate__837__auto____$1,output_checker75110__$1,ufv____$1,bs__$1,input_checker75109__$1,vec__75103__$1,meta75122));
});})(owner,children,props,bs,map75105,validate__837__auto__,ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__))
;
}
return (new om_bootstrap.random.t75121(opts__24583__auto__,owner,props,children,G__75111,owner75075,input_schema75108,p__75077,data__24582__auto__,alert_STAR_,map75104,output_schema75107,map75105,fnk75106,validate__837__auto__,output_checker75110,ufv__,bs,input_checker75109,vec__75103,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75131 = (function (){var G__75127 = o__840__auto__;return (output_checker75110.cljs$core$IFn$_invoke$arity$1 ? output_checker75110.cljs$core$IFn$_invoke$arity$1(G__75127) : output_checker75110.call(null,G__75127));
})();if(cljs.core.truth_(temp__4126__auto___75131))
{var error__839__auto___75132 = temp__4126__auto___75131;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75106","fnk75106",1703602106,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75132], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75107,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75132], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema75107,input_schema75108,input_checker75109,output_checker75110,vec__75103,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema75107,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75108], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner75075,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var alert_STAR_ = function (data__24582__auto__,owner75075,var_args){
var p__75077 = null;if (arguments.length > 2) {
  p__75077 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24582__auto__,owner75075,p__75077);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__75133){
var data__24582__auto__ = cljs.core.first(arglist__75133);
arglist__75133 = cljs.core.next(arglist__75133);
var owner75075 = cljs.core.first(arglist__75133);
var p__75077 = cljs.core.rest(arglist__75133);
return alert_STAR___delegate(data__24582__auto__,owner75075,p__75077);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24551__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24551__auto__,m75076){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24551__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m75076], 0)));
});
__GT_alert_STAR_ = function(cursor__24551__auto__,m75076){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24551__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24551__auto__,m75076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___75146 = schema.utils.use_fn_validation;var output_schema75134_75147 = om_bootstrap.types.Component;var input_schema75135_75148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker75136_75149 = schema.core.checker(input_schema75135_75148);var output_checker75137_75150 = schema.core.checker(output_schema75134_75147);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___75146,output_schema75134_75147,input_schema75135_75148,input_checker75136_75149,output_checker75137_75150){
return (function() { 
var alert__$1__delegate = function (G__75138,rest75139){var validate__837__auto__ = ufv___75146.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75151 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__75138,rest75139);var temp__4126__auto___75152 = (function (){var G__75143 = args__838__auto___75151;return (input_checker75136_75149.cljs$core$IFn$_invoke$arity$1 ? input_checker75136_75149.cljs$core$IFn$_invoke$arity$1(G__75143) : input_checker75136_75149.call(null,G__75143));
})();if(cljs.core.truth_(temp__4126__auto___75152))
{var error__839__auto___75153 = temp__4126__auto___75152;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75153], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75135_75148,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75151,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75153], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75138;var children = rest75139;while(true){
var vec__75144 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75144,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75144,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75154 = (function (){var G__75145 = o__840__auto__;return (output_checker75137_75150.cljs$core$IFn$_invoke$arity$1 ? output_checker75137_75150.cljs$core$IFn$_invoke$arity$1(G__75145) : output_checker75137_75150.call(null,G__75145));
})();if(cljs.core.truth_(temp__4126__auto___75154))
{var error__839__auto___75155 = temp__4126__auto___75154;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75155], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75134_75147,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75155], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__75138,var_args){
var rest75139 = null;if (arguments.length > 1) {
  rest75139 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__75138,rest75139);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__75156){
var G__75138 = cljs.core.first(arglist__75156);
var rest75139 = cljs.core.rest(arglist__75156);
return alert__$1__delegate(G__75138,rest75139);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___75146,output_schema75134_75147,input_schema75135_75148,input_checker75136_75149,output_checker75137_75150))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema75134_75147,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75135_75148], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___75171 = schema.utils.use_fn_validation;var output_schema75157_75172 = om_bootstrap.types.Component;var input_schema75158_75173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker75159_75174 = schema.core.checker(input_schema75158_75173);var output_checker75160_75175 = schema.core.checker(output_schema75157_75172);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___75171,output_schema75157_75172,input_schema75158_75173,input_checker75159_75174,output_checker75160_75175){
return (function() { 
var popover__delegate = function (G__75161,rest75162){var validate__837__auto__ = ufv___75171.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75176 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__75161,rest75162);var temp__4126__auto___75177 = (function (){var G__75167 = args__838__auto___75176;return (input_checker75159_75174.cljs$core$IFn$_invoke$arity$1 ? input_checker75159_75174.cljs$core$IFn$_invoke$arity$1(G__75167) : input_checker75159_75174.call(null,G__75167));
})();if(cljs.core.truth_(temp__4126__auto___75177))
{var error__839__auto___75178 = temp__4126__auto___75177;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75178], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75158_75173,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75176,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75178], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75161;var children = rest75162;while(true){
var vec__75168 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75168,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75168,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19711__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__75169 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__75169);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75179 = (function (){var G__75170 = o__840__auto__;return (output_checker75160_75175.cljs$core$IFn$_invoke$arity$1 ? output_checker75160_75175.cljs$core$IFn$_invoke$arity$1(G__75170) : output_checker75160_75175.call(null,G__75170));
})();if(cljs.core.truth_(temp__4126__auto___75179))
{var error__839__auto___75180 = temp__4126__auto___75179;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75180], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75157_75172,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75180], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__75161,var_args){
var rest75162 = null;if (arguments.length > 1) {
  rest75162 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__75161,rest75162);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__75181){
var G__75161 = cljs.core.first(arglist__75181);
var rest75162 = cljs.core.rest(arglist__75181);
return popover__delegate(G__75161,rest75162);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___75171,output_schema75157_75172,input_schema75158_75173,input_checker75159_75174,output_checker75160_75175))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema75157_75172,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75158_75173], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___75194 = schema.utils.use_fn_validation;var output_schema75182_75195 = om_bootstrap.types.Component;var input_schema75183_75196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker75184_75197 = schema.core.checker(input_schema75183_75196);var output_checker75185_75198 = schema.core.checker(output_schema75182_75195);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___75194,output_schema75182_75195,input_schema75183_75196,input_checker75184_75197,output_checker75185_75198){
return (function() { 
var badge__delegate = function (G__75186,rest75187){var validate__837__auto__ = ufv___75194.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75199 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__75186,rest75187);var temp__4126__auto___75200 = (function (){var G__75191 = args__838__auto___75199;return (input_checker75184_75197.cljs$core$IFn$_invoke$arity$1 ? input_checker75184_75197.cljs$core$IFn$_invoke$arity$1(G__75191) : input_checker75184_75197.call(null,G__75191));
})();if(cljs.core.truth_(temp__4126__auto___75200))
{var error__839__auto___75201 = temp__4126__auto___75200;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75201], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75183_75196,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75199,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75201], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75186;var children = rest75187;while(true){
var vec__75192 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75192,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75192,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75202 = (function (){var G__75193 = o__840__auto__;return (output_checker75185_75198.cljs$core$IFn$_invoke$arity$1 ? output_checker75185_75198.cljs$core$IFn$_invoke$arity$1(G__75193) : output_checker75185_75198.call(null,G__75193));
})();if(cljs.core.truth_(temp__4126__auto___75202))
{var error__839__auto___75203 = temp__4126__auto___75202;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75203], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75182_75195,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75203], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__75186,var_args){
var rest75187 = null;if (arguments.length > 1) {
  rest75187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__75186,rest75187);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__75204){
var G__75186 = cljs.core.first(arglist__75204);
var rest75187 = cljs.core.rest(arglist__75204);
return badge__delegate(G__75186,rest75187);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___75194,output_schema75182_75195,input_schema75183_75196,input_checker75184_75197,output_checker75185_75198))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema75182_75195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75183_75196], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___75217 = schema.utils.use_fn_validation;var output_schema75205_75218 = om_bootstrap.types.Component;var input_schema75206_75219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker75207_75220 = schema.core.checker(input_schema75206_75219);var output_checker75208_75221 = schema.core.checker(output_schema75205_75218);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___75217,output_schema75205_75218,input_schema75206_75219,input_checker75207_75220,output_checker75208_75221){
return (function() { 
var glyphicon__delegate = function (G__75209,rest75210){var validate__837__auto__ = ufv___75217.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75222 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__75209,rest75210);var temp__4126__auto___75223 = (function (){var G__75214 = args__838__auto___75222;return (input_checker75207_75220.cljs$core$IFn$_invoke$arity$1 ? input_checker75207_75220.cljs$core$IFn$_invoke$arity$1(G__75214) : input_checker75207_75220.call(null,G__75214));
})();if(cljs.core.truth_(temp__4126__auto___75223))
{var error__839__auto___75224 = temp__4126__auto___75223;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75224], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75206_75219,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75222,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75224], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75209;var children = rest75210;while(true){
var vec__75215 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75215,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75215,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75225 = (function (){var G__75216 = o__840__auto__;return (output_checker75208_75221.cljs$core$IFn$_invoke$arity$1 ? output_checker75208_75221.cljs$core$IFn$_invoke$arity$1(G__75216) : output_checker75208_75221.call(null,G__75216));
})();if(cljs.core.truth_(temp__4126__auto___75225))
{var error__839__auto___75226 = temp__4126__auto___75225;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75226], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75205_75218,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75226], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__75209,var_args){
var rest75210 = null;if (arguments.length > 1) {
  rest75210 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__75209,rest75210);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__75227){
var G__75209 = cljs.core.first(arglist__75227);
var rest75210 = cljs.core.rest(arglist__75227);
return glyphicon__delegate(G__75209,rest75210);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___75217,output_schema75205_75218,input_schema75206_75219,input_checker75207_75220,output_checker75208_75221))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema75205_75218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75206_75219], null)));
//# sourceMappingURL=random.js.map