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
var ufv___48200 = schema.utils.use_fn_validation;var output_schema48190_48201 = om_bootstrap.types.Component;var input_schema48191_48202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48192_48203 = schema.core.checker(input_schema48191_48202);var output_checker48193_48204 = schema.core.checker(output_schema48190_48201);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___48200,output_schema48190_48201,input_schema48191_48202,input_checker48192_48203,output_checker48193_48204){
return (function() { 
var jumbotron__delegate = function (G__48194,rest48195){var validate__837__auto__ = ufv___48200.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48205 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48194,rest48195);var temp__4126__auto___48206 = (function (){var G__48198 = args__838__auto___48205;return (input_checker48192_48203.cljs$core$IFn$_invoke$arity$1 ? input_checker48192_48203.cljs$core$IFn$_invoke$arity$1(G__48198) : input_checker48192_48203.call(null,G__48198));
})();if(cljs.core.truth_(temp__4126__auto___48206))
{var error__839__auto___48207 = temp__4126__auto___48206;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48207], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48191_48202,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48205,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48207], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48194;var children = rest48195;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48208 = (function (){var G__48199 = o__840__auto__;return (output_checker48193_48204.cljs$core$IFn$_invoke$arity$1 ? output_checker48193_48204.cljs$core$IFn$_invoke$arity$1(G__48199) : output_checker48193_48204.call(null,G__48199));
})();if(cljs.core.truth_(temp__4126__auto___48208))
{var error__839__auto___48209 = temp__4126__auto___48208;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48209], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48190_48201,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48209], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__48194,var_args){
var rest48195 = null;if (arguments.length > 1) {
  rest48195 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__48194,rest48195);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__48210){
var G__48194 = cljs.core.first(arglist__48210);
var rest48195 = cljs.core.rest(arglist__48210);
return jumbotron__delegate(G__48194,rest48195);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___48200,output_schema48190_48201,input_schema48191_48202,input_checker48192_48203,output_checker48193_48204))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema48190_48201,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48191_48202], null)));
var ufv___48223 = schema.utils.use_fn_validation;var output_schema48211_48224 = om_bootstrap.types.Component;var input_schema48212_48225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48213_48226 = schema.core.checker(input_schema48212_48225);var output_checker48214_48227 = schema.core.checker(output_schema48211_48224);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___48223,output_schema48211_48224,input_schema48212_48225,input_checker48213_48226,output_checker48214_48227){
return (function() { 
var label__delegate = function (G__48215,rest48216){var validate__837__auto__ = ufv___48223.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48228 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48215,rest48216);var temp__4126__auto___48229 = (function (){var G__48220 = args__838__auto___48228;return (input_checker48213_48226.cljs$core$IFn$_invoke$arity$1 ? input_checker48213_48226.cljs$core$IFn$_invoke$arity$1(G__48220) : input_checker48213_48226.call(null,G__48220));
})();if(cljs.core.truth_(temp__4126__auto___48229))
{var error__839__auto___48230 = temp__4126__auto___48229;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48230], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48212_48225,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48228,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48230], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48215;var children = rest48216;while(true){
var vec__48221 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48221,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48221,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48231 = (function (){var G__48222 = o__840__auto__;return (output_checker48214_48227.cljs$core$IFn$_invoke$arity$1 ? output_checker48214_48227.cljs$core$IFn$_invoke$arity$1(G__48222) : output_checker48214_48227.call(null,G__48222));
})();if(cljs.core.truth_(temp__4126__auto___48231))
{var error__839__auto___48232 = temp__4126__auto___48231;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48232], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48211_48224,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48232], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__48215,var_args){
var rest48216 = null;if (arguments.length > 1) {
  rest48216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__48215,rest48216);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__48233){
var G__48215 = cljs.core.first(arglist__48233);
var rest48216 = cljs.core.rest(arglist__48233);
return label__delegate(G__48215,rest48216);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___48223,output_schema48211_48224,input_schema48212_48225,input_checker48213_48226,output_checker48214_48227))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema48211_48224,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48212_48225], null)));
var ufv___48246 = schema.utils.use_fn_validation;var output_schema48234_48247 = om_bootstrap.types.Component;var input_schema48235_48248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48236_48249 = schema.core.checker(input_schema48235_48248);var output_checker48237_48250 = schema.core.checker(output_schema48234_48247);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___48246,output_schema48234_48247,input_schema48235_48248,input_checker48236_48249,output_checker48237_48250){
return (function() { 
var well__delegate = function (G__48238,rest48239){var validate__837__auto__ = ufv___48246.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48251 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48238,rest48239);var temp__4126__auto___48252 = (function (){var G__48243 = args__838__auto___48251;return (input_checker48236_48249.cljs$core$IFn$_invoke$arity$1 ? input_checker48236_48249.cljs$core$IFn$_invoke$arity$1(G__48243) : input_checker48236_48249.call(null,G__48243));
})();if(cljs.core.truth_(temp__4126__auto___48252))
{var error__839__auto___48253 = temp__4126__auto___48252;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48253], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48235_48248,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48251,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48253], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48238;var children = rest48239;while(true){
var vec__48244 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48244,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48244,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48254 = (function (){var G__48245 = o__840__auto__;return (output_checker48237_48250.cljs$core$IFn$_invoke$arity$1 ? output_checker48237_48250.cljs$core$IFn$_invoke$arity$1(G__48245) : output_checker48237_48250.call(null,G__48245));
})();if(cljs.core.truth_(temp__4126__auto___48254))
{var error__839__auto___48255 = temp__4126__auto___48254;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48255], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48234_48247,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48255], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__48238,var_args){
var rest48239 = null;if (arguments.length > 1) {
  rest48239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__48238,rest48239);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__48256){
var G__48238 = cljs.core.first(arglist__48256);
var rest48239 = cljs.core.rest(arglist__48256);
return well__delegate(G__48238,rest48239);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___48246,output_schema48234_48247,input_schema48235_48248,input_checker48236_48249,output_checker48237_48250))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema48234_48247,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48235_48248], null)));
var ufv___48267 = schema.utils.use_fn_validation;var output_schema48257_48268 = om_bootstrap.types.Component;var input_schema48258_48269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48259_48270 = schema.core.checker(input_schema48258_48269);var output_checker48260_48271 = schema.core.checker(output_schema48257_48268);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___48267,output_schema48257_48268,input_schema48258_48269,input_checker48259_48270,output_checker48260_48271){
return (function() { 
var page_header__delegate = function (G__48261,rest48262){var validate__837__auto__ = ufv___48267.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48272 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48261,rest48262);var temp__4126__auto___48273 = (function (){var G__48265 = args__838__auto___48272;return (input_checker48259_48270.cljs$core$IFn$_invoke$arity$1 ? input_checker48259_48270.cljs$core$IFn$_invoke$arity$1(G__48265) : input_checker48259_48270.call(null,G__48265));
})();if(cljs.core.truth_(temp__4126__auto___48273))
{var error__839__auto___48274 = temp__4126__auto___48273;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48274], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48258_48269,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48272,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48274], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48261;var children = rest48262;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48275 = (function (){var G__48266 = o__840__auto__;return (output_checker48260_48271.cljs$core$IFn$_invoke$arity$1 ? output_checker48260_48271.cljs$core$IFn$_invoke$arity$1(G__48266) : output_checker48260_48271.call(null,G__48266));
})();if(cljs.core.truth_(temp__4126__auto___48275))
{var error__839__auto___48276 = temp__4126__auto___48275;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48276], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48257_48268,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48276], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__48261,var_args){
var rest48262 = null;if (arguments.length > 1) {
  rest48262 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__48261,rest48262);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__48277){
var G__48261 = cljs.core.first(arglist__48277);
var rest48262 = cljs.core.rest(arglist__48277);
return page_header__delegate(G__48261,rest48262);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___48267,output_schema48257_48268,input_schema48258_48269,input_checker48259_48270,output_checker48260_48271))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema48257_48268,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48258_48269], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___48292 = schema.utils.use_fn_validation;var output_schema48278_48293 = om_bootstrap.types.Component;var input_schema48279_48294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48280_48295 = schema.core.checker(input_schema48279_48294);var output_checker48281_48296 = schema.core.checker(output_schema48278_48293);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___48292,output_schema48278_48293,input_schema48279_48294,input_checker48280_48295,output_checker48281_48296){
return (function() { 
var tooltip__delegate = function (G__48282,rest48283){var validate__837__auto__ = ufv___48292.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48297 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48282,rest48283);var temp__4126__auto___48298 = (function (){var G__48288 = args__838__auto___48297;return (input_checker48280_48295.cljs$core$IFn$_invoke$arity$1 ? input_checker48280_48295.cljs$core$IFn$_invoke$arity$1(G__48288) : input_checker48280_48295.call(null,G__48288));
})();if(cljs.core.truth_(temp__4126__auto___48298))
{var error__839__auto___48299 = temp__4126__auto___48298;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48299], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48279_48294,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48297,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48299], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48282;var children = rest48283;while(true){
var vec__48289 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48289,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48289,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19687__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__48290 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__48290);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48300 = (function (){var G__48291 = o__840__auto__;return (output_checker48281_48296.cljs$core$IFn$_invoke$arity$1 ? output_checker48281_48296.cljs$core$IFn$_invoke$arity$1(G__48291) : output_checker48281_48296.call(null,G__48291));
})();if(cljs.core.truth_(temp__4126__auto___48300))
{var error__839__auto___48301 = temp__4126__auto___48300;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48301], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48278_48293,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48301], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__48282,var_args){
var rest48283 = null;if (arguments.length > 1) {
  rest48283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__48282,rest48283);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__48302){
var G__48282 = cljs.core.first(arglist__48302);
var rest48283 = cljs.core.rest(arglist__48302);
return tooltip__delegate(G__48282,rest48283);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___48292,output_schema48278_48293,input_schema48279_48294,input_checker48280_48295,output_checker48281_48296))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema48278_48293,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48279_48294], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__24428__auto__ = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));(descriptor__24428__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__24428__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__24457__auto__,owner48303,p__48305){var vec__48331 = p__48305;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48331,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema48335 = schema.core.Any;var input_schema48336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map48332","map48332",-1484487239,null))], null);var input_checker48337 = schema.core.checker(input_schema48336);var output_checker48338 = schema.core.checker(output_schema48335);return schema.core.schematize_fn(((function (ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__){
return (function fnk48334(G__48339){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48356 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48339], null);var temp__4126__auto___48357 = (function (){var G__48348 = args__838__auto___48356;return (input_checker48337.cljs$core$IFn$_invoke$arity$1 ? input_checker48337.cljs$core$IFn$_invoke$arity$1(G__48348) : input_checker48337.call(null,G__48348));
})();if(cljs.core.truth_(temp__4126__auto___48357))
{var error__839__auto___48358 = temp__4126__auto___48357;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk48334","fnk48334",1630653147,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48358], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48336,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48356,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48358], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map48332 = G__48339;while(true){
if(cljs.core.map_QMARK_(map48332))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map48332], 0))));
}
var map48333 = plumbing.fnk.schema.safe_get(map48332,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map48333,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map48333,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map48333,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map48332,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t48349 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t48349 = (function (G__48339,owner,map48333,input_checker48337,props,children,output_checker48338,owner48303,alert_STAR_,opts__24458__auto__,output_schema48335,map48332,validate__837__auto__,input_schema48336,fnk48334,ufv__,data__24457__auto__,bs,vec__48331,p__48305,meta48350){
this.G__48339 = G__48339;
this.owner = owner;
this.map48333 = map48333;
this.input_checker48337 = input_checker48337;
this.props = props;
this.children = children;
this.output_checker48338 = output_checker48338;
this.owner48303 = owner48303;
this.alert_STAR_ = alert_STAR_;
this.opts__24458__auto__ = opts__24458__auto__;
this.output_schema48335 = output_schema48335;
this.map48332 = map48332;
this.validate__837__auto__ = validate__837__auto__;
this.input_schema48336 = input_schema48336;
this.fnk48334 = fnk48334;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.bs = bs;
this.vec__48331 = vec__48331;
this.p__48305 = p__48305;
this.meta48350 = meta48350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t48349.cljs$lang$type = true;
om_bootstrap.random.t48349.cljs$lang$ctorStr = "om-bootstrap.random/t48349";
om_bootstrap.random.t48349.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"om-bootstrap.random/t48349");
});})(owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__))
;
om_bootstrap.random.t48349.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t48349.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__))
;
om_bootstrap.random.t48349.prototype.om$core$IRender$ = true;
om_bootstrap.random.t48349.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__48352 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__48353 = "&times;";return React.DOM.button(G__48352,G__48353);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__))
;
om_bootstrap.random.t48349.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t48349.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19670__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19670__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19670__auto__;
}
})()))
{var G__48354 = self__.owner;G__48354.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__48354;
} else
{return null;
}
});})(owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__))
;
om_bootstrap.random.t48349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__){
return (function (_48351){var self__ = this;
var _48351__$1 = this;return self__.meta48350;
});})(owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__))
;
om_bootstrap.random.t48349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__){
return (function (_48351,meta48350__$1){var self__ = this;
var _48351__$1 = this;return (new om_bootstrap.random.t48349(self__.G__48339,self__.owner,self__.map48333,self__.input_checker48337,self__.props,self__.children,self__.output_checker48338,self__.owner48303,self__.alert_STAR_,self__.opts__24458__auto__,self__.output_schema48335,self__.map48332,self__.validate__837__auto__,self__.input_schema48336,self__.fnk48334,self__.ufv__,self__.data__24457__auto__,self__.bs,self__.vec__48331,self__.p__48305,meta48350__$1));
});})(owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__))
;
om_bootstrap.random.__GT_t48349 = ((function (owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__){
return (function __GT_t48349(G__48339__$1,owner__$1,map48333__$1,input_checker48337__$1,props__$1,children__$1,output_checker48338__$1,owner48303__$1,alert_STAR___$1,opts__24458__auto____$1,output_schema48335__$1,map48332__$1,validate__837__auto____$1,input_schema48336__$1,fnk48334__$1,ufv____$1,data__24457__auto____$1,bs__$1,vec__48331__$1,p__48305__$1,meta48350){return (new om_bootstrap.random.t48349(G__48339__$1,owner__$1,map48333__$1,input_checker48337__$1,props__$1,children__$1,output_checker48338__$1,owner48303__$1,alert_STAR___$1,opts__24458__auto____$1,output_schema48335__$1,map48332__$1,validate__837__auto____$1,input_schema48336__$1,fnk48334__$1,ufv____$1,data__24457__auto____$1,bs__$1,vec__48331__$1,p__48305__$1,meta48350));
});})(owner,children,props,bs,map48333,validate__837__auto__,ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__))
;
}
return (new om_bootstrap.random.t48349(G__48339,owner,map48333,input_checker48337,props,children,output_checker48338,owner48303,alert_STAR_,opts__24458__auto__,output_schema48335,map48332,validate__837__auto__,input_schema48336,fnk48334,ufv__,data__24457__auto__,bs,vec__48331,p__48305,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48359 = (function (){var G__48355 = o__840__auto__;return (output_checker48338.cljs$core$IFn$_invoke$arity$1 ? output_checker48338.cljs$core$IFn$_invoke$arity$1(G__48355) : output_checker48338.call(null,G__48355));
})();if(cljs.core.truth_(temp__4126__auto___48359))
{var error__839__auto___48360 = temp__4126__auto___48359;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk48334","fnk48334",1630653147,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48360], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48335,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48360], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema48335,input_schema48336,input_checker48337,output_checker48338,vec__48331,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema48335,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48336], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner48303,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var alert_STAR_ = function (data__24457__auto__,owner48303,var_args){
var p__48305 = null;if (arguments.length > 2) {
  p__48305 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24457__auto__,owner48303,p__48305);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__48361){
var data__24457__auto__ = cljs.core.first(arglist__48361);
arglist__48361 = cljs.core.next(arglist__48361);
var owner48303 = cljs.core.first(arglist__48361);
var p__48305 = cljs.core.rest(arglist__48361);
return alert_STAR___delegate(data__24457__auto__,owner48303,p__48305);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24426__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24426__auto__,m48304){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24426__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m48304], 0)));
});
__GT_alert_STAR_ = function(cursor__24426__auto__,m48304){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24426__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24426__auto__,m48304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___48374 = schema.utils.use_fn_validation;var output_schema48362_48375 = om_bootstrap.types.Component;var input_schema48363_48376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48364_48377 = schema.core.checker(input_schema48363_48376);var output_checker48365_48378 = schema.core.checker(output_schema48362_48375);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___48374,output_schema48362_48375,input_schema48363_48376,input_checker48364_48377,output_checker48365_48378){
return (function() { 
var alert__$1__delegate = function (G__48366,rest48367){var validate__837__auto__ = ufv___48374.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48379 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48366,rest48367);var temp__4126__auto___48380 = (function (){var G__48371 = args__838__auto___48379;return (input_checker48364_48377.cljs$core$IFn$_invoke$arity$1 ? input_checker48364_48377.cljs$core$IFn$_invoke$arity$1(G__48371) : input_checker48364_48377.call(null,G__48371));
})();if(cljs.core.truth_(temp__4126__auto___48380))
{var error__839__auto___48381 = temp__4126__auto___48380;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48381], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48363_48376,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48379,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48381], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48366;var children = rest48367;while(true){
var vec__48372 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48382 = (function (){var G__48373 = o__840__auto__;return (output_checker48365_48378.cljs$core$IFn$_invoke$arity$1 ? output_checker48365_48378.cljs$core$IFn$_invoke$arity$1(G__48373) : output_checker48365_48378.call(null,G__48373));
})();if(cljs.core.truth_(temp__4126__auto___48382))
{var error__839__auto___48383 = temp__4126__auto___48382;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48383], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48362_48375,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48383], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__48366,var_args){
var rest48367 = null;if (arguments.length > 1) {
  rest48367 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__48366,rest48367);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__48384){
var G__48366 = cljs.core.first(arglist__48384);
var rest48367 = cljs.core.rest(arglist__48384);
return alert__$1__delegate(G__48366,rest48367);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___48374,output_schema48362_48375,input_schema48363_48376,input_checker48364_48377,output_checker48365_48378))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema48362_48375,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48363_48376], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___48399 = schema.utils.use_fn_validation;var output_schema48385_48400 = om_bootstrap.types.Component;var input_schema48386_48401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48387_48402 = schema.core.checker(input_schema48386_48401);var output_checker48388_48403 = schema.core.checker(output_schema48385_48400);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___48399,output_schema48385_48400,input_schema48386_48401,input_checker48387_48402,output_checker48388_48403){
return (function() { 
var popover__delegate = function (G__48389,rest48390){var validate__837__auto__ = ufv___48399.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48404 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48389,rest48390);var temp__4126__auto___48405 = (function (){var G__48395 = args__838__auto___48404;return (input_checker48387_48402.cljs$core$IFn$_invoke$arity$1 ? input_checker48387_48402.cljs$core$IFn$_invoke$arity$1(G__48395) : input_checker48387_48402.call(null,G__48395));
})();if(cljs.core.truth_(temp__4126__auto___48405))
{var error__839__auto___48406 = temp__4126__auto___48405;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48406], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48386_48401,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48404,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48406], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48389;var children = rest48390;while(true){
var vec__48396 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48396,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48396,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19687__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__48397 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__48397);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48407 = (function (){var G__48398 = o__840__auto__;return (output_checker48388_48403.cljs$core$IFn$_invoke$arity$1 ? output_checker48388_48403.cljs$core$IFn$_invoke$arity$1(G__48398) : output_checker48388_48403.call(null,G__48398));
})();if(cljs.core.truth_(temp__4126__auto___48407))
{var error__839__auto___48408 = temp__4126__auto___48407;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48408], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48385_48400,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48408], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__48389,var_args){
var rest48390 = null;if (arguments.length > 1) {
  rest48390 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__48389,rest48390);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__48409){
var G__48389 = cljs.core.first(arglist__48409);
var rest48390 = cljs.core.rest(arglist__48409);
return popover__delegate(G__48389,rest48390);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___48399,output_schema48385_48400,input_schema48386_48401,input_checker48387_48402,output_checker48388_48403))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema48385_48400,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48386_48401], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___48422 = schema.utils.use_fn_validation;var output_schema48410_48423 = om_bootstrap.types.Component;var input_schema48411_48424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48412_48425 = schema.core.checker(input_schema48411_48424);var output_checker48413_48426 = schema.core.checker(output_schema48410_48423);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___48422,output_schema48410_48423,input_schema48411_48424,input_checker48412_48425,output_checker48413_48426){
return (function() { 
var badge__delegate = function (G__48414,rest48415){var validate__837__auto__ = ufv___48422.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48427 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48414,rest48415);var temp__4126__auto___48428 = (function (){var G__48419 = args__838__auto___48427;return (input_checker48412_48425.cljs$core$IFn$_invoke$arity$1 ? input_checker48412_48425.cljs$core$IFn$_invoke$arity$1(G__48419) : input_checker48412_48425.call(null,G__48419));
})();if(cljs.core.truth_(temp__4126__auto___48428))
{var error__839__auto___48429 = temp__4126__auto___48428;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48429], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48411_48424,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48427,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48429], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48414;var children = rest48415;while(true){
var vec__48420 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48420,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48420,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48430 = (function (){var G__48421 = o__840__auto__;return (output_checker48413_48426.cljs$core$IFn$_invoke$arity$1 ? output_checker48413_48426.cljs$core$IFn$_invoke$arity$1(G__48421) : output_checker48413_48426.call(null,G__48421));
})();if(cljs.core.truth_(temp__4126__auto___48430))
{var error__839__auto___48431 = temp__4126__auto___48430;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48431], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48410_48423,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48431], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__48414,var_args){
var rest48415 = null;if (arguments.length > 1) {
  rest48415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__48414,rest48415);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__48432){
var G__48414 = cljs.core.first(arglist__48432);
var rest48415 = cljs.core.rest(arglist__48432);
return badge__delegate(G__48414,rest48415);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___48422,output_schema48410_48423,input_schema48411_48424,input_checker48412_48425,output_checker48413_48426))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema48410_48423,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48411_48424], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___48445 = schema.utils.use_fn_validation;var output_schema48433_48446 = om_bootstrap.types.Component;var input_schema48434_48447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker48435_48448 = schema.core.checker(input_schema48434_48447);var output_checker48436_48449 = schema.core.checker(output_schema48433_48446);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___48445,output_schema48433_48446,input_schema48434_48447,input_checker48435_48448,output_checker48436_48449){
return (function() { 
var glyphicon__delegate = function (G__48437,rest48438){var validate__837__auto__ = ufv___48445.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48450 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__48437,rest48438);var temp__4126__auto___48451 = (function (){var G__48442 = args__838__auto___48450;return (input_checker48435_48448.cljs$core$IFn$_invoke$arity$1 ? input_checker48435_48448.cljs$core$IFn$_invoke$arity$1(G__48442) : input_checker48435_48448.call(null,G__48442));
})();if(cljs.core.truth_(temp__4126__auto___48451))
{var error__839__auto___48452 = temp__4126__auto___48451;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48452], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48434_48447,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48450,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48452], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__48437;var children = rest48438;while(true){
var vec__48443 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48453 = (function (){var G__48444 = o__840__auto__;return (output_checker48436_48449.cljs$core$IFn$_invoke$arity$1 ? output_checker48436_48449.cljs$core$IFn$_invoke$arity$1(G__48444) : output_checker48436_48449.call(null,G__48444));
})();if(cljs.core.truth_(temp__4126__auto___48453))
{var error__839__auto___48454 = temp__4126__auto___48453;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48454], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48433_48446,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48454], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__48437,var_args){
var rest48438 = null;if (arguments.length > 1) {
  rest48438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__48437,rest48438);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__48455){
var G__48437 = cljs.core.first(arglist__48455);
var rest48438 = cljs.core.rest(arglist__48455);
return glyphicon__delegate(G__48437,rest48438);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___48445,output_schema48433_48446,input_schema48434_48447,input_checker48435_48448,output_checker48436_48449))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema48433_48446,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48434_48447], null)));
//# sourceMappingURL=random.js.map