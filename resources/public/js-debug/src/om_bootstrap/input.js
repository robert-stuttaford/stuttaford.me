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
var ufv___50666 = schema.utils.use_fn_validation;var output_schema50653_50667 = schema.core.Str;var input_schema50654_50668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker50655_50669 = schema.core.checker(input_schema50654_50668);var output_checker50656_50670 = schema.core.checker(output_schema50653_50667);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___50666,output_schema50653_50667,input_schema50654_50668,input_checker50655_50669,output_checker50656_50670){
return (function class_set(G__50657){var validate__837__auto__ = ufv___50666.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50657], null);var temp__4126__auto___50672 = (function (){var G__50662 = args__838__auto___50671;return (input_checker50655_50669.cljs$core$IFn$_invoke$arity$1 ? input_checker50655_50669.cljs$core$IFn$_invoke$arity$1(G__50662) : input_checker50655_50669.call(null,G__50662));
})();if(cljs.core.truth_(temp__4126__auto___50672))
{var error__839__auto___50673 = temp__4126__auto___50672;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50673], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50654_50668,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50671,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50673], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__50657;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___50666,output_schema50653_50667,input_schema50654_50668,input_checker50655_50669,output_checker50656_50670){
return (function (p__50663){var vec__50664 = p__50663;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50664,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50664,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___50666,output_schema50653_50667,input_schema50654_50668,input_checker50655_50669,output_checker50656_50670))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50674 = (function (){var G__50665 = o__840__auto__;return (output_checker50656_50670.cljs$core$IFn$_invoke$arity$1 ? output_checker50656_50670.cljs$core$IFn$_invoke$arity$1(G__50665) : output_checker50656_50670.call(null,G__50665));
})();if(cljs.core.truth_(temp__4126__auto___50674))
{var error__839__auto___50675 = temp__4126__auto___50674;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50675], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50653_50667,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50675], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50666,output_schema50653_50667,input_schema50654_50668,input_checker50655_50669,output_checker50656_50670))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema50653_50667,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50654_50668], null)));
var ufv___50687 = schema.utils.use_fn_validation;var output_schema50676_50688 = om_bootstrap.types.Component;var input_schema50677_50689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker50678_50690 = schema.core.checker(input_schema50677_50689);var output_checker50679_50691 = schema.core.checker(output_schema50676_50688);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___50687,output_schema50676_50688,input_schema50677_50689,input_checker50678_50690,output_checker50679_50691){
return (function glyph(G__50680){var validate__837__auto__ = ufv___50687.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50680], null);var temp__4126__auto___50693 = (function (){var G__50684 = args__838__auto___50692;return (input_checker50678_50690.cljs$core$IFn$_invoke$arity$1 ? input_checker50678_50690.cljs$core$IFn$_invoke$arity$1(G__50684) : input_checker50678_50690.call(null,G__50684));
})();if(cljs.core.truth_(temp__4126__auto___50693))
{var error__839__auto___50694 = temp__4126__auto___50693;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50694], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50677_50689,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50692,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50694], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__50680;while(true){
var G__50685 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__50685);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50695 = (function (){var G__50686 = o__840__auto__;return (output_checker50679_50691.cljs$core$IFn$_invoke$arity$1 ? output_checker50679_50691.cljs$core$IFn$_invoke$arity$1(G__50686) : output_checker50679_50691.call(null,G__50686));
})();if(cljs.core.truth_(temp__4126__auto___50695))
{var error__839__auto___50696 = temp__4126__auto___50695;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50696], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50676_50688,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50696], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50687,output_schema50676_50688,input_schema50677_50689,input_checker50678_50690,output_checker50679_50691))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema50676_50688,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50677_50689], null)));
var ufv___50716 = schema.utils.use_fn_validation;var output_schema50697_50717 = om_bootstrap.types.Component;var input_schema50698_50718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker50699_50719 = schema.core.checker(input_schema50698_50718);var output_checker50700_50720 = schema.core.checker(output_schema50697_50717);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___50716,output_schema50697_50717,input_schema50698_50718,input_checker50699_50719,output_checker50700_50720){
return (function render_icon(G__50701){var validate__837__auto__ = ufv___50716.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50701], null);var temp__4126__auto___50722 = (function (){var G__50709 = args__838__auto___50721;return (input_checker50699_50719.cljs$core$IFn$_invoke$arity$1 ? input_checker50699_50719.cljs$core$IFn$_invoke$arity$1(G__50709) : input_checker50699_50719.call(null,G__50709));
})();if(cljs.core.truth_(temp__4126__auto___50722))
{var error__839__auto___50723 = temp__4126__auto___50722;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50723], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50698_50718,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50721,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50723], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__50711 = G__50701;var map__50712 = G__50711;var map__50712__$1 = ((cljs.core.seq_QMARK_(map__50712))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50712):map__50712);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50712__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50712__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__50711__$1 = G__50711;while(true){
var map__50713 = G__50711__$1;var map__50713__$1 = ((cljs.core.seq_QMARK_(map__50713))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50713):map__50713);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50713__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50713__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__50714 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__50714);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50724 = (function (){var G__50715 = o__840__auto__;return (output_checker50700_50720.cljs$core$IFn$_invoke$arity$1 ? output_checker50700_50720.cljs$core$IFn$_invoke$arity$1(G__50715) : output_checker50700_50720.call(null,G__50715));
})();if(cljs.core.truth_(temp__4126__auto___50724))
{var error__839__auto___50725 = temp__4126__auto___50724;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50725], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50697_50717,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50725], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50716,output_schema50697_50717,input_schema50698_50718,input_checker50699_50719,output_checker50700_50720))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema50697_50717,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50698_50718], null)));
var ufv___50735 = schema.utils.use_fn_validation;var output_schema50726_50736 = schema.core.Any;var input_schema50727_50737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker50728_50738 = schema.core.checker(input_schema50727_50737);var output_checker50729_50739 = schema.core.checker(output_schema50726_50736);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___50735,output_schema50726_50736,input_schema50727_50737,input_checker50728_50738,output_checker50729_50739){
return (function render_help(G__50730){var validate__837__auto__ = ufv___50735.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50730], null);var temp__4126__auto___50741 = (function (){var G__50733 = args__838__auto___50740;return (input_checker50728_50738.cljs$core$IFn$_invoke$arity$1 ? input_checker50728_50738.cljs$core$IFn$_invoke$arity$1(G__50733) : input_checker50728_50738.call(null,G__50733));
})();if(cljs.core.truth_(temp__4126__auto___50741))
{var error__839__auto___50742 = temp__4126__auto___50741;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50742], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50727_50737,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50740,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50742], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__50730;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50743 = (function (){var G__50734 = o__840__auto__;return (output_checker50729_50739.cljs$core$IFn$_invoke$arity$1 ? output_checker50729_50739.cljs$core$IFn$_invoke$arity$1(G__50734) : output_checker50729_50739.call(null,G__50734));
})();if(cljs.core.truth_(temp__4126__auto___50743))
{var error__839__auto___50744 = temp__4126__auto___50743;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50744], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50726_50736,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50744], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50735,output_schema50726_50736,input_schema50727_50737,input_checker50728_50738,output_checker50729_50739))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema50726_50736,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50727_50737], null)));
var ufv___50763 = schema.utils.use_fn_validation;var output_schema50745_50764 = schema.core.Any;var input_schema50746_50765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker50747_50766 = schema.core.checker(input_schema50746_50765);var output_checker50748_50767 = schema.core.checker(output_schema50745_50764);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___50763,output_schema50745_50764,input_schema50746_50765,input_checker50747_50766,output_checker50748_50767){
return (function render_input_group(G__50749,G__50750){var validate__837__auto__ = ufv___50763.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50749,G__50750], null);var temp__4126__auto___50769 = (function (){var G__50757 = args__838__auto___50768;return (input_checker50747_50766.cljs$core$IFn$_invoke$arity$1 ? input_checker50747_50766.cljs$core$IFn$_invoke$arity$1(G__50757) : input_checker50747_50766.call(null,G__50757));
})();if(cljs.core.truth_(temp__4126__auto___50769))
{var error__839__auto___50770 = temp__4126__auto___50769;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50770], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50746_50765,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50768,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50770], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__50759 = G__50749;var map__50760 = G__50759;var map__50760__$1 = ((cljs.core.seq_QMARK_(map__50760))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50760):map__50760);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50760__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50760__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__50750;var G__50759__$1 = G__50759;var items__$1 = items;while(true){
var map__50761 = G__50759__$1;var map__50761__$1 = ((cljs.core.seq_QMARK_(map__50761))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50761):map__50761);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50761__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50761__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19289__auto__ = addon_before__$1;if(cljs.core.truth_(or__19289__auto__))
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
{var temp__4126__auto___50771 = (function (){var G__50762 = o__840__auto__;return (output_checker50748_50767.cljs$core$IFn$_invoke$arity$1 ? output_checker50748_50767.cljs$core$IFn$_invoke$arity$1(G__50762) : output_checker50748_50767.call(null,G__50762));
})();if(cljs.core.truth_(temp__4126__auto___50771))
{var error__839__auto___50772 = temp__4126__auto___50771;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50772], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50745_50764,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50772], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50763,output_schema50745_50764,input_schema50746_50765,input_checker50747_50766,output_checker50748_50767))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema50745_50764,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50746_50765], null)));
var ufv___50790 = schema.utils.use_fn_validation;var output_schema50773_50791 = schema.core.Bool;var input_schema50774_50792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker50775_50793 = schema.core.checker(input_schema50774_50792);var output_checker50776_50794 = schema.core.checker(output_schema50773_50791);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___50790,output_schema50773_50791,input_schema50774_50792,input_checker50775_50793,output_checker50776_50794){
return (function checkbox_or_radio_QMARK_(G__50777){var validate__837__auto__ = ufv___50790.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50777], null);var temp__4126__auto___50796 = (function (){var G__50784 = args__838__auto___50795;return (input_checker50775_50793.cljs$core$IFn$_invoke$arity$1 ? input_checker50775_50793.cljs$core$IFn$_invoke$arity$1(G__50784) : input_checker50775_50793.call(null,G__50784));
})();if(cljs.core.truth_(temp__4126__auto___50796))
{var error__839__auto___50797 = temp__4126__auto___50796;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50797], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50774_50792,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50795,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50797], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__50786 = G__50777;var map__50787 = G__50786;var map__50787__$1 = ((cljs.core.seq_QMARK_(map__50787))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50787):map__50787);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__50786__$1 = G__50786;while(true){
var map__50788 = G__50786__$1;var map__50788__$1 = ((cljs.core.seq_QMARK_(map__50788))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50788):map__50788);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50788__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50798 = (function (){var G__50789 = o__840__auto__;return (output_checker50776_50794.cljs$core$IFn$_invoke$arity$1 ? output_checker50776_50794.cljs$core$IFn$_invoke$arity$1(G__50789) : output_checker50776_50794.call(null,G__50789));
})();if(cljs.core.truth_(temp__4126__auto___50798))
{var error__839__auto___50799 = temp__4126__auto___50798;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50799], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50773_50791,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50799], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50790,output_schema50773_50791,input_schema50774_50792,input_checker50775_50793,output_checker50776_50794))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema50773_50791,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50774_50792], null)));
var ufv___50818 = schema.utils.use_fn_validation;var output_schema50800_50819 = om_bootstrap.types.Component;var input_schema50801_50820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker50802_50821 = schema.core.checker(input_schema50801_50820);var output_checker50803_50822 = schema.core.checker(output_schema50800_50819);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___50818,output_schema50800_50819,input_schema50801_50820,input_checker50802_50821,output_checker50803_50822){
return (function checkbox_or_radio_wrapper(G__50804,G__50805){var validate__837__auto__ = ufv___50818.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50804,G__50805], null);var temp__4126__auto___50824 = (function (){var G__50812 = args__838__auto___50823;return (input_checker50802_50821.cljs$core$IFn$_invoke$arity$1 ? input_checker50802_50821.cljs$core$IFn$_invoke$arity$1(G__50812) : input_checker50802_50821.call(null,G__50812));
})();if(cljs.core.truth_(temp__4126__auto___50824))
{var error__839__auto___50825 = temp__4126__auto___50824;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50825], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50801_50820,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50823,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50825], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__50814 = G__50804;var map__50815 = G__50814;var map__50815__$1 = ((cljs.core.seq_QMARK_(map__50815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50815):map__50815);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__50805;var G__50814__$1 = G__50814;var children__$1 = children;while(true){
var map__50816 = G__50814__$1;var map__50816__$1 = ((cljs.core.seq_QMARK_(map__50816))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50816):map__50816);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50826 = (function (){var G__50817 = o__840__auto__;return (output_checker50803_50822.cljs$core$IFn$_invoke$arity$1 ? output_checker50803_50822.cljs$core$IFn$_invoke$arity$1(G__50817) : output_checker50803_50822.call(null,G__50817));
})();if(cljs.core.truth_(temp__4126__auto___50826))
{var error__839__auto___50827 = temp__4126__auto___50826;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50827], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50800_50819,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50827], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50818,output_schema50800_50819,input_schema50801_50820,input_checker50802_50821,output_checker50803_50822))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema50800_50819,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50801_50820], null)));
var ufv___50856 = schema.utils.use_fn_validation;var output_schema50828_50857 = schema.core.Any;var input_schema50829_50858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema50833_50859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker50830_50860 = schema.core.checker(input_schema50829_50858);var output_checker50831_50861 = schema.core.checker(output_schema50828_50857);var input_checker50834_50862 = schema.core.checker(input_schema50833_50859);var output_checker50835_50863 = schema.core.checker(output_schema50828_50857);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___50856,output_schema50828_50857,input_schema50829_50858,input_schema50833_50859,input_checker50830_50860,output_checker50831_50861,input_checker50834_50862,output_checker50835_50863){
return (function() {
var render_label = null;
var render_label__1 = (function (G__50832){var validate__837__auto__ = ufv___50856.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50832], null);var temp__4126__auto___50865 = (function (){var G__50848 = args__838__auto___50864;return (input_checker50830_50860.cljs$core$IFn$_invoke$arity$1 ? input_checker50830_50860.cljs$core$IFn$_invoke$arity$1(G__50848) : input_checker50830_50860.call(null,G__50848));
})();if(cljs.core.truth_(temp__4126__auto___50865))
{var error__839__auto___50866 = temp__4126__auto___50865;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50866], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50829_50858,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50864,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50866], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__50832;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50867 = (function (){var G__50849 = o__840__auto__;return (output_checker50831_50861.cljs$core$IFn$_invoke$arity$1 ? output_checker50831_50861.cljs$core$IFn$_invoke$arity$1(G__50849) : output_checker50831_50861.call(null,G__50849));
})();if(cljs.core.truth_(temp__4126__auto___50867))
{var error__839__auto___50868 = temp__4126__auto___50867;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50868], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50828_50857,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50868], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__50836,G__50837){var validate__837__auto__ = ufv___50856.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50836,G__50837], null);var temp__4126__auto___50870 = (function (){var G__50850 = args__838__auto___50869;return (input_checker50834_50862.cljs$core$IFn$_invoke$arity$1 ? input_checker50834_50862.cljs$core$IFn$_invoke$arity$1(G__50850) : input_checker50834_50862.call(null,G__50850));
})();if(cljs.core.truth_(temp__4126__auto___50870))
{var error__839__auto___50871 = temp__4126__auto___50870;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50871], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50833_50859,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50869,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50871], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__50852 = G__50836;var map__50853 = G__50852;var map__50853__$1 = ((cljs.core.seq_QMARK_(map__50853))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50853):map__50853);var input = map__50853__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50853__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50853__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__50837;var G__50852__$1 = G__50852;var child__$1 = child;while(true){
var map__50854 = G__50852__$1;var map__50854__$1 = ((cljs.core.seq_QMARK_(map__50854))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50854):map__50854);var input__$1 = map__50854__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50854__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50854__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50872 = (function (){var G__50855 = o__840__auto__;return (output_checker50835_50863.cljs$core$IFn$_invoke$arity$1 ? output_checker50835_50863.cljs$core$IFn$_invoke$arity$1(G__50855) : output_checker50835_50863.call(null,G__50855));
})();if(cljs.core.truth_(temp__4126__auto___50872))
{var error__839__auto___50873 = temp__4126__auto___50872;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50873], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50828_50857,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50873], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__50836,G__50837){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__50836);
case 2:
return render_label__2.call(this,G__50836,G__50837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___50856,output_schema50828_50857,input_schema50829_50858,input_schema50833_50859,input_checker50830_50860,output_checker50831_50861,input_checker50834_50862,output_checker50835_50863))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema50828_50857,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50829_50858,input_schema50833_50859], null)));
var ufv___50892 = schema.utils.use_fn_validation;var output_schema50874_50893 = schema.core.Any;var input_schema50875_50894 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker50876_50895 = schema.core.checker(input_schema50875_50894);var output_checker50877_50896 = schema.core.checker(output_schema50874_50893);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___50892,output_schema50874_50893,input_schema50875_50894,input_checker50876_50895,output_checker50877_50896){
return (function render_wrapper(G__50878,G__50879){var validate__837__auto__ = ufv___50892.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50878,G__50879], null);var temp__4126__auto___50898 = (function (){var G__50886 = args__838__auto___50897;return (input_checker50876_50895.cljs$core$IFn$_invoke$arity$1 ? input_checker50876_50895.cljs$core$IFn$_invoke$arity$1(G__50886) : input_checker50876_50895.call(null,G__50886));
})();if(cljs.core.truth_(temp__4126__auto___50898))
{var error__839__auto___50899 = temp__4126__auto___50898;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50899], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50875_50894,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50897,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50899], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__50888 = G__50878;var map__50889 = G__50888;var map__50889__$1 = ((cljs.core.seq_QMARK_(map__50889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50889):map__50889);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50889__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__50879;var G__50888__$1 = G__50888;var child__$1 = child;while(true){
var map__50890 = G__50888__$1;var map__50890__$1 = ((cljs.core.seq_QMARK_(map__50890))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50890):map__50890);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50890__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50900 = (function (){var G__50891 = o__840__auto__;return (output_checker50877_50896.cljs$core$IFn$_invoke$arity$1 ? output_checker50877_50896.cljs$core$IFn$_invoke$arity$1(G__50891) : output_checker50877_50896.call(null,G__50891));
})();if(cljs.core.truth_(temp__4126__auto___50900))
{var error__839__auto___50901 = temp__4126__auto___50900;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50901], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50874_50893,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50901], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50892,output_schema50874_50893,input_schema50875_50894,input_checker50876_50895,output_checker50877_50896))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema50874_50893,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50875_50894], null)));
var ufv___50920 = schema.utils.use_fn_validation;var output_schema50902_50921 = om_bootstrap.types.Component;var input_schema50903_50922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker50904_50923 = schema.core.checker(input_schema50903_50922);var output_checker50905_50924 = schema.core.checker(output_schema50902_50921);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___50920,output_schema50902_50921,input_schema50903_50922,input_checker50904_50923,output_checker50905_50924){
return (function render_form_group(G__50906,G__50907){var validate__837__auto__ = ufv___50920.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50906,G__50907], null);var temp__4126__auto___50926 = (function (){var G__50914 = args__838__auto___50925;return (input_checker50904_50923.cljs$core$IFn$_invoke$arity$1 ? input_checker50904_50923.cljs$core$IFn$_invoke$arity$1(G__50914) : input_checker50904_50923.call(null,G__50914));
})();if(cljs.core.truth_(temp__4126__auto___50926))
{var error__839__auto___50927 = temp__4126__auto___50926;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50927], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50903_50922,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50925,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50927], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__50916 = G__50906;var map__50917 = G__50916;var map__50917__$1 = ((cljs.core.seq_QMARK_(map__50917))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50917):map__50917);var input = map__50917__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50917__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50917__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__50907;var G__50916__$1 = G__50916;var children__$1 = children;while(true){
var map__50918 = G__50916__$1;var map__50918__$1 = ((cljs.core.seq_QMARK_(map__50918))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50918):map__50918);var input__$1 = map__50918__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50928 = (function (){var G__50919 = o__840__auto__;return (output_checker50905_50924.cljs$core$IFn$_invoke$arity$1 ? output_checker50905_50924.cljs$core$IFn$_invoke$arity$1(G__50919) : output_checker50905_50924.call(null,G__50919));
})();if(cljs.core.truth_(temp__4126__auto___50928))
{var error__839__auto___50929 = temp__4126__auto___50928;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50929], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50902_50921,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50929], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50920,output_schema50902_50921,input_schema50903_50922,input_checker50904_50923,output_checker50905_50924))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema50902_50921,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50903_50922], null)));
var ufv___50943 = schema.utils.use_fn_validation;var output_schema50930_50944 = om_bootstrap.types.Component;var input_schema50931_50945 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker50932_50946 = schema.core.checker(input_schema50931_50945);var output_checker50933_50947 = schema.core.checker(output_schema50930_50944);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___50943,output_schema50930_50944,input_schema50931_50945,input_checker50932_50946,output_checker50933_50947){
return (function render_input(G__50934,G__50935,G__50936){var validate__837__auto__ = ufv___50943.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50948 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50934,G__50935,G__50936], null);var temp__4126__auto___50949 = (function (){var G__50940 = args__838__auto___50948;return (input_checker50932_50946.cljs$core$IFn$_invoke$arity$1 ? input_checker50932_50946.cljs$core$IFn$_invoke$arity$1(G__50940) : input_checker50932_50946.call(null,G__50940));
})();if(cljs.core.truth_(temp__4126__auto___50949))
{var error__839__auto___50950 = temp__4126__auto___50949;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50950], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50931_50945,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50948,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50950], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__50934;var attrs = G__50935;var children = G__50936;while(true){
var props = ((function (validate__837__auto__,ufv___50943,output_schema50930_50944,input_schema50931_50945,input_checker50932_50946,output_checker50933_50947){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___50943,output_schema50930_50944,input_schema50931_50945,input_checker50932_50946,output_checker50933_50947))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__50941 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__50941) {
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
{var temp__4126__auto___50952 = (function (){var G__50942 = o__840__auto__;return (output_checker50933_50947.cljs$core$IFn$_invoke$arity$1 ? output_checker50933_50947.cljs$core$IFn$_invoke$arity$1(G__50942) : output_checker50933_50947.call(null,G__50942));
})();if(cljs.core.truth_(temp__4126__auto___50952))
{var error__839__auto___50953 = temp__4126__auto___50952;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50953], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50930_50944,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50953], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50943,output_schema50930_50944,input_schema50931_50945,input_checker50932_50946,output_checker50933_50947))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema50930_50944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50931_50945], null)));
var ufv___50966 = schema.utils.use_fn_validation;var output_schema50954_50967 = om_bootstrap.types.Component;var input_schema50955_50968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker50956_50969 = schema.core.checker(input_schema50955_50968);var output_checker50957_50970 = schema.core.checker(output_schema50954_50967);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___50966,output_schema50954_50967,input_schema50955_50968,input_checker50956_50969,output_checker50957_50970){
return (function() { 
var input__delegate = function (G__50958,rest50959){var validate__837__auto__ = ufv___50966.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50971 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__50958,rest50959);var temp__4126__auto___50972 = (function (){var G__50963 = args__838__auto___50971;return (input_checker50956_50969.cljs$core$IFn$_invoke$arity$1 ? input_checker50956_50969.cljs$core$IFn$_invoke$arity$1(G__50963) : input_checker50956_50969.call(null,G__50963));
})();if(cljs.core.truth_(temp__4126__auto___50972))
{var error__839__auto___50973 = temp__4126__auto___50972;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50973], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50955_50968,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50971,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50973], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__50958;var children = rest50959;while(true){
var vec__50964 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50964,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50964,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50974 = (function (){var G__50965 = o__840__auto__;return (output_checker50957_50970.cljs$core$IFn$_invoke$arity$1 ? output_checker50957_50970.cljs$core$IFn$_invoke$arity$1(G__50965) : output_checker50957_50970.call(null,G__50965));
})();if(cljs.core.truth_(temp__4126__auto___50974))
{var error__839__auto___50975 = temp__4126__auto___50974;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50975], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50954_50967,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50975], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__50958,var_args){
var rest50959 = null;if (arguments.length > 1) {
  rest50959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__50958,rest50959);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__50976){
var G__50958 = cljs.core.first(arglist__50976);
var rest50959 = cljs.core.rest(arglist__50976);
return input__delegate(G__50958,rest50959);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___50966,output_schema50954_50967,input_schema50955_50968,input_checker50956_50969,output_checker50957_50970))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema50954_50967,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50955_50968], null)));
var ufv___50990 = schema.utils.use_fn_validation;var output_schema50977_50991 = om_bootstrap.types.Component;var input_schema50978_50992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker50979_50993 = schema.core.checker(input_schema50978_50992);var output_checker50980_50994 = schema.core.checker(output_schema50977_50991);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___50990,output_schema50977_50991,input_schema50978_50992,input_checker50979_50993,output_checker50980_50994){
return (function radio_option(G__50981){var validate__837__auto__ = ufv___50990.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50995 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50981], null);var temp__4126__auto___50996 = (function (){var G__50986 = args__838__auto___50995;return (input_checker50979_50993.cljs$core$IFn$_invoke$arity$1 ? input_checker50979_50993.cljs$core$IFn$_invoke$arity$1(G__50986) : input_checker50979_50993.call(null,G__50986));
})();if(cljs.core.truth_(temp__4126__auto___50996))
{var error__839__auto___50997 = temp__4126__auto___50996;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50997], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50978_50992,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50995,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50997], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__50981;while(true){
var vec__50987 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50987,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50987,(1),null);var map__50988 = bs;var map__50988__$1 = ((cljs.core.seq_QMARK_(map__50988))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50988):map__50988);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50998 = (function (){var G__50989 = o__840__auto__;return (output_checker50980_50994.cljs$core$IFn$_invoke$arity$1 ? output_checker50980_50994.cljs$core$IFn$_invoke$arity$1(G__50989) : output_checker50980_50994.call(null,G__50989));
})();if(cljs.core.truth_(temp__4126__auto___50998))
{var error__839__auto___50999 = temp__4126__auto___50998;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50999], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50977_50991,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50999], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___50990,output_schema50977_50991,input_schema50978_50992,input_checker50979_50993,output_checker50980_50994))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema50977_50991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50978_50992], null)));
var ufv___51030 = schema.utils.use_fn_validation;var output_schema51000_51031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema51001_51032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker51002_51033 = schema.core.checker(input_schema51001_51032);var output_checker51003_51034 = schema.core.checker(output_schema51000_51031);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___51030,output_schema51000_51031,input_schema51001_51032,input_checker51002_51033,output_checker51003_51034){
return (function options(G__51004,G__51005){var validate__837__auto__ = ufv___51030.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51004,G__51005], null);var temp__4126__auto___51036 = (function (){var G__51018 = args__838__auto___51035;return (input_checker51002_51033.cljs$core$IFn$_invoke$arity$1 ? input_checker51002_51033.cljs$core$IFn$_invoke$arity$1(G__51018) : input_checker51002_51033.call(null,G__51018));
})();if(cljs.core.truth_(temp__4126__auto___51036))
{var error__839__auto___51037 = temp__4126__auto___51036;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51037], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51001_51032,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51035,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51037], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__51004;var opts = G__51005;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__20684__auto__ = ((function (validate__837__auto__,ufv___51030,output_schema51000_51031,input_schema51001_51032,input_checker51002_51033,output_checker51003_51034){
return (function iter__51019(s__51020){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___51030,output_schema51000_51031,input_schema51001_51032,input_checker51002_51033,output_checker51003_51034){
return (function (){var s__51020__$1 = s__51020;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51020__$1);if(temp__4126__auto__)
{var s__51020__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51020__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__51020__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__51022 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__51021 = (0);while(true){
if((i__51021 < size__20683__auto__))
{var vec__51027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__51021);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51027,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51027,(1),null);cljs.core.chunk_append(b__51022,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__51038 = (i__51021 + (1));
i__51021 = G__51038;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51022),iter__51019(cljs.core.chunk_rest(s__51020__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51022),null);
}
} else
{var vec__51028 = cljs.core.first(s__51020__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51028,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51028,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__51019(cljs.core.rest(s__51020__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___51030,output_schema51000_51031,input_schema51001_51032,input_checker51002_51033,output_checker51003_51034))
,null,null));
});})(validate__837__auto__,ufv___51030,output_schema51000_51031,input_schema51001_51032,input_checker51002_51033,output_checker51003_51034))
;return iter__20684__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51039 = (function (){var G__51029 = o__840__auto__;return (output_checker51003_51034.cljs$core$IFn$_invoke$arity$1 ? output_checker51003_51034.cljs$core$IFn$_invoke$arity$1(G__51029) : output_checker51003_51034.call(null,G__51029));
})();if(cljs.core.truth_(temp__4126__auto___51039))
{var error__839__auto___51040 = temp__4126__auto___51039;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51040], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51000_51031,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51040], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___51030,output_schema51000_51031,input_schema51001_51032,input_checker51002_51033,output_checker51003_51034))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema51000_51031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51001_51032], null)));
//# sourceMappingURL=input.js.map