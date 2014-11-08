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
var ufv___56622 = schema.utils.use_fn_validation;var output_schema56612_56623 = om_bootstrap.types.Component;var input_schema56613_56624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56614_56625 = schema.core.checker(input_schema56613_56624);var output_checker56615_56626 = schema.core.checker(output_schema56612_56623);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___56622,output_schema56612_56623,input_schema56613_56624,input_checker56614_56625,output_checker56615_56626){
return (function() { 
var jumbotron__delegate = function (G__56616,rest56617){var validate__837__auto__ = ufv___56622.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56627 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56616,rest56617);var temp__4126__auto___56628 = (function (){var G__56620 = args__838__auto___56627;return (input_checker56614_56625.cljs$core$IFn$_invoke$arity$1 ? input_checker56614_56625.cljs$core$IFn$_invoke$arity$1(G__56620) : input_checker56614_56625.call(null,G__56620));
})();if(cljs.core.truth_(temp__4126__auto___56628))
{var error__839__auto___56629 = temp__4126__auto___56628;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56629], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56613_56624,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56627,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56629], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56616;var children = rest56617;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56630 = (function (){var G__56621 = o__840__auto__;return (output_checker56615_56626.cljs$core$IFn$_invoke$arity$1 ? output_checker56615_56626.cljs$core$IFn$_invoke$arity$1(G__56621) : output_checker56615_56626.call(null,G__56621));
})();if(cljs.core.truth_(temp__4126__auto___56630))
{var error__839__auto___56631 = temp__4126__auto___56630;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56631], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56612_56623,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56631], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__56616,var_args){
var rest56617 = null;if (arguments.length > 1) {
  rest56617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__56616,rest56617);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__56632){
var G__56616 = cljs.core.first(arglist__56632);
var rest56617 = cljs.core.rest(arglist__56632);
return jumbotron__delegate(G__56616,rest56617);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___56622,output_schema56612_56623,input_schema56613_56624,input_checker56614_56625,output_checker56615_56626))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema56612_56623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56613_56624], null)));
var ufv___56645 = schema.utils.use_fn_validation;var output_schema56633_56646 = om_bootstrap.types.Component;var input_schema56634_56647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56635_56648 = schema.core.checker(input_schema56634_56647);var output_checker56636_56649 = schema.core.checker(output_schema56633_56646);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___56645,output_schema56633_56646,input_schema56634_56647,input_checker56635_56648,output_checker56636_56649){
return (function() { 
var label__delegate = function (G__56637,rest56638){var validate__837__auto__ = ufv___56645.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56650 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56637,rest56638);var temp__4126__auto___56651 = (function (){var G__56642 = args__838__auto___56650;return (input_checker56635_56648.cljs$core$IFn$_invoke$arity$1 ? input_checker56635_56648.cljs$core$IFn$_invoke$arity$1(G__56642) : input_checker56635_56648.call(null,G__56642));
})();if(cljs.core.truth_(temp__4126__auto___56651))
{var error__839__auto___56652 = temp__4126__auto___56651;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56652], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56634_56647,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56650,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56652], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56637;var children = rest56638;while(true){
var vec__56643 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56643,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56643,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56653 = (function (){var G__56644 = o__840__auto__;return (output_checker56636_56649.cljs$core$IFn$_invoke$arity$1 ? output_checker56636_56649.cljs$core$IFn$_invoke$arity$1(G__56644) : output_checker56636_56649.call(null,G__56644));
})();if(cljs.core.truth_(temp__4126__auto___56653))
{var error__839__auto___56654 = temp__4126__auto___56653;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56654], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56633_56646,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56654], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__56637,var_args){
var rest56638 = null;if (arguments.length > 1) {
  rest56638 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__56637,rest56638);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__56655){
var G__56637 = cljs.core.first(arglist__56655);
var rest56638 = cljs.core.rest(arglist__56655);
return label__delegate(G__56637,rest56638);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___56645,output_schema56633_56646,input_schema56634_56647,input_checker56635_56648,output_checker56636_56649))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema56633_56646,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56634_56647], null)));
var ufv___56668 = schema.utils.use_fn_validation;var output_schema56656_56669 = om_bootstrap.types.Component;var input_schema56657_56670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56658_56671 = schema.core.checker(input_schema56657_56670);var output_checker56659_56672 = schema.core.checker(output_schema56656_56669);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___56668,output_schema56656_56669,input_schema56657_56670,input_checker56658_56671,output_checker56659_56672){
return (function() { 
var well__delegate = function (G__56660,rest56661){var validate__837__auto__ = ufv___56668.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56673 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56660,rest56661);var temp__4126__auto___56674 = (function (){var G__56665 = args__838__auto___56673;return (input_checker56658_56671.cljs$core$IFn$_invoke$arity$1 ? input_checker56658_56671.cljs$core$IFn$_invoke$arity$1(G__56665) : input_checker56658_56671.call(null,G__56665));
})();if(cljs.core.truth_(temp__4126__auto___56674))
{var error__839__auto___56675 = temp__4126__auto___56674;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56675], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56657_56670,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56673,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56675], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56660;var children = rest56661;while(true){
var vec__56666 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56666,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56666,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56676 = (function (){var G__56667 = o__840__auto__;return (output_checker56659_56672.cljs$core$IFn$_invoke$arity$1 ? output_checker56659_56672.cljs$core$IFn$_invoke$arity$1(G__56667) : output_checker56659_56672.call(null,G__56667));
})();if(cljs.core.truth_(temp__4126__auto___56676))
{var error__839__auto___56677 = temp__4126__auto___56676;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56677], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56656_56669,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56677], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__56660,var_args){
var rest56661 = null;if (arguments.length > 1) {
  rest56661 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__56660,rest56661);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__56678){
var G__56660 = cljs.core.first(arglist__56678);
var rest56661 = cljs.core.rest(arglist__56678);
return well__delegate(G__56660,rest56661);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___56668,output_schema56656_56669,input_schema56657_56670,input_checker56658_56671,output_checker56659_56672))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema56656_56669,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56657_56670], null)));
var ufv___56689 = schema.utils.use_fn_validation;var output_schema56679_56690 = om_bootstrap.types.Component;var input_schema56680_56691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56681_56692 = schema.core.checker(input_schema56680_56691);var output_checker56682_56693 = schema.core.checker(output_schema56679_56690);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___56689,output_schema56679_56690,input_schema56680_56691,input_checker56681_56692,output_checker56682_56693){
return (function() { 
var page_header__delegate = function (G__56683,rest56684){var validate__837__auto__ = ufv___56689.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56694 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56683,rest56684);var temp__4126__auto___56695 = (function (){var G__56687 = args__838__auto___56694;return (input_checker56681_56692.cljs$core$IFn$_invoke$arity$1 ? input_checker56681_56692.cljs$core$IFn$_invoke$arity$1(G__56687) : input_checker56681_56692.call(null,G__56687));
})();if(cljs.core.truth_(temp__4126__auto___56695))
{var error__839__auto___56696 = temp__4126__auto___56695;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56696], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56680_56691,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56694,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56696], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56683;var children = rest56684;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56697 = (function (){var G__56688 = o__840__auto__;return (output_checker56682_56693.cljs$core$IFn$_invoke$arity$1 ? output_checker56682_56693.cljs$core$IFn$_invoke$arity$1(G__56688) : output_checker56682_56693.call(null,G__56688));
})();if(cljs.core.truth_(temp__4126__auto___56697))
{var error__839__auto___56698 = temp__4126__auto___56697;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56698], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56679_56690,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56698], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__56683,var_args){
var rest56684 = null;if (arguments.length > 1) {
  rest56684 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__56683,rest56684);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__56699){
var G__56683 = cljs.core.first(arglist__56699);
var rest56684 = cljs.core.rest(arglist__56699);
return page_header__delegate(G__56683,rest56684);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___56689,output_schema56679_56690,input_schema56680_56691,input_checker56681_56692,output_checker56682_56693))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema56679_56690,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56680_56691], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___56714 = schema.utils.use_fn_validation;var output_schema56700_56715 = om_bootstrap.types.Component;var input_schema56701_56716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56702_56717 = schema.core.checker(input_schema56701_56716);var output_checker56703_56718 = schema.core.checker(output_schema56700_56715);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___56714,output_schema56700_56715,input_schema56701_56716,input_checker56702_56717,output_checker56703_56718){
return (function() { 
var tooltip__delegate = function (G__56704,rest56705){var validate__837__auto__ = ufv___56714.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56719 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56704,rest56705);var temp__4126__auto___56720 = (function (){var G__56710 = args__838__auto___56719;return (input_checker56702_56717.cljs$core$IFn$_invoke$arity$1 ? input_checker56702_56717.cljs$core$IFn$_invoke$arity$1(G__56710) : input_checker56702_56717.call(null,G__56710));
})();if(cljs.core.truth_(temp__4126__auto___56720))
{var error__839__auto___56721 = temp__4126__auto___56720;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56721], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56701_56716,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56719,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56721], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56704;var children = rest56705;while(true){
var vec__56711 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56711,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56711,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19586__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__56712 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__56712);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56722 = (function (){var G__56713 = o__840__auto__;return (output_checker56703_56718.cljs$core$IFn$_invoke$arity$1 ? output_checker56703_56718.cljs$core$IFn$_invoke$arity$1(G__56713) : output_checker56703_56718.call(null,G__56713));
})();if(cljs.core.truth_(temp__4126__auto___56722))
{var error__839__auto___56723 = temp__4126__auto___56722;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56723], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56700_56715,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56723], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__56704,var_args){
var rest56705 = null;if (arguments.length > 1) {
  rest56705 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__56704,rest56705);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__56724){
var G__56704 = cljs.core.first(arglist__56724);
var rest56705 = cljs.core.rest(arglist__56724);
return tooltip__delegate(G__56704,rest56705);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___56714,output_schema56700_56715,input_schema56701_56716,input_checker56702_56717,output_checker56703_56718))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema56700_56715,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56701_56716], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__24398__auto__ = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));(descriptor__24398__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__24398__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__24427__auto__,owner56725,p__56727){var vec__56753 = p__56727;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56753,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56757 = schema.core.Any;var input_schema56758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map56754","map56754",-1154391352,null))], null);var input_checker56759 = schema.core.checker(input_schema56758);var output_checker56760 = schema.core.checker(output_schema56757);return schema.core.schematize_fn(((function (ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__){
return (function fnk56756(G__56761){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56761], null);var temp__4126__auto___56779 = (function (){var G__56770 = args__838__auto___56778;return (input_checker56759.cljs$core$IFn$_invoke$arity$1 ? input_checker56759.cljs$core$IFn$_invoke$arity$1(G__56770) : input_checker56759.call(null,G__56770));
})();if(cljs.core.truth_(temp__4126__auto___56779))
{var error__839__auto___56780 = temp__4126__auto___56779;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56756","fnk56756",-606514432,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56780], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56758,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56778,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56780], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56754 = G__56761;while(true){
if(cljs.core.map_QMARK_(map56754))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56754], 0))));
}
var map56755 = plumbing.fnk.schema.safe_get(map56754,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map56755,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map56755,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map56755,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map56754,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t56771 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t56771 = (function (fnk56756,map56755,owner,owner56725,input_checker56759,props,vec__56753,map56754,children,p__56727,output_checker56760,alert_STAR_,input_schema56758,validate__837__auto__,output_schema56757,G__56761,data__24427__auto__,ufv__,bs,opts__24428__auto__,meta56772){
this.fnk56756 = fnk56756;
this.map56755 = map56755;
this.owner = owner;
this.owner56725 = owner56725;
this.input_checker56759 = input_checker56759;
this.props = props;
this.vec__56753 = vec__56753;
this.map56754 = map56754;
this.children = children;
this.p__56727 = p__56727;
this.output_checker56760 = output_checker56760;
this.alert_STAR_ = alert_STAR_;
this.input_schema56758 = input_schema56758;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema56757 = output_schema56757;
this.G__56761 = G__56761;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.bs = bs;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta56772 = meta56772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t56771.cljs$lang$type = true;
om_bootstrap.random.t56771.cljs$lang$ctorStr = "om-bootstrap.random/t56771";
om_bootstrap.random.t56771.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"om-bootstrap.random/t56771");
});})(owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__))
;
om_bootstrap.random.t56771.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t56771.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__))
;
om_bootstrap.random.t56771.prototype.om$core$IRender$ = true;
om_bootstrap.random.t56771.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__56774 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__56775 = "&times;";return React.DOM.button(G__56774,G__56775);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__))
;
om_bootstrap.random.t56771.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t56771.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19564__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19564__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19564__auto__;
}
})()))
{var G__56776 = self__.owner;G__56776.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__56776;
} else
{return null;
}
});})(owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__))
;
om_bootstrap.random.t56771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__){
return (function (_56773){var self__ = this;
var _56773__$1 = this;return self__.meta56772;
});})(owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__))
;
om_bootstrap.random.t56771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__){
return (function (_56773,meta56772__$1){var self__ = this;
var _56773__$1 = this;return (new om_bootstrap.random.t56771(self__.fnk56756,self__.map56755,self__.owner,self__.owner56725,self__.input_checker56759,self__.props,self__.vec__56753,self__.map56754,self__.children,self__.p__56727,self__.output_checker56760,self__.alert_STAR_,self__.input_schema56758,self__.validate__837__auto__,self__.output_schema56757,self__.G__56761,self__.data__24427__auto__,self__.ufv__,self__.bs,self__.opts__24428__auto__,meta56772__$1));
});})(owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__))
;
om_bootstrap.random.__GT_t56771 = ((function (owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__){
return (function __GT_t56771(fnk56756__$1,map56755__$1,owner__$1,owner56725__$1,input_checker56759__$1,props__$1,vec__56753__$1,map56754__$1,children__$1,p__56727__$1,output_checker56760__$1,alert_STAR___$1,input_schema56758__$1,validate__837__auto____$1,output_schema56757__$1,G__56761__$1,data__24427__auto____$1,ufv____$1,bs__$1,opts__24428__auto____$1,meta56772){return (new om_bootstrap.random.t56771(fnk56756__$1,map56755__$1,owner__$1,owner56725__$1,input_checker56759__$1,props__$1,vec__56753__$1,map56754__$1,children__$1,p__56727__$1,output_checker56760__$1,alert_STAR___$1,input_schema56758__$1,validate__837__auto____$1,output_schema56757__$1,G__56761__$1,data__24427__auto____$1,ufv____$1,bs__$1,opts__24428__auto____$1,meta56772));
});})(owner,children,props,bs,map56755,validate__837__auto__,ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__))
;
}
return (new om_bootstrap.random.t56771(fnk56756,map56755,owner,owner56725,input_checker56759,props,vec__56753,map56754,children,p__56727,output_checker56760,alert_STAR_,input_schema56758,validate__837__auto__,output_schema56757,G__56761,data__24427__auto__,ufv__,bs,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56781 = (function (){var G__56777 = o__840__auto__;return (output_checker56760.cljs$core$IFn$_invoke$arity$1 ? output_checker56760.cljs$core$IFn$_invoke$arity$1(G__56777) : output_checker56760.call(null,G__56777));
})();if(cljs.core.truth_(temp__4126__auto___56781))
{var error__839__auto___56782 = temp__4126__auto___56781;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56756","fnk56756",-606514432,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56782], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56757,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56782], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56757,input_schema56758,input_checker56759,output_checker56760,vec__56753,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema56757,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56758], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56725,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var alert_STAR_ = function (data__24427__auto__,owner56725,var_args){
var p__56727 = null;if (arguments.length > 2) {
  p__56727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24427__auto__,owner56725,p__56727);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__56783){
var data__24427__auto__ = cljs.core.first(arglist__56783);
arglist__56783 = cljs.core.next(arglist__56783);
var owner56725 = cljs.core.first(arglist__56783);
var p__56727 = cljs.core.rest(arglist__56783);
return alert_STAR___delegate(data__24427__auto__,owner56725,p__56727);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24396__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24396__auto__,m56726){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24396__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m56726], 0)));
});
__GT_alert_STAR_ = function(cursor__24396__auto__,m56726){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24396__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24396__auto__,m56726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___56796 = schema.utils.use_fn_validation;var output_schema56784_56797 = om_bootstrap.types.Component;var input_schema56785_56798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56786_56799 = schema.core.checker(input_schema56785_56798);var output_checker56787_56800 = schema.core.checker(output_schema56784_56797);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___56796,output_schema56784_56797,input_schema56785_56798,input_checker56786_56799,output_checker56787_56800){
return (function() { 
var alert__$1__delegate = function (G__56788,rest56789){var validate__837__auto__ = ufv___56796.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56801 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56788,rest56789);var temp__4126__auto___56802 = (function (){var G__56793 = args__838__auto___56801;return (input_checker56786_56799.cljs$core$IFn$_invoke$arity$1 ? input_checker56786_56799.cljs$core$IFn$_invoke$arity$1(G__56793) : input_checker56786_56799.call(null,G__56793));
})();if(cljs.core.truth_(temp__4126__auto___56802))
{var error__839__auto___56803 = temp__4126__auto___56802;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56803], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56785_56798,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56801,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56803], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56788;var children = rest56789;while(true){
var vec__56794 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56794,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56794,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56804 = (function (){var G__56795 = o__840__auto__;return (output_checker56787_56800.cljs$core$IFn$_invoke$arity$1 ? output_checker56787_56800.cljs$core$IFn$_invoke$arity$1(G__56795) : output_checker56787_56800.call(null,G__56795));
})();if(cljs.core.truth_(temp__4126__auto___56804))
{var error__839__auto___56805 = temp__4126__auto___56804;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56805], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56784_56797,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56805], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__56788,var_args){
var rest56789 = null;if (arguments.length > 1) {
  rest56789 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__56788,rest56789);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__56806){
var G__56788 = cljs.core.first(arglist__56806);
var rest56789 = cljs.core.rest(arglist__56806);
return alert__$1__delegate(G__56788,rest56789);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___56796,output_schema56784_56797,input_schema56785_56798,input_checker56786_56799,output_checker56787_56800))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema56784_56797,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56785_56798], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___56821 = schema.utils.use_fn_validation;var output_schema56807_56822 = om_bootstrap.types.Component;var input_schema56808_56823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56809_56824 = schema.core.checker(input_schema56808_56823);var output_checker56810_56825 = schema.core.checker(output_schema56807_56822);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___56821,output_schema56807_56822,input_schema56808_56823,input_checker56809_56824,output_checker56810_56825){
return (function() { 
var popover__delegate = function (G__56811,rest56812){var validate__837__auto__ = ufv___56821.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56826 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56811,rest56812);var temp__4126__auto___56827 = (function (){var G__56817 = args__838__auto___56826;return (input_checker56809_56824.cljs$core$IFn$_invoke$arity$1 ? input_checker56809_56824.cljs$core$IFn$_invoke$arity$1(G__56817) : input_checker56809_56824.call(null,G__56817));
})();if(cljs.core.truth_(temp__4126__auto___56827))
{var error__839__auto___56828 = temp__4126__auto___56827;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56828], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56808_56823,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56826,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56828], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56811;var children = rest56812;while(true){
var vec__56818 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56818,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56818,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19586__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__56819 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__56819);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56829 = (function (){var G__56820 = o__840__auto__;return (output_checker56810_56825.cljs$core$IFn$_invoke$arity$1 ? output_checker56810_56825.cljs$core$IFn$_invoke$arity$1(G__56820) : output_checker56810_56825.call(null,G__56820));
})();if(cljs.core.truth_(temp__4126__auto___56829))
{var error__839__auto___56830 = temp__4126__auto___56829;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56830], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56807_56822,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56830], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__56811,var_args){
var rest56812 = null;if (arguments.length > 1) {
  rest56812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__56811,rest56812);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__56831){
var G__56811 = cljs.core.first(arglist__56831);
var rest56812 = cljs.core.rest(arglist__56831);
return popover__delegate(G__56811,rest56812);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___56821,output_schema56807_56822,input_schema56808_56823,input_checker56809_56824,output_checker56810_56825))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema56807_56822,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56808_56823], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___56844 = schema.utils.use_fn_validation;var output_schema56832_56845 = om_bootstrap.types.Component;var input_schema56833_56846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56834_56847 = schema.core.checker(input_schema56833_56846);var output_checker56835_56848 = schema.core.checker(output_schema56832_56845);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___56844,output_schema56832_56845,input_schema56833_56846,input_checker56834_56847,output_checker56835_56848){
return (function() { 
var badge__delegate = function (G__56836,rest56837){var validate__837__auto__ = ufv___56844.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56849 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56836,rest56837);var temp__4126__auto___56850 = (function (){var G__56841 = args__838__auto___56849;return (input_checker56834_56847.cljs$core$IFn$_invoke$arity$1 ? input_checker56834_56847.cljs$core$IFn$_invoke$arity$1(G__56841) : input_checker56834_56847.call(null,G__56841));
})();if(cljs.core.truth_(temp__4126__auto___56850))
{var error__839__auto___56851 = temp__4126__auto___56850;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56851], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56833_56846,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56849,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56851], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56836;var children = rest56837;while(true){
var vec__56842 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56842,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56842,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56852 = (function (){var G__56843 = o__840__auto__;return (output_checker56835_56848.cljs$core$IFn$_invoke$arity$1 ? output_checker56835_56848.cljs$core$IFn$_invoke$arity$1(G__56843) : output_checker56835_56848.call(null,G__56843));
})();if(cljs.core.truth_(temp__4126__auto___56852))
{var error__839__auto___56853 = temp__4126__auto___56852;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56853], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56832_56845,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56853], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__56836,var_args){
var rest56837 = null;if (arguments.length > 1) {
  rest56837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__56836,rest56837);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__56854){
var G__56836 = cljs.core.first(arglist__56854);
var rest56837 = cljs.core.rest(arglist__56854);
return badge__delegate(G__56836,rest56837);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___56844,output_schema56832_56845,input_schema56833_56846,input_checker56834_56847,output_checker56835_56848))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema56832_56845,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56833_56846], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___56867 = schema.utils.use_fn_validation;var output_schema56855_56868 = om_bootstrap.types.Component;var input_schema56856_56869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56857_56870 = schema.core.checker(input_schema56856_56869);var output_checker56858_56871 = schema.core.checker(output_schema56855_56868);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___56867,output_schema56855_56868,input_schema56856_56869,input_checker56857_56870,output_checker56858_56871){
return (function() { 
var glyphicon__delegate = function (G__56859,rest56860){var validate__837__auto__ = ufv___56867.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56872 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56859,rest56860);var temp__4126__auto___56873 = (function (){var G__56864 = args__838__auto___56872;return (input_checker56857_56870.cljs$core$IFn$_invoke$arity$1 ? input_checker56857_56870.cljs$core$IFn$_invoke$arity$1(G__56864) : input_checker56857_56870.call(null,G__56864));
})();if(cljs.core.truth_(temp__4126__auto___56873))
{var error__839__auto___56874 = temp__4126__auto___56873;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56874], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56856_56869,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56872,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56874], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56859;var children = rest56860;while(true){
var vec__56865 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56865,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56865,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56875 = (function (){var G__56866 = o__840__auto__;return (output_checker56858_56871.cljs$core$IFn$_invoke$arity$1 ? output_checker56858_56871.cljs$core$IFn$_invoke$arity$1(G__56866) : output_checker56858_56871.call(null,G__56866));
})();if(cljs.core.truth_(temp__4126__auto___56875))
{var error__839__auto___56876 = temp__4126__auto___56875;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56876], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56855_56868,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56876], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__56859,var_args){
var rest56860 = null;if (arguments.length > 1) {
  rest56860 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__56859,rest56860);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__56877){
var G__56859 = cljs.core.first(arglist__56877);
var rest56860 = cljs.core.rest(arglist__56877);
return glyphicon__delegate(G__56859,rest56860);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___56867,output_schema56855_56868,input_schema56856_56869,input_checker56857_56870,output_checker56858_56871))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema56855_56868,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56856_56869], null)));
//# sourceMappingURL=random.js.map