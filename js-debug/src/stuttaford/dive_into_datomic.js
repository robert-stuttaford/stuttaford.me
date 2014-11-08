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
stuttaford.dive_into_datomic.perform_action = (function (){var method_table__21251__auto__ = (function (){var G__58660 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58660) : cljs.core.atom.call(null,G__58660));
})();var prefer_table__21252__auto__ = (function (){var G__58661 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58661) : cljs.core.atom.call(null,G__58661));
})();var method_cache__21253__auto__ = (function (){var G__58662 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58662) : cljs.core.atom.call(null,G__58662));
})();var cached_hierarchy__21254__auto__ = (function (){var G__58663 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__58663) : cljs.core.atom.call(null,G__58663));
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
var home__delegate = function (data__24427__auto__,owner58664,p__58666){var vec__58693 = p__58666;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58693,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58696 = schema.core.Any;var input_schema58697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map58694","map58694",1434695320,null))], null);var input_checker58698 = schema.core.checker(input_schema58697);var output_checker58699 = schema.core.checker(output_schema58696);return schema.core.schematize_fn(((function (ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__){
return (function fnk58695(G__58700){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58719 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58700], null);var temp__4126__auto___58720 = (function (){var G__58710 = args__838__auto___58719;return (input_checker58698.cljs$core$IFn$_invoke$arity$1 ? input_checker58698.cljs$core$IFn$_invoke$arity$1(G__58710) : input_checker58698.call(null,G__58710));
})();if(cljs.core.truth_(temp__4126__auto___58720))
{var error__839__auto___58721 = temp__4126__auto___58720;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58695","fnk58695",-1720570497,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58721], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58697,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58719,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58721], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58694 = G__58700;while(true){
if(cljs.core.map_QMARK_(map58694))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58694], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58694,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map58694,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t58711 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t58711 = (function (input_checker58698,owner,vec__58693,data,output_schema58696,home,input_schema58697,p__58666,owner58664,output_checker58699,map58694,G__58700,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,fnk58695,meta58712){
this.input_checker58698 = input_checker58698;
this.owner = owner;
this.vec__58693 = vec__58693;
this.data = data;
this.output_schema58696 = output_schema58696;
this.home = home;
this.input_schema58697 = input_schema58697;
this.p__58666 = p__58666;
this.owner58664 = owner58664;
this.output_checker58699 = output_checker58699;
this.map58694 = map58694;
this.G__58700 = G__58700;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.fnk58695 = fnk58695;
this.meta58712 = meta58712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t58711.cljs$lang$type = true;
stuttaford.dive_into_datomic.t58711.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t58711";
stuttaford.dive_into_datomic.t58711.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.dive-into-datomic/t58711");
});})(owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58711.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t58711.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "home";
});})(owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58711.prototype.om$core$IRender$ = true;
stuttaford.dive_into_datomic.t58711.prototype.om$core$IRender$render$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var G__58716 = null;var G__58717 = "Dive into Datomic interactive diagrams.";return React.DOM.div(G__58716,G__58717);
});})(owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__){
return (function (_58713){var self__ = this;
var _58713__$1 = this;return self__.meta58712;
});})(owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__){
return (function (_58713,meta58712__$1){var self__ = this;
var _58713__$1 = this;return (new stuttaford.dive_into_datomic.t58711(self__.input_checker58698,self__.owner,self__.vec__58693,self__.data,self__.output_schema58696,self__.home,self__.input_schema58697,self__.p__58666,self__.owner58664,self__.output_checker58699,self__.map58694,self__.G__58700,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,self__.fnk58695,meta58712__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__))
;
stuttaford.dive_into_datomic.__GT_t58711 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__){
return (function __GT_t58711(input_checker58698__$1,owner__$1,vec__58693__$1,data__$1,output_schema58696__$1,home__$1,input_schema58697__$1,p__58666__$1,owner58664__$1,output_checker58699__$1,map58694__$1,G__58700__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,fnk58695__$1,meta58712){return (new stuttaford.dive_into_datomic.t58711(input_checker58698__$1,owner__$1,vec__58693__$1,data__$1,output_schema58696__$1,home__$1,input_schema58697__$1,p__58666__$1,owner58664__$1,output_checker58699__$1,map58694__$1,G__58700__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,fnk58695__$1,meta58712));
});})(owner,data,validate__837__auto__,ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__))
;
}
return (new stuttaford.dive_into_datomic.t58711(input_checker58698,owner,vec__58693,data,output_schema58696,home,input_schema58697,p__58666,owner58664,output_checker58699,map58694,G__58700,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,fnk58695,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58722 = (function (){var G__58718 = o__840__auto__;return (output_checker58699.cljs$core$IFn$_invoke$arity$1 ? output_checker58699.cljs$core$IFn$_invoke$arity$1(G__58718) : output_checker58699.call(null,G__58718));
})();if(cljs.core.truth_(temp__4126__auto___58722))
{var error__839__auto___58723 = temp__4126__auto___58722;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58695","fnk58695",-1720570497,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58723], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58696,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58723], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58696,input_schema58697,input_checker58698,output_checker58699,vec__58693,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema58696,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58697], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58664,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var home = function (data__24427__auto__,owner58664,var_args){
var p__58666 = null;if (arguments.length > 2) {
  p__58666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return home__delegate.call(this,data__24427__auto__,owner58664,p__58666);};
home.cljs$lang$maxFixedArity = 2;
home.cljs$lang$applyTo = (function (arglist__58724){
var data__24427__auto__ = cljs.core.first(arglist__58724);
arglist__58724 = cljs.core.next(arglist__58724);
var owner58664 = cljs.core.first(arglist__58724);
var p__58666 = cljs.core.rest(arglist__58724);
return home__delegate(data__24427__auto__,owner58664,p__58666);
});
home.cljs$core$IFn$_invoke$arity$variadic = home__delegate;
return home;
})()
;
stuttaford.dive_into_datomic.__GT_home = (function() {
var __GT_home = null;
var __GT_home__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.home,cursor__24396__auto__);
});
var __GT_home__2 = (function (cursor__24396__auto__,m58665){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.home,cursor__24396__auto__,m58665);
});
__GT_home = function(cursor__24396__auto__,m58665){
switch(arguments.length){
case 1:
return __GT_home__1.call(this,cursor__24396__auto__);
case 2:
return __GT_home__2.call(this,cursor__24396__auto__,m58665);
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
var datom__delegate = function (data__24427__auto__,owner58725,p__58727){var vec__58818 = p__58727;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58818,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58821 = schema.core.Any;var input_schema58822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map58819","map58819",-349834385,null))], null);var input_checker58823 = schema.core.checker(input_schema58822);var output_checker58824 = schema.core.checker(output_schema58821);return schema.core.schematize_fn(((function (ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function fnk58820(G__58825){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58825], null);var temp__4126__auto___58909 = (function (){var G__58867 = args__838__auto___58908;return (input_checker58823.cljs$core$IFn$_invoke$arity$1 ? input_checker58823.cljs$core$IFn$_invoke$arity$1(G__58867) : input_checker58823.call(null,G__58867));
})();if(cljs.core.truth_(temp__4126__auto___58909))
{var error__839__auto___58910 = temp__4126__auto___58909;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58820","fnk58820",-244190525,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58910], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58822,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58908,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58910], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58819 = G__58825;while(true){
if(cljs.core.map_QMARK_(map58819))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58819], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58819,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map58819,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t58868 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t58868 = (function (fnk58820,owner,output_schema58821,vec__58818,data,owner58725,datom,map58819,output_checker58824,G__58825,input_schema58822,p__58727,validate__837__auto__,input_checker58823,data__24427__auto__,ufv__,opts__24428__auto__,meta58869){
this.fnk58820 = fnk58820;
this.owner = owner;
this.output_schema58821 = output_schema58821;
this.vec__58818 = vec__58818;
this.data = data;
this.owner58725 = owner58725;
this.datom = datom;
this.map58819 = map58819;
this.output_checker58824 = output_checker58824;
this.G__58825 = G__58825;
this.input_schema58822 = input_schema58822;
this.p__58727 = p__58727;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker58823 = input_checker58823;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta58869 = meta58869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t58868.cljs$lang$type = true;
stuttaford.dive_into_datomic.t58868.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t58868";
stuttaford.dive_into_datomic.t58868.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.dive-into-datomic/t58868");
});})(owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58868.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t58868.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datom";
});})(owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58868.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t58868.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (_,p__58871){var self__ = this;
var map__58872 = p__58871;var map__58872__$1 = ((cljs.core.seq_QMARK_(map__58872))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58872):map__58872);var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58872__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58872__$1,new cljs.core.Keyword(null,"component","component",1555936782));var ___$1 = this;var G__58878 = {"className": "datom"};var G__58879 = (function (){var attrs58873 = om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),null);
});})(G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
], null),cljs.core.array_seq(["Clear"], 0)),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function iter__58882(s__58883){return (new cljs.core.LazySeq(null,((function (G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (){var s__58883__$1 = s__58883;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58883__$1);if(temp__4126__auto__)
{var s__58883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58883__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__58883__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__58885 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__58884 = (0);while(true){
if((i__58884 < size__20989__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__58884);cljs.core.chunk_append(b__58885,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58890 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58884,kind,c__20988__auto__,size__20989__auto__,b__58885,s__58883__$2,temp__4126__auto__,G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(i__58884,kind,c__20988__auto__,size__20989__auto__,b__58885,s__58883__$2,temp__4126__auto__,G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
], null);var G__58890__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58890,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58890);return G__58890__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)));
{
var G__58911 = (i__58884 + (1));
i__58884 = G__58911;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58885),iter__58882(cljs.core.chunk_rest(s__58883__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58885),null);
}
} else
{var kind = cljs.core.first(s__58883__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58891 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (kind,s__58883__$2,temp__4126__auto__,G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(kind,s__58883__$2,temp__4126__auto__,G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
], null);var G__58891__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58891,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58891);return G__58891__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)),iter__58882(cljs.core.rest(s__58883__$2)));
}
} else
{return null;
}
break;
}
});})(G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
,null,null));
});})(G__58878,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;return iter__20990__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.Keyword(null,"values","values",372645556)], null));
})()], 0))], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs58873))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navigation"], null)], null),attrs58873], 0))):{"className": "navigation"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs58873))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs58873)], null))));
})();var G__58880 = (function (){var G__58892 = {"className": "datom-tuple"};var G__58893 = (function (){var G__58896 = null;var G__58897 = "[";return React.DOM.span(G__58896,G__58897);
})();var G__58894 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20990__auto__ = ((function (G__58892,G__58893,G__58878,G__58879,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function iter__58898(s__58899){return (new cljs.core.LazySeq(null,((function (G__58892,G__58893,G__58878,G__58879,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (){var s__58899__$1 = s__58899;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58899__$1);if(temp__4126__auto__)
{var s__58899__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58899__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__58899__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__58901 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__58900 = (0);while(true){
if((i__58900 < size__20989__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__58900);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);cljs.core.chunk_append(b__58901,sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58900,s__58899__$1,class$,label,kind,c__20988__auto__,size__20989__auto__,b__58901,s__58899__$2,temp__4126__auto__,G__58892,G__58893,G__58878,G__58879,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(i__58900,s__58899__$1,class$,label,kind,c__20988__auto__,size__20989__auto__,b__58901,s__58899__$2,temp__4126__auto__,G__58892,G__58893,G__58878,G__58879,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)));
{
var G__58912 = (i__58900 + (1));
i__58900 = G__58912;
continue;
}
} else
{{
var G__58913 = (i__58900 + (1));
i__58900 = G__58913;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58901),iter__58898(cljs.core.chunk_rest(s__58899__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58901),null);
}
} else
{var kind = cljs.core.first(s__58899__$2);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);return cljs.core.cons(sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__58899__$1,class$,label,kind,s__58899__$2,temp__4126__auto__,G__58892,G__58893,G__58878,G__58879,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(s__58899__$1,class$,label,kind,s__58899__$2,temp__4126__auto__,G__58892,G__58893,G__58878,G__58879,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)),iter__58898(cljs.core.rest(s__58899__$2)));
} else
{{
var G__58914 = cljs.core.rest(s__58899__$2);
s__58899__$1 = G__58914;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__58892,G__58893,G__58878,G__58879,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
,null,null));
});})(G__58892,G__58893,G__58878,G__58879,___$1,map__58872,map__58872__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;return iter__20990__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"added","added",2057651688)], null));
})());var G__58895 = (function (){var G__58904 = null;var G__58905 = "]";return React.DOM.span(G__58904,G__58905);
})();return React.DOM.div(G__58892,G__58893,G__58894,G__58895);
})();var G__58881 = sablono.interpreter.interpret((cljs.core.truth_(component)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datom-content","div.datom-content",1558083752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),clojure.string.capitalize(cljs.core.name(component))], null),(function (){var G__58906 = component;return (stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1 ? stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1(G__58906) : stuttaford.dive_into_datomic.content.datom_content.call(null,G__58906));
})()], null):null));return React.DOM.div(G__58878,G__58879,G__58880,G__58881);
});})(owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58868.prototype.om$core$IInitState$ = true;
stuttaford.dive_into_datomic.t58868.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"example","example",-1755779144)], null);
});})(owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (_58870){var self__ = this;
var _58870__$1 = this;return self__.meta58869;
});})(owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t58868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function (_58870,meta58869__$1){var self__ = this;
var _58870__$1 = this;return (new stuttaford.dive_into_datomic.t58868(self__.fnk58820,self__.owner,self__.output_schema58821,self__.vec__58818,self__.data,self__.owner58725,self__.datom,self__.map58819,self__.output_checker58824,self__.G__58825,self__.input_schema58822,self__.p__58727,self__.validate__837__auto__,self__.input_checker58823,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta58869__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;
stuttaford.dive_into_datomic.__GT_t58868 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__){
return (function __GT_t58868(fnk58820__$1,owner__$1,output_schema58821__$1,vec__58818__$1,data__$1,owner58725__$1,datom__$1,map58819__$1,output_checker58824__$1,G__58825__$1,input_schema58822__$1,p__58727__$1,validate__837__auto____$1,input_checker58823__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta58869){return (new stuttaford.dive_into_datomic.t58868(fnk58820__$1,owner__$1,output_schema58821__$1,vec__58818__$1,data__$1,owner58725__$1,datom__$1,map58819__$1,output_checker58824__$1,G__58825__$1,input_schema58822__$1,p__58727__$1,validate__837__auto____$1,input_checker58823__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta58869));
});})(owner,data,validate__837__auto__,ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
;
}
return (new stuttaford.dive_into_datomic.t58868(fnk58820,owner,output_schema58821,vec__58818,data,owner58725,datom,map58819,output_checker58824,G__58825,input_schema58822,p__58727,validate__837__auto__,input_checker58823,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58915 = (function (){var G__58907 = o__840__auto__;return (output_checker58824.cljs$core$IFn$_invoke$arity$1 ? output_checker58824.cljs$core$IFn$_invoke$arity$1(G__58907) : output_checker58824.call(null,G__58907));
})();if(cljs.core.truth_(temp__4126__auto___58915))
{var error__839__auto___58916 = temp__4126__auto___58915;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58820","fnk58820",-244190525,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58916], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58821,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58916], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58821,input_schema58822,input_checker58823,output_checker58824,vec__58818,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema58821,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58822], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58725,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var datom = function (data__24427__auto__,owner58725,var_args){
var p__58727 = null;if (arguments.length > 2) {
  p__58727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datom__delegate.call(this,data__24427__auto__,owner58725,p__58727);};
datom.cljs$lang$maxFixedArity = 2;
datom.cljs$lang$applyTo = (function (arglist__58917){
var data__24427__auto__ = cljs.core.first(arglist__58917);
arglist__58917 = cljs.core.next(arglist__58917);
var owner58725 = cljs.core.first(arglist__58917);
var p__58727 = cljs.core.rest(arglist__58917);
return datom__delegate(data__24427__auto__,owner58725,p__58727);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
stuttaford.dive_into_datomic.__GT_datom = (function() {
var __GT_datom = null;
var __GT_datom__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.datom,cursor__24396__auto__);
});
var __GT_datom__2 = (function (cursor__24396__auto__,m58726){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.datom,cursor__24396__auto__,m58726);
});
__GT_datom = function(cursor__24396__auto__,m58726){
switch(arguments.length){
case 1:
return __GT_datom__1.call(this,cursor__24396__auto__);
case 2:
return __GT_datom__2.call(this,cursor__24396__auto__,m58726);
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
var top_nav__delegate = function (data__24427__auto__,owner58918,p__58920){var vec__59097 = p__58920;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59097,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema59102 = schema.core.Any;var input_schema59103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map59098","map59098",-20399747,null))], null);var input_checker59104 = schema.core.checker(input_schema59103);var output_checker59105 = schema.core.checker(output_schema59102);return schema.core.schematize_fn(((function (ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function fnk59101(G__59106){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___59273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__59106], null);var temp__4126__auto___59274 = (function (){var G__59190 = args__838__auto___59273;return (input_checker59104.cljs$core$IFn$_invoke$arity$1 ? input_checker59104.cljs$core$IFn$_invoke$arity$1(G__59190) : input_checker59104.call(null,G__59190));
})();if(cljs.core.truth_(temp__4126__auto___59274))
{var error__839__auto___59275 = temp__4126__auto___59274;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk59101","fnk59101",801090114,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___59275], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema59103,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___59273,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___59275], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map59098 = G__59106;while(true){
if(cljs.core.map_QMARK_(map59098))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map59098], 0))));
}
var map59100 = plumbing.fnk.schema.safe_get(map59098,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map59100,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map59098,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map59099 = plumbing.fnk.schema.safe_get(map59098,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map59099,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.dive_into_datomic.t59191 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t59191 = (function (G__59106,fnk59101,owner,view,input_schema59103,nav_items,output_checker59105,input_checker59104,map59099,top_nav,owner58918,output_schema59102,validate__837__auto__,data__24427__auto__,map59098,ufv__,map59100,opts__24428__auto__,vec__59097,p__58920,meta59192){
this.G__59106 = G__59106;
this.fnk59101 = fnk59101;
this.owner = owner;
this.view = view;
this.input_schema59103 = input_schema59103;
this.nav_items = nav_items;
this.output_checker59105 = output_checker59105;
this.input_checker59104 = input_checker59104;
this.map59099 = map59099;
this.top_nav = top_nav;
this.owner58918 = owner58918;
this.output_schema59102 = output_schema59102;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.map59098 = map59098;
this.ufv__ = ufv__;
this.map59100 = map59100;
this.opts__24428__auto__ = opts__24428__auto__;
this.vec__59097 = vec__59097;
this.p__58920 = p__58920;
this.meta59192 = meta59192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t59191.cljs$lang$type = true;
stuttaford.dive_into_datomic.t59191.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t59191";
stuttaford.dive_into_datomic.t59191.cljs$lang$ctorPrWriter = ((function (nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.dive-into-datomic/t59191");
});})(nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59191.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t59191.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59191.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t59191.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function iter__59194(s__59195){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (){var s__59195__$1 = s__59195;while(true){
var temp__4126__auto__ = cljs.core.seq(s__59195__$1);if(temp__4126__auto__)
{var s__59195__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__59195__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__59195__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__59197 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__59196 = (0);while(true){
if((i__59196 < size__20989__auto__))
{var items = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__59196);cljs.core.chunk_append(b__59197,om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (i__59196,items,c__20988__auto__,size__20989__auto__,b__59197,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function iter__59236(s__59237){return (new cljs.core.LazySeq(null,((function (i__59196,items,c__20988__auto__,size__20989__auto__,b__59197,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (){var s__59237__$1 = s__59237;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__59237__$1);if(temp__4126__auto____$1)
{var s__59237__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__59237__$2))
{var c__20988__auto____$1 = cljs.core.chunk_first(s__59237__$2);var size__20989__auto____$1 = cljs.core.count(c__20988__auto____$1);var b__59239 = cljs.core.chunk_buffer(size__20989__auto____$1);if((function (){var i__59238 = (0);while(true){
if((i__59238 < size__20989__auto____$1))
{var vec__59248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto____$1,i__59238);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59248,(0),null);var vec__59249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59248,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59249,(0),null);cljs.core.chunk_append(b__59239,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__59250 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59238,i__59196,vec__59248,id,vec__59249,label,c__20988__auto____$1,size__20989__auto____$1,b__59239,s__59237__$2,temp__4126__auto____$1,items,c__20988__auto__,size__20989__auto__,b__59197,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__59238,i__59196,vec__59248,id,vec__59249,label,c__20988__auto____$1,size__20989__auto____$1,b__59239,s__59237__$2,temp__4126__auto____$1,items,c__20988__auto__,size__20989__auto__,b__59197,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
], null);var G__59250__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59250,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__59250);return G__59250__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__59276 = (i__59238 + (1));
i__59238 = G__59276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__59239),iter__59236(cljs.core.chunk_rest(s__59237__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__59239),null);
}
} else
{var vec__59251 = cljs.core.first(s__59237__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59251,(0),null);var vec__59252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59251,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59252,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__59253 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59196,vec__59251,id,vec__59252,label,s__59237__$2,temp__4126__auto____$1,items,c__20988__auto__,size__20989__auto__,b__59197,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__59196,vec__59251,id,vec__59252,label,s__59237__$2,temp__4126__auto____$1,items,c__20988__auto__,size__20989__auto__,b__59197,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
], null);var G__59253__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59253,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__59253);return G__59253__$1;
})(),cljs.core.array_seq([label], 0)),iter__59236(cljs.core.rest(s__59237__$2)));
}
} else
{return null;
}
break;
}
});})(i__59196,items,c__20988__auto__,size__20989__auto__,b__59197,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
,null,null));
});})(i__59196,items,c__20988__auto__,size__20989__auto__,b__59197,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;return iter__20990__auto__(items);
})()], 0)));
{
var G__59277 = (i__59196 + (1));
i__59196 = G__59277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__59197),iter__59194(cljs.core.chunk_rest(s__59195__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__59197),null);
}
} else
{var items = cljs.core.first(s__59195__$2);return cljs.core.cons(om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (items,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function iter__59254(s__59255){return (new cljs.core.LazySeq(null,((function (items,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (){var s__59255__$1 = s__59255;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__59255__$1);if(temp__4126__auto____$1)
{var s__59255__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__59255__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__59255__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__59257 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__59256 = (0);while(true){
if((i__59256 < size__20989__auto__))
{var vec__59266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__59256);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266,(0),null);var vec__59267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59267,(0),null);cljs.core.chunk_append(b__59257,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__59268 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59256,vec__59266,id,vec__59267,label,c__20988__auto__,size__20989__auto__,b__59257,s__59255__$2,temp__4126__auto____$1,items,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__59256,vec__59266,id,vec__59267,label,c__20988__auto__,size__20989__auto__,b__59257,s__59255__$2,temp__4126__auto____$1,items,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
], null);var G__59268__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59268,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__59268);return G__59268__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__59278 = (i__59256 + (1));
i__59256 = G__59278;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__59257),iter__59254(cljs.core.chunk_rest(s__59255__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__59257),null);
}
} else
{var vec__59269 = cljs.core.first(s__59255__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59269,(0),null);var vec__59270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59269,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59270,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__59271 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__59269,id,vec__59270,label,s__59255__$2,temp__4126__auto____$1,items,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__59269,id,vec__59270,label,s__59255__$2,temp__4126__auto____$1,items,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
], null);var G__59271__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59271,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__59271);return G__59271__$1;
})(),cljs.core.array_seq([label], 0)),iter__59254(cljs.core.rest(s__59255__$2)));
}
} else
{return null;
}
break;
}
});})(items,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
,null,null));
});})(items,s__59195__$2,temp__4126__auto__,c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;return iter__20990__auto__(items);
})()], 0)),iter__59194(cljs.core.rest(s__59195__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
,null,null));
});})(c,___$1,nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;return iter__20990__auto__(self__.nav_items);
})()], 0));
});})(nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (_59193){var self__ = this;
var _59193__$1 = this;return self__.meta59192;
});})(nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function (_59193,meta59192__$1){var self__ = this;
var _59193__$1 = this;return (new stuttaford.dive_into_datomic.t59191(self__.G__59106,self__.fnk59101,self__.owner,self__.view,self__.input_schema59103,self__.nav_items,self__.output_checker59105,self__.input_checker59104,self__.map59099,self__.top_nav,self__.owner58918,self__.output_schema59102,self__.validate__837__auto__,self__.data__24427__auto__,self__.map59098,self__.ufv__,self__.map59100,self__.opts__24428__auto__,self__.vec__59097,self__.p__58920,meta59192__$1));
});})(nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;
stuttaford.dive_into_datomic.__GT_t59191 = ((function (nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__){
return (function __GT_t59191(G__59106__$1,fnk59101__$1,owner__$1,view__$1,input_schema59103__$1,nav_items__$1,output_checker59105__$1,input_checker59104__$1,map59099__$1,top_nav__$1,owner58918__$1,output_schema59102__$1,validate__837__auto____$1,data__24427__auto____$1,map59098__$1,ufv____$1,map59100__$1,opts__24428__auto____$1,vec__59097__$1,p__58920__$1,meta59192){return (new stuttaford.dive_into_datomic.t59191(G__59106__$1,fnk59101__$1,owner__$1,view__$1,input_schema59103__$1,nav_items__$1,output_checker59105__$1,input_checker59104__$1,map59099__$1,top_nav__$1,owner58918__$1,output_schema59102__$1,validate__837__auto____$1,data__24427__auto____$1,map59098__$1,ufv____$1,map59100__$1,opts__24428__auto____$1,vec__59097__$1,p__58920__$1,meta59192));
});})(nav_items,map59099,owner,view,map59100,validate__837__auto__,ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
;
}
return (new stuttaford.dive_into_datomic.t59191(G__59106,fnk59101,owner,view,input_schema59103,nav_items,output_checker59105,input_checker59104,map59099,top_nav,owner58918,output_schema59102,validate__837__auto__,data__24427__auto__,map59098,ufv__,map59100,opts__24428__auto__,vec__59097,p__58920,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___59279 = (function (){var G__59272 = o__840__auto__;return (output_checker59105.cljs$core$IFn$_invoke$arity$1 ? output_checker59105.cljs$core$IFn$_invoke$arity$1(G__59272) : output_checker59105.call(null,G__59272));
})();if(cljs.core.truth_(temp__4126__auto___59279))
{var error__839__auto___59280 = temp__4126__auto___59279;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk59101","fnk59101",801090114,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___59280], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema59102,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___59280], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema59102,input_schema59103,input_checker59104,output_checker59105,vec__59097,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema59102,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema59103], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58918,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var top_nav = function (data__24427__auto__,owner58918,var_args){
var p__58920 = null;if (arguments.length > 2) {
  p__58920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24427__auto__,owner58918,p__58920);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__59281){
var data__24427__auto__ = cljs.core.first(arglist__59281);
arglist__59281 = cljs.core.next(arglist__59281);
var owner58918 = cljs.core.first(arglist__59281);
var p__58920 = cljs.core.rest(arglist__59281);
return top_nav__delegate(data__24427__auto__,owner58918,p__58920);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.dive_into_datomic.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.top_nav,cursor__24396__auto__);
});
var __GT_top_nav__2 = (function (cursor__24396__auto__,m58919){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.top_nav,cursor__24396__auto__,m58919);
});
__GT_top_nav = function(cursor__24396__auto__,m58919){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24396__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24396__auto__,m58919);
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
var app_view__delegate = function (data__24427__auto__,owner59282,p__59284){var vec__59403 = p__59284;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema59406 = schema.core.Any;var input_schema59407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map59404","map59404",1816427041,null))], null);var input_checker59408 = schema.core.checker(input_schema59407);var output_checker59409 = schema.core.checker(output_schema59406);return schema.core.schematize_fn(((function (ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function fnk59405(G__59410){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___59521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__59410], null);var temp__4126__auto___59522 = (function (){var G__59466 = args__838__auto___59521;return (input_checker59408.cljs$core$IFn$_invoke$arity$1 ? input_checker59408.cljs$core$IFn$_invoke$arity$1(G__59466) : input_checker59408.call(null,G__59466));
})();if(cljs.core.truth_(temp__4126__auto___59522))
{var error__839__auto___59523 = temp__4126__auto___59522;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk59405","fnk59405",1837575342,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___59523], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema59407,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___59521,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___59523], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map59404 = G__59410;while(true){
if(cljs.core.map_QMARK_(map59404))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map59404], 0))));
}
var data = plumbing.fnk.schema.safe_get(map59404,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map59404,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t59467 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t59467 = (function (owner59282,map59404,app_view,owner,input_checker59408,view,data,vec__59403,G__59410,fnk59405,output_schema59406,input_schema59407,p__59284,output_checker59409,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,meta59468){
this.owner59282 = owner59282;
this.map59404 = map59404;
this.app_view = app_view;
this.owner = owner;
this.input_checker59408 = input_checker59408;
this.view = view;
this.data = data;
this.vec__59403 = vec__59403;
this.G__59410 = G__59410;
this.fnk59405 = fnk59405;
this.output_schema59406 = output_schema59406;
this.input_schema59407 = input_schema59407;
this.p__59284 = p__59284;
this.output_checker59409 = output_checker59409;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta59468 = meta59468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t59467.cljs$lang$type = true;
stuttaford.dive_into_datomic.t59467.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t59467";
stuttaford.dive_into_datomic.t59467.cljs$lang$ctorPrWriter = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.dive-into-datomic/t59467");
});})(owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59467.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t59467.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59467.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t59467.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__59470 = (function (){var G__59471 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,stuttaford.dive_into_datomic.nav_items));return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__59471) : self__.view.call(null,G__59471));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59470,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59470,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),stuttaford.dive_into_datomic.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.dive_into_datomic.nav_items], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__59474 = null;return React.DOM.div(G__59474);
})())], null)], null);
})());
});})(owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59467.prototype.om$core$IWillUnmount$ = true;
stuttaford.dive_into_datomic.t59467.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59467.prototype.om$core$IWillMount$ = true;
stuttaford.dive_into_datomic.t59467.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22972__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (state_59495){var state_val_59496 = (state_59495[(1)]);if((state_val_59496 === (7)))
{var inst_59478 = (state_59495[(7)]);var inst_59478__$1 = (state_59495[(2)]);var state_59495__$1 = (function (){var statearr_59497 = state_59495;(statearr_59497[(7)] = inst_59478__$1);
return statearr_59497;
})();if(cljs.core.truth_(inst_59478__$1))
{var statearr_59498_59524 = state_59495__$1;(statearr_59498_59524[(1)] = (8));
} else
{var statearr_59499_59525 = state_59495__$1;(statearr_59499_59525[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59496 === (1)))
{var state_59495__$1 = state_59495;var statearr_59500_59526 = state_59495__$1;(statearr_59500_59526[(2)] = null);
(statearr_59500_59526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59496 === (4)))
{var state_59495__$1 = state_59495;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59495__$1,(7),c);
} else
{if((state_val_59496 === (6)))
{var inst_59491 = (state_59495[(2)]);var state_59495__$1 = state_59495;var statearr_59501_59527 = state_59495__$1;(statearr_59501_59527[(2)] = inst_59491);
(statearr_59501_59527[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59496 === (3)))
{var inst_59493 = (state_59495[(2)]);var state_59495__$1 = state_59495;return cljs.core.async.impl.ioc_helpers.return_chan(state_59495__$1,inst_59493);
} else
{if((state_val_59496 === (2)))
{var state_59495__$1 = state_59495;var statearr_59502_59528 = state_59495__$1;(statearr_59502_59528[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59496 === (9)))
{var state_59495__$1 = state_59495;var statearr_59504_59529 = state_59495__$1;(statearr_59504_59529[(2)] = null);
(statearr_59504_59529[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59496 === (5)))
{var state_59495__$1 = state_59495;var statearr_59505_59530 = state_59495__$1;(statearr_59505_59530[(2)] = null);
(statearr_59505_59530[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59496 === (10)))
{var inst_59487 = (state_59495[(2)]);var state_59495__$1 = (function (){var statearr_59506 = state_59495;(statearr_59506[(8)] = inst_59487);
return statearr_59506;
})();var statearr_59507_59531 = state_59495__$1;(statearr_59507_59531[(2)] = null);
(statearr_59507_59531[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59496 === (8)))
{var inst_59478 = (state_59495[(7)]);var inst_59481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59478,(0),null);var inst_59482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59478,(1),null);var inst_59483 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_59484 = (function (){var G__59508 = self__.data;var G__59509 = inst_59481;var G__59510 = inst_59482;var G__59511 = inst_59483;return (stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4(G__59508,G__59509,G__59510,G__59511) : stuttaford.dive_into_datomic.perform_action.call(null,G__59508,G__59509,G__59510,G__59511));
})();var state_59495__$1 = state_59495;var statearr_59512_59532 = state_59495__$1;(statearr_59512_59532[(2)] = inst_59484);
(statearr_59512_59532[(1)] = (10));
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
});})(c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;return ((function (switch__22957__auto__,c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_59516 = [null,null,null,null,null,null,null,null,null];(statearr_59516[(0)] = state_machine__22958__auto__);
(statearr_59516[(1)] = (1));
return statearr_59516;
});
var state_machine__22958__auto____1 = (function (state_59495){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_59495);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e59517){if((e59517 instanceof Object))
{var ex__22961__auto__ = e59517;var statearr_59518_59533 = state_59495;(statearr_59518_59533[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_59495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e59517;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59534 = state_59495;
state_59495 = G__59534;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_59495){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_59495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
})();var state__22974__auto__ = (function (){var statearr_59519 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_59519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto__);
return statearr_59519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
);
return c__22972__auto__;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (_59469){var self__ = this;
var _59469__$1 = this;return self__.meta59468;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;
stuttaford.dive_into_datomic.t59467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function (_59469,meta59468__$1){var self__ = this;
var _59469__$1 = this;return (new stuttaford.dive_into_datomic.t59467(self__.owner59282,self__.map59404,self__.app_view,self__.owner,self__.input_checker59408,self__.view,self__.data,self__.vec__59403,self__.G__59410,self__.fnk59405,self__.output_schema59406,self__.input_schema59407,self__.p__59284,self__.output_checker59409,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta59468__$1));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;
stuttaford.dive_into_datomic.__GT_t59467 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__){
return (function __GT_t59467(owner59282__$1,map59404__$1,app_view__$1,owner__$1,input_checker59408__$1,view__$1,data__$1,vec__59403__$1,G__59410__$1,fnk59405__$1,output_schema59406__$1,input_schema59407__$1,p__59284__$1,output_checker59409__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta59468){return (new stuttaford.dive_into_datomic.t59467(owner59282__$1,map59404__$1,app_view__$1,owner__$1,input_checker59408__$1,view__$1,data__$1,vec__59403__$1,G__59410__$1,fnk59405__$1,output_schema59406__$1,input_schema59407__$1,p__59284__$1,output_checker59409__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta59468));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
;
}
return (new stuttaford.dive_into_datomic.t59467(owner59282,map59404,app_view,owner,input_checker59408,view,data,vec__59403,G__59410,fnk59405,output_schema59406,input_schema59407,p__59284,output_checker59409,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___59535 = (function (){var G__59520 = o__840__auto__;return (output_checker59409.cljs$core$IFn$_invoke$arity$1 ? output_checker59409.cljs$core$IFn$_invoke$arity$1(G__59520) : output_checker59409.call(null,G__59520));
})();if(cljs.core.truth_(temp__4126__auto___59535))
{var error__839__auto___59536 = temp__4126__auto___59535;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk59405","fnk59405",1837575342,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___59536], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema59406,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___59536], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema59406,input_schema59407,input_checker59408,output_checker59409,vec__59403,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema59406,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema59407], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner59282,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var app_view = function (data__24427__auto__,owner59282,var_args){
var p__59284 = null;if (arguments.length > 2) {
  p__59284 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24427__auto__,owner59282,p__59284);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__59537){
var data__24427__auto__ = cljs.core.first(arglist__59537);
arglist__59537 = cljs.core.next(arglist__59537);
var owner59282 = cljs.core.first(arglist__59537);
var p__59284 = cljs.core.rest(arglist__59537);
return app_view__delegate(data__24427__auto__,owner59282,p__59284);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.dive_into_datomic.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.app_view,cursor__24396__auto__);
});
var __GT_app_view__2 = (function (cursor__24396__auto__,m59283){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.app_view,cursor__24396__auto__,m59283);
});
__GT_app_view = function(cursor__24396__auto__,m59283){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24396__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24396__auto__,m59283);
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