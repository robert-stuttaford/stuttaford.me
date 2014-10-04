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
var ufv___39129 = schema.utils.use_fn_validation;var output_schema39119_39130 = om_bootstrap.types.Component;var input_schema39120_39131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39121_39132 = schema.core.checker(input_schema39120_39131);var output_checker39122_39133 = schema.core.checker(output_schema39119_39130);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A lightweight, flexible component that can optionally extend the
* entire viewport to showcase key content on your site.
* @param {...*} var_args
*/
om_bootstrap.random.jumbotron = ((function (ufv___39129,output_schema39119_39130,input_schema39120_39131,input_checker39121_39132,output_checker39122_39133){
return (function() { 
var jumbotron__delegate = function (G__39123,rest39124){var validate__837__auto__ = ufv___39129.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39134 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39123,rest39124);var temp__4126__auto___39135 = (function (){var G__39127 = args__838__auto___39134;return (input_checker39121_39132.cljs$core$IFn$_invoke$arity$1 ? input_checker39121_39132.cljs$core$IFn$_invoke$arity$1(G__39127) : input_checker39121_39132.call(null,G__39127));
})();if(cljs.core.truth_(temp__4126__auto___39135))
{var error__839__auto___39136 = temp__4126__auto___39135;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39136], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39120_39131,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39134,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39136], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39123;var children = rest39124;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39137 = (function (){var G__39128 = o__840__auto__;return (output_checker39122_39133.cljs$core$IFn$_invoke$arity$1 ? output_checker39122_39133.cljs$core$IFn$_invoke$arity$1(G__39128) : output_checker39122_39133.call(null,G__39128));
})();if(cljs.core.truth_(temp__4126__auto___39137))
{var error__839__auto___39138 = temp__4126__auto___39137;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"jumbotron","jumbotron",342240964,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39138], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39119_39130,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39138], null));
} else
{}
} else
{}
return o__840__auto__;
};
var jumbotron = function (G__39123,var_args){
var rest39124 = null;if (arguments.length > 1) {
  rest39124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return jumbotron__delegate.call(this,G__39123,rest39124);};
jumbotron.cljs$lang$maxFixedArity = 1;
jumbotron.cljs$lang$applyTo = (function (arglist__39139){
var G__39123 = cljs.core.first(arglist__39139);
var rest39124 = cljs.core.rest(arglist__39139);
return jumbotron__delegate(G__39123,rest39124);
});
jumbotron.cljs$core$IFn$_invoke$arity$variadic = jumbotron__delegate;
return jumbotron;
})()
;})(ufv___39129,output_schema39119_39130,input_schema39120_39131,input_checker39121_39132,output_checker39122_39133))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.jumbotron),schema.core.make_fn_schema(output_schema39119_39130,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39120_39131], null)));
var ufv___39152 = schema.utils.use_fn_validation;var output_schema39140_39153 = om_bootstrap.types.Component;var input_schema39141_39154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39142_39155 = schema.core.checker(input_schema39141_39154);var output_checker39143_39156 = schema.core.checker(output_schema39140_39153);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Create a (label {} "label!") to show highlight information.
* @param {...*} var_args
*/
om_bootstrap.random.label = ((function (ufv___39152,output_schema39140_39153,input_schema39141_39154,input_checker39142_39155,output_checker39143_39156){
return (function() { 
var label__delegate = function (G__39144,rest39145){var validate__837__auto__ = ufv___39152.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39157 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39144,rest39145);var temp__4126__auto___39158 = (function (){var G__39149 = args__838__auto___39157;return (input_checker39142_39155.cljs$core$IFn$_invoke$arity$1 ? input_checker39142_39155.cljs$core$IFn$_invoke$arity$1(G__39149) : input_checker39142_39155.call(null,G__39149));
})();if(cljs.core.truth_(temp__4126__auto___39158))
{var error__839__auto___39159 = temp__4126__auto___39158;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39159], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39141_39154,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39157,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39159], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39144;var children = rest39145;while(true){
var vec__39150 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"label",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39150,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39150,(1),null);var classes = om_bootstrap.types.bs_class_set(bs);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39160 = (function (){var G__39151 = o__840__auto__;return (output_checker39143_39156.cljs$core$IFn$_invoke$arity$1 ? output_checker39143_39156.cljs$core$IFn$_invoke$arity$1(G__39151) : output_checker39143_39156.call(null,G__39151));
})();if(cljs.core.truth_(temp__4126__auto___39160))
{var error__839__auto___39161 = temp__4126__auto___39160;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39161], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39140_39153,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39161], null));
} else
{}
} else
{}
return o__840__auto__;
};
var label = function (G__39144,var_args){
var rest39145 = null;if (arguments.length > 1) {
  rest39145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return label__delegate.call(this,G__39144,rest39145);};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = (function (arglist__39162){
var G__39144 = cljs.core.first(arglist__39162);
var rest39145 = cljs.core.rest(arglist__39162);
return label__delegate(G__39144,rest39145);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;})(ufv___39152,output_schema39140_39153,input_schema39141_39154,input_checker39142_39155,output_checker39143_39156))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.label),schema.core.make_fn_schema(output_schema39140_39153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39141_39154], null)));
var ufv___39175 = schema.utils.use_fn_validation;var output_schema39163_39176 = om_bootstrap.types.Component;var input_schema39164_39177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39165_39178 = schema.core.checker(input_schema39164_39177);var output_checker39166_39179 = schema.core.checker(output_schema39163_39176);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Use the well as a simple effect on an element to give it an inset effect.
* @param {...*} var_args
*/
om_bootstrap.random.well = ((function (ufv___39175,output_schema39163_39176,input_schema39164_39177,input_checker39165_39178,output_checker39166_39179){
return (function() { 
var well__delegate = function (G__39167,rest39168){var validate__837__auto__ = ufv___39175.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39180 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39167,rest39168);var temp__4126__auto___39181 = (function (){var G__39172 = args__838__auto___39180;return (input_checker39165_39178.cljs$core$IFn$_invoke$arity$1 ? input_checker39165_39178.cljs$core$IFn$_invoke$arity$1(G__39172) : input_checker39165_39178.call(null,G__39172));
})();if(cljs.core.truth_(temp__4126__auto___39181))
{var error__839__auto___39182 = temp__4126__auto___39181;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39182], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39164_39177,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39180,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39182], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39167;var children = rest39168;while(true){
var vec__39173 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"well"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173,(1),null);var class$ = om_tools.dom.class_set(om_bootstrap.types.bs_class_set(bs));return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39183 = (function (){var G__39174 = o__840__auto__;return (output_checker39166_39179.cljs$core$IFn$_invoke$arity$1 ? output_checker39166_39179.cljs$core$IFn$_invoke$arity$1(G__39174) : output_checker39166_39179.call(null,G__39174));
})();if(cljs.core.truth_(temp__4126__auto___39183))
{var error__839__auto___39184 = temp__4126__auto___39183;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"well","well",1222012171,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39184], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39163_39176,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39184], null));
} else
{}
} else
{}
return o__840__auto__;
};
var well = function (G__39167,var_args){
var rest39168 = null;if (arguments.length > 1) {
  rest39168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return well__delegate.call(this,G__39167,rest39168);};
well.cljs$lang$maxFixedArity = 1;
well.cljs$lang$applyTo = (function (arglist__39185){
var G__39167 = cljs.core.first(arglist__39185);
var rest39168 = cljs.core.rest(arglist__39185);
return well__delegate(G__39167,rest39168);
});
well.cljs$core$IFn$_invoke$arity$variadic = well__delegate;
return well;
})()
;})(ufv___39175,output_schema39163_39176,input_schema39164_39177,input_checker39165_39178,output_checker39166_39179))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.well),schema.core.make_fn_schema(output_schema39163_39176,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39164_39177], null)));
var ufv___39196 = schema.utils.use_fn_validation;var output_schema39186_39197 = om_bootstrap.types.Component;var input_schema39187_39198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39188_39199 = schema.core.checker(input_schema39187_39198);var output_checker39189_39200 = schema.core.checker(output_schema39186_39197);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* A simple shell for an h1 to appropriately space out and segment
* sections of content on a page. It can utilize the h1’s default small
* element, as well as most other components (with additional styles).
* @param {...*} var_args
*/
om_bootstrap.random.page_header = ((function (ufv___39196,output_schema39186_39197,input_schema39187_39198,input_checker39188_39199,output_checker39189_39200){
return (function() { 
var page_header__delegate = function (G__39190,rest39191){var validate__837__auto__ = ufv___39196.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39201 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39190,rest39191);var temp__4126__auto___39202 = (function (){var G__39194 = args__838__auto___39201;return (input_checker39188_39199.cljs$core$IFn$_invoke$arity$1 ? input_checker39188_39199.cljs$core$IFn$_invoke$arity$1(G__39194) : input_checker39188_39199.call(null,G__39194));
})();if(cljs.core.truth_(temp__4126__auto___39202))
{var error__839__auto___39203 = temp__4126__auto___39202;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39203], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39187_39198,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39201,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39203], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39190;var children = rest39191;while(true){
return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element(React.DOM.h1,children,cljs.core.PersistentVector.EMPTY)],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39204 = (function (){var G__39195 = o__840__auto__;return (output_checker39189_39200.cljs$core$IFn$_invoke$arity$1 ? output_checker39189_39200.cljs$core$IFn$_invoke$arity$1(G__39195) : output_checker39189_39200.call(null,G__39195));
})();if(cljs.core.truth_(temp__4126__auto___39204))
{var error__839__auto___39205 = temp__4126__auto___39204;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"page-header","page-header",-1347644547,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39205], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39186_39197,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39205], null));
} else
{}
} else
{}
return o__840__auto__;
};
var page_header = function (G__39190,var_args){
var rest39191 = null;if (arguments.length > 1) {
  rest39191 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page_header__delegate.call(this,G__39190,rest39191);};
page_header.cljs$lang$maxFixedArity = 1;
page_header.cljs$lang$applyTo = (function (arglist__39206){
var G__39190 = cljs.core.first(arglist__39206);
var rest39191 = cljs.core.rest(arglist__39206);
return page_header__delegate(G__39190,rest39191);
});
page_header.cljs$core$IFn$_invoke$arity$variadic = page_header__delegate;
return page_header;
})()
;})(ufv___39196,output_schema39186_39197,input_schema39187_39198,input_checker39188_39199,output_checker39189_39200))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.page_header),schema.core.make_fn_schema(output_schema39186_39197,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39187_39198], null)));
om_bootstrap.random.Placement = schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["top","right","bottom","left"], 0));
om_bootstrap.random.ToolTip = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___39221 = schema.utils.use_fn_validation;var output_schema39207_39222 = om_bootstrap.types.Component;var input_schema39208_39223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.ToolTip,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39209_39224 = schema.core.checker(input_schema39208_39223);var output_checker39210_39225 = schema.core.checker(output_schema39207_39222);/**
* Inputs: [opts :- ToolTip & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.tooltip = ((function (ufv___39221,output_schema39207_39222,input_schema39208_39223,input_checker39209_39224,output_checker39210_39225){
return (function() { 
var tooltip__delegate = function (G__39211,rest39212){var validate__837__auto__ = ufv___39221.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39226 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39211,rest39212);var temp__4126__auto___39227 = (function (){var G__39217 = args__838__auto___39226;return (input_checker39209_39224.cljs$core$IFn$_invoke$arity$1 ? input_checker39209_39224.cljs$core$IFn$_invoke$arity$1(G__39217) : input_checker39209_39224.call(null,G__39217));
})();if(cljs.core.truth_(temp__4126__auto___39227))
{var error__839__auto___39228 = temp__4126__auto___39227;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39228], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39208_39223,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39226,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39228], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39211;var children = rest39212;while(true){
var vec__39218 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.ToolTip,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39218,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39218,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19267__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__39219 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "tooltip-arrow"};return React.DOM.div(G__39219);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "tooltip-inner"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39229 = (function (){var G__39220 = o__840__auto__;return (output_checker39210_39225.cljs$core$IFn$_invoke$arity$1 ? output_checker39210_39225.cljs$core$IFn$_invoke$arity$1(G__39220) : output_checker39210_39225.call(null,G__39220));
})();if(cljs.core.truth_(temp__4126__auto___39229))
{var error__839__auto___39230 = temp__4126__auto___39229;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"tooltip","tooltip",-169145531,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39230], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39207_39222,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39230], null));
} else
{}
} else
{}
return o__840__auto__;
};
var tooltip = function (G__39211,var_args){
var rest39212 = null;if (arguments.length > 1) {
  rest39212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tooltip__delegate.call(this,G__39211,rest39212);};
tooltip.cljs$lang$maxFixedArity = 1;
tooltip.cljs$lang$applyTo = (function (arglist__39231){
var G__39211 = cljs.core.first(arglist__39231);
var rest39212 = cljs.core.rest(arglist__39231);
return tooltip__delegate(G__39211,rest39212);
});
tooltip.cljs$core$IFn$_invoke$arity$variadic = tooltip__delegate;
return tooltip;
})()
;})(ufv___39221,output_schema39207_39222,input_schema39208_39223,input_checker39209_39224,output_checker39210_39225))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.tooltip),schema.core.make_fn_schema(output_schema39207_39222,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39208_39223], null)));
om_bootstrap.random.Alert = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284)),schema.core.Int], true, false));
om_bootstrap.random.alert_defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"alert",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info"], null);
om_bootstrap.random.alert_STAR_$descriptor = (function (){var descriptor__24146__auto__ = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));(descriptor__24146__auto__["mixins"] = [om_bootstrap.mixins.set_timeout_mixin]);
return descriptor__24146__auto__;
})();
/**
* Renders the alert component with timeout mixed in. TODO: This
* should probably use the component macro and be defined inline under
* the alert function. No need for a separate name.
* @param {...*} var_args
*/
om_bootstrap.random.alert_STAR_ = (function() { 
var alert_STAR___delegate = function (data__24175__auto__,owner39232,p__39234){var vec__39260 = p__39234;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39260,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39264 = schema.core.Any;var input_schema39265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"props","props",453281727),schema.core.Any,new cljs.core.Keyword(null,"bs","bs",1748393559),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39261","map39261",1026354175,null))], null);var input_checker39266 = schema.core.checker(input_schema39265);var output_checker39267 = schema.core.checker(output_schema39264);return schema.core.schematize_fn(((function (ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__){
return (function fnk39263(G__39268){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39268], null);var temp__4126__auto___39286 = (function (){var G__39277 = args__838__auto___39285;return (input_checker39266.cljs$core$IFn$_invoke$arity$1 ? input_checker39266.cljs$core$IFn$_invoke$arity$1(G__39277) : input_checker39266.call(null,G__39277));
})();if(cljs.core.truth_(temp__4126__auto___39286))
{var error__839__auto___39287 = temp__4126__auto___39286;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39263","fnk39263",-692380816,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39287], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39265,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39285,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39287], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39261 = G__39268;while(true){
if(cljs.core.map_QMARK_(map39261))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39261], 0))));
}
var map39262 = plumbing.fnk.schema.safe_get(map39261,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bs = plumbing.fnk.schema.safe_get(map39262,new cljs.core.Keyword(null,"bs","bs",1748393559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var props = plumbing.fnk.schema.safe_get(map39262,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get(map39262,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39261,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.random.t39278 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.random.t39278 = (function (owner,props,input_checker39266,children,fnk39263,output_checker39267,alert_STAR_,owner39232,data__24175__auto__,p__39234,G__39268,vec__39260,map39262,input_schema39265,opts__24176__auto__,validate__837__auto__,output_schema39264,ufv__,bs,map39261,meta39279){
this.owner = owner;
this.props = props;
this.input_checker39266 = input_checker39266;
this.children = children;
this.fnk39263 = fnk39263;
this.output_checker39267 = output_checker39267;
this.alert_STAR_ = alert_STAR_;
this.owner39232 = owner39232;
this.data__24175__auto__ = data__24175__auto__;
this.p__39234 = p__39234;
this.G__39268 = G__39268;
this.vec__39260 = vec__39260;
this.map39262 = map39262;
this.input_schema39265 = input_schema39265;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema39264 = output_schema39264;
this.ufv__ = ufv__;
this.bs = bs;
this.map39261 = map39261;
this.meta39279 = meta39279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.random.t39278.cljs$lang$type = true;
om_bootstrap.random.t39278.cljs$lang$ctorStr = "om-bootstrap.random/t39278";
om_bootstrap.random.t39278.cljs$lang$ctorPrWriter = ((function (owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"om-bootstrap.random/t39278");
});})(owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__))
;
om_bootstrap.random.t39278.prototype.om$core$IDisplayName$ = true;
om_bootstrap.random.t39278.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "alert*";
});})(owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__))
;
om_bootstrap.random.t39278.prototype.om$core$IRender$ = true;
om_bootstrap.random.t39278.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var classes = om_bootstrap.types.bs_class_set(self__.bs);var dismiss_button = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(temp__4126__auto__))
{var od = temp__4126__auto__;var G__39281 = {"aria-hidden": true, "onClick": om_tools.dom.format_opts(od), "className": "close", "type": "button"};var G__39282 = "&times;";return React.DOM.button(G__39281,G__39282);
} else
{return null;
}
})();return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[dismiss_button,self__.children],null)));
});})(owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__))
;
om_bootstrap.random.t39278.prototype.om$core$IDidMount$ = true;
om_bootstrap.random.t39278.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs);if(cljs.core.truth_(and__19255__auto__))
{return new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs);
} else
{return and__19255__auto__;
}
})()))
{var G__39283 = self__.owner;G__39283.set_timeout(new cljs.core.Keyword(null,"on-dismiss","on-dismiss",1416134395).cljs$core$IFn$_invoke$arity$1(self__.bs),new cljs.core.Keyword(null,"dismiss-after","dismiss-after",-1342478284).cljs$core$IFn$_invoke$arity$1(self__.bs));
return G__39283;
} else
{return null;
}
});})(owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__))
;
om_bootstrap.random.t39278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__){
return (function (_39280){var self__ = this;
var _39280__$1 = this;return self__.meta39279;
});})(owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__))
;
om_bootstrap.random.t39278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__){
return (function (_39280,meta39279__$1){var self__ = this;
var _39280__$1 = this;return (new om_bootstrap.random.t39278(self__.owner,self__.props,self__.input_checker39266,self__.children,self__.fnk39263,self__.output_checker39267,self__.alert_STAR_,self__.owner39232,self__.data__24175__auto__,self__.p__39234,self__.G__39268,self__.vec__39260,self__.map39262,self__.input_schema39265,self__.opts__24176__auto__,self__.validate__837__auto__,self__.output_schema39264,self__.ufv__,self__.bs,self__.map39261,meta39279__$1));
});})(owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__))
;
om_bootstrap.random.__GT_t39278 = ((function (owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__){
return (function __GT_t39278(owner__$1,props__$1,input_checker39266__$1,children__$1,fnk39263__$1,output_checker39267__$1,alert_STAR___$1,owner39232__$1,data__24175__auto____$1,p__39234__$1,G__39268__$1,vec__39260__$1,map39262__$1,input_schema39265__$1,opts__24176__auto____$1,validate__837__auto____$1,output_schema39264__$1,ufv____$1,bs__$1,map39261__$1,meta39279){return (new om_bootstrap.random.t39278(owner__$1,props__$1,input_checker39266__$1,children__$1,fnk39263__$1,output_checker39267__$1,alert_STAR___$1,owner39232__$1,data__24175__auto____$1,p__39234__$1,G__39268__$1,vec__39260__$1,map39262__$1,input_schema39265__$1,opts__24176__auto____$1,validate__837__auto____$1,output_schema39264__$1,ufv____$1,bs__$1,map39261__$1,meta39279));
});})(owner,children,props,bs,map39262,validate__837__auto__,ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__))
;
}
return (new om_bootstrap.random.t39278(owner,props,input_checker39266,children,fnk39263,output_checker39267,alert_STAR_,owner39232,data__24175__auto__,p__39234,G__39268,vec__39260,map39262,input_schema39265,opts__24176__auto__,validate__837__auto__,output_schema39264,ufv__,bs,map39261,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39288 = (function (){var G__39284 = o__840__auto__;return (output_checker39267.cljs$core$IFn$_invoke$arity$1 ? output_checker39267.cljs$core$IFn$_invoke$arity$1(G__39284) : output_checker39267.call(null,G__39284));
})();if(cljs.core.truth_(temp__4126__auto___39288))
{var error__839__auto___39289 = temp__4126__auto___39288;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39263","fnk39263",-692380816,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39289], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39264,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39289], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39264,input_schema39265,input_checker39266,output_checker39267,vec__39260,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema39264,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39265], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39232,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var alert_STAR_ = function (data__24175__auto__,owner39232,var_args){
var p__39234 = null;if (arguments.length > 2) {
  p__39234 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alert_STAR___delegate.call(this,data__24175__auto__,owner39232,p__39234);};
alert_STAR_.cljs$lang$maxFixedArity = 2;
alert_STAR_.cljs$lang$applyTo = (function (arglist__39290){
var data__24175__auto__ = cljs.core.first(arglist__39290);
arglist__39290 = cljs.core.next(arglist__39290);
var owner39232 = cljs.core.first(arglist__39290);
var p__39234 = cljs.core.rest(arglist__39290);
return alert_STAR___delegate(data__24175__auto__,owner39232,p__39234);
});
alert_STAR_.cljs$core$IFn$_invoke$arity$variadic = alert_STAR___delegate;
return alert_STAR_;
})()
;
om_bootstrap.random.__GT_alert_STAR_ = (function() {
var __GT_alert_STAR_ = null;
var __GT_alert_STAR___1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24144__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null));
});
var __GT_alert_STAR___2 = (function (cursor__24144__auto__,m39233){return om.core.build.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.alert_STAR_,cursor__24144__auto__,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.random.alert_STAR_$descriptor], null),m39233], 0)));
});
__GT_alert_STAR_ = function(cursor__24144__auto__,m39233){
switch(arguments.length){
case 1:
return __GT_alert_STAR___1.call(this,cursor__24144__auto__);
case 2:
return __GT_alert_STAR___2.call(this,cursor__24144__auto__,m39233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_alert_STAR___1;
__GT_alert_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_alert_STAR___2;
return __GT_alert_STAR_;
})()
;
var ufv___39303 = schema.utils.use_fn_validation;var output_schema39291_39304 = om_bootstrap.types.Component;var input_schema39292_39305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Alert,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39293_39306 = schema.core.checker(input_schema39292_39305);var output_checker39294_39307 = schema.core.checker(output_schema39291_39304);/**
* Inputs: [opts :- Alert & children]
* Returns: t/Component
* 
* Wrapper for the alert component to allow a better user interface.
* @param {...*} var_args
*/
om_bootstrap.random.alert = ((function (ufv___39303,output_schema39291_39304,input_schema39292_39305,input_checker39293_39306,output_checker39294_39307){
return (function() { 
var alert__$1__delegate = function (G__39295,rest39296){var validate__837__auto__ = ufv___39303.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39308 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39295,rest39296);var temp__4126__auto___39309 = (function (){var G__39300 = args__838__auto___39308;return (input_checker39293_39306.cljs$core$IFn$_invoke$arity$1 ? input_checker39293_39306.cljs$core$IFn$_invoke$arity$1(G__39300) : input_checker39293_39306.call(null,G__39300));
})();if(cljs.core.truth_(temp__4126__auto___39309))
{var error__839__auto___39310 = temp__4126__auto___39309;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39310], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39292_39305,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39308,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39310], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39295;var children = rest39296;while(true){
var vec__39301 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Alert,opts,om_bootstrap.random.alert_defaults);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39301,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39301,(1),null);return om.core.build.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.alert_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs","bs",1748393559),bs,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39311 = (function (){var G__39302 = o__840__auto__;return (output_checker39294_39307.cljs$core$IFn$_invoke$arity$1 ? output_checker39294_39307.cljs$core$IFn$_invoke$arity$1(G__39302) : output_checker39294_39307.call(null,G__39302));
})();if(cljs.core.truth_(temp__4126__auto___39311))
{var error__839__auto___39312 = temp__4126__auto___39311;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"alert","alert",1068580947,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39312], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39291_39304,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39312], null));
} else
{}
} else
{}
return o__840__auto__;
};
var alert__$1 = function (G__39295,var_args){
var rest39296 = null;if (arguments.length > 1) {
  rest39296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alert__$1__delegate.call(this,G__39295,rest39296);};
alert__$1.cljs$lang$maxFixedArity = 1;
alert__$1.cljs$lang$applyTo = (function (arglist__39313){
var G__39295 = cljs.core.first(arglist__39313);
var rest39296 = cljs.core.rest(arglist__39313);
return alert__$1__delegate(G__39295,rest39296);
});
alert__$1.cljs$core$IFn$_invoke$arity$variadic = alert__$1__delegate;
return alert__$1;
})()
;})(ufv___39303,output_schema39291_39304,input_schema39292_39305,input_checker39293_39306,output_checker39294_39307))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.alert),schema.core.make_fn_schema(output_schema39291_39304,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39292_39305], null)));
om_bootstrap.random.Popover = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"placement","placement",768366651)),om_bootstrap.random.Placement,schema.core.optional_key(new cljs.core.Keyword(null,"position-left","position-left",-698586780)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"position-top","position-top",790552046)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616)),schema.core.Int,schema.core.optional_key(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487)),schema.core.Int], true, false));
var ufv___39328 = schema.utils.use_fn_validation;var output_schema39314_39329 = om_bootstrap.types.Component;var input_schema39315_39330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Popover,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39316_39331 = schema.core.checker(input_schema39315_39330);var output_checker39317_39332 = schema.core.checker(output_schema39314_39329);/**
* Inputs: [opts :- Popover & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.popover = ((function (ufv___39328,output_schema39314_39329,input_schema39315_39330,input_checker39316_39331,output_checker39317_39332){
return (function() { 
var popover__delegate = function (G__39318,rest39319){var validate__837__auto__ = ufv___39328.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39333 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39318,rest39319);var temp__4126__auto___39334 = (function (){var G__39324 = args__838__auto___39333;return (input_checker39316_39331.cljs$core$IFn$_invoke$arity$1 ? input_checker39316_39331.cljs$core$IFn$_invoke$arity$1(G__39324) : input_checker39316_39331.call(null,G__39324));
})();if(cljs.core.truth_(temp__4126__auto___39334))
{var error__839__auto___39335 = temp__4126__auto___39334;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39335], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39315_39330,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39333,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39335], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39318;var children = rest39319;while(true){
var vec__39325 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Popover,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placement","placement",768366651),"right"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39325,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39325,(1),null);var classes = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"placement","placement",768366651).cljs$core$IFn$_invoke$arity$1(bs),true,new cljs.core.Keyword(null,"in","in",-1531184865),(function (){var or__19267__auto__ = new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs);
}
})()], true, false);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"style": {"display": "block", "top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-top","position-top",790552046).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"position-left","position-left",-698586780).cljs$core$IFn$_invoke$arity$1(bs))}, "className": om_tools.dom.format_opts(om_tools.dom.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__39326 = {"style": {"top": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-top","arrow-offset-top",804504487).cljs$core$IFn$_invoke$arity$1(bs)), "left": om_tools.dom.format_opts(new cljs.core.Keyword(null,"arrow-offset-left","arrow-offset-left",-1194403616).cljs$core$IFn$_invoke$arity$1(bs))}, "className": "arrow"};return React.DOM.div(G__39326);
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var title = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,{"className": "popover-title"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[title],null))));
} else
{return null;
}
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "popover-content"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39336 = (function (){var G__39327 = o__840__auto__;return (output_checker39317_39332.cljs$core$IFn$_invoke$arity$1 ? output_checker39317_39332.cljs$core$IFn$_invoke$arity$1(G__39327) : output_checker39317_39332.call(null,G__39327));
})();if(cljs.core.truth_(temp__4126__auto___39336))
{var error__839__auto___39337 = temp__4126__auto___39336;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"popover","popover",-169050609,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39337], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39314_39329,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39337], null));
} else
{}
} else
{}
return o__840__auto__;
};
var popover = function (G__39318,var_args){
var rest39319 = null;if (arguments.length > 1) {
  rest39319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return popover__delegate.call(this,G__39318,rest39319);};
popover.cljs$lang$maxFixedArity = 1;
popover.cljs$lang$applyTo = (function (arglist__39338){
var G__39318 = cljs.core.first(arglist__39338);
var rest39319 = cljs.core.rest(arglist__39338);
return popover__delegate(G__39318,rest39319);
});
popover.cljs$core$IFn$_invoke$arity$variadic = popover__delegate;
return popover;
})()
;})(ufv___39328,output_schema39314_39329,input_schema39315_39330,input_checker39316_39331,output_checker39317_39332))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.popover),schema.core.make_fn_schema(output_schema39314_39329,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39315_39330], null)));
om_bootstrap.random.Badge = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool], true, false));
var ufv___39351 = schema.utils.use_fn_validation;var output_schema39339_39352 = om_bootstrap.types.Component;var input_schema39340_39353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Badge,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39341_39354 = schema.core.checker(input_schema39340_39353);var output_checker39342_39355 = schema.core.checker(output_schema39339_39352);/**
* Inputs: [opts :- Badge & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.badge = ((function (ufv___39351,output_schema39339_39352,input_schema39340_39353,input_checker39341_39354,output_checker39342_39355){
return (function() { 
var badge__delegate = function (G__39343,rest39344){var validate__837__auto__ = ufv___39351.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39356 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39343,rest39344);var temp__4126__auto___39357 = (function (){var G__39348 = args__838__auto___39356;return (input_checker39341_39354.cljs$core$IFn$_invoke$arity$1 ? input_checker39341_39354.cljs$core$IFn$_invoke$arity$1(G__39348) : input_checker39341_39354.call(null,G__39348));
})();if(cljs.core.truth_(temp__4126__auto___39357))
{var error__839__auto___39358 = temp__4126__auto___39357;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39358], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39340_39353,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39356,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39358], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39343;var children = rest39344;while(true){
var vec__39349 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.random.Badge,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39349,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39349,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"badge","badge",-1277997221),om_bootstrap.util.some_valid_component_QMARK_(children)], null);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39359 = (function (){var G__39350 = o__840__auto__;return (output_checker39342_39355.cljs$core$IFn$_invoke$arity$1 ? output_checker39342_39355.cljs$core$IFn$_invoke$arity$1(G__39350) : output_checker39342_39355.call(null,G__39350));
})();if(cljs.core.truth_(temp__4126__auto___39359))
{var error__839__auto___39360 = temp__4126__auto___39359;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"badge","badge",362534306,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39360], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39339_39352,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39360], null));
} else
{}
} else
{}
return o__840__auto__;
};
var badge = function (G__39343,var_args){
var rest39344 = null;if (arguments.length > 1) {
  rest39344 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return badge__delegate.call(this,G__39343,rest39344);};
badge.cljs$lang$maxFixedArity = 1;
badge.cljs$lang$applyTo = (function (arglist__39361){
var G__39343 = cljs.core.first(arglist__39361);
var rest39344 = cljs.core.rest(arglist__39361);
return badge__delegate(G__39343,rest39344);
});
badge.cljs$core$IFn$_invoke$arity$variadic = badge__delegate;
return badge;
})()
;})(ufv___39351,output_schema39339_39352,input_schema39340_39353,input_checker39341_39354,output_checker39342_39355))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.badge),schema.core.make_fn_schema(output_schema39339_39352,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39340_39353], null)));
om_bootstrap.random.Glyphicon = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),schema.core.Str], null));
var ufv___39374 = schema.utils.use_fn_validation;var output_schema39362_39375 = om_bootstrap.types.Component;var input_schema39363_39376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.random.Glyphicon,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39364_39377 = schema.core.checker(input_schema39363_39376);var output_checker39365_39378 = schema.core.checker(output_schema39362_39375);/**
* Inputs: [opts :- Glyphicon & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.random.glyphicon = ((function (ufv___39374,output_schema39362_39375,input_schema39363_39376,input_checker39364_39377,output_checker39365_39378){
return (function() { 
var glyphicon__delegate = function (G__39366,rest39367){var validate__837__auto__ = ufv___39374.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39379 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39366,rest39367);var temp__4126__auto___39380 = (function (){var G__39371 = args__838__auto___39379;return (input_checker39364_39377.cljs$core$IFn$_invoke$arity$1 ? input_checker39364_39377.cljs$core$IFn$_invoke$arity$1(G__39371) : input_checker39364_39377.call(null,G__39371));
})();if(cljs.core.truth_(temp__4126__auto___39380))
{var error__839__auto___39381 = temp__4126__auto___39380;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39381], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39363_39376,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39379,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39381], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39366;var children = rest39367;while(true){
var vec__39372 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.random.Glyphicon,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"glyphicon"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39372,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39372,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),("glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(bs))),true);return om_tools.dom.element(React.DOM.span,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39382 = (function (){var G__39373 = o__840__auto__;return (output_checker39365_39378.cljs$core$IFn$_invoke$arity$1 ? output_checker39365_39378.cljs$core$IFn$_invoke$arity$1(G__39373) : output_checker39365_39378.call(null,G__39373));
})();if(cljs.core.truth_(temp__4126__auto___39382))
{var error__839__auto___39383 = temp__4126__auto___39382;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyphicon","glyphicon",-442600634,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39383], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39362_39375,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39383], null));
} else
{}
} else
{}
return o__840__auto__;
};
var glyphicon = function (G__39366,var_args){
var rest39367 = null;if (arguments.length > 1) {
  rest39367 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return glyphicon__delegate.call(this,G__39366,rest39367);};
glyphicon.cljs$lang$maxFixedArity = 1;
glyphicon.cljs$lang$applyTo = (function (arglist__39384){
var G__39366 = cljs.core.first(arglist__39384);
var rest39367 = cljs.core.rest(arglist__39384);
return glyphicon__delegate(G__39366,rest39367);
});
glyphicon.cljs$core$IFn$_invoke$arity$variadic = glyphicon__delegate;
return glyphicon;
})()
;})(ufv___39374,output_schema39362_39375,input_schema39363_39376,input_checker39364_39377,output_checker39365_39378))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.random.glyphicon),schema.core.make_fn_schema(output_schema39362_39375,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39363_39376], null)));
//# sourceMappingURL=random.js.map