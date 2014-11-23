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
var ufv___38858 = schema.utils.use_fn_validation;var output_schema38848_38859 = om_bootstrap.types.Component;var input_schema38849_38860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38850_38861 = schema.core.checker(input_schema38849_38860);var output_checker38851_38862 = schema.core.checker(output_schema38848_38859);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___38858,output_schema38848_38859,input_schema38849_38860,input_checker38850_38861,output_checker38851_38862){
return (function() { 
var jumbotron__delegate = function (G__38852,rest38853){var validate__837__auto__ = ufv___38858.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38863 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38852,rest38853);var temp__4126__auto___38864 = (function (){var G__38856 = args__838__auto___38863;return (input_checker38850_38861.cljs$core$IFn$_invoke$arity$1 ? input_checker38850_38861.cljs$core$IFn$_invoke$arity$1(G__38856) : input_checker38850_38861.call(null,G__38856));
})();if(cljs.core.truth_(temp__4126__auto___38864))
{var error__839__auto___38865 = temp__4126__auto___38864;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38865], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38849_38860,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38863,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38865], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38852;var children = rest38853;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38866 = (function (){var G__38857 = o__840__auto__;return (output_checker38851_38862.cljs$core$IFn$_invoke$arity$1 ? output_checker38851_38862.cljs$core$IFn$_invoke$arity$1(G__38857) : output_checker38851_38862.call(null,G__38857));
})();if(cljs.core.truth_(temp__4126__auto___38866))
{var error__839__auto___38867 = temp__4126__auto___38866;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38867], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38848_38859,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38867], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__38852,var_args){
var rest38853 = null;if (arguments.length > 1) {
  rest38853 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__38852,rest38853);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__38868){
var G__38852 = cljs.core.first(arglist__38868);
var rest38853 = cljs.core.rest(arglist__38868);
return jumbotron__delegate(G__38852,rest38853);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___38858,output_schema38848_38859,input_schema38849_38860,input_checker38850_38861,output_checker38851_38862))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema38848_38859,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38849_38860], null)));
var ufv___38881 = schema.utils.use_fn_validation;var output_schema38869_38882 = om_bootstrap.types.Component;var input_schema38870_38883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38871_38884 = schema.core.checker(input_schema38870_38883);var output_checker38872_38885 = schema.core.checker(output_schema38869_38882);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___38881,output_schema38869_38882,input_schema38870_38883,input_checker38871_38884,output_checker38872_38885){
return (function() { 
var label__delegate = function (G__38873,rest38874){var validate__837__auto__ = ufv___38881.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38886 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38873,rest38874);var temp__4126__auto___38887 = (function (){var G__38878 = args__838__auto___38886;return (input_checker38871_38884.cljs$core$IFn$_invoke$arity$1 ? input_checker38871_38884.cljs$core$IFn$_invoke$arity$1(G__38878) : input_checker38871_38884.call(null,G__38878));
})();if(cljs.core.truth_(temp__4126__auto___38887))
{var error__839__auto___38888 = temp__4126__auto___38887;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38888], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38870_38883,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38886,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38888], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38873;var children = rest38874;while(true){
var vec__38879 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38879,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38879,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38889 = (function (){var G__38880 = o__840__auto__;return (output_checker38872_38885.cljs$core$IFn$_invoke$arity$1 ? output_checker38872_38885.cljs$core$IFn$_invoke$arity$1(G__38880) : output_checker38872_38885.call(null,G__38880));
})();if(cljs.core.truth_(temp__4126__auto___38889))
{var error__839__auto___38890 = temp__4126__auto___38889;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38890], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38869_38882,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38890], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__38873,var_args){
var rest38874 = null;if (arguments.length > 1) {
  rest38874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__38873,rest38874);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__38891){
var G__38873 = cljs.core.first(arglist__38891);
var rest38874 = cljs.core.rest(arglist__38891);
return label__delegate(G__38873,rest38874);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___38881,output_schema38869_38882,input_schema38870_38883,input_checker38871_38884,output_checker38872_38885))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema38869_38882,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38870_38883], null)));
var ufv___38904 = schema.utils.use_fn_validation;var output_schema38892_38905 = om_bootstrap.types.Component;var input_schema38893_38906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38894_38907 = schema.core.checker(input_schema38893_38906);var output_checker38895_38908 = schema.core.checker(output_schema38892_38905);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___38904,output_schema38892_38905,input_schema38893_38906,input_checker38894_38907,output_checker38895_38908){
return (function() { 
var well__delegate = function (G__38896,rest38897){var validate__837__auto__ = ufv___38904.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38909 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38896,rest38897);var temp__4126__auto___38910 = (function (){var G__38901 = args__838__auto___38909;return (input_checker38894_38907.cljs$core$IFn$_invoke$arity$1 ? input_checker38894_38907.cljs$core$IFn$_invoke$arity$1(G__38901) : input_checker38894_38907.call(null,G__38901));
})();if(cljs.core.truth_(temp__4126__auto___38910))
{var error__839__auto___38911 = temp__4126__auto___38910;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38911], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38893_38906,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38909,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38911], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38896;var children = rest38897;while(true){
var vec__38902 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38902,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38902,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38912 = (function (){var G__38903 = o__840__auto__;return (output_checker38895_38908.cljs$core$IFn$_invoke$arity$1 ? output_checker38895_38908.cljs$core$IFn$_invoke$arity$1(G__38903) : output_checker38895_38908.call(null,G__38903));
})();if(cljs.core.truth_(temp__4126__auto___38912))
{var error__839__auto___38913 = temp__4126__auto___38912;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38913], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38892_38905,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38913], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__38896,var_args){
var rest38897 = null;if (arguments.length > 1) {
  rest38897 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__38896,rest38897);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__38914){
var G__38896 = cljs.core.first(arglist__38914);
var rest38897 = cljs.core.rest(arglist__38914);
return well__delegate(G__38896,rest38897);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___38904,output_schema38892_38905,input_schema38893_38906,input_checker38894_38907,output_checker38895_38908))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema38892_38905,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38893_38906], null)));
var ufv___38925 = schema.utils.use_fn_validation;var output_schema38915_38926 = om_bootstrap.types.Component;var input_schema38916_38927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38917_38928 = schema.core.checker(input_schema38916_38927);var output_checker38918_38929 = schema.core.checker(output_schema38915_38926);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___38925,output_schema38915_38926,input_schema38916_38927,input_checker38917_38928,output_checker38918_38929){
return (function() { 
var page_header__delegate = function (G__38919,rest38920){var validate__837__auto__ = ufv___38925.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38930 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38919,rest38920);var temp__4126__auto___38931 = (function (){var G__38923 = args__838__auto___38930;return (input_checker38917_38928.cljs$core$IFn$_invoke$arity$1 ? input_checker38917_38928.cljs$core$IFn$_invoke$arity$1(G__38923) : input_checker38917_38928.call(null,G__38923));
})();if(cljs.core.truth_(temp__4126__auto___38931))
{var error__839__auto___38932 = temp__4126__auto___38931;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38932], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38916_38927,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38930,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38932], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38919;var children = rest38920;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38933 = (function (){var G__38924 = o__840__auto__;return (output_checker38918_38929.cljs$core$IFn$_invoke$arity$1 ? output_checker38918_38929.cljs$core$IFn$_invoke$arity$1(G__38924) : output_checker38918_38929.call(null,G__38924));
})();if(cljs.core.truth_(temp__4126__auto___38933))
{var error__839__auto___38934 = temp__4126__auto___38933;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38934], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38915_38926,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38934], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__38919,var_args){
var rest38920 = null;if (arguments.length > 1) {
  rest38920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__38919,rest38920);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__38935){
var G__38919 = cljs.core.first(arglist__38935);
var rest38920 = cljs.core.rest(arglist__38935);
return page_header__delegate(G__38919,rest38920);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___38925,output_schema38915_38926,input_schema38916_38927,input_checker38917_38928,output_checker38918_38929))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema38915_38926,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38916_38927], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___38950 = schema.utils.use_fn_validation;var output_schema38936_38951 = om_bootstrap.types.Component;var input_schema38937_38952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker38938_38953 = schema.core.checker(input_schema38937_38952);var output_checker38939_38954 = schema.core.checker(output_schema38936_38951);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___38950,output_schema38936_38951,input_schema38937_38952,input_checker38938_38953,output_checker38939_38954){
return (function() { 
var tooltip__delegate = function (G__38940,rest38941){var validate__837__auto__ = ufv___38950.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38955 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__38940,rest38941);var temp__4126__auto___38956 = (function (){var G__38946 = args__838__auto___38955;return (input_checker38938_38953.cljs$core$IFn$_invoke$arity$1 ? input_checker38938_38953.cljs$core$IFn$_invoke$arity$1(G__38946) : input_checker38938_38953.call(null,G__38946));
})();if(cljs.core.truth_(temp__4126__auto___38956))
{var error__839__auto___38957 = temp__4126__auto___38956;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38957], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38937_38952,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38955,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38957], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__38940;var children = rest38941;while(true){
var vec__38947 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19663__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__38948 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__38948);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38958 = (function (){var G__38949 = o__840__auto__;return (output_checker38939_38954.cljs$core$IFn$_invoke$arity$1 ? output_checker38939_38954.cljs$core$IFn$_invoke$arity$1(G__38949) : output_checker38939_38954.call(null,G__38949));
})();if(cljs.core.truth_(temp__4126__auto___38958))
{var error__839__auto___38959 = temp__4126__auto___38958;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38959], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38936_38951,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38959], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__38940,var_args){
var rest38941 = null;if (arguments.length > 1) {
  rest38941 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__38940,rest38941);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__38960){
var G__38940 = cljs.core.first(arglist__38960);
var rest38941 = cljs.core.rest(arglist__38960);
return tooltip__delegate(G__38940,rest38941);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___38950,output_schema38936_38951,input_schema38937_38952,input_checker38938_38953,output_checker38939_38954))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema38936_38951,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38937_38952], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__24412__auto__ = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));(descriptor__24412__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__24412__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__24441__auto__,owner38961,p__38963){var vec__38989 = p__38963;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38989,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema38993 = schema.core.Any;var input_schema38994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map38990","map38990",-164037620,null))], null);var input_checker38995 = schema.core.checker(input_schema38994);var output_checker38996 = schema.core.checker(output_schema38993);return schema.core.schematize_fn(((function (ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__){
return (function fnk38992(G__38997){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38997], null);var temp__4126__auto___39015 = (function (){var G__39006 = args__838__auto___39014;return (input_checker38995.cljs$core$IFn$_invoke$arity$1 ? input_checker38995.cljs$core$IFn$_invoke$arity$1(G__39006) : input_checker38995.call(null,G__39006));
})();if(cljs.core.truth_(temp__4126__auto___39015))
{var error__839__auto___39016 = temp__4126__auto___39015;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk38992","fnk38992",-1660826839,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39016], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38994,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39014,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39016], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map38990 = G__38997;while(true){
if(cljs.core.map_QMARK_(map38990))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map38990], 0))));
}
var map38991 = plumbing.fnk.schema.safe_get(map38990,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map38991,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map38991,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map38991,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map38990,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t39007 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t39007 = (function (G__38997,output_schema38993,vec__38989,owner,props,children,fnk38992,map38990,data__24441__auto__,output_checker38996,alert_STAR_,p__38963,owner38961,map38991,input_schema38994,opts__24442__auto__,validate__837__auto__,input_checker38995,ufv__,bs,meta39008){
this.G__38997 = G__38997;
this.output_schema38993 = output_schema38993;
this.vec__38989 = vec__38989;
this.owner = owner;
this.props = props;
this.children = children;
this.fnk38992 = fnk38992;
this.map38990 = map38990;
this.data__24441__auto__ = data__24441__auto__;
this.output_checker38996 = output_checker38996;
this.alert_STAR_ = alert_STAR_;
this.p__38963 = p__38963;
this.owner38961 = owner38961;
this.map38991 = map38991;
this.input_schema38994 = input_schema38994;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker38995 = input_checker38995;
this.ufv__ = ufv__;
this.bs = bs;
this.meta39008 = meta39008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t39007.cljs$lang$type = true;
om_bootstrap.random.t39007.cljs$lang$ctorStr = "om-bootstrap.random/t39007";
om_bootstrap.random.t39007.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"om-bootstrap.random/t39007");
});})(owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__))
;
om_bootstrap.random.t39007.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t39007.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__))
;
om_bootstrap.random.t39007.prototype.om$core$IRender$ = true;
om_bootstrap.random.t39007.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__39010 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__39011 = "&times;";return React.DOM.button(G__39010,G__39011);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__))
;
om_bootstrap.random.t39007.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t39007.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19621__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19621__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19621__auto__;
}
})()))
{var G__39012 = self__.owner;G__39012.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__39012;
} else
{return null;
}
});})(owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__))
;
om_bootstrap.random.t39007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__){
return (function (_39009){var self__ = this;
var _39009__$1 = this;return self__.meta39008;
});})(owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__))
;
om_bootstrap.random.t39007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__){
return (function (_39009,meta39008__$1){var self__ = this;
var _39009__$1 = this;return (new om_bootstrap.random.t39007(self__.G__38997,self__.output_schema38993,self__.vec__38989,self__.owner,self__.props,self__.children,self__.fnk38992,self__.map38990,self__.data__24441__auto__,self__.output_checker38996,self__.alert_STAR_,self__.p__38963,self__.owner38961,self__.map38991,self__.input_schema38994,self__.opts__24442__auto__,self__.validate__837__auto__,self__.input_checker38995,self__.ufv__,self__.bs,meta39008__$1));
});})(owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__))
;
om_bootstrap.random.__GT_t39007 = ((function (owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__){
return (function __GT_t39007(G__38997__$1,output_schema38993__$1,vec__38989__$1,owner__$1,props__$1,children__$1,fnk38992__$1,map38990__$1,data__24441__auto____$1,output_checker38996__$1,alert_STAR___$1,p__38963__$1,owner38961__$1,map38991__$1,input_schema38994__$1,opts__24442__auto____$1,validate__837__auto____$1,input_checker38995__$1,ufv____$1,bs__$1,meta39008){return (new om_bootstrap.random.t39007(G__38997__$1,output_schema38993__$1,vec__38989__$1,owner__$1,props__$1,children__$1,fnk38992__$1,map38990__$1,data__24441__auto____$1,output_checker38996__$1,alert_STAR___$1,p__38963__$1,owner38961__$1,map38991__$1,input_schema38994__$1,opts__24442__auto____$1,validate__837__auto____$1,input_checker38995__$1,ufv____$1,bs__$1,meta39008));
});})(owner,children,props,bs,map38991,validate__837__auto__,ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__))
;
}
return (new om_bootstrap.random.t39007(G__38997,output_schema38993,vec__38989,owner,props,children,fnk38992,map38990,data__24441__auto__,output_checker38996,alert_STAR_,p__38963,owner38961,map38991,input_schema38994,opts__24442__auto__,validate__837__auto__,input_checker38995,ufv__,bs,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39017 = (function (){var G__39013 = o__840__auto__;return (output_checker38996.cljs$core$IFn$_invoke$arity$1 ? output_checker38996.cljs$core$IFn$_invoke$arity$1(G__39013) : output_checker38996.call(null,G__39013));
})();if(cljs.core.truth_(temp__4126__auto___39017))
{var error__839__auto___39018 = temp__4126__auto___39017;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk38992","fnk38992",-1660826839,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39018], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38993,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39018], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema38993,input_schema38994,input_checker38995,output_checker38996,vec__38989,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema38993,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38994], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner38961,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var alert_STAR_ = function (data__24441__auto__,owner38961,var_args){
var p__38963 = null;if (arguments.length > 2) {
  p__38963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24441__auto__,owner38961,p__38963);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__39019){
var data__24441__auto__ = cljs.core.first(arglist__39019);
arglist__39019 = cljs.core.next(arglist__39019);
var owner38961 = cljs.core.first(arglist__39019);
var p__38963 = cljs.core.rest(arglist__39019);
return alert_STAR___delegate(data__24441__auto__,owner38961,p__38963);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24410__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24410__auto__,m38962){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24410__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m38962], 0)));
});
__GT_alert_STAR_ = function(cursor__24410__auto__,m38962){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24410__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24410__auto__,m38962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___39032 = schema.utils.use_fn_validation;var output_schema39020_39033 = om_bootstrap.types.Component;var input_schema39021_39034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39022_39035 = schema.core.checker(input_schema39021_39034);var output_checker39023_39036 = schema.core.checker(output_schema39020_39033);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___39032,output_schema39020_39033,input_schema39021_39034,input_checker39022_39035,output_checker39023_39036){
return (function() { 
var alert__$1__delegate = function (G__39024,rest39025){var validate__837__auto__ = ufv___39032.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39037 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39024,rest39025);var temp__4126__auto___39038 = (function (){var G__39029 = args__838__auto___39037;return (input_checker39022_39035.cljs$core$IFn$_invoke$arity$1 ? input_checker39022_39035.cljs$core$IFn$_invoke$arity$1(G__39029) : input_checker39022_39035.call(null,G__39029));
})();if(cljs.core.truth_(temp__4126__auto___39038))
{var error__839__auto___39039 = temp__4126__auto___39038;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39039], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39021_39034,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39037,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39039], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39024;var children = rest39025;while(true){
var vec__39030 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39040 = (function (){var G__39031 = o__840__auto__;return (output_checker39023_39036.cljs$core$IFn$_invoke$arity$1 ? output_checker39023_39036.cljs$core$IFn$_invoke$arity$1(G__39031) : output_checker39023_39036.call(null,G__39031));
})();if(cljs.core.truth_(temp__4126__auto___39040))
{var error__839__auto___39041 = temp__4126__auto___39040;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39041], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39020_39033,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39041], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__39024,var_args){
var rest39025 = null;if (arguments.length > 1) {
  rest39025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__39024,rest39025);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__39042){
var G__39024 = cljs.core.first(arglist__39042);
var rest39025 = cljs.core.rest(arglist__39042);
return alert__$1__delegate(G__39024,rest39025);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___39032,output_schema39020_39033,input_schema39021_39034,input_checker39022_39035,output_checker39023_39036))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema39020_39033,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39021_39034], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___39057 = schema.utils.use_fn_validation;var output_schema39043_39058 = om_bootstrap.types.Component;var input_schema39044_39059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39045_39060 = schema.core.checker(input_schema39044_39059);var output_checker39046_39061 = schema.core.checker(output_schema39043_39058);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___39057,output_schema39043_39058,input_schema39044_39059,input_checker39045_39060,output_checker39046_39061){
return (function() { 
var popover__delegate = function (G__39047,rest39048){var validate__837__auto__ = ufv___39057.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39062 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39047,rest39048);var temp__4126__auto___39063 = (function (){var G__39053 = args__838__auto___39062;return (input_checker39045_39060.cljs$core$IFn$_invoke$arity$1 ? input_checker39045_39060.cljs$core$IFn$_invoke$arity$1(G__39053) : input_checker39045_39060.call(null,G__39053));
})();if(cljs.core.truth_(temp__4126__auto___39063))
{var error__839__auto___39064 = temp__4126__auto___39063;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39064], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39044_39059,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39062,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39064], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39047;var children = rest39048;while(true){
var vec__39054 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19663__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__39055 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__39055);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39065 = (function (){var G__39056 = o__840__auto__;return (output_checker39046_39061.cljs$core$IFn$_invoke$arity$1 ? output_checker39046_39061.cljs$core$IFn$_invoke$arity$1(G__39056) : output_checker39046_39061.call(null,G__39056));
})();if(cljs.core.truth_(temp__4126__auto___39065))
{var error__839__auto___39066 = temp__4126__auto___39065;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39066], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39043_39058,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39066], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__39047,var_args){
var rest39048 = null;if (arguments.length > 1) {
  rest39048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__39047,rest39048);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__39067){
var G__39047 = cljs.core.first(arglist__39067);
var rest39048 = cljs.core.rest(arglist__39067);
return popover__delegate(G__39047,rest39048);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___39057,output_schema39043_39058,input_schema39044_39059,input_checker39045_39060,output_checker39046_39061))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema39043_39058,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39044_39059], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___39080 = schema.utils.use_fn_validation;var output_schema39068_39081 = om_bootstrap.types.Component;var input_schema39069_39082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39070_39083 = schema.core.checker(input_schema39069_39082);var output_checker39071_39084 = schema.core.checker(output_schema39068_39081);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___39080,output_schema39068_39081,input_schema39069_39082,input_checker39070_39083,output_checker39071_39084){
return (function() { 
var badge__delegate = function (G__39072,rest39073){var validate__837__auto__ = ufv___39080.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39085 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39072,rest39073);var temp__4126__auto___39086 = (function (){var G__39077 = args__838__auto___39085;return (input_checker39070_39083.cljs$core$IFn$_invoke$arity$1 ? input_checker39070_39083.cljs$core$IFn$_invoke$arity$1(G__39077) : input_checker39070_39083.call(null,G__39077));
})();if(cljs.core.truth_(temp__4126__auto___39086))
{var error__839__auto___39087 = temp__4126__auto___39086;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39087], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39069_39082,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39085,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39087], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39072;var children = rest39073;while(true){
var vec__39078 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39078,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39078,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39088 = (function (){var G__39079 = o__840__auto__;return (output_checker39071_39084.cljs$core$IFn$_invoke$arity$1 ? output_checker39071_39084.cljs$core$IFn$_invoke$arity$1(G__39079) : output_checker39071_39084.call(null,G__39079));
})();if(cljs.core.truth_(temp__4126__auto___39088))
{var error__839__auto___39089 = temp__4126__auto___39088;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39089], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39068_39081,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39089], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__39072,var_args){
var rest39073 = null;if (arguments.length > 1) {
  rest39073 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__39072,rest39073);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__39090){
var G__39072 = cljs.core.first(arglist__39090);
var rest39073 = cljs.core.rest(arglist__39090);
return badge__delegate(G__39072,rest39073);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___39080,output_schema39068_39081,input_schema39069_39082,input_checker39070_39083,output_checker39071_39084))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema39068_39081,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39069_39082], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___39103 = schema.utils.use_fn_validation;var output_schema39091_39104 = om_bootstrap.types.Component;var input_schema39092_39105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39093_39106 = schema.core.checker(input_schema39092_39105);var output_checker39094_39107 = schema.core.checker(output_schema39091_39104);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___39103,output_schema39091_39104,input_schema39092_39105,input_checker39093_39106,output_checker39094_39107){
return (function() { 
var glyphicon__delegate = function (G__39095,rest39096){var validate__837__auto__ = ufv___39103.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39108 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39095,rest39096);var temp__4126__auto___39109 = (function (){var G__39100 = args__838__auto___39108;return (input_checker39093_39106.cljs$core$IFn$_invoke$arity$1 ? input_checker39093_39106.cljs$core$IFn$_invoke$arity$1(G__39100) : input_checker39093_39106.call(null,G__39100));
})();if(cljs.core.truth_(temp__4126__auto___39109))
{var error__839__auto___39110 = temp__4126__auto___39109;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39110], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39092_39105,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39108,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39110], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39095;var children = rest39096;while(true){
var vec__39101 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39101,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39101,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39111 = (function (){var G__39102 = o__840__auto__;return (output_checker39094_39107.cljs$core$IFn$_invoke$arity$1 ? output_checker39094_39107.cljs$core$IFn$_invoke$arity$1(G__39102) : output_checker39094_39107.call(null,G__39102));
})();if(cljs.core.truth_(temp__4126__auto___39111))
{var error__839__auto___39112 = temp__4126__auto___39111;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39112], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39091_39104,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39112], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__39095,var_args){
var rest39096 = null;if (arguments.length > 1) {
  rest39096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__39095,rest39096);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__39113){
var G__39095 = cljs.core.first(arglist__39113);
var rest39096 = cljs.core.rest(arglist__39113);
return glyphicon__delegate(G__39095,rest39096);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___39103,output_schema39091_39104,input_schema39092_39105,input_checker39093_39106,output_checker39094_39107))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema39091_39104,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39092_39105], null)));
//# sourceMappingURL=random.js.map