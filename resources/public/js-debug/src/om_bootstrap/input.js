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
var ufv___57516 = schema.utils.use_fn_validation;var output_schema57503_57517 = schema.core.Str;var input_schema57504_57518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker57505_57519 = schema.core.checker(input_schema57504_57518);var output_checker57506_57520 = schema.core.checker(output_schema57503_57517);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___57516,output_schema57503_57517,input_schema57504_57518,input_checker57505_57519,output_checker57506_57520){
return (function class_set(G__57507){var validate__837__auto__ = ufv___57516.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57507], null);var temp__4126__auto___57522 = (function (){var G__57512 = args__838__auto___57521;return (input_checker57505_57519.cljs$core$IFn$_invoke$arity$1 ? input_checker57505_57519.cljs$core$IFn$_invoke$arity$1(G__57512) : input_checker57505_57519.call(null,G__57512));
})();if(cljs.core.truth_(temp__4126__auto___57522))
{var error__839__auto___57523 = temp__4126__auto___57522;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57523], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57504_57518,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57521,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57523], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__57507;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___57516,output_schema57503_57517,input_schema57504_57518,input_checker57505_57519,output_checker57506_57520){
return (function (p__57513){var vec__57514 = p__57513;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57514,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57514,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___57516,output_schema57503_57517,input_schema57504_57518,input_checker57505_57519,output_checker57506_57520))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57524 = (function (){var G__57515 = o__840__auto__;return (output_checker57506_57520.cljs$core$IFn$_invoke$arity$1 ? output_checker57506_57520.cljs$core$IFn$_invoke$arity$1(G__57515) : output_checker57506_57520.call(null,G__57515));
})();if(cljs.core.truth_(temp__4126__auto___57524))
{var error__839__auto___57525 = temp__4126__auto___57524;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57525], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57503_57517,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57525], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57516,output_schema57503_57517,input_schema57504_57518,input_checker57505_57519,output_checker57506_57520))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema57503_57517,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57504_57518], null)));
var ufv___57537 = schema.utils.use_fn_validation;var output_schema57526_57538 = om_bootstrap.types.Component;var input_schema57527_57539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker57528_57540 = schema.core.checker(input_schema57527_57539);var output_checker57529_57541 = schema.core.checker(output_schema57526_57538);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___57537,output_schema57526_57538,input_schema57527_57539,input_checker57528_57540,output_checker57529_57541){
return (function glyph(G__57530){var validate__837__auto__ = ufv___57537.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57530], null);var temp__4126__auto___57543 = (function (){var G__57534 = args__838__auto___57542;return (input_checker57528_57540.cljs$core$IFn$_invoke$arity$1 ? input_checker57528_57540.cljs$core$IFn$_invoke$arity$1(G__57534) : input_checker57528_57540.call(null,G__57534));
})();if(cljs.core.truth_(temp__4126__auto___57543))
{var error__839__auto___57544 = temp__4126__auto___57543;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57544], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57527_57539,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57542,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57544], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__57530;while(true){
var G__57535 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__57535);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57545 = (function (){var G__57536 = o__840__auto__;return (output_checker57529_57541.cljs$core$IFn$_invoke$arity$1 ? output_checker57529_57541.cljs$core$IFn$_invoke$arity$1(G__57536) : output_checker57529_57541.call(null,G__57536));
})();if(cljs.core.truth_(temp__4126__auto___57545))
{var error__839__auto___57546 = temp__4126__auto___57545;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57546], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57526_57538,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57546], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57537,output_schema57526_57538,input_schema57527_57539,input_checker57528_57540,output_checker57529_57541))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema57526_57538,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57527_57539], null)));
var ufv___57566 = schema.utils.use_fn_validation;var output_schema57547_57567 = om_bootstrap.types.Component;var input_schema57548_57568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker57549_57569 = schema.core.checker(input_schema57548_57568);var output_checker57550_57570 = schema.core.checker(output_schema57547_57567);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___57566,output_schema57547_57567,input_schema57548_57568,input_checker57549_57569,output_checker57550_57570){
return (function render_icon(G__57551){var validate__837__auto__ = ufv___57566.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57551], null);var temp__4126__auto___57572 = (function (){var G__57559 = args__838__auto___57571;return (input_checker57549_57569.cljs$core$IFn$_invoke$arity$1 ? input_checker57549_57569.cljs$core$IFn$_invoke$arity$1(G__57559) : input_checker57549_57569.call(null,G__57559));
})();if(cljs.core.truth_(temp__4126__auto___57572))
{var error__839__auto___57573 = temp__4126__auto___57572;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57573], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57548_57568,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57571,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57573], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57561 = G__57551;var map__57562 = G__57561;var map__57562__$1 = ((cljs.core.seq_QMARK_(map__57562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57562):map__57562);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57562__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57562__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__57561__$1 = G__57561;while(true){
var map__57563 = G__57561__$1;var map__57563__$1 = ((cljs.core.seq_QMARK_(map__57563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57563):map__57563);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57563__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57563__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__57564 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__57564);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57574 = (function (){var G__57565 = o__840__auto__;return (output_checker57550_57570.cljs$core$IFn$_invoke$arity$1 ? output_checker57550_57570.cljs$core$IFn$_invoke$arity$1(G__57565) : output_checker57550_57570.call(null,G__57565));
})();if(cljs.core.truth_(temp__4126__auto___57574))
{var error__839__auto___57575 = temp__4126__auto___57574;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57575], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57547_57567,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57575], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57566,output_schema57547_57567,input_schema57548_57568,input_checker57549_57569,output_checker57550_57570))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema57547_57567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57548_57568], null)));
var ufv___57585 = schema.utils.use_fn_validation;var output_schema57576_57586 = schema.core.Any;var input_schema57577_57587 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker57578_57588 = schema.core.checker(input_schema57577_57587);var output_checker57579_57589 = schema.core.checker(output_schema57576_57586);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___57585,output_schema57576_57586,input_schema57577_57587,input_checker57578_57588,output_checker57579_57589){
return (function render_help(G__57580){var validate__837__auto__ = ufv___57585.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57580], null);var temp__4126__auto___57591 = (function (){var G__57583 = args__838__auto___57590;return (input_checker57578_57588.cljs$core$IFn$_invoke$arity$1 ? input_checker57578_57588.cljs$core$IFn$_invoke$arity$1(G__57583) : input_checker57578_57588.call(null,G__57583));
})();if(cljs.core.truth_(temp__4126__auto___57591))
{var error__839__auto___57592 = temp__4126__auto___57591;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57592], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57577_57587,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57590,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57592], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__57580;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57593 = (function (){var G__57584 = o__840__auto__;return (output_checker57579_57589.cljs$core$IFn$_invoke$arity$1 ? output_checker57579_57589.cljs$core$IFn$_invoke$arity$1(G__57584) : output_checker57579_57589.call(null,G__57584));
})();if(cljs.core.truth_(temp__4126__auto___57593))
{var error__839__auto___57594 = temp__4126__auto___57593;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57594], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57576_57586,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57594], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57585,output_schema57576_57586,input_schema57577_57587,input_checker57578_57588,output_checker57579_57589))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema57576_57586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57577_57587], null)));
var ufv___57613 = schema.utils.use_fn_validation;var output_schema57595_57614 = schema.core.Any;var input_schema57596_57615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker57597_57616 = schema.core.checker(input_schema57596_57615);var output_checker57598_57617 = schema.core.checker(output_schema57595_57614);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___57613,output_schema57595_57614,input_schema57596_57615,input_checker57597_57616,output_checker57598_57617){
return (function render_input_group(G__57599,G__57600){var validate__837__auto__ = ufv___57613.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57599,G__57600], null);var temp__4126__auto___57619 = (function (){var G__57607 = args__838__auto___57618;return (input_checker57597_57616.cljs$core$IFn$_invoke$arity$1 ? input_checker57597_57616.cljs$core$IFn$_invoke$arity$1(G__57607) : input_checker57597_57616.call(null,G__57607));
})();if(cljs.core.truth_(temp__4126__auto___57619))
{var error__839__auto___57620 = temp__4126__auto___57619;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57620], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57596_57615,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57618,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57620], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57609 = G__57599;var map__57610 = G__57609;var map__57610__$1 = ((cljs.core.seq_QMARK_(map__57610))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57610):map__57610);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57610__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57610__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__57600;var G__57609__$1 = G__57609;var items__$1 = items;while(true){
var map__57611 = G__57609__$1;var map__57611__$1 = ((cljs.core.seq_QMARK_(map__57611))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57611):map__57611);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57611__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57611__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19586__auto__ = addon_before__$1;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
{var temp__4126__auto___57621 = (function (){var G__57612 = o__840__auto__;return (output_checker57598_57617.cljs$core$IFn$_invoke$arity$1 ? output_checker57598_57617.cljs$core$IFn$_invoke$arity$1(G__57612) : output_checker57598_57617.call(null,G__57612));
})();if(cljs.core.truth_(temp__4126__auto___57621))
{var error__839__auto___57622 = temp__4126__auto___57621;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57622], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57595_57614,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57622], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57613,output_schema57595_57614,input_schema57596_57615,input_checker57597_57616,output_checker57598_57617))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema57595_57614,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57596_57615], null)));
var ufv___57640 = schema.utils.use_fn_validation;var output_schema57623_57641 = schema.core.Bool;var input_schema57624_57642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker57625_57643 = schema.core.checker(input_schema57624_57642);var output_checker57626_57644 = schema.core.checker(output_schema57623_57641);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___57640,output_schema57623_57641,input_schema57624_57642,input_checker57625_57643,output_checker57626_57644){
return (function checkbox_or_radio_QMARK_(G__57627){var validate__837__auto__ = ufv___57640.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57627], null);var temp__4126__auto___57646 = (function (){var G__57634 = args__838__auto___57645;return (input_checker57625_57643.cljs$core$IFn$_invoke$arity$1 ? input_checker57625_57643.cljs$core$IFn$_invoke$arity$1(G__57634) : input_checker57625_57643.call(null,G__57634));
})();if(cljs.core.truth_(temp__4126__auto___57646))
{var error__839__auto___57647 = temp__4126__auto___57646;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57647], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57624_57642,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57645,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57647], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57636 = G__57627;var map__57637 = G__57636;var map__57637__$1 = ((cljs.core.seq_QMARK_(map__57637))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57637):map__57637);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57637__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__57636__$1 = G__57636;while(true){
var map__57638 = G__57636__$1;var map__57638__$1 = ((cljs.core.seq_QMARK_(map__57638))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57638):map__57638);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57638__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57648 = (function (){var G__57639 = o__840__auto__;return (output_checker57626_57644.cljs$core$IFn$_invoke$arity$1 ? output_checker57626_57644.cljs$core$IFn$_invoke$arity$1(G__57639) : output_checker57626_57644.call(null,G__57639));
})();if(cljs.core.truth_(temp__4126__auto___57648))
{var error__839__auto___57649 = temp__4126__auto___57648;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57649], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57623_57641,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57649], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57640,output_schema57623_57641,input_schema57624_57642,input_checker57625_57643,output_checker57626_57644))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema57623_57641,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57624_57642], null)));
var ufv___57668 = schema.utils.use_fn_validation;var output_schema57650_57669 = om_bootstrap.types.Component;var input_schema57651_57670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker57652_57671 = schema.core.checker(input_schema57651_57670);var output_checker57653_57672 = schema.core.checker(output_schema57650_57669);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___57668,output_schema57650_57669,input_schema57651_57670,input_checker57652_57671,output_checker57653_57672){
return (function checkbox_or_radio_wrapper(G__57654,G__57655){var validate__837__auto__ = ufv___57668.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57654,G__57655], null);var temp__4126__auto___57674 = (function (){var G__57662 = args__838__auto___57673;return (input_checker57652_57671.cljs$core$IFn$_invoke$arity$1 ? input_checker57652_57671.cljs$core$IFn$_invoke$arity$1(G__57662) : input_checker57652_57671.call(null,G__57662));
})();if(cljs.core.truth_(temp__4126__auto___57674))
{var error__839__auto___57675 = temp__4126__auto___57674;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57675], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57651_57670,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57673,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57675], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57664 = G__57654;var map__57665 = G__57664;var map__57665__$1 = ((cljs.core.seq_QMARK_(map__57665))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57665):map__57665);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57665__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__57655;var G__57664__$1 = G__57664;var children__$1 = children;while(true){
var map__57666 = G__57664__$1;var map__57666__$1 = ((cljs.core.seq_QMARK_(map__57666))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57666):map__57666);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57666__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57676 = (function (){var G__57667 = o__840__auto__;return (output_checker57653_57672.cljs$core$IFn$_invoke$arity$1 ? output_checker57653_57672.cljs$core$IFn$_invoke$arity$1(G__57667) : output_checker57653_57672.call(null,G__57667));
})();if(cljs.core.truth_(temp__4126__auto___57676))
{var error__839__auto___57677 = temp__4126__auto___57676;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57677], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57650_57669,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57677], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57668,output_schema57650_57669,input_schema57651_57670,input_checker57652_57671,output_checker57653_57672))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema57650_57669,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57651_57670], null)));
var ufv___57706 = schema.utils.use_fn_validation;var output_schema57678_57707 = schema.core.Any;var input_schema57679_57708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema57683_57709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker57680_57710 = schema.core.checker(input_schema57679_57708);var output_checker57681_57711 = schema.core.checker(output_schema57678_57707);var input_checker57684_57712 = schema.core.checker(input_schema57683_57709);var output_checker57685_57713 = schema.core.checker(output_schema57678_57707);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___57706,output_schema57678_57707,input_schema57679_57708,input_schema57683_57709,input_checker57680_57710,output_checker57681_57711,input_checker57684_57712,output_checker57685_57713){
return (function() {
var render_label = null;
var render_label__1 = (function (G__57682){var validate__837__auto__ = ufv___57706.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57682], null);var temp__4126__auto___57715 = (function (){var G__57698 = args__838__auto___57714;return (input_checker57680_57710.cljs$core$IFn$_invoke$arity$1 ? input_checker57680_57710.cljs$core$IFn$_invoke$arity$1(G__57698) : input_checker57680_57710.call(null,G__57698));
})();if(cljs.core.truth_(temp__4126__auto___57715))
{var error__839__auto___57716 = temp__4126__auto___57715;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57716], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57679_57708,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57714,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57716], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__57682;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57717 = (function (){var G__57699 = o__840__auto__;return (output_checker57681_57711.cljs$core$IFn$_invoke$arity$1 ? output_checker57681_57711.cljs$core$IFn$_invoke$arity$1(G__57699) : output_checker57681_57711.call(null,G__57699));
})();if(cljs.core.truth_(temp__4126__auto___57717))
{var error__839__auto___57718 = temp__4126__auto___57717;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57718], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57678_57707,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57718], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__57686,G__57687){var validate__837__auto__ = ufv___57706.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57686,G__57687], null);var temp__4126__auto___57720 = (function (){var G__57700 = args__838__auto___57719;return (input_checker57684_57712.cljs$core$IFn$_invoke$arity$1 ? input_checker57684_57712.cljs$core$IFn$_invoke$arity$1(G__57700) : input_checker57684_57712.call(null,G__57700));
})();if(cljs.core.truth_(temp__4126__auto___57720))
{var error__839__auto___57721 = temp__4126__auto___57720;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57721], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57683_57709,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57719,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57721], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57702 = G__57686;var map__57703 = G__57702;var map__57703__$1 = ((cljs.core.seq_QMARK_(map__57703))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57703):map__57703);var input = map__57703__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57703__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57703__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__57687;var G__57702__$1 = G__57702;var child__$1 = child;while(true){
var map__57704 = G__57702__$1;var map__57704__$1 = ((cljs.core.seq_QMARK_(map__57704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57704):map__57704);var input__$1 = map__57704__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57704__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57704__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57722 = (function (){var G__57705 = o__840__auto__;return (output_checker57685_57713.cljs$core$IFn$_invoke$arity$1 ? output_checker57685_57713.cljs$core$IFn$_invoke$arity$1(G__57705) : output_checker57685_57713.call(null,G__57705));
})();if(cljs.core.truth_(temp__4126__auto___57722))
{var error__839__auto___57723 = temp__4126__auto___57722;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57723], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57678_57707,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57723], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__57686,G__57687){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__57686);
case 2:
return render_label__2.call(this,G__57686,G__57687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___57706,output_schema57678_57707,input_schema57679_57708,input_schema57683_57709,input_checker57680_57710,output_checker57681_57711,input_checker57684_57712,output_checker57685_57713))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema57678_57707,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57679_57708,input_schema57683_57709], null)));
var ufv___57742 = schema.utils.use_fn_validation;var output_schema57724_57743 = schema.core.Any;var input_schema57725_57744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker57726_57745 = schema.core.checker(input_schema57725_57744);var output_checker57727_57746 = schema.core.checker(output_schema57724_57743);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___57742,output_schema57724_57743,input_schema57725_57744,input_checker57726_57745,output_checker57727_57746){
return (function render_wrapper(G__57728,G__57729){var validate__837__auto__ = ufv___57742.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57728,G__57729], null);var temp__4126__auto___57748 = (function (){var G__57736 = args__838__auto___57747;return (input_checker57726_57745.cljs$core$IFn$_invoke$arity$1 ? input_checker57726_57745.cljs$core$IFn$_invoke$arity$1(G__57736) : input_checker57726_57745.call(null,G__57736));
})();if(cljs.core.truth_(temp__4126__auto___57748))
{var error__839__auto___57749 = temp__4126__auto___57748;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57749], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57725_57744,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57747,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57749], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57738 = G__57728;var map__57739 = G__57738;var map__57739__$1 = ((cljs.core.seq_QMARK_(map__57739))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57739):map__57739);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__57729;var G__57738__$1 = G__57738;var child__$1 = child;while(true){
var map__57740 = G__57738__$1;var map__57740__$1 = ((cljs.core.seq_QMARK_(map__57740))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57740):map__57740);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57740__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57750 = (function (){var G__57741 = o__840__auto__;return (output_checker57727_57746.cljs$core$IFn$_invoke$arity$1 ? output_checker57727_57746.cljs$core$IFn$_invoke$arity$1(G__57741) : output_checker57727_57746.call(null,G__57741));
})();if(cljs.core.truth_(temp__4126__auto___57750))
{var error__839__auto___57751 = temp__4126__auto___57750;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57751], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57724_57743,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57751], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57742,output_schema57724_57743,input_schema57725_57744,input_checker57726_57745,output_checker57727_57746))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema57724_57743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57725_57744], null)));
var ufv___57770 = schema.utils.use_fn_validation;var output_schema57752_57771 = om_bootstrap.types.Component;var input_schema57753_57772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker57754_57773 = schema.core.checker(input_schema57753_57772);var output_checker57755_57774 = schema.core.checker(output_schema57752_57771);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___57770,output_schema57752_57771,input_schema57753_57772,input_checker57754_57773,output_checker57755_57774){
return (function render_form_group(G__57756,G__57757){var validate__837__auto__ = ufv___57770.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57756,G__57757], null);var temp__4126__auto___57776 = (function (){var G__57764 = args__838__auto___57775;return (input_checker57754_57773.cljs$core$IFn$_invoke$arity$1 ? input_checker57754_57773.cljs$core$IFn$_invoke$arity$1(G__57764) : input_checker57754_57773.call(null,G__57764));
})();if(cljs.core.truth_(temp__4126__auto___57776))
{var error__839__auto___57777 = temp__4126__auto___57776;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57777], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57753_57772,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57775,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57777], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__57766 = G__57756;var map__57767 = G__57766;var map__57767__$1 = ((cljs.core.seq_QMARK_(map__57767))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57767):map__57767);var input = map__57767__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57767__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57767__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__57757;var G__57766__$1 = G__57766;var children__$1 = children;while(true){
var map__57768 = G__57766__$1;var map__57768__$1 = ((cljs.core.seq_QMARK_(map__57768))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57768):map__57768);var input__$1 = map__57768__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57768__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57768__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57778 = (function (){var G__57769 = o__840__auto__;return (output_checker57755_57774.cljs$core$IFn$_invoke$arity$1 ? output_checker57755_57774.cljs$core$IFn$_invoke$arity$1(G__57769) : output_checker57755_57774.call(null,G__57769));
})();if(cljs.core.truth_(temp__4126__auto___57778))
{var error__839__auto___57779 = temp__4126__auto___57778;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57779], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57752_57771,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57779], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57770,output_schema57752_57771,input_schema57753_57772,input_checker57754_57773,output_checker57755_57774))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema57752_57771,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57753_57772], null)));
var ufv___57793 = schema.utils.use_fn_validation;var output_schema57780_57794 = om_bootstrap.types.Component;var input_schema57781_57795 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker57782_57796 = schema.core.checker(input_schema57781_57795);var output_checker57783_57797 = schema.core.checker(output_schema57780_57794);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___57793,output_schema57780_57794,input_schema57781_57795,input_checker57782_57796,output_checker57783_57797){
return (function render_input(G__57784,G__57785,G__57786){var validate__837__auto__ = ufv___57793.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57798 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57784,G__57785,G__57786], null);var temp__4126__auto___57799 = (function (){var G__57790 = args__838__auto___57798;return (input_checker57782_57796.cljs$core$IFn$_invoke$arity$1 ? input_checker57782_57796.cljs$core$IFn$_invoke$arity$1(G__57790) : input_checker57782_57796.call(null,G__57790));
})();if(cljs.core.truth_(temp__4126__auto___57799))
{var error__839__auto___57800 = temp__4126__auto___57799;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57800], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57781_57795,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57798,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57800], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__57784;var attrs = G__57785;var children = G__57786;while(true){
var props = ((function (validate__837__auto__,ufv___57793,output_schema57780_57794,input_schema57781_57795,input_checker57782_57796,output_checker57783_57797){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___57793,output_schema57780_57794,input_schema57781_57795,input_checker57782_57796,output_checker57783_57797))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__57791 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__57791) {
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
{var temp__4126__auto___57802 = (function (){var G__57792 = o__840__auto__;return (output_checker57783_57797.cljs$core$IFn$_invoke$arity$1 ? output_checker57783_57797.cljs$core$IFn$_invoke$arity$1(G__57792) : output_checker57783_57797.call(null,G__57792));
})();if(cljs.core.truth_(temp__4126__auto___57802))
{var error__839__auto___57803 = temp__4126__auto___57802;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57803], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57780_57794,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57803], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57793,output_schema57780_57794,input_schema57781_57795,input_checker57782_57796,output_checker57783_57797))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema57780_57794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57781_57795], null)));
var ufv___57816 = schema.utils.use_fn_validation;var output_schema57804_57817 = om_bootstrap.types.Component;var input_schema57805_57818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker57806_57819 = schema.core.checker(input_schema57805_57818);var output_checker57807_57820 = schema.core.checker(output_schema57804_57817);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___57816,output_schema57804_57817,input_schema57805_57818,input_checker57806_57819,output_checker57807_57820){
return (function() { 
var input__delegate = function (G__57808,rest57809){var validate__837__auto__ = ufv___57816.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57821 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__57808,rest57809);var temp__4126__auto___57822 = (function (){var G__57813 = args__838__auto___57821;return (input_checker57806_57819.cljs$core$IFn$_invoke$arity$1 ? input_checker57806_57819.cljs$core$IFn$_invoke$arity$1(G__57813) : input_checker57806_57819.call(null,G__57813));
})();if(cljs.core.truth_(temp__4126__auto___57822))
{var error__839__auto___57823 = temp__4126__auto___57822;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57823], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57805_57818,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57821,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57823], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__57808;var children = rest57809;while(true){
var vec__57814 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57814,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57814,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57824 = (function (){var G__57815 = o__840__auto__;return (output_checker57807_57820.cljs$core$IFn$_invoke$arity$1 ? output_checker57807_57820.cljs$core$IFn$_invoke$arity$1(G__57815) : output_checker57807_57820.call(null,G__57815));
})();if(cljs.core.truth_(temp__4126__auto___57824))
{var error__839__auto___57825 = temp__4126__auto___57824;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57825], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57804_57817,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57825], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__57808,var_args){
var rest57809 = null;if (arguments.length > 1) {
  rest57809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__57808,rest57809);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__57826){
var G__57808 = cljs.core.first(arglist__57826);
var rest57809 = cljs.core.rest(arglist__57826);
return input__delegate(G__57808,rest57809);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___57816,output_schema57804_57817,input_schema57805_57818,input_checker57806_57819,output_checker57807_57820))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema57804_57817,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57805_57818], null)));
var ufv___57840 = schema.utils.use_fn_validation;var output_schema57827_57841 = om_bootstrap.types.Component;var input_schema57828_57842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker57829_57843 = schema.core.checker(input_schema57828_57842);var output_checker57830_57844 = schema.core.checker(output_schema57827_57841);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___57840,output_schema57827_57841,input_schema57828_57842,input_checker57829_57843,output_checker57830_57844){
return (function radio_option(G__57831){var validate__837__auto__ = ufv___57840.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57831], null);var temp__4126__auto___57846 = (function (){var G__57836 = args__838__auto___57845;return (input_checker57829_57843.cljs$core$IFn$_invoke$arity$1 ? input_checker57829_57843.cljs$core$IFn$_invoke$arity$1(G__57836) : input_checker57829_57843.call(null,G__57836));
})();if(cljs.core.truth_(temp__4126__auto___57846))
{var error__839__auto___57847 = temp__4126__auto___57846;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57847], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57828_57842,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57845,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57847], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__57831;while(true){
var vec__57837 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57837,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57837,(1),null);var map__57838 = bs;var map__57838__$1 = ((cljs.core.seq_QMARK_(map__57838))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57838):map__57838);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57838__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57838__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57838__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57848 = (function (){var G__57839 = o__840__auto__;return (output_checker57830_57844.cljs$core$IFn$_invoke$arity$1 ? output_checker57830_57844.cljs$core$IFn$_invoke$arity$1(G__57839) : output_checker57830_57844.call(null,G__57839));
})();if(cljs.core.truth_(temp__4126__auto___57848))
{var error__839__auto___57849 = temp__4126__auto___57848;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57849], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57827_57841,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57849], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57840,output_schema57827_57841,input_schema57828_57842,input_checker57829_57843,output_checker57830_57844))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema57827_57841,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57828_57842], null)));
var ufv___57880 = schema.utils.use_fn_validation;var output_schema57850_57881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema57851_57882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker57852_57883 = schema.core.checker(input_schema57851_57882);var output_checker57853_57884 = schema.core.checker(output_schema57850_57881);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___57880,output_schema57850_57881,input_schema57851_57882,input_checker57852_57883,output_checker57853_57884){
return (function options(G__57854,G__57855){var validate__837__auto__ = ufv___57880.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57885 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57854,G__57855], null);var temp__4126__auto___57886 = (function (){var G__57868 = args__838__auto___57885;return (input_checker57852_57883.cljs$core$IFn$_invoke$arity$1 ? input_checker57852_57883.cljs$core$IFn$_invoke$arity$1(G__57868) : input_checker57852_57883.call(null,G__57868));
})();if(cljs.core.truth_(temp__4126__auto___57886))
{var error__839__auto___57887 = temp__4126__auto___57886;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57887], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57851_57882,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57885,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57887], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__57854;var opts = G__57855;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__20990__auto__ = ((function (validate__837__auto__,ufv___57880,output_schema57850_57881,input_schema57851_57882,input_checker57852_57883,output_checker57853_57884){
return (function iter__57869(s__57870){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___57880,output_schema57850_57881,input_schema57851_57882,input_checker57852_57883,output_checker57853_57884){
return (function (){var s__57870__$1 = s__57870;while(true){
var temp__4126__auto__ = cljs.core.seq(s__57870__$1);if(temp__4126__auto__)
{var s__57870__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__57870__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__57870__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__57872 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__57871 = (0);while(true){
if((i__57871 < size__20989__auto__))
{var vec__57877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__57871);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57877,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57877,(1),null);cljs.core.chunk_append(b__57872,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__57888 = (i__57871 + (1));
i__57871 = G__57888;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57872),iter__57869(cljs.core.chunk_rest(s__57870__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57872),null);
}
} else
{var vec__57878 = cljs.core.first(s__57870__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57878,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57878,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__57869(cljs.core.rest(s__57870__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___57880,output_schema57850_57881,input_schema57851_57882,input_checker57852_57883,output_checker57853_57884))
,null,null));
});})(validate__837__auto__,ufv___57880,output_schema57850_57881,input_schema57851_57882,input_checker57852_57883,output_checker57853_57884))
;return iter__20990__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57889 = (function (){var G__57879 = o__840__auto__;return (output_checker57853_57884.cljs$core$IFn$_invoke$arity$1 ? output_checker57853_57884.cljs$core$IFn$_invoke$arity$1(G__57879) : output_checker57853_57884.call(null,G__57879));
})();if(cljs.core.truth_(temp__4126__auto___57889))
{var error__839__auto___57890 = temp__4126__auto___57889;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57890], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57850_57881,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57890], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___57880,output_schema57850_57881,input_schema57851_57882,input_checker57852_57883,output_checker57853_57884))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema57850_57881,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57851_57882], null)));
//# sourceMappingURL=input.js.map