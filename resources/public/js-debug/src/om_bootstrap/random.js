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
var ufv___56341 = schema.utils.use_fn_validation;var output_schema56331_56342 = om_bootstrap.types.Component;var input_schema56332_56343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56333_56344 = schema.core.checker(input_schema56332_56343);var output_checker56334_56345 = schema.core.checker(output_schema56331_56342);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___56341,output_schema56331_56342,input_schema56332_56343,input_checker56333_56344,output_checker56334_56345){
return (function() { 
var jumbotron__delegate = function (G__56335,rest56336){var validate__837__auto__ = ufv___56341.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56346 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56335,rest56336);var temp__4126__auto___56347 = (function (){var G__56339 = args__838__auto___56346;return (input_checker56333_56344.cljs$core$IFn$_invoke$arity$1 ? input_checker56333_56344.cljs$core$IFn$_invoke$arity$1(G__56339) : input_checker56333_56344.call(null,G__56339));
})();if(cljs.core.truth_(temp__4126__auto___56347))
{var error__839__auto___56348 = temp__4126__auto___56347;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56348], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56332_56343,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56346,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56348], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56335;var children = rest56336;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56349 = (function (){var G__56340 = o__840__auto__;return (output_checker56334_56345.cljs$core$IFn$_invoke$arity$1 ? output_checker56334_56345.cljs$core$IFn$_invoke$arity$1(G__56340) : output_checker56334_56345.call(null,G__56340));
})();if(cljs.core.truth_(temp__4126__auto___56349))
{var error__839__auto___56350 = temp__4126__auto___56349;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56350], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56331_56342,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56350], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__56335,var_args){
var rest56336 = null;if (arguments.length > 1) {
  rest56336 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__56335,rest56336);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__56351){
var G__56335 = cljs.core.first(arglist__56351);
var rest56336 = cljs.core.rest(arglist__56351);
return jumbotron__delegate(G__56335,rest56336);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___56341,output_schema56331_56342,input_schema56332_56343,input_checker56333_56344,output_checker56334_56345))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema56331_56342,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56332_56343], null)));
var ufv___56364 = schema.utils.use_fn_validation;var output_schema56352_56365 = om_bootstrap.types.Component;var input_schema56353_56366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56354_56367 = schema.core.checker(input_schema56353_56366);var output_checker56355_56368 = schema.core.checker(output_schema56352_56365);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___56364,output_schema56352_56365,input_schema56353_56366,input_checker56354_56367,output_checker56355_56368){
return (function() { 
var label__delegate = function (G__56356,rest56357){var validate__837__auto__ = ufv___56364.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56369 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56356,rest56357);var temp__4126__auto___56370 = (function (){var G__56361 = args__838__auto___56369;return (input_checker56354_56367.cljs$core$IFn$_invoke$arity$1 ? input_checker56354_56367.cljs$core$IFn$_invoke$arity$1(G__56361) : input_checker56354_56367.call(null,G__56361));
})();if(cljs.core.truth_(temp__4126__auto___56370))
{var error__839__auto___56371 = temp__4126__auto___56370;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56371], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56353_56366,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56369,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56371], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56356;var children = rest56357;while(true){
var vec__56362 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56362,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56362,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56372 = (function (){var G__56363 = o__840__auto__;return (output_checker56355_56368.cljs$core$IFn$_invoke$arity$1 ? output_checker56355_56368.cljs$core$IFn$_invoke$arity$1(G__56363) : output_checker56355_56368.call(null,G__56363));
})();if(cljs.core.truth_(temp__4126__auto___56372))
{var error__839__auto___56373 = temp__4126__auto___56372;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56373], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56352_56365,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56373], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__56356,var_args){
var rest56357 = null;if (arguments.length > 1) {
  rest56357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__56356,rest56357);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__56374){
var G__56356 = cljs.core.first(arglist__56374);
var rest56357 = cljs.core.rest(arglist__56374);
return label__delegate(G__56356,rest56357);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___56364,output_schema56352_56365,input_schema56353_56366,input_checker56354_56367,output_checker56355_56368))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema56352_56365,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56353_56366], null)));
var ufv___56387 = schema.utils.use_fn_validation;var output_schema56375_56388 = om_bootstrap.types.Component;var input_schema56376_56389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56377_56390 = schema.core.checker(input_schema56376_56389);var output_checker56378_56391 = schema.core.checker(output_schema56375_56388);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___56387,output_schema56375_56388,input_schema56376_56389,input_checker56377_56390,output_checker56378_56391){
return (function() { 
var well__delegate = function (G__56379,rest56380){var validate__837__auto__ = ufv___56387.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56392 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56379,rest56380);var temp__4126__auto___56393 = (function (){var G__56384 = args__838__auto___56392;return (input_checker56377_56390.cljs$core$IFn$_invoke$arity$1 ? input_checker56377_56390.cljs$core$IFn$_invoke$arity$1(G__56384) : input_checker56377_56390.call(null,G__56384));
})();if(cljs.core.truth_(temp__4126__auto___56393))
{var error__839__auto___56394 = temp__4126__auto___56393;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56394], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56376_56389,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56392,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56394], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56379;var children = rest56380;while(true){
var vec__56385 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56385,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56385,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56395 = (function (){var G__56386 = o__840__auto__;return (output_checker56378_56391.cljs$core$IFn$_invoke$arity$1 ? output_checker56378_56391.cljs$core$IFn$_invoke$arity$1(G__56386) : output_checker56378_56391.call(null,G__56386));
})();if(cljs.core.truth_(temp__4126__auto___56395))
{var error__839__auto___56396 = temp__4126__auto___56395;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56396], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56375_56388,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56396], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__56379,var_args){
var rest56380 = null;if (arguments.length > 1) {
  rest56380 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__56379,rest56380);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__56397){
var G__56379 = cljs.core.first(arglist__56397);
var rest56380 = cljs.core.rest(arglist__56397);
return well__delegate(G__56379,rest56380);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___56387,output_schema56375_56388,input_schema56376_56389,input_checker56377_56390,output_checker56378_56391))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema56375_56388,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56376_56389], null)));
var ufv___56408 = schema.utils.use_fn_validation;var output_schema56398_56409 = om_bootstrap.types.Component;var input_schema56399_56410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56400_56411 = schema.core.checker(input_schema56399_56410);var output_checker56401_56412 = schema.core.checker(output_schema56398_56409);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___56408,output_schema56398_56409,input_schema56399_56410,input_checker56400_56411,output_checker56401_56412){
return (function() { 
var page_header__delegate = function (G__56402,rest56403){var validate__837__auto__ = ufv___56408.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56413 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56402,rest56403);var temp__4126__auto___56414 = (function (){var G__56406 = args__838__auto___56413;return (input_checker56400_56411.cljs$core$IFn$_invoke$arity$1 ? input_checker56400_56411.cljs$core$IFn$_invoke$arity$1(G__56406) : input_checker56400_56411.call(null,G__56406));
})();if(cljs.core.truth_(temp__4126__auto___56414))
{var error__839__auto___56415 = temp__4126__auto___56414;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56415], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56399_56410,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56413,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56415], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56402;var children = rest56403;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56416 = (function (){var G__56407 = o__840__auto__;return (output_checker56401_56412.cljs$core$IFn$_invoke$arity$1 ? output_checker56401_56412.cljs$core$IFn$_invoke$arity$1(G__56407) : output_checker56401_56412.call(null,G__56407));
})();if(cljs.core.truth_(temp__4126__auto___56416))
{var error__839__auto___56417 = temp__4126__auto___56416;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56417], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56398_56409,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56417], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__56402,var_args){
var rest56403 = null;if (arguments.length > 1) {
  rest56403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__56402,rest56403);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__56418){
var G__56402 = cljs.core.first(arglist__56418);
var rest56403 = cljs.core.rest(arglist__56418);
return page_header__delegate(G__56402,rest56403);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___56408,output_schema56398_56409,input_schema56399_56410,input_checker56400_56411,output_checker56401_56412))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema56398_56409,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56399_56410], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___56433 = schema.utils.use_fn_validation;var output_schema56419_56434 = om_bootstrap.types.Component;var input_schema56420_56435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56421_56436 = schema.core.checker(input_schema56420_56435);var output_checker56422_56437 = schema.core.checker(output_schema56419_56434);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___56433,output_schema56419_56434,input_schema56420_56435,input_checker56421_56436,output_checker56422_56437){
return (function() { 
var tooltip__delegate = function (G__56423,rest56424){var validate__837__auto__ = ufv___56433.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56438 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56423,rest56424);var temp__4126__auto___56439 = (function (){var G__56429 = args__838__auto___56438;return (input_checker56421_56436.cljs$core$IFn$_invoke$arity$1 ? input_checker56421_56436.cljs$core$IFn$_invoke$arity$1(G__56429) : input_checker56421_56436.call(null,G__56429));
})();if(cljs.core.truth_(temp__4126__auto___56439))
{var error__839__auto___56440 = temp__4126__auto___56439;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56440], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56420_56435,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56438,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56440], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56423;var children = rest56424;while(true){
var vec__56430 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56430,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56430,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19289__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__56431 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__56431);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56441 = (function (){var G__56432 = o__840__auto__;return (output_checker56422_56437.cljs$core$IFn$_invoke$arity$1 ? output_checker56422_56437.cljs$core$IFn$_invoke$arity$1(G__56432) : output_checker56422_56437.call(null,G__56432));
})();if(cljs.core.truth_(temp__4126__auto___56441))
{var error__839__auto___56442 = temp__4126__auto___56441;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56442], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56419_56434,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56442], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__56423,var_args){
var rest56424 = null;if (arguments.length > 1) {
  rest56424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__56423,rest56424);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__56443){
var G__56423 = cljs.core.first(arglist__56443);
var rest56424 = cljs.core.rest(arglist__56443);
return tooltip__delegate(G__56423,rest56424);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___56433,output_schema56419_56434,input_schema56420_56435,input_checker56421_56436,output_checker56422_56437))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema56419_56434,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56420_56435], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__24115__auto__ = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));(descriptor__24115__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__24115__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__24144__auto__,owner56444,p__56446){var vec__56472 = p__56446;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56472,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56476 = schema.core.Any;var input_schema56477 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map56473","map56473",-675037663,null))], null);var input_checker56478 = schema.core.checker(input_schema56477);var output_checker56479 = schema.core.checker(output_schema56476);return schema.core.schematize_fn(((function (ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__){
return (function fnk56475(G__56480){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56480], null);var temp__4126__auto___56498 = (function (){var G__56489 = args__838__auto___56497;return (input_checker56478.cljs$core$IFn$_invoke$arity$1 ? input_checker56478.cljs$core$IFn$_invoke$arity$1(G__56489) : input_checker56478.call(null,G__56489));
})();if(cljs.core.truth_(temp__4126__auto___56498))
{var error__839__auto___56499 = temp__4126__auto___56498;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56475","fnk56475",1416699705,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56499], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56477,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56497,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56499], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56473 = G__56480;while(true){
if(cljs.core.map_QMARK_(map56473))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56473], 0))));
}
var map56474 = plumbing.fnk.schema.safe_get(map56473,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map56474,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map56474,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map56474,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map56473,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t56490 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t56490 = (function (p__56446,map56473,input_checker56478,owner56444,owner,props,children,data__24144__auto__,opts__24145__auto__,G__56480,alert_STAR_,input_schema56477,vec__56472,output_schema56476,fnk56475,map56474,output_checker56479,validate__837__auto__,ufv__,bs,meta56491){
this.p__56446 = p__56446;
this.map56473 = map56473;
this.input_checker56478 = input_checker56478;
this.owner56444 = owner56444;
this.owner = owner;
this.props = props;
this.children = children;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.G__56480 = G__56480;
this.alert_STAR_ = alert_STAR_;
this.input_schema56477 = input_schema56477;
this.vec__56472 = vec__56472;
this.output_schema56476 = output_schema56476;
this.fnk56475 = fnk56475;
this.map56474 = map56474;
this.output_checker56479 = output_checker56479;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.bs = bs;
this.meta56491 = meta56491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t56490.cljs$lang$type = true;
om_bootstrap.random.t56490.cljs$lang$ctorStr = "om-bootstrap.random/t56490";
om_bootstrap.random.t56490.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"om-bootstrap.random/t56490");
});})(owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__))
;
om_bootstrap.random.t56490.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t56490.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__))
;
om_bootstrap.random.t56490.prototype.om$core$IRender$ = true;
om_bootstrap.random.t56490.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__56493 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__56494 = "&times;";return React.DOM.button(G__56493,G__56494);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__))
;
om_bootstrap.random.t56490.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t56490.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19267__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19267__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19267__auto__;
}
})()))
{var G__56495 = self__.owner;G__56495.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__56495;
} else
{return null;
}
});})(owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__))
;
om_bootstrap.random.t56490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__){
return (function (_56492){var self__ = this;
var _56492__$1 = this;return self__.meta56491;
});})(owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__))
;
om_bootstrap.random.t56490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__){
return (function (_56492,meta56491__$1){var self__ = this;
var _56492__$1 = this;return (new om_bootstrap.random.t56490(self__.p__56446,self__.map56473,self__.input_checker56478,self__.owner56444,self__.owner,self__.props,self__.children,self__.data__24144__auto__,self__.opts__24145__auto__,self__.G__56480,self__.alert_STAR_,self__.input_schema56477,self__.vec__56472,self__.output_schema56476,self__.fnk56475,self__.map56474,self__.output_checker56479,self__.validate__837__auto__,self__.ufv__,self__.bs,meta56491__$1));
});})(owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__))
;
om_bootstrap.random.__GT_t56490 = ((function (owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__){
return (function __GT_t56490(p__56446__$1,map56473__$1,input_checker56478__$1,owner56444__$1,owner__$1,props__$1,children__$1,data__24144__auto____$1,opts__24145__auto____$1,G__56480__$1,alert_STAR___$1,input_schema56477__$1,vec__56472__$1,output_schema56476__$1,fnk56475__$1,map56474__$1,output_checker56479__$1,validate__837__auto____$1,ufv____$1,bs__$1,meta56491){return (new om_bootstrap.random.t56490(p__56446__$1,map56473__$1,input_checker56478__$1,owner56444__$1,owner__$1,props__$1,children__$1,data__24144__auto____$1,opts__24145__auto____$1,G__56480__$1,alert_STAR___$1,input_schema56477__$1,vec__56472__$1,output_schema56476__$1,fnk56475__$1,map56474__$1,output_checker56479__$1,validate__837__auto____$1,ufv____$1,bs__$1,meta56491));
});})(owner,children,props,bs,map56474,validate__837__auto__,ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__))
;
}
return (new om_bootstrap.random.t56490(p__56446,map56473,input_checker56478,owner56444,owner,props,children,data__24144__auto__,opts__24145__auto__,G__56480,alert_STAR_,input_schema56477,vec__56472,output_schema56476,fnk56475,map56474,output_checker56479,validate__837__auto__,ufv__,bs,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56500 = (function (){var G__56496 = o__840__auto__;return (output_checker56479.cljs$core$IFn$_invoke$arity$1 ? output_checker56479.cljs$core$IFn$_invoke$arity$1(G__56496) : output_checker56479.call(null,G__56496));
})();if(cljs.core.truth_(temp__4126__auto___56500))
{var error__839__auto___56501 = temp__4126__auto___56500;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56475","fnk56475",1416699705,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56501], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56476,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56501], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56476,input_schema56477,input_checker56478,output_checker56479,vec__56472,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema56476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56477], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56444,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var alert_STAR_ = function (data__24144__auto__,owner56444,var_args){
var p__56446 = null;if (arguments.length > 2) {
  p__56446 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24144__auto__,owner56444,p__56446);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__56502){
var data__24144__auto__ = cljs.core.first(arglist__56502);
arglist__56502 = cljs.core.next(arglist__56502);
var owner56444 = cljs.core.first(arglist__56502);
var p__56446 = cljs.core.rest(arglist__56502);
return alert_STAR___delegate(data__24144__auto__,owner56444,p__56446);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24113__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24113__auto__,m56445){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24113__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m56445], 0)));
});
__GT_alert_STAR_ = function(cursor__24113__auto__,m56445){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24113__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24113__auto__,m56445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___56515 = schema.utils.use_fn_validation;var output_schema56503_56516 = om_bootstrap.types.Component;var input_schema56504_56517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56505_56518 = schema.core.checker(input_schema56504_56517);var output_checker56506_56519 = schema.core.checker(output_schema56503_56516);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___56515,output_schema56503_56516,input_schema56504_56517,input_checker56505_56518,output_checker56506_56519){
return (function() { 
var alert__$1__delegate = function (G__56507,rest56508){var validate__837__auto__ = ufv___56515.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56520 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56507,rest56508);var temp__4126__auto___56521 = (function (){var G__56512 = args__838__auto___56520;return (input_checker56505_56518.cljs$core$IFn$_invoke$arity$1 ? input_checker56505_56518.cljs$core$IFn$_invoke$arity$1(G__56512) : input_checker56505_56518.call(null,G__56512));
})();if(cljs.core.truth_(temp__4126__auto___56521))
{var error__839__auto___56522 = temp__4126__auto___56521;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56522], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56504_56517,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56520,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56522], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56507;var children = rest56508;while(true){
var vec__56513 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56513,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56513,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56523 = (function (){var G__56514 = o__840__auto__;return (output_checker56506_56519.cljs$core$IFn$_invoke$arity$1 ? output_checker56506_56519.cljs$core$IFn$_invoke$arity$1(G__56514) : output_checker56506_56519.call(null,G__56514));
})();if(cljs.core.truth_(temp__4126__auto___56523))
{var error__839__auto___56524 = temp__4126__auto___56523;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56524], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56503_56516,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56524], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__56507,var_args){
var rest56508 = null;if (arguments.length > 1) {
  rest56508 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__56507,rest56508);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__56525){
var G__56507 = cljs.core.first(arglist__56525);
var rest56508 = cljs.core.rest(arglist__56525);
return alert__$1__delegate(G__56507,rest56508);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___56515,output_schema56503_56516,input_schema56504_56517,input_checker56505_56518,output_checker56506_56519))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema56503_56516,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56504_56517], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___56540 = schema.utils.use_fn_validation;var output_schema56526_56541 = om_bootstrap.types.Component;var input_schema56527_56542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56528_56543 = schema.core.checker(input_schema56527_56542);var output_checker56529_56544 = schema.core.checker(output_schema56526_56541);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___56540,output_schema56526_56541,input_schema56527_56542,input_checker56528_56543,output_checker56529_56544){
return (function() { 
var popover__delegate = function (G__56530,rest56531){var validate__837__auto__ = ufv___56540.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56545 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56530,rest56531);var temp__4126__auto___56546 = (function (){var G__56536 = args__838__auto___56545;return (input_checker56528_56543.cljs$core$IFn$_invoke$arity$1 ? input_checker56528_56543.cljs$core$IFn$_invoke$arity$1(G__56536) : input_checker56528_56543.call(null,G__56536));
})();if(cljs.core.truth_(temp__4126__auto___56546))
{var error__839__auto___56547 = temp__4126__auto___56546;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56547], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56527_56542,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56545,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56547], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56530;var children = rest56531;while(true){
var vec__56537 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56537,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56537,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19289__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__56538 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__56538);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56548 = (function (){var G__56539 = o__840__auto__;return (output_checker56529_56544.cljs$core$IFn$_invoke$arity$1 ? output_checker56529_56544.cljs$core$IFn$_invoke$arity$1(G__56539) : output_checker56529_56544.call(null,G__56539));
})();if(cljs.core.truth_(temp__4126__auto___56548))
{var error__839__auto___56549 = temp__4126__auto___56548;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56549], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56526_56541,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56549], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__56530,var_args){
var rest56531 = null;if (arguments.length > 1) {
  rest56531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__56530,rest56531);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__56550){
var G__56530 = cljs.core.first(arglist__56550);
var rest56531 = cljs.core.rest(arglist__56550);
return popover__delegate(G__56530,rest56531);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___56540,output_schema56526_56541,input_schema56527_56542,input_checker56528_56543,output_checker56529_56544))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema56526_56541,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56527_56542], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___56563 = schema.utils.use_fn_validation;var output_schema56551_56564 = om_bootstrap.types.Component;var input_schema56552_56565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56553_56566 = schema.core.checker(input_schema56552_56565);var output_checker56554_56567 = schema.core.checker(output_schema56551_56564);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___56563,output_schema56551_56564,input_schema56552_56565,input_checker56553_56566,output_checker56554_56567){
return (function() { 
var badge__delegate = function (G__56555,rest56556){var validate__837__auto__ = ufv___56563.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56568 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56555,rest56556);var temp__4126__auto___56569 = (function (){var G__56560 = args__838__auto___56568;return (input_checker56553_56566.cljs$core$IFn$_invoke$arity$1 ? input_checker56553_56566.cljs$core$IFn$_invoke$arity$1(G__56560) : input_checker56553_56566.call(null,G__56560));
})();if(cljs.core.truth_(temp__4126__auto___56569))
{var error__839__auto___56570 = temp__4126__auto___56569;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56570], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56552_56565,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56568,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56570], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56555;var children = rest56556;while(true){
var vec__56561 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56561,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56561,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56571 = (function (){var G__56562 = o__840__auto__;return (output_checker56554_56567.cljs$core$IFn$_invoke$arity$1 ? output_checker56554_56567.cljs$core$IFn$_invoke$arity$1(G__56562) : output_checker56554_56567.call(null,G__56562));
})();if(cljs.core.truth_(temp__4126__auto___56571))
{var error__839__auto___56572 = temp__4126__auto___56571;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56572], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56551_56564,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56572], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__56555,var_args){
var rest56556 = null;if (arguments.length > 1) {
  rest56556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__56555,rest56556);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__56573){
var G__56555 = cljs.core.first(arglist__56573);
var rest56556 = cljs.core.rest(arglist__56573);
return badge__delegate(G__56555,rest56556);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___56563,output_schema56551_56564,input_schema56552_56565,input_checker56553_56566,output_checker56554_56567))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema56551_56564,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56552_56565], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___56586 = schema.utils.use_fn_validation;var output_schema56574_56587 = om_bootstrap.types.Component;var input_schema56575_56588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56576_56589 = schema.core.checker(input_schema56575_56588);var output_checker56577_56590 = schema.core.checker(output_schema56574_56587);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___56586,output_schema56574_56587,input_schema56575_56588,input_checker56576_56589,output_checker56577_56590){
return (function() { 
var glyphicon__delegate = function (G__56578,rest56579){var validate__837__auto__ = ufv___56586.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56591 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56578,rest56579);var temp__4126__auto___56592 = (function (){var G__56583 = args__838__auto___56591;return (input_checker56576_56589.cljs$core$IFn$_invoke$arity$1 ? input_checker56576_56589.cljs$core$IFn$_invoke$arity$1(G__56583) : input_checker56576_56589.call(null,G__56583));
})();if(cljs.core.truth_(temp__4126__auto___56592))
{var error__839__auto___56593 = temp__4126__auto___56592;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56593], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56575_56588,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56591,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56593], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56578;var children = rest56579;while(true){
var vec__56584 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56584,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56584,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56594 = (function (){var G__56585 = o__840__auto__;return (output_checker56577_56590.cljs$core$IFn$_invoke$arity$1 ? output_checker56577_56590.cljs$core$IFn$_invoke$arity$1(G__56585) : output_checker56577_56590.call(null,G__56585));
})();if(cljs.core.truth_(temp__4126__auto___56594))
{var error__839__auto___56595 = temp__4126__auto___56594;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56595], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56574_56587,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56595], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__56578,var_args){
var rest56579 = null;if (arguments.length > 1) {
  rest56579 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__56578,rest56579);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__56596){
var G__56578 = cljs.core.first(arglist__56596);
var rest56579 = cljs.core.rest(arglist__56596);
return glyphicon__delegate(G__56578,rest56579);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___56586,output_schema56574_56587,input_schema56575_56588,input_checker56576_56589,output_checker56577_56590))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema56574_56587,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56575_56588], null)));
//# sourceMappingURL=random.js.map