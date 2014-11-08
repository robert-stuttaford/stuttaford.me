goog.provide('stuttaford.dive_into_datomic');
goog.require('cljs.core');
goog.require('stuttaford.om.common');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('stuttaford.om.common');
goog.require('cljs.core.async');
goog.require('stuttaford.dive_into_datomic.content');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('stuttaford.om.common');
goog.require('stuttaford.dive_into_datomic.content');
goog.require('om_bootstrap.button');
goog.require('clojure.string');
goog.require('om_bootstrap.button');
stuttaford.dive_into_datomic.perform_action = (function (){var method_table__21251__auto__ = (function (){var G__78204 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__78204) : cljs.core.atom.call(null,G__78204));
})();var prefer_table__21252__auto__ = (function (){var G__78207 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__78207) : cljs.core.atom.call(null,G__78207));
})();var method_cache__21253__auto__ = (function (){var G__78208 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__78208) : cljs.core.atom.call(null,G__78208));
})();var cached_hierarchy__21254__auto__ = (function (){var G__78210 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__78210) : cljs.core.atom.call(null,G__78210));
})();var hierarchy__21255__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21251__auto__,prefer_table__21252__auto__,method_cache__21253__auto__,cached_hierarchy__21254__auto__,hierarchy__21255__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21251__auto__,prefer_table__21252__auto__,method_cache__21253__auto__,cached_hierarchy__21254__auto__,hierarchy__21255__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21255__auto__,method_table__21251__auto__,prefer_table__21252__auto__,method_cache__21253__auto__,cached_hierarchy__21254__auto__));
})();
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cursor,op,value){throw ("Missing perform-method op: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));
}));
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"view","view",1247994814),value);
}));
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.home = (function() { 
var home__delegate = function (data__24427__auto__,owner78238,p__78240){var vec__78310 = p__78240;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78310,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78314 = schema.core.Any;var input_schema78315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map78312","map78312",-1938675238,null))], null);var input_checker78316 = schema.core.checker(input_schema78315);var output_checker78317 = schema.core.checker(output_schema78314);return schema.core.schematize_fn(((function (ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__){
return (function fnk78313(G__78318){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78318], null);var temp__4126__auto___78395 = (function (){var G__78358 = args__838__auto___78393;return (input_checker78316.cljs$core$IFn$_invoke$arity$1 ? input_checker78316.cljs$core$IFn$_invoke$arity$1(G__78358) : input_checker78316.call(null,G__78358));
})();if(cljs.core.truth_(temp__4126__auto___78395))
{var error__839__auto___78410 = temp__4126__auto___78395;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78313","fnk78313",1271775759,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78410], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78315,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78393,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78410], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78312 = G__78318;while(true){
if(cljs.core.map_QMARK_(map78312))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78312], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78312,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map78312,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t78363 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t78363 = (function (owner,input_schema78315,data,vec__78310,home,p__78240,fnk78313,owner78238,output_schema78314,map78312,validate__837__auto__,data__24427__auto__,ufv__,G__78318,opts__24428__auto__,input_checker78316,output_checker78317,meta78364){
this.owner = owner;
this.input_schema78315 = input_schema78315;
this.data = data;
this.vec__78310 = vec__78310;
this.home = home;
this.p__78240 = p__78240;
this.fnk78313 = fnk78313;
this.owner78238 = owner78238;
this.output_schema78314 = output_schema78314;
this.map78312 = map78312;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.G__78318 = G__78318;
this.opts__24428__auto__ = opts__24428__auto__;
this.input_checker78316 = input_checker78316;
this.output_checker78317 = output_checker78317;
this.meta78364 = meta78364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t78363.cljs$lang$type = true;
stuttaford.dive_into_datomic.t78363.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t78363";
stuttaford.dive_into_datomic.t78363.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.dive-into-datomic/t78363");
});})(owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t78363.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t78363.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "home";
});})(owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t78363.prototype.om$core$IRender$ = true;
stuttaford.dive_into_datomic.t78363.prototype.om$core$IRender$render$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var G__78377 = null;var G__78378 = "Dive into Datomic interactive diagrams.";return React.DOM.div(G__78377,G__78378);
});})(owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t78363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__){
return (function (_78365){var self__ = this;
var _78365__$1 = this;return self__.meta78364;
});})(owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t78363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__){
return (function (_78365,meta78364__$1){var self__ = this;
var _78365__$1 = this;return (new stuttaford.dive_into_datomic.t78363(self__.owner,self__.input_schema78315,self__.data,self__.vec__78310,self__.home,self__.p__78240,self__.fnk78313,self__.owner78238,self__.output_schema78314,self__.map78312,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.G__78318,self__.opts__24428__auto__,self__.input_checker78316,self__.output_checker78317,meta78364__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__))
;
stuttaford.dive_into_datomic.__GT_t78363 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__){
return (function __GT_t78363(owner__$1,input_schema78315__$1,data__$1,vec__78310__$1,home__$1,p__78240__$1,fnk78313__$1,owner78238__$1,output_schema78314__$1,map78312__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,G__78318__$1,opts__24428__auto____$1,input_checker78316__$1,output_checker78317__$1,meta78364){return (new stuttaford.dive_into_datomic.t78363(owner__$1,input_schema78315__$1,data__$1,vec__78310__$1,home__$1,p__78240__$1,fnk78313__$1,owner78238__$1,output_schema78314__$1,map78312__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,G__78318__$1,opts__24428__auto____$1,input_checker78316__$1,output_checker78317__$1,meta78364));
});})(owner,data,validate__837__auto__,ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__))
;
}
return (new stuttaford.dive_into_datomic.t78363(owner,input_schema78315,data,vec__78310,home,p__78240,fnk78313,owner78238,output_schema78314,map78312,validate__837__auto__,data__24427__auto__,ufv__,G__78318,opts__24428__auto__,input_checker78316,output_checker78317,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78560 = (function (){var G__78379 = o__840__auto__;return (output_checker78317.cljs$core$IFn$_invoke$arity$1 ? output_checker78317.cljs$core$IFn$_invoke$arity$1(G__78379) : output_checker78317.call(null,G__78379));
})();if(cljs.core.truth_(temp__4126__auto___78560))
{var error__839__auto___78565 = temp__4126__auto___78560;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78313","fnk78313",1271775759,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78565], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78314,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78565], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78314,input_schema78315,input_checker78316,output_checker78317,vec__78310,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema78314,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78315], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78238,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var home = function (data__24427__auto__,owner78238,var_args){
var p__78240 = null;if (arguments.length > 2) {
  p__78240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return home__delegate.call(this,data__24427__auto__,owner78238,p__78240);};
home.cljs$lang$maxFixedArity = 2;
home.cljs$lang$applyTo = (function (arglist__78578){
var data__24427__auto__ = cljs.core.first(arglist__78578);
arglist__78578 = cljs.core.next(arglist__78578);
var owner78238 = cljs.core.first(arglist__78578);
var p__78240 = cljs.core.rest(arglist__78578);
return home__delegate(data__24427__auto__,owner78238,p__78240);
});
home.cljs$core$IFn$_invoke$arity$variadic = home__delegate;
return home;
})()
;
stuttaford.dive_into_datomic.__GT_home = (function() {
var __GT_home = null;
var __GT_home__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.home,cursor__24396__auto__);
});
var __GT_home__2 = (function (cursor__24396__auto__,m78239){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.home,cursor__24396__auto__,m78239);
});
__GT_home = function(cursor__24396__auto__,m78239){
switch(arguments.length){
case 1:
return __GT_home__1.call(this,cursor__24396__auto__);
case 2:
return __GT_home__2.call(this,cursor__24396__auto__,m78239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_home.cljs$core$IFn$_invoke$arity$1 = __GT_home__1;
__GT_home.cljs$core$IFn$_invoke$arity$2 = __GT_home__2;
return __GT_home;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.datom = (function() { 
var datom__delegate = function (data__24427__auto__,owner78600,p__78602){var vec__78900 = p__78602;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78900,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78904 = schema.core.Any;var input_schema78905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map78902","map78902",-1497523578,null))], null);var input_checker78906 = schema.core.checker(input_schema78905);var output_checker78907 = schema.core.checker(output_schema78904);return schema.core.schematize_fn(((function (ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function fnk78903(G__78908){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___79104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78908], null);var temp__4126__auto___79105 = (function (){var G__79011 = args__838__auto___79104;return (input_checker78906.cljs$core$IFn$_invoke$arity$1 ? input_checker78906.cljs$core$IFn$_invoke$arity$1(G__79011) : input_checker78906.call(null,G__79011));
})();if(cljs.core.truth_(temp__4126__auto___79105))
{var error__839__auto___79108 = temp__4126__auto___79105;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78903","fnk78903",1615479246,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79108], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78905,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___79104,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79108], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78902 = G__78908;while(true){
if(cljs.core.map_QMARK_(map78902))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78902], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78902,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map78902,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t79015 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t79015 = (function (vec__78900,owner,data,map78902,input_schema78905,G__78908,datom,output_schema78904,input_checker78906,fnk78903,owner78600,p__78602,validate__837__auto__,output_checker78907,data__24427__auto__,ufv__,opts__24428__auto__,meta79016){
this.vec__78900 = vec__78900;
this.owner = owner;
this.data = data;
this.map78902 = map78902;
this.input_schema78905 = input_schema78905;
this.G__78908 = G__78908;
this.datom = datom;
this.output_schema78904 = output_schema78904;
this.input_checker78906 = input_checker78906;
this.fnk78903 = fnk78903;
this.owner78600 = owner78600;
this.p__78602 = p__78602;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker78907 = output_checker78907;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta79016 = meta79016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t79015.cljs$lang$type = true;
stuttaford.dive_into_datomic.t79015.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t79015";
stuttaford.dive_into_datomic.t79015.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.dive-into-datomic/t79015");
});})(owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79015.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t79015.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datom";
});})(owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79015.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t79015.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (_,p__79023){var self__ = this;
var map__79024 = p__79023;var map__79024__$1 = ((cljs.core.seq_QMARK_(map__79024))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79024):map__79024);var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79024__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79024__$1,new cljs.core.Keyword(null,"component","component",1555936782));var ___$1 = this;var G__79041 = {"className": "datom"};var G__79042 = (function (){var attrs79028 = om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),null);
});})(G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
], null),cljs.core.array_seq(["Clear"], 0)),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function iter__79047(s__79048){return (new cljs.core.LazySeq(null,((function (G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (){var s__79048__$1 = s__79048;while(true){
var temp__4126__auto__ = cljs.core.seq(s__79048__$1);if(temp__4126__auto__)
{var s__79048__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__79048__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__79048__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__79050 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__79049 = (0);while(true){
if((i__79049 < size__20989__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__79049);cljs.core.chunk_append(b__79050,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79061 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79049,kind,c__20988__auto__,size__20989__auto__,b__79050,s__79048__$2,temp__4126__auto__,G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(i__79049,kind,c__20988__auto__,size__20989__auto__,b__79050,s__79048__$2,temp__4126__auto__,G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
], null);var G__79061__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79061,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79061);return G__79061__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)));
{
var G__79113 = (i__79049 + (1));
i__79049 = G__79113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79050),iter__79047(cljs.core.chunk_rest(s__79048__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79050),null);
}
} else
{var kind = cljs.core.first(s__79048__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79064 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (kind,s__79048__$2,temp__4126__auto__,G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(kind,s__79048__$2,temp__4126__auto__,G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
], null);var G__79064__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79064,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79064);return G__79064__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)),iter__79047(cljs.core.rest(s__79048__$2)));
}
} else
{return null;
}
break;
}
});})(G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
,null,null));
});})(G__79041,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;return iter__20990__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.Keyword(null,"values","values",372645556)], null));
})()], 0))], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs79028))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navigation"], null)], null),attrs79028], 0))):{"className": "navigation"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs79028))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs79028)], null))));
})();var G__79043 = (function (){var G__79068 = {"className": "datom-tuple"};var G__79069 = (function (){var G__79073 = null;var G__79074 = "[";return React.DOM.span(G__79073,G__79074);
})();var G__79070 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20990__auto__ = ((function (G__79068,G__79069,G__79041,G__79042,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function iter__79075(s__79076){return (new cljs.core.LazySeq(null,((function (G__79068,G__79069,G__79041,G__79042,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (){var s__79076__$1 = s__79076;while(true){
var temp__4126__auto__ = cljs.core.seq(s__79076__$1);if(temp__4126__auto__)
{var s__79076__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__79076__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__79076__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__79078 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__79077 = (0);while(true){
if((i__79077 < size__20989__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__79077);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);cljs.core.chunk_append(b__79078,sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79077,s__79076__$1,class$,label,kind,c__20988__auto__,size__20989__auto__,b__79078,s__79076__$2,temp__4126__auto__,G__79068,G__79069,G__79041,G__79042,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(i__79077,s__79076__$1,class$,label,kind,c__20988__auto__,size__20989__auto__,b__79078,s__79076__$2,temp__4126__auto__,G__79068,G__79069,G__79041,G__79042,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)));
{
var G__79138 = (i__79077 + (1));
i__79077 = G__79138;
continue;
}
} else
{{
var G__79139 = (i__79077 + (1));
i__79077 = G__79139;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79078),iter__79075(cljs.core.chunk_rest(s__79076__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79078),null);
}
} else
{var kind = cljs.core.first(s__79076__$2);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);return cljs.core.cons(sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__79076__$1,class$,label,kind,s__79076__$2,temp__4126__auto__,G__79068,G__79069,G__79041,G__79042,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(s__79076__$1,class$,label,kind,s__79076__$2,temp__4126__auto__,G__79068,G__79069,G__79041,G__79042,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)),iter__79075(cljs.core.rest(s__79076__$2)));
} else
{{
var G__79180 = cljs.core.rest(s__79076__$2);
s__79076__$1 = G__79180;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__79068,G__79069,G__79041,G__79042,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
,null,null));
});})(G__79068,G__79069,G__79041,G__79042,___$1,map__79024,map__79024__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;return iter__20990__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"added","added",2057651688)], null));
})());var G__79071 = (function (){var G__79099 = null;var G__79100 = "]";return React.DOM.span(G__79099,G__79100);
})();return React.DOM.div(G__79068,G__79069,G__79070,G__79071);
})();var G__79044 = sablono.interpreter.interpret((cljs.core.truth_(component)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datom-content","div.datom-content",1558083752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),clojure.string.capitalize(cljs.core.name(component))], null),(function (){var G__79102 = component;return (stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1 ? stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1(G__79102) : stuttaford.dive_into_datomic.content.datom_content.call(null,G__79102));
})()], null):null));return React.DOM.div(G__79041,G__79042,G__79043,G__79044);
});})(owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79015.prototype.om$core$IInitState$ = true;
stuttaford.dive_into_datomic.t79015.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"example","example",-1755779144)], null);
});})(owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (_79017){var self__ = this;
var _79017__$1 = this;return self__.meta79016;
});})(owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function (_79017,meta79016__$1){var self__ = this;
var _79017__$1 = this;return (new stuttaford.dive_into_datomic.t79015(self__.vec__78900,self__.owner,self__.data,self__.map78902,self__.input_schema78905,self__.G__78908,self__.datom,self__.output_schema78904,self__.input_checker78906,self__.fnk78903,self__.owner78600,self__.p__78602,self__.validate__837__auto__,self__.output_checker78907,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta79016__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;
stuttaford.dive_into_datomic.__GT_t79015 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__){
return (function __GT_t79015(vec__78900__$1,owner__$1,data__$1,map78902__$1,input_schema78905__$1,G__78908__$1,datom__$1,output_schema78904__$1,input_checker78906__$1,fnk78903__$1,owner78600__$1,p__78602__$1,validate__837__auto____$1,output_checker78907__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta79016){return (new stuttaford.dive_into_datomic.t79015(vec__78900__$1,owner__$1,data__$1,map78902__$1,input_schema78905__$1,G__78908__$1,datom__$1,output_schema78904__$1,input_checker78906__$1,fnk78903__$1,owner78600__$1,p__78602__$1,validate__837__auto____$1,output_checker78907__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta79016));
});})(owner,data,validate__837__auto__,ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
;
}
return (new stuttaford.dive_into_datomic.t79015(vec__78900,owner,data,map78902,input_schema78905,G__78908,datom,output_schema78904,input_checker78906,fnk78903,owner78600,p__78602,validate__837__auto__,output_checker78907,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___79235 = (function (){var G__79103 = o__840__auto__;return (output_checker78907.cljs$core$IFn$_invoke$arity$1 ? output_checker78907.cljs$core$IFn$_invoke$arity$1(G__79103) : output_checker78907.call(null,G__79103));
})();if(cljs.core.truth_(temp__4126__auto___79235))
{var error__839__auto___79239 = temp__4126__auto___79235;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78903","fnk78903",1615479246,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79239], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78904,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79239], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78904,input_schema78905,input_checker78906,output_checker78907,vec__78900,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema78904,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78905], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78600,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var datom = function (data__24427__auto__,owner78600,var_args){
var p__78602 = null;if (arguments.length > 2) {
  p__78602 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datom__delegate.call(this,data__24427__auto__,owner78600,p__78602);};
datom.cljs$lang$maxFixedArity = 2;
datom.cljs$lang$applyTo = (function (arglist__79247){
var data__24427__auto__ = cljs.core.first(arglist__79247);
arglist__79247 = cljs.core.next(arglist__79247);
var owner78600 = cljs.core.first(arglist__79247);
var p__78602 = cljs.core.rest(arglist__79247);
return datom__delegate(data__24427__auto__,owner78600,p__78602);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
stuttaford.dive_into_datomic.__GT_datom = (function() {
var __GT_datom = null;
var __GT_datom__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.datom,cursor__24396__auto__);
});
var __GT_datom__2 = (function (cursor__24396__auto__,m78601){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.datom,cursor__24396__auto__,m78601);
});
__GT_datom = function(cursor__24396__auto__,m78601){
switch(arguments.length){
case 1:
return __GT_datom__1.call(this,cursor__24396__auto__);
case 2:
return __GT_datom__2.call(this,cursor__24396__auto__,m78601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datom.cljs$core$IFn$_invoke$arity$1 = __GT_datom__1;
__GT_datom.cljs$core$IFn$_invoke$arity$2 = __GT_datom__2;
return __GT_datom;
})()
;
stuttaford.dive_into_datomic.nav_items = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Home",stuttaford.dive_into_datomic.home], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datom","datom",-371556090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datom",stuttaford.dive_into_datomic.datom], null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Indexes",stuttaford.dive_into_datomic.indexes], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datalog","datalog",-1248728420),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datalog Query",stuttaford.dive_into_datomic.datalog], null),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Entities",stuttaford.dive_into_datomic.entity], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transaction",stuttaford.dive_into_datomic.transaction], null),new cljs.core.Keyword(null,"transaction-result","transaction-result",123197448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transaction Result",stuttaford.dive_into_datomic.transaction_result], null)], null)], null);
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.top_nav = (function() { 
var top_nav__delegate = function (data__24427__auto__,owner79259,p__79263){var vec__79680 = p__79263;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79680,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema79688 = schema.core.Any;var input_schema79689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map79681","map79681",-137880093,null))], null);var input_checker79690 = schema.core.checker(input_schema79689);var output_checker79691 = schema.core.checker(output_schema79688);return schema.core.schematize_fn(((function (ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function fnk79684(G__79692){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___79984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__79692], null);var temp__4126__auto___79986 = (function (){var G__79893 = args__838__auto___79984;return (input_checker79690.cljs$core$IFn$_invoke$arity$1 ? input_checker79690.cljs$core$IFn$_invoke$arity$1(G__79893) : input_checker79690.call(null,G__79893));
})();if(cljs.core.truth_(temp__4126__auto___79986))
{var error__839__auto___79987 = temp__4126__auto___79986;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79684","fnk79684",1756835952,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79987], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema79689,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___79984,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79987], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map79681 = G__79692;while(true){
if(cljs.core.map_QMARK_(map79681))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map79681], 0))));
}
var map79683 = plumbing.fnk.schema.safe_get(map79681,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map79683,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map79681,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map79682 = plumbing.fnk.schema.safe_get(map79681,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map79682,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.dive_into_datomic.t79894 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t79894 = (function (output_schema79688,output_checker79691,map79681,owner,view,input_schema79689,nav_items,fnk79684,map79683,top_nav,p__79263,input_checker79690,owner79259,G__79692,vec__79680,validate__837__auto__,map79682,data__24427__auto__,ufv__,opts__24428__auto__,meta79895){
this.output_schema79688 = output_schema79688;
this.output_checker79691 = output_checker79691;
this.map79681 = map79681;
this.owner = owner;
this.view = view;
this.input_schema79689 = input_schema79689;
this.nav_items = nav_items;
this.fnk79684 = fnk79684;
this.map79683 = map79683;
this.top_nav = top_nav;
this.p__79263 = p__79263;
this.input_checker79690 = input_checker79690;
this.owner79259 = owner79259;
this.G__79692 = G__79692;
this.vec__79680 = vec__79680;
this.validate__837__auto__ = validate__837__auto__;
this.map79682 = map79682;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta79895 = meta79895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t79894.cljs$lang$type = true;
stuttaford.dive_into_datomic.t79894.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t79894";
stuttaford.dive_into_datomic.t79894.cljs$lang$ctorPrWriter = ((function (nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.dive-into-datomic/t79894");
});})(nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79894.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t79894.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79894.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t79894.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function iter__79898(s__79899){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (){var s__79899__$1 = s__79899;while(true){
var temp__4126__auto__ = cljs.core.seq(s__79899__$1);if(temp__4126__auto__)
{var s__79899__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__79899__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__79899__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__79901 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__79900 = (0);while(true){
if((i__79900 < size__20989__auto__))
{var items = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__79900);cljs.core.chunk_append(b__79901,om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (i__79900,items,c__20988__auto__,size__20989__auto__,b__79901,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function iter__79944(s__79945){return (new cljs.core.LazySeq(null,((function (i__79900,items,c__20988__auto__,size__20989__auto__,b__79901,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (){var s__79945__$1 = s__79945;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__79945__$1);if(temp__4126__auto____$1)
{var s__79945__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__79945__$2))
{var c__20988__auto____$1 = cljs.core.chunk_first(s__79945__$2);var size__20989__auto____$1 = cljs.core.count(c__20988__auto____$1);var b__79947 = cljs.core.chunk_buffer(size__20989__auto____$1);if((function (){var i__79946 = (0);while(true){
if((i__79946 < size__20989__auto____$1))
{var vec__79956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto____$1,i__79946);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79956,(0),null);var vec__79957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79956,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79957,(0),null);cljs.core.chunk_append(b__79947,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79959 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79946,i__79900,vec__79956,id,vec__79957,label,c__20988__auto____$1,size__20989__auto____$1,b__79947,s__79945__$2,temp__4126__auto____$1,items,c__20988__auto__,size__20989__auto__,b__79901,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__79946,i__79900,vec__79956,id,vec__79957,label,c__20988__auto____$1,size__20989__auto____$1,b__79947,s__79945__$2,temp__4126__auto____$1,items,c__20988__auto__,size__20989__auto__,b__79901,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
], null);var G__79959__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79959,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79959);return G__79959__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__79999 = (i__79946 + (1));
i__79946 = G__79999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79947),iter__79944(cljs.core.chunk_rest(s__79945__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79947),null);
}
} else
{var vec__79960 = cljs.core.first(s__79945__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79960,(0),null);var vec__79961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79960,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79961,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79962 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79900,vec__79960,id,vec__79961,label,s__79945__$2,temp__4126__auto____$1,items,c__20988__auto__,size__20989__auto__,b__79901,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__79900,vec__79960,id,vec__79961,label,s__79945__$2,temp__4126__auto____$1,items,c__20988__auto__,size__20989__auto__,b__79901,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
], null);var G__79962__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79962,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79962);return G__79962__$1;
})(),cljs.core.array_seq([label], 0)),iter__79944(cljs.core.rest(s__79945__$2)));
}
} else
{return null;
}
break;
}
});})(i__79900,items,c__20988__auto__,size__20989__auto__,b__79901,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
,null,null));
});})(i__79900,items,c__20988__auto__,size__20989__auto__,b__79901,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;return iter__20990__auto__(items);
})()], 0)));
{
var G__80000 = (i__79900 + (1));
i__79900 = G__80000;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79901),iter__79898(cljs.core.chunk_rest(s__79899__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79901),null);
}
} else
{var items = cljs.core.first(s__79899__$2);return cljs.core.cons(om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (items,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function iter__79963(s__79964){return (new cljs.core.LazySeq(null,((function (items,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (){var s__79964__$1 = s__79964;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__79964__$1);if(temp__4126__auto____$1)
{var s__79964__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__79964__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__79964__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__79966 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__79965 = (0);while(true){
if((i__79965 < size__20989__auto__))
{var vec__79975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__79965);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79975,(0),null);var vec__79976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79975,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79976,(0),null);cljs.core.chunk_append(b__79966,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79977 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79965,vec__79975,id,vec__79976,label,c__20988__auto__,size__20989__auto__,b__79966,s__79964__$2,temp__4126__auto____$1,items,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__79965,vec__79975,id,vec__79976,label,c__20988__auto__,size__20989__auto__,b__79966,s__79964__$2,temp__4126__auto____$1,items,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
], null);var G__79977__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79977,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79977);return G__79977__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__80001 = (i__79965 + (1));
i__79965 = G__80001;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79966),iter__79963(cljs.core.chunk_rest(s__79964__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79966),null);
}
} else
{var vec__79978 = cljs.core.first(s__79964__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79978,(0),null);var vec__79979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79978,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79979,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79980 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__79978,id,vec__79979,label,s__79964__$2,temp__4126__auto____$1,items,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__79978,id,vec__79979,label,s__79964__$2,temp__4126__auto____$1,items,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
], null);var G__79980__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79980,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79980);return G__79980__$1;
})(),cljs.core.array_seq([label], 0)),iter__79963(cljs.core.rest(s__79964__$2)));
}
} else
{return null;
}
break;
}
});})(items,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
,null,null));
});})(items,s__79899__$2,temp__4126__auto__,c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;return iter__20990__auto__(items);
})()], 0)),iter__79898(cljs.core.rest(s__79899__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
,null,null));
});})(c,___$1,nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;return iter__20990__auto__(self__.nav_items);
})()], 0));
});})(nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (_79896){var self__ = this;
var _79896__$1 = this;return self__.meta79895;
});})(nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t79894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function (_79896,meta79895__$1){var self__ = this;
var _79896__$1 = this;return (new stuttaford.dive_into_datomic.t79894(self__.output_schema79688,self__.output_checker79691,self__.map79681,self__.owner,self__.view,self__.input_schema79689,self__.nav_items,self__.fnk79684,self__.map79683,self__.top_nav,self__.p__79263,self__.input_checker79690,self__.owner79259,self__.G__79692,self__.vec__79680,self__.validate__837__auto__,self__.map79682,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta79895__$1));
});})(nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;
stuttaford.dive_into_datomic.__GT_t79894 = ((function (nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__){
return (function __GT_t79894(output_schema79688__$1,output_checker79691__$1,map79681__$1,owner__$1,view__$1,input_schema79689__$1,nav_items__$1,fnk79684__$1,map79683__$1,top_nav__$1,p__79263__$1,input_checker79690__$1,owner79259__$1,G__79692__$1,vec__79680__$1,validate__837__auto____$1,map79682__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta79895){return (new stuttaford.dive_into_datomic.t79894(output_schema79688__$1,output_checker79691__$1,map79681__$1,owner__$1,view__$1,input_schema79689__$1,nav_items__$1,fnk79684__$1,map79683__$1,top_nav__$1,p__79263__$1,input_checker79690__$1,owner79259__$1,G__79692__$1,vec__79680__$1,validate__837__auto____$1,map79682__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta79895));
});})(nav_items,map79682,owner,view,map79683,validate__837__auto__,ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
;
}
return (new stuttaford.dive_into_datomic.t79894(output_schema79688,output_checker79691,map79681,owner,view,input_schema79689,nav_items,fnk79684,map79683,top_nav,p__79263,input_checker79690,owner79259,G__79692,vec__79680,validate__837__auto__,map79682,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___80002 = (function (){var G__79981 = o__840__auto__;return (output_checker79691.cljs$core$IFn$_invoke$arity$1 ? output_checker79691.cljs$core$IFn$_invoke$arity$1(G__79981) : output_checker79691.call(null,G__79981));
})();if(cljs.core.truth_(temp__4126__auto___80002))
{var error__839__auto___80003 = temp__4126__auto___80002;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79684","fnk79684",1756835952,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___80003], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema79688,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___80003], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema79688,input_schema79689,input_checker79690,output_checker79691,vec__79680,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema79688,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema79689], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner79259,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var top_nav = function (data__24427__auto__,owner79259,var_args){
var p__79263 = null;if (arguments.length > 2) {
  p__79263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24427__auto__,owner79259,p__79263);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__80004){
var data__24427__auto__ = cljs.core.first(arglist__80004);
arglist__80004 = cljs.core.next(arglist__80004);
var owner79259 = cljs.core.first(arglist__80004);
var p__79263 = cljs.core.rest(arglist__80004);
return top_nav__delegate(data__24427__auto__,owner79259,p__79263);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.dive_into_datomic.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.top_nav,cursor__24396__auto__);
});
var __GT_top_nav__2 = (function (cursor__24396__auto__,m79260){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.top_nav,cursor__24396__auto__,m79260);
});
__GT_top_nav = function(cursor__24396__auto__,m79260){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24396__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24396__auto__,m79260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_top_nav.cljs$core$IFn$_invoke$arity$1 = __GT_top_nav__1;
__GT_top_nav.cljs$core$IFn$_invoke$arity$2 = __GT_top_nav__2;
return __GT_top_nav;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.app_view = (function() { 
var app_view__delegate = function (data__24427__auto__,owner80005,p__80007){var vec__80126 = p__80007;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80126,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema80129 = schema.core.Any;var input_schema80130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map80127","map80127",729924262,null))], null);var input_checker80131 = schema.core.checker(input_schema80130);var output_checker80132 = schema.core.checker(output_schema80129);return schema.core.schematize_fn(((function (ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function fnk80128(G__80133){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___80244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__80133], null);var temp__4126__auto___80245 = (function (){var G__80189 = args__838__auto___80244;return (input_checker80131.cljs$core$IFn$_invoke$arity$1 ? input_checker80131.cljs$core$IFn$_invoke$arity$1(G__80189) : input_checker80131.call(null,G__80189));
})();if(cljs.core.truth_(temp__4126__auto___80245))
{var error__839__auto___80246 = temp__4126__auto___80245;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk80128","fnk80128",2037150480,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___80246], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema80130,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___80244,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___80246], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map80127 = G__80133;while(true){
if(cljs.core.map_QMARK_(map80127))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map80127], 0))));
}
var data = plumbing.fnk.schema.safe_get(map80127,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map80127,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t80190 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t80190 = (function (p__80007,vec__80126,G__80133,app_view,owner,view,input_checker80131,data,map80127,input_schema80130,fnk80128,output_checker80132,owner80005,output_schema80129,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,meta80191){
this.p__80007 = p__80007;
this.vec__80126 = vec__80126;
this.G__80133 = G__80133;
this.app_view = app_view;
this.owner = owner;
this.view = view;
this.input_checker80131 = input_checker80131;
this.data = data;
this.map80127 = map80127;
this.input_schema80130 = input_schema80130;
this.fnk80128 = fnk80128;
this.output_checker80132 = output_checker80132;
this.owner80005 = owner80005;
this.output_schema80129 = output_schema80129;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta80191 = meta80191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t80190.cljs$lang$type = true;
stuttaford.dive_into_datomic.t80190.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t80190";
stuttaford.dive_into_datomic.t80190.cljs$lang$ctorPrWriter = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.dive-into-datomic/t80190");
});})(owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t80190.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t80190.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t80190.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t80190.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__80193 = (function (){var G__80194 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,stuttaford.dive_into_datomic.nav_items));return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__80194) : self__.view.call(null,G__80194));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80193,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80193,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),stuttaford.dive_into_datomic.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.dive_into_datomic.nav_items], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__80197 = null;return React.DOM.div(G__80197);
})())], null)], null);
})());
});})(owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t80190.prototype.om$core$IWillUnmount$ = true;
stuttaford.dive_into_datomic.t80190.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t80190.prototype.om$core$IWillMount$ = true;
stuttaford.dive_into_datomic.t80190.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22972__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (state_80218){var state_val_80219 = (state_80218[(1)]);if((state_val_80219 === (7)))
{var inst_80201 = (state_80218[(7)]);var inst_80201__$1 = (state_80218[(2)]);var state_80218__$1 = (function (){var statearr_80220 = state_80218;(statearr_80220[(7)] = inst_80201__$1);
return statearr_80220;
})();if(cljs.core.truth_(inst_80201__$1))
{var statearr_80221_80247 = state_80218__$1;(statearr_80221_80247[(1)] = (8));
} else
{var statearr_80222_80248 = state_80218__$1;(statearr_80222_80248[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80219 === (1)))
{var state_80218__$1 = state_80218;var statearr_80223_80249 = state_80218__$1;(statearr_80223_80249[(2)] = null);
(statearr_80223_80249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80219 === (4)))
{var state_80218__$1 = state_80218;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80218__$1,(7),c);
} else
{if((state_val_80219 === (6)))
{var inst_80214 = (state_80218[(2)]);var state_80218__$1 = state_80218;var statearr_80224_80250 = state_80218__$1;(statearr_80224_80250[(2)] = inst_80214);
(statearr_80224_80250[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80219 === (3)))
{var inst_80216 = (state_80218[(2)]);var state_80218__$1 = state_80218;return cljs.core.async.impl.ioc_helpers.return_chan(state_80218__$1,inst_80216);
} else
{if((state_val_80219 === (2)))
{var state_80218__$1 = state_80218;var statearr_80225_80251 = state_80218__$1;(statearr_80225_80251[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80219 === (9)))
{var state_80218__$1 = state_80218;var statearr_80227_80252 = state_80218__$1;(statearr_80227_80252[(2)] = null);
(statearr_80227_80252[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80219 === (5)))
{var state_80218__$1 = state_80218;var statearr_80228_80253 = state_80218__$1;(statearr_80228_80253[(2)] = null);
(statearr_80228_80253[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80219 === (10)))
{var inst_80210 = (state_80218[(2)]);var state_80218__$1 = (function (){var statearr_80229 = state_80218;(statearr_80229[(8)] = inst_80210);
return statearr_80229;
})();var statearr_80230_80254 = state_80218__$1;(statearr_80230_80254[(2)] = null);
(statearr_80230_80254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80219 === (8)))
{var inst_80201 = (state_80218[(7)]);var inst_80204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80201,(0),null);var inst_80205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80201,(1),null);var inst_80206 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_80207 = (function (){var G__80231 = self__.data;var G__80232 = inst_80204;var G__80233 = inst_80205;var G__80234 = inst_80206;return (stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4(G__80231,G__80232,G__80233,G__80234) : stuttaford.dive_into_datomic.perform_action.call(null,G__80231,G__80232,G__80233,G__80234));
})();var state_80218__$1 = state_80218;var statearr_80235_80255 = state_80218__$1;(statearr_80235_80255[(2)] = inst_80207);
(statearr_80235_80255[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;return ((function (switch__22957__auto__,c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_80239 = [null,null,null,null,null,null,null,null,null];(statearr_80239[(0)] = state_machine__22958__auto__);
(statearr_80239[(1)] = (1));
return statearr_80239;
});
var state_machine__22958__auto____1 = (function (state_80218){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_80218);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e80240){if((e80240 instanceof Object))
{var ex__22961__auto__ = e80240;var statearr_80241_80256 = state_80218;(statearr_80241_80256[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_80218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e80240;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__80257 = state_80218;
state_80218 = G__80257;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_80218){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_80218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
})();var state__22974__auto__ = (function (){var statearr_80242 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_80242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto__);
return statearr_80242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
);
return c__22972__auto__;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t80190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (_80192){var self__ = this;
var _80192__$1 = this;return self__.meta80191;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t80190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function (_80192,meta80191__$1){var self__ = this;
var _80192__$1 = this;return (new stuttaford.dive_into_datomic.t80190(self__.p__80007,self__.vec__80126,self__.G__80133,self__.app_view,self__.owner,self__.view,self__.input_checker80131,self__.data,self__.map80127,self__.input_schema80130,self__.fnk80128,self__.output_checker80132,self__.owner80005,self__.output_schema80129,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta80191__$1));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;
stuttaford.dive_into_datomic.__GT_t80190 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__){
return (function __GT_t80190(p__80007__$1,vec__80126__$1,G__80133__$1,app_view__$1,owner__$1,view__$1,input_checker80131__$1,data__$1,map80127__$1,input_schema80130__$1,fnk80128__$1,output_checker80132__$1,owner80005__$1,output_schema80129__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta80191){return (new stuttaford.dive_into_datomic.t80190(p__80007__$1,vec__80126__$1,G__80133__$1,app_view__$1,owner__$1,view__$1,input_checker80131__$1,data__$1,map80127__$1,input_schema80130__$1,fnk80128__$1,output_checker80132__$1,owner80005__$1,output_schema80129__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta80191));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
;
}
return (new stuttaford.dive_into_datomic.t80190(p__80007,vec__80126,G__80133,app_view,owner,view,input_checker80131,data,map80127,input_schema80130,fnk80128,output_checker80132,owner80005,output_schema80129,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___80258 = (function (){var G__80243 = o__840__auto__;return (output_checker80132.cljs$core$IFn$_invoke$arity$1 ? output_checker80132.cljs$core$IFn$_invoke$arity$1(G__80243) : output_checker80132.call(null,G__80243));
})();if(cljs.core.truth_(temp__4126__auto___80258))
{var error__839__auto___80259 = temp__4126__auto___80258;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk80128","fnk80128",2037150480,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___80259], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema80129,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___80259], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema80129,input_schema80130,input_checker80131,output_checker80132,vec__80126,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema80129,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema80130], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner80005,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var app_view = function (data__24427__auto__,owner80005,var_args){
var p__80007 = null;if (arguments.length > 2) {
  p__80007 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24427__auto__,owner80005,p__80007);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__80260){
var data__24427__auto__ = cljs.core.first(arglist__80260);
arglist__80260 = cljs.core.next(arglist__80260);
var owner80005 = cljs.core.first(arglist__80260);
var p__80007 = cljs.core.rest(arglist__80260);
return app_view__delegate(data__24427__auto__,owner80005,p__80007);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.dive_into_datomic.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.app_view,cursor__24396__auto__);
});
var __GT_app_view__2 = (function (cursor__24396__auto__,m80006){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.app_view,cursor__24396__auto__,m80006);
});
__GT_app_view = function(cursor__24396__auto__,m80006){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24396__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24396__auto__,m80006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
stuttaford.dive_into_datomic.init = (function init(app_id,state_id,debug_QMARK_){return stuttaford.om.common.start.cljs$core$IFn$_invoke$arity$5(app_id,state_id,stuttaford.dive_into_datomic.app_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-chan","control-chan",-1773911405),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null)], null),debug_QMARK_);
});
goog.exportSymbol('stuttaford.dive_into_datomic.init', stuttaford.dive_into_datomic.init);
//# sourceMappingURL=dive_into_datomic.js.map