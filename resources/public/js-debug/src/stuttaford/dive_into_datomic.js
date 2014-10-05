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
stuttaford.dive_into_datomic.perform_action = (function (){var method_table__20928__auto__ = (function (){var G__58147 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58147) : cljs.core.atom.call(null,G__58147));
})();var prefer_table__20929__auto__ = (function (){var G__58148 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58148) : cljs.core.atom.call(null,G__58148));
})();var method_cache__20930__auto__ = (function (){var G__58149 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58149) : cljs.core.atom.call(null,G__58149));
})();var cached_hierarchy__20931__auto__ = (function (){var G__58150 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58150) : cljs.core.atom.call(null,G__58150));
})();var hierarchy__20932__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__20928__auto__,prefer_table__20929__auto__,method_cache__20930__auto__,cached_hierarchy__20931__auto__,hierarchy__20932__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__20928__auto__,prefer_table__20929__auto__,method_cache__20930__auto__,cached_hierarchy__20931__auto__,hierarchy__20932__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20932__auto__,method_table__20928__auto__,prefer_table__20929__auto__,method_cache__20930__auto__,cached_hierarchy__20931__auto__));
})();
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cursor,op,value){throw ("Missing perform-method op: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));
}));
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"view","view",1247994814),value);
}));
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.home = (function() { 
var home__delegate = function (data__24197__auto__,owner58151,p__58153){var vec__58180 = p__58153;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58180,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58183 = schema.core.Any;var input_schema58184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map58181","map58181",1480573224,null))], null);var input_checker58185 = schema.core.checker(input_schema58184);var output_checker58186 = schema.core.checker(output_schema58183);return schema.core.schematize_fn(((function (ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__){
return (function fnk58182(G__58187){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58187], null);var temp__4126__auto___58207 = (function (){var G__58197 = args__838__auto___58206;return (input_checker58185.cljs$core$IFn$_invoke$arity$1 ? input_checker58185.cljs$core$IFn$_invoke$arity$1(G__58197) : input_checker58185.call(null,G__58197));
})();if(cljs.core.truth_(temp__4126__auto___58207))
{var error__839__auto___58208 = temp__4126__auto___58207;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58182","fnk58182",1710359882,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58208], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58184,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58206,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58208], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58181 = G__58187;while(true){
if(cljs.core.map_QMARK_(map58181))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58181], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58181,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map58181,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t58198 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t58198 = (function (data__24197__auto__,output_schema58183,owner,vec__58180,data,map58181,output_checker58186,fnk58182,home,p__58153,opts__24198__auto__,G__58187,input_checker58185,input_schema58184,owner58151,validate__837__auto__,ufv__,meta58199){
this.data__24197__auto__ = data__24197__auto__;
this.output_schema58183 = output_schema58183;
this.owner = owner;
this.vec__58180 = vec__58180;
this.data = data;
this.map58181 = map58181;
this.output_checker58186 = output_checker58186;
this.fnk58182 = fnk58182;
this.home = home;
this.p__58153 = p__58153;
this.opts__24198__auto__ = opts__24198__auto__;
this.G__58187 = G__58187;
this.input_checker58185 = input_checker58185;
this.input_schema58184 = input_schema58184;
this.owner58151 = owner58151;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta58199 = meta58199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t58198.cljs$lang$type = true;
stuttaford.dive_into_datomic.t58198.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t58198";
stuttaford.dive_into_datomic.t58198.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.dive-into-datomic/t58198");
});})(owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58198.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t58198.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "home";
});})(owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58198.prototype.om$core$IRender$ = true;
stuttaford.dive_into_datomic.t58198.prototype.om$core$IRender$render$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var G__58203 = null;var G__58204 = "Dive into Datomic interactive diagrams.";return React.DOM.div(G__58203,G__58204);
});})(owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__){
return (function (_58200){var self__ = this;
var _58200__$1 = this;return self__.meta58199;
});})(owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__){
return (function (_58200,meta58199__$1){var self__ = this;
var _58200__$1 = this;return (new stuttaford.dive_into_datomic.t58198(self__.data__24197__auto__,self__.output_schema58183,self__.owner,self__.vec__58180,self__.data,self__.map58181,self__.output_checker58186,self__.fnk58182,self__.home,self__.p__58153,self__.opts__24198__auto__,self__.G__58187,self__.input_checker58185,self__.input_schema58184,self__.owner58151,self__.validate__837__auto__,self__.ufv__,meta58199__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__))
;
stuttaford.dive_into_datomic.__GT_t58198 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__){
return (function __GT_t58198(data__24197__auto____$1,output_schema58183__$1,owner__$1,vec__58180__$1,data__$1,map58181__$1,output_checker58186__$1,fnk58182__$1,home__$1,p__58153__$1,opts__24198__auto____$1,G__58187__$1,input_checker58185__$1,input_schema58184__$1,owner58151__$1,validate__837__auto____$1,ufv____$1,meta58199){return (new stuttaford.dive_into_datomic.t58198(data__24197__auto____$1,output_schema58183__$1,owner__$1,vec__58180__$1,data__$1,map58181__$1,output_checker58186__$1,fnk58182__$1,home__$1,p__58153__$1,opts__24198__auto____$1,G__58187__$1,input_checker58185__$1,input_schema58184__$1,owner58151__$1,validate__837__auto____$1,ufv____$1,meta58199));
});})(owner,data,validate__837__auto__,ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__))
;
}
return (new stuttaford.dive_into_datomic.t58198(data__24197__auto__,output_schema58183,owner,vec__58180,data,map58181,output_checker58186,fnk58182,home,p__58153,opts__24198__auto__,G__58187,input_checker58185,input_schema58184,owner58151,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58209 = (function (){var G__58205 = o__840__auto__;return (output_checker58186.cljs$core$IFn$_invoke$arity$1 ? output_checker58186.cljs$core$IFn$_invoke$arity$1(G__58205) : output_checker58186.call(null,G__58205));
})();if(cljs.core.truth_(temp__4126__auto___58209))
{var error__839__auto___58210 = temp__4126__auto___58209;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58182","fnk58182",1710359882,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58210], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58183,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58210], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58183,input_schema58184,input_checker58185,output_checker58186,vec__58180,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema58183,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58184], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58151,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var home = function (data__24197__auto__,owner58151,var_args){
var p__58153 = null;if (arguments.length > 2) {
  p__58153 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return home__delegate.call(this,data__24197__auto__,owner58151,p__58153);};
home.cljs$lang$maxFixedArity = 2;
home.cljs$lang$applyTo = (function (arglist__58211){
var data__24197__auto__ = cljs.core.first(arglist__58211);
arglist__58211 = cljs.core.next(arglist__58211);
var owner58151 = cljs.core.first(arglist__58211);
var p__58153 = cljs.core.rest(arglist__58211);
return home__delegate(data__24197__auto__,owner58151,p__58153);
});
home.cljs$core$IFn$_invoke$arity$variadic = home__delegate;
return home;
})()
;
stuttaford.dive_into_datomic.__GT_home = (function() {
var __GT_home = null;
var __GT_home__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.home,cursor__24166__auto__);
});
var __GT_home__2 = (function (cursor__24166__auto__,m58152){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.home,cursor__24166__auto__,m58152);
});
__GT_home = function(cursor__24166__auto__,m58152){
switch(arguments.length){
case 1:
return __GT_home__1.call(this,cursor__24166__auto__);
case 2:
return __GT_home__2.call(this,cursor__24166__auto__,m58152);
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
var datom__delegate = function (data__24197__auto__,owner58212,p__58214){var vec__58305 = p__58214;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58305,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58308 = schema.core.Any;var input_schema58309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map58306","map58306",-2020708129,null))], null);var input_checker58310 = schema.core.checker(input_schema58309);var output_checker58311 = schema.core.checker(output_schema58308);return schema.core.schematize_fn(((function (ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function fnk58307(G__58312){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58312], null);var temp__4126__auto___58396 = (function (){var G__58354 = args__838__auto___58395;return (input_checker58310.cljs$core$IFn$_invoke$arity$1 ? input_checker58310.cljs$core$IFn$_invoke$arity$1(G__58354) : input_checker58310.call(null,G__58354));
})();if(cljs.core.truth_(temp__4126__auto___58396))
{var error__839__auto___58397 = temp__4126__auto___58396;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58307","fnk58307",422859545,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58397], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58309,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58395,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58397], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58306 = G__58312;while(true){
if(cljs.core.map_QMARK_(map58306))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58306], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58306,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map58306,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t58355 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t58355 = (function (vec__58305,data__24197__auto__,input_schema58309,owner,output_checker58311,data,p__58214,input_checker58310,output_schema58308,datom,opts__24198__auto__,G__58312,fnk58307,validate__837__auto__,ufv__,map58306,owner58212,meta58356){
this.vec__58305 = vec__58305;
this.data__24197__auto__ = data__24197__auto__;
this.input_schema58309 = input_schema58309;
this.owner = owner;
this.output_checker58311 = output_checker58311;
this.data = data;
this.p__58214 = p__58214;
this.input_checker58310 = input_checker58310;
this.output_schema58308 = output_schema58308;
this.datom = datom;
this.opts__24198__auto__ = opts__24198__auto__;
this.G__58312 = G__58312;
this.fnk58307 = fnk58307;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map58306 = map58306;
this.owner58212 = owner58212;
this.meta58356 = meta58356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t58355.cljs$lang$type = true;
stuttaford.dive_into_datomic.t58355.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t58355";
stuttaford.dive_into_datomic.t58355.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.dive-into-datomic/t58355");
});})(owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58355.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t58355.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datom";
});})(owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58355.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t58355.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (_,p__58358){var self__ = this;
var map__58359 = p__58358;var map__58359__$1 = ((cljs.core.seq_QMARK_(map__58359))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58359):map__58359);var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58359__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58359__$1,new cljs.core.Keyword(null,"component","component",1555936782));var ___$1 = this;var G__58365 = {"className": "datom"};var G__58366 = (function (){var attrs58360 = om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),null);
});})(G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
], null),cljs.core.array_seq(["Clear"], 0)),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20684__auto__ = ((function (G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function iter__58369(s__58370){return (new cljs.core.LazySeq(null,((function (G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (){var s__58370__$1 = s__58370;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58370__$1);if(temp__4126__auto__)
{var s__58370__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58370__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__58370__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__58372 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__58371 = (0);while(true){
if((i__58371 < size__20683__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__58371);cljs.core.chunk_append(b__58372,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58377 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58371,kind,c__20682__auto__,size__20683__auto__,b__58372,s__58370__$2,temp__4126__auto__,G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(i__58371,kind,c__20682__auto__,size__20683__auto__,b__58372,s__58370__$2,temp__4126__auto__,G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
], null);var G__58377__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58377,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58377);return G__58377__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)));
{
var G__58398 = (i__58371 + (1));
i__58371 = G__58398;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58372),iter__58369(cljs.core.chunk_rest(s__58370__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58372),null);
}
} else
{var kind = cljs.core.first(s__58370__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58378 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (kind,s__58370__$2,temp__4126__auto__,G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(kind,s__58370__$2,temp__4126__auto__,G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
], null);var G__58378__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58378,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58378);return G__58378__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)),iter__58369(cljs.core.rest(s__58370__$2)));
}
} else
{return null;
}
break;
}
});})(G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
,null,null));
});})(G__58365,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;return iter__20684__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.Keyword(null,"values","values",372645556)], null));
})()], 0))], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs58360))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navigation"], null)], null),attrs58360], 0))):{"className": "navigation"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs58360))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs58360)], null))));
})();var G__58367 = (function (){var G__58379 = {"className": "datom-tuple"};var G__58380 = (function (){var G__58383 = null;var G__58384 = "[";return React.DOM.span(G__58383,G__58384);
})();var G__58381 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20684__auto__ = ((function (G__58379,G__58380,G__58365,G__58366,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function iter__58385(s__58386){return (new cljs.core.LazySeq(null,((function (G__58379,G__58380,G__58365,G__58366,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (){var s__58386__$1 = s__58386;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58386__$1);if(temp__4126__auto__)
{var s__58386__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58386__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__58386__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__58388 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__58387 = (0);while(true){
if((i__58387 < size__20683__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__58387);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);cljs.core.chunk_append(b__58388,sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58387,s__58386__$1,class$,label,kind,c__20682__auto__,size__20683__auto__,b__58388,s__58386__$2,temp__4126__auto__,G__58379,G__58380,G__58365,G__58366,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(i__58387,s__58386__$1,class$,label,kind,c__20682__auto__,size__20683__auto__,b__58388,s__58386__$2,temp__4126__auto__,G__58379,G__58380,G__58365,G__58366,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)));
{
var G__58399 = (i__58387 + (1));
i__58387 = G__58399;
continue;
}
} else
{{
var G__58400 = (i__58387 + (1));
i__58387 = G__58400;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58388),iter__58385(cljs.core.chunk_rest(s__58386__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58388),null);
}
} else
{var kind = cljs.core.first(s__58386__$2);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);return cljs.core.cons(sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__58386__$1,class$,label,kind,s__58386__$2,temp__4126__auto__,G__58379,G__58380,G__58365,G__58366,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(s__58386__$1,class$,label,kind,s__58386__$2,temp__4126__auto__,G__58379,G__58380,G__58365,G__58366,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)),iter__58385(cljs.core.rest(s__58386__$2)));
} else
{{
var G__58401 = cljs.core.rest(s__58386__$2);
s__58386__$1 = G__58401;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__58379,G__58380,G__58365,G__58366,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
,null,null));
});})(G__58379,G__58380,G__58365,G__58366,___$1,map__58359,map__58359__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;return iter__20684__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"added","added",2057651688)], null));
})());var G__58382 = (function (){var G__58391 = null;var G__58392 = "]";return React.DOM.span(G__58391,G__58392);
})();return React.DOM.div(G__58379,G__58380,G__58381,G__58382);
})();var G__58368 = sablono.interpreter.interpret((cljs.core.truth_(component)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datom-content","div.datom-content",1558083752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),clojure.string.capitalize(cljs.core.name(component))], null),(function (){var G__58393 = component;return (stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1 ? stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1(G__58393) : stuttaford.dive_into_datomic.content.datom_content.call(null,G__58393));
})()], null):null));return React.DOM.div(G__58365,G__58366,G__58367,G__58368);
});})(owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58355.prototype.om$core$IInitState$ = true;
stuttaford.dive_into_datomic.t58355.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"example","example",-1755779144)], null);
});})(owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (_58357){var self__ = this;
var _58357__$1 = this;return self__.meta58356;
});})(owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function (_58357,meta58356__$1){var self__ = this;
var _58357__$1 = this;return (new stuttaford.dive_into_datomic.t58355(self__.vec__58305,self__.data__24197__auto__,self__.input_schema58309,self__.owner,self__.output_checker58311,self__.data,self__.p__58214,self__.input_checker58310,self__.output_schema58308,self__.datom,self__.opts__24198__auto__,self__.G__58312,self__.fnk58307,self__.validate__837__auto__,self__.ufv__,self__.map58306,self__.owner58212,meta58356__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;
stuttaford.dive_into_datomic.__GT_t58355 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__){
return (function __GT_t58355(vec__58305__$1,data__24197__auto____$1,input_schema58309__$1,owner__$1,output_checker58311__$1,data__$1,p__58214__$1,input_checker58310__$1,output_schema58308__$1,datom__$1,opts__24198__auto____$1,G__58312__$1,fnk58307__$1,validate__837__auto____$1,ufv____$1,map58306__$1,owner58212__$1,meta58356){return (new stuttaford.dive_into_datomic.t58355(vec__58305__$1,data__24197__auto____$1,input_schema58309__$1,owner__$1,output_checker58311__$1,data__$1,p__58214__$1,input_checker58310__$1,output_schema58308__$1,datom__$1,opts__24198__auto____$1,G__58312__$1,fnk58307__$1,validate__837__auto____$1,ufv____$1,map58306__$1,owner58212__$1,meta58356));
});})(owner,data,validate__837__auto__,ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
;
}
return (new stuttaford.dive_into_datomic.t58355(vec__58305,data__24197__auto__,input_schema58309,owner,output_checker58311,data,p__58214,input_checker58310,output_schema58308,datom,opts__24198__auto__,G__58312,fnk58307,validate__837__auto__,ufv__,map58306,owner58212,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58402 = (function (){var G__58394 = o__840__auto__;return (output_checker58311.cljs$core$IFn$_invoke$arity$1 ? output_checker58311.cljs$core$IFn$_invoke$arity$1(G__58394) : output_checker58311.call(null,G__58394));
})();if(cljs.core.truth_(temp__4126__auto___58402))
{var error__839__auto___58403 = temp__4126__auto___58402;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58307","fnk58307",422859545,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58403], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58308,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58403], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58308,input_schema58309,input_checker58310,output_checker58311,vec__58305,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema58308,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58309], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58212,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var datom = function (data__24197__auto__,owner58212,var_args){
var p__58214 = null;if (arguments.length > 2) {
  p__58214 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datom__delegate.call(this,data__24197__auto__,owner58212,p__58214);};
datom.cljs$lang$maxFixedArity = 2;
datom.cljs$lang$applyTo = (function (arglist__58404){
var data__24197__auto__ = cljs.core.first(arglist__58404);
arglist__58404 = cljs.core.next(arglist__58404);
var owner58212 = cljs.core.first(arglist__58404);
var p__58214 = cljs.core.rest(arglist__58404);
return datom__delegate(data__24197__auto__,owner58212,p__58214);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
stuttaford.dive_into_datomic.__GT_datom = (function() {
var __GT_datom = null;
var __GT_datom__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.datom,cursor__24166__auto__);
});
var __GT_datom__2 = (function (cursor__24166__auto__,m58213){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.datom,cursor__24166__auto__,m58213);
});
__GT_datom = function(cursor__24166__auto__,m58213){
switch(arguments.length){
case 1:
return __GT_datom__1.call(this,cursor__24166__auto__);
case 2:
return __GT_datom__2.call(this,cursor__24166__auto__,m58213);
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
var top_nav__delegate = function (data__24197__auto__,owner58405,p__58407){var vec__58584 = p__58407;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58584,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58589 = schema.core.Any;var input_schema58590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map58585","map58585",-1313168755,null))], null);var input_checker58591 = schema.core.checker(input_schema58590);var output_checker58592 = schema.core.checker(output_schema58589);return schema.core.schematize_fn(((function (ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function fnk58588(G__58593){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58593], null);var temp__4126__auto___58761 = (function (){var G__58677 = args__838__auto___58760;return (input_checker58591.cljs$core$IFn$_invoke$arity$1 ? input_checker58591.cljs$core$IFn$_invoke$arity$1(G__58677) : input_checker58591.call(null,G__58677));
})();if(cljs.core.truth_(temp__4126__auto___58761))
{var error__839__auto___58762 = temp__4126__auto___58761;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58588","fnk58588",1772234791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58762], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58590,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58760,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58762], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58585 = G__58593;while(true){
if(cljs.core.map_QMARK_(map58585))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58585], 0))));
}
var map58587 = plumbing.fnk.schema.safe_get(map58585,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map58587,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map58585,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map58586 = plumbing.fnk.schema.safe_get(map58585,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map58586,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.dive_into_datomic.t58678 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t58678 = (function (G__58593,data__24197__auto__,owner,view,input_checker58591,fnk58588,map58586,nav_items,map58585,owner58405,map58587,output_checker58592,opts__24198__auto__,vec__58584,input_schema58590,top_nav,output_schema58589,validate__837__auto__,ufv__,p__58407,meta58679){
this.G__58593 = G__58593;
this.data__24197__auto__ = data__24197__auto__;
this.owner = owner;
this.view = view;
this.input_checker58591 = input_checker58591;
this.fnk58588 = fnk58588;
this.map58586 = map58586;
this.nav_items = nav_items;
this.map58585 = map58585;
this.owner58405 = owner58405;
this.map58587 = map58587;
this.output_checker58592 = output_checker58592;
this.opts__24198__auto__ = opts__24198__auto__;
this.vec__58584 = vec__58584;
this.input_schema58590 = input_schema58590;
this.top_nav = top_nav;
this.output_schema58589 = output_schema58589;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.p__58407 = p__58407;
this.meta58679 = meta58679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t58678.cljs$lang$type = true;
stuttaford.dive_into_datomic.t58678.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t58678";
stuttaford.dive_into_datomic.t58678.cljs$lang$ctorPrWriter = ((function (nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.dive-into-datomic/t58678");
});})(nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58678.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t58678.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58678.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t58678.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20684__auto__ = ((function (c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function iter__58681(s__58682){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (){var s__58682__$1 = s__58682;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58682__$1);if(temp__4126__auto__)
{var s__58682__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58682__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__58682__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__58684 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__58683 = (0);while(true){
if((i__58683 < size__20683__auto__))
{var items = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__58683);cljs.core.chunk_append(b__58684,om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20684__auto__ = ((function (i__58683,items,c__20682__auto__,size__20683__auto__,b__58684,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function iter__58723(s__58724){return (new cljs.core.LazySeq(null,((function (i__58683,items,c__20682__auto__,size__20683__auto__,b__58684,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (){var s__58724__$1 = s__58724;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__58724__$1);if(temp__4126__auto____$1)
{var s__58724__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__58724__$2))
{var c__20682__auto____$1 = cljs.core.chunk_first(s__58724__$2);var size__20683__auto____$1 = cljs.core.count(c__20682__auto____$1);var b__58726 = cljs.core.chunk_buffer(size__20683__auto____$1);if((function (){var i__58725 = (0);while(true){
if((i__58725 < size__20683__auto____$1))
{var vec__58735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto____$1,i__58725);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58735,(0),null);var vec__58736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58735,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58736,(0),null);cljs.core.chunk_append(b__58726,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58737 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58725,i__58683,vec__58735,id,vec__58736,label,c__20682__auto____$1,size__20683__auto____$1,b__58726,s__58724__$2,temp__4126__auto____$1,items,c__20682__auto__,size__20683__auto__,b__58684,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__58725,i__58683,vec__58735,id,vec__58736,label,c__20682__auto____$1,size__20683__auto____$1,b__58726,s__58724__$2,temp__4126__auto____$1,items,c__20682__auto__,size__20683__auto__,b__58684,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
], null);var G__58737__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58737,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58737);return G__58737__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__58763 = (i__58725 + (1));
i__58725 = G__58763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58726),iter__58723(cljs.core.chunk_rest(s__58724__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58726),null);
}
} else
{var vec__58738 = cljs.core.first(s__58724__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58738,(0),null);var vec__58739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58738,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58739,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58740 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58683,vec__58738,id,vec__58739,label,s__58724__$2,temp__4126__auto____$1,items,c__20682__auto__,size__20683__auto__,b__58684,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__58683,vec__58738,id,vec__58739,label,s__58724__$2,temp__4126__auto____$1,items,c__20682__auto__,size__20683__auto__,b__58684,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
], null);var G__58740__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58740,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58740);return G__58740__$1;
})(),cljs.core.array_seq([label], 0)),iter__58723(cljs.core.rest(s__58724__$2)));
}
} else
{return null;
}
break;
}
});})(i__58683,items,c__20682__auto__,size__20683__auto__,b__58684,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
,null,null));
});})(i__58683,items,c__20682__auto__,size__20683__auto__,b__58684,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;return iter__20684__auto__(items);
})()], 0)));
{
var G__58764 = (i__58683 + (1));
i__58683 = G__58764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58684),iter__58681(cljs.core.chunk_rest(s__58682__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58684),null);
}
} else
{var items = cljs.core.first(s__58682__$2);return cljs.core.cons(om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20684__auto__ = ((function (items,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function iter__58741(s__58742){return (new cljs.core.LazySeq(null,((function (items,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (){var s__58742__$1 = s__58742;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__58742__$1);if(temp__4126__auto____$1)
{var s__58742__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__58742__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__58742__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__58744 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__58743 = (0);while(true){
if((i__58743 < size__20683__auto__))
{var vec__58753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__58743);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58753,(0),null);var vec__58754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58753,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58754,(0),null);cljs.core.chunk_append(b__58744,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58755 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58743,vec__58753,id,vec__58754,label,c__20682__auto__,size__20683__auto__,b__58744,s__58742__$2,temp__4126__auto____$1,items,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__58743,vec__58753,id,vec__58754,label,c__20682__auto__,size__20683__auto__,b__58744,s__58742__$2,temp__4126__auto____$1,items,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
], null);var G__58755__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58755,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58755);return G__58755__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__58765 = (i__58743 + (1));
i__58743 = G__58765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58744),iter__58741(cljs.core.chunk_rest(s__58742__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58744),null);
}
} else
{var vec__58756 = cljs.core.first(s__58742__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58756,(0),null);var vec__58757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58756,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58757,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58758 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58756,id,vec__58757,label,s__58742__$2,temp__4126__auto____$1,items,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__58756,id,vec__58757,label,s__58742__$2,temp__4126__auto____$1,items,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
], null);var G__58758__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58758,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58758);return G__58758__$1;
})(),cljs.core.array_seq([label], 0)),iter__58741(cljs.core.rest(s__58742__$2)));
}
} else
{return null;
}
break;
}
});})(items,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
,null,null));
});})(items,s__58682__$2,temp__4126__auto__,c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;return iter__20684__auto__(items);
})()], 0)),iter__58681(cljs.core.rest(s__58682__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
,null,null));
});})(c,___$1,nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;return iter__20684__auto__(self__.nav_items);
})()], 0));
});})(nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (_58680){var self__ = this;
var _58680__$1 = this;return self__.meta58679;
});})(nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function (_58680,meta58679__$1){var self__ = this;
var _58680__$1 = this;return (new stuttaford.dive_into_datomic.t58678(self__.G__58593,self__.data__24197__auto__,self__.owner,self__.view,self__.input_checker58591,self__.fnk58588,self__.map58586,self__.nav_items,self__.map58585,self__.owner58405,self__.map58587,self__.output_checker58592,self__.opts__24198__auto__,self__.vec__58584,self__.input_schema58590,self__.top_nav,self__.output_schema58589,self__.validate__837__auto__,self__.ufv__,self__.p__58407,meta58679__$1));
});})(nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;
stuttaford.dive_into_datomic.__GT_t58678 = ((function (nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__){
return (function __GT_t58678(G__58593__$1,data__24197__auto____$1,owner__$1,view__$1,input_checker58591__$1,fnk58588__$1,map58586__$1,nav_items__$1,map58585__$1,owner58405__$1,map58587__$1,output_checker58592__$1,opts__24198__auto____$1,vec__58584__$1,input_schema58590__$1,top_nav__$1,output_schema58589__$1,validate__837__auto____$1,ufv____$1,p__58407__$1,meta58679){return (new stuttaford.dive_into_datomic.t58678(G__58593__$1,data__24197__auto____$1,owner__$1,view__$1,input_checker58591__$1,fnk58588__$1,map58586__$1,nav_items__$1,map58585__$1,owner58405__$1,map58587__$1,output_checker58592__$1,opts__24198__auto____$1,vec__58584__$1,input_schema58590__$1,top_nav__$1,output_schema58589__$1,validate__837__auto____$1,ufv____$1,p__58407__$1,meta58679));
});})(nav_items,map58586,owner,view,map58587,validate__837__auto__,ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
;
}
return (new stuttaford.dive_into_datomic.t58678(G__58593,data__24197__auto__,owner,view,input_checker58591,fnk58588,map58586,nav_items,map58585,owner58405,map58587,output_checker58592,opts__24198__auto__,vec__58584,input_schema58590,top_nav,output_schema58589,validate__837__auto__,ufv__,p__58407,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58766 = (function (){var G__58759 = o__840__auto__;return (output_checker58592.cljs$core$IFn$_invoke$arity$1 ? output_checker58592.cljs$core$IFn$_invoke$arity$1(G__58759) : output_checker58592.call(null,G__58759));
})();if(cljs.core.truth_(temp__4126__auto___58766))
{var error__839__auto___58767 = temp__4126__auto___58766;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58588","fnk58588",1772234791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58767], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58589,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58767], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58589,input_schema58590,input_checker58591,output_checker58592,vec__58584,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema58589,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58590], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58405,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var top_nav = function (data__24197__auto__,owner58405,var_args){
var p__58407 = null;if (arguments.length > 2) {
  p__58407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24197__auto__,owner58405,p__58407);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__58768){
var data__24197__auto__ = cljs.core.first(arglist__58768);
arglist__58768 = cljs.core.next(arglist__58768);
var owner58405 = cljs.core.first(arglist__58768);
var p__58407 = cljs.core.rest(arglist__58768);
return top_nav__delegate(data__24197__auto__,owner58405,p__58407);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.dive_into_datomic.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.top_nav,cursor__24166__auto__);
});
var __GT_top_nav__2 = (function (cursor__24166__auto__,m58406){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.top_nav,cursor__24166__auto__,m58406);
});
__GT_top_nav = function(cursor__24166__auto__,m58406){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24166__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24166__auto__,m58406);
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
var app_view__delegate = function (data__24197__auto__,owner58769,p__58771){var vec__58890 = p__58771;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58890,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58893 = schema.core.Any;var input_schema58894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map58891","map58891",286269367,null))], null);var input_checker58895 = schema.core.checker(input_schema58894);var output_checker58896 = schema.core.checker(output_schema58893);return schema.core.schematize_fn(((function (ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function fnk58892(G__58897){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___59008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58897], null);var temp__4126__auto___59009 = (function (){var G__58953 = args__838__auto___59008;return (input_checker58895.cljs$core$IFn$_invoke$arity$1 ? input_checker58895.cljs$core$IFn$_invoke$arity$1(G__58953) : input_checker58895.call(null,G__58953));
})();if(cljs.core.truth_(temp__4126__auto___59009))
{var error__839__auto___59010 = temp__4126__auto___59009;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58892","fnk58892",-1939927839,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___59010], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58894,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___59008,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___59010], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58891 = G__58897;while(true){
if(cljs.core.map_QMARK_(map58891))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58891], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58891,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map58891,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t58954 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t58954 = (function (output_checker58896,fnk58892,data__24197__auto__,app_view,owner,view,output_schema58893,data,vec__58890,owner58769,input_checker58895,p__58771,opts__24198__auto__,G__58897,map58891,validate__837__auto__,input_schema58894,ufv__,meta58955){
this.output_checker58896 = output_checker58896;
this.fnk58892 = fnk58892;
this.data__24197__auto__ = data__24197__auto__;
this.app_view = app_view;
this.owner = owner;
this.view = view;
this.output_schema58893 = output_schema58893;
this.data = data;
this.vec__58890 = vec__58890;
this.owner58769 = owner58769;
this.input_checker58895 = input_checker58895;
this.p__58771 = p__58771;
this.opts__24198__auto__ = opts__24198__auto__;
this.G__58897 = G__58897;
this.map58891 = map58891;
this.validate__837__auto__ = validate__837__auto__;
this.input_schema58894 = input_schema58894;
this.ufv__ = ufv__;
this.meta58955 = meta58955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t58954.cljs$lang$type = true;
stuttaford.dive_into_datomic.t58954.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t58954";
stuttaford.dive_into_datomic.t58954.cljs$lang$ctorPrWriter = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.dive-into-datomic/t58954");
});})(owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58954.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t58954.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58954.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t58954.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__58957 = (function (){var G__58958 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,stuttaford.dive_into_datomic.nav_items));return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__58958) : self__.view.call(null,G__58958));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58957,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58957,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),stuttaford.dive_into_datomic.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.dive_into_datomic.nav_items], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__58961 = null;return React.DOM.div(G__58961);
})())], null)], null);
})());
});})(owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58954.prototype.om$core$IWillUnmount$ = true;
stuttaford.dive_into_datomic.t58954.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58954.prototype.om$core$IWillMount$ = true;
stuttaford.dive_into_datomic.t58954.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (state_58982){var state_val_58983 = (state_58982[(1)]);if((state_val_58983 === (7)))
{var inst_58965 = (state_58982[(7)]);var inst_58965__$1 = (state_58982[(2)]);var state_58982__$1 = (function (){var statearr_58984 = state_58982;(statearr_58984[(7)] = inst_58965__$1);
return statearr_58984;
})();if(cljs.core.truth_(inst_58965__$1))
{var statearr_58985_59011 = state_58982__$1;(statearr_58985_59011[(1)] = (8));
} else
{var statearr_58986_59012 = state_58982__$1;(statearr_58986_59012[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58983 === (1)))
{var state_58982__$1 = state_58982;var statearr_58987_59013 = state_58982__$1;(statearr_58987_59013[(2)] = null);
(statearr_58987_59013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58983 === (4)))
{var state_58982__$1 = state_58982;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58982__$1,(7),c);
} else
{if((state_val_58983 === (6)))
{var inst_58978 = (state_58982[(2)]);var state_58982__$1 = state_58982;var statearr_58988_59014 = state_58982__$1;(statearr_58988_59014[(2)] = inst_58978);
(statearr_58988_59014[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58983 === (3)))
{var inst_58980 = (state_58982[(2)]);var state_58982__$1 = state_58982;return cljs.core.async.impl.ioc_helpers.return_chan(state_58982__$1,inst_58980);
} else
{if((state_val_58983 === (2)))
{var state_58982__$1 = state_58982;var statearr_58989_59015 = state_58982__$1;(statearr_58989_59015[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58983 === (9)))
{var state_58982__$1 = state_58982;var statearr_58991_59016 = state_58982__$1;(statearr_58991_59016[(2)] = null);
(statearr_58991_59016[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58983 === (5)))
{var state_58982__$1 = state_58982;var statearr_58992_59017 = state_58982__$1;(statearr_58992_59017[(2)] = null);
(statearr_58992_59017[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58983 === (10)))
{var inst_58974 = (state_58982[(2)]);var state_58982__$1 = (function (){var statearr_58993 = state_58982;(statearr_58993[(8)] = inst_58974);
return statearr_58993;
})();var statearr_58994_59018 = state_58982__$1;(statearr_58994_59018[(2)] = null);
(statearr_58994_59018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58983 === (8)))
{var inst_58965 = (state_58982[(7)]);var inst_58968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58965,(0),null);var inst_58969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58965,(1),null);var inst_58970 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_58971 = (function (){var G__58995 = self__.data;var G__58996 = inst_58968;var G__58997 = inst_58969;var G__58998 = inst_58970;return (stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4(G__58995,G__58996,G__58997,G__58998) : stuttaford.dive_into_datomic.perform_action.call(null,G__58995,G__58996,G__58997,G__58998));
})();var state_58982__$1 = state_58982;var statearr_58999_59019 = state_58982__$1;(statearr_58999_59019[(2)] = inst_58971);
(statearr_58999_59019[(1)] = (10));
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
});})(c__22742__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;return ((function (switch__22727__auto__,c__22742__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_59003 = [null,null,null,null,null,null,null,null,null];(statearr_59003[(0)] = state_machine__22728__auto__);
(statearr_59003[(1)] = (1));
return statearr_59003;
});
var state_machine__22728__auto____1 = (function (state_58982){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_58982);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e59004){if((e59004 instanceof Object))
{var ex__22731__auto__ = e59004;var statearr_59005_59020 = state_58982;(statearr_59005_59020[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_58982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e59004;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59021 = state_58982;
state_58982 = G__59021;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_58982){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_58982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
})();var state__22744__auto__ = (function (){var statearr_59006 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_59006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto__);
return statearr_59006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
);
return c__22742__auto__;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (_58956){var self__ = this;
var _58956__$1 = this;return self__.meta58955;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;
stuttaford.dive_into_datomic.t58954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function (_58956,meta58955__$1){var self__ = this;
var _58956__$1 = this;return (new stuttaford.dive_into_datomic.t58954(self__.output_checker58896,self__.fnk58892,self__.data__24197__auto__,self__.app_view,self__.owner,self__.view,self__.output_schema58893,self__.data,self__.vec__58890,self__.owner58769,self__.input_checker58895,self__.p__58771,self__.opts__24198__auto__,self__.G__58897,self__.map58891,self__.validate__837__auto__,self__.input_schema58894,self__.ufv__,meta58955__$1));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;
stuttaford.dive_into_datomic.__GT_t58954 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__){
return (function __GT_t58954(output_checker58896__$1,fnk58892__$1,data__24197__auto____$1,app_view__$1,owner__$1,view__$1,output_schema58893__$1,data__$1,vec__58890__$1,owner58769__$1,input_checker58895__$1,p__58771__$1,opts__24198__auto____$1,G__58897__$1,map58891__$1,validate__837__auto____$1,input_schema58894__$1,ufv____$1,meta58955){return (new stuttaford.dive_into_datomic.t58954(output_checker58896__$1,fnk58892__$1,data__24197__auto____$1,app_view__$1,owner__$1,view__$1,output_schema58893__$1,data__$1,vec__58890__$1,owner58769__$1,input_checker58895__$1,p__58771__$1,opts__24198__auto____$1,G__58897__$1,map58891__$1,validate__837__auto____$1,input_schema58894__$1,ufv____$1,meta58955));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
;
}
return (new stuttaford.dive_into_datomic.t58954(output_checker58896,fnk58892,data__24197__auto__,app_view,owner,view,output_schema58893,data,vec__58890,owner58769,input_checker58895,p__58771,opts__24198__auto__,G__58897,map58891,validate__837__auto__,input_schema58894,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___59022 = (function (){var G__59007 = o__840__auto__;return (output_checker58896.cljs$core$IFn$_invoke$arity$1 ? output_checker58896.cljs$core$IFn$_invoke$arity$1(G__59007) : output_checker58896.call(null,G__59007));
})();if(cljs.core.truth_(temp__4126__auto___59022))
{var error__839__auto___59023 = temp__4126__auto___59022;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58892","fnk58892",-1939927839,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___59023], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58893,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___59023], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58893,input_schema58894,input_checker58895,output_checker58896,vec__58890,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema58893,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58894], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58769,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var app_view = function (data__24197__auto__,owner58769,var_args){
var p__58771 = null;if (arguments.length > 2) {
  p__58771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24197__auto__,owner58769,p__58771);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__59024){
var data__24197__auto__ = cljs.core.first(arglist__59024);
arglist__59024 = cljs.core.next(arglist__59024);
var owner58769 = cljs.core.first(arglist__59024);
var p__58771 = cljs.core.rest(arglist__59024);
return app_view__delegate(data__24197__auto__,owner58769,p__58771);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.dive_into_datomic.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.app_view,cursor__24166__auto__);
});
var __GT_app_view__2 = (function (cursor__24166__auto__,m58770){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.app_view,cursor__24166__auto__,m58770);
});
__GT_app_view = function(cursor__24166__auto__,m58770){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24166__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24166__auto__,m58770);
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