goog.provide('om_bootstrap.input');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
goog.require('clojure.string');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.input.Addons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"addon-before","addon-before",-500360384)),schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,om_bootstrap.types.Component], 0)),schema.core.optional_key(new cljs.core.Keyword(null,"addon-after","addon-after",634985306)),schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,om_bootstrap.types.Component], 0))], true, false);
/**
* Helps render feedback icons.
*/
om_bootstrap.input.FeedbackIcons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["success","warning","error"], 0)),schema.core.optional_key(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821)),schema.core.Bool], true, false);
/**
* Input fields that match these bad dawgs:
* https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Input.jsx
*/
om_bootstrap.input.Input = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_bootstrap.input.Addons,om_bootstrap.input.FeedbackIcons,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key(new cljs.core.Keyword(null,"label","label",1718410804)),schema.core.Str,schema.core.optional_key(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261)),schema.core.named(schema.core.Bool,"DON'T render a wrapping form group?"),schema.core.optional_key(new cljs.core.Keyword(null,"help","help",-439233446)),schema.core.Str,schema.core.optional_key(new cljs.core.Keyword(null,"group-classname","group-classname",-610987816)),schema.core.Str,schema.core.optional_key(new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866)),schema.core.Str,schema.core.optional_key(new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212)),schema.core.Str], true, false)], 0));
om_bootstrap.input.Radio = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key(new cljs.core.Keyword(null,"checked?","checked?",2024809091)),schema.core.Bool,schema.core.optional_key(new cljs.core.Keyword(null,"inline?","inline?",-1674483791)),schema.core.Bool], true, false));
var ufv___39127 = schema.utils.use_fn_validation;var output_schema39114_39128 = schema.core.Str;var input_schema39115_39129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker39116_39130 = schema.core.checker(input_schema39115_39129);var output_checker39117_39131 = schema.core.checker(output_schema39114_39128);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___39127,output_schema39114_39128,input_schema39115_39129,input_checker39116_39130,output_checker39117_39131){
return (function class_set(G__39118){var validate__837__auto__ = ufv___39127.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39118], null);var temp__4126__auto___39133 = (function (){var G__39123 = args__838__auto___39132;return (input_checker39116_39130.cljs$core$IFn$_invoke$arity$1 ? input_checker39116_39130.cljs$core$IFn$_invoke$arity$1(G__39123) : input_checker39116_39130.call(null,G__39123));
})();if(cljs.core.truth_(temp__4126__auto___39133))
{var error__839__auto___39134 = temp__4126__auto___39133;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39134], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39115_39129,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39132,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39134], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__39118;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___39127,output_schema39114_39128,input_schema39115_39129,input_checker39116_39130,output_checker39117_39131){
return (function (p__39124){var vec__39125 = p__39124;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39125,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39125,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___39127,output_schema39114_39128,input_schema39115_39129,input_checker39116_39130,output_checker39117_39131))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39135 = (function (){var G__39126 = o__840__auto__;return (output_checker39117_39131.cljs$core$IFn$_invoke$arity$1 ? output_checker39117_39131.cljs$core$IFn$_invoke$arity$1(G__39126) : output_checker39117_39131.call(null,G__39126));
})();if(cljs.core.truth_(temp__4126__auto___39135))
{var error__839__auto___39136 = temp__4126__auto___39135;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39136], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39114_39128,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39136], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39127,output_schema39114_39128,input_schema39115_39129,input_checker39116_39130,output_checker39117_39131))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema39114_39128,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39115_39129], null)));
var ufv___39148 = schema.utils.use_fn_validation;var output_schema39137_39149 = om_bootstrap.types.Component;var input_schema39138_39150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker39139_39151 = schema.core.checker(input_schema39138_39150);var output_checker39140_39152 = schema.core.checker(output_schema39137_39149);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___39148,output_schema39137_39149,input_schema39138_39150,input_checker39139_39151,output_checker39140_39152){
return (function glyph(G__39141){var validate__837__auto__ = ufv___39148.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39141], null);var temp__4126__auto___39154 = (function (){var G__39145 = args__838__auto___39153;return (input_checker39139_39151.cljs$core$IFn$_invoke$arity$1 ? input_checker39139_39151.cljs$core$IFn$_invoke$arity$1(G__39145) : input_checker39139_39151.call(null,G__39145));
})();if(cljs.core.truth_(temp__4126__auto___39154))
{var error__839__auto___39155 = temp__4126__auto___39154;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39155], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39138_39150,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39153,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39155], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__39141;while(true){
var G__39146 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__39146);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39156 = (function (){var G__39147 = o__840__auto__;return (output_checker39140_39152.cljs$core$IFn$_invoke$arity$1 ? output_checker39140_39152.cljs$core$IFn$_invoke$arity$1(G__39147) : output_checker39140_39152.call(null,G__39147));
})();if(cljs.core.truth_(temp__4126__auto___39156))
{var error__839__auto___39157 = temp__4126__auto___39156;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39157], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39137_39149,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39157], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39148,output_schema39137_39149,input_schema39138_39150,input_checker39139_39151,output_checker39140_39152))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema39137_39149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39138_39150], null)));
var ufv___39177 = schema.utils.use_fn_validation;var output_schema39158_39178 = om_bootstrap.types.Component;var input_schema39159_39179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker39160_39180 = schema.core.checker(input_schema39159_39179);var output_checker39161_39181 = schema.core.checker(output_schema39158_39178);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___39177,output_schema39158_39178,input_schema39159_39179,input_checker39160_39180,output_checker39161_39181){
return (function render_icon(G__39162){var validate__837__auto__ = ufv___39177.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39162], null);var temp__4126__auto___39183 = (function (){var G__39170 = args__838__auto___39182;return (input_checker39160_39180.cljs$core$IFn$_invoke$arity$1 ? input_checker39160_39180.cljs$core$IFn$_invoke$arity$1(G__39170) : input_checker39160_39180.call(null,G__39170));
})();if(cljs.core.truth_(temp__4126__auto___39183))
{var error__839__auto___39184 = temp__4126__auto___39183;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39184], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39159_39179,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39182,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39184], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39172 = G__39162;var map__39173 = G__39172;var map__39173__$1 = ((cljs.core.seq_QMARK_(map__39173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39173):map__39173);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39173__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39173__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__39172__$1 = G__39172;while(true){
var map__39174 = G__39172__$1;var map__39174__$1 = ((cljs.core.seq_QMARK_(map__39174))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39174):map__39174);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39174__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39174__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__39175 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__39175);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39185 = (function (){var G__39176 = o__840__auto__;return (output_checker39161_39181.cljs$core$IFn$_invoke$arity$1 ? output_checker39161_39181.cljs$core$IFn$_invoke$arity$1(G__39176) : output_checker39161_39181.call(null,G__39176));
})();if(cljs.core.truth_(temp__4126__auto___39185))
{var error__839__auto___39186 = temp__4126__auto___39185;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39186], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39158_39178,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39186], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39177,output_schema39158_39178,input_schema39159_39179,input_checker39160_39180,output_checker39161_39181))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema39158_39178,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39159_39179], null)));
var ufv___39196 = schema.utils.use_fn_validation;var output_schema39187_39197 = schema.core.Any;var input_schema39188_39198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker39189_39199 = schema.core.checker(input_schema39188_39198);var output_checker39190_39200 = schema.core.checker(output_schema39187_39197);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___39196,output_schema39187_39197,input_schema39188_39198,input_checker39189_39199,output_checker39190_39200){
return (function render_help(G__39191){var validate__837__auto__ = ufv___39196.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39201 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39191], null);var temp__4126__auto___39202 = (function (){var G__39194 = args__838__auto___39201;return (input_checker39189_39199.cljs$core$IFn$_invoke$arity$1 ? input_checker39189_39199.cljs$core$IFn$_invoke$arity$1(G__39194) : input_checker39189_39199.call(null,G__39194));
})();if(cljs.core.truth_(temp__4126__auto___39202))
{var error__839__auto___39203 = temp__4126__auto___39202;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39203], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39188_39198,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39201,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39203], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__39191;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39204 = (function (){var G__39195 = o__840__auto__;return (output_checker39190_39200.cljs$core$IFn$_invoke$arity$1 ? output_checker39190_39200.cljs$core$IFn$_invoke$arity$1(G__39195) : output_checker39190_39200.call(null,G__39195));
})();if(cljs.core.truth_(temp__4126__auto___39204))
{var error__839__auto___39205 = temp__4126__auto___39204;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39205], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39187_39197,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39205], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39196,output_schema39187_39197,input_schema39188_39198,input_checker39189_39199,output_checker39190_39200))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema39187_39197,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39188_39198], null)));
var ufv___39224 = schema.utils.use_fn_validation;var output_schema39206_39225 = schema.core.Any;var input_schema39207_39226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker39208_39227 = schema.core.checker(input_schema39207_39226);var output_checker39209_39228 = schema.core.checker(output_schema39206_39225);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___39224,output_schema39206_39225,input_schema39207_39226,input_checker39208_39227,output_checker39209_39228){
return (function render_input_group(G__39210,G__39211){var validate__837__auto__ = ufv___39224.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39210,G__39211], null);var temp__4126__auto___39230 = (function (){var G__39218 = args__838__auto___39229;return (input_checker39208_39227.cljs$core$IFn$_invoke$arity$1 ? input_checker39208_39227.cljs$core$IFn$_invoke$arity$1(G__39218) : input_checker39208_39227.call(null,G__39218));
})();if(cljs.core.truth_(temp__4126__auto___39230))
{var error__839__auto___39231 = temp__4126__auto___39230;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39231], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39207_39226,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39229,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39231], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39220 = G__39210;var map__39221 = G__39220;var map__39221__$1 = ((cljs.core.seq_QMARK_(map__39221))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39221):map__39221);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39221__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39221__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__39211;var G__39220__$1 = G__39220;var items__$1 = items;while(true){
var map__39222 = G__39220__$1;var map__39222__$1 = ((cljs.core.seq_QMARK_(map__39222))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39222):map__39222);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39222__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39222__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19663__auto__ = addon_before__$1;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return addon_after__$1;
}
})()))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "input-group"},cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(addon_before__$1)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_before__$1],null)))):null),items__$2,(cljs.core.truth_(addon_after__$1)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_after__$1],null)))):null)],null))));
} else
{return items__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39232 = (function (){var G__39223 = o__840__auto__;return (output_checker39209_39228.cljs$core$IFn$_invoke$arity$1 ? output_checker39209_39228.cljs$core$IFn$_invoke$arity$1(G__39223) : output_checker39209_39228.call(null,G__39223));
})();if(cljs.core.truth_(temp__4126__auto___39232))
{var error__839__auto___39233 = temp__4126__auto___39232;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39233], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39206_39225,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39233], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39224,output_schema39206_39225,input_schema39207_39226,input_checker39208_39227,output_checker39209_39228))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema39206_39225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39207_39226], null)));
var ufv___39251 = schema.utils.use_fn_validation;var output_schema39234_39252 = schema.core.Bool;var input_schema39235_39253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker39236_39254 = schema.core.checker(input_schema39235_39253);var output_checker39237_39255 = schema.core.checker(output_schema39234_39252);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___39251,output_schema39234_39252,input_schema39235_39253,input_checker39236_39254,output_checker39237_39255){
return (function checkbox_or_radio_QMARK_(G__39238){var validate__837__auto__ = ufv___39251.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39238], null);var temp__4126__auto___39257 = (function (){var G__39245 = args__838__auto___39256;return (input_checker39236_39254.cljs$core$IFn$_invoke$arity$1 ? input_checker39236_39254.cljs$core$IFn$_invoke$arity$1(G__39245) : input_checker39236_39254.call(null,G__39245));
})();if(cljs.core.truth_(temp__4126__auto___39257))
{var error__839__auto___39258 = temp__4126__auto___39257;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39258], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39235_39253,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39256,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39258], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39247 = G__39238;var map__39248 = G__39247;var map__39248__$1 = ((cljs.core.seq_QMARK_(map__39248))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39248):map__39248);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39248__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__39247__$1 = G__39247;while(true){
var map__39249 = G__39247__$1;var map__39249__$1 = ((cljs.core.seq_QMARK_(map__39249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39249):map__39249);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39249__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39259 = (function (){var G__39250 = o__840__auto__;return (output_checker39237_39255.cljs$core$IFn$_invoke$arity$1 ? output_checker39237_39255.cljs$core$IFn$_invoke$arity$1(G__39250) : output_checker39237_39255.call(null,G__39250));
})();if(cljs.core.truth_(temp__4126__auto___39259))
{var error__839__auto___39260 = temp__4126__auto___39259;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39260], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39234_39252,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39260], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39251,output_schema39234_39252,input_schema39235_39253,input_checker39236_39254,output_checker39237_39255))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema39234_39252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39235_39253], null)));
var ufv___39279 = schema.utils.use_fn_validation;var output_schema39261_39280 = om_bootstrap.types.Component;var input_schema39262_39281 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker39263_39282 = schema.core.checker(input_schema39262_39281);var output_checker39264_39283 = schema.core.checker(output_schema39261_39280);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___39279,output_schema39261_39280,input_schema39262_39281,input_checker39263_39282,output_checker39264_39283){
return (function checkbox_or_radio_wrapper(G__39265,G__39266){var validate__837__auto__ = ufv___39279.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39265,G__39266], null);var temp__4126__auto___39285 = (function (){var G__39273 = args__838__auto___39284;return (input_checker39263_39282.cljs$core$IFn$_invoke$arity$1 ? input_checker39263_39282.cljs$core$IFn$_invoke$arity$1(G__39273) : input_checker39263_39282.call(null,G__39273));
})();if(cljs.core.truth_(temp__4126__auto___39285))
{var error__839__auto___39286 = temp__4126__auto___39285;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39286], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39262_39281,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39284,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39286], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39275 = G__39265;var map__39276 = G__39275;var map__39276__$1 = ((cljs.core.seq_QMARK_(map__39276))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39276):map__39276);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39276__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__39266;var G__39275__$1 = G__39275;var children__$1 = children;while(true){
var map__39277 = G__39275__$1;var map__39277__$1 = ((cljs.core.seq_QMARK_(map__39277))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39277):map__39277);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39277__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39287 = (function (){var G__39278 = o__840__auto__;return (output_checker39264_39283.cljs$core$IFn$_invoke$arity$1 ? output_checker39264_39283.cljs$core$IFn$_invoke$arity$1(G__39278) : output_checker39264_39283.call(null,G__39278));
})();if(cljs.core.truth_(temp__4126__auto___39287))
{var error__839__auto___39288 = temp__4126__auto___39287;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39288], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39261_39280,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39288], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39279,output_schema39261_39280,input_schema39262_39281,input_checker39263_39282,output_checker39264_39283))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema39261_39280,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39262_39281], null)));
var ufv___39317 = schema.utils.use_fn_validation;var output_schema39289_39318 = schema.core.Any;var input_schema39290_39319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema39294_39320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker39291_39321 = schema.core.checker(input_schema39290_39319);var output_checker39292_39322 = schema.core.checker(output_schema39289_39318);var input_checker39295_39323 = schema.core.checker(input_schema39294_39320);var output_checker39296_39324 = schema.core.checker(output_schema39289_39318);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___39317,output_schema39289_39318,input_schema39290_39319,input_schema39294_39320,input_checker39291_39321,output_checker39292_39322,input_checker39295_39323,output_checker39296_39324){
return (function() {
var render_label = null;
var render_label__1 = (function (G__39293){var validate__837__auto__ = ufv___39317.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39293], null);var temp__4126__auto___39326 = (function (){var G__39309 = args__838__auto___39325;return (input_checker39291_39321.cljs$core$IFn$_invoke$arity$1 ? input_checker39291_39321.cljs$core$IFn$_invoke$arity$1(G__39309) : input_checker39291_39321.call(null,G__39309));
})();if(cljs.core.truth_(temp__4126__auto___39326))
{var error__839__auto___39327 = temp__4126__auto___39326;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39327], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39290_39319,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39325,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39327], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__39293;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39328 = (function (){var G__39310 = o__840__auto__;return (output_checker39292_39322.cljs$core$IFn$_invoke$arity$1 ? output_checker39292_39322.cljs$core$IFn$_invoke$arity$1(G__39310) : output_checker39292_39322.call(null,G__39310));
})();if(cljs.core.truth_(temp__4126__auto___39328))
{var error__839__auto___39329 = temp__4126__auto___39328;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39329], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39289_39318,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39329], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__39297,G__39298){var validate__837__auto__ = ufv___39317.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39297,G__39298], null);var temp__4126__auto___39331 = (function (){var G__39311 = args__838__auto___39330;return (input_checker39295_39323.cljs$core$IFn$_invoke$arity$1 ? input_checker39295_39323.cljs$core$IFn$_invoke$arity$1(G__39311) : input_checker39295_39323.call(null,G__39311));
})();if(cljs.core.truth_(temp__4126__auto___39331))
{var error__839__auto___39332 = temp__4126__auto___39331;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39332], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39294_39320,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39330,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39332], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39313 = G__39297;var map__39314 = G__39313;var map__39314__$1 = ((cljs.core.seq_QMARK_(map__39314))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39314):map__39314);var input = map__39314__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39314__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39314__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__39298;var G__39313__$1 = G__39313;var child__$1 = child;while(true){
var map__39315 = G__39313__$1;var map__39315__$1 = ((cljs.core.seq_QMARK_(map__39315))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39315):map__39315);var input__$1 = map__39315__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39315__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39315__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39333 = (function (){var G__39316 = o__840__auto__;return (output_checker39296_39324.cljs$core$IFn$_invoke$arity$1 ? output_checker39296_39324.cljs$core$IFn$_invoke$arity$1(G__39316) : output_checker39296_39324.call(null,G__39316));
})();if(cljs.core.truth_(temp__4126__auto___39333))
{var error__839__auto___39334 = temp__4126__auto___39333;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39334], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39289_39318,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39334], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__39297,G__39298){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__39297);
case 2:
return render_label__2.call(this,G__39297,G__39298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___39317,output_schema39289_39318,input_schema39290_39319,input_schema39294_39320,input_checker39291_39321,output_checker39292_39322,input_checker39295_39323,output_checker39296_39324))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema39289_39318,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39290_39319,input_schema39294_39320], null)));
var ufv___39353 = schema.utils.use_fn_validation;var output_schema39335_39354 = schema.core.Any;var input_schema39336_39355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker39337_39356 = schema.core.checker(input_schema39336_39355);var output_checker39338_39357 = schema.core.checker(output_schema39335_39354);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___39353,output_schema39335_39354,input_schema39336_39355,input_checker39337_39356,output_checker39338_39357){
return (function render_wrapper(G__39339,G__39340){var validate__837__auto__ = ufv___39353.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39339,G__39340], null);var temp__4126__auto___39359 = (function (){var G__39347 = args__838__auto___39358;return (input_checker39337_39356.cljs$core$IFn$_invoke$arity$1 ? input_checker39337_39356.cljs$core$IFn$_invoke$arity$1(G__39347) : input_checker39337_39356.call(null,G__39347));
})();if(cljs.core.truth_(temp__4126__auto___39359))
{var error__839__auto___39360 = temp__4126__auto___39359;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39360], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39336_39355,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39358,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39360], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39349 = G__39339;var map__39350 = G__39349;var map__39350__$1 = ((cljs.core.seq_QMARK_(map__39350))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39350):map__39350);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39350__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__39340;var G__39349__$1 = G__39349;var child__$1 = child;while(true){
var map__39351 = G__39349__$1;var map__39351__$1 = ((cljs.core.seq_QMARK_(map__39351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39351):map__39351);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39351__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39361 = (function (){var G__39352 = o__840__auto__;return (output_checker39338_39357.cljs$core$IFn$_invoke$arity$1 ? output_checker39338_39357.cljs$core$IFn$_invoke$arity$1(G__39352) : output_checker39338_39357.call(null,G__39352));
})();if(cljs.core.truth_(temp__4126__auto___39361))
{var error__839__auto___39362 = temp__4126__auto___39361;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39362], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39335_39354,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39362], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39353,output_schema39335_39354,input_schema39336_39355,input_checker39337_39356,output_checker39338_39357))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema39335_39354,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39336_39355], null)));
var ufv___39381 = schema.utils.use_fn_validation;var output_schema39363_39382 = om_bootstrap.types.Component;var input_schema39364_39383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker39365_39384 = schema.core.checker(input_schema39364_39383);var output_checker39366_39385 = schema.core.checker(output_schema39363_39382);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___39381,output_schema39363_39382,input_schema39364_39383,input_checker39365_39384,output_checker39366_39385){
return (function render_form_group(G__39367,G__39368){var validate__837__auto__ = ufv___39381.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39367,G__39368], null);var temp__4126__auto___39387 = (function (){var G__39375 = args__838__auto___39386;return (input_checker39365_39384.cljs$core$IFn$_invoke$arity$1 ? input_checker39365_39384.cljs$core$IFn$_invoke$arity$1(G__39375) : input_checker39365_39384.call(null,G__39375));
})();if(cljs.core.truth_(temp__4126__auto___39387))
{var error__839__auto___39388 = temp__4126__auto___39387;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39388], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39364_39383,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39386,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39388], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39377 = G__39367;var map__39378 = G__39377;var map__39378__$1 = ((cljs.core.seq_QMARK_(map__39378))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39378):map__39378);var input = map__39378__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39378__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39378__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__39368;var G__39377__$1 = G__39377;var children__$1 = children;while(true){
var map__39379 = G__39377__$1;var map__39379__$1 = ((cljs.core.seq_QMARK_(map__39379))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39379):map__39379);var input__$1 = map__39379__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39379__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39379__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39389 = (function (){var G__39380 = o__840__auto__;return (output_checker39366_39385.cljs$core$IFn$_invoke$arity$1 ? output_checker39366_39385.cljs$core$IFn$_invoke$arity$1(G__39380) : output_checker39366_39385.call(null,G__39380));
})();if(cljs.core.truth_(temp__4126__auto___39389))
{var error__839__auto___39390 = temp__4126__auto___39389;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39390], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39363_39382,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39390], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39381,output_schema39363_39382,input_schema39364_39383,input_checker39365_39384,output_checker39366_39385))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema39363_39382,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39364_39383], null)));
var ufv___39404 = schema.utils.use_fn_validation;var output_schema39391_39405 = om_bootstrap.types.Component;var input_schema39392_39406 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker39393_39407 = schema.core.checker(input_schema39392_39406);var output_checker39394_39408 = schema.core.checker(output_schema39391_39405);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___39404,output_schema39391_39405,input_schema39392_39406,input_checker39393_39407,output_checker39394_39408){
return (function render_input(G__39395,G__39396,G__39397){var validate__837__auto__ = ufv___39404.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39409 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39395,G__39396,G__39397], null);var temp__4126__auto___39410 = (function (){var G__39401 = args__838__auto___39409;return (input_checker39393_39407.cljs$core$IFn$_invoke$arity$1 ? input_checker39393_39407.cljs$core$IFn$_invoke$arity$1(G__39401) : input_checker39393_39407.call(null,G__39401));
})();if(cljs.core.truth_(temp__4126__auto___39410))
{var error__839__auto___39411 = temp__4126__auto___39410;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39411], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39392_39406,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39409,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39411], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__39395;var attrs = G__39396;var children = G__39397;while(true){
var props = ((function (validate__837__auto__,ufv___39404,output_schema39391_39405,input_schema39392_39406,input_checker39393_39407,output_checker39394_39408){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___39404,output_schema39391_39405,input_schema39392_39406,input_checker39393_39407,output_checker39394_39408))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__39402 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__39402) {
case "select":
return om_tools.dom.element(React.DOM.select,props("form-control"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

break;
case "textarea":
return om_tools.dom.element(om.dom.textarea,props("form-control"),cljs.core.PersistentVector.EMPTY);

break;
case "static":
return om_tools.dom.element(React.DOM.p,props("form-control-static"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs)],null)));

break;
default:
return om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props(((om_bootstrap.input.checkbox_or_radio_QMARK_(input))?"":"form-control")),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39413 = (function (){var G__39403 = o__840__auto__;return (output_checker39394_39408.cljs$core$IFn$_invoke$arity$1 ? output_checker39394_39408.cljs$core$IFn$_invoke$arity$1(G__39403) : output_checker39394_39408.call(null,G__39403));
})();if(cljs.core.truth_(temp__4126__auto___39413))
{var error__839__auto___39414 = temp__4126__auto___39413;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39414], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39391_39405,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39414], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39404,output_schema39391_39405,input_schema39392_39406,input_checker39393_39407,output_checker39394_39408))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema39391_39405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39392_39406], null)));
var ufv___39427 = schema.utils.use_fn_validation;var output_schema39415_39428 = om_bootstrap.types.Component;var input_schema39416_39429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39417_39430 = schema.core.checker(input_schema39416_39429);var output_checker39418_39431 = schema.core.checker(output_schema39415_39428);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___39427,output_schema39415_39428,input_schema39416_39429,input_checker39417_39430,output_checker39418_39431){
return (function() { 
var input__delegate = function (G__39419,rest39420){var validate__837__auto__ = ufv___39427.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39432 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39419,rest39420);var temp__4126__auto___39433 = (function (){var G__39424 = args__838__auto___39432;return (input_checker39417_39430.cljs$core$IFn$_invoke$arity$1 ? input_checker39417_39430.cljs$core$IFn$_invoke$arity$1(G__39424) : input_checker39417_39430.call(null,G__39424));
})();if(cljs.core.truth_(temp__4126__auto___39433))
{var error__839__auto___39434 = temp__4126__auto___39433;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39434], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39416_39429,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39432,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39434], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39419;var children = rest39420;while(true){
var vec__39425 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39425,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39425,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39435 = (function (){var G__39426 = o__840__auto__;return (output_checker39418_39431.cljs$core$IFn$_invoke$arity$1 ? output_checker39418_39431.cljs$core$IFn$_invoke$arity$1(G__39426) : output_checker39418_39431.call(null,G__39426));
})();if(cljs.core.truth_(temp__4126__auto___39435))
{var error__839__auto___39436 = temp__4126__auto___39435;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39436], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39415_39428,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39436], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__39419,var_args){
var rest39420 = null;if (arguments.length > 1) {
  rest39420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__39419,rest39420);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__39437){
var G__39419 = cljs.core.first(arglist__39437);
var rest39420 = cljs.core.rest(arglist__39437);
return input__delegate(G__39419,rest39420);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___39427,output_schema39415_39428,input_schema39416_39429,input_checker39417_39430,output_checker39418_39431))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema39415_39428,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39416_39429], null)));
var ufv___39451 = schema.utils.use_fn_validation;var output_schema39438_39452 = om_bootstrap.types.Component;var input_schema39439_39453 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker39440_39454 = schema.core.checker(input_schema39439_39453);var output_checker39441_39455 = schema.core.checker(output_schema39438_39452);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___39451,output_schema39438_39452,input_schema39439_39453,input_checker39440_39454,output_checker39441_39455){
return (function radio_option(G__39442){var validate__837__auto__ = ufv___39451.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39442], null);var temp__4126__auto___39457 = (function (){var G__39447 = args__838__auto___39456;return (input_checker39440_39454.cljs$core$IFn$_invoke$arity$1 ? input_checker39440_39454.cljs$core$IFn$_invoke$arity$1(G__39447) : input_checker39440_39454.call(null,G__39447));
})();if(cljs.core.truth_(temp__4126__auto___39457))
{var error__839__auto___39458 = temp__4126__auto___39457;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39458], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39439_39453,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39456,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39458], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39442;while(true){
var vec__39448 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39448,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39448,(1),null);var map__39449 = bs;var map__39449__$1 = ((cljs.core.seq_QMARK_(map__39449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39449):map__39449);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39459 = (function (){var G__39450 = o__840__auto__;return (output_checker39441_39455.cljs$core$IFn$_invoke$arity$1 ? output_checker39441_39455.cljs$core$IFn$_invoke$arity$1(G__39450) : output_checker39441_39455.call(null,G__39450));
})();if(cljs.core.truth_(temp__4126__auto___39459))
{var error__839__auto___39460 = temp__4126__auto___39459;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39460], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39438_39452,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39460], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39451,output_schema39438_39452,input_schema39439_39453,input_checker39440_39454,output_checker39441_39455))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema39438_39452,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39439_39453], null)));
var ufv___39491 = schema.utils.use_fn_validation;var output_schema39461_39492 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema39462_39493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker39463_39494 = schema.core.checker(input_schema39462_39493);var output_checker39464_39495 = schema.core.checker(output_schema39461_39492);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___39491,output_schema39461_39492,input_schema39462_39493,input_checker39463_39494,output_checker39464_39495){
return (function options(G__39465,G__39466){var validate__837__auto__ = ufv___39491.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39465,G__39466], null);var temp__4126__auto___39497 = (function (){var G__39479 = args__838__auto___39496;return (input_checker39463_39494.cljs$core$IFn$_invoke$arity$1 ? input_checker39463_39494.cljs$core$IFn$_invoke$arity$1(G__39479) : input_checker39463_39494.call(null,G__39479));
})();if(cljs.core.truth_(temp__4126__auto___39497))
{var error__839__auto___39498 = temp__4126__auto___39497;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39498], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39462_39493,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39496,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39498], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__39465;var opts = G__39466;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__21074__auto__ = ((function (validate__837__auto__,ufv___39491,output_schema39461_39492,input_schema39462_39493,input_checker39463_39494,output_checker39464_39495){
return (function iter__39480(s__39481){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___39491,output_schema39461_39492,input_schema39462_39493,input_checker39463_39494,output_checker39464_39495){
return (function (){var s__39481__$1 = s__39481;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39481__$1);if(temp__4126__auto__)
{var s__39481__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39481__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__39481__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__39483 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__39482 = (0);while(true){
if((i__39482 < size__21073__auto__))
{var vec__39488 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__39482);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39488,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39488,(1),null);cljs.core.chunk_append(b__39483,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__39499 = (i__39482 + (1));
i__39482 = G__39499;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39483),iter__39480(cljs.core.chunk_rest(s__39481__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39483),null);
}
} else
{var vec__39489 = cljs.core.first(s__39481__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39489,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39489,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__39480(cljs.core.rest(s__39481__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___39491,output_schema39461_39492,input_schema39462_39493,input_checker39463_39494,output_checker39464_39495))
,null,null));
});})(validate__837__auto__,ufv___39491,output_schema39461_39492,input_schema39462_39493,input_checker39463_39494,output_checker39464_39495))
;return iter__21074__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39500 = (function (){var G__39490 = o__840__auto__;return (output_checker39464_39495.cljs$core$IFn$_invoke$arity$1 ? output_checker39464_39495.cljs$core$IFn$_invoke$arity$1(G__39490) : output_checker39464_39495.call(null,G__39490));
})();if(cljs.core.truth_(temp__4126__auto___39500))
{var error__839__auto___39501 = temp__4126__auto___39500;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39501], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39461_39492,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39501], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39491,output_schema39461_39492,input_schema39462_39493,input_checker39463_39494,output_checker39464_39495))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema39461_39492,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39462_39493], null)));
//# sourceMappingURL=input.js.map