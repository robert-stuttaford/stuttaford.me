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
var ufv___39953 = schema.utils.use_fn_validation;var output_schema39940_39954 = schema.core.Str;var input_schema39941_39955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker39942_39956 = schema.core.checker(input_schema39941_39955);var output_checker39943_39957 = schema.core.checker(output_schema39940_39954);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___39953,output_schema39940_39954,input_schema39941_39955,input_checker39942_39956,output_checker39943_39957){
return (function class_set(G__39944){var validate__837__auto__ = ufv___39953.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39944], null);var temp__4126__auto___39959 = (function (){var G__39949 = args__838__auto___39958;return (input_checker39942_39956.cljs$core$IFn$_invoke$arity$1 ? input_checker39942_39956.cljs$core$IFn$_invoke$arity$1(G__39949) : input_checker39942_39956.call(null,G__39949));
})();if(cljs.core.truth_(temp__4126__auto___39959))
{var error__839__auto___39960 = temp__4126__auto___39959;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39960], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39941_39955,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39958,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39960], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__39944;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___39953,output_schema39940_39954,input_schema39941_39955,input_checker39942_39956,output_checker39943_39957){
return (function (p__39950){var vec__39951 = p__39950;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39951,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39951,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___39953,output_schema39940_39954,input_schema39941_39955,input_checker39942_39956,output_checker39943_39957))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39961 = (function (){var G__39952 = o__840__auto__;return (output_checker39943_39957.cljs$core$IFn$_invoke$arity$1 ? output_checker39943_39957.cljs$core$IFn$_invoke$arity$1(G__39952) : output_checker39943_39957.call(null,G__39952));
})();if(cljs.core.truth_(temp__4126__auto___39961))
{var error__839__auto___39962 = temp__4126__auto___39961;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39962], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39940_39954,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39962], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39953,output_schema39940_39954,input_schema39941_39955,input_checker39942_39956,output_checker39943_39957))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema39940_39954,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39941_39955], null)));
var ufv___39974 = schema.utils.use_fn_validation;var output_schema39963_39975 = om_bootstrap.types.Component;var input_schema39964_39976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker39965_39977 = schema.core.checker(input_schema39964_39976);var output_checker39966_39978 = schema.core.checker(output_schema39963_39975);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___39974,output_schema39963_39975,input_schema39964_39976,input_checker39965_39977,output_checker39966_39978){
return (function glyph(G__39967){var validate__837__auto__ = ufv___39974.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39967], null);var temp__4126__auto___39980 = (function (){var G__39971 = args__838__auto___39979;return (input_checker39965_39977.cljs$core$IFn$_invoke$arity$1 ? input_checker39965_39977.cljs$core$IFn$_invoke$arity$1(G__39971) : input_checker39965_39977.call(null,G__39971));
})();if(cljs.core.truth_(temp__4126__auto___39980))
{var error__839__auto___39981 = temp__4126__auto___39980;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39981], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39964_39976,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39979,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39981], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__39967;while(true){
var G__39972 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__39972);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39982 = (function (){var G__39973 = o__840__auto__;return (output_checker39966_39978.cljs$core$IFn$_invoke$arity$1 ? output_checker39966_39978.cljs$core$IFn$_invoke$arity$1(G__39973) : output_checker39966_39978.call(null,G__39973));
})();if(cljs.core.truth_(temp__4126__auto___39982))
{var error__839__auto___39983 = temp__4126__auto___39982;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39983], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39963_39975,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39983], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39974,output_schema39963_39975,input_schema39964_39976,input_checker39965_39977,output_checker39966_39978))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema39963_39975,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39964_39976], null)));
var ufv___40003 = schema.utils.use_fn_validation;var output_schema39984_40004 = om_bootstrap.types.Component;var input_schema39985_40005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker39986_40006 = schema.core.checker(input_schema39985_40005);var output_checker39987_40007 = schema.core.checker(output_schema39984_40004);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___40003,output_schema39984_40004,input_schema39985_40005,input_checker39986_40006,output_checker39987_40007){
return (function render_icon(G__39988){var validate__837__auto__ = ufv___40003.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39988], null);var temp__4126__auto___40009 = (function (){var G__39996 = args__838__auto___40008;return (input_checker39986_40006.cljs$core$IFn$_invoke$arity$1 ? input_checker39986_40006.cljs$core$IFn$_invoke$arity$1(G__39996) : input_checker39986_40006.call(null,G__39996));
})();if(cljs.core.truth_(temp__4126__auto___40009))
{var error__839__auto___40010 = temp__4126__auto___40009;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40010], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39985_40005,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40008,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40010], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39998 = G__39988;var map__39999 = G__39998;var map__39999__$1 = ((cljs.core.seq_QMARK_(map__39999))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39999):map__39999);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__39998__$1 = G__39998;while(true){
var map__40000 = G__39998__$1;var map__40000__$1 = ((cljs.core.seq_QMARK_(map__40000))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40000):map__40000);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40000__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40000__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__40001 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__40001);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40011 = (function (){var G__40002 = o__840__auto__;return (output_checker39987_40007.cljs$core$IFn$_invoke$arity$1 ? output_checker39987_40007.cljs$core$IFn$_invoke$arity$1(G__40002) : output_checker39987_40007.call(null,G__40002));
})();if(cljs.core.truth_(temp__4126__auto___40011))
{var error__839__auto___40012 = temp__4126__auto___40011;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40012], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39984_40004,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40012], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40003,output_schema39984_40004,input_schema39985_40005,input_checker39986_40006,output_checker39987_40007))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema39984_40004,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39985_40005], null)));
var ufv___40022 = schema.utils.use_fn_validation;var output_schema40013_40023 = schema.core.Any;var input_schema40014_40024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker40015_40025 = schema.core.checker(input_schema40014_40024);var output_checker40016_40026 = schema.core.checker(output_schema40013_40023);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___40022,output_schema40013_40023,input_schema40014_40024,input_checker40015_40025,output_checker40016_40026){
return (function render_help(G__40017){var validate__837__auto__ = ufv___40022.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40017], null);var temp__4126__auto___40028 = (function (){var G__40020 = args__838__auto___40027;return (input_checker40015_40025.cljs$core$IFn$_invoke$arity$1 ? input_checker40015_40025.cljs$core$IFn$_invoke$arity$1(G__40020) : input_checker40015_40025.call(null,G__40020));
})();if(cljs.core.truth_(temp__4126__auto___40028))
{var error__839__auto___40029 = temp__4126__auto___40028;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40029], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40014_40024,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40027,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40029], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__40017;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40030 = (function (){var G__40021 = o__840__auto__;return (output_checker40016_40026.cljs$core$IFn$_invoke$arity$1 ? output_checker40016_40026.cljs$core$IFn$_invoke$arity$1(G__40021) : output_checker40016_40026.call(null,G__40021));
})();if(cljs.core.truth_(temp__4126__auto___40030))
{var error__839__auto___40031 = temp__4126__auto___40030;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40031], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40013_40023,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40031], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40022,output_schema40013_40023,input_schema40014_40024,input_checker40015_40025,output_checker40016_40026))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema40013_40023,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40014_40024], null)));
var ufv___40050 = schema.utils.use_fn_validation;var output_schema40032_40051 = schema.core.Any;var input_schema40033_40052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker40034_40053 = schema.core.checker(input_schema40033_40052);var output_checker40035_40054 = schema.core.checker(output_schema40032_40051);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___40050,output_schema40032_40051,input_schema40033_40052,input_checker40034_40053,output_checker40035_40054){
return (function render_input_group(G__40036,G__40037){var validate__837__auto__ = ufv___40050.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40036,G__40037], null);var temp__4126__auto___40056 = (function (){var G__40044 = args__838__auto___40055;return (input_checker40034_40053.cljs$core$IFn$_invoke$arity$1 ? input_checker40034_40053.cljs$core$IFn$_invoke$arity$1(G__40044) : input_checker40034_40053.call(null,G__40044));
})();if(cljs.core.truth_(temp__4126__auto___40056))
{var error__839__auto___40057 = temp__4126__auto___40056;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40057], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40033_40052,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40055,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40057], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40046 = G__40036;var map__40047 = G__40046;var map__40047__$1 = ((cljs.core.seq_QMARK_(map__40047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40047):map__40047);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40047__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40047__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__40037;var G__40046__$1 = G__40046;var items__$1 = items;while(true){
var map__40048 = G__40046__$1;var map__40048__$1 = ((cljs.core.seq_QMARK_(map__40048))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40048):map__40048);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40048__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40048__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19357__auto__ = addon_before__$1;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
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
{var temp__4126__auto___40058 = (function (){var G__40049 = o__840__auto__;return (output_checker40035_40054.cljs$core$IFn$_invoke$arity$1 ? output_checker40035_40054.cljs$core$IFn$_invoke$arity$1(G__40049) : output_checker40035_40054.call(null,G__40049));
})();if(cljs.core.truth_(temp__4126__auto___40058))
{var error__839__auto___40059 = temp__4126__auto___40058;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40059], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40032_40051,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40059], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40050,output_schema40032_40051,input_schema40033_40052,input_checker40034_40053,output_checker40035_40054))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema40032_40051,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40033_40052], null)));
var ufv___40077 = schema.utils.use_fn_validation;var output_schema40060_40078 = schema.core.Bool;var input_schema40061_40079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker40062_40080 = schema.core.checker(input_schema40061_40079);var output_checker40063_40081 = schema.core.checker(output_schema40060_40078);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___40077,output_schema40060_40078,input_schema40061_40079,input_checker40062_40080,output_checker40063_40081){
return (function checkbox_or_radio_QMARK_(G__40064){var validate__837__auto__ = ufv___40077.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40064], null);var temp__4126__auto___40083 = (function (){var G__40071 = args__838__auto___40082;return (input_checker40062_40080.cljs$core$IFn$_invoke$arity$1 ? input_checker40062_40080.cljs$core$IFn$_invoke$arity$1(G__40071) : input_checker40062_40080.call(null,G__40071));
})();if(cljs.core.truth_(temp__4126__auto___40083))
{var error__839__auto___40084 = temp__4126__auto___40083;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40084], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40061_40079,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40082,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40084], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40073 = G__40064;var map__40074 = G__40073;var map__40074__$1 = ((cljs.core.seq_QMARK_(map__40074))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40074):map__40074);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40074__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__40073__$1 = G__40073;while(true){
var map__40075 = G__40073__$1;var map__40075__$1 = ((cljs.core.seq_QMARK_(map__40075))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40075):map__40075);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40075__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40085 = (function (){var G__40076 = o__840__auto__;return (output_checker40063_40081.cljs$core$IFn$_invoke$arity$1 ? output_checker40063_40081.cljs$core$IFn$_invoke$arity$1(G__40076) : output_checker40063_40081.call(null,G__40076));
})();if(cljs.core.truth_(temp__4126__auto___40085))
{var error__839__auto___40086 = temp__4126__auto___40085;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40086], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40060_40078,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40086], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40077,output_schema40060_40078,input_schema40061_40079,input_checker40062_40080,output_checker40063_40081))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema40060_40078,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40061_40079], null)));
var ufv___40105 = schema.utils.use_fn_validation;var output_schema40087_40106 = om_bootstrap.types.Component;var input_schema40088_40107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40089_40108 = schema.core.checker(input_schema40088_40107);var output_checker40090_40109 = schema.core.checker(output_schema40087_40106);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___40105,output_schema40087_40106,input_schema40088_40107,input_checker40089_40108,output_checker40090_40109){
return (function checkbox_or_radio_wrapper(G__40091,G__40092){var validate__837__auto__ = ufv___40105.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40091,G__40092], null);var temp__4126__auto___40111 = (function (){var G__40099 = args__838__auto___40110;return (input_checker40089_40108.cljs$core$IFn$_invoke$arity$1 ? input_checker40089_40108.cljs$core$IFn$_invoke$arity$1(G__40099) : input_checker40089_40108.call(null,G__40099));
})();if(cljs.core.truth_(temp__4126__auto___40111))
{var error__839__auto___40112 = temp__4126__auto___40111;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40112], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40088_40107,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40110,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40112], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40101 = G__40091;var map__40102 = G__40101;var map__40102__$1 = ((cljs.core.seq_QMARK_(map__40102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40102):map__40102);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40102__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__40092;var G__40101__$1 = G__40101;var children__$1 = children;while(true){
var map__40103 = G__40101__$1;var map__40103__$1 = ((cljs.core.seq_QMARK_(map__40103))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40103):map__40103);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40103__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40113 = (function (){var G__40104 = o__840__auto__;return (output_checker40090_40109.cljs$core$IFn$_invoke$arity$1 ? output_checker40090_40109.cljs$core$IFn$_invoke$arity$1(G__40104) : output_checker40090_40109.call(null,G__40104));
})();if(cljs.core.truth_(temp__4126__auto___40113))
{var error__839__auto___40114 = temp__4126__auto___40113;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40114], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40087_40106,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40114], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40105,output_schema40087_40106,input_schema40088_40107,input_checker40089_40108,output_checker40090_40109))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema40087_40106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40088_40107], null)));
var ufv___40143 = schema.utils.use_fn_validation;var output_schema40115_40144 = schema.core.Any;var input_schema40116_40145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema40120_40146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker40117_40147 = schema.core.checker(input_schema40116_40145);var output_checker40118_40148 = schema.core.checker(output_schema40115_40144);var input_checker40121_40149 = schema.core.checker(input_schema40120_40146);var output_checker40122_40150 = schema.core.checker(output_schema40115_40144);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___40143,output_schema40115_40144,input_schema40116_40145,input_schema40120_40146,input_checker40117_40147,output_checker40118_40148,input_checker40121_40149,output_checker40122_40150){
return (function() {
var render_label = null;
var render_label__1 = (function (G__40119){var validate__837__auto__ = ufv___40143.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40151 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40119], null);var temp__4126__auto___40152 = (function (){var G__40135 = args__838__auto___40151;return (input_checker40117_40147.cljs$core$IFn$_invoke$arity$1 ? input_checker40117_40147.cljs$core$IFn$_invoke$arity$1(G__40135) : input_checker40117_40147.call(null,G__40135));
})();if(cljs.core.truth_(temp__4126__auto___40152))
{var error__839__auto___40153 = temp__4126__auto___40152;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40153], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40116_40145,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40151,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40153], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__40119;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40154 = (function (){var G__40136 = o__840__auto__;return (output_checker40118_40148.cljs$core$IFn$_invoke$arity$1 ? output_checker40118_40148.cljs$core$IFn$_invoke$arity$1(G__40136) : output_checker40118_40148.call(null,G__40136));
})();if(cljs.core.truth_(temp__4126__auto___40154))
{var error__839__auto___40155 = temp__4126__auto___40154;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40155], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40115_40144,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40155], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__40123,G__40124){var validate__837__auto__ = ufv___40143.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40123,G__40124], null);var temp__4126__auto___40157 = (function (){var G__40137 = args__838__auto___40156;return (input_checker40121_40149.cljs$core$IFn$_invoke$arity$1 ? input_checker40121_40149.cljs$core$IFn$_invoke$arity$1(G__40137) : input_checker40121_40149.call(null,G__40137));
})();if(cljs.core.truth_(temp__4126__auto___40157))
{var error__839__auto___40158 = temp__4126__auto___40157;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40158], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40120_40146,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40156,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40158], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40139 = G__40123;var map__40140 = G__40139;var map__40140__$1 = ((cljs.core.seq_QMARK_(map__40140))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40140):map__40140);var input = map__40140__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40140__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40140__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__40124;var G__40139__$1 = G__40139;var child__$1 = child;while(true){
var map__40141 = G__40139__$1;var map__40141__$1 = ((cljs.core.seq_QMARK_(map__40141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40141):map__40141);var input__$1 = map__40141__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40141__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40141__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40159 = (function (){var G__40142 = o__840__auto__;return (output_checker40122_40150.cljs$core$IFn$_invoke$arity$1 ? output_checker40122_40150.cljs$core$IFn$_invoke$arity$1(G__40142) : output_checker40122_40150.call(null,G__40142));
})();if(cljs.core.truth_(temp__4126__auto___40159))
{var error__839__auto___40160 = temp__4126__auto___40159;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40160], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40115_40144,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40160], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__40123,G__40124){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__40123);
case 2:
return render_label__2.call(this,G__40123,G__40124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___40143,output_schema40115_40144,input_schema40116_40145,input_schema40120_40146,input_checker40117_40147,output_checker40118_40148,input_checker40121_40149,output_checker40122_40150))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema40115_40144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40116_40145,input_schema40120_40146], null)));
var ufv___40179 = schema.utils.use_fn_validation;var output_schema40161_40180 = schema.core.Any;var input_schema40162_40181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker40163_40182 = schema.core.checker(input_schema40162_40181);var output_checker40164_40183 = schema.core.checker(output_schema40161_40180);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___40179,output_schema40161_40180,input_schema40162_40181,input_checker40163_40182,output_checker40164_40183){
return (function render_wrapper(G__40165,G__40166){var validate__837__auto__ = ufv___40179.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40165,G__40166], null);var temp__4126__auto___40185 = (function (){var G__40173 = args__838__auto___40184;return (input_checker40163_40182.cljs$core$IFn$_invoke$arity$1 ? input_checker40163_40182.cljs$core$IFn$_invoke$arity$1(G__40173) : input_checker40163_40182.call(null,G__40173));
})();if(cljs.core.truth_(temp__4126__auto___40185))
{var error__839__auto___40186 = temp__4126__auto___40185;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40186], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40162_40181,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40184,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40186], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40175 = G__40165;var map__40176 = G__40175;var map__40176__$1 = ((cljs.core.seq_QMARK_(map__40176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40176):map__40176);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40176__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__40166;var G__40175__$1 = G__40175;var child__$1 = child;while(true){
var map__40177 = G__40175__$1;var map__40177__$1 = ((cljs.core.seq_QMARK_(map__40177))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40177):map__40177);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40177__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40187 = (function (){var G__40178 = o__840__auto__;return (output_checker40164_40183.cljs$core$IFn$_invoke$arity$1 ? output_checker40164_40183.cljs$core$IFn$_invoke$arity$1(G__40178) : output_checker40164_40183.call(null,G__40178));
})();if(cljs.core.truth_(temp__4126__auto___40187))
{var error__839__auto___40188 = temp__4126__auto___40187;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40188], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40161_40180,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40188], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40179,output_schema40161_40180,input_schema40162_40181,input_checker40163_40182,output_checker40164_40183))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema40161_40180,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40162_40181], null)));
var ufv___40207 = schema.utils.use_fn_validation;var output_schema40189_40208 = om_bootstrap.types.Component;var input_schema40190_40209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40191_40210 = schema.core.checker(input_schema40190_40209);var output_checker40192_40211 = schema.core.checker(output_schema40189_40208);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___40207,output_schema40189_40208,input_schema40190_40209,input_checker40191_40210,output_checker40192_40211){
return (function render_form_group(G__40193,G__40194){var validate__837__auto__ = ufv___40207.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40193,G__40194], null);var temp__4126__auto___40213 = (function (){var G__40201 = args__838__auto___40212;return (input_checker40191_40210.cljs$core$IFn$_invoke$arity$1 ? input_checker40191_40210.cljs$core$IFn$_invoke$arity$1(G__40201) : input_checker40191_40210.call(null,G__40201));
})();if(cljs.core.truth_(temp__4126__auto___40213))
{var error__839__auto___40214 = temp__4126__auto___40213;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40214], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40190_40209,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40212,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40214], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40203 = G__40193;var map__40204 = G__40203;var map__40204__$1 = ((cljs.core.seq_QMARK_(map__40204))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40204):map__40204);var input = map__40204__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40204__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40204__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__40194;var G__40203__$1 = G__40203;var children__$1 = children;while(true){
var map__40205 = G__40203__$1;var map__40205__$1 = ((cljs.core.seq_QMARK_(map__40205))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40205):map__40205);var input__$1 = map__40205__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40205__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40205__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40215 = (function (){var G__40206 = o__840__auto__;return (output_checker40192_40211.cljs$core$IFn$_invoke$arity$1 ? output_checker40192_40211.cljs$core$IFn$_invoke$arity$1(G__40206) : output_checker40192_40211.call(null,G__40206));
})();if(cljs.core.truth_(temp__4126__auto___40215))
{var error__839__auto___40216 = temp__4126__auto___40215;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40216], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40189_40208,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40216], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40207,output_schema40189_40208,input_schema40190_40209,input_checker40191_40210,output_checker40192_40211))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema40189_40208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40190_40209], null)));
var ufv___40230 = schema.utils.use_fn_validation;var output_schema40217_40231 = om_bootstrap.types.Component;var input_schema40218_40232 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40219_40233 = schema.core.checker(input_schema40218_40232);var output_checker40220_40234 = schema.core.checker(output_schema40217_40231);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___40230,output_schema40217_40231,input_schema40218_40232,input_checker40219_40233,output_checker40220_40234){
return (function render_input(G__40221,G__40222,G__40223){var validate__837__auto__ = ufv___40230.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40235 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40221,G__40222,G__40223], null);var temp__4126__auto___40236 = (function (){var G__40227 = args__838__auto___40235;return (input_checker40219_40233.cljs$core$IFn$_invoke$arity$1 ? input_checker40219_40233.cljs$core$IFn$_invoke$arity$1(G__40227) : input_checker40219_40233.call(null,G__40227));
})();if(cljs.core.truth_(temp__4126__auto___40236))
{var error__839__auto___40237 = temp__4126__auto___40236;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40237], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40218_40232,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40235,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40237], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__40221;var attrs = G__40222;var children = G__40223;while(true){
var props = ((function (validate__837__auto__,ufv___40230,output_schema40217_40231,input_schema40218_40232,input_checker40219_40233,output_checker40220_40234){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___40230,output_schema40217_40231,input_schema40218_40232,input_checker40219_40233,output_checker40220_40234))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__40228 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__40228) {
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
{var temp__4126__auto___40239 = (function (){var G__40229 = o__840__auto__;return (output_checker40220_40234.cljs$core$IFn$_invoke$arity$1 ? output_checker40220_40234.cljs$core$IFn$_invoke$arity$1(G__40229) : output_checker40220_40234.call(null,G__40229));
})();if(cljs.core.truth_(temp__4126__auto___40239))
{var error__839__auto___40240 = temp__4126__auto___40239;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40240], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40217_40231,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40240], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40230,output_schema40217_40231,input_schema40218_40232,input_checker40219_40233,output_checker40220_40234))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema40217_40231,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40218_40232], null)));
var ufv___40253 = schema.utils.use_fn_validation;var output_schema40241_40254 = om_bootstrap.types.Component;var input_schema40242_40255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker40243_40256 = schema.core.checker(input_schema40242_40255);var output_checker40244_40257 = schema.core.checker(output_schema40241_40254);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___40253,output_schema40241_40254,input_schema40242_40255,input_checker40243_40256,output_checker40244_40257){
return (function() { 
var input__delegate = function (G__40245,rest40246){var validate__837__auto__ = ufv___40253.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40258 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__40245,rest40246);var temp__4126__auto___40259 = (function (){var G__40250 = args__838__auto___40258;return (input_checker40243_40256.cljs$core$IFn$_invoke$arity$1 ? input_checker40243_40256.cljs$core$IFn$_invoke$arity$1(G__40250) : input_checker40243_40256.call(null,G__40250));
})();if(cljs.core.truth_(temp__4126__auto___40259))
{var error__839__auto___40260 = temp__4126__auto___40259;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40260], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40242_40255,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40258,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40260], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__40245;var children = rest40246;while(true){
var vec__40251 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40251,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40251,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40261 = (function (){var G__40252 = o__840__auto__;return (output_checker40244_40257.cljs$core$IFn$_invoke$arity$1 ? output_checker40244_40257.cljs$core$IFn$_invoke$arity$1(G__40252) : output_checker40244_40257.call(null,G__40252));
})();if(cljs.core.truth_(temp__4126__auto___40261))
{var error__839__auto___40262 = temp__4126__auto___40261;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40262], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40241_40254,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40262], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__40245,var_args){
var rest40246 = null;if (arguments.length > 1) {
  rest40246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__40245,rest40246);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__40263){
var G__40245 = cljs.core.first(arglist__40263);
var rest40246 = cljs.core.rest(arglist__40263);
return input__delegate(G__40245,rest40246);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___40253,output_schema40241_40254,input_schema40242_40255,input_checker40243_40256,output_checker40244_40257))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema40241_40254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40242_40255], null)));
var ufv___40277 = schema.utils.use_fn_validation;var output_schema40264_40278 = om_bootstrap.types.Component;var input_schema40265_40279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker40266_40280 = schema.core.checker(input_schema40265_40279);var output_checker40267_40281 = schema.core.checker(output_schema40264_40278);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___40277,output_schema40264_40278,input_schema40265_40279,input_checker40266_40280,output_checker40267_40281){
return (function radio_option(G__40268){var validate__837__auto__ = ufv___40277.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40268], null);var temp__4126__auto___40283 = (function (){var G__40273 = args__838__auto___40282;return (input_checker40266_40280.cljs$core$IFn$_invoke$arity$1 ? input_checker40266_40280.cljs$core$IFn$_invoke$arity$1(G__40273) : input_checker40266_40280.call(null,G__40273));
})();if(cljs.core.truth_(temp__4126__auto___40283))
{var error__839__auto___40284 = temp__4126__auto___40283;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40284], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40265_40279,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40282,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40284], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__40268;while(true){
var vec__40274 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40274,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40274,(1),null);var map__40275 = bs;var map__40275__$1 = ((cljs.core.seq_QMARK_(map__40275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40275):map__40275);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40275__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40275__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40275__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40285 = (function (){var G__40276 = o__840__auto__;return (output_checker40267_40281.cljs$core$IFn$_invoke$arity$1 ? output_checker40267_40281.cljs$core$IFn$_invoke$arity$1(G__40276) : output_checker40267_40281.call(null,G__40276));
})();if(cljs.core.truth_(temp__4126__auto___40285))
{var error__839__auto___40286 = temp__4126__auto___40285;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40286], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40264_40278,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40286], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40277,output_schema40264_40278,input_schema40265_40279,input_checker40266_40280,output_checker40267_40281))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema40264_40278,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40265_40279], null)));
var ufv___40317 = schema.utils.use_fn_validation;var output_schema40287_40318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema40288_40319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker40289_40320 = schema.core.checker(input_schema40288_40319);var output_checker40290_40321 = schema.core.checker(output_schema40287_40318);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___40317,output_schema40287_40318,input_schema40288_40319,input_checker40289_40320,output_checker40290_40321){
return (function options(G__40291,G__40292){var validate__837__auto__ = ufv___40317.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40291,G__40292], null);var temp__4126__auto___40323 = (function (){var G__40305 = args__838__auto___40322;return (input_checker40289_40320.cljs$core$IFn$_invoke$arity$1 ? input_checker40289_40320.cljs$core$IFn$_invoke$arity$1(G__40305) : input_checker40289_40320.call(null,G__40305));
})();if(cljs.core.truth_(temp__4126__auto___40323))
{var error__839__auto___40324 = temp__4126__auto___40323;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40324], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40288_40319,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40322,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40324], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__40291;var opts = G__40292;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__20735__auto__ = ((function (validate__837__auto__,ufv___40317,output_schema40287_40318,input_schema40288_40319,input_checker40289_40320,output_checker40290_40321){
return (function iter__40306(s__40307){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___40317,output_schema40287_40318,input_schema40288_40319,input_checker40289_40320,output_checker40290_40321){
return (function (){var s__40307__$1 = s__40307;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40307__$1);if(temp__4126__auto__)
{var s__40307__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40307__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__40307__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__40309 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__40308 = (0);while(true){
if((i__40308 < size__20734__auto__))
{var vec__40314 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__40308);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40314,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40314,(1),null);cljs.core.chunk_append(b__40309,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__40325 = (i__40308 + (1));
i__40308 = G__40325;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40309),iter__40306(cljs.core.chunk_rest(s__40307__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40309),null);
}
} else
{var vec__40315 = cljs.core.first(s__40307__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40315,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40315,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__40306(cljs.core.rest(s__40307__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___40317,output_schema40287_40318,input_schema40288_40319,input_checker40289_40320,output_checker40290_40321))
,null,null));
});})(validate__837__auto__,ufv___40317,output_schema40287_40318,input_schema40288_40319,input_checker40289_40320,output_checker40290_40321))
;return iter__20735__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40326 = (function (){var G__40316 = o__840__auto__;return (output_checker40290_40321.cljs$core$IFn$_invoke$arity$1 ? output_checker40290_40321.cljs$core$IFn$_invoke$arity$1(G__40316) : output_checker40290_40321.call(null,G__40316));
})();if(cljs.core.truth_(temp__4126__auto___40326))
{var error__839__auto___40327 = temp__4126__auto___40326;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40327], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40287_40318,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40327], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40317,output_schema40287_40318,input_schema40288_40319,input_checker40289_40320,output_checker40290_40321))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema40287_40318,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40288_40319], null)));
//# sourceMappingURL=input.js.map