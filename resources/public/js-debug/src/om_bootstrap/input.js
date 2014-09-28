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
var ufv___57235 = schema.utils.use_fn_validation;var output_schema57222_57236 = schema.core.Str;var input_schema57223_57237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker57224_57238 = schema.core.checker(input_schema57223_57237);var output_checker57225_57239 = schema.core.checker(output_schema57222_57236);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___57235,output_schema57222_57236,input_schema57223_57237,input_checker57224_57238,output_checker57225_57239){
return (function class_set(G__57226){var validate__837__auto__ = ufv___57235.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57226], null);var temp__4126__auto___57241 = (function (){var G__57231 = args__838__auto___57240;return (input_checker57224_57238.cljs$core$IFn$_invoke$arity$1 ? input_checker57224_57238.cljs$core$IFn$_invoke$arity$1(G__57231) : input_checker57224_57238.call(null,G__57231));
})();if(cljs.core.truth_(temp__4126__auto___57241))
{var error__839__auto___57242 = temp__4126__auto___57241;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57242], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57223_57237,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57240,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57242], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__57226;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___57235,output_schema57222_57236,input_schema57223_57237,input_checker57224_57238,output_checker57225_57239){
return (function (p__57232){var vec__57233 = p__57232;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57233,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57233,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___57235,output_schema57222_57236,input_schema57223_57237,input_checker57224_57238,output_checker57225_57239))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57243 = (function (){var G__57234 = o__840__auto__;return (output_checker57225_57239.cljs$core$IFn$_invoke$arity$1 ? output_checker57225_57239.cljs$core$IFn$_invoke$arity$1(G__57234) : output_checker57225_57239.call(null,G__57234));
})();if(cljs.core.truth_(temp__4126__auto___57243))
{var error__839__auto___57244 = temp__4126__auto___57243;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57244], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57222_57236,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57244], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57235,output_schema57222_57236,input_schema57223_57237,input_checker57224_57238,output_checker57225_57239))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema57222_57236,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57223_57237], null)));
var ufv___57256 = schema.utils.use_fn_validation;var output_schema57245_57257 = om_bootstrap.types.Component;var input_schema57246_57258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker57247_57259 = schema.core.checker(input_schema57246_57258);var output_checker57248_57260 = schema.core.checker(output_schema57245_57257);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___57256,output_schema57245_57257,input_schema57246_57258,input_checker57247_57259,output_checker57248_57260){
return (function glyph(G__57249){var validate__837__auto__ = ufv___57256.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57249], null);var temp__4126__auto___57262 = (function (){var G__57253 = args__838__auto___57261;return (input_checker57247_57259.cljs$core$IFn$_invoke$arity$1 ? input_checker57247_57259.cljs$core$IFn$_invoke$arity$1(G__57253) : input_checker57247_57259.call(null,G__57253));
})();if(cljs.core.truth_(temp__4126__auto___57262))
{var error__839__auto___57263 = temp__4126__auto___57262;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57263], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57246_57258,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57261,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57263], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__57249;while(true){
var G__57254 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__57254);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57264 = (function (){var G__57255 = o__840__auto__;return (output_checker57248_57260.cljs$core$IFn$_invoke$arity$1 ? output_checker57248_57260.cljs$core$IFn$_invoke$arity$1(G__57255) : output_checker57248_57260.call(null,G__57255));
})();if(cljs.core.truth_(temp__4126__auto___57264))
{var error__839__auto___57265 = temp__4126__auto___57264;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57265], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57245_57257,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57265], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57256,output_schema57245_57257,input_schema57246_57258,input_checker57247_57259,output_checker57248_57260))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema57245_57257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57246_57258], null)));
var ufv___57285 = schema.utils.use_fn_validation;var output_schema57266_57286 = om_bootstrap.types.Component;var input_schema57267_57287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker57268_57288 = schema.core.checker(input_schema57267_57287);var output_checker57269_57289 = schema.core.checker(output_schema57266_57286);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___57285,output_schema57266_57286,input_schema57267_57287,input_checker57268_57288,output_checker57269_57289){
return (function render_icon(G__57270){var validate__837__auto__ = ufv___57285.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57270], null);var temp__4126__auto___57291 = (function (){var G__57278 = args__838__auto___57290;return (input_checker57268_57288.cljs$core$IFn$_invoke$arity$1 ? input_checker57268_57288.cljs$core$IFn$_invoke$arity$1(G__57278) : input_checker57268_57288.call(null,G__57278));
})();if(cljs.core.truth_(temp__4126__auto___57291))
{var error__839__auto___57292 = temp__4126__auto___57291;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57292], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57267_57287,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57290,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57292], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57280 = G__57270;var map__57281 = G__57280;var map__57281__$1 = ((cljs.core.seq_QMARK_(map__57281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57281):map__57281);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57281__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57281__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__57280__$1 = G__57280;while(true){
var map__57282 = G__57280__$1;var map__57282__$1 = ((cljs.core.seq_QMARK_(map__57282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57282):map__57282);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__57283 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__57283);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57293 = (function (){var G__57284 = o__840__auto__;return (output_checker57269_57289.cljs$core$IFn$_invoke$arity$1 ? output_checker57269_57289.cljs$core$IFn$_invoke$arity$1(G__57284) : output_checker57269_57289.call(null,G__57284));
})();if(cljs.core.truth_(temp__4126__auto___57293))
{var error__839__auto___57294 = temp__4126__auto___57293;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57294], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57266_57286,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57294], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57285,output_schema57266_57286,input_schema57267_57287,input_checker57268_57288,output_checker57269_57289))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema57266_57286,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57267_57287], null)));
var ufv___57304 = schema.utils.use_fn_validation;var output_schema57295_57305 = schema.core.Any;var input_schema57296_57306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker57297_57307 = schema.core.checker(input_schema57296_57306);var output_checker57298_57308 = schema.core.checker(output_schema57295_57305);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___57304,output_schema57295_57305,input_schema57296_57306,input_checker57297_57307,output_checker57298_57308){
return (function render_help(G__57299){var validate__837__auto__ = ufv___57304.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57299], null);var temp__4126__auto___57310 = (function (){var G__57302 = args__838__auto___57309;return (input_checker57297_57307.cljs$core$IFn$_invoke$arity$1 ? input_checker57297_57307.cljs$core$IFn$_invoke$arity$1(G__57302) : input_checker57297_57307.call(null,G__57302));
})();if(cljs.core.truth_(temp__4126__auto___57310))
{var error__839__auto___57311 = temp__4126__auto___57310;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57311], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57296_57306,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57309,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57311], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__57299;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57312 = (function (){var G__57303 = o__840__auto__;return (output_checker57298_57308.cljs$core$IFn$_invoke$arity$1 ? output_checker57298_57308.cljs$core$IFn$_invoke$arity$1(G__57303) : output_checker57298_57308.call(null,G__57303));
})();if(cljs.core.truth_(temp__4126__auto___57312))
{var error__839__auto___57313 = temp__4126__auto___57312;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57313], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57295_57305,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57313], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57304,output_schema57295_57305,input_schema57296_57306,input_checker57297_57307,output_checker57298_57308))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema57295_57305,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57296_57306], null)));
var ufv___57332 = schema.utils.use_fn_validation;var output_schema57314_57333 = schema.core.Any;var input_schema57315_57334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker57316_57335 = schema.core.checker(input_schema57315_57334);var output_checker57317_57336 = schema.core.checker(output_schema57314_57333);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___57332,output_schema57314_57333,input_schema57315_57334,input_checker57316_57335,output_checker57317_57336){
return (function render_input_group(G__57318,G__57319){var validate__837__auto__ = ufv___57332.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57318,G__57319], null);var temp__4126__auto___57338 = (function (){var G__57326 = args__838__auto___57337;return (input_checker57316_57335.cljs$core$IFn$_invoke$arity$1 ? input_checker57316_57335.cljs$core$IFn$_invoke$arity$1(G__57326) : input_checker57316_57335.call(null,G__57326));
})();if(cljs.core.truth_(temp__4126__auto___57338))
{var error__839__auto___57339 = temp__4126__auto___57338;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57339], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57315_57334,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57337,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57339], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57328 = G__57318;var map__57329 = G__57328;var map__57329__$1 = ((cljs.core.seq_QMARK_(map__57329))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57329):map__57329);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57329__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57329__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__57319;var G__57328__$1 = G__57328;var items__$1 = items;while(true){
var map__57330 = G__57328__$1;var map__57330__$1 = ((cljs.core.seq_QMARK_(map__57330))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57330):map__57330);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57330__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57330__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19289__auto__ = addon_before__$1;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
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
{var temp__4126__auto___57340 = (function (){var G__57331 = o__840__auto__;return (output_checker57317_57336.cljs$core$IFn$_invoke$arity$1 ? output_checker57317_57336.cljs$core$IFn$_invoke$arity$1(G__57331) : output_checker57317_57336.call(null,G__57331));
})();if(cljs.core.truth_(temp__4126__auto___57340))
{var error__839__auto___57341 = temp__4126__auto___57340;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57341], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57314_57333,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57341], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57332,output_schema57314_57333,input_schema57315_57334,input_checker57316_57335,output_checker57317_57336))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema57314_57333,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57315_57334], null)));
var ufv___57359 = schema.utils.use_fn_validation;var output_schema57342_57360 = schema.core.Bool;var input_schema57343_57361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker57344_57362 = schema.core.checker(input_schema57343_57361);var output_checker57345_57363 = schema.core.checker(output_schema57342_57360);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___57359,output_schema57342_57360,input_schema57343_57361,input_checker57344_57362,output_checker57345_57363){
return (function checkbox_or_radio_QMARK_(G__57346){var validate__837__auto__ = ufv___57359.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57346], null);var temp__4126__auto___57365 = (function (){var G__57353 = args__838__auto___57364;return (input_checker57344_57362.cljs$core$IFn$_invoke$arity$1 ? input_checker57344_57362.cljs$core$IFn$_invoke$arity$1(G__57353) : input_checker57344_57362.call(null,G__57353));
})();if(cljs.core.truth_(temp__4126__auto___57365))
{var error__839__auto___57366 = temp__4126__auto___57365;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57366], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57343_57361,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57364,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57366], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57355 = G__57346;var map__57356 = G__57355;var map__57356__$1 = ((cljs.core.seq_QMARK_(map__57356))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57356):map__57356);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57356__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__57355__$1 = G__57355;while(true){
var map__57357 = G__57355__$1;var map__57357__$1 = ((cljs.core.seq_QMARK_(map__57357))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57357):map__57357);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57357__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57367 = (function (){var G__57358 = o__840__auto__;return (output_checker57345_57363.cljs$core$IFn$_invoke$arity$1 ? output_checker57345_57363.cljs$core$IFn$_invoke$arity$1(G__57358) : output_checker57345_57363.call(null,G__57358));
})();if(cljs.core.truth_(temp__4126__auto___57367))
{var error__839__auto___57368 = temp__4126__auto___57367;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57368], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57342_57360,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57368], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57359,output_schema57342_57360,input_schema57343_57361,input_checker57344_57362,output_checker57345_57363))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema57342_57360,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57343_57361], null)));
var ufv___57387 = schema.utils.use_fn_validation;var output_schema57369_57388 = om_bootstrap.types.Component;var input_schema57370_57389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker57371_57390 = schema.core.checker(input_schema57370_57389);var output_checker57372_57391 = schema.core.checker(output_schema57369_57388);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___57387,output_schema57369_57388,input_schema57370_57389,input_checker57371_57390,output_checker57372_57391){
return (function checkbox_or_radio_wrapper(G__57373,G__57374){var validate__837__auto__ = ufv___57387.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57373,G__57374], null);var temp__4126__auto___57393 = (function (){var G__57381 = args__838__auto___57392;return (input_checker57371_57390.cljs$core$IFn$_invoke$arity$1 ? input_checker57371_57390.cljs$core$IFn$_invoke$arity$1(G__57381) : input_checker57371_57390.call(null,G__57381));
})();if(cljs.core.truth_(temp__4126__auto___57393))
{var error__839__auto___57394 = temp__4126__auto___57393;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57394], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57370_57389,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57392,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57394], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57383 = G__57373;var map__57384 = G__57383;var map__57384__$1 = ((cljs.core.seq_QMARK_(map__57384))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57384):map__57384);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57384__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__57374;var G__57383__$1 = G__57383;var children__$1 = children;while(true){
var map__57385 = G__57383__$1;var map__57385__$1 = ((cljs.core.seq_QMARK_(map__57385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57385):map__57385);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57385__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57395 = (function (){var G__57386 = o__840__auto__;return (output_checker57372_57391.cljs$core$IFn$_invoke$arity$1 ? output_checker57372_57391.cljs$core$IFn$_invoke$arity$1(G__57386) : output_checker57372_57391.call(null,G__57386));
})();if(cljs.core.truth_(temp__4126__auto___57395))
{var error__839__auto___57396 = temp__4126__auto___57395;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57396], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57369_57388,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57396], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57387,output_schema57369_57388,input_schema57370_57389,input_checker57371_57390,output_checker57372_57391))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema57369_57388,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57370_57389], null)));
var ufv___57425 = schema.utils.use_fn_validation;var output_schema57397_57426 = schema.core.Any;var input_schema57398_57427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema57402_57428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker57399_57429 = schema.core.checker(input_schema57398_57427);var output_checker57400_57430 = schema.core.checker(output_schema57397_57426);var input_checker57403_57431 = schema.core.checker(input_schema57402_57428);var output_checker57404_57432 = schema.core.checker(output_schema57397_57426);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___57425,output_schema57397_57426,input_schema57398_57427,input_schema57402_57428,input_checker57399_57429,output_checker57400_57430,input_checker57403_57431,output_checker57404_57432){
return (function() {
var render_label = null;
var render_label__1 = (function (G__57401){var validate__837__auto__ = ufv___57425.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57401], null);var temp__4126__auto___57434 = (function (){var G__57417 = args__838__auto___57433;return (input_checker57399_57429.cljs$core$IFn$_invoke$arity$1 ? input_checker57399_57429.cljs$core$IFn$_invoke$arity$1(G__57417) : input_checker57399_57429.call(null,G__57417));
})();if(cljs.core.truth_(temp__4126__auto___57434))
{var error__839__auto___57435 = temp__4126__auto___57434;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57435], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57398_57427,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57433,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57435], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__57401;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57436 = (function (){var G__57418 = o__840__auto__;return (output_checker57400_57430.cljs$core$IFn$_invoke$arity$1 ? output_checker57400_57430.cljs$core$IFn$_invoke$arity$1(G__57418) : output_checker57400_57430.call(null,G__57418));
})();if(cljs.core.truth_(temp__4126__auto___57436))
{var error__839__auto___57437 = temp__4126__auto___57436;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57437], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57397_57426,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57437], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__57405,G__57406){var validate__837__auto__ = ufv___57425.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57405,G__57406], null);var temp__4126__auto___57439 = (function (){var G__57419 = args__838__auto___57438;return (input_checker57403_57431.cljs$core$IFn$_invoke$arity$1 ? input_checker57403_57431.cljs$core$IFn$_invoke$arity$1(G__57419) : input_checker57403_57431.call(null,G__57419));
})();if(cljs.core.truth_(temp__4126__auto___57439))
{var error__839__auto___57440 = temp__4126__auto___57439;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57440], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57402_57428,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57438,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57440], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57421 = G__57405;var map__57422 = G__57421;var map__57422__$1 = ((cljs.core.seq_QMARK_(map__57422))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57422):map__57422);var input = map__57422__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57422__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57422__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__57406;var G__57421__$1 = G__57421;var child__$1 = child;while(true){
var map__57423 = G__57421__$1;var map__57423__$1 = ((cljs.core.seq_QMARK_(map__57423))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57423):map__57423);var input__$1 = map__57423__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57423__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57423__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57441 = (function (){var G__57424 = o__840__auto__;return (output_checker57404_57432.cljs$core$IFn$_invoke$arity$1 ? output_checker57404_57432.cljs$core$IFn$_invoke$arity$1(G__57424) : output_checker57404_57432.call(null,G__57424));
})();if(cljs.core.truth_(temp__4126__auto___57441))
{var error__839__auto___57442 = temp__4126__auto___57441;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57442], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57397_57426,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57442], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__57405,G__57406){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__57405);
case 2:
return render_label__2.call(this,G__57405,G__57406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___57425,output_schema57397_57426,input_schema57398_57427,input_schema57402_57428,input_checker57399_57429,output_checker57400_57430,input_checker57403_57431,output_checker57404_57432))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema57397_57426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57398_57427,input_schema57402_57428], null)));
var ufv___57461 = schema.utils.use_fn_validation;var output_schema57443_57462 = schema.core.Any;var input_schema57444_57463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker57445_57464 = schema.core.checker(input_schema57444_57463);var output_checker57446_57465 = schema.core.checker(output_schema57443_57462);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___57461,output_schema57443_57462,input_schema57444_57463,input_checker57445_57464,output_checker57446_57465){
return (function render_wrapper(G__57447,G__57448){var validate__837__auto__ = ufv___57461.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57447,G__57448], null);var temp__4126__auto___57467 = (function (){var G__57455 = args__838__auto___57466;return (input_checker57445_57464.cljs$core$IFn$_invoke$arity$1 ? input_checker57445_57464.cljs$core$IFn$_invoke$arity$1(G__57455) : input_checker57445_57464.call(null,G__57455));
})();if(cljs.core.truth_(temp__4126__auto___57467))
{var error__839__auto___57468 = temp__4126__auto___57467;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57468], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57444_57463,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57466,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57468], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57457 = G__57447;var map__57458 = G__57457;var map__57458__$1 = ((cljs.core.seq_QMARK_(map__57458))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57458):map__57458);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57458__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__57448;var G__57457__$1 = G__57457;var child__$1 = child;while(true){
var map__57459 = G__57457__$1;var map__57459__$1 = ((cljs.core.seq_QMARK_(map__57459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57459):map__57459);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57459__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57469 = (function (){var G__57460 = o__840__auto__;return (output_checker57446_57465.cljs$core$IFn$_invoke$arity$1 ? output_checker57446_57465.cljs$core$IFn$_invoke$arity$1(G__57460) : output_checker57446_57465.call(null,G__57460));
})();if(cljs.core.truth_(temp__4126__auto___57469))
{var error__839__auto___57470 = temp__4126__auto___57469;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57470], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57443_57462,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57470], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57461,output_schema57443_57462,input_schema57444_57463,input_checker57445_57464,output_checker57446_57465))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema57443_57462,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57444_57463], null)));
var ufv___57489 = schema.utils.use_fn_validation;var output_schema57471_57490 = om_bootstrap.types.Component;var input_schema57472_57491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker57473_57492 = schema.core.checker(input_schema57472_57491);var output_checker57474_57493 = schema.core.checker(output_schema57471_57490);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___57489,output_schema57471_57490,input_schema57472_57491,input_checker57473_57492,output_checker57474_57493){
return (function render_form_group(G__57475,G__57476){var validate__837__auto__ = ufv___57489.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57475,G__57476], null);var temp__4126__auto___57495 = (function (){var G__57483 = args__838__auto___57494;return (input_checker57473_57492.cljs$core$IFn$_invoke$arity$1 ? input_checker57473_57492.cljs$core$IFn$_invoke$arity$1(G__57483) : input_checker57473_57492.call(null,G__57483));
})();if(cljs.core.truth_(temp__4126__auto___57495))
{var error__839__auto___57496 = temp__4126__auto___57495;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57496], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57472_57491,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57494,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57496], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57485 = G__57475;var map__57486 = G__57485;var map__57486__$1 = ((cljs.core.seq_QMARK_(map__57486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57486):map__57486);var input = map__57486__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57486__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57486__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__57476;var G__57485__$1 = G__57485;var children__$1 = children;while(true){
var map__57487 = G__57485__$1;var map__57487__$1 = ((cljs.core.seq_QMARK_(map__57487))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57487):map__57487);var input__$1 = map__57487__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57487__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57487__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57497 = (function (){var G__57488 = o__840__auto__;return (output_checker57474_57493.cljs$core$IFn$_invoke$arity$1 ? output_checker57474_57493.cljs$core$IFn$_invoke$arity$1(G__57488) : output_checker57474_57493.call(null,G__57488));
})();if(cljs.core.truth_(temp__4126__auto___57497))
{var error__839__auto___57498 = temp__4126__auto___57497;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57498], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57471_57490,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57498], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57489,output_schema57471_57490,input_schema57472_57491,input_checker57473_57492,output_checker57474_57493))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema57471_57490,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57472_57491], null)));
var ufv___57512 = schema.utils.use_fn_validation;var output_schema57499_57513 = om_bootstrap.types.Component;var input_schema57500_57514 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker57501_57515 = schema.core.checker(input_schema57500_57514);var output_checker57502_57516 = schema.core.checker(output_schema57499_57513);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___57512,output_schema57499_57513,input_schema57500_57514,input_checker57501_57515,output_checker57502_57516){
return (function render_input(G__57503,G__57504,G__57505){var validate__837__auto__ = ufv___57512.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57517 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57503,G__57504,G__57505], null);var temp__4126__auto___57518 = (function (){var G__57509 = args__838__auto___57517;return (input_checker57501_57515.cljs$core$IFn$_invoke$arity$1 ? input_checker57501_57515.cljs$core$IFn$_invoke$arity$1(G__57509) : input_checker57501_57515.call(null,G__57509));
})();if(cljs.core.truth_(temp__4126__auto___57518))
{var error__839__auto___57519 = temp__4126__auto___57518;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57519], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57500_57514,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57517,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57519], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__57503;var attrs = G__57504;var children = G__57505;while(true){
var props = ((function (validate__837__auto__,ufv___57512,output_schema57499_57513,input_schema57500_57514,input_checker57501_57515,output_checker57502_57516){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___57512,output_schema57499_57513,input_schema57500_57514,input_checker57501_57515,output_checker57502_57516))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__57510 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__57510) {
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
{var temp__4126__auto___57521 = (function (){var G__57511 = o__840__auto__;return (output_checker57502_57516.cljs$core$IFn$_invoke$arity$1 ? output_checker57502_57516.cljs$core$IFn$_invoke$arity$1(G__57511) : output_checker57502_57516.call(null,G__57511));
})();if(cljs.core.truth_(temp__4126__auto___57521))
{var error__839__auto___57522 = temp__4126__auto___57521;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57522], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57499_57513,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57522], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57512,output_schema57499_57513,input_schema57500_57514,input_checker57501_57515,output_checker57502_57516))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema57499_57513,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57500_57514], null)));
var ufv___57535 = schema.utils.use_fn_validation;var output_schema57523_57536 = om_bootstrap.types.Component;var input_schema57524_57537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker57525_57538 = schema.core.checker(input_schema57524_57537);var output_checker57526_57539 = schema.core.checker(output_schema57523_57536);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___57535,output_schema57523_57536,input_schema57524_57537,input_checker57525_57538,output_checker57526_57539){
return (function() { 
var input__delegate = function (G__57527,rest57528){var validate__837__auto__ = ufv___57535.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57540 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__57527,rest57528);var temp__4126__auto___57541 = (function (){var G__57532 = args__838__auto___57540;return (input_checker57525_57538.cljs$core$IFn$_invoke$arity$1 ? input_checker57525_57538.cljs$core$IFn$_invoke$arity$1(G__57532) : input_checker57525_57538.call(null,G__57532));
})();if(cljs.core.truth_(temp__4126__auto___57541))
{var error__839__auto___57542 = temp__4126__auto___57541;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57542], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57524_57537,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57540,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57542], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__57527;var children = rest57528;while(true){
var vec__57533 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57533,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57533,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57543 = (function (){var G__57534 = o__840__auto__;return (output_checker57526_57539.cljs$core$IFn$_invoke$arity$1 ? output_checker57526_57539.cljs$core$IFn$_invoke$arity$1(G__57534) : output_checker57526_57539.call(null,G__57534));
})();if(cljs.core.truth_(temp__4126__auto___57543))
{var error__839__auto___57544 = temp__4126__auto___57543;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57544], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57523_57536,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57544], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__57527,var_args){
var rest57528 = null;if (arguments.length > 1) {
  rest57528 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__57527,rest57528);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__57545){
var G__57527 = cljs.core.first(arglist__57545);
var rest57528 = cljs.core.rest(arglist__57545);
return input__delegate(G__57527,rest57528);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___57535,output_schema57523_57536,input_schema57524_57537,input_checker57525_57538,output_checker57526_57539))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema57523_57536,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57524_57537], null)));
var ufv___57559 = schema.utils.use_fn_validation;var output_schema57546_57560 = om_bootstrap.types.Component;var input_schema57547_57561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker57548_57562 = schema.core.checker(input_schema57547_57561);var output_checker57549_57563 = schema.core.checker(output_schema57546_57560);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___57559,output_schema57546_57560,input_schema57547_57561,input_checker57548_57562,output_checker57549_57563){
return (function radio_option(G__57550){var validate__837__auto__ = ufv___57559.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57550], null);var temp__4126__auto___57565 = (function (){var G__57555 = args__838__auto___57564;return (input_checker57548_57562.cljs$core$IFn$_invoke$arity$1 ? input_checker57548_57562.cljs$core$IFn$_invoke$arity$1(G__57555) : input_checker57548_57562.call(null,G__57555));
})();if(cljs.core.truth_(temp__4126__auto___57565))
{var error__839__auto___57566 = temp__4126__auto___57565;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57566], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57547_57561,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57564,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57566], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__57550;while(true){
var vec__57556 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57556,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57556,(1),null);var map__57557 = bs;var map__57557__$1 = ((cljs.core.seq_QMARK_(map__57557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57557):map__57557);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57557__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57557__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57557__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57567 = (function (){var G__57558 = o__840__auto__;return (output_checker57549_57563.cljs$core$IFn$_invoke$arity$1 ? output_checker57549_57563.cljs$core$IFn$_invoke$arity$1(G__57558) : output_checker57549_57563.call(null,G__57558));
})();if(cljs.core.truth_(temp__4126__auto___57567))
{var error__839__auto___57568 = temp__4126__auto___57567;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57568], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57546_57560,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57568], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57559,output_schema57546_57560,input_schema57547_57561,input_checker57548_57562,output_checker57549_57563))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema57546_57560,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57547_57561], null)));
var ufv___57599 = schema.utils.use_fn_validation;var output_schema57569_57600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema57570_57601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker57571_57602 = schema.core.checker(input_schema57570_57601);var output_checker57572_57603 = schema.core.checker(output_schema57569_57600);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___57599,output_schema57569_57600,input_schema57570_57601,input_checker57571_57602,output_checker57572_57603){
return (function options(G__57573,G__57574){var validate__837__auto__ = ufv___57599.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57573,G__57574], null);var temp__4126__auto___57605 = (function (){var G__57587 = args__838__auto___57604;return (input_checker57571_57602.cljs$core$IFn$_invoke$arity$1 ? input_checker57571_57602.cljs$core$IFn$_invoke$arity$1(G__57587) : input_checker57571_57602.call(null,G__57587));
})();if(cljs.core.truth_(temp__4126__auto___57605))
{var error__839__auto___57606 = temp__4126__auto___57605;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57606], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57570_57601,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57604,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57606], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__57573;var opts = G__57574;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__20686__auto__ = ((function (validate__837__auto__,ufv___57599,output_schema57569_57600,input_schema57570_57601,input_checker57571_57602,output_checker57572_57603){
return (function iter__57588(s__57589){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___57599,output_schema57569_57600,input_schema57570_57601,input_checker57571_57602,output_checker57572_57603){
return (function (){var s__57589__$1 = s__57589;while(true){
var temp__4126__auto__ = cljs.core.seq(s__57589__$1);if(temp__4126__auto__)
{var s__57589__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__57589__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__57589__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__57591 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__57590 = (0);while(true){
if((i__57590 < size__20685__auto__))
{var vec__57596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__57590);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57596,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57596,(1),null);cljs.core.chunk_append(b__57591,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__57607 = (i__57590 + (1));
i__57590 = G__57607;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57591),iter__57588(cljs.core.chunk_rest(s__57589__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57591),null);
}
} else
{var vec__57597 = cljs.core.first(s__57589__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57597,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57597,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__57588(cljs.core.rest(s__57589__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___57599,output_schema57569_57600,input_schema57570_57601,input_checker57571_57602,output_checker57572_57603))
,null,null));
});})(validate__837__auto__,ufv___57599,output_schema57569_57600,input_schema57570_57601,input_checker57571_57602,output_checker57572_57603))
;return iter__20686__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57608 = (function (){var G__57598 = o__840__auto__;return (output_checker57572_57603.cljs$core$IFn$_invoke$arity$1 ? output_checker57572_57603.cljs$core$IFn$_invoke$arity$1(G__57598) : output_checker57572_57603.call(null,G__57598));
})();if(cljs.core.truth_(temp__4126__auto___57608))
{var error__839__auto___57609 = temp__4126__auto___57608;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57609], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57569_57600,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57609], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57599,output_schema57569_57600,input_schema57570_57601,input_checker57571_57602,output_checker57572_57603))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema57569_57600,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57570_57601], null)));
//# sourceMappingURL=input.js.map