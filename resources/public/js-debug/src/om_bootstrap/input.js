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
var ufv___75241 = schema.utils.use_fn_validation;var output_schema75228_75242 = schema.core.Str;var input_schema75229_75243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker75230_75244 = schema.core.checker(input_schema75229_75243);var output_checker75231_75245 = schema.core.checker(output_schema75228_75242);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___75241,output_schema75228_75242,input_schema75229_75243,input_checker75230_75244,output_checker75231_75245){
return (function class_set(G__75232){var validate__837__auto__ = ufv___75241.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75232], null);var temp__4126__auto___75247 = (function (){var G__75237 = args__838__auto___75246;return (input_checker75230_75244.cljs$core$IFn$_invoke$arity$1 ? input_checker75230_75244.cljs$core$IFn$_invoke$arity$1(G__75237) : input_checker75230_75244.call(null,G__75237));
})();if(cljs.core.truth_(temp__4126__auto___75247))
{var error__839__auto___75248 = temp__4126__auto___75247;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75248], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75229_75243,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75246,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75248], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__75232;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___75241,output_schema75228_75242,input_schema75229_75243,input_checker75230_75244,output_checker75231_75245){
return (function (p__75238){var vec__75239 = p__75238;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75239,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75239,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___75241,output_schema75228_75242,input_schema75229_75243,input_checker75230_75244,output_checker75231_75245))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75249 = (function (){var G__75240 = o__840__auto__;return (output_checker75231_75245.cljs$core$IFn$_invoke$arity$1 ? output_checker75231_75245.cljs$core$IFn$_invoke$arity$1(G__75240) : output_checker75231_75245.call(null,G__75240));
})();if(cljs.core.truth_(temp__4126__auto___75249))
{var error__839__auto___75250 = temp__4126__auto___75249;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75250], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75228_75242,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75250], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75241,output_schema75228_75242,input_schema75229_75243,input_checker75230_75244,output_checker75231_75245))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema75228_75242,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75229_75243], null)));
var ufv___75262 = schema.utils.use_fn_validation;var output_schema75251_75263 = om_bootstrap.types.Component;var input_schema75252_75264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker75253_75265 = schema.core.checker(input_schema75252_75264);var output_checker75254_75266 = schema.core.checker(output_schema75251_75263);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___75262,output_schema75251_75263,input_schema75252_75264,input_checker75253_75265,output_checker75254_75266){
return (function glyph(G__75255){var validate__837__auto__ = ufv___75262.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75255], null);var temp__4126__auto___75268 = (function (){var G__75259 = args__838__auto___75267;return (input_checker75253_75265.cljs$core$IFn$_invoke$arity$1 ? input_checker75253_75265.cljs$core$IFn$_invoke$arity$1(G__75259) : input_checker75253_75265.call(null,G__75259));
})();if(cljs.core.truth_(temp__4126__auto___75268))
{var error__839__auto___75269 = temp__4126__auto___75268;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75269], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75252_75264,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75267,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75269], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__75255;while(true){
var G__75260 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__75260);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75270 = (function (){var G__75261 = o__840__auto__;return (output_checker75254_75266.cljs$core$IFn$_invoke$arity$1 ? output_checker75254_75266.cljs$core$IFn$_invoke$arity$1(G__75261) : output_checker75254_75266.call(null,G__75261));
})();if(cljs.core.truth_(temp__4126__auto___75270))
{var error__839__auto___75271 = temp__4126__auto___75270;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75271], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75251_75263,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75271], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75262,output_schema75251_75263,input_schema75252_75264,input_checker75253_75265,output_checker75254_75266))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema75251_75263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75252_75264], null)));
var ufv___75291 = schema.utils.use_fn_validation;var output_schema75272_75292 = om_bootstrap.types.Component;var input_schema75273_75293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker75274_75294 = schema.core.checker(input_schema75273_75293);var output_checker75275_75295 = schema.core.checker(output_schema75272_75292);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___75291,output_schema75272_75292,input_schema75273_75293,input_checker75274_75294,output_checker75275_75295){
return (function render_icon(G__75276){var validate__837__auto__ = ufv___75291.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75276], null);var temp__4126__auto___75297 = (function (){var G__75284 = args__838__auto___75296;return (input_checker75274_75294.cljs$core$IFn$_invoke$arity$1 ? input_checker75274_75294.cljs$core$IFn$_invoke$arity$1(G__75284) : input_checker75274_75294.call(null,G__75284));
})();if(cljs.core.truth_(temp__4126__auto___75297))
{var error__839__auto___75298 = temp__4126__auto___75297;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75298], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75273_75293,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75296,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75298], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__75286 = G__75276;var map__75287 = G__75286;var map__75287__$1 = ((cljs.core.seq_QMARK_(map__75287))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75287):map__75287);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75287__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75287__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__75286__$1 = G__75286;while(true){
var map__75288 = G__75286__$1;var map__75288__$1 = ((cljs.core.seq_QMARK_(map__75288))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75288):map__75288);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75288__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75288__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__75289 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__75289);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75299 = (function (){var G__75290 = o__840__auto__;return (output_checker75275_75295.cljs$core$IFn$_invoke$arity$1 ? output_checker75275_75295.cljs$core$IFn$_invoke$arity$1(G__75290) : output_checker75275_75295.call(null,G__75290));
})();if(cljs.core.truth_(temp__4126__auto___75299))
{var error__839__auto___75300 = temp__4126__auto___75299;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75300], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75272_75292,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75300], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75291,output_schema75272_75292,input_schema75273_75293,input_checker75274_75294,output_checker75275_75295))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema75272_75292,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75273_75293], null)));
var ufv___75310 = schema.utils.use_fn_validation;var output_schema75301_75311 = schema.core.Any;var input_schema75302_75312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker75303_75313 = schema.core.checker(input_schema75302_75312);var output_checker75304_75314 = schema.core.checker(output_schema75301_75311);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___75310,output_schema75301_75311,input_schema75302_75312,input_checker75303_75313,output_checker75304_75314){
return (function render_help(G__75305){var validate__837__auto__ = ufv___75310.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75305], null);var temp__4126__auto___75316 = (function (){var G__75308 = args__838__auto___75315;return (input_checker75303_75313.cljs$core$IFn$_invoke$arity$1 ? input_checker75303_75313.cljs$core$IFn$_invoke$arity$1(G__75308) : input_checker75303_75313.call(null,G__75308));
})();if(cljs.core.truth_(temp__4126__auto___75316))
{var error__839__auto___75317 = temp__4126__auto___75316;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75317], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75302_75312,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75315,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75317], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__75305;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75318 = (function (){var G__75309 = o__840__auto__;return (output_checker75304_75314.cljs$core$IFn$_invoke$arity$1 ? output_checker75304_75314.cljs$core$IFn$_invoke$arity$1(G__75309) : output_checker75304_75314.call(null,G__75309));
})();if(cljs.core.truth_(temp__4126__auto___75318))
{var error__839__auto___75319 = temp__4126__auto___75318;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75319], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75301_75311,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75319], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75310,output_schema75301_75311,input_schema75302_75312,input_checker75303_75313,output_checker75304_75314))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema75301_75311,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75302_75312], null)));
var ufv___75338 = schema.utils.use_fn_validation;var output_schema75320_75339 = schema.core.Any;var input_schema75321_75340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker75322_75341 = schema.core.checker(input_schema75321_75340);var output_checker75323_75342 = schema.core.checker(output_schema75320_75339);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___75338,output_schema75320_75339,input_schema75321_75340,input_checker75322_75341,output_checker75323_75342){
return (function render_input_group(G__75324,G__75325){var validate__837__auto__ = ufv___75338.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75324,G__75325], null);var temp__4126__auto___75344 = (function (){var G__75332 = args__838__auto___75343;return (input_checker75322_75341.cljs$core$IFn$_invoke$arity$1 ? input_checker75322_75341.cljs$core$IFn$_invoke$arity$1(G__75332) : input_checker75322_75341.call(null,G__75332));
})();if(cljs.core.truth_(temp__4126__auto___75344))
{var error__839__auto___75345 = temp__4126__auto___75344;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75345], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75321_75340,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75343,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75345], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__75334 = G__75324;var map__75335 = G__75334;var map__75335__$1 = ((cljs.core.seq_QMARK_(map__75335))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75335):map__75335);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75335__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75335__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__75325;var G__75334__$1 = G__75334;var items__$1 = items;while(true){
var map__75336 = G__75334__$1;var map__75336__$1 = ((cljs.core.seq_QMARK_(map__75336))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75336):map__75336);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75336__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75336__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19711__auto__ = addon_before__$1;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
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
{var temp__4126__auto___75346 = (function (){var G__75337 = o__840__auto__;return (output_checker75323_75342.cljs$core$IFn$_invoke$arity$1 ? output_checker75323_75342.cljs$core$IFn$_invoke$arity$1(G__75337) : output_checker75323_75342.call(null,G__75337));
})();if(cljs.core.truth_(temp__4126__auto___75346))
{var error__839__auto___75347 = temp__4126__auto___75346;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75347], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75320_75339,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75347], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75338,output_schema75320_75339,input_schema75321_75340,input_checker75322_75341,output_checker75323_75342))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema75320_75339,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75321_75340], null)));
var ufv___75365 = schema.utils.use_fn_validation;var output_schema75348_75366 = schema.core.Bool;var input_schema75349_75367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker75350_75368 = schema.core.checker(input_schema75349_75367);var output_checker75351_75369 = schema.core.checker(output_schema75348_75366);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___75365,output_schema75348_75366,input_schema75349_75367,input_checker75350_75368,output_checker75351_75369){
return (function checkbox_or_radio_QMARK_(G__75352){var validate__837__auto__ = ufv___75365.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75352], null);var temp__4126__auto___75371 = (function (){var G__75359 = args__838__auto___75370;return (input_checker75350_75368.cljs$core$IFn$_invoke$arity$1 ? input_checker75350_75368.cljs$core$IFn$_invoke$arity$1(G__75359) : input_checker75350_75368.call(null,G__75359));
})();if(cljs.core.truth_(temp__4126__auto___75371))
{var error__839__auto___75372 = temp__4126__auto___75371;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75372], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75349_75367,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75370,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75372], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__75361 = G__75352;var map__75362 = G__75361;var map__75362__$1 = ((cljs.core.seq_QMARK_(map__75362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75362):map__75362);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75362__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__75361__$1 = G__75361;while(true){
var map__75363 = G__75361__$1;var map__75363__$1 = ((cljs.core.seq_QMARK_(map__75363))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75363):map__75363);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75363__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75373 = (function (){var G__75364 = o__840__auto__;return (output_checker75351_75369.cljs$core$IFn$_invoke$arity$1 ? output_checker75351_75369.cljs$core$IFn$_invoke$arity$1(G__75364) : output_checker75351_75369.call(null,G__75364));
})();if(cljs.core.truth_(temp__4126__auto___75373))
{var error__839__auto___75374 = temp__4126__auto___75373;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75374], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75348_75366,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75374], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75365,output_schema75348_75366,input_schema75349_75367,input_checker75350_75368,output_checker75351_75369))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema75348_75366,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75349_75367], null)));
var ufv___75393 = schema.utils.use_fn_validation;var output_schema75375_75394 = om_bootstrap.types.Component;var input_schema75376_75395 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker75377_75396 = schema.core.checker(input_schema75376_75395);var output_checker75378_75397 = schema.core.checker(output_schema75375_75394);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___75393,output_schema75375_75394,input_schema75376_75395,input_checker75377_75396,output_checker75378_75397){
return (function checkbox_or_radio_wrapper(G__75379,G__75380){var validate__837__auto__ = ufv___75393.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75398 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75379,G__75380], null);var temp__4126__auto___75399 = (function (){var G__75387 = args__838__auto___75398;return (input_checker75377_75396.cljs$core$IFn$_invoke$arity$1 ? input_checker75377_75396.cljs$core$IFn$_invoke$arity$1(G__75387) : input_checker75377_75396.call(null,G__75387));
})();if(cljs.core.truth_(temp__4126__auto___75399))
{var error__839__auto___75400 = temp__4126__auto___75399;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75400], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75376_75395,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75398,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75400], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__75389 = G__75379;var map__75390 = G__75389;var map__75390__$1 = ((cljs.core.seq_QMARK_(map__75390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75390):map__75390);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75390__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__75380;var G__75389__$1 = G__75389;var children__$1 = children;while(true){
var map__75391 = G__75389__$1;var map__75391__$1 = ((cljs.core.seq_QMARK_(map__75391))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75391):map__75391);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75391__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75401 = (function (){var G__75392 = o__840__auto__;return (output_checker75378_75397.cljs$core$IFn$_invoke$arity$1 ? output_checker75378_75397.cljs$core$IFn$_invoke$arity$1(G__75392) : output_checker75378_75397.call(null,G__75392));
})();if(cljs.core.truth_(temp__4126__auto___75401))
{var error__839__auto___75402 = temp__4126__auto___75401;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75402], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75375_75394,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75402], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75393,output_schema75375_75394,input_schema75376_75395,input_checker75377_75396,output_checker75378_75397))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema75375_75394,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75376_75395], null)));
var ufv___75431 = schema.utils.use_fn_validation;var output_schema75403_75432 = schema.core.Any;var input_schema75404_75433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema75408_75434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker75405_75435 = schema.core.checker(input_schema75404_75433);var output_checker75406_75436 = schema.core.checker(output_schema75403_75432);var input_checker75409_75437 = schema.core.checker(input_schema75408_75434);var output_checker75410_75438 = schema.core.checker(output_schema75403_75432);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___75431,output_schema75403_75432,input_schema75404_75433,input_schema75408_75434,input_checker75405_75435,output_checker75406_75436,input_checker75409_75437,output_checker75410_75438){
return (function() {
var render_label = null;
var render_label__1 = (function (G__75407){var validate__837__auto__ = ufv___75431.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75407], null);var temp__4126__auto___75440 = (function (){var G__75423 = args__838__auto___75439;return (input_checker75405_75435.cljs$core$IFn$_invoke$arity$1 ? input_checker75405_75435.cljs$core$IFn$_invoke$arity$1(G__75423) : input_checker75405_75435.call(null,G__75423));
})();if(cljs.core.truth_(temp__4126__auto___75440))
{var error__839__auto___75441 = temp__4126__auto___75440;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75441], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75404_75433,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75439,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75441], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__75407;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75442 = (function (){var G__75424 = o__840__auto__;return (output_checker75406_75436.cljs$core$IFn$_invoke$arity$1 ? output_checker75406_75436.cljs$core$IFn$_invoke$arity$1(G__75424) : output_checker75406_75436.call(null,G__75424));
})();if(cljs.core.truth_(temp__4126__auto___75442))
{var error__839__auto___75443 = temp__4126__auto___75442;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75443], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75403_75432,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75443], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__75411,G__75412){var validate__837__auto__ = ufv___75431.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75411,G__75412], null);var temp__4126__auto___75445 = (function (){var G__75425 = args__838__auto___75444;return (input_checker75409_75437.cljs$core$IFn$_invoke$arity$1 ? input_checker75409_75437.cljs$core$IFn$_invoke$arity$1(G__75425) : input_checker75409_75437.call(null,G__75425));
})();if(cljs.core.truth_(temp__4126__auto___75445))
{var error__839__auto___75446 = temp__4126__auto___75445;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75446], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75408_75434,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75444,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75446], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__75427 = G__75411;var map__75428 = G__75427;var map__75428__$1 = ((cljs.core.seq_QMARK_(map__75428))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75428):map__75428);var input = map__75428__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75428__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75428__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__75412;var G__75427__$1 = G__75427;var child__$1 = child;while(true){
var map__75429 = G__75427__$1;var map__75429__$1 = ((cljs.core.seq_QMARK_(map__75429))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75429):map__75429);var input__$1 = map__75429__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75429__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75429__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75447 = (function (){var G__75430 = o__840__auto__;return (output_checker75410_75438.cljs$core$IFn$_invoke$arity$1 ? output_checker75410_75438.cljs$core$IFn$_invoke$arity$1(G__75430) : output_checker75410_75438.call(null,G__75430));
})();if(cljs.core.truth_(temp__4126__auto___75447))
{var error__839__auto___75448 = temp__4126__auto___75447;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75448], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75403_75432,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75448], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__75411,G__75412){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__75411);
case 2:
return render_label__2.call(this,G__75411,G__75412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___75431,output_schema75403_75432,input_schema75404_75433,input_schema75408_75434,input_checker75405_75435,output_checker75406_75436,input_checker75409_75437,output_checker75410_75438))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema75403_75432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75404_75433,input_schema75408_75434], null)));
var ufv___75467 = schema.utils.use_fn_validation;var output_schema75449_75468 = schema.core.Any;var input_schema75450_75469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker75451_75470 = schema.core.checker(input_schema75450_75469);var output_checker75452_75471 = schema.core.checker(output_schema75449_75468);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___75467,output_schema75449_75468,input_schema75450_75469,input_checker75451_75470,output_checker75452_75471){
return (function render_wrapper(G__75453,G__75454){var validate__837__auto__ = ufv___75467.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75453,G__75454], null);var temp__4126__auto___75473 = (function (){var G__75461 = args__838__auto___75472;return (input_checker75451_75470.cljs$core$IFn$_invoke$arity$1 ? input_checker75451_75470.cljs$core$IFn$_invoke$arity$1(G__75461) : input_checker75451_75470.call(null,G__75461));
})();if(cljs.core.truth_(temp__4126__auto___75473))
{var error__839__auto___75474 = temp__4126__auto___75473;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75474], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75450_75469,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75472,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75474], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__75463 = G__75453;var map__75464 = G__75463;var map__75464__$1 = ((cljs.core.seq_QMARK_(map__75464))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75464):map__75464);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75464__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__75454;var G__75463__$1 = G__75463;var child__$1 = child;while(true){
var map__75465 = G__75463__$1;var map__75465__$1 = ((cljs.core.seq_QMARK_(map__75465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75465):map__75465);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75465__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75475 = (function (){var G__75466 = o__840__auto__;return (output_checker75452_75471.cljs$core$IFn$_invoke$arity$1 ? output_checker75452_75471.cljs$core$IFn$_invoke$arity$1(G__75466) : output_checker75452_75471.call(null,G__75466));
})();if(cljs.core.truth_(temp__4126__auto___75475))
{var error__839__auto___75476 = temp__4126__auto___75475;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75476], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75449_75468,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75476], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75467,output_schema75449_75468,input_schema75450_75469,input_checker75451_75470,output_checker75452_75471))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema75449_75468,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75450_75469], null)));
var ufv___75495 = schema.utils.use_fn_validation;var output_schema75477_75496 = om_bootstrap.types.Component;var input_schema75478_75497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker75479_75498 = schema.core.checker(input_schema75478_75497);var output_checker75480_75499 = schema.core.checker(output_schema75477_75496);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___75495,output_schema75477_75496,input_schema75478_75497,input_checker75479_75498,output_checker75480_75499){
return (function render_form_group(G__75481,G__75482){var validate__837__auto__ = ufv___75495.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75481,G__75482], null);var temp__4126__auto___75501 = (function (){var G__75489 = args__838__auto___75500;return (input_checker75479_75498.cljs$core$IFn$_invoke$arity$1 ? input_checker75479_75498.cljs$core$IFn$_invoke$arity$1(G__75489) : input_checker75479_75498.call(null,G__75489));
})();if(cljs.core.truth_(temp__4126__auto___75501))
{var error__839__auto___75502 = temp__4126__auto___75501;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75502], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75478_75497,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75500,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75502], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__75491 = G__75481;var map__75492 = G__75491;var map__75492__$1 = ((cljs.core.seq_QMARK_(map__75492))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75492):map__75492);var input = map__75492__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75492__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75492__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__75482;var G__75491__$1 = G__75491;var children__$1 = children;while(true){
var map__75493 = G__75491__$1;var map__75493__$1 = ((cljs.core.seq_QMARK_(map__75493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75493):map__75493);var input__$1 = map__75493__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75493__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75493__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75503 = (function (){var G__75494 = o__840__auto__;return (output_checker75480_75499.cljs$core$IFn$_invoke$arity$1 ? output_checker75480_75499.cljs$core$IFn$_invoke$arity$1(G__75494) : output_checker75480_75499.call(null,G__75494));
})();if(cljs.core.truth_(temp__4126__auto___75503))
{var error__839__auto___75504 = temp__4126__auto___75503;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75504], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75477_75496,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75504], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75495,output_schema75477_75496,input_schema75478_75497,input_checker75479_75498,output_checker75480_75499))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema75477_75496,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75478_75497], null)));
var ufv___75518 = schema.utils.use_fn_validation;var output_schema75505_75519 = om_bootstrap.types.Component;var input_schema75506_75520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker75507_75521 = schema.core.checker(input_schema75506_75520);var output_checker75508_75522 = schema.core.checker(output_schema75505_75519);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___75518,output_schema75505_75519,input_schema75506_75520,input_checker75507_75521,output_checker75508_75522){
return (function render_input(G__75509,G__75510,G__75511){var validate__837__auto__ = ufv___75518.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75523 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75509,G__75510,G__75511], null);var temp__4126__auto___75524 = (function (){var G__75515 = args__838__auto___75523;return (input_checker75507_75521.cljs$core$IFn$_invoke$arity$1 ? input_checker75507_75521.cljs$core$IFn$_invoke$arity$1(G__75515) : input_checker75507_75521.call(null,G__75515));
})();if(cljs.core.truth_(temp__4126__auto___75524))
{var error__839__auto___75525 = temp__4126__auto___75524;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75525], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75506_75520,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75523,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75525], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__75509;var attrs = G__75510;var children = G__75511;while(true){
var props = ((function (validate__837__auto__,ufv___75518,output_schema75505_75519,input_schema75506_75520,input_checker75507_75521,output_checker75508_75522){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___75518,output_schema75505_75519,input_schema75506_75520,input_checker75507_75521,output_checker75508_75522))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__75516 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__75516) {
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
{var temp__4126__auto___75527 = (function (){var G__75517 = o__840__auto__;return (output_checker75508_75522.cljs$core$IFn$_invoke$arity$1 ? output_checker75508_75522.cljs$core$IFn$_invoke$arity$1(G__75517) : output_checker75508_75522.call(null,G__75517));
})();if(cljs.core.truth_(temp__4126__auto___75527))
{var error__839__auto___75528 = temp__4126__auto___75527;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75528], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75505_75519,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75528], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75518,output_schema75505_75519,input_schema75506_75520,input_checker75507_75521,output_checker75508_75522))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema75505_75519,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75506_75520], null)));
var ufv___75541 = schema.utils.use_fn_validation;var output_schema75529_75542 = om_bootstrap.types.Component;var input_schema75530_75543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker75531_75544 = schema.core.checker(input_schema75530_75543);var output_checker75532_75545 = schema.core.checker(output_schema75529_75542);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___75541,output_schema75529_75542,input_schema75530_75543,input_checker75531_75544,output_checker75532_75545){
return (function() { 
var input__delegate = function (G__75533,rest75534){var validate__837__auto__ = ufv___75541.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75546 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__75533,rest75534);var temp__4126__auto___75547 = (function (){var G__75538 = args__838__auto___75546;return (input_checker75531_75544.cljs$core$IFn$_invoke$arity$1 ? input_checker75531_75544.cljs$core$IFn$_invoke$arity$1(G__75538) : input_checker75531_75544.call(null,G__75538));
})();if(cljs.core.truth_(temp__4126__auto___75547))
{var error__839__auto___75548 = temp__4126__auto___75547;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75548], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75530_75543,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75546,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75548], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75533;var children = rest75534;while(true){
var vec__75539 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75539,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75539,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75549 = (function (){var G__75540 = o__840__auto__;return (output_checker75532_75545.cljs$core$IFn$_invoke$arity$1 ? output_checker75532_75545.cljs$core$IFn$_invoke$arity$1(G__75540) : output_checker75532_75545.call(null,G__75540));
})();if(cljs.core.truth_(temp__4126__auto___75549))
{var error__839__auto___75550 = temp__4126__auto___75549;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75550], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75529_75542,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75550], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__75533,var_args){
var rest75534 = null;if (arguments.length > 1) {
  rest75534 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__75533,rest75534);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__75551){
var G__75533 = cljs.core.first(arglist__75551);
var rest75534 = cljs.core.rest(arglist__75551);
return input__delegate(G__75533,rest75534);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___75541,output_schema75529_75542,input_schema75530_75543,input_checker75531_75544,output_checker75532_75545))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema75529_75542,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75530_75543], null)));
var ufv___75565 = schema.utils.use_fn_validation;var output_schema75552_75566 = om_bootstrap.types.Component;var input_schema75553_75567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker75554_75568 = schema.core.checker(input_schema75553_75567);var output_checker75555_75569 = schema.core.checker(output_schema75552_75566);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___75565,output_schema75552_75566,input_schema75553_75567,input_checker75554_75568,output_checker75555_75569){
return (function radio_option(G__75556){var validate__837__auto__ = ufv___75565.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75556], null);var temp__4126__auto___75571 = (function (){var G__75561 = args__838__auto___75570;return (input_checker75554_75568.cljs$core$IFn$_invoke$arity$1 ? input_checker75554_75568.cljs$core$IFn$_invoke$arity$1(G__75561) : input_checker75554_75568.call(null,G__75561));
})();if(cljs.core.truth_(temp__4126__auto___75571))
{var error__839__auto___75572 = temp__4126__auto___75571;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75572], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75553_75567,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75570,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75572], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__75556;while(true){
var vec__75562 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75562,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75562,(1),null);var map__75563 = bs;var map__75563__$1 = ((cljs.core.seq_QMARK_(map__75563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75563):map__75563);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75563__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75563__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75563__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75573 = (function (){var G__75564 = o__840__auto__;return (output_checker75555_75569.cljs$core$IFn$_invoke$arity$1 ? output_checker75555_75569.cljs$core$IFn$_invoke$arity$1(G__75564) : output_checker75555_75569.call(null,G__75564));
})();if(cljs.core.truth_(temp__4126__auto___75573))
{var error__839__auto___75574 = temp__4126__auto___75573;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75574], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75552_75566,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75574], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75565,output_schema75552_75566,input_schema75553_75567,input_checker75554_75568,output_checker75555_75569))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema75552_75566,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75553_75567], null)));
var ufv___75605 = schema.utils.use_fn_validation;var output_schema75575_75606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema75576_75607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker75577_75608 = schema.core.checker(input_schema75576_75607);var output_checker75578_75609 = schema.core.checker(output_schema75575_75606);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___75605,output_schema75575_75606,input_schema75576_75607,input_checker75577_75608,output_checker75578_75609){
return (function options(G__75579,G__75580){var validate__837__auto__ = ufv___75605.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75579,G__75580], null);var temp__4126__auto___75611 = (function (){var G__75593 = args__838__auto___75610;return (input_checker75577_75608.cljs$core$IFn$_invoke$arity$1 ? input_checker75577_75608.cljs$core$IFn$_invoke$arity$1(G__75593) : input_checker75577_75608.call(null,G__75593));
})();if(cljs.core.truth_(temp__4126__auto___75611))
{var error__839__auto___75612 = temp__4126__auto___75611;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75612], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75576_75607,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75610,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75612], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__75579;var opts = G__75580;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__21069__auto__ = ((function (validate__837__auto__,ufv___75605,output_schema75575_75606,input_schema75576_75607,input_checker75577_75608,output_checker75578_75609){
return (function iter__75594(s__75595){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___75605,output_schema75575_75606,input_schema75576_75607,input_checker75577_75608,output_checker75578_75609){
return (function (){var s__75595__$1 = s__75595;while(true){
var temp__4126__auto__ = cljs.core.seq(s__75595__$1);if(temp__4126__auto__)
{var s__75595__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__75595__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__75595__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__75597 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__75596 = (0);while(true){
if((i__75596 < size__21068__auto__))
{var vec__75602 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__75596);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75602,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75602,(1),null);cljs.core.chunk_append(b__75597,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__75613 = (i__75596 + (1));
i__75596 = G__75613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__75597),iter__75594(cljs.core.chunk_rest(s__75595__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__75597),null);
}
} else
{var vec__75603 = cljs.core.first(s__75595__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75603,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75603,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__75594(cljs.core.rest(s__75595__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___75605,output_schema75575_75606,input_schema75576_75607,input_checker75577_75608,output_checker75578_75609))
,null,null));
});})(validate__837__auto__,ufv___75605,output_schema75575_75606,input_schema75576_75607,input_checker75577_75608,output_checker75578_75609))
;return iter__21069__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75614 = (function (){var G__75604 = o__840__auto__;return (output_checker75578_75609.cljs$core$IFn$_invoke$arity$1 ? output_checker75578_75609.cljs$core$IFn$_invoke$arity$1(G__75604) : output_checker75578_75609.call(null,G__75604));
})();if(cljs.core.truth_(temp__4126__auto___75614))
{var error__839__auto___75615 = temp__4126__auto___75614;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75615], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75575_75606,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75615], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___75605,output_schema75575_75606,input_schema75576_75607,input_checker75577_75608,output_checker75578_75609))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema75575_75606,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75576_75607], null)));
//# sourceMappingURL=input.js.map