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
var ufv___39930 = schema.utils.use_fn_validation;var output_schema39917_39931 = schema.core.Str;var input_schema39918_39932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.Keyword], 0)),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker39919_39933 = schema.core.checker(input_schema39918_39932);var output_checker39920_39934 = schema.core.checker(output_schema39917_39931);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___39930,output_schema39917_39931,input_schema39918_39932,input_checker39919_39933,output_checker39920_39934){
return (function class_set(G__39921){var validate__837__auto__ = ufv___39930.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39921], null);var temp__4126__auto___39936 = (function (){var G__39926 = args__838__auto___39935;return (input_checker39919_39933.cljs$core$IFn$_invoke$arity$1 ? input_checker39919_39933.cljs$core$IFn$_invoke$arity$1(G__39926) : input_checker39919_39933.call(null,G__39926));
})();if(cljs.core.truth_(temp__4126__auto___39936))
{var error__839__auto___39937 = temp__4126__auto___39936;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39937], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39918_39932,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39935,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39937], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var klasses = G__39921;while(true){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (validate__837__auto__,ufv___39930,output_schema39917_39931,input_schema39918_39932,input_checker39919_39933,output_checker39920_39934){
return (function (p__39927){var vec__39928 = p__39927;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39928,(0),null);var keep_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39928,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k)], null);
} else
{return null;
}
});})(validate__837__auto__,ufv___39930,output_schema39917_39931,input_schema39918_39932,input_checker39919_39933,output_checker39920_39934))
,cljs.core.array_seq([klasses], 0)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39938 = (function (){var G__39929 = o__840__auto__;return (output_checker39920_39934.cljs$core$IFn$_invoke$arity$1 ? output_checker39920_39934.cljs$core$IFn$_invoke$arity$1(G__39929) : output_checker39920_39934.call(null,G__39929));
})();if(cljs.core.truth_(temp__4126__auto___39938))
{var error__839__auto___39939 = temp__4126__auto___39938;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39939], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39917_39931,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39939], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39930,output_schema39917_39931,input_schema39918_39932,input_checker39919_39933,output_checker39920_39934))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.class_set),schema.core.make_fn_schema(output_schema39917_39931,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39918_39932], null)));
var ufv___39951 = schema.utils.use_fn_validation;var output_schema39940_39952 = om_bootstrap.types.Component;var input_schema39941_39953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker39942_39954 = schema.core.checker(input_schema39941_39953);var output_checker39943_39955 = schema.core.checker(output_schema39940_39952);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___39951,output_schema39940_39952,input_schema39941_39953,input_checker39942_39954,output_checker39943_39955){
return (function glyph(G__39944){var validate__837__auto__ = ufv___39951.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39944], null);var temp__4126__auto___39957 = (function (){var G__39948 = args__838__auto___39956;return (input_checker39942_39954.cljs$core$IFn$_invoke$arity$1 ? input_checker39942_39954.cljs$core$IFn$_invoke$arity$1(G__39948) : input_checker39942_39954.call(null,G__39948));
})();if(cljs.core.truth_(temp__4126__auto___39957))
{var error__839__auto___39958 = temp__4126__auto___39957;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39958], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39941_39953,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39956,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39958], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var glyph_name = G__39944;while(true){
var G__39949 = {"className": om_tools.dom.format_opts(("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))};return React.DOM.span(G__39949);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39959 = (function (){var G__39950 = o__840__auto__;return (output_checker39943_39955.cljs$core$IFn$_invoke$arity$1 ? output_checker39943_39955.cljs$core$IFn$_invoke$arity$1(G__39950) : output_checker39943_39955.call(null,G__39950));
})();if(cljs.core.truth_(temp__4126__auto___39959))
{var error__839__auto___39960 = temp__4126__auto___39959;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39960], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39940_39952,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39960], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39951,output_schema39940_39952,input_schema39941_39953,input_checker39942_39954,output_checker39943_39955))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.glyph),schema.core.make_fn_schema(output_schema39940_39952,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39941_39953], null)));
var ufv___39980 = schema.utils.use_fn_validation;var output_schema39961_39981 = om_bootstrap.types.Component;var input_schema39962_39982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker39963_39983 = schema.core.checker(input_schema39962_39982);var output_checker39964_39984 = schema.core.checker(output_schema39961_39981);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___39980,output_schema39961_39981,input_schema39962_39982,input_checker39963_39983,output_checker39964_39984){
return (function render_icon(G__39965){var validate__837__auto__ = ufv___39980.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39965], null);var temp__4126__auto___39986 = (function (){var G__39973 = args__838__auto___39985;return (input_checker39963_39983.cljs$core$IFn$_invoke$arity$1 ? input_checker39963_39983.cljs$core$IFn$_invoke$arity$1(G__39973) : input_checker39963_39983.call(null,G__39973));
})();if(cljs.core.truth_(temp__4126__auto___39986))
{var error__839__auto___39987 = temp__4126__auto___39986;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39987], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39962_39982,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39985,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39987], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__39975 = G__39965;var map__39976 = G__39975;var map__39976__$1 = ((cljs.core.seq_QMARK_(map__39976))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39976):map__39976);var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39976__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39976__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__39975__$1 = G__39975;while(true){
var map__39977 = G__39975__$1;var map__39977__$1 = ((cljs.core.seq_QMARK_(map__39977))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39977):map__39977);var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39977__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39977__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null);var G__39978 = {"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))};return React.DOM.span(G__39978);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39988 = (function (){var G__39979 = o__840__auto__;return (output_checker39964_39984.cljs$core$IFn$_invoke$arity$1 ? output_checker39964_39984.cljs$core$IFn$_invoke$arity$1(G__39979) : output_checker39964_39984.call(null,G__39979));
})();if(cljs.core.truth_(temp__4126__auto___39988))
{var error__839__auto___39989 = temp__4126__auto___39988;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39989], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39961_39981,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39989], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39980,output_schema39961_39981,input_schema39962_39982,input_checker39963_39983,output_checker39964_39984))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_icon),schema.core.make_fn_schema(output_schema39961_39981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39962_39982], null)));
var ufv___39999 = schema.utils.use_fn_validation;var output_schema39990_40000 = schema.core.Any;var input_schema39991_40001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.maybe(schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker39992_40002 = schema.core.checker(input_schema39991_40001);var output_checker39993_40003 = schema.core.checker(output_schema39990_40000);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___39999,output_schema39990_40000,input_schema39991_40001,input_checker39992_40002,output_checker39993_40003){
return (function render_help(G__39994){var validate__837__auto__ = ufv___39999.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39994], null);var temp__4126__auto___40005 = (function (){var G__39997 = args__838__auto___40004;return (input_checker39992_40002.cljs$core$IFn$_invoke$arity$1 ? input_checker39992_40002.cljs$core$IFn$_invoke$arity$1(G__39997) : input_checker39992_40002.call(null,G__39997));
})();if(cljs.core.truth_(temp__4126__auto___40005))
{var error__839__auto___40006 = temp__4126__auto___40005;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40006], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39991_40001,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40004,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40006], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var help = G__39994;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"className": "help-block"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40007 = (function (){var G__39998 = o__840__auto__;return (output_checker39993_40003.cljs$core$IFn$_invoke$arity$1 ? output_checker39993_40003.cljs$core$IFn$_invoke$arity$1(G__39998) : output_checker39993_40003.call(null,G__39998));
})();if(cljs.core.truth_(temp__4126__auto___40007))
{var error__839__auto___40008 = temp__4126__auto___40007;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40008], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39990_40000,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40008], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___39999,output_schema39990_40000,input_schema39991_40001,input_checker39992_40002,output_checker39993_40003))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_help),schema.core.make_fn_schema(output_schema39990_40000,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39991_40001], null)));
var ufv___40027 = schema.utils.use_fn_validation;var output_schema40009_40028 = schema.core.Any;var input_schema40010_40029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker40011_40030 = schema.core.checker(input_schema40010_40029);var output_checker40012_40031 = schema.core.checker(output_schema40009_40028);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___40027,output_schema40009_40028,input_schema40010_40029,input_checker40011_40030,output_checker40012_40031){
return (function render_input_group(G__40013,G__40014){var validate__837__auto__ = ufv___40027.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40013,G__40014], null);var temp__4126__auto___40033 = (function (){var G__40021 = args__838__auto___40032;return (input_checker40011_40030.cljs$core$IFn$_invoke$arity$1 ? input_checker40011_40030.cljs$core$IFn$_invoke$arity$1(G__40021) : input_checker40011_40030.call(null,G__40021));
})();if(cljs.core.truth_(temp__4126__auto___40033))
{var error__839__auto___40034 = temp__4126__auto___40033;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40034], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40010_40029,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40032,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40034], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40023 = G__40013;var map__40024 = G__40023;var map__40024__$1 = ((cljs.core.seq_QMARK_(map__40024))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40024):map__40024);var addon_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__40014;var G__40023__$1 = G__40023;var items__$1 = items;while(true){
var map__40025 = G__40023__$1;var map__40025__$1 = ((cljs.core.seq_QMARK_(map__40025))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40025):map__40025);var addon_after__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40025__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40025__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__19347__auto__ = addon_before__$1;if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
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
{var temp__4126__auto___40035 = (function (){var G__40026 = o__840__auto__;return (output_checker40012_40031.cljs$core$IFn$_invoke$arity$1 ? output_checker40012_40031.cljs$core$IFn$_invoke$arity$1(G__40026) : output_checker40012_40031.call(null,G__40026));
})();if(cljs.core.truth_(temp__4126__auto___40035))
{var error__839__auto___40036 = temp__4126__auto___40035;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40036], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40009_40028,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40036], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40027,output_schema40009_40028,input_schema40010_40029,input_checker40011_40030,output_checker40012_40031))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input_group),schema.core.make_fn_schema(output_schema40009_40028,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40010_40029], null)));
var ufv___40054 = schema.utils.use_fn_validation;var output_schema40037_40055 = schema.core.Bool;var input_schema40038_40056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker40039_40057 = schema.core.checker(input_schema40038_40056);var output_checker40040_40058 = schema.core.checker(output_schema40037_40055);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___40054,output_schema40037_40055,input_schema40038_40056,input_checker40039_40057,output_checker40040_40058){
return (function checkbox_or_radio_QMARK_(G__40041){var validate__837__auto__ = ufv___40054.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40041], null);var temp__4126__auto___40060 = (function (){var G__40048 = args__838__auto___40059;return (input_checker40039_40057.cljs$core$IFn$_invoke$arity$1 ? input_checker40039_40057.cljs$core$IFn$_invoke$arity$1(G__40048) : input_checker40039_40057.call(null,G__40048));
})();if(cljs.core.truth_(temp__4126__auto___40060))
{var error__839__auto___40061 = temp__4126__auto___40060;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40061], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40038_40056,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40059,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40061], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40050 = G__40041;var map__40051 = G__40050;var map__40051__$1 = ((cljs.core.seq_QMARK_(map__40051))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40051):map__40051);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40051__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__40050__$1 = G__40050;while(true){
var map__40052 = G__40050__$1;var map__40052__$1 = ((cljs.core.seq_QMARK_(map__40052))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40052):map__40052);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40052__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40062 = (function (){var G__40053 = o__840__auto__;return (output_checker40040_40058.cljs$core$IFn$_invoke$arity$1 ? output_checker40040_40058.cljs$core$IFn$_invoke$arity$1(G__40053) : output_checker40040_40058.call(null,G__40053));
})();if(cljs.core.truth_(temp__4126__auto___40062))
{var error__839__auto___40063 = temp__4126__auto___40062;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40063], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40037_40055,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40063], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40054,output_schema40037_40055,input_schema40038_40056,input_checker40039_40057,output_checker40040_40058))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema(output_schema40037_40055,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40038_40056], null)));
var ufv___40082 = schema.utils.use_fn_validation;var output_schema40064_40083 = om_bootstrap.types.Component;var input_schema40065_40084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40066_40085 = schema.core.checker(input_schema40065_40084);var output_checker40067_40086 = schema.core.checker(output_schema40064_40083);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___40082,output_schema40064_40083,input_schema40065_40084,input_checker40066_40085,output_checker40067_40086){
return (function checkbox_or_radio_wrapper(G__40068,G__40069){var validate__837__auto__ = ufv___40082.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40068,G__40069], null);var temp__4126__auto___40088 = (function (){var G__40076 = args__838__auto___40087;return (input_checker40066_40085.cljs$core$IFn$_invoke$arity$1 ? input_checker40066_40085.cljs$core$IFn$_invoke$arity$1(G__40076) : input_checker40066_40085.call(null,G__40076));
})();if(cljs.core.truth_(temp__4126__auto___40088))
{var error__839__auto___40089 = temp__4126__auto___40088;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40089], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40065_40084,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40087,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40089], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40078 = G__40068;var map__40079 = G__40078;var map__40079__$1 = ((cljs.core.seq_QMARK_(map__40079))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40079):map__40079);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__40069;var G__40078__$1 = G__40078;var children__$1 = children;while(true){
var map__40080 = G__40078__$1;var map__40080__$1 = ((cljs.core.seq_QMARK_(map__40080))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40080):map__40080);var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40080__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("radio",type__$1)], null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(klasses))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40090 = (function (){var G__40081 = o__840__auto__;return (output_checker40067_40086.cljs$core$IFn$_invoke$arity$1 ? output_checker40067_40086.cljs$core$IFn$_invoke$arity$1(G__40081) : output_checker40067_40086.call(null,G__40081));
})();if(cljs.core.truth_(temp__4126__auto___40090))
{var error__839__auto___40091 = temp__4126__auto___40090;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40091], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40064_40083,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40091], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40082,output_schema40064_40083,input_schema40065_40084,input_checker40066_40085,output_checker40067_40086))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema(output_schema40064_40083,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40065_40084], null)));
var ufv___40120 = schema.utils.use_fn_validation;var output_schema40092_40121 = schema.core.Any;var input_schema40093_40122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema40097_40123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker40094_40124 = schema.core.checker(input_schema40093_40122);var output_checker40095_40125 = schema.core.checker(output_schema40092_40121);var input_checker40098_40126 = schema.core.checker(input_schema40097_40123);var output_checker40099_40127 = schema.core.checker(output_schema40092_40121);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___40120,output_schema40092_40121,input_schema40093_40122,input_schema40097_40123,input_checker40094_40124,output_checker40095_40125,input_checker40098_40126,output_checker40099_40127){
return (function() {
var render_label = null;
var render_label__1 = (function (G__40096){var validate__837__auto__ = ufv___40120.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40096], null);var temp__4126__auto___40129 = (function (){var G__40112 = args__838__auto___40128;return (input_checker40094_40124.cljs$core$IFn$_invoke$arity$1 ? input_checker40094_40124.cljs$core$IFn$_invoke$arity$1(G__40112) : input_checker40094_40124.call(null,G__40112));
})();if(cljs.core.truth_(temp__4126__auto___40129))
{var error__839__auto___40130 = temp__4126__auto___40129;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40130], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40093_40122,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40128,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40130], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__40096;while(true){
return render_label.cljs$core$IFn$_invoke$arity$2(input,null);
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40131 = (function (){var G__40113 = o__840__auto__;return (output_checker40095_40125.cljs$core$IFn$_invoke$arity$1 ? output_checker40095_40125.cljs$core$IFn$_invoke$arity$1(G__40113) : output_checker40095_40125.call(null,G__40113));
})();if(cljs.core.truth_(temp__4126__auto___40131))
{var error__839__auto___40132 = temp__4126__auto___40131;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40132], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40092_40121,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40132], null));
} else
{}
} else
{}
return o__840__auto__;
});
var render_label__2 = (function (G__40100,G__40101){var validate__837__auto__ = ufv___40120.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40100,G__40101], null);var temp__4126__auto___40134 = (function (){var G__40114 = args__838__auto___40133;return (input_checker40098_40126.cljs$core$IFn$_invoke$arity$1 ? input_checker40098_40126.cljs$core$IFn$_invoke$arity$1(G__40114) : input_checker40098_40126.call(null,G__40114));
})();if(cljs.core.truth_(temp__4126__auto___40134))
{var error__839__auto___40135 = temp__4126__auto___40134;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40135], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40097_40123,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40133,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40135], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40116 = G__40100;var map__40117 = G__40116;var map__40117__$1 = ((cljs.core.seq_QMARK_(map__40117))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40117):map__40117);var input = map__40117__$1;var lc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__40101;var G__40116__$1 = G__40116;var child__$1 = child;while(true){
var map__40118 = G__40116__$1;var map__40118__$1 = ((cljs.core.seq_QMARK_(map__40118))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40118):map__40118);var input__$1 = map__40118__$1;var lc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40118__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$(lc__$1)], true, false):null)], 0));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40136 = (function (){var G__40119 = o__840__auto__;return (output_checker40099_40127.cljs$core$IFn$_invoke$arity$1 ? output_checker40099_40127.cljs$core$IFn$_invoke$arity$1(G__40119) : output_checker40099_40127.call(null,G__40119));
})();if(cljs.core.truth_(temp__4126__auto___40136))
{var error__839__auto___40137 = temp__4126__auto___40136;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40137], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40092_40121,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40137], null));
} else
{}
} else
{}
return o__840__auto__;
});
render_label = function(G__40100,G__40101){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__40100);
case 2:
return render_label__2.call(this,G__40100,G__40101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___40120,output_schema40092_40121,input_schema40093_40122,input_schema40097_40123,input_checker40094_40124,output_checker40095_40125,input_checker40098_40126,output_checker40099_40127))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_label),schema.core.make_fn_schema(output_schema40092_40121,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40093_40122,input_schema40097_40123], null)));
var ufv___40156 = schema.utils.use_fn_validation;var output_schema40138_40157 = schema.core.Any;var input_schema40139_40158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker40140_40159 = schema.core.checker(input_schema40139_40158);var output_checker40141_40160 = schema.core.checker(output_schema40138_40157);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___40156,output_schema40138_40157,input_schema40139_40158,input_checker40140_40159,output_checker40141_40160){
return (function render_wrapper(G__40142,G__40143){var validate__837__auto__ = ufv___40156.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40142,G__40143], null);var temp__4126__auto___40162 = (function (){var G__40150 = args__838__auto___40161;return (input_checker40140_40159.cljs$core$IFn$_invoke$arity$1 ? input_checker40140_40159.cljs$core$IFn$_invoke$arity$1(G__40150) : input_checker40140_40159.call(null,G__40150));
})();if(cljs.core.truth_(temp__4126__auto___40162))
{var error__839__auto___40163 = temp__4126__auto___40162;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40163], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40139_40158,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40161,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40163], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40152 = G__40142;var map__40153 = G__40152;var map__40153__$1 = ((cljs.core.seq_QMARK_(map__40153))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40153):map__40153);var wc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__40143;var G__40152__$1 = G__40152;var child__$1 = child;while(true){
var map__40154 = G__40152__$1;var map__40154__$1 = ((cljs.core.seq_QMARK_(map__40154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40154):map__40154);var wc__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40154__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(wc__$1)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40164 = (function (){var G__40155 = o__840__auto__;return (output_checker40141_40160.cljs$core$IFn$_invoke$arity$1 ? output_checker40141_40160.cljs$core$IFn$_invoke$arity$1(G__40155) : output_checker40141_40160.call(null,G__40155));
})();if(cljs.core.truth_(temp__4126__auto___40164))
{var error__839__auto___40165 = temp__4126__auto___40164;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40165], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40138_40157,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40165], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40156,output_schema40138_40157,input_schema40139_40158,input_checker40140_40159,output_checker40141_40160))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_wrapper),schema.core.make_fn_schema(output_schema40138_40157,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40139_40158], null)));
var ufv___40184 = schema.utils.use_fn_validation;var output_schema40166_40185 = om_bootstrap.types.Component;var input_schema40167_40186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40168_40187 = schema.core.checker(input_schema40167_40186);var output_checker40169_40188 = schema.core.checker(output_schema40166_40185);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___40184,output_schema40166_40185,input_schema40167_40186,input_checker40168_40187,output_checker40169_40188){
return (function render_form_group(G__40170,G__40171){var validate__837__auto__ = ufv___40184.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40170,G__40171], null);var temp__4126__auto___40190 = (function (){var G__40178 = args__838__auto___40189;return (input_checker40168_40187.cljs$core$IFn$_invoke$arity$1 ? input_checker40168_40187.cljs$core$IFn$_invoke$arity$1(G__40178) : input_checker40168_40187.call(null,G__40178));
})();if(cljs.core.truth_(temp__4126__auto___40190))
{var error__839__auto___40191 = temp__4126__auto___40190;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40191], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40167_40186,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40189,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40191], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var G__40180 = G__40170;var map__40181 = G__40180;var map__40181__$1 = ((cljs.core.seq_QMARK_(map__40181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40181):map__40181);var input = map__40181__$1;var bs_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__40171;var G__40180__$1 = G__40180;var children__$1 = children;while(true){
var map__40182 = G__40180__$1;var map__40182__$1 = ((cljs.core.seq_QMARK_(map__40182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40182):map__40182);var input__$1 = map__40182__$1;var bs_style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40182__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40182__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not(new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$(new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$(cn__$1)], true, false):null)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": om_tools.dom.format_opts(om_bootstrap.input.class_set(classes))},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40192 = (function (){var G__40183 = o__840__auto__;return (output_checker40169_40188.cljs$core$IFn$_invoke$arity$1 ? output_checker40169_40188.cljs$core$IFn$_invoke$arity$1(G__40183) : output_checker40169_40188.call(null,G__40183));
})();if(cljs.core.truth_(temp__4126__auto___40192))
{var error__839__auto___40193 = temp__4126__auto___40192;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40193], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40166_40185,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40193], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40184,output_schema40166_40185,input_schema40167_40186,input_checker40168_40187,output_checker40169_40188))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_form_group),schema.core.make_fn_schema(output_schema40166_40185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40167_40186], null)));
var ufv___40207 = schema.utils.use_fn_validation;var output_schema40194_40208 = om_bootstrap.types.Component;var input_schema40195_40209 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker40196_40210 = schema.core.checker(input_schema40195_40209);var output_checker40197_40211 = schema.core.checker(output_schema40194_40208);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___40207,output_schema40194_40208,input_schema40195_40209,input_checker40196_40210,output_checker40197_40211){
return (function render_input(G__40198,G__40199,G__40200){var validate__837__auto__ = ufv___40207.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40212 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40198,G__40199,G__40200], null);var temp__4126__auto___40213 = (function (){var G__40204 = args__838__auto___40212;return (input_checker40196_40210.cljs$core$IFn$_invoke$arity$1 ? input_checker40196_40210.cljs$core$IFn$_invoke$arity$1(G__40204) : input_checker40196_40210.call(null,G__40204));
})();if(cljs.core.truth_(temp__4126__auto___40213))
{var error__839__auto___40214 = temp__4126__auto___40213;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40214], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40195_40209,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40212,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40214], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var input = G__40198;var attrs = G__40199;var children = G__40200;while(true){
var props = ((function (validate__837__auto__,ufv___40207,output_schema40194_40208,input_schema40195_40209,input_checker40196_40210,output_checker40197_40211){
return (function (klass){return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null)], 0));
});})(validate__837__auto__,ufv___40207,output_schema40194_40208,input_schema40195_40209,input_checker40196_40210,output_checker40197_40211))
;if(cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__40205 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__40205) {
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
{var temp__4126__auto___40216 = (function (){var G__40206 = o__840__auto__;return (output_checker40197_40211.cljs$core$IFn$_invoke$arity$1 ? output_checker40197_40211.cljs$core$IFn$_invoke$arity$1(G__40206) : output_checker40197_40211.call(null,G__40206));
})();if(cljs.core.truth_(temp__4126__auto___40216))
{var error__839__auto___40217 = temp__4126__auto___40216;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40217], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40194_40208,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40217], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40207,output_schema40194_40208,input_schema40195_40209,input_checker40196_40210,output_checker40197_40211))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.render_input),schema.core.make_fn_schema(output_schema40194_40208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40195_40209], null)));
var ufv___40230 = schema.utils.use_fn_validation;var output_schema40218_40231 = om_bootstrap.types.Component;var input_schema40219_40232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker40220_40233 = schema.core.checker(input_schema40219_40232);var output_checker40221_40234 = schema.core.checker(output_schema40218_40231);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___40230,output_schema40218_40231,input_schema40219_40232,input_checker40220_40233,output_checker40221_40234){
return (function() { 
var input__delegate = function (G__40222,rest40223){var validate__837__auto__ = ufv___40230.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40235 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__40222,rest40223);var temp__4126__auto___40236 = (function (){var G__40227 = args__838__auto___40235;return (input_checker40220_40233.cljs$core$IFn$_invoke$arity$1 ? input_checker40220_40233.cljs$core$IFn$_invoke$arity$1(G__40227) : input_checker40220_40233.call(null,G__40227));
})();if(cljs.core.truth_(temp__4126__auto___40236))
{var error__839__auto___40237 = temp__4126__auto___40236;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40237], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40219_40232,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40235,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40237], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__40222;var children = rest40223;while(true){
var vec__40228 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40228,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40228,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_(input__$1))
{return om_bootstrap.input.render_form_group(input__$1,om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper(input__$1,om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2(input__$1,om_bootstrap.input.render_input(input__$1,attrs,children))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1(input__$1),om_bootstrap.input.render_wrapper(input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input(input__$1,attrs,children)),om_bootstrap.input.render_icon(cljs.core.select_keys(input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help(new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40238 = (function (){var G__40229 = o__840__auto__;return (output_checker40221_40234.cljs$core$IFn$_invoke$arity$1 ? output_checker40221_40234.cljs$core$IFn$_invoke$arity$1(G__40229) : output_checker40221_40234.call(null,G__40229));
})();if(cljs.core.truth_(temp__4126__auto___40238))
{var error__839__auto___40239 = temp__4126__auto___40238;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40239], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40218_40231,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40239], null));
} else
{}
} else
{}
return o__840__auto__;
};
var input = function (G__40222,var_args){
var rest40223 = null;if (arguments.length > 1) {
  rest40223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__40222,rest40223);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__40240){
var G__40222 = cljs.core.first(arglist__40240);
var rest40223 = cljs.core.rest(arglist__40240);
return input__delegate(G__40222,rest40223);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___40230,output_schema40218_40231,input_schema40219_40232,input_checker40220_40233,output_checker40221_40234))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.input),schema.core.make_fn_schema(output_schema40218_40231,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40219_40232], null)));
var ufv___40254 = schema.utils.use_fn_validation;var output_schema40241_40255 = om_bootstrap.types.Component;var input_schema40242_40256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker40243_40257 = schema.core.checker(input_schema40242_40256);var output_checker40244_40258 = schema.core.checker(output_schema40241_40255);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___40254,output_schema40241_40255,input_schema40242_40256,input_checker40243_40257,output_checker40244_40258){
return (function radio_option(G__40245){var validate__837__auto__ = ufv___40254.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40245], null);var temp__4126__auto___40260 = (function (){var G__40250 = args__838__auto___40259;return (input_checker40243_40257.cljs$core$IFn$_invoke$arity$1 ? input_checker40243_40257.cljs$core$IFn$_invoke$arity$1(G__40250) : input_checker40243_40257.call(null,G__40250));
})();if(cljs.core.truth_(temp__4126__auto___40260))
{var error__839__auto___40261 = temp__4126__auto___40260;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40261], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40242_40256,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40259,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40261], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__40245;while(true){
var vec__40251 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40251,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40251,(1),null);var map__40252 = bs;var map__40252__$1 = ((cljs.core.seq_QMARK_(map__40252))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40252):map__40252);var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40252__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40252__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40252__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element(om.dom.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{"className": "radio-inline"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "radio"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,{},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40262 = (function (){var G__40253 = o__840__auto__;return (output_checker40244_40258.cljs$core$IFn$_invoke$arity$1 ? output_checker40244_40258.cljs$core$IFn$_invoke$arity$1(G__40253) : output_checker40244_40258.call(null,G__40253));
})();if(cljs.core.truth_(temp__4126__auto___40262))
{var error__839__auto___40263 = temp__4126__auto___40262;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40263], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40241_40255,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40263], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40254,output_schema40241_40255,input_schema40242_40256,input_checker40243_40257,output_checker40244_40258))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.radio_option),schema.core.make_fn_schema(output_schema40241_40255,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40242_40256], null)));
var ufv___40294 = schema.utils.use_fn_validation;var output_schema40264_40295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema40265_40296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair(schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker40266_40297 = schema.core.checker(input_schema40265_40296);var output_checker40267_40298 = schema.core.checker(output_schema40264_40295);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___40294,output_schema40264_40295,input_schema40265_40296,input_checker40266_40297,output_checker40267_40298){
return (function options(G__40268,G__40269){var validate__837__auto__ = ufv___40294.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40268,G__40269], null);var temp__4126__auto___40300 = (function (){var G__40282 = args__838__auto___40299;return (input_checker40266_40297.cljs$core$IFn$_invoke$arity$1 ? input_checker40266_40297.cljs$core$IFn$_invoke$arity$1(G__40282) : input_checker40266_40297.call(null,G__40282));
})();if(cljs.core.truth_(temp__4126__auto___40300))
{var error__839__auto___40301 = temp__4126__auto___40300;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40301], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40265_40296,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40299,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40301], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var header = G__40268;var opts = G__40269;while(true){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": ""},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__20763__auto__ = ((function (validate__837__auto__,ufv___40294,output_schema40264_40295,input_schema40265_40296,input_checker40266_40297,output_checker40267_40298){
return (function iter__40283(s__40284){return (new cljs.core.LazySeq(null,((function (validate__837__auto__,ufv___40294,output_schema40264_40295,input_schema40265_40296,input_checker40266_40297,output_checker40267_40298){
return (function (){var s__40284__$1 = s__40284;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40284__$1);if(temp__4126__auto__)
{var s__40284__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40284__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__40284__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__40286 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__40285 = (0);while(true){
if((i__40285 < size__20762__auto__))
{var vec__40291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__40285);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291,(1),null);cljs.core.chunk_append(b__40286,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__40302 = (i__40285 + (1));
i__40285 = G__40302;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40286),iter__40283(cljs.core.chunk_rest(s__40284__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40286),null);
}
} else
{var vec__40292 = cljs.core.first(s__40284__$2);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40292,(0),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40292,(1),null);return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.option,{"value": om_tools.dom.format_opts(v)},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__40283(cljs.core.rest(s__40284__$2)));
}
} else
{return null;
}
break;
}
});})(validate__837__auto__,ufv___40294,output_schema40264_40295,input_schema40265_40296,input_checker40266_40297,output_checker40267_40298))
,null,null));
});})(validate__837__auto__,ufv___40294,output_schema40264_40295,input_schema40265_40296,input_checker40266_40297,output_checker40267_40298))
;return iter__20763__auto__(opts);
})());
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40303 = (function (){var G__40293 = o__840__auto__;return (output_checker40267_40298.cljs$core$IFn$_invoke$arity$1 ? output_checker40267_40298.cljs$core$IFn$_invoke$arity$1(G__40293) : output_checker40267_40298.call(null,G__40293));
})();if(cljs.core.truth_(temp__4126__auto___40303))
{var error__839__auto___40304 = temp__4126__auto___40303;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40304], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40264_40295,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40304], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___40294,output_schema40264_40295,input_schema40265_40296,input_checker40266_40297,output_checker40267_40298))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.input.options),schema.core.make_fn_schema(output_schema40264_40295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40265_40296], null)));
//# sourceMappingURL=input.js.map