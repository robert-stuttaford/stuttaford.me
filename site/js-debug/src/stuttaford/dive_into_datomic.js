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
stuttaford.dive_into_datomic.perform_action = (function (){var method_table__21091__auto__ = (function (){var G__50222 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50222) : cljs.core.atom.call(null,G__50222));
})();var prefer_table__21092__auto__ = (function (){var G__50223 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50223) : cljs.core.atom.call(null,G__50223));
})();var method_cache__21093__auto__ = (function (){var G__50224 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50224) : cljs.core.atom.call(null,G__50224));
})();var cached_hierarchy__21094__auto__ = (function (){var G__50225 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50225) : cljs.core.atom.call(null,G__50225));
})();var hierarchy__21095__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21091__auto__,prefer_table__21092__auto__,method_cache__21093__auto__,cached_hierarchy__21094__auto__,hierarchy__21095__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21091__auto__,prefer_table__21092__auto__,method_cache__21093__auto__,cached_hierarchy__21094__auto__,hierarchy__21095__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21095__auto__,method_table__21091__auto__,prefer_table__21092__auto__,method_cache__21093__auto__,cached_hierarchy__21094__auto__));
})();
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cursor,op,value){throw ("Missing perform-method op: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));
}));
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"view","view",1247994814),value);
}));
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.home = (function() { 
var home__delegate = function (data__24457__auto__,owner50226,p__50228){var vec__50255 = p__50228;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50255,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema50258 = schema.core.Any;var input_schema50259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map50256","map50256",1412513817,null))], null);var input_checker50260 = schema.core.checker(input_schema50259);var output_checker50261 = schema.core.checker(output_schema50258);return schema.core.schematize_fn(((function (ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__){
return (function fnk50257(G__50262){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50262], null);var temp__4126__auto___50282 = (function (){var G__50272 = args__838__auto___50281;return (input_checker50260.cljs$core$IFn$_invoke$arity$1 ? input_checker50260.cljs$core$IFn$_invoke$arity$1(G__50272) : input_checker50260.call(null,G__50272));
})();if(cljs.core.truth_(temp__4126__auto___50282))
{var error__839__auto___50283 = temp__4126__auto___50282;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50257","fnk50257",-1763794132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50283], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50259,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50281,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50283], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map50256 = G__50262;while(true){
if(cljs.core.map_QMARK_(map50256))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map50256], 0))));
}
var data = plumbing.fnk.schema.safe_get(map50256,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map50256,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t50273 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t50273 = (function (owner50226,output_checker50261,owner,data,home,fnk50257,p__50228,input_schema50259,G__50262,opts__24458__auto__,map50256,input_checker50260,validate__837__auto__,vec__50255,ufv__,data__24457__auto__,output_schema50258,meta50274){
this.owner50226 = owner50226;
this.output_checker50261 = output_checker50261;
this.owner = owner;
this.data = data;
this.home = home;
this.fnk50257 = fnk50257;
this.p__50228 = p__50228;
this.input_schema50259 = input_schema50259;
this.G__50262 = G__50262;
this.opts__24458__auto__ = opts__24458__auto__;
this.map50256 = map50256;
this.input_checker50260 = input_checker50260;
this.validate__837__auto__ = validate__837__auto__;
this.vec__50255 = vec__50255;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.output_schema50258 = output_schema50258;
this.meta50274 = meta50274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t50273.cljs$lang$type = true;
stuttaford.dive_into_datomic.t50273.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t50273";
stuttaford.dive_into_datomic.t50273.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.dive-into-datomic/t50273");
});})(owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50273.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t50273.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "home";
});})(owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50273.prototype.om$core$IRender$ = true;
stuttaford.dive_into_datomic.t50273.prototype.om$core$IRender$render$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var G__50278 = null;var G__50279 = "Dive into Datomic interactive diagrams.";return React.DOM.div(G__50278,G__50279);
});})(owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__){
return (function (_50275){var self__ = this;
var _50275__$1 = this;return self__.meta50274;
});})(owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__){
return (function (_50275,meta50274__$1){var self__ = this;
var _50275__$1 = this;return (new stuttaford.dive_into_datomic.t50273(self__.owner50226,self__.output_checker50261,self__.owner,self__.data,self__.home,self__.fnk50257,self__.p__50228,self__.input_schema50259,self__.G__50262,self__.opts__24458__auto__,self__.map50256,self__.input_checker50260,self__.validate__837__auto__,self__.vec__50255,self__.ufv__,self__.data__24457__auto__,self__.output_schema50258,meta50274__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__))
;
stuttaford.dive_into_datomic.__GT_t50273 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__){
return (function __GT_t50273(owner50226__$1,output_checker50261__$1,owner__$1,data__$1,home__$1,fnk50257__$1,p__50228__$1,input_schema50259__$1,G__50262__$1,opts__24458__auto____$1,map50256__$1,input_checker50260__$1,validate__837__auto____$1,vec__50255__$1,ufv____$1,data__24457__auto____$1,output_schema50258__$1,meta50274){return (new stuttaford.dive_into_datomic.t50273(owner50226__$1,output_checker50261__$1,owner__$1,data__$1,home__$1,fnk50257__$1,p__50228__$1,input_schema50259__$1,G__50262__$1,opts__24458__auto____$1,map50256__$1,input_checker50260__$1,validate__837__auto____$1,vec__50255__$1,ufv____$1,data__24457__auto____$1,output_schema50258__$1,meta50274));
});})(owner,data,validate__837__auto__,ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__))
;
}
return (new stuttaford.dive_into_datomic.t50273(owner50226,output_checker50261,owner,data,home,fnk50257,p__50228,input_schema50259,G__50262,opts__24458__auto__,map50256,input_checker50260,validate__837__auto__,vec__50255,ufv__,data__24457__auto__,output_schema50258,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50284 = (function (){var G__50280 = o__840__auto__;return (output_checker50261.cljs$core$IFn$_invoke$arity$1 ? output_checker50261.cljs$core$IFn$_invoke$arity$1(G__50280) : output_checker50261.call(null,G__50280));
})();if(cljs.core.truth_(temp__4126__auto___50284))
{var error__839__auto___50285 = temp__4126__auto___50284;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50257","fnk50257",-1763794132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50285], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50258,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50285], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema50258,input_schema50259,input_checker50260,output_checker50261,vec__50255,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema50258,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50259], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50226,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var home = function (data__24457__auto__,owner50226,var_args){
var p__50228 = null;if (arguments.length > 2) {
  p__50228 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return home__delegate.call(this,data__24457__auto__,owner50226,p__50228);};
home.cljs$lang$maxFixedArity = 2;
home.cljs$lang$applyTo = (function (arglist__50286){
var data__24457__auto__ = cljs.core.first(arglist__50286);
arglist__50286 = cljs.core.next(arglist__50286);
var owner50226 = cljs.core.first(arglist__50286);
var p__50228 = cljs.core.rest(arglist__50286);
return home__delegate(data__24457__auto__,owner50226,p__50228);
});
home.cljs$core$IFn$_invoke$arity$variadic = home__delegate;
return home;
})()
;
stuttaford.dive_into_datomic.__GT_home = (function() {
var __GT_home = null;
var __GT_home__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.home,cursor__24426__auto__);
});
var __GT_home__2 = (function (cursor__24426__auto__,m50227){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.home,cursor__24426__auto__,m50227);
});
__GT_home = function(cursor__24426__auto__,m50227){
switch(arguments.length){
case 1:
return __GT_home__1.call(this,cursor__24426__auto__);
case 2:
return __GT_home__2.call(this,cursor__24426__auto__,m50227);
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
var datom__delegate = function (data__24457__auto__,owner50287,p__50289){var vec__50380 = p__50289;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50380,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema50383 = schema.core.Any;var input_schema50384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map50381","map50381",-637163039,null))], null);var input_checker50385 = schema.core.checker(input_schema50384);var output_checker50386 = schema.core.checker(output_schema50383);return schema.core.schematize_fn(((function (ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function fnk50382(G__50387){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50387], null);var temp__4126__auto___50471 = (function (){var G__50429 = args__838__auto___50470;return (input_checker50385.cljs$core$IFn$_invoke$arity$1 ? input_checker50385.cljs$core$IFn$_invoke$arity$1(G__50429) : input_checker50385.call(null,G__50429));
})();if(cljs.core.truth_(temp__4126__auto___50471))
{var error__839__auto___50472 = temp__4126__auto___50471;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50382","fnk50382",-799575398,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50472], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50384,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50470,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50472], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map50381 = G__50387;while(true){
if(cljs.core.map_QMARK_(map50381))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map50381], 0))));
}
var data = plumbing.fnk.schema.safe_get(map50381,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map50381,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t50430 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t50430 = (function (owner50287,map50381,output_schema50383,owner,data,input_checker50385,datom,p__50289,opts__24458__auto__,input_schema50384,fnk50382,validate__837__auto__,ufv__,data__24457__auto__,output_checker50386,vec__50380,G__50387,meta50431){
this.owner50287 = owner50287;
this.map50381 = map50381;
this.output_schema50383 = output_schema50383;
this.owner = owner;
this.data = data;
this.input_checker50385 = input_checker50385;
this.datom = datom;
this.p__50289 = p__50289;
this.opts__24458__auto__ = opts__24458__auto__;
this.input_schema50384 = input_schema50384;
this.fnk50382 = fnk50382;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.output_checker50386 = output_checker50386;
this.vec__50380 = vec__50380;
this.G__50387 = G__50387;
this.meta50431 = meta50431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t50430.cljs$lang$type = true;
stuttaford.dive_into_datomic.t50430.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t50430";
stuttaford.dive_into_datomic.t50430.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.dive-into-datomic/t50430");
});})(owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50430.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t50430.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datom";
});})(owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50430.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t50430.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (_,p__50433){var self__ = this;
var map__50434 = p__50433;var map__50434__$1 = ((cljs.core.seq_QMARK_(map__50434))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50434):map__50434);var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50434__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50434__$1,new cljs.core.Keyword(null,"component","component",1555936782));var ___$1 = this;var G__50440 = {"className": "datom"};var G__50441 = (function (){var attrs50435 = om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),null);
});})(G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
], null),cljs.core.array_seq(["Clear"], 0)),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20913__auto__ = ((function (G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function iter__50444(s__50445){return (new cljs.core.LazySeq(null,((function (G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (){var s__50445__$1 = s__50445;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50445__$1);if(temp__4126__auto__)
{var s__50445__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50445__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__50445__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__50447 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__50446 = (0);while(true){
if((i__50446 < size__20912__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__50446);cljs.core.chunk_append(b__50447,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50452 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50446,kind,c__20911__auto__,size__20912__auto__,b__50447,s__50445__$2,temp__4126__auto__,G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(i__50446,kind,c__20911__auto__,size__20912__auto__,b__50447,s__50445__$2,temp__4126__auto__,G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
], null);var G__50452__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50452,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50452);return G__50452__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)));
{
var G__50473 = (i__50446 + (1));
i__50446 = G__50473;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50447),iter__50444(cljs.core.chunk_rest(s__50445__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50447),null);
}
} else
{var kind = cljs.core.first(s__50445__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50453 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (kind,s__50445__$2,temp__4126__auto__,G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(kind,s__50445__$2,temp__4126__auto__,G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
], null);var G__50453__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50453,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50453);return G__50453__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)),iter__50444(cljs.core.rest(s__50445__$2)));
}
} else
{return null;
}
break;
}
});})(G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
,null,null));
});})(G__50440,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;return iter__20913__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.Keyword(null,"values","values",372645556)], null));
})()], 0))], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs50435))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navigation"], null)], null),attrs50435], 0))):{"className": "navigation"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50435))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50435)], null))));
})();var G__50442 = (function (){var G__50454 = {"className": "datom-tuple"};var G__50455 = (function (){var G__50458 = null;var G__50459 = "[";return React.DOM.span(G__50458,G__50459);
})();var G__50456 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20913__auto__ = ((function (G__50454,G__50455,G__50440,G__50441,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function iter__50460(s__50461){return (new cljs.core.LazySeq(null,((function (G__50454,G__50455,G__50440,G__50441,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (){var s__50461__$1 = s__50461;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50461__$1);if(temp__4126__auto__)
{var s__50461__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50461__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__50461__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__50463 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__50462 = (0);while(true){
if((i__50462 < size__20912__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__50462);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);cljs.core.chunk_append(b__50463,sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50462,s__50461__$1,class$,label,kind,c__20911__auto__,size__20912__auto__,b__50463,s__50461__$2,temp__4126__auto__,G__50454,G__50455,G__50440,G__50441,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(i__50462,s__50461__$1,class$,label,kind,c__20911__auto__,size__20912__auto__,b__50463,s__50461__$2,temp__4126__auto__,G__50454,G__50455,G__50440,G__50441,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)));
{
var G__50474 = (i__50462 + (1));
i__50462 = G__50474;
continue;
}
} else
{{
var G__50475 = (i__50462 + (1));
i__50462 = G__50475;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50463),iter__50460(cljs.core.chunk_rest(s__50461__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50463),null);
}
} else
{var kind = cljs.core.first(s__50461__$2);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);return cljs.core.cons(sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__50461__$1,class$,label,kind,s__50461__$2,temp__4126__auto__,G__50454,G__50455,G__50440,G__50441,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(s__50461__$1,class$,label,kind,s__50461__$2,temp__4126__auto__,G__50454,G__50455,G__50440,G__50441,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)),iter__50460(cljs.core.rest(s__50461__$2)));
} else
{{
var G__50476 = cljs.core.rest(s__50461__$2);
s__50461__$1 = G__50476;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__50454,G__50455,G__50440,G__50441,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
,null,null));
});})(G__50454,G__50455,G__50440,G__50441,___$1,map__50434,map__50434__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;return iter__20913__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"added","added",2057651688)], null));
})());var G__50457 = (function (){var G__50466 = null;var G__50467 = "]";return React.DOM.span(G__50466,G__50467);
})();return React.DOM.div(G__50454,G__50455,G__50456,G__50457);
})();var G__50443 = sablono.interpreter.interpret((cljs.core.truth_(component)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datom-content","div.datom-content",1558083752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),clojure.string.capitalize(cljs.core.name(component))], null),(function (){var G__50468 = component;return (stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1 ? stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1(G__50468) : stuttaford.dive_into_datomic.content.datom_content.call(null,G__50468));
})()], null):null));return React.DOM.div(G__50440,G__50441,G__50442,G__50443);
});})(owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50430.prototype.om$core$IInitState$ = true;
stuttaford.dive_into_datomic.t50430.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"example","example",-1755779144)], null);
});})(owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (_50432){var self__ = this;
var _50432__$1 = this;return self__.meta50431;
});})(owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function (_50432,meta50431__$1){var self__ = this;
var _50432__$1 = this;return (new stuttaford.dive_into_datomic.t50430(self__.owner50287,self__.map50381,self__.output_schema50383,self__.owner,self__.data,self__.input_checker50385,self__.datom,self__.p__50289,self__.opts__24458__auto__,self__.input_schema50384,self__.fnk50382,self__.validate__837__auto__,self__.ufv__,self__.data__24457__auto__,self__.output_checker50386,self__.vec__50380,self__.G__50387,meta50431__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;
stuttaford.dive_into_datomic.__GT_t50430 = ((function (owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__){
return (function __GT_t50430(owner50287__$1,map50381__$1,output_schema50383__$1,owner__$1,data__$1,input_checker50385__$1,datom__$1,p__50289__$1,opts__24458__auto____$1,input_schema50384__$1,fnk50382__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,output_checker50386__$1,vec__50380__$1,G__50387__$1,meta50431){return (new stuttaford.dive_into_datomic.t50430(owner50287__$1,map50381__$1,output_schema50383__$1,owner__$1,data__$1,input_checker50385__$1,datom__$1,p__50289__$1,opts__24458__auto____$1,input_schema50384__$1,fnk50382__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,output_checker50386__$1,vec__50380__$1,G__50387__$1,meta50431));
});})(owner,data,validate__837__auto__,ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
;
}
return (new stuttaford.dive_into_datomic.t50430(owner50287,map50381,output_schema50383,owner,data,input_checker50385,datom,p__50289,opts__24458__auto__,input_schema50384,fnk50382,validate__837__auto__,ufv__,data__24457__auto__,output_checker50386,vec__50380,G__50387,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50477 = (function (){var G__50469 = o__840__auto__;return (output_checker50386.cljs$core$IFn$_invoke$arity$1 ? output_checker50386.cljs$core$IFn$_invoke$arity$1(G__50469) : output_checker50386.call(null,G__50469));
})();if(cljs.core.truth_(temp__4126__auto___50477))
{var error__839__auto___50478 = temp__4126__auto___50477;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50382","fnk50382",-799575398,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50478], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50383,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50478], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema50383,input_schema50384,input_checker50385,output_checker50386,vec__50380,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema50383,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50384], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50287,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var datom = function (data__24457__auto__,owner50287,var_args){
var p__50289 = null;if (arguments.length > 2) {
  p__50289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datom__delegate.call(this,data__24457__auto__,owner50287,p__50289);};
datom.cljs$lang$maxFixedArity = 2;
datom.cljs$lang$applyTo = (function (arglist__50479){
var data__24457__auto__ = cljs.core.first(arglist__50479);
arglist__50479 = cljs.core.next(arglist__50479);
var owner50287 = cljs.core.first(arglist__50479);
var p__50289 = cljs.core.rest(arglist__50479);
return datom__delegate(data__24457__auto__,owner50287,p__50289);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
stuttaford.dive_into_datomic.__GT_datom = (function() {
var __GT_datom = null;
var __GT_datom__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.datom,cursor__24426__auto__);
});
var __GT_datom__2 = (function (cursor__24426__auto__,m50288){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.datom,cursor__24426__auto__,m50288);
});
__GT_datom = function(cursor__24426__auto__,m50288){
switch(arguments.length){
case 1:
return __GT_datom__1.call(this,cursor__24426__auto__);
case 2:
return __GT_datom__2.call(this,cursor__24426__auto__,m50288);
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
var top_nav__delegate = function (data__24457__auto__,owner50480,p__50482){var vec__50659 = p__50482;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50659,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema50664 = schema.core.Any;var input_schema50665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map50660","map50660",1562436771,null))], null);var input_checker50666 = schema.core.checker(input_schema50665);var output_checker50667 = schema.core.checker(output_schema50664);return schema.core.schematize_fn(((function (ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function fnk50663(G__50668){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50668], null);var temp__4126__auto___50836 = (function (){var G__50752 = args__838__auto___50835;return (input_checker50666.cljs$core$IFn$_invoke$arity$1 ? input_checker50666.cljs$core$IFn$_invoke$arity$1(G__50752) : input_checker50666.call(null,G__50752));
})();if(cljs.core.truth_(temp__4126__auto___50836))
{var error__839__auto___50837 = temp__4126__auto___50836;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50663","fnk50663",1176975201,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50837], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50665,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50835,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50837], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map50660 = G__50668;while(true){
if(cljs.core.map_QMARK_(map50660))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map50660], 0))));
}
var map50662 = plumbing.fnk.schema.safe_get(map50660,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map50662,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map50660,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map50661 = plumbing.fnk.schema.safe_get(map50660,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map50661,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.dive_into_datomic.t50753 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t50753 = (function (fnk50663,map50661,output_checker50667,input_checker50666,map50660,owner,map50662,view,G__50668,nav_items,owner50480,vec__50659,top_nav,opts__24458__auto__,input_schema50665,output_schema50664,validate__837__auto__,p__50482,ufv__,data__24457__auto__,meta50754){
this.fnk50663 = fnk50663;
this.map50661 = map50661;
this.output_checker50667 = output_checker50667;
this.input_checker50666 = input_checker50666;
this.map50660 = map50660;
this.owner = owner;
this.map50662 = map50662;
this.view = view;
this.G__50668 = G__50668;
this.nav_items = nav_items;
this.owner50480 = owner50480;
this.vec__50659 = vec__50659;
this.top_nav = top_nav;
this.opts__24458__auto__ = opts__24458__auto__;
this.input_schema50665 = input_schema50665;
this.output_schema50664 = output_schema50664;
this.validate__837__auto__ = validate__837__auto__;
this.p__50482 = p__50482;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.meta50754 = meta50754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t50753.cljs$lang$type = true;
stuttaford.dive_into_datomic.t50753.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t50753";
stuttaford.dive_into_datomic.t50753.cljs$lang$ctorPrWriter = ((function (nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.dive-into-datomic/t50753");
});})(nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50753.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t50753.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50753.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t50753.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20913__auto__ = ((function (c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function iter__50756(s__50757){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (){var s__50757__$1 = s__50757;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50757__$1);if(temp__4126__auto__)
{var s__50757__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50757__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__50757__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__50759 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__50758 = (0);while(true){
if((i__50758 < size__20912__auto__))
{var items = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__50758);cljs.core.chunk_append(b__50759,om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20913__auto__ = ((function (i__50758,items,c__20911__auto__,size__20912__auto__,b__50759,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function iter__50798(s__50799){return (new cljs.core.LazySeq(null,((function (i__50758,items,c__20911__auto__,size__20912__auto__,b__50759,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (){var s__50799__$1 = s__50799;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__50799__$1);if(temp__4126__auto____$1)
{var s__50799__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__50799__$2))
{var c__20911__auto____$1 = cljs.core.chunk_first(s__50799__$2);var size__20912__auto____$1 = cljs.core.count(c__20911__auto____$1);var b__50801 = cljs.core.chunk_buffer(size__20912__auto____$1);if((function (){var i__50800 = (0);while(true){
if((i__50800 < size__20912__auto____$1))
{var vec__50810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto____$1,i__50800);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50810,(0),null);var vec__50811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50810,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50811,(0),null);cljs.core.chunk_append(b__50801,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50812 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50800,i__50758,vec__50810,id,vec__50811,label,c__20911__auto____$1,size__20912__auto____$1,b__50801,s__50799__$2,temp__4126__auto____$1,items,c__20911__auto__,size__20912__auto__,b__50759,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__50800,i__50758,vec__50810,id,vec__50811,label,c__20911__auto____$1,size__20912__auto____$1,b__50801,s__50799__$2,temp__4126__auto____$1,items,c__20911__auto__,size__20912__auto__,b__50759,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
], null);var G__50812__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50812,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50812);return G__50812__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__50838 = (i__50800 + (1));
i__50800 = G__50838;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50801),iter__50798(cljs.core.chunk_rest(s__50799__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50801),null);
}
} else
{var vec__50813 = cljs.core.first(s__50799__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50813,(0),null);var vec__50814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50813,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50814,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50815 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50758,vec__50813,id,vec__50814,label,s__50799__$2,temp__4126__auto____$1,items,c__20911__auto__,size__20912__auto__,b__50759,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__50758,vec__50813,id,vec__50814,label,s__50799__$2,temp__4126__auto____$1,items,c__20911__auto__,size__20912__auto__,b__50759,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
], null);var G__50815__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50815,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50815);return G__50815__$1;
})(),cljs.core.array_seq([label], 0)),iter__50798(cljs.core.rest(s__50799__$2)));
}
} else
{return null;
}
break;
}
});})(i__50758,items,c__20911__auto__,size__20912__auto__,b__50759,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
,null,null));
});})(i__50758,items,c__20911__auto__,size__20912__auto__,b__50759,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;return iter__20913__auto__(items);
})()], 0)));
{
var G__50839 = (i__50758 + (1));
i__50758 = G__50839;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50759),iter__50756(cljs.core.chunk_rest(s__50757__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50759),null);
}
} else
{var items = cljs.core.first(s__50757__$2);return cljs.core.cons(om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20913__auto__ = ((function (items,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function iter__50816(s__50817){return (new cljs.core.LazySeq(null,((function (items,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (){var s__50817__$1 = s__50817;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__50817__$1);if(temp__4126__auto____$1)
{var s__50817__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__50817__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__50817__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__50819 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__50818 = (0);while(true){
if((i__50818 < size__20912__auto__))
{var vec__50828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__50818);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50828,(0),null);var vec__50829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50828,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50829,(0),null);cljs.core.chunk_append(b__50819,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50830 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50818,vec__50828,id,vec__50829,label,c__20911__auto__,size__20912__auto__,b__50819,s__50817__$2,temp__4126__auto____$1,items,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__50818,vec__50828,id,vec__50829,label,c__20911__auto__,size__20912__auto__,b__50819,s__50817__$2,temp__4126__auto____$1,items,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
], null);var G__50830__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50830,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50830);return G__50830__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__50840 = (i__50818 + (1));
i__50818 = G__50840;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50819),iter__50816(cljs.core.chunk_rest(s__50817__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50819),null);
}
} else
{var vec__50831 = cljs.core.first(s__50817__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50831,(0),null);var vec__50832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50831,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50832,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50833 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__50831,id,vec__50832,label,s__50817__$2,temp__4126__auto____$1,items,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__50831,id,vec__50832,label,s__50817__$2,temp__4126__auto____$1,items,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
], null);var G__50833__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50833,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50833);return G__50833__$1;
})(),cljs.core.array_seq([label], 0)),iter__50816(cljs.core.rest(s__50817__$2)));
}
} else
{return null;
}
break;
}
});})(items,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
,null,null));
});})(items,s__50757__$2,temp__4126__auto__,c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;return iter__20913__auto__(items);
})()], 0)),iter__50756(cljs.core.rest(s__50757__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
,null,null));
});})(c,___$1,nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;return iter__20913__auto__(self__.nav_items);
})()], 0));
});})(nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (_50755){var self__ = this;
var _50755__$1 = this;return self__.meta50754;
});})(nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t50753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function (_50755,meta50754__$1){var self__ = this;
var _50755__$1 = this;return (new stuttaford.dive_into_datomic.t50753(self__.fnk50663,self__.map50661,self__.output_checker50667,self__.input_checker50666,self__.map50660,self__.owner,self__.map50662,self__.view,self__.G__50668,self__.nav_items,self__.owner50480,self__.vec__50659,self__.top_nav,self__.opts__24458__auto__,self__.input_schema50665,self__.output_schema50664,self__.validate__837__auto__,self__.p__50482,self__.ufv__,self__.data__24457__auto__,meta50754__$1));
});})(nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;
stuttaford.dive_into_datomic.__GT_t50753 = ((function (nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__){
return (function __GT_t50753(fnk50663__$1,map50661__$1,output_checker50667__$1,input_checker50666__$1,map50660__$1,owner__$1,map50662__$1,view__$1,G__50668__$1,nav_items__$1,owner50480__$1,vec__50659__$1,top_nav__$1,opts__24458__auto____$1,input_schema50665__$1,output_schema50664__$1,validate__837__auto____$1,p__50482__$1,ufv____$1,data__24457__auto____$1,meta50754){return (new stuttaford.dive_into_datomic.t50753(fnk50663__$1,map50661__$1,output_checker50667__$1,input_checker50666__$1,map50660__$1,owner__$1,map50662__$1,view__$1,G__50668__$1,nav_items__$1,owner50480__$1,vec__50659__$1,top_nav__$1,opts__24458__auto____$1,input_schema50665__$1,output_schema50664__$1,validate__837__auto____$1,p__50482__$1,ufv____$1,data__24457__auto____$1,meta50754));
});})(nav_items,map50661,owner,view,map50662,validate__837__auto__,ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
;
}
return (new stuttaford.dive_into_datomic.t50753(fnk50663,map50661,output_checker50667,input_checker50666,map50660,owner,map50662,view,G__50668,nav_items,owner50480,vec__50659,top_nav,opts__24458__auto__,input_schema50665,output_schema50664,validate__837__auto__,p__50482,ufv__,data__24457__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50841 = (function (){var G__50834 = o__840__auto__;return (output_checker50667.cljs$core$IFn$_invoke$arity$1 ? output_checker50667.cljs$core$IFn$_invoke$arity$1(G__50834) : output_checker50667.call(null,G__50834));
})();if(cljs.core.truth_(temp__4126__auto___50841))
{var error__839__auto___50842 = temp__4126__auto___50841;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50663","fnk50663",1176975201,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50842], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50664,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50842], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema50664,input_schema50665,input_checker50666,output_checker50667,vec__50659,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema50664,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50665], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50480,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var top_nav = function (data__24457__auto__,owner50480,var_args){
var p__50482 = null;if (arguments.length > 2) {
  p__50482 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24457__auto__,owner50480,p__50482);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__50843){
var data__24457__auto__ = cljs.core.first(arglist__50843);
arglist__50843 = cljs.core.next(arglist__50843);
var owner50480 = cljs.core.first(arglist__50843);
var p__50482 = cljs.core.rest(arglist__50843);
return top_nav__delegate(data__24457__auto__,owner50480,p__50482);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.dive_into_datomic.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.top_nav,cursor__24426__auto__);
});
var __GT_top_nav__2 = (function (cursor__24426__auto__,m50481){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.top_nav,cursor__24426__auto__,m50481);
});
__GT_top_nav = function(cursor__24426__auto__,m50481){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24426__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24426__auto__,m50481);
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
var app_view__delegate = function (data__24457__auto__,owner50844,p__50846){var vec__50965 = p__50846;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50965,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema50968 = schema.core.Any;var input_schema50969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map50966","map50966",-1226641540,null))], null);var input_checker50970 = schema.core.checker(input_schema50969);var output_checker50971 = schema.core.checker(output_schema50968);return schema.core.schematize_fn(((function (ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function fnk50967(G__50972){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50972], null);var temp__4126__auto___51084 = (function (){var G__51028 = args__838__auto___51083;return (input_checker50970.cljs$core$IFn$_invoke$arity$1 ? input_checker50970.cljs$core$IFn$_invoke$arity$1(G__51028) : input_checker50970.call(null,G__51028));
})();if(cljs.core.truth_(temp__4126__auto___51084))
{var error__839__auto___51085 = temp__4126__auto___51084;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50967","fnk50967",1780200967,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51085], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50969,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51083,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51085], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map50966 = G__50972;while(true){
if(cljs.core.map_QMARK_(map50966))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map50966], 0))));
}
var data = plumbing.fnk.schema.safe_get(map50966,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map50966,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t51029 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t51029 = (function (vec__50965,app_view,owner,view,data,fnk50967,output_checker50971,input_checker50970,opts__24458__auto__,owner50844,input_schema50969,validate__837__auto__,output_schema50968,map50966,ufv__,data__24457__auto__,G__50972,p__50846,meta51030){
this.vec__50965 = vec__50965;
this.app_view = app_view;
this.owner = owner;
this.view = view;
this.data = data;
this.fnk50967 = fnk50967;
this.output_checker50971 = output_checker50971;
this.input_checker50970 = input_checker50970;
this.opts__24458__auto__ = opts__24458__auto__;
this.owner50844 = owner50844;
this.input_schema50969 = input_schema50969;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema50968 = output_schema50968;
this.map50966 = map50966;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.G__50972 = G__50972;
this.p__50846 = p__50846;
this.meta51030 = meta51030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t51029.cljs$lang$type = true;
stuttaford.dive_into_datomic.t51029.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t51029";
stuttaford.dive_into_datomic.t51029.cljs$lang$ctorPrWriter = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.dive-into-datomic/t51029");
});})(owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t51029.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t51029.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t51029.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t51029.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__51032 = (function (){var G__51033 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,stuttaford.dive_into_datomic.nav_items));return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__51033) : self__.view.call(null,G__51033));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51032,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51032,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),stuttaford.dive_into_datomic.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.dive_into_datomic.nav_items], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__51036 = null;return React.DOM.div(G__51036);
})())], null)], null);
})());
});})(owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t51029.prototype.om$core$IWillUnmount$ = true;
stuttaford.dive_into_datomic.t51029.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t51029.prototype.om$core$IWillMount$ = true;
stuttaford.dive_into_datomic.t51029.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__23002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (state_51057){var state_val_51058 = (state_51057[(1)]);if((state_val_51058 === (7)))
{var inst_51040 = (state_51057[(7)]);var inst_51040__$1 = (state_51057[(2)]);var state_51057__$1 = (function (){var statearr_51059 = state_51057;(statearr_51059[(7)] = inst_51040__$1);
return statearr_51059;
})();if(cljs.core.truth_(inst_51040__$1))
{var statearr_51060_51086 = state_51057__$1;(statearr_51060_51086[(1)] = (8));
} else
{var statearr_51061_51087 = state_51057__$1;(statearr_51061_51087[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51058 === (1)))
{var state_51057__$1 = state_51057;var statearr_51062_51088 = state_51057__$1;(statearr_51062_51088[(2)] = null);
(statearr_51062_51088[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51058 === (4)))
{var state_51057__$1 = state_51057;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51057__$1,(7),c);
} else
{if((state_val_51058 === (6)))
{var inst_51053 = (state_51057[(2)]);var state_51057__$1 = state_51057;var statearr_51063_51089 = state_51057__$1;(statearr_51063_51089[(2)] = inst_51053);
(statearr_51063_51089[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51058 === (3)))
{var inst_51055 = (state_51057[(2)]);var state_51057__$1 = state_51057;return cljs.core.async.impl.ioc_helpers.return_chan(state_51057__$1,inst_51055);
} else
{if((state_val_51058 === (2)))
{var state_51057__$1 = state_51057;var statearr_51064_51090 = state_51057__$1;(statearr_51064_51090[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51058 === (9)))
{var state_51057__$1 = state_51057;var statearr_51066_51091 = state_51057__$1;(statearr_51066_51091[(2)] = null);
(statearr_51066_51091[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51058 === (5)))
{var state_51057__$1 = state_51057;var statearr_51067_51092 = state_51057__$1;(statearr_51067_51092[(2)] = null);
(statearr_51067_51092[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51058 === (10)))
{var inst_51049 = (state_51057[(2)]);var state_51057__$1 = (function (){var statearr_51068 = state_51057;(statearr_51068[(8)] = inst_51049);
return statearr_51068;
})();var statearr_51069_51093 = state_51057__$1;(statearr_51069_51093[(2)] = null);
(statearr_51069_51093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51058 === (8)))
{var inst_51040 = (state_51057[(7)]);var inst_51043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51040,(0),null);var inst_51044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51040,(1),null);var inst_51045 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_51046 = (function (){var G__51070 = self__.data;var G__51071 = inst_51043;var G__51072 = inst_51044;var G__51073 = inst_51045;return (stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4(G__51070,G__51071,G__51072,G__51073) : stuttaford.dive_into_datomic.perform_action.call(null,G__51070,G__51071,G__51072,G__51073));
})();var state_51057__$1 = state_51057;var statearr_51074_51094 = state_51057__$1;(statearr_51074_51094[(2)] = inst_51046);
(statearr_51074_51094[(1)] = (10));
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
});})(c__23002__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;return ((function (switch__22987__auto__,c__23002__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_51078 = [null,null,null,null,null,null,null,null,null];(statearr_51078[(0)] = state_machine__22988__auto__);
(statearr_51078[(1)] = (1));
return statearr_51078;
});
var state_machine__22988__auto____1 = (function (state_51057){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_51057);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e51079){if((e51079 instanceof Object))
{var ex__22991__auto__ = e51079;var statearr_51080_51095 = state_51057;(statearr_51080_51095[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51057);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51079;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51096 = state_51057;
state_51057 = G__51096;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_51057){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_51057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
})();var state__23004__auto__ = (function (){var statearr_51081 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_51081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto__);
return statearr_51081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
);
return c__23002__auto__;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t51029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (_51031){var self__ = this;
var _51031__$1 = this;return self__.meta51030;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;
stuttaford.dive_into_datomic.t51029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function (_51031,meta51030__$1){var self__ = this;
var _51031__$1 = this;return (new stuttaford.dive_into_datomic.t51029(self__.vec__50965,self__.app_view,self__.owner,self__.view,self__.data,self__.fnk50967,self__.output_checker50971,self__.input_checker50970,self__.opts__24458__auto__,self__.owner50844,self__.input_schema50969,self__.validate__837__auto__,self__.output_schema50968,self__.map50966,self__.ufv__,self__.data__24457__auto__,self__.G__50972,self__.p__50846,meta51030__$1));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;
stuttaford.dive_into_datomic.__GT_t51029 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__){
return (function __GT_t51029(vec__50965__$1,app_view__$1,owner__$1,view__$1,data__$1,fnk50967__$1,output_checker50971__$1,input_checker50970__$1,opts__24458__auto____$1,owner50844__$1,input_schema50969__$1,validate__837__auto____$1,output_schema50968__$1,map50966__$1,ufv____$1,data__24457__auto____$1,G__50972__$1,p__50846__$1,meta51030){return (new stuttaford.dive_into_datomic.t51029(vec__50965__$1,app_view__$1,owner__$1,view__$1,data__$1,fnk50967__$1,output_checker50971__$1,input_checker50970__$1,opts__24458__auto____$1,owner50844__$1,input_schema50969__$1,validate__837__auto____$1,output_schema50968__$1,map50966__$1,ufv____$1,data__24457__auto____$1,G__50972__$1,p__50846__$1,meta51030));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
;
}
return (new stuttaford.dive_into_datomic.t51029(vec__50965,app_view,owner,view,data,fnk50967,output_checker50971,input_checker50970,opts__24458__auto__,owner50844,input_schema50969,validate__837__auto__,output_schema50968,map50966,ufv__,data__24457__auto__,G__50972,p__50846,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51097 = (function (){var G__51082 = o__840__auto__;return (output_checker50971.cljs$core$IFn$_invoke$arity$1 ? output_checker50971.cljs$core$IFn$_invoke$arity$1(G__51082) : output_checker50971.call(null,G__51082));
})();if(cljs.core.truth_(temp__4126__auto___51097))
{var error__839__auto___51098 = temp__4126__auto___51097;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50967","fnk50967",1780200967,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51098], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50968,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51098], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema50968,input_schema50969,input_checker50970,output_checker50971,vec__50965,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema50968,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50969], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50844,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var app_view = function (data__24457__auto__,owner50844,var_args){
var p__50846 = null;if (arguments.length > 2) {
  p__50846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24457__auto__,owner50844,p__50846);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__51099){
var data__24457__auto__ = cljs.core.first(arglist__51099);
arglist__51099 = cljs.core.next(arglist__51099);
var owner50844 = cljs.core.first(arglist__51099);
var p__50846 = cljs.core.rest(arglist__51099);
return app_view__delegate(data__24457__auto__,owner50844,p__50846);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.dive_into_datomic.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.app_view,cursor__24426__auto__);
});
var __GT_app_view__2 = (function (cursor__24426__auto__,m50845){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.app_view,cursor__24426__auto__,m50845);
});
__GT_app_view = function(cursor__24426__auto__,m50845){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24426__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24426__auto__,m50845);
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