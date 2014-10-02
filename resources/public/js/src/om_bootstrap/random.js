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
var ufv___39036 = schema.utils.use_fn_validation;var output_schema39026_39037 = om_bootstrap.types.Component;var input_schema39027_39038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39028_39039 = schema.core.checker(input_schema39027_39038);var output_checker39029_39040 = schema.core.checker(output_schema39026_39037);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___39036,output_schema39026_39037,input_schema39027_39038,input_checker39028_39039,output_checker39029_39040){
return (function() { 
var jumbotron__delegate = function (G__39030,rest39031){var validate__837__auto__ = ufv___39036.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39041 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39030,rest39031);var temp__4126__auto___39042 = (function (){var G__39034 = args__838__auto___39041;return (input_checker39028_39039.cljs$core$IFn$_invoke$arity$1 ? input_checker39028_39039.cljs$core$IFn$_invoke$arity$1(G__39034) : input_checker39028_39039.call(null,G__39034));
})();if(cljs.core.truth_(temp__4126__auto___39042))
{var error__839__auto___39043 = temp__4126__auto___39042;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39043], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39027_39038,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39041,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39043], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39030;var children = rest39031;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39044 = (function (){var G__39035 = o__840__auto__;return (output_checker39029_39040.cljs$core$IFn$_invoke$arity$1 ? output_checker39029_39040.cljs$core$IFn$_invoke$arity$1(G__39035) : output_checker39029_39040.call(null,G__39035));
})();if(cljs.core.truth_(temp__4126__auto___39044))
{var error__839__auto___39045 = temp__4126__auto___39044;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39045], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39026_39037,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39045], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__39030,var_args){
var rest39031 = null;if (arguments.length > 1) {
  rest39031 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__39030,rest39031);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__39046){
var G__39030 = cljs.core.first(arglist__39046);
var rest39031 = cljs.core.rest(arglist__39046);
return jumbotron__delegate(G__39030,rest39031);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___39036,output_schema39026_39037,input_schema39027_39038,input_checker39028_39039,output_checker39029_39040))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema39026_39037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39027_39038], null)));
var ufv___39059 = schema.utils.use_fn_validation;var output_schema39047_39060 = om_bootstrap.types.Component;var input_schema39048_39061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39049_39062 = schema.core.checker(input_schema39048_39061);var output_checker39050_39063 = schema.core.checker(output_schema39047_39060);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___39059,output_schema39047_39060,input_schema39048_39061,input_checker39049_39062,output_checker39050_39063){
return (function() { 
var label__delegate = function (G__39051,rest39052){var validate__837__auto__ = ufv___39059.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39064 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39051,rest39052);var temp__4126__auto___39065 = (function (){var G__39056 = args__838__auto___39064;return (input_checker39049_39062.cljs$core$IFn$_invoke$arity$1 ? input_checker39049_39062.cljs$core$IFn$_invoke$arity$1(G__39056) : input_checker39049_39062.call(null,G__39056));
})();if(cljs.core.truth_(temp__4126__auto___39065))
{var error__839__auto___39066 = temp__4126__auto___39065;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39066], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39048_39061,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39064,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39066], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39051;var children = rest39052;while(true){
var vec__39057 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39057,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39057,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39067 = (function (){var G__39058 = o__840__auto__;return (output_checker39050_39063.cljs$core$IFn$_invoke$arity$1 ? output_checker39050_39063.cljs$core$IFn$_invoke$arity$1(G__39058) : output_checker39050_39063.call(null,G__39058));
})();if(cljs.core.truth_(temp__4126__auto___39067))
{var error__839__auto___39068 = temp__4126__auto___39067;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39068], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39047_39060,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39068], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__39051,var_args){
var rest39052 = null;if (arguments.length > 1) {
  rest39052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__39051,rest39052);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__39069){
var G__39051 = cljs.core.first(arglist__39069);
var rest39052 = cljs.core.rest(arglist__39069);
return label__delegate(G__39051,rest39052);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___39059,output_schema39047_39060,input_schema39048_39061,input_checker39049_39062,output_checker39050_39063))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema39047_39060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39048_39061], null)));
var ufv___39082 = schema.utils.use_fn_validation;var output_schema39070_39083 = om_bootstrap.types.Component;var input_schema39071_39084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39072_39085 = schema.core.checker(input_schema39071_39084);var output_checker39073_39086 = schema.core.checker(output_schema39070_39083);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___39082,output_schema39070_39083,input_schema39071_39084,input_checker39072_39085,output_checker39073_39086){
return (function() { 
var well__delegate = function (G__39074,rest39075){var validate__837__auto__ = ufv___39082.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39087 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39074,rest39075);var temp__4126__auto___39088 = (function (){var G__39079 = args__838__auto___39087;return (input_checker39072_39085.cljs$core$IFn$_invoke$arity$1 ? input_checker39072_39085.cljs$core$IFn$_invoke$arity$1(G__39079) : input_checker39072_39085.call(null,G__39079));
})();if(cljs.core.truth_(temp__4126__auto___39088))
{var error__839__auto___39089 = temp__4126__auto___39088;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39089], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39071_39084,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39087,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39089], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39074;var children = rest39075;while(true){
var vec__39080 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39080,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39080,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39090 = (function (){var G__39081 = o__840__auto__;return (output_checker39073_39086.cljs$core$IFn$_invoke$arity$1 ? output_checker39073_39086.cljs$core$IFn$_invoke$arity$1(G__39081) : output_checker39073_39086.call(null,G__39081));
})();if(cljs.core.truth_(temp__4126__auto___39090))
{var error__839__auto___39091 = temp__4126__auto___39090;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39091], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39070_39083,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39091], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__39074,var_args){
var rest39075 = null;if (arguments.length > 1) {
  rest39075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__39074,rest39075);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__39092){
var G__39074 = cljs.core.first(arglist__39092);
var rest39075 = cljs.core.rest(arglist__39092);
return well__delegate(G__39074,rest39075);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___39082,output_schema39070_39083,input_schema39071_39084,input_checker39072_39085,output_checker39073_39086))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema39070_39083,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39071_39084], null)));
var ufv___39103 = schema.utils.use_fn_validation;var output_schema39093_39104 = om_bootstrap.types.Component;var input_schema39094_39105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39095_39106 = schema.core.checker(input_schema39094_39105);var output_checker39096_39107 = schema.core.checker(output_schema39093_39104);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___39103,output_schema39093_39104,input_schema39094_39105,input_checker39095_39106,output_checker39096_39107){
return (function() { 
var page_header__delegate = function (G__39097,rest39098){var validate__837__auto__ = ufv___39103.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39108 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39097,rest39098);var temp__4126__auto___39109 = (function (){var G__39101 = args__838__auto___39108;return (input_checker39095_39106.cljs$core$IFn$_invoke$arity$1 ? input_checker39095_39106.cljs$core$IFn$_invoke$arity$1(G__39101) : input_checker39095_39106.call(null,G__39101));
})();if(cljs.core.truth_(temp__4126__auto___39109))
{var error__839__auto___39110 = temp__4126__auto___39109;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39110], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39094_39105,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39108,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39110], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39097;var children = rest39098;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39111 = (function (){var G__39102 = o__840__auto__;return (output_checker39096_39107.cljs$core$IFn$_invoke$arity$1 ? output_checker39096_39107.cljs$core$IFn$_invoke$arity$1(G__39102) : output_checker39096_39107.call(null,G__39102));
})();if(cljs.core.truth_(temp__4126__auto___39111))
{var error__839__auto___39112 = temp__4126__auto___39111;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39112], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39093_39104,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39112], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__39097,var_args){
var rest39098 = null;if (arguments.length > 1) {
  rest39098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__39097,rest39098);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__39113){
var G__39097 = cljs.core.first(arglist__39113);
var rest39098 = cljs.core.rest(arglist__39113);
return page_header__delegate(G__39097,rest39098);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___39103,output_schema39093_39104,input_schema39094_39105,input_checker39095_39106,output_checker39096_39107))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema39093_39104,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39094_39105], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___39128 = schema.utils.use_fn_validation;var output_schema39114_39129 = om_bootstrap.types.Component;var input_schema39115_39130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39116_39131 = schema.core.checker(input_schema39115_39130);var output_checker39117_39132 = schema.core.checker(output_schema39114_39129);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___39128,output_schema39114_39129,input_schema39115_39130,input_checker39116_39131,output_checker39117_39132){
return (function() { 
var tooltip__delegate = function (G__39118,rest39119){var validate__837__auto__ = ufv___39128.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39133 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39118,rest39119);var temp__4126__auto___39134 = (function (){var G__39124 = args__838__auto___39133;return (input_checker39116_39131.cljs$core$IFn$_invoke$arity$1 ? input_checker39116_39131.cljs$core$IFn$_invoke$arity$1(G__39124) : input_checker39116_39131.call(null,G__39124));
})();if(cljs.core.truth_(temp__4126__auto___39134))
{var error__839__auto___39135 = temp__4126__auto___39134;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39135], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39115_39130,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39133,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39135], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39118;var children = rest39119;while(true){
var vec__39125 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39125,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39125,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19347__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__39126 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__39126);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39136 = (function (){var G__39127 = o__840__auto__;return (output_checker39117_39132.cljs$core$IFn$_invoke$arity$1 ? output_checker39117_39132.cljs$core$IFn$_invoke$arity$1(G__39127) : output_checker39117_39132.call(null,G__39127));
})();if(cljs.core.truth_(temp__4126__auto___39136))
{var error__839__auto___39137 = temp__4126__auto___39136;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39137], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39114_39129,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39137], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__39118,var_args){
var rest39119 = null;if (arguments.length > 1) {
  rest39119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__39118,rest39119);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__39138){
var G__39118 = cljs.core.first(arglist__39138);
var rest39119 = cljs.core.rest(arglist__39138);
return tooltip__delegate(G__39118,rest39119);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___39128,output_schema39114_39129,input_schema39115_39130,input_checker39116_39131,output_checker39117_39132))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema39114_39129,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39115_39130], null)));
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
var alert_STAR___delegate = function (data__24172__auto__,owner39139,p__39141){var vec__39167 = p__39141;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39167,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39171 = schema.core.Any;var input_schema39172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39168","map39168",480625412,null))], null);var input_checker39173 = schema.core.checker(input_schema39172);var output_checker39174 = schema.core.checker(output_schema39171);return schema.core.schematize_fn(((function (ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__){
return (function fnk39170(G__39175){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39175], null);var temp__4126__auto___39193 = (function (){var G__39184 = args__838__auto___39192;return (input_checker39173.cljs$core$IFn$_invoke$arity$1 ? input_checker39173.cljs$core$IFn$_invoke$arity$1(G__39184) : input_checker39173.call(null,G__39184));
})();if(cljs.core.truth_(temp__4126__auto___39193))
{var error__839__auto___39194 = temp__4126__auto___39193;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39170","fnk39170",-1927430231,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39194], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39172,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39192,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39194], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39168 = G__39175;while(true){
if(cljs.core.map_QMARK_(map39168))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39168], 0))));
}
var map39169 = plumbing.fnk.schema.safe_get(map39168,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map39169,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map39169,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map39169,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39168,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t39185 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t39185 = (function (G__39175,owner,map39168,opts__24173__auto__,props,children,fnk39170,map39169,data__24172__auto__,p__39141,alert_STAR_,output_checker39174,vec__39167,owner39139,output_schema39171,input_schema39172,validate__837__auto__,ufv__,bs,input_checker39173,meta39186){
this.G__39175 = G__39175;
this.owner = owner;
this.map39168 = map39168;
this.opts__24173__auto__ = opts__24173__auto__;
this.props = props;
this.children = children;
this.fnk39170 = fnk39170;
this.map39169 = map39169;
this.data__24172__auto__ = data__24172__auto__;
this.p__39141 = p__39141;
this.alert_STAR_ = alert_STAR_;
this.output_checker39174 = output_checker39174;
this.vec__39167 = vec__39167;
this.owner39139 = owner39139;
this.output_schema39171 = output_schema39171;
this.input_schema39172 = input_schema39172;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.bs = bs;
this.input_checker39173 = input_checker39173;
this.meta39186 = meta39186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t39185.cljs$lang$type = true;
om_bootstrap.random.t39185.cljs$lang$ctorStr = "om-bootstrap.random/t39185";
om_bootstrap.random.t39185.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"om-bootstrap.random/t39185");
});})(owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__))
;
om_bootstrap.random.t39185.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t39185.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__))
;
om_bootstrap.random.t39185.prototype.om$core$IRender$ = true;
om_bootstrap.random.t39185.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__39188 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__39189 = "&times;";return React.DOM.button(G__39188,G__39189);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__))
;
om_bootstrap.random.t39185.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t39185.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19325__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19325__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19325__auto__;
}
})()))
{var G__39190 = self__.owner;G__39190.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__39190;
} else
{return null;
}
});})(owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__))
;
om_bootstrap.random.t39185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__){
return (function (_39187){var self__ = this;
var _39187__$1 = this;return self__.meta39186;
});})(owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__))
;
om_bootstrap.random.t39185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__){
return (function (_39187,meta39186__$1){var self__ = this;
var _39187__$1 = this;return (new om_bootstrap.random.t39185(self__.G__39175,self__.owner,self__.map39168,self__.opts__24173__auto__,self__.props,self__.children,self__.fnk39170,self__.map39169,self__.data__24172__auto__,self__.p__39141,self__.alert_STAR_,self__.output_checker39174,self__.vec__39167,self__.owner39139,self__.output_schema39171,self__.input_schema39172,self__.validate__837__auto__,self__.ufv__,self__.bs,self__.input_checker39173,meta39186__$1));
});})(owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__))
;
om_bootstrap.random.__GT_t39185 = ((function (owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__){
return (function __GT_t39185(G__39175__$1,owner__$1,map39168__$1,opts__24173__auto____$1,props__$1,children__$1,fnk39170__$1,map39169__$1,data__24172__auto____$1,p__39141__$1,alert_STAR___$1,output_checker39174__$1,vec__39167__$1,owner39139__$1,output_schema39171__$1,input_schema39172__$1,validate__837__auto____$1,ufv____$1,bs__$1,input_checker39173__$1,meta39186){return (new om_bootstrap.random.t39185(G__39175__$1,owner__$1,map39168__$1,opts__24173__auto____$1,props__$1,children__$1,fnk39170__$1,map39169__$1,data__24172__auto____$1,p__39141__$1,alert_STAR___$1,output_checker39174__$1,vec__39167__$1,owner39139__$1,output_schema39171__$1,input_schema39172__$1,validate__837__auto____$1,ufv____$1,bs__$1,input_checker39173__$1,meta39186));
});})(owner,children,props,bs,map39169,validate__837__auto__,ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__))
;
}
return (new om_bootstrap.random.t39185(G__39175,owner,map39168,opts__24173__auto__,props,children,fnk39170,map39169,data__24172__auto__,p__39141,alert_STAR_,output_checker39174,vec__39167,owner39139,output_schema39171,input_schema39172,validate__837__auto__,ufv__,bs,input_checker39173,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39195 = (function (){var G__39191 = o__840__auto__;return (output_checker39174.cljs$core$IFn$_invoke$arity$1 ? output_checker39174.cljs$core$IFn$_invoke$arity$1(G__39191) : output_checker39174.call(null,G__39191));
})();if(cljs.core.truth_(temp__4126__auto___39195))
{var error__839__auto___39196 = temp__4126__auto___39195;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39170","fnk39170",-1927430231,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39196], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39171,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39196], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39171,input_schema39172,input_checker39173,output_checker39174,vec__39167,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema39171,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39172], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39139,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var alert_STAR_ = function (data__24172__auto__,owner39139,var_args){
var p__39141 = null;if (arguments.length > 2) {
  p__39141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24172__auto__,owner39139,p__39141);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__39197){
var data__24172__auto__ = cljs.core.first(arglist__39197);
arglist__39197 = cljs.core.next(arglist__39197);
var owner39139 = cljs.core.first(arglist__39197);
var p__39141 = cljs.core.rest(arglist__39197);
return alert_STAR___delegate(data__24172__auto__,owner39139,p__39141);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24141__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24141__auto__,m39140){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24141__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m39140], 0)));
});
__GT_alert_STAR_ = function(cursor__24141__auto__,m39140){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24141__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24141__auto__,m39140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___39210 = schema.utils.use_fn_validation;var output_schema39198_39211 = om_bootstrap.types.Component;var input_schema39199_39212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39200_39213 = schema.core.checker(input_schema39199_39212);var output_checker39201_39214 = schema.core.checker(output_schema39198_39211);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___39210,output_schema39198_39211,input_schema39199_39212,input_checker39200_39213,output_checker39201_39214){
return (function() { 
var alert__$1__delegate = function (G__39202,rest39203){var validate__837__auto__ = ufv___39210.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39215 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39202,rest39203);var temp__4126__auto___39216 = (function (){var G__39207 = args__838__auto___39215;return (input_checker39200_39213.cljs$core$IFn$_invoke$arity$1 ? input_checker39200_39213.cljs$core$IFn$_invoke$arity$1(G__39207) : input_checker39200_39213.call(null,G__39207));
})();if(cljs.core.truth_(temp__4126__auto___39216))
{var error__839__auto___39217 = temp__4126__auto___39216;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39217], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39199_39212,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39215,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39217], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39202;var children = rest39203;while(true){
var vec__39208 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39208,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39208,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39218 = (function (){var G__39209 = o__840__auto__;return (output_checker39201_39214.cljs$core$IFn$_invoke$arity$1 ? output_checker39201_39214.cljs$core$IFn$_invoke$arity$1(G__39209) : output_checker39201_39214.call(null,G__39209));
})();if(cljs.core.truth_(temp__4126__auto___39218))
{var error__839__auto___39219 = temp__4126__auto___39218;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39219], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39198_39211,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39219], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__39202,var_args){
var rest39203 = null;if (arguments.length > 1) {
  rest39203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__39202,rest39203);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__39220){
var G__39202 = cljs.core.first(arglist__39220);
var rest39203 = cljs.core.rest(arglist__39220);
return alert__$1__delegate(G__39202,rest39203);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___39210,output_schema39198_39211,input_schema39199_39212,input_checker39200_39213,output_checker39201_39214))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema39198_39211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39199_39212], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___39235 = schema.utils.use_fn_validation;var output_schema39221_39236 = om_bootstrap.types.Component;var input_schema39222_39237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39223_39238 = schema.core.checker(input_schema39222_39237);var output_checker39224_39239 = schema.core.checker(output_schema39221_39236);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___39235,output_schema39221_39236,input_schema39222_39237,input_checker39223_39238,output_checker39224_39239){
return (function() { 
var popover__delegate = function (G__39225,rest39226){var validate__837__auto__ = ufv___39235.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39240 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39225,rest39226);var temp__4126__auto___39241 = (function (){var G__39231 = args__838__auto___39240;return (input_checker39223_39238.cljs$core$IFn$_invoke$arity$1 ? input_checker39223_39238.cljs$core$IFn$_invoke$arity$1(G__39231) : input_checker39223_39238.call(null,G__39231));
})();if(cljs.core.truth_(temp__4126__auto___39241))
{var error__839__auto___39242 = temp__4126__auto___39241;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39242], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39222_39237,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39240,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39242], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39225;var children = rest39226;while(true){
var vec__39232 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39232,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39232,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19347__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__39233 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__39233);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39243 = (function (){var G__39234 = o__840__auto__;return (output_checker39224_39239.cljs$core$IFn$_invoke$arity$1 ? output_checker39224_39239.cljs$core$IFn$_invoke$arity$1(G__39234) : output_checker39224_39239.call(null,G__39234));
})();if(cljs.core.truth_(temp__4126__auto___39243))
{var error__839__auto___39244 = temp__4126__auto___39243;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39244], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39221_39236,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39244], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__39225,var_args){
var rest39226 = null;if (arguments.length > 1) {
  rest39226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__39225,rest39226);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__39245){
var G__39225 = cljs.core.first(arglist__39245);
var rest39226 = cljs.core.rest(arglist__39245);
return popover__delegate(G__39225,rest39226);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___39235,output_schema39221_39236,input_schema39222_39237,input_checker39223_39238,output_checker39224_39239))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema39221_39236,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39222_39237], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___39258 = schema.utils.use_fn_validation;var output_schema39246_39259 = om_bootstrap.types.Component;var input_schema39247_39260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39248_39261 = schema.core.checker(input_schema39247_39260);var output_checker39249_39262 = schema.core.checker(output_schema39246_39259);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___39258,output_schema39246_39259,input_schema39247_39260,input_checker39248_39261,output_checker39249_39262){
return (function() { 
var badge__delegate = function (G__39250,rest39251){var validate__837__auto__ = ufv___39258.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39263 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39250,rest39251);var temp__4126__auto___39264 = (function (){var G__39255 = args__838__auto___39263;return (input_checker39248_39261.cljs$core$IFn$_invoke$arity$1 ? input_checker39248_39261.cljs$core$IFn$_invoke$arity$1(G__39255) : input_checker39248_39261.call(null,G__39255));
})();if(cljs.core.truth_(temp__4126__auto___39264))
{var error__839__auto___39265 = temp__4126__auto___39264;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39265], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39247_39260,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39263,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39265], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39250;var children = rest39251;while(true){
var vec__39256 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39256,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39256,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39266 = (function (){var G__39257 = o__840__auto__;return (output_checker39249_39262.cljs$core$IFn$_invoke$arity$1 ? output_checker39249_39262.cljs$core$IFn$_invoke$arity$1(G__39257) : output_checker39249_39262.call(null,G__39257));
})();if(cljs.core.truth_(temp__4126__auto___39266))
{var error__839__auto___39267 = temp__4126__auto___39266;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39267], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39246_39259,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39267], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__39250,var_args){
var rest39251 = null;if (arguments.length > 1) {
  rest39251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__39250,rest39251);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__39268){
var G__39250 = cljs.core.first(arglist__39268);
var rest39251 = cljs.core.rest(arglist__39268);
return badge__delegate(G__39250,rest39251);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___39258,output_schema39246_39259,input_schema39247_39260,input_checker39248_39261,output_checker39249_39262))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema39246_39259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39247_39260], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___39281 = schema.utils.use_fn_validation;var output_schema39269_39282 = om_bootstrap.types.Component;var input_schema39270_39283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39271_39284 = schema.core.checker(input_schema39270_39283);var output_checker39272_39285 = schema.core.checker(output_schema39269_39282);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___39281,output_schema39269_39282,input_schema39270_39283,input_checker39271_39284,output_checker39272_39285){
return (function() { 
var glyphicon__delegate = function (G__39273,rest39274){var validate__837__auto__ = ufv___39281.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39286 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39273,rest39274);var temp__4126__auto___39287 = (function (){var G__39278 = args__838__auto___39286;return (input_checker39271_39284.cljs$core$IFn$_invoke$arity$1 ? input_checker39271_39284.cljs$core$IFn$_invoke$arity$1(G__39278) : input_checker39271_39284.call(null,G__39278));
})();if(cljs.core.truth_(temp__4126__auto___39287))
{var error__839__auto___39288 = temp__4126__auto___39287;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39288], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39270_39283,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39286,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39288], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39273;var children = rest39274;while(true){
var vec__39279 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39279,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39279,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39289 = (function (){var G__39280 = o__840__auto__;return (output_checker39272_39285.cljs$core$IFn$_invoke$arity$1 ? output_checker39272_39285.cljs$core$IFn$_invoke$arity$1(G__39280) : output_checker39272_39285.call(null,G__39280));
})();if(cljs.core.truth_(temp__4126__auto___39289))
{var error__839__auto___39290 = temp__4126__auto___39289;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39290], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39269_39282,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39290], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__39273,var_args){
var rest39274 = null;if (arguments.length > 1) {
  rest39274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__39273,rest39274);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__39291){
var G__39273 = cljs.core.first(arglist__39291);
var rest39274 = cljs.core.rest(arglist__39291);
return glyphicon__delegate(G__39273,rest39274);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___39281,output_schema39269_39282,input_schema39270_39283,input_checker39271_39284,output_checker39272_39285))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema39269_39282,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39270_39283], null)));
//# sourceMappingURL=random.js.map