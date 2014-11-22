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
var ufv___49094 = schema.utils.use_fn_validation;var output_schema49081_49095 = schema.core.Str;var input_schema49082_49096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker49083_49097 = schema.core.checker(input_schema49082_49096);var output_checker49084_49098 = schema.core.checker(output_schema49081_49095);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___49094,output_schema49081_49095,input_schema49082_49096,input_checker49083_49097,output_checker49084_49098){
return (function class_set(G__49085){var validate__837__auto__ = ufv___49094.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49085], null);var temp__4126__auto___49100 = (function (){var G__49090 = args__838__auto___49099;return (input_checker49083_49097.cljs$core$IFn$_invoke$arity$1 ? input_checker49083_49097.cljs$core$IFn$_invoke$arity$1(G__49090) : input_checker49083_49097.call(null,G__49090));
})();if(cljs.core.truth_(temp__4126__auto___49100))
{var error__839__auto___49101 = temp__4126__auto___49100;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49101], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49082_49096,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49099,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49101], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__49085;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___49094,output_schema49081_49095,input_schema49082_49096,input_checker49083_49097,output_checker49084_49098){
return (function (p__49091){var vec__49092 = p__49091;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49092,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49092,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___49094,output_schema49081_49095,input_schema49082_49096,input_checker49083_49097,output_checker49084_49098))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49102 = (function (){var G__49093 = o__840__auto__;return (output_checker49084_49098.cljs$core$IFn$_invoke$arity$1 ? output_checker49084_49098.cljs$core$IFn$_invoke$arity$1(G__49093) : output_checker49084_49098.call(null,G__49093));
})();if(cljs.core.truth_(temp__4126__auto___49102))
{var error__839__auto___49103 = temp__4126__auto___49102;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49103], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49081_49095,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49103], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49094,output_schema49081_49095,input_schema49082_49096,input_checker49083_49097,output_checker49084_49098))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema49081_49095,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49082_49096], null)));
var ufv___49115 = schema.utils.use_fn_validation;var output_schema49104_49116 = om_bootstrap.types.Component;var input_schema49105_49117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker49106_49118 = schema.core.checker(input_schema49105_49117);var output_checker49107_49119 = schema.core.checker(output_schema49104_49116);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___49115,output_schema49104_49116,input_schema49105_49117,input_checker49106_49118,output_checker49107_49119){
return (function glyph(G__49108){var validate__837__auto__ = ufv___49115.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49108], null);var temp__4126__auto___49121 = (function (){var G__49112 = args__838__auto___49120;return (input_checker49106_49118.cljs$core$IFn$_invoke$arity$1 ? input_checker49106_49118.cljs$core$IFn$_invoke$arity$1(G__49112) : input_checker49106_49118.call(null,G__49112));
})();if(cljs.core.truth_(temp__4126__auto___49121))
{var error__839__auto___49122 = temp__4126__auto___49121;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49122], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49105_49117,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49120,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49122], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__49108;while(true){
var G__49113 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__49113);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49123 = (function (){var G__49114 = o__840__auto__;return (output_checker49107_49119.cljs$core$IFn$_invoke$arity$1 ? output_checker49107_49119.cljs$core$IFn$_invoke$arity$1(G__49114) : output_checker49107_49119.call(null,G__49114));
})();if(cljs.core.truth_(temp__4126__auto___49123))
{var error__839__auto___49124 = temp__4126__auto___49123;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49124], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49104_49116,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49124], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49115,output_schema49104_49116,input_schema49105_49117,input_checker49106_49118,output_checker49107_49119))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema49104_49116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49105_49117], null)));
var ufv___49144 = schema.utils.use_fn_validation;var output_schema49125_49145 = om_bootstrap.types.Component;var input_schema49126_49146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker49127_49147 = schema.core.checker(input_schema49126_49146);var output_checker49128_49148 = schema.core.checker(output_schema49125_49145);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___49144,output_schema49125_49145,input_schema49126_49146,input_checker49127_49147,output_checker49128_49148){
return (function render_icon(G__49129){var validate__837__auto__ = ufv___49144.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49129], null);var temp__4126__auto___49150 = (function (){var G__49137 = args__838__auto___49149;return (input_checker49127_49147.cljs$core$IFn$_invoke$arity$1 ? input_checker49127_49147.cljs$core$IFn$_invoke$arity$1(G__49137) : input_checker49127_49147.call(null,G__49137));
})();if(cljs.core.truth_(temp__4126__auto___49150))
{var error__839__auto___49151 = temp__4126__auto___49150;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49151], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49126_49146,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49149,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49151], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__49139 = G__49129;var map__49140 = G__49139;var map__49140__$1 = ((cljs.core.seq_QMARK_(map__49140))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49140):map__49140);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49140__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49140__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__49139__$1 = G__49139;while(true){
var map__49141 = G__49139__$1;var map__49141__$1 = ((cljs.core.seq_QMARK_(map__49141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49141):map__49141);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49141__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49141__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__49142 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__49142);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49152 = (function (){var G__49143 = o__840__auto__;return (output_checker49128_49148.cljs$core$IFn$_invoke$arity$1 ? output_checker49128_49148.cljs$core$IFn$_invoke$arity$1(G__49143) : output_checker49128_49148.call(null,G__49143));
})();if(cljs.core.truth_(temp__4126__auto___49152))
{var error__839__auto___49153 = temp__4126__auto___49152;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49153], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49125_49145,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49153], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49144,output_schema49125_49145,input_schema49126_49146,input_checker49127_49147,output_checker49128_49148))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema49125_49145,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49126_49146], null)));
var ufv___49163 = schema.utils.use_fn_validation;var output_schema49154_49164 = schema.core.Any;var input_schema49155_49165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker49156_49166 = schema.core.checker(input_schema49155_49165);var output_checker49157_49167 = schema.core.checker(output_schema49154_49164);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___49163,output_schema49154_49164,input_schema49155_49165,input_checker49156_49166,output_checker49157_49167){
return (function render_help(G__49158){var validate__837__auto__ = ufv___49163.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49158], null);var temp__4126__auto___49169 = (function (){var G__49161 = args__838__auto___49168;return (input_checker49156_49166.cljs$core$IFn$_invoke$arity$1 ? input_checker49156_49166.cljs$core$IFn$_invoke$arity$1(G__49161) : input_checker49156_49166.call(null,G__49161));
})();if(cljs.core.truth_(temp__4126__auto___49169))
{var error__839__auto___49170 = temp__4126__auto___49169;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49170], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49155_49165,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49168,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49170], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__49158;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49171 = (function (){var G__49162 = o__840__auto__;return (output_checker49157_49167.cljs$core$IFn$_invoke$arity$1 ? output_checker49157_49167.cljs$core$IFn$_invoke$arity$1(G__49162) : output_checker49157_49167.call(null,G__49162));
})();if(cljs.core.truth_(temp__4126__auto___49171))
{var error__839__auto___49172 = temp__4126__auto___49171;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49172], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49154_49164,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49172], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49163,output_schema49154_49164,input_schema49155_49165,input_checker49156_49166,output_checker49157_49167))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema49154_49164,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49155_49165], null)));
var ufv___49191 = schema.utils.use_fn_validation;var output_schema49173_49192 = schema.core.Any;var input_schema49174_49193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker49175_49194 = schema.core.checker(input_schema49174_49193);var output_checker49176_49195 = schema.core.checker(output_schema49173_49192);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___49191,output_schema49173_49192,input_schema49174_49193,input_checker49175_49194,output_checker49176_49195){
return (function render_input_group(G__49177,G__49178){var validate__837__auto__ = ufv___49191.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49177,G__49178], null);var temp__4126__auto___49197 = (function (){var G__49185 = args__838__auto___49196;return (input_checker49175_49194.cljs$core$IFn$_invoke$arity$1 ? input_checker49175_49194.cljs$core$IFn$_invoke$arity$1(G__49185) : input_checker49175_49194.call(null,G__49185));
})();if(cljs.core.truth_(temp__4126__auto___49197))
{var error__839__auto___49198 = temp__4126__auto___49197;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49198], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49174_49193,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49196,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49198], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__49187 = G__49177;var map__49188 = G__49187;var map__49188__$1 = ((cljs.core.seq_QMARK_(map__49188))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49188):map__49188);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49188__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49188__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__49178;var G__49187__$1 = G__49187;var items__$1 = items;while(true){
var map__49189 = G__49187__$1;var map__49189__$1 = ((cljs.core.seq_QMARK_(map__49189))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49189):map__49189);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49189__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49189__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19687__auto__ = addon_before__$1;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
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
{var temp__4126__auto___49199 = (function (){var G__49190 = o__840__auto__;return (output_checker49176_49195.cljs$core$IFn$_invoke$arity$1 ? output_checker49176_49195.cljs$core$IFn$_invoke$arity$1(G__49190) : output_checker49176_49195.call(null,G__49190));
})();if(cljs.core.truth_(temp__4126__auto___49199))
{var error__839__auto___49200 = temp__4126__auto___49199;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49200], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49173_49192,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49200], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49191,output_schema49173_49192,input_schema49174_49193,input_checker49175_49194,output_checker49176_49195))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema49173_49192,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49174_49193], null)));
var ufv___49218 = schema.utils.use_fn_validation;var output_schema49201_49219 = schema.core.Bool;var input_schema49202_49220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker49203_49221 = schema.core.checker(input_schema49202_49220);var output_checker49204_49222 = schema.core.checker(output_schema49201_49219);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___49218,output_schema49201_49219,input_schema49202_49220,input_checker49203_49221,output_checker49204_49222){
return (function checkbox_or_radio_QMARK_(G__49205){var validate__837__auto__ = ufv___49218.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49205], null);var temp__4126__auto___49224 = (function (){var G__49212 = args__838__auto___49223;return (input_checker49203_49221.cljs$core$IFn$_invoke$arity$1 ? input_checker49203_49221.cljs$core$IFn$_invoke$arity$1(G__49212) : input_checker49203_49221.call(null,G__49212));
})();if(cljs.core.truth_(temp__4126__auto___49224))
{var error__839__auto___49225 = temp__4126__auto___49224;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49225], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49202_49220,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49223,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49225], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__49214 = G__49205;var map__49215 = G__49214;var map__49215__$1 = ((cljs.core.seq_QMARK_(map__49215))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49215):map__49215);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49215__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__49214__$1 = G__49214;while(true){
var map__49216 = G__49214__$1;var map__49216__$1 = ((cljs.core.seq_QMARK_(map__49216))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49216):map__49216);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49216__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49226 = (function (){var G__49217 = o__840__auto__;return (output_checker49204_49222.cljs$core$IFn$_invoke$arity$1 ? output_checker49204_49222.cljs$core$IFn$_invoke$arity$1(G__49217) : output_checker49204_49222.call(null,G__49217));
})();if(cljs.core.truth_(temp__4126__auto___49226))
{var error__839__auto___49227 = temp__4126__auto___49226;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49227], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49201_49219,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49227], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49218,output_schema49201_49219,input_schema49202_49220,input_checker49203_49221,output_checker49204_49222))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema49201_49219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49202_49220], null)));
var ufv___49246 = schema.utils.use_fn_validation;var output_schema49228_49247 = om_bootstrap.types.Component;var input_schema49229_49248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker49230_49249 = schema.core.checker(input_schema49229_49248);var output_checker49231_49250 = schema.core.checker(output_schema49228_49247);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___49246,output_schema49228_49247,input_schema49229_49248,input_checker49230_49249,output_checker49231_49250){
return (function checkbox_or_radio_wrapper(G__49232,G__49233){var validate__837__auto__ = ufv___49246.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49251 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49232,G__49233], null);var temp__4126__auto___49252 = (function (){var G__49240 = args__838__auto___49251;return (input_checker49230_49249.cljs$core$IFn$_invoke$arity$1 ? input_checker49230_49249.cljs$core$IFn$_invoke$arity$1(G__49240) : input_checker49230_49249.call(null,G__49240));
})();if(cljs.core.truth_(temp__4126__auto___49252))
{var error__839__auto___49253 = temp__4126__auto___49252;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49253], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49229_49248,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49251,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49253], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__49242 = G__49232;var map__49243 = G__49242;var map__49243__$1 = ((cljs.core.seq_QMARK_(map__49243))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49243):map__49243);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49243__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__49233;var G__49242__$1 = G__49242;var children__$1 = children;while(true){
var map__49244 = G__49242__$1;var map__49244__$1 = ((cljs.core.seq_QMARK_(map__49244))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49244):map__49244);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49244__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49254 = (function (){var G__49245 = o__840__auto__;return (output_checker49231_49250.cljs$core$IFn$_invoke$arity$1 ? output_checker49231_49250.cljs$core$IFn$_invoke$arity$1(G__49245) : output_checker49231_49250.call(null,G__49245));
})();if(cljs.core.truth_(temp__4126__auto___49254))
{var error__839__auto___49255 = temp__4126__auto___49254;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49255], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49228_49247,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49255], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49246,output_schema49228_49247,input_schema49229_49248,input_checker49230_49249,output_checker49231_49250))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema49228_49247,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49229_49248], null)));
var ufv___49284 = schema.utils.use_fn_validation;var output_schema49256_49285 = schema.core.Any;var input_schema49257_49286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema49261_49287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker49258_49288 = schema.core.checker(input_schema49257_49286);var output_checker49259_49289 = schema.core.checker(output_schema49256_49285);var input_checker49262_49290 = schema.core.checker(input_schema49261_49287);var output_checker49263_49291 = schema.core.checker(output_schema49256_49285);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___49284,output_schema49256_49285,input_schema49257_49286,input_schema49261_49287,input_checker49258_49288,output_checker49259_49289,input_checker49262_49290,output_checker49263_49291){
return (function() {
var render_label = null;
var render_label__1 = (function (G__49260){var validate__837__auto__ = ufv___49284.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49260], null);var temp__4126__auto___49293 = (function (){var G__49276 = args__838__auto___49292;return (input_checker49258_49288.cljs$core$IFn$_invoke$arity$1 ? input_checker49258_49288.cljs$core$IFn$_invoke$arity$1(G__49276) : input_checker49258_49288.call(null,G__49276));
})();if(cljs.core.truth_(temp__4126__auto___49293))
{var error__839__auto___49294 = temp__4126__auto___49293;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49294], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49257_49286,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49292,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49294], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__49260;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49295 = (function (){var G__49277 = o__840__auto__;return (output_checker49259_49289.cljs$core$IFn$_invoke$arity$1 ? output_checker49259_49289.cljs$core$IFn$_invoke$arity$1(G__49277) : output_checker49259_49289.call(null,G__49277));
})();if(cljs.core.truth_(temp__4126__auto___49295))
{var error__839__auto___49296 = temp__4126__auto___49295;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49296], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49256_49285,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49296], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__49264,G__49265){var validate__837__auto__ = ufv___49284.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49264,G__49265], null);var temp__4126__auto___49298 = (function (){var G__49278 = args__838__auto___49297;return (input_checker49262_49290.cljs$core$IFn$_invoke$arity$1 ? input_checker49262_49290.cljs$core$IFn$_invoke$arity$1(G__49278) : input_checker49262_49290.call(null,G__49278));
})();if(cljs.core.truth_(temp__4126__auto___49298))
{var error__839__auto___49299 = temp__4126__auto___49298;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49299], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49261_49287,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49297,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49299], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__49280 = G__49264;var map__49281 = G__49280;var map__49281__$1 = ((cljs.core.seq_QMARK_(map__49281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49281):map__49281);var input = map__49281__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49281__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49281__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__49265;var G__49280__$1 = G__49280;var child__$1 = child;while(true){
var map__49282 = G__49280__$1;var map__49282__$1 = ((cljs.core.seq_QMARK_(map__49282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49282):map__49282);var input__$1 = map__49282__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49282__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49282__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49300 = (function (){var G__49283 = o__840__auto__;return (output_checker49263_49291.cljs$core$IFn$_invoke$arity$1 ? output_checker49263_49291.cljs$core$IFn$_invoke$arity$1(G__49283) : output_checker49263_49291.call(null,G__49283));
})();if(cljs.core.truth_(temp__4126__auto___49300))
{var error__839__auto___49301 = temp__4126__auto___49300;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49301], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49256_49285,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49301], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__49264,G__49265){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__49264);
case 2:
return render_label__2.call(this,G__49264,G__49265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___49284,output_schema49256_49285,input_schema49257_49286,input_schema49261_49287,input_checker49258_49288,output_checker49259_49289,input_checker49262_49290,output_checker49263_49291))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema49256_49285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49257_49286,input_schema49261_49287], null)));
var ufv___49320 = schema.utils.use_fn_validation;var output_schema49302_49321 = schema.core.Any;var input_schema49303_49322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker49304_49323 = schema.core.checker(input_schema49303_49322);var output_checker49305_49324 = schema.core.checker(output_schema49302_49321);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___49320,output_schema49302_49321,input_schema49303_49322,input_checker49304_49323,output_checker49305_49324){
return (function render_wrapper(G__49306,G__49307){var validate__837__auto__ = ufv___49320.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49306,G__49307], null);var temp__4126__auto___49326 = (function (){var G__49314 = args__838__auto___49325;return (input_checker49304_49323.cljs$core$IFn$_invoke$arity$1 ? input_checker49304_49323.cljs$core$IFn$_invoke$arity$1(G__49314) : input_checker49304_49323.call(null,G__49314));
})();if(cljs.core.truth_(temp__4126__auto___49326))
{var error__839__auto___49327 = temp__4126__auto___49326;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49327], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49303_49322,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49325,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49327], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__49316 = G__49306;var map__49317 = G__49316;var map__49317__$1 = ((cljs.core.seq_QMARK_(map__49317))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49317):map__49317);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49317__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__49307;var G__49316__$1 = G__49316;var child__$1 = child;while(true){
var map__49318 = G__49316__$1;var map__49318__$1 = ((cljs.core.seq_QMARK_(map__49318))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49318):map__49318);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49318__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49328 = (function (){var G__49319 = o__840__auto__;return (output_checker49305_49324.cljs$core$IFn$_invoke$arity$1 ? output_checker49305_49324.cljs$core$IFn$_invoke$arity$1(G__49319) : output_checker49305_49324.call(null,G__49319));
})();if(cljs.core.truth_(temp__4126__auto___49328))
{var error__839__auto___49329 = temp__4126__auto___49328;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49329], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49302_49321,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49329], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49320,output_schema49302_49321,input_schema49303_49322,input_checker49304_49323,output_checker49305_49324))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema49302_49321,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49303_49322], null)));
var ufv___49348 = schema.utils.use_fn_validation;var output_schema49330_49349 = om_bootstrap.types.Component;var input_schema49331_49350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker49332_49351 = schema.core.checker(input_schema49331_49350);var output_checker49333_49352 = schema.core.checker(output_schema49330_49349);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___49348,output_schema49330_49349,input_schema49331_49350,input_checker49332_49351,output_checker49333_49352){
return (function render_form_group(G__49334,G__49335){var validate__837__auto__ = ufv___49348.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49334,G__49335], null);var temp__4126__auto___49354 = (function (){var G__49342 = args__838__auto___49353;return (input_checker49332_49351.cljs$core$IFn$_invoke$arity$1 ? input_checker49332_49351.cljs$core$IFn$_invoke$arity$1(G__49342) : input_checker49332_49351.call(null,G__49342));
})();if(cljs.core.truth_(temp__4126__auto___49354))
{var error__839__auto___49355 = temp__4126__auto___49354;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49355], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49331_49350,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49353,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49355], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__49344 = G__49334;var map__49345 = G__49344;var map__49345__$1 = ((cljs.core.seq_QMARK_(map__49345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49345):map__49345);var input = map__49345__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49345__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49345__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__49335;var G__49344__$1 = G__49344;var children__$1 = children;while(true){
var map__49346 = G__49344__$1;var map__49346__$1 = ((cljs.core.seq_QMARK_(map__49346))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49346):map__49346);var input__$1 = map__49346__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49346__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49346__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49356 = (function (){var G__49347 = o__840__auto__;return (output_checker49333_49352.cljs$core$IFn$_invoke$arity$1 ? output_checker49333_49352.cljs$core$IFn$_invoke$arity$1(G__49347) : output_checker49333_49352.call(null,G__49347));
})();if(cljs.core.truth_(temp__4126__auto___49356))
{var error__839__auto___49357 = temp__4126__auto___49356;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49357], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49330_49349,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49357], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49348,output_schema49330_49349,input_schema49331_49350,input_checker49332_49351,output_checker49333_49352))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema49330_49349,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49331_49350], null)));
var ufv___49371 = schema.utils.use_fn_validation;var output_schema49358_49372 = om_bootstrap.types.Component;var input_schema49359_49373 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker49360_49374 = schema.core.checker(input_schema49359_49373);var output_checker49361_49375 = schema.core.checker(output_schema49358_49372);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___49371,output_schema49358_49372,input_schema49359_49373,input_checker49360_49374,output_checker49361_49375){
return (function render_input(G__49362,G__49363,G__49364){var validate__837__auto__ = ufv___49371.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49376 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49362,G__49363,G__49364], null);var temp__4126__auto___49377 = (function (){var G__49368 = args__838__auto___49376;return (input_checker49360_49374.cljs$core$IFn$_invoke$arity$1 ? input_checker49360_49374.cljs$core$IFn$_invoke$arity$1(G__49368) : input_checker49360_49374.call(null,G__49368));
})();if(cljs.core.truth_(temp__4126__auto___49377))
{var error__839__auto___49378 = temp__4126__auto___49377;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49378], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49359_49373,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49376,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49378], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__49362;var attrs = G__49363;var children = G__49364;while(true){
var props = ((function (validate__837__auto__,ufv___49371,output_schema49358_49372,input_schema49359_49373,input_checker49360_49374,output_checker49361_49375){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___49371,output_schema49358_49372,input_schema49359_49373,input_checker49360_49374,output_checker49361_49375))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__49369 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__49369) {
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
{var temp__4126__auto___49380 = (function (){var G__49370 = o__840__auto__;return (output_checker49361_49375.cljs$core$IFn$_invoke$arity$1 ? output_checker49361_49375.cljs$core$IFn$_invoke$arity$1(G__49370) : output_checker49361_49375.call(null,G__49370));
})();if(cljs.core.truth_(temp__4126__auto___49380))
{var error__839__auto___49381 = temp__4126__auto___49380;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49381], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49358_49372,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49381], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49371,output_schema49358_49372,input_schema49359_49373,input_checker49360_49374,output_checker49361_49375))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema49358_49372,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49359_49373], null)));
var ufv___49394 = schema.utils.use_fn_validation;var output_schema49382_49395 = om_bootstrap.types.Component;var input_schema49383_49396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker49384_49397 = schema.core.checker(input_schema49383_49396);var output_checker49385_49398 = schema.core.checker(output_schema49382_49395);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___49394,output_schema49382_49395,input_schema49383_49396,input_checker49384_49397,output_checker49385_49398){
return (function() { 
var input__delegate = function (G__49386,rest49387){var validate__837__auto__ = ufv___49394.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49399 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__49386,rest49387);var temp__4126__auto___49400 = (function (){var G__49391 = args__838__auto___49399;return (input_checker49384_49397.cljs$core$IFn$_invoke$arity$1 ? input_checker49384_49397.cljs$core$IFn$_invoke$arity$1(G__49391) : input_checker49384_49397.call(null,G__49391));
})();if(cljs.core.truth_(temp__4126__auto___49400))
{var error__839__auto___49401 = temp__4126__auto___49400;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49401], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49383_49396,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49399,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49401], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49386;var children = rest49387;while(true){
var vec__49392 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49392,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49392,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49402 = (function (){var G__49393 = o__840__auto__;return (output_checker49385_49398.cljs$core$IFn$_invoke$arity$1 ? output_checker49385_49398.cljs$core$IFn$_invoke$arity$1(G__49393) : output_checker49385_49398.call(null,G__49393));
})();if(cljs.core.truth_(temp__4126__auto___49402))
{var error__839__auto___49403 = temp__4126__auto___49402;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49403], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49382_49395,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49403], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__49386,var_args){
var rest49387 = null;if (arguments.length > 1) {
  rest49387 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__49386,rest49387);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__49404){
var G__49386 = cljs.core.first(arglist__49404);
var rest49387 = cljs.core.rest(arglist__49404);
return input__delegate(G__49386,rest49387);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___49394,output_schema49382_49395,input_schema49383_49396,input_checker49384_49397,output_checker49385_49398))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema49382_49395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49383_49396], null)));
var ufv___49418 = schema.utils.use_fn_validation;var output_schema49405_49419 = om_bootstrap.types.Component;var input_schema49406_49420 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker49407_49421 = schema.core.checker(input_schema49406_49420);var output_checker49408_49422 = schema.core.checker(output_schema49405_49419);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___49418,output_schema49405_49419,input_schema49406_49420,input_checker49407_49421,output_checker49408_49422){
return (function radio_option(G__49409){var validate__837__auto__ = ufv___49418.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49409], null);var temp__4126__auto___49424 = (function (){var G__49414 = args__838__auto___49423;return (input_checker49407_49421.cljs$core$IFn$_invoke$arity$1 ? input_checker49407_49421.cljs$core$IFn$_invoke$arity$1(G__49414) : input_checker49407_49421.call(null,G__49414));
})();if(cljs.core.truth_(temp__4126__auto___49424))
{var error__839__auto___49425 = temp__4126__auto___49424;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49425], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49406_49420,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49423,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49425], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__49409;while(true){
var vec__49415 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49415,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49415,(1),null);var map__49416 = bs;var map__49416__$1 = ((cljs.core.seq_QMARK_(map__49416))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49416):map__49416);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49416__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49416__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49416__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49426 = (function (){var G__49417 = o__840__auto__;return (output_checker49408_49422.cljs$core$IFn$_invoke$arity$1 ? output_checker49408_49422.cljs$core$IFn$_invoke$arity$1(G__49417) : output_checker49408_49422.call(null,G__49417));
})();if(cljs.core.truth_(temp__4126__auto___49426))
{var error__839__auto___49427 = temp__4126__auto___49426;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49427], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49405_49419,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49427], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49418,output_schema49405_49419,input_schema49406_49420,input_checker49407_49421,output_checker49408_49422))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema49405_49419,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49406_49420], null)));
var ufv___49458 = schema.utils.use_fn_validation;var output_schema49428_49459 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema49429_49460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker49430_49461 = schema.core.checker(input_schema49429_49460);var output_checker49431_49462 = schema.core.checker(output_schema49428_49459);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___49458,output_schema49428_49459,input_schema49429_49460,input_checker49430_49461,output_checker49431_49462){
return (function options(G__49432,G__49433){var validate__837__auto__ = ufv___49458.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49432,G__49433], null);var temp__4126__auto___49464 = (function (){var G__49446 = args__838__auto___49463;return (input_checker49430_49461.cljs$core$IFn$_invoke$arity$1 ? input_checker49430_49461.cljs$core$IFn$_invoke$arity$1(G__49446) : input_checker49430_49461.call(null,G__49446));
})();if(cljs.core.truth_(temp__4126__auto___49464))
{var error__839__auto___49465 = temp__4126__auto___49464;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49465], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49429_49460,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49463,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49465], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__49432;var opts = G__49433;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__20913__auto__ = ((function (validate__837__auto__,ufv___49458,output_schema49428_49459,input_schema49429_49460,input_checker49430_49461,output_checker49431_49462){
return (function iter__49447(s__49448){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___49458,output_schema49428_49459,input_schema49429_49460,input_checker49430_49461,output_checker49431_49462){
return (function (){var s__49448__$1 = s__49448;while(true){
var temp__4126__auto__ = cljs.core.seq(s__49448__$1);if(temp__4126__auto__)
{var s__49448__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__49448__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__49448__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__49450 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__49449 = (0);while(true){
if((i__49449 < size__20912__auto__))
{var vec__49455 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__49449);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49455,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49455,(1),null);cljs.core.chunk_append(b__49450,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__49466 = (i__49449 + (1));
i__49449 = G__49466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__49450),iter__49447(cljs.core.chunk_rest(s__49448__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__49450),null);
}
} else
{var vec__49456 = cljs.core.first(s__49448__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49456,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49456,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__49447(cljs.core.rest(s__49448__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___49458,output_schema49428_49459,input_schema49429_49460,input_checker49430_49461,output_checker49431_49462))
,null,null));
});})(validate__837__auto__,ufv___49458,output_schema49428_49459,input_schema49429_49460,input_checker49430_49461,output_checker49431_49462))
;return iter__20913__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49467 = (function (){var G__49457 = o__840__auto__;return (output_checker49431_49462.cljs$core$IFn$_invoke$arity$1 ? output_checker49431_49462.cljs$core$IFn$_invoke$arity$1(G__49457) : output_checker49431_49462.call(null,G__49457));
})();if(cljs.core.truth_(temp__4126__auto___49467))
{var error__839__auto___49468 = temp__4126__auto___49467;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49468], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49428_49459,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49468], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___49458,output_schema49428_49459,input_schema49429_49460,input_checker49430_49461,output_checker49431_49462))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema49428_49459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49429_49460], null)));
//# sourceMappingURL=input.js.map