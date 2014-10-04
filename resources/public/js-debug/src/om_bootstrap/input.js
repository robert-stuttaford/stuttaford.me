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
var ufv___40023 = schema.utils.use_fn_validation;var output_schema40010_40024 = schema.core.Str;var input_schema40011_40025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker40012_40026 = schema.core.checker(input_schema40011_40025);var output_checker40013_40027 = schema.core.checker(output_schema40010_40024);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___40023,output_schema40010_40024,input_schema40011_40025,input_checker40012_40026,output_checker40013_40027){
return (function class_set(G__40014){var validate__837__auto__ = ufv___40023.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40014], null);var temp__4126__auto___40029 = (function (){var G__40019 = args__838__auto___40028;return (input_checker40012_40026.cljs$core$IFn$_invoke$arity$1 ? input_checker40012_40026.cljs$core$IFn$_invoke$arity$1(G__40019) : input_checker40012_40026.call(null,G__40019));
})();if(cljs.core.truth_(temp__4126__auto___40029))
{var error__839__auto___40030 = temp__4126__auto___40029;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40030], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40011_40025,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40028,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40030], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__40014;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___40023,output_schema40010_40024,input_schema40011_40025,input_checker40012_40026,output_checker40013_40027){
return (function (p__40020){var vec__40021 = p__40020;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40021,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40021,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___40023,output_schema40010_40024,input_schema40011_40025,input_checker40012_40026,output_checker40013_40027))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40031 = (function (){var G__40022 = o__840__auto__;return (output_checker40013_40027.cljs$core$IFn$_invoke$arity$1 ? output_checker40013_40027.cljs$core$IFn$_invoke$arity$1(G__40022) : output_checker40013_40027.call(null,G__40022));
})();if(cljs.core.truth_(temp__4126__auto___40031))
{var error__839__auto___40032 = temp__4126__auto___40031;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40032], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40010_40024,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40032], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40023,output_schema40010_40024,input_schema40011_40025,input_checker40012_40026,output_checker40013_40027))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema40010_40024,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40011_40025], null)));
var ufv___40044 = schema.utils.use_fn_validation;var output_schema40033_40045 = om_bootstrap.types.Component;var input_schema40034_40046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker40035_40047 = schema.core.checker(input_schema40034_40046);var output_checker40036_40048 = schema.core.checker(output_schema40033_40045);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___40044,output_schema40033_40045,input_schema40034_40046,input_checker40035_40047,output_checker40036_40048){
return (function glyph(G__40037){var validate__837__auto__ = ufv___40044.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40037], null);var temp__4126__auto___40050 = (function (){var G__40041 = args__838__auto___40049;return (input_checker40035_40047.cljs$core$IFn$_invoke$arity$1 ? input_checker40035_40047.cljs$core$IFn$_invoke$arity$1(G__40041) : input_checker40035_40047.call(null,G__40041));
})();if(cljs.core.truth_(temp__4126__auto___40050))
{var error__839__auto___40051 = temp__4126__auto___40050;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40051], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40034_40046,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40049,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40051], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__40037;while(true){
var G__40042 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__40042);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40052 = (function (){var G__40043 = o__840__auto__;return (output_checker40036_40048.cljs$core$IFn$_invoke$arity$1 ? output_checker40036_40048.cljs$core$IFn$_invoke$arity$1(G__40043) : output_checker40036_40048.call(null,G__40043));
})();if(cljs.core.truth_(temp__4126__auto___40052))
{var error__839__auto___40053 = temp__4126__auto___40052;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40053], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40033_40045,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40053], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40044,output_schema40033_40045,input_schema40034_40046,input_checker40035_40047,output_checker40036_40048))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema40033_40045,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40034_40046], null)));
var ufv___40073 = schema.utils.use_fn_validation;var output_schema40054_40074 = om_bootstrap.types.Component;var input_schema40055_40075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker40056_40076 = schema.core.checker(input_schema40055_40075);var output_checker40057_40077 = schema.core.checker(output_schema40054_40074);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___40073,output_schema40054_40074,input_schema40055_40075,input_checker40056_40076,output_checker40057_40077){
return (function render_icon(G__40058){var validate__837__auto__ = ufv___40073.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40058], null);var temp__4126__auto___40079 = (function (){var G__40066 = args__838__auto___40078;return (input_checker40056_40076.cljs$core$IFn$_invoke$arity$1 ? input_checker40056_40076.cljs$core$IFn$_invoke$arity$1(G__40066) : input_checker40056_40076.call(null,G__40066));
})();if(cljs.core.truth_(temp__4126__auto___40079))
{var error__839__auto___40080 = temp__4126__auto___40079;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40080], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40055_40075,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40078,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40080], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40068 = G__40058;var map__40069 = G__40068;var map__40069__$1 = ((cljs.core.seq_QMARK_(map__40069))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40069):map__40069);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40069__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40069__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__40068__$1 = G__40068;while(true){
var map__40070 = G__40068__$1;var map__40070__$1 = ((cljs.core.seq_QMARK_(map__40070))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40070):map__40070);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40070__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40070__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__40071 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__40071);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40081 = (function (){var G__40072 = o__840__auto__;return (output_checker40057_40077.cljs$core$IFn$_invoke$arity$1 ? output_checker40057_40077.cljs$core$IFn$_invoke$arity$1(G__40072) : output_checker40057_40077.call(null,G__40072));
})();if(cljs.core.truth_(temp__4126__auto___40081))
{var error__839__auto___40082 = temp__4126__auto___40081;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40082], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40054_40074,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40082], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40073,output_schema40054_40074,input_schema40055_40075,input_checker40056_40076,output_checker40057_40077))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema40054_40074,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40055_40075], null)));
var ufv___40092 = schema.utils.use_fn_validation;var output_schema40083_40093 = schema.core.Any;var input_schema40084_40094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker40085_40095 = schema.core.checker(input_schema40084_40094);var output_checker40086_40096 = schema.core.checker(output_schema40083_40093);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___40092,output_schema40083_40093,input_schema40084_40094,input_checker40085_40095,output_checker40086_40096){
return (function render_help(G__40087){var validate__837__auto__ = ufv___40092.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40087], null);var temp__4126__auto___40098 = (function (){var G__40090 = args__838__auto___40097;return (input_checker40085_40095.cljs$core$IFn$_invoke$arity$1 ? input_checker40085_40095.cljs$core$IFn$_invoke$arity$1(G__40090) : input_checker40085_40095.call(null,G__40090));
})();if(cljs.core.truth_(temp__4126__auto___40098))
{var error__839__auto___40099 = temp__4126__auto___40098;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40099], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40084_40094,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40097,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40099], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__40087;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40100 = (function (){var G__40091 = o__840__auto__;return (output_checker40086_40096.cljs$core$IFn$_invoke$arity$1 ? output_checker40086_40096.cljs$core$IFn$_invoke$arity$1(G__40091) : output_checker40086_40096.call(null,G__40091));
})();if(cljs.core.truth_(temp__4126__auto___40100))
{var error__839__auto___40101 = temp__4126__auto___40100;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40101], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40083_40093,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40101], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40092,output_schema40083_40093,input_schema40084_40094,input_checker40085_40095,output_checker40086_40096))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema40083_40093,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40084_40094], null)));
var ufv___40120 = schema.utils.use_fn_validation;var output_schema40102_40121 = schema.core.Any;var input_schema40103_40122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker40104_40123 = schema.core.checker(input_schema40103_40122);var output_checker40105_40124 = schema.core.checker(output_schema40102_40121);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___40120,output_schema40102_40121,input_schema40103_40122,input_checker40104_40123,output_checker40105_40124){
return (function render_input_group(G__40106,G__40107){var validate__837__auto__ = ufv___40120.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40106,G__40107], null);var temp__4126__auto___40126 = (function (){var G__40114 = args__838__auto___40125;return (input_checker40104_40123.cljs$core$IFn$_invoke$arity$1 ? input_checker40104_40123.cljs$core$IFn$_invoke$arity$1(G__40114) : input_checker40104_40123.call(null,G__40114));
})();if(cljs.core.truth_(temp__4126__auto___40126))
{var error__839__auto___40127 = temp__4126__auto___40126;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40127], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40103_40122,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40125,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40127], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40116 = G__40106;var map__40117 = G__40116;var map__40117__$1 = ((cljs.core.seq_QMARK_(map__40117))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40117):map__40117);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__40107;var G__40116__$1 = G__40116;var items__$1 = items;while(true){
var map__40118 = G__40116__$1;var map__40118__$1 = ((cljs.core.seq_QMARK_(map__40118))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40118):map__40118);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19267__auto__ = addon_before__$1;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
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
{var temp__4126__auto___40128 = (function (){var G__40119 = o__840__auto__;return (output_checker40105_40124.cljs$core$IFn$_invoke$arity$1 ? output_checker40105_40124.cljs$core$IFn$_invoke$arity$1(G__40119) : output_checker40105_40124.call(null,G__40119));
})();if(cljs.core.truth_(temp__4126__auto___40128))
{var error__839__auto___40129 = temp__4126__auto___40128;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40129], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40102_40121,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40129], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40120,output_schema40102_40121,input_schema40103_40122,input_checker40104_40123,output_checker40105_40124))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema40102_40121,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40103_40122], null)));
var ufv___40147 = schema.utils.use_fn_validation;var output_schema40130_40148 = schema.core.Bool;var input_schema40131_40149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker40132_40150 = schema.core.checker(input_schema40131_40149);var output_checker40133_40151 = schema.core.checker(output_schema40130_40148);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___40147,output_schema40130_40148,input_schema40131_40149,input_checker40132_40150,output_checker40133_40151){
return (function checkbox_or_radio_QMARK_(G__40134){var validate__837__auto__ = ufv___40147.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40134], null);var temp__4126__auto___40153 = (function (){var G__40141 = args__838__auto___40152;return (input_checker40132_40150.cljs$core$IFn$_invoke$arity$1 ? input_checker40132_40150.cljs$core$IFn$_invoke$arity$1(G__40141) : input_checker40132_40150.call(null,G__40141));
})();if(cljs.core.truth_(temp__4126__auto___40153))
{var error__839__auto___40154 = temp__4126__auto___40153;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40154], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40131_40149,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40152,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40154], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40143 = G__40134;var map__40144 = G__40143;var map__40144__$1 = ((cljs.core.seq_QMARK_(map__40144))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40144):map__40144);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40144__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__40143__$1 = G__40143;while(true){
var map__40145 = G__40143__$1;var map__40145__$1 = ((cljs.core.seq_QMARK_(map__40145))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40145):map__40145);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40145__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40155 = (function (){var G__40146 = o__840__auto__;return (output_checker40133_40151.cljs$core$IFn$_invoke$arity$1 ? output_checker40133_40151.cljs$core$IFn$_invoke$arity$1(G__40146) : output_checker40133_40151.call(null,G__40146));
})();if(cljs.core.truth_(temp__4126__auto___40155))
{var error__839__auto___40156 = temp__4126__auto___40155;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40156], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40130_40148,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40156], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40147,output_schema40130_40148,input_schema40131_40149,input_checker40132_40150,output_checker40133_40151))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema40130_40148,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40131_40149], null)));
var ufv___40175 = schema.utils.use_fn_validation;var output_schema40157_40176 = om_bootstrap.types.Component;var input_schema40158_40177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40159_40178 = schema.core.checker(input_schema40158_40177);var output_checker40160_40179 = schema.core.checker(output_schema40157_40176);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___40175,output_schema40157_40176,input_schema40158_40177,input_checker40159_40178,output_checker40160_40179){
return (function checkbox_or_radio_wrapper(G__40161,G__40162){var validate__837__auto__ = ufv___40175.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40161,G__40162], null);var temp__4126__auto___40181 = (function (){var G__40169 = args__838__auto___40180;return (input_checker40159_40178.cljs$core$IFn$_invoke$arity$1 ? input_checker40159_40178.cljs$core$IFn$_invoke$arity$1(G__40169) : input_checker40159_40178.call(null,G__40169));
})();if(cljs.core.truth_(temp__4126__auto___40181))
{var error__839__auto___40182 = temp__4126__auto___40181;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40182], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40158_40177,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40180,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40182], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40171 = G__40161;var map__40172 = G__40171;var map__40172__$1 = ((cljs.core.seq_QMARK_(map__40172))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40172):map__40172);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40172__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__40162;var G__40171__$1 = G__40171;var children__$1 = children;while(true){
var map__40173 = G__40171__$1;var map__40173__$1 = ((cljs.core.seq_QMARK_(map__40173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40173):map__40173);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40173__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40183 = (function (){var G__40174 = o__840__auto__;return (output_checker40160_40179.cljs$core$IFn$_invoke$arity$1 ? output_checker40160_40179.cljs$core$IFn$_invoke$arity$1(G__40174) : output_checker40160_40179.call(null,G__40174));
})();if(cljs.core.truth_(temp__4126__auto___40183))
{var error__839__auto___40184 = temp__4126__auto___40183;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40184], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40157_40176,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40184], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40175,output_schema40157_40176,input_schema40158_40177,input_checker40159_40178,output_checker40160_40179))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema40157_40176,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40158_40177], null)));
var ufv___40213 = schema.utils.use_fn_validation;var output_schema40185_40214 = schema.core.Any;var input_schema40186_40215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema40190_40216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker40187_40217 = schema.core.checker(input_schema40186_40215);var output_checker40188_40218 = schema.core.checker(output_schema40185_40214);var input_checker40191_40219 = schema.core.checker(input_schema40190_40216);var output_checker40192_40220 = schema.core.checker(output_schema40185_40214);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___40213,output_schema40185_40214,input_schema40186_40215,input_schema40190_40216,input_checker40187_40217,output_checker40188_40218,input_checker40191_40219,output_checker40192_40220){
return (function() {
var render_label = null;
var render_label__1 = (function (G__40189){var validate__837__auto__ = ufv___40213.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40189], null);var temp__4126__auto___40222 = (function (){var G__40205 = args__838__auto___40221;return (input_checker40187_40217.cljs$core$IFn$_invoke$arity$1 ? input_checker40187_40217.cljs$core$IFn$_invoke$arity$1(G__40205) : input_checker40187_40217.call(null,G__40205));
})();if(cljs.core.truth_(temp__4126__auto___40222))
{var error__839__auto___40223 = temp__4126__auto___40222;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40223], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40186_40215,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40221,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40223], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__40189;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40224 = (function (){var G__40206 = o__840__auto__;return (output_checker40188_40218.cljs$core$IFn$_invoke$arity$1 ? output_checker40188_40218.cljs$core$IFn$_invoke$arity$1(G__40206) : output_checker40188_40218.call(null,G__40206));
})();if(cljs.core.truth_(temp__4126__auto___40224))
{var error__839__auto___40225 = temp__4126__auto___40224;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40225], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40185_40214,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40225], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__40193,G__40194){var validate__837__auto__ = ufv___40213.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40193,G__40194], null);var temp__4126__auto___40227 = (function (){var G__40207 = args__838__auto___40226;return (input_checker40191_40219.cljs$core$IFn$_invoke$arity$1 ? input_checker40191_40219.cljs$core$IFn$_invoke$arity$1(G__40207) : input_checker40191_40219.call(null,G__40207));
})();if(cljs.core.truth_(temp__4126__auto___40227))
{var error__839__auto___40228 = temp__4126__auto___40227;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40228], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40190_40216,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40226,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40228], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40209 = G__40193;var map__40210 = G__40209;var map__40210__$1 = ((cljs.core.seq_QMARK_(map__40210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40210):map__40210);var input = map__40210__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40210__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40210__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__40194;var G__40209__$1 = G__40209;var child__$1 = child;while(true){
var map__40211 = G__40209__$1;var map__40211__$1 = ((cljs.core.seq_QMARK_(map__40211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40211):map__40211);var input__$1 = map__40211__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40211__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40211__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40229 = (function (){var G__40212 = o__840__auto__;return (output_checker40192_40220.cljs$core$IFn$_invoke$arity$1 ? output_checker40192_40220.cljs$core$IFn$_invoke$arity$1(G__40212) : output_checker40192_40220.call(null,G__40212));
})();if(cljs.core.truth_(temp__4126__auto___40229))
{var error__839__auto___40230 = temp__4126__auto___40229;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40230], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40185_40214,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40230], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__40193,G__40194){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__40193);
case 2:
return render_label__2.call(this,G__40193,G__40194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___40213,output_schema40185_40214,input_schema40186_40215,input_schema40190_40216,input_checker40187_40217,output_checker40188_40218,input_checker40191_40219,output_checker40192_40220))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema40185_40214,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40186_40215,input_schema40190_40216], null)));
var ufv___40249 = schema.utils.use_fn_validation;var output_schema40231_40250 = schema.core.Any;var input_schema40232_40251 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker40233_40252 = schema.core.checker(input_schema40232_40251);var output_checker40234_40253 = schema.core.checker(output_schema40231_40250);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___40249,output_schema40231_40250,input_schema40232_40251,input_checker40233_40252,output_checker40234_40253){
return (function render_wrapper(G__40235,G__40236){var validate__837__auto__ = ufv___40249.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40235,G__40236], null);var temp__4126__auto___40255 = (function (){var G__40243 = args__838__auto___40254;return (input_checker40233_40252.cljs$core$IFn$_invoke$arity$1 ? input_checker40233_40252.cljs$core$IFn$_invoke$arity$1(G__40243) : input_checker40233_40252.call(null,G__40243));
})();if(cljs.core.truth_(temp__4126__auto___40255))
{var error__839__auto___40256 = temp__4126__auto___40255;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40256], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40232_40251,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40254,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40256], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40245 = G__40235;var map__40246 = G__40245;var map__40246__$1 = ((cljs.core.seq_QMARK_(map__40246))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40246):map__40246);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40246__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__40236;var G__40245__$1 = G__40245;var child__$1 = child;while(true){
var map__40247 = G__40245__$1;var map__40247__$1 = ((cljs.core.seq_QMARK_(map__40247))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40247):map__40247);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40247__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40257 = (function (){var G__40248 = o__840__auto__;return (output_checker40234_40253.cljs$core$IFn$_invoke$arity$1 ? output_checker40234_40253.cljs$core$IFn$_invoke$arity$1(G__40248) : output_checker40234_40253.call(null,G__40248));
})();if(cljs.core.truth_(temp__4126__auto___40257))
{var error__839__auto___40258 = temp__4126__auto___40257;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40258], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40231_40250,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40258], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40249,output_schema40231_40250,input_schema40232_40251,input_checker40233_40252,output_checker40234_40253))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema40231_40250,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40232_40251], null)));
var ufv___40277 = schema.utils.use_fn_validation;var output_schema40259_40278 = om_bootstrap.types.Component;var input_schema40260_40279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40261_40280 = schema.core.checker(input_schema40260_40279);var output_checker40262_40281 = schema.core.checker(output_schema40259_40278);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___40277,output_schema40259_40278,input_schema40260_40279,input_checker40261_40280,output_checker40262_40281){
return (function render_form_group(G__40263,G__40264){var validate__837__auto__ = ufv___40277.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40263,G__40264], null);var temp__4126__auto___40283 = (function (){var G__40271 = args__838__auto___40282;return (input_checker40261_40280.cljs$core$IFn$_invoke$arity$1 ? input_checker40261_40280.cljs$core$IFn$_invoke$arity$1(G__40271) : input_checker40261_40280.call(null,G__40271));
})();if(cljs.core.truth_(temp__4126__auto___40283))
{var error__839__auto___40284 = temp__4126__auto___40283;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40284], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40260_40279,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40282,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40284], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40273 = G__40263;var map__40274 = G__40273;var map__40274__$1 = ((cljs.core.seq_QMARK_(map__40274))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40274):map__40274);var input = map__40274__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40274__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40274__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__40264;var G__40273__$1 = G__40273;var children__$1 = children;while(true){
var map__40275 = G__40273__$1;var map__40275__$1 = ((cljs.core.seq_QMARK_(map__40275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40275):map__40275);var input__$1 = map__40275__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40275__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40275__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40285 = (function (){var G__40276 = o__840__auto__;return (output_checker40262_40281.cljs$core$IFn$_invoke$arity$1 ? output_checker40262_40281.cljs$core$IFn$_invoke$arity$1(G__40276) : output_checker40262_40281.call(null,G__40276));
})();if(cljs.core.truth_(temp__4126__auto___40285))
{var error__839__auto___40286 = temp__4126__auto___40285;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40286], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40259_40278,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40286], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40277,output_schema40259_40278,input_schema40260_40279,input_checker40261_40280,output_checker40262_40281))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema40259_40278,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40260_40279], null)));
var ufv___40300 = schema.utils.use_fn_validation;var output_schema40287_40301 = om_bootstrap.types.Component;var input_schema40288_40302 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40289_40303 = schema.core.checker(input_schema40288_40302);var output_checker40290_40304 = schema.core.checker(output_schema40287_40301);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___40300,output_schema40287_40301,input_schema40288_40302,input_checker40289_40303,output_checker40290_40304){
return (function render_input(G__40291,G__40292,G__40293){var validate__837__auto__ = ufv___40300.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40305 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40291,G__40292,G__40293], null);var temp__4126__auto___40306 = (function (){var G__40297 = args__838__auto___40305;return (input_checker40289_40303.cljs$core$IFn$_invoke$arity$1 ? input_checker40289_40303.cljs$core$IFn$_invoke$arity$1(G__40297) : input_checker40289_40303.call(null,G__40297));
})();if(cljs.core.truth_(temp__4126__auto___40306))
{var error__839__auto___40307 = temp__4126__auto___40306;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40307], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40288_40302,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40305,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40307], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__40291;var attrs = G__40292;var children = G__40293;while(true){
var props = ((function (validate__837__auto__,ufv___40300,output_schema40287_40301,input_schema40288_40302,input_checker40289_40303,output_checker40290_40304){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___40300,output_schema40287_40301,input_schema40288_40302,input_checker40289_40303,output_checker40290_40304))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__40298 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__40298) {
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
{var temp__4126__auto___40309 = (function (){var G__40299 = o__840__auto__;return (output_checker40290_40304.cljs$core$IFn$_invoke$arity$1 ? output_checker40290_40304.cljs$core$IFn$_invoke$arity$1(G__40299) : output_checker40290_40304.call(null,G__40299));
})();if(cljs.core.truth_(temp__4126__auto___40309))
{var error__839__auto___40310 = temp__4126__auto___40309;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40310], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40287_40301,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40310], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40300,output_schema40287_40301,input_schema40288_40302,input_checker40289_40303,output_checker40290_40304))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema40287_40301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40288_40302], null)));
var ufv___40323 = schema.utils.use_fn_validation;var output_schema40311_40324 = om_bootstrap.types.Component;var input_schema40312_40325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker40313_40326 = schema.core.checker(input_schema40312_40325);var output_checker40314_40327 = schema.core.checker(output_schema40311_40324);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___40323,output_schema40311_40324,input_schema40312_40325,input_checker40313_40326,output_checker40314_40327){
return (function() { 
var input__delegate = function (G__40315,rest40316){var validate__837__auto__ = ufv___40323.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40328 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__40315,rest40316);var temp__4126__auto___40329 = (function (){var G__40320 = args__838__auto___40328;return (input_checker40313_40326.cljs$core$IFn$_invoke$arity$1 ? input_checker40313_40326.cljs$core$IFn$_invoke$arity$1(G__40320) : input_checker40313_40326.call(null,G__40320));
})();if(cljs.core.truth_(temp__4126__auto___40329))
{var error__839__auto___40330 = temp__4126__auto___40329;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40330], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40312_40325,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40328,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40330], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__40315;var children = rest40316;while(true){
var vec__40321 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40321,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40321,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40331 = (function (){var G__40322 = o__840__auto__;return (output_checker40314_40327.cljs$core$IFn$_invoke$arity$1 ? output_checker40314_40327.cljs$core$IFn$_invoke$arity$1(G__40322) : output_checker40314_40327.call(null,G__40322));
})();if(cljs.core.truth_(temp__4126__auto___40331))
{var error__839__auto___40332 = temp__4126__auto___40331;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40332], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40311_40324,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40332], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__40315,var_args){
var rest40316 = null;if (arguments.length > 1) {
  rest40316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__40315,rest40316);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__40333){
var G__40315 = cljs.core.first(arglist__40333);
var rest40316 = cljs.core.rest(arglist__40333);
return input__delegate(G__40315,rest40316);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___40323,output_schema40311_40324,input_schema40312_40325,input_checker40313_40326,output_checker40314_40327))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema40311_40324,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40312_40325], null)));
var ufv___40347 = schema.utils.use_fn_validation;var output_schema40334_40348 = om_bootstrap.types.Component;var input_schema40335_40349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker40336_40350 = schema.core.checker(input_schema40335_40349);var output_checker40337_40351 = schema.core.checker(output_schema40334_40348);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___40347,output_schema40334_40348,input_schema40335_40349,input_checker40336_40350,output_checker40337_40351){
return (function radio_option(G__40338){var validate__837__auto__ = ufv___40347.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40338], null);var temp__4126__auto___40353 = (function (){var G__40343 = args__838__auto___40352;return (input_checker40336_40350.cljs$core$IFn$_invoke$arity$1 ? input_checker40336_40350.cljs$core$IFn$_invoke$arity$1(G__40343) : input_checker40336_40350.call(null,G__40343));
})();if(cljs.core.truth_(temp__4126__auto___40353))
{var error__839__auto___40354 = temp__4126__auto___40353;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40354], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40335_40349,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40352,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40354], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__40338;while(true){
var vec__40344 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40344,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40344,(1),null);var map__40345 = bs;var map__40345__$1 = ((cljs.core.seq_QMARK_(map__40345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40345):map__40345);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40345__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40345__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40345__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40355 = (function (){var G__40346 = o__840__auto__;return (output_checker40337_40351.cljs$core$IFn$_invoke$arity$1 ? output_checker40337_40351.cljs$core$IFn$_invoke$arity$1(G__40346) : output_checker40337_40351.call(null,G__40346));
})();if(cljs.core.truth_(temp__4126__auto___40355))
{var error__839__auto___40356 = temp__4126__auto___40355;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40356], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40334_40348,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40356], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40347,output_schema40334_40348,input_schema40335_40349,input_checker40336_40350,output_checker40337_40351))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema40334_40348,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40335_40349], null)));
var ufv___40387 = schema.utils.use_fn_validation;var output_schema40357_40388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema40358_40389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker40359_40390 = schema.core.checker(input_schema40358_40389);var output_checker40360_40391 = schema.core.checker(output_schema40357_40388);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___40387,output_schema40357_40388,input_schema40358_40389,input_checker40359_40390,output_checker40360_40391){
return (function options(G__40361,G__40362){var validate__837__auto__ = ufv___40387.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40361,G__40362], null);var temp__4126__auto___40393 = (function (){var G__40375 = args__838__auto___40392;return (input_checker40359_40390.cljs$core$IFn$_invoke$arity$1 ? input_checker40359_40390.cljs$core$IFn$_invoke$arity$1(G__40375) : input_checker40359_40390.call(null,G__40375));
})();if(cljs.core.truth_(temp__4126__auto___40393))
{var error__839__auto___40394 = temp__4126__auto___40393;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40394], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40358_40389,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40392,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40394], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__40361;var opts = G__40362;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__20662__auto__ = ((function (validate__837__auto__,ufv___40387,output_schema40357_40388,input_schema40358_40389,input_checker40359_40390,output_checker40360_40391){
return (function iter__40376(s__40377){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___40387,output_schema40357_40388,input_schema40358_40389,input_checker40359_40390,output_checker40360_40391){
return (function (){var s__40377__$1 = s__40377;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40377__$1);if(temp__4126__auto__)
{var s__40377__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40377__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__40377__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__40379 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__40378 = (0);while(true){
if((i__40378 < size__20661__auto__))
{var vec__40384 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__40378);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40384,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40384,(1),null);cljs.core.chunk_append(b__40379,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__40395 = (i__40378 + (1));
i__40378 = G__40395;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40379),iter__40376(cljs.core.chunk_rest(s__40377__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40379),null);
}
} else
{var vec__40385 = cljs.core.first(s__40377__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40385,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40385,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__40376(cljs.core.rest(s__40377__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___40387,output_schema40357_40388,input_schema40358_40389,input_checker40359_40390,output_checker40360_40391))
,null,null));
});})(validate__837__auto__,ufv___40387,output_schema40357_40388,input_schema40358_40389,input_checker40359_40390,output_checker40360_40391))
;return iter__20662__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40396 = (function (){var G__40386 = o__840__auto__;return (output_checker40360_40391.cljs$core$IFn$_invoke$arity$1 ? output_checker40360_40391.cljs$core$IFn$_invoke$arity$1(G__40386) : output_checker40360_40391.call(null,G__40386));
})();if(cljs.core.truth_(temp__4126__auto___40396))
{var error__839__auto___40397 = temp__4126__auto___40396;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40397], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40357_40388,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40397], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40387,output_schema40357_40388,input_schema40358_40389,input_checker40359_40390,output_checker40360_40391))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema40357_40388,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40358_40389], null)));
//# sourceMappingURL=input.js.map