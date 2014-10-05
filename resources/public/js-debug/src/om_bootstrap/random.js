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
var ufv___49772 = schema.utils.use_fn_validation;var output_schema49762_49773 = om_bootstrap.types.Component;var input_schema49763_49774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49764_49775 = schema.core.checker(input_schema49763_49774);var output_checker49765_49776 = schema.core.checker(output_schema49762_49773);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___49772,output_schema49762_49773,input_schema49763_49774,input_checker49764_49775,output_checker49765_49776){
return (function() { 
var jumbotron__delegate = function (G__49766,rest49767){var validate__837__auto__ = ufv___49772.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49777 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49766,rest49767);var temp__4126__auto___49778 = (function (){var G__49770 = args__838__auto___49777;return (input_checker49764_49775.cljs$core$IFn$_invoke$arity$1 ? input_checker49764_49775.cljs$core$IFn$_invoke$arity$1(G__49770) : input_checker49764_49775.call(null,G__49770));
})();if(cljs.core.truth_(temp__4126__auto___49778))
{var error__839__auto___49779 = temp__4126__auto___49778;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49779], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49763_49774,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49777,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49779], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49766;var children = rest49767;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49780 = (function (){var G__49771 = o__840__auto__;return (output_checker49765_49776.cljs$core$IFn$_invoke$arity$1 ? output_checker49765_49776.cljs$core$IFn$_invoke$arity$1(G__49771) : output_checker49765_49776.call(null,G__49771));
})();if(cljs.core.truth_(temp__4126__auto___49780))
{var error__839__auto___49781 = temp__4126__auto___49780;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49781], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49762_49773,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49781], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__49766,var_args){
var rest49767 = null;if (arguments.length > 1) {
  rest49767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__49766,rest49767);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__49782){
var G__49766 = cljs.core.first(arglist__49782);
var rest49767 = cljs.core.rest(arglist__49782);
return jumbotron__delegate(G__49766,rest49767);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___49772,output_schema49762_49773,input_schema49763_49774,input_checker49764_49775,output_checker49765_49776))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema49762_49773,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49763_49774], null)));
var ufv___49795 = schema.utils.use_fn_validation;var output_schema49783_49796 = om_bootstrap.types.Component;var input_schema49784_49797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49785_49798 = schema.core.checker(input_schema49784_49797);var output_checker49786_49799 = schema.core.checker(output_schema49783_49796);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___49795,output_schema49783_49796,input_schema49784_49797,input_checker49785_49798,output_checker49786_49799){
return (function() { 
var label__delegate = function (G__49787,rest49788){var validate__837__auto__ = ufv___49795.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49800 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49787,rest49788);var temp__4126__auto___49801 = (function (){var G__49792 = args__838__auto___49800;return (input_checker49785_49798.cljs$core$IFn$_invoke$arity$1 ? input_checker49785_49798.cljs$core$IFn$_invoke$arity$1(G__49792) : input_checker49785_49798.call(null,G__49792));
})();if(cljs.core.truth_(temp__4126__auto___49801))
{var error__839__auto___49802 = temp__4126__auto___49801;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49802], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49784_49797,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49800,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49802], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49787;var children = rest49788;while(true){
var vec__49793 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49793,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49793,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49803 = (function (){var G__49794 = o__840__auto__;return (output_checker49786_49799.cljs$core$IFn$_invoke$arity$1 ? output_checker49786_49799.cljs$core$IFn$_invoke$arity$1(G__49794) : output_checker49786_49799.call(null,G__49794));
})();if(cljs.core.truth_(temp__4126__auto___49803))
{var error__839__auto___49804 = temp__4126__auto___49803;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49804], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49783_49796,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49804], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__49787,var_args){
var rest49788 = null;if (arguments.length > 1) {
  rest49788 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__49787,rest49788);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__49805){
var G__49787 = cljs.core.first(arglist__49805);
var rest49788 = cljs.core.rest(arglist__49805);
return label__delegate(G__49787,rest49788);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___49795,output_schema49783_49796,input_schema49784_49797,input_checker49785_49798,output_checker49786_49799))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema49783_49796,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49784_49797], null)));
var ufv___49818 = schema.utils.use_fn_validation;var output_schema49806_49819 = om_bootstrap.types.Component;var input_schema49807_49820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49808_49821 = schema.core.checker(input_schema49807_49820);var output_checker49809_49822 = schema.core.checker(output_schema49806_49819);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___49818,output_schema49806_49819,input_schema49807_49820,input_checker49808_49821,output_checker49809_49822){
return (function() { 
var well__delegate = function (G__49810,rest49811){var validate__837__auto__ = ufv___49818.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49823 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49810,rest49811);var temp__4126__auto___49824 = (function (){var G__49815 = args__838__auto___49823;return (input_checker49808_49821.cljs$core$IFn$_invoke$arity$1 ? input_checker49808_49821.cljs$core$IFn$_invoke$arity$1(G__49815) : input_checker49808_49821.call(null,G__49815));
})();if(cljs.core.truth_(temp__4126__auto___49824))
{var error__839__auto___49825 = temp__4126__auto___49824;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49825], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49807_49820,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49823,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49825], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49810;var children = rest49811;while(true){
var vec__49816 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49816,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49816,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49826 = (function (){var G__49817 = o__840__auto__;return (output_checker49809_49822.cljs$core$IFn$_invoke$arity$1 ? output_checker49809_49822.cljs$core$IFn$_invoke$arity$1(G__49817) : output_checker49809_49822.call(null,G__49817));
})();if(cljs.core.truth_(temp__4126__auto___49826))
{var error__839__auto___49827 = temp__4126__auto___49826;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49827], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49806_49819,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49827], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__49810,var_args){
var rest49811 = null;if (arguments.length > 1) {
  rest49811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__49810,rest49811);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__49828){
var G__49810 = cljs.core.first(arglist__49828);
var rest49811 = cljs.core.rest(arglist__49828);
return well__delegate(G__49810,rest49811);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___49818,output_schema49806_49819,input_schema49807_49820,input_checker49808_49821,output_checker49809_49822))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema49806_49819,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49807_49820], null)));
var ufv___49839 = schema.utils.use_fn_validation;var output_schema49829_49840 = om_bootstrap.types.Component;var input_schema49830_49841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49831_49842 = schema.core.checker(input_schema49830_49841);var output_checker49832_49843 = schema.core.checker(output_schema49829_49840);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___49839,output_schema49829_49840,input_schema49830_49841,input_checker49831_49842,output_checker49832_49843){
return (function() { 
var page_header__delegate = function (G__49833,rest49834){var validate__837__auto__ = ufv___49839.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49844 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49833,rest49834);var temp__4126__auto___49845 = (function (){var G__49837 = args__838__auto___49844;return (input_checker49831_49842.cljs$core$IFn$_invoke$arity$1 ? input_checker49831_49842.cljs$core$IFn$_invoke$arity$1(G__49837) : input_checker49831_49842.call(null,G__49837));
})();if(cljs.core.truth_(temp__4126__auto___49845))
{var error__839__auto___49846 = temp__4126__auto___49845;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49846], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49830_49841,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49844,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49846], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49833;var children = rest49834;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49847 = (function (){var G__49838 = o__840__auto__;return (output_checker49832_49843.cljs$core$IFn$_invoke$arity$1 ? output_checker49832_49843.cljs$core$IFn$_invoke$arity$1(G__49838) : output_checker49832_49843.call(null,G__49838));
})();if(cljs.core.truth_(temp__4126__auto___49847))
{var error__839__auto___49848 = temp__4126__auto___49847;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49848], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49829_49840,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49848], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__49833,var_args){
var rest49834 = null;if (arguments.length > 1) {
  rest49834 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__49833,rest49834);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__49849){
var G__49833 = cljs.core.first(arglist__49849);
var rest49834 = cljs.core.rest(arglist__49849);
return page_header__delegate(G__49833,rest49834);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___49839,output_schema49829_49840,input_schema49830_49841,input_checker49831_49842,output_checker49832_49843))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema49829_49840,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49830_49841], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___49864 = schema.utils.use_fn_validation;var output_schema49850_49865 = om_bootstrap.types.Component;var input_schema49851_49866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49852_49867 = schema.core.checker(input_schema49851_49866);var output_checker49853_49868 = schema.core.checker(output_schema49850_49865);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___49864,output_schema49850_49865,input_schema49851_49866,input_checker49852_49867,output_checker49853_49868){
return (function() { 
var tooltip__delegate = function (G__49854,rest49855){var validate__837__auto__ = ufv___49864.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49869 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49854,rest49855);var temp__4126__auto___49870 = (function (){var G__49860 = args__838__auto___49869;return (input_checker49852_49867.cljs$core$IFn$_invoke$arity$1 ? input_checker49852_49867.cljs$core$IFn$_invoke$arity$1(G__49860) : input_checker49852_49867.call(null,G__49860));
})();if(cljs.core.truth_(temp__4126__auto___49870))
{var error__839__auto___49871 = temp__4126__auto___49870;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49871], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49851_49866,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49869,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49871], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49854;var children = rest49855;while(true){
var vec__49861 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49861,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49861,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19289__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__49862 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__49862);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49872 = (function (){var G__49863 = o__840__auto__;return (output_checker49853_49868.cljs$core$IFn$_invoke$arity$1 ? output_checker49853_49868.cljs$core$IFn$_invoke$arity$1(G__49863) : output_checker49853_49868.call(null,G__49863));
})();if(cljs.core.truth_(temp__4126__auto___49872))
{var error__839__auto___49873 = temp__4126__auto___49872;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49873], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49850_49865,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49873], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__49854,var_args){
var rest49855 = null;if (arguments.length > 1) {
  rest49855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__49854,rest49855);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__49874){
var G__49854 = cljs.core.first(arglist__49874);
var rest49855 = cljs.core.rest(arglist__49874);
return tooltip__delegate(G__49854,rest49855);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___49864,output_schema49850_49865,input_schema49851_49866,input_checker49852_49867,output_checker49853_49868))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema49850_49865,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49851_49866], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__24168__auto__ = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));(descriptor__24168__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__24168__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__24197__auto__,owner49875,p__49877){var vec__49903 = p__49877;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49903,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49907 = schema.core.Any;var input_schema49908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49904","map49904",313637536,null))], null);var input_checker49909 = schema.core.checker(input_schema49908);var output_checker49910 = schema.core.checker(output_schema49907);return schema.core.schematize_fn(((function (ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__){
return (function fnk49906(G__49911){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49911], null);var temp__4126__auto___49929 = (function (){var G__49920 = args__838__auto___49928;return (input_checker49909.cljs$core$IFn$_invoke$arity$1 ? input_checker49909.cljs$core$IFn$_invoke$arity$1(G__49920) : input_checker49909.call(null,G__49920));
})();if(cljs.core.truth_(temp__4126__auto___49929))
{var error__839__auto___49930 = temp__4126__auto___49929;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49906","fnk49906",-1832997677,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49930], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49908,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49928,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49930], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49904 = G__49911;while(true){
if(cljs.core.map_QMARK_(map49904))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49904], 0))));
}
var map49905 = plumbing.fnk.schema.safe_get(map49904,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map49905,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map49905,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map49905,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map49904,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t49921 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t49921 = (function (map49904,data__24197__auto__,owner,props,vec__49903,children,owner49875,opts__24198__auto__,G__49911,fnk49906,alert_STAR_,output_schema49907,input_schema49908,map49905,validate__837__auto__,output_checker49910,ufv__,bs,p__49877,input_checker49909,meta49922){
this.map49904 = map49904;
this.data__24197__auto__ = data__24197__auto__;
this.owner = owner;
this.props = props;
this.vec__49903 = vec__49903;
this.children = children;
this.owner49875 = owner49875;
this.opts__24198__auto__ = opts__24198__auto__;
this.G__49911 = G__49911;
this.fnk49906 = fnk49906;
this.alert_STAR_ = alert_STAR_;
this.output_schema49907 = output_schema49907;
this.input_schema49908 = input_schema49908;
this.map49905 = map49905;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker49910 = output_checker49910;
this.ufv__ = ufv__;
this.bs = bs;
this.p__49877 = p__49877;
this.input_checker49909 = input_checker49909;
this.meta49922 = meta49922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t49921.cljs$lang$type = true;
om_bootstrap.random.t49921.cljs$lang$ctorStr = "om-bootstrap.random/t49921";
om_bootstrap.random.t49921.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"om-bootstrap.random/t49921");
});})(owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__))
;
om_bootstrap.random.t49921.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t49921.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__))
;
om_bootstrap.random.t49921.prototype.om$core$IRender$ = true;
om_bootstrap.random.t49921.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__49924 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__49925 = "&times;";return React.DOM.button(G__49924,G__49925);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__))
;
om_bootstrap.random.t49921.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t49921.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19277__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19277__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19277__auto__;
}
})()))
{var G__49926 = self__.owner;G__49926.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__49926;
} else
{return null;
}
});})(owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__))
;
om_bootstrap.random.t49921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__){
return (function (_49923){var self__ = this;
var _49923__$1 = this;return self__.meta49922;
});})(owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__))
;
om_bootstrap.random.t49921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__){
return (function (_49923,meta49922__$1){var self__ = this;
var _49923__$1 = this;return (new om_bootstrap.random.t49921(self__.map49904,self__.data__24197__auto__,self__.owner,self__.props,self__.vec__49903,self__.children,self__.owner49875,self__.opts__24198__auto__,self__.G__49911,self__.fnk49906,self__.alert_STAR_,self__.output_schema49907,self__.input_schema49908,self__.map49905,self__.validate__837__auto__,self__.output_checker49910,self__.ufv__,self__.bs,self__.p__49877,self__.input_checker49909,meta49922__$1));
});})(owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__))
;
om_bootstrap.random.__GT_t49921 = ((function (owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__){
return (function __GT_t49921(map49904__$1,data__24197__auto____$1,owner__$1,props__$1,vec__49903__$1,children__$1,owner49875__$1,opts__24198__auto____$1,G__49911__$1,fnk49906__$1,alert_STAR___$1,output_schema49907__$1,input_schema49908__$1,map49905__$1,validate__837__auto____$1,output_checker49910__$1,ufv____$1,bs__$1,p__49877__$1,input_checker49909__$1,meta49922){return (new om_bootstrap.random.t49921(map49904__$1,data__24197__auto____$1,owner__$1,props__$1,vec__49903__$1,children__$1,owner49875__$1,opts__24198__auto____$1,G__49911__$1,fnk49906__$1,alert_STAR___$1,output_schema49907__$1,input_schema49908__$1,map49905__$1,validate__837__auto____$1,output_checker49910__$1,ufv____$1,bs__$1,p__49877__$1,input_checker49909__$1,meta49922));
});})(owner,children,props,bs,map49905,validate__837__auto__,ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__))
;
}
return (new om_bootstrap.random.t49921(map49904,data__24197__auto__,owner,props,vec__49903,children,owner49875,opts__24198__auto__,G__49911,fnk49906,alert_STAR_,output_schema49907,input_schema49908,map49905,validate__837__auto__,output_checker49910,ufv__,bs,p__49877,input_checker49909,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49931 = (function (){var G__49927 = o__840__auto__;return (output_checker49910.cljs$core$IFn$_invoke$arity$1 ? output_checker49910.cljs$core$IFn$_invoke$arity$1(G__49927) : output_checker49910.call(null,G__49927));
})();if(cljs.core.truth_(temp__4126__auto___49931))
{var error__839__auto___49932 = temp__4126__auto___49931;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49906","fnk49906",-1832997677,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49932], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49907,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49932], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49907,input_schema49908,input_checker49909,output_checker49910,vec__49903,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema49907,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49908], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49875,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var alert_STAR_ = function (data__24197__auto__,owner49875,var_args){
var p__49877 = null;if (arguments.length > 2) {
  p__49877 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24197__auto__,owner49875,p__49877);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__49933){
var data__24197__auto__ = cljs.core.first(arglist__49933);
arglist__49933 = cljs.core.next(arglist__49933);
var owner49875 = cljs.core.first(arglist__49933);
var p__49877 = cljs.core.rest(arglist__49933);
return alert_STAR___delegate(data__24197__auto__,owner49875,p__49877);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24166__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24166__auto__,m49876){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24166__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m49876], 0)));
});
__GT_alert_STAR_ = function(cursor__24166__auto__,m49876){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24166__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24166__auto__,m49876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___49946 = schema.utils.use_fn_validation;var output_schema49934_49947 = om_bootstrap.types.Component;var input_schema49935_49948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49936_49949 = schema.core.checker(input_schema49935_49948);var output_checker49937_49950 = schema.core.checker(output_schema49934_49947);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___49946,output_schema49934_49947,input_schema49935_49948,input_checker49936_49949,output_checker49937_49950){
return (function() { 
var alert__$1__delegate = function (G__49938,rest49939){var validate__837__auto__ = ufv___49946.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49951 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49938,rest49939);var temp__4126__auto___49952 = (function (){var G__49943 = args__838__auto___49951;return (input_checker49936_49949.cljs$core$IFn$_invoke$arity$1 ? input_checker49936_49949.cljs$core$IFn$_invoke$arity$1(G__49943) : input_checker49936_49949.call(null,G__49943));
})();if(cljs.core.truth_(temp__4126__auto___49952))
{var error__839__auto___49953 = temp__4126__auto___49952;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49953], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49935_49948,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49951,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49953], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49938;var children = rest49939;while(true){
var vec__49944 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49944,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49944,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49954 = (function (){var G__49945 = o__840__auto__;return (output_checker49937_49950.cljs$core$IFn$_invoke$arity$1 ? output_checker49937_49950.cljs$core$IFn$_invoke$arity$1(G__49945) : output_checker49937_49950.call(null,G__49945));
})();if(cljs.core.truth_(temp__4126__auto___49954))
{var error__839__auto___49955 = temp__4126__auto___49954;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49955], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49934_49947,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49955], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__49938,var_args){
var rest49939 = null;if (arguments.length > 1) {
  rest49939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__49938,rest49939);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__49956){
var G__49938 = cljs.core.first(arglist__49956);
var rest49939 = cljs.core.rest(arglist__49956);
return alert__$1__delegate(G__49938,rest49939);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___49946,output_schema49934_49947,input_schema49935_49948,input_checker49936_49949,output_checker49937_49950))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema49934_49947,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49935_49948], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___49971 = schema.utils.use_fn_validation;var output_schema49957_49972 = om_bootstrap.types.Component;var input_schema49958_49973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49959_49974 = schema.core.checker(input_schema49958_49973);var output_checker49960_49975 = schema.core.checker(output_schema49957_49972);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___49971,output_schema49957_49972,input_schema49958_49973,input_checker49959_49974,output_checker49960_49975){
return (function() { 
var popover__delegate = function (G__49961,rest49962){var validate__837__auto__ = ufv___49971.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49976 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49961,rest49962);var temp__4126__auto___49977 = (function (){var G__49967 = args__838__auto___49976;return (input_checker49959_49974.cljs$core$IFn$_invoke$arity$1 ? input_checker49959_49974.cljs$core$IFn$_invoke$arity$1(G__49967) : input_checker49959_49974.call(null,G__49967));
})();if(cljs.core.truth_(temp__4126__auto___49977))
{var error__839__auto___49978 = temp__4126__auto___49977;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49978], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49958_49973,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49976,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49978], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49961;var children = rest49962;while(true){
var vec__49968 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49968,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49968,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19289__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__49969 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__49969);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49979 = (function (){var G__49970 = o__840__auto__;return (output_checker49960_49975.cljs$core$IFn$_invoke$arity$1 ? output_checker49960_49975.cljs$core$IFn$_invoke$arity$1(G__49970) : output_checker49960_49975.call(null,G__49970));
})();if(cljs.core.truth_(temp__4126__auto___49979))
{var error__839__auto___49980 = temp__4126__auto___49979;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49980], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49957_49972,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49980], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__49961,var_args){
var rest49962 = null;if (arguments.length > 1) {
  rest49962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__49961,rest49962);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__49981){
var G__49961 = cljs.core.first(arglist__49981);
var rest49962 = cljs.core.rest(arglist__49981);
return popover__delegate(G__49961,rest49962);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___49971,output_schema49957_49972,input_schema49958_49973,input_checker49959_49974,output_checker49960_49975))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema49957_49972,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49958_49973], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___49994 = schema.utils.use_fn_validation;var output_schema49982_49995 = om_bootstrap.types.Component;var input_schema49983_49996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49984_49997 = schema.core.checker(input_schema49983_49996);var output_checker49985_49998 = schema.core.checker(output_schema49982_49995);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___49994,output_schema49982_49995,input_schema49983_49996,input_checker49984_49997,output_checker49985_49998){
return (function() { 
var badge__delegate = function (G__49986,rest49987){var validate__837__auto__ = ufv___49994.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49999 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49986,rest49987);var temp__4126__auto___50000 = (function (){var G__49991 = args__838__auto___49999;return (input_checker49984_49997.cljs$core$IFn$_invoke$arity$1 ? input_checker49984_49997.cljs$core$IFn$_invoke$arity$1(G__49991) : input_checker49984_49997.call(null,G__49991));
})();if(cljs.core.truth_(temp__4126__auto___50000))
{var error__839__auto___50001 = temp__4126__auto___50000;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50001], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49983_49996,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49999,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50001], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49986;var children = rest49987;while(true){
var vec__49992 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49992,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49992,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50002 = (function (){var G__49993 = o__840__auto__;return (output_checker49985_49998.cljs$core$IFn$_invoke$arity$1 ? output_checker49985_49998.cljs$core$IFn$_invoke$arity$1(G__49993) : output_checker49985_49998.call(null,G__49993));
})();if(cljs.core.truth_(temp__4126__auto___50002))
{var error__839__auto___50003 = temp__4126__auto___50002;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50003], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49982_49995,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50003], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__49986,var_args){
var rest49987 = null;if (arguments.length > 1) {
  rest49987 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__49986,rest49987);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__50004){
var G__49986 = cljs.core.first(arglist__50004);
var rest49987 = cljs.core.rest(arglist__50004);
return badge__delegate(G__49986,rest49987);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___49994,output_schema49982_49995,input_schema49983_49996,input_checker49984_49997,output_checker49985_49998))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema49982_49995,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49983_49996], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___50017 = schema.utils.use_fn_validation;var output_schema50005_50018 = om_bootstrap.types.Component;var input_schema50006_50019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker50007_50020 = schema.core.checker(input_schema50006_50019);var output_checker50008_50021 = schema.core.checker(output_schema50005_50018);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___50017,output_schema50005_50018,input_schema50006_50019,input_checker50007_50020,output_checker50008_50021){
return (function() { 
var glyphicon__delegate = function (G__50009,rest50010){var validate__837__auto__ = ufv___50017.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50022 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__50009,rest50010);var temp__4126__auto___50023 = (function (){var G__50014 = args__838__auto___50022;return (input_checker50007_50020.cljs$core$IFn$_invoke$arity$1 ? input_checker50007_50020.cljs$core$IFn$_invoke$arity$1(G__50014) : input_checker50007_50020.call(null,G__50014));
})();if(cljs.core.truth_(temp__4126__auto___50023))
{var error__839__auto___50024 = temp__4126__auto___50023;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50024], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50006_50019,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50022,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50024], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__50009;var children = rest50010;while(true){
var vec__50015 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50015,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50015,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50025 = (function (){var G__50016 = o__840__auto__;return (output_checker50008_50021.cljs$core$IFn$_invoke$arity$1 ? output_checker50008_50021.cljs$core$IFn$_invoke$arity$1(G__50016) : output_checker50008_50021.call(null,G__50016));
})();if(cljs.core.truth_(temp__4126__auto___50025))
{var error__839__auto___50026 = temp__4126__auto___50025;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50026], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50005_50018,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50026], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__50009,var_args){
var rest50010 = null;if (arguments.length > 1) {
  rest50010 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__50009,rest50010);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__50027){
var G__50009 = cljs.core.first(arglist__50027);
var rest50010 = cljs.core.rest(arglist__50027);
return glyphicon__delegate(G__50009,rest50010);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___50017,output_schema50005_50018,input_schema50006_50019,input_checker50007_50020,output_checker50008_50021))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema50005_50018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50006_50019], null)));
//# sourceMappingURL=random.js.map