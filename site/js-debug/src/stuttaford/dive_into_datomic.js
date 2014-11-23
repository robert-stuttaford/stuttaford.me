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
stuttaford.dive_into_datomic.perform_action = (function (){var method_table__21271__auto__ = (function (){var G__78570 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__78570) : cljs.core.atom.call(null,G__78570));
})();var prefer_table__21272__auto__ = (function (){var G__78571 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__78571) : cljs.core.atom.call(null,G__78571));
})();var method_cache__21273__auto__ = (function (){var G__78572 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__78572) : cljs.core.atom.call(null,G__78572));
})();var cached_hierarchy__21274__auto__ = (function (){var G__78573 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__78573) : cljs.core.atom.call(null,G__78573));
})();var hierarchy__21275__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21271__auto__,prefer_table__21272__auto__,method_cache__21273__auto__,cached_hierarchy__21274__auto__,hierarchy__21275__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21271__auto__,prefer_table__21272__auto__,method_cache__21273__auto__,cached_hierarchy__21274__auto__,hierarchy__21275__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21275__auto__,method_table__21271__auto__,prefer_table__21272__auto__,method_cache__21273__auto__,cached_hierarchy__21274__auto__));
})();
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cursor,op,value){throw ("Missing perform-method op: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));
}));
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"view","view",1247994814),value);
}));
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.home = (function() { 
var home__delegate = function (data__24582__auto__,owner78574,p__78576){var vec__78603 = p__78576;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78603,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78606 = schema.core.Any;var input_schema78607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map78604","map78604",-1859488667,null))], null);var input_checker78608 = schema.core.checker(input_schema78607);var output_checker78609 = schema.core.checker(output_schema78606);return schema.core.schematize_fn(((function (ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__){
return (function fnk78605(G__78610){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78610], null);var temp__4126__auto___78630 = (function (){var G__78620 = args__838__auto___78629;return (input_checker78608.cljs$core$IFn$_invoke$arity$1 ? input_checker78608.cljs$core$IFn$_invoke$arity$1(G__78620) : input_checker78608.call(null,G__78620));
})();if(cljs.core.truth_(temp__4126__auto___78630))
{var error__839__auto___78631 = temp__4126__auto___78630;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78605","fnk78605",-359395778,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78631], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78607,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78629,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78631], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78604 = G__78610;while(true){
if(cljs.core.map_QMARK_(map78604))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78604], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78604,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map78604,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t78621 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t78621 = (function (input_checker78608,opts__24583__auto__,owner,map78604,data,home,input_schema78607,data__24582__auto__,output_checker78609,output_schema78606,p__78576,G__78610,vec__78603,owner78574,validate__837__auto__,ufv__,fnk78605,meta78622){
this.input_checker78608 = input_checker78608;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.map78604 = map78604;
this.data = data;
this.home = home;
this.input_schema78607 = input_schema78607;
this.data__24582__auto__ = data__24582__auto__;
this.output_checker78609 = output_checker78609;
this.output_schema78606 = output_schema78606;
this.p__78576 = p__78576;
this.G__78610 = G__78610;
this.vec__78603 = vec__78603;
this.owner78574 = owner78574;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.fnk78605 = fnk78605;
this.meta78622 = meta78622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t78621.cljs$lang$type = true;
stuttaford.dive_into_datomic.t78621.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t78621";
stuttaford.dive_into_datomic.t78621.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.dive-into-datomic/t78621");
});})(owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78621.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t78621.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "home";
});})(owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78621.prototype.om$core$IRender$ = true;
stuttaford.dive_into_datomic.t78621.prototype.om$core$IRender$render$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var G__78626 = null;var G__78627 = "Dive into Datomic interactive diagrams.";return React.DOM.div(G__78626,G__78627);
});})(owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__){
return (function (_78623){var self__ = this;
var _78623__$1 = this;return self__.meta78622;
});})(owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__){
return (function (_78623,meta78622__$1){var self__ = this;
var _78623__$1 = this;return (new stuttaford.dive_into_datomic.t78621(self__.input_checker78608,self__.opts__24583__auto__,self__.owner,self__.map78604,self__.data,self__.home,self__.input_schema78607,self__.data__24582__auto__,self__.output_checker78609,self__.output_schema78606,self__.p__78576,self__.G__78610,self__.vec__78603,self__.owner78574,self__.validate__837__auto__,self__.ufv__,self__.fnk78605,meta78622__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__))
;
stuttaford.dive_into_datomic.__GT_t78621 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__){
return (function __GT_t78621(input_checker78608__$1,opts__24583__auto____$1,owner__$1,map78604__$1,data__$1,home__$1,input_schema78607__$1,data__24582__auto____$1,output_checker78609__$1,output_schema78606__$1,p__78576__$1,G__78610__$1,vec__78603__$1,owner78574__$1,validate__837__auto____$1,ufv____$1,fnk78605__$1,meta78622){return (new stuttaford.dive_into_datomic.t78621(input_checker78608__$1,opts__24583__auto____$1,owner__$1,map78604__$1,data__$1,home__$1,input_schema78607__$1,data__24582__auto____$1,output_checker78609__$1,output_schema78606__$1,p__78576__$1,G__78610__$1,vec__78603__$1,owner78574__$1,validate__837__auto____$1,ufv____$1,fnk78605__$1,meta78622));
});})(owner,data,validate__837__auto__,ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__))
;
}
return (new stuttaford.dive_into_datomic.t78621(input_checker78608,opts__24583__auto__,owner,map78604,data,home,input_schema78607,data__24582__auto__,output_checker78609,output_schema78606,p__78576,G__78610,vec__78603,owner78574,validate__837__auto__,ufv__,fnk78605,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78632 = (function (){var G__78628 = o__840__auto__;return (output_checker78609.cljs$core$IFn$_invoke$arity$1 ? output_checker78609.cljs$core$IFn$_invoke$arity$1(G__78628) : output_checker78609.call(null,G__78628));
})();if(cljs.core.truth_(temp__4126__auto___78632))
{var error__839__auto___78633 = temp__4126__auto___78632;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78605","fnk78605",-359395778,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78633], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78606,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78633], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78606,input_schema78607,input_checker78608,output_checker78609,vec__78603,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema78606,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78607], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78574,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var home = function (data__24582__auto__,owner78574,var_args){
var p__78576 = null;if (arguments.length > 2) {
  p__78576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return home__delegate.call(this,data__24582__auto__,owner78574,p__78576);};
home.cljs$lang$maxFixedArity = 2;
home.cljs$lang$applyTo = (function (arglist__78634){
var data__24582__auto__ = cljs.core.first(arglist__78634);
arglist__78634 = cljs.core.next(arglist__78634);
var owner78574 = cljs.core.first(arglist__78634);
var p__78576 = cljs.core.rest(arglist__78634);
return home__delegate(data__24582__auto__,owner78574,p__78576);
});
home.cljs$core$IFn$_invoke$arity$variadic = home__delegate;
return home;
})()
;
stuttaford.dive_into_datomic.__GT_home = (function() {
var __GT_home = null;
var __GT_home__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.home,cursor__24551__auto__);
});
var __GT_home__2 = (function (cursor__24551__auto__,m78575){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.home,cursor__24551__auto__,m78575);
});
__GT_home = function(cursor__24551__auto__,m78575){
switch(arguments.length){
case 1:
return __GT_home__1.call(this,cursor__24551__auto__);
case 2:
return __GT_home__2.call(this,cursor__24551__auto__,m78575);
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
var datom__delegate = function (data__24582__auto__,owner78635,p__78637){var vec__78728 = p__78637;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78728,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78731 = schema.core.Any;var input_schema78732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map78729","map78729",-294322990,null))], null);var input_checker78733 = schema.core.checker(input_schema78732);var output_checker78734 = schema.core.checker(output_schema78731);return schema.core.schematize_fn(((function (ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function fnk78730(G__78735){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78735], null);var temp__4126__auto___78819 = (function (){var G__78777 = args__838__auto___78818;return (input_checker78733.cljs$core$IFn$_invoke$arity$1 ? input_checker78733.cljs$core$IFn$_invoke$arity$1(G__78777) : input_checker78733.call(null,G__78777));
})();if(cljs.core.truth_(temp__4126__auto___78819))
{var error__839__auto___78820 = temp__4126__auto___78819;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78730","fnk78730",-1564277625,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78820], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78732,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78818,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78820], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78729 = G__78735;while(true){
if(cljs.core.map_QMARK_(map78729))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78729], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78729,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map78729,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t78778 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t78778 = (function (opts__24583__auto__,owner,input_checker78733,data,fnk78730,G__78735,input_schema78732,output_checker78734,datom,data__24582__auto__,map78729,vec__78728,owner78635,output_schema78731,p__78637,validate__837__auto__,ufv__,meta78779){
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.input_checker78733 = input_checker78733;
this.data = data;
this.fnk78730 = fnk78730;
this.G__78735 = G__78735;
this.input_schema78732 = input_schema78732;
this.output_checker78734 = output_checker78734;
this.datom = datom;
this.data__24582__auto__ = data__24582__auto__;
this.map78729 = map78729;
this.vec__78728 = vec__78728;
this.owner78635 = owner78635;
this.output_schema78731 = output_schema78731;
this.p__78637 = p__78637;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta78779 = meta78779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t78778.cljs$lang$type = true;
stuttaford.dive_into_datomic.t78778.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t78778";
stuttaford.dive_into_datomic.t78778.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.dive-into-datomic/t78778");
});})(owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78778.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t78778.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datom";
});})(owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78778.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t78778.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (_,p__78781){var self__ = this;
var map__78782 = p__78781;var map__78782__$1 = ((cljs.core.seq_QMARK_(map__78782))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78782):map__78782);var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78782__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78782__$1,new cljs.core.Keyword(null,"component","component",1555936782));var ___$1 = this;var G__78788 = {"className": "datom"};var G__78789 = (function (){var attrs78783 = om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),null);
});})(G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
], null),cljs.core.array_seq(["Clear"], 0)),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21069__auto__ = ((function (G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function iter__78792(s__78793){return (new cljs.core.LazySeq(null,((function (G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (){var s__78793__$1 = s__78793;while(true){
var temp__4126__auto__ = cljs.core.seq(s__78793__$1);if(temp__4126__auto__)
{var s__78793__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__78793__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__78793__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__78795 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__78794 = (0);while(true){
if((i__78794 < size__21068__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__78794);cljs.core.chunk_append(b__78795,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__78800 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__78794,kind,c__21067__auto__,size__21068__auto__,b__78795,s__78793__$2,temp__4126__auto__,G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(i__78794,kind,c__21067__auto__,size__21068__auto__,b__78795,s__78793__$2,temp__4126__auto__,G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
], null);var G__78800__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78800,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__78800);return G__78800__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)));
{
var G__78821 = (i__78794 + (1));
i__78794 = G__78821;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__78795),iter__78792(cljs.core.chunk_rest(s__78793__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__78795),null);
}
} else
{var kind = cljs.core.first(s__78793__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__78801 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (kind,s__78793__$2,temp__4126__auto__,G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(kind,s__78793__$2,temp__4126__auto__,G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
], null);var G__78801__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78801,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__78801);return G__78801__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)),iter__78792(cljs.core.rest(s__78793__$2)));
}
} else
{return null;
}
break;
}
});})(G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
,null,null));
});})(G__78788,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;return iter__21069__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.Keyword(null,"values","values",372645556)], null));
})()], 0))], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs78783))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navigation"], null)], null),attrs78783], 0))):{"className": "navigation"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs78783))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs78783)], null))));
})();var G__78790 = (function (){var G__78802 = {"className": "datom-tuple"};var G__78803 = (function (){var G__78806 = null;var G__78807 = "[";return React.DOM.span(G__78806,G__78807);
})();var G__78804 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (G__78802,G__78803,G__78788,G__78789,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function iter__78808(s__78809){return (new cljs.core.LazySeq(null,((function (G__78802,G__78803,G__78788,G__78789,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (){var s__78809__$1 = s__78809;while(true){
var temp__4126__auto__ = cljs.core.seq(s__78809__$1);if(temp__4126__auto__)
{var s__78809__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__78809__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__78809__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__78811 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__78810 = (0);while(true){
if((i__78810 < size__21068__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__78810);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);cljs.core.chunk_append(b__78811,sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__78810,s__78809__$1,class$,label,kind,c__21067__auto__,size__21068__auto__,b__78811,s__78809__$2,temp__4126__auto__,G__78802,G__78803,G__78788,G__78789,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(i__78810,s__78809__$1,class$,label,kind,c__21067__auto__,size__21068__auto__,b__78811,s__78809__$2,temp__4126__auto__,G__78802,G__78803,G__78788,G__78789,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)));
{
var G__78822 = (i__78810 + (1));
i__78810 = G__78822;
continue;
}
} else
{{
var G__78823 = (i__78810 + (1));
i__78810 = G__78823;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__78811),iter__78808(cljs.core.chunk_rest(s__78809__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__78811),null);
}
} else
{var kind = cljs.core.first(s__78809__$2);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);return cljs.core.cons(sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__78809__$1,class$,label,kind,s__78809__$2,temp__4126__auto__,G__78802,G__78803,G__78788,G__78789,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(s__78809__$1,class$,label,kind,s__78809__$2,temp__4126__auto__,G__78802,G__78803,G__78788,G__78789,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)),iter__78808(cljs.core.rest(s__78809__$2)));
} else
{{
var G__78824 = cljs.core.rest(s__78809__$2);
s__78809__$1 = G__78824;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__78802,G__78803,G__78788,G__78789,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
,null,null));
});})(G__78802,G__78803,G__78788,G__78789,___$1,map__78782,map__78782__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;return iter__21069__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"added","added",2057651688)], null));
})());var G__78805 = (function (){var G__78814 = null;var G__78815 = "]";return React.DOM.span(G__78814,G__78815);
})();return React.DOM.div(G__78802,G__78803,G__78804,G__78805);
})();var G__78791 = sablono.interpreter.interpret((cljs.core.truth_(component)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datom-content","div.datom-content",1558083752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),clojure.string.capitalize(cljs.core.name(component))], null),(function (){var G__78816 = component;return (stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1 ? stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1(G__78816) : stuttaford.dive_into_datomic.content.datom_content.call(null,G__78816));
})()], null):null));return React.DOM.div(G__78788,G__78789,G__78790,G__78791);
});})(owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78778.prototype.om$core$IInitState$ = true;
stuttaford.dive_into_datomic.t78778.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"example","example",-1755779144)], null);
});})(owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (_78780){var self__ = this;
var _78780__$1 = this;return self__.meta78779;
});})(owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t78778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function (_78780,meta78779__$1){var self__ = this;
var _78780__$1 = this;return (new stuttaford.dive_into_datomic.t78778(self__.opts__24583__auto__,self__.owner,self__.input_checker78733,self__.data,self__.fnk78730,self__.G__78735,self__.input_schema78732,self__.output_checker78734,self__.datom,self__.data__24582__auto__,self__.map78729,self__.vec__78728,self__.owner78635,self__.output_schema78731,self__.p__78637,self__.validate__837__auto__,self__.ufv__,meta78779__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;
stuttaford.dive_into_datomic.__GT_t78778 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__){
return (function __GT_t78778(opts__24583__auto____$1,owner__$1,input_checker78733__$1,data__$1,fnk78730__$1,G__78735__$1,input_schema78732__$1,output_checker78734__$1,datom__$1,data__24582__auto____$1,map78729__$1,vec__78728__$1,owner78635__$1,output_schema78731__$1,p__78637__$1,validate__837__auto____$1,ufv____$1,meta78779){return (new stuttaford.dive_into_datomic.t78778(opts__24583__auto____$1,owner__$1,input_checker78733__$1,data__$1,fnk78730__$1,G__78735__$1,input_schema78732__$1,output_checker78734__$1,datom__$1,data__24582__auto____$1,map78729__$1,vec__78728__$1,owner78635__$1,output_schema78731__$1,p__78637__$1,validate__837__auto____$1,ufv____$1,meta78779));
});})(owner,data,validate__837__auto__,ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
;
}
return (new stuttaford.dive_into_datomic.t78778(opts__24583__auto__,owner,input_checker78733,data,fnk78730,G__78735,input_schema78732,output_checker78734,datom,data__24582__auto__,map78729,vec__78728,owner78635,output_schema78731,p__78637,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78825 = (function (){var G__78817 = o__840__auto__;return (output_checker78734.cljs$core$IFn$_invoke$arity$1 ? output_checker78734.cljs$core$IFn$_invoke$arity$1(G__78817) : output_checker78734.call(null,G__78817));
})();if(cljs.core.truth_(temp__4126__auto___78825))
{var error__839__auto___78826 = temp__4126__auto___78825;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78730","fnk78730",-1564277625,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78826], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78731,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78826], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78731,input_schema78732,input_checker78733,output_checker78734,vec__78728,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema78731,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78732], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78635,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var datom = function (data__24582__auto__,owner78635,var_args){
var p__78637 = null;if (arguments.length > 2) {
  p__78637 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datom__delegate.call(this,data__24582__auto__,owner78635,p__78637);};
datom.cljs$lang$maxFixedArity = 2;
datom.cljs$lang$applyTo = (function (arglist__78827){
var data__24582__auto__ = cljs.core.first(arglist__78827);
arglist__78827 = cljs.core.next(arglist__78827);
var owner78635 = cljs.core.first(arglist__78827);
var p__78637 = cljs.core.rest(arglist__78827);
return datom__delegate(data__24582__auto__,owner78635,p__78637);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
stuttaford.dive_into_datomic.__GT_datom = (function() {
var __GT_datom = null;
var __GT_datom__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.datom,cursor__24551__auto__);
});
var __GT_datom__2 = (function (cursor__24551__auto__,m78636){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.datom,cursor__24551__auto__,m78636);
});
__GT_datom = function(cursor__24551__auto__,m78636){
switch(arguments.length){
case 1:
return __GT_datom__1.call(this,cursor__24551__auto__);
case 2:
return __GT_datom__2.call(this,cursor__24551__auto__,m78636);
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
var top_nav__delegate = function (data__24582__auto__,owner78828,p__78830){var vec__79007 = p__78830;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79007,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema79012 = schema.core.Any;var input_schema79013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map79008","map79008",965498116,null))], null);var input_checker79014 = schema.core.checker(input_schema79013);var output_checker79015 = schema.core.checker(output_schema79012);return schema.core.schematize_fn(((function (ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function fnk79011(G__79016){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___79183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__79016], null);var temp__4126__auto___79184 = (function (){var G__79100 = args__838__auto___79183;return (input_checker79014.cljs$core$IFn$_invoke$arity$1 ? input_checker79014.cljs$core$IFn$_invoke$arity$1(G__79100) : input_checker79014.call(null,G__79100));
})();if(cljs.core.truth_(temp__4126__auto___79184))
{var error__839__auto___79185 = temp__4126__auto___79184;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79011","fnk79011",-832203668,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79185], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema79013,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___79183,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79185], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map79008 = G__79016;while(true){
if(cljs.core.map_QMARK_(map79008))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map79008], 0))));
}
var map79010 = plumbing.fnk.schema.safe_get(map79008,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map79010,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map79008,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map79009 = plumbing.fnk.schema.safe_get(map79008,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map79009,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.dive_into_datomic.t79101 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t79101 = (function (opts__24583__auto__,map79008,owner,view,map79010,map79009,owner78828,G__79016,nav_items,fnk79011,data__24582__auto__,input_schema79013,output_schema79012,top_nav,output_checker79015,vec__79007,p__78830,validate__837__auto__,input_checker79014,ufv__,meta79102){
this.opts__24583__auto__ = opts__24583__auto__;
this.map79008 = map79008;
this.owner = owner;
this.view = view;
this.map79010 = map79010;
this.map79009 = map79009;
this.owner78828 = owner78828;
this.G__79016 = G__79016;
this.nav_items = nav_items;
this.fnk79011 = fnk79011;
this.data__24582__auto__ = data__24582__auto__;
this.input_schema79013 = input_schema79013;
this.output_schema79012 = output_schema79012;
this.top_nav = top_nav;
this.output_checker79015 = output_checker79015;
this.vec__79007 = vec__79007;
this.p__78830 = p__78830;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker79014 = input_checker79014;
this.ufv__ = ufv__;
this.meta79102 = meta79102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t79101.cljs$lang$type = true;
stuttaford.dive_into_datomic.t79101.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t79101";
stuttaford.dive_into_datomic.t79101.cljs$lang$ctorPrWriter = ((function (nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.dive-into-datomic/t79101");
});})(nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79101.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t79101.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79101.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t79101.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21069__auto__ = ((function (c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function iter__79104(s__79105){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (){var s__79105__$1 = s__79105;while(true){
var temp__4126__auto__ = cljs.core.seq(s__79105__$1);if(temp__4126__auto__)
{var s__79105__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__79105__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__79105__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__79107 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__79106 = (0);while(true){
if((i__79106 < size__21068__auto__))
{var items = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__79106);cljs.core.chunk_append(b__79107,om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21069__auto__ = ((function (i__79106,items,c__21067__auto__,size__21068__auto__,b__79107,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function iter__79146(s__79147){return (new cljs.core.LazySeq(null,((function (i__79106,items,c__21067__auto__,size__21068__auto__,b__79107,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (){var s__79147__$1 = s__79147;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__79147__$1);if(temp__4126__auto____$1)
{var s__79147__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__79147__$2))
{var c__21067__auto____$1 = cljs.core.chunk_first(s__79147__$2);var size__21068__auto____$1 = cljs.core.count(c__21067__auto____$1);var b__79149 = cljs.core.chunk_buffer(size__21068__auto____$1);if((function (){var i__79148 = (0);while(true){
if((i__79148 < size__21068__auto____$1))
{var vec__79158 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto____$1,i__79148);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79158,(0),null);var vec__79159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79158,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79159,(0),null);cljs.core.chunk_append(b__79149,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79160 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79148,i__79106,vec__79158,id,vec__79159,label,c__21067__auto____$1,size__21068__auto____$1,b__79149,s__79147__$2,temp__4126__auto____$1,items,c__21067__auto__,size__21068__auto__,b__79107,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__79148,i__79106,vec__79158,id,vec__79159,label,c__21067__auto____$1,size__21068__auto____$1,b__79149,s__79147__$2,temp__4126__auto____$1,items,c__21067__auto__,size__21068__auto__,b__79107,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
], null);var G__79160__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79160,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79160);return G__79160__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__79186 = (i__79148 + (1));
i__79148 = G__79186;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79149),iter__79146(cljs.core.chunk_rest(s__79147__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79149),null);
}
} else
{var vec__79161 = cljs.core.first(s__79147__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79161,(0),null);var vec__79162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79161,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79162,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79163 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79106,vec__79161,id,vec__79162,label,s__79147__$2,temp__4126__auto____$1,items,c__21067__auto__,size__21068__auto__,b__79107,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__79106,vec__79161,id,vec__79162,label,s__79147__$2,temp__4126__auto____$1,items,c__21067__auto__,size__21068__auto__,b__79107,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
], null);var G__79163__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79163,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79163);return G__79163__$1;
})(),cljs.core.array_seq([label], 0)),iter__79146(cljs.core.rest(s__79147__$2)));
}
} else
{return null;
}
break;
}
});})(i__79106,items,c__21067__auto__,size__21068__auto__,b__79107,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
,null,null));
});})(i__79106,items,c__21067__auto__,size__21068__auto__,b__79107,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;return iter__21069__auto__(items);
})()], 0)));
{
var G__79187 = (i__79106 + (1));
i__79106 = G__79187;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79107),iter__79104(cljs.core.chunk_rest(s__79105__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79107),null);
}
} else
{var items = cljs.core.first(s__79105__$2);return cljs.core.cons(om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21069__auto__ = ((function (items,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function iter__79164(s__79165){return (new cljs.core.LazySeq(null,((function (items,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (){var s__79165__$1 = s__79165;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__79165__$1);if(temp__4126__auto____$1)
{var s__79165__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__79165__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__79165__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__79167 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__79166 = (0);while(true){
if((i__79166 < size__21068__auto__))
{var vec__79176 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__79166);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79176,(0),null);var vec__79177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79176,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79177,(0),null);cljs.core.chunk_append(b__79167,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79178 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79166,vec__79176,id,vec__79177,label,c__21067__auto__,size__21068__auto__,b__79167,s__79165__$2,temp__4126__auto____$1,items,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__79166,vec__79176,id,vec__79177,label,c__21067__auto__,size__21068__auto__,b__79167,s__79165__$2,temp__4126__auto____$1,items,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
], null);var G__79178__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79178,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79178);return G__79178__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__79188 = (i__79166 + (1));
i__79166 = G__79188;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79167),iter__79164(cljs.core.chunk_rest(s__79165__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79167),null);
}
} else
{var vec__79179 = cljs.core.first(s__79165__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79179,(0),null);var vec__79180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79179,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79180,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79181 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__79179,id,vec__79180,label,s__79165__$2,temp__4126__auto____$1,items,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__79179,id,vec__79180,label,s__79165__$2,temp__4126__auto____$1,items,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
], null);var G__79181__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79181,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79181);return G__79181__$1;
})(),cljs.core.array_seq([label], 0)),iter__79164(cljs.core.rest(s__79165__$2)));
}
} else
{return null;
}
break;
}
});})(items,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
,null,null));
});})(items,s__79105__$2,temp__4126__auto__,c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;return iter__21069__auto__(items);
})()], 0)),iter__79104(cljs.core.rest(s__79105__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
,null,null));
});})(c,___$1,nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;return iter__21069__auto__(self__.nav_items);
})()], 0));
});})(nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (_79103){var self__ = this;
var _79103__$1 = this;return self__.meta79102;
});})(nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function (_79103,meta79102__$1){var self__ = this;
var _79103__$1 = this;return (new stuttaford.dive_into_datomic.t79101(self__.opts__24583__auto__,self__.map79008,self__.owner,self__.view,self__.map79010,self__.map79009,self__.owner78828,self__.G__79016,self__.nav_items,self__.fnk79011,self__.data__24582__auto__,self__.input_schema79013,self__.output_schema79012,self__.top_nav,self__.output_checker79015,self__.vec__79007,self__.p__78830,self__.validate__837__auto__,self__.input_checker79014,self__.ufv__,meta79102__$1));
});})(nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;
stuttaford.dive_into_datomic.__GT_t79101 = ((function (nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__){
return (function __GT_t79101(opts__24583__auto____$1,map79008__$1,owner__$1,view__$1,map79010__$1,map79009__$1,owner78828__$1,G__79016__$1,nav_items__$1,fnk79011__$1,data__24582__auto____$1,input_schema79013__$1,output_schema79012__$1,top_nav__$1,output_checker79015__$1,vec__79007__$1,p__78830__$1,validate__837__auto____$1,input_checker79014__$1,ufv____$1,meta79102){return (new stuttaford.dive_into_datomic.t79101(opts__24583__auto____$1,map79008__$1,owner__$1,view__$1,map79010__$1,map79009__$1,owner78828__$1,G__79016__$1,nav_items__$1,fnk79011__$1,data__24582__auto____$1,input_schema79013__$1,output_schema79012__$1,top_nav__$1,output_checker79015__$1,vec__79007__$1,p__78830__$1,validate__837__auto____$1,input_checker79014__$1,ufv____$1,meta79102));
});})(nav_items,map79009,owner,view,map79010,validate__837__auto__,ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
;
}
return (new stuttaford.dive_into_datomic.t79101(opts__24583__auto__,map79008,owner,view,map79010,map79009,owner78828,G__79016,nav_items,fnk79011,data__24582__auto__,input_schema79013,output_schema79012,top_nav,output_checker79015,vec__79007,p__78830,validate__837__auto__,input_checker79014,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___79189 = (function (){var G__79182 = o__840__auto__;return (output_checker79015.cljs$core$IFn$_invoke$arity$1 ? output_checker79015.cljs$core$IFn$_invoke$arity$1(G__79182) : output_checker79015.call(null,G__79182));
})();if(cljs.core.truth_(temp__4126__auto___79189))
{var error__839__auto___79190 = temp__4126__auto___79189;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79011","fnk79011",-832203668,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79190], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema79012,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79190], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema79012,input_schema79013,input_checker79014,output_checker79015,vec__79007,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema79012,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema79013], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78828,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var top_nav = function (data__24582__auto__,owner78828,var_args){
var p__78830 = null;if (arguments.length > 2) {
  p__78830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24582__auto__,owner78828,p__78830);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__79191){
var data__24582__auto__ = cljs.core.first(arglist__79191);
arglist__79191 = cljs.core.next(arglist__79191);
var owner78828 = cljs.core.first(arglist__79191);
var p__78830 = cljs.core.rest(arglist__79191);
return top_nav__delegate(data__24582__auto__,owner78828,p__78830);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.dive_into_datomic.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.top_nav,cursor__24551__auto__);
});
var __GT_top_nav__2 = (function (cursor__24551__auto__,m78829){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.top_nav,cursor__24551__auto__,m78829);
});
__GT_top_nav = function(cursor__24551__auto__,m78829){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24551__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24551__auto__,m78829);
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
var app_view__delegate = function (data__24582__auto__,owner79192,p__79194){var vec__79313 = p__79194;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79313,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema79316 = schema.core.Any;var input_schema79317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map79314","map79314",-1285259671,null))], null);var input_checker79318 = schema.core.checker(input_schema79317);var output_checker79319 = schema.core.checker(output_schema79316);return schema.core.schematize_fn(((function (ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function fnk79315(G__79320){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___79431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__79320], null);var temp__4126__auto___79432 = (function (){var G__79376 = args__838__auto___79431;return (input_checker79318.cljs$core$IFn$_invoke$arity$1 ? input_checker79318.cljs$core$IFn$_invoke$arity$1(G__79376) : input_checker79318.call(null,G__79376));
})();if(cljs.core.truth_(temp__4126__auto___79432))
{var error__839__auto___79433 = temp__4126__auto___79432;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79315","fnk79315",520572538,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79433], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema79317,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___79431,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79433], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map79314 = G__79320;while(true){
if(cljs.core.map_QMARK_(map79314))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map79314], 0))));
}
var data = plumbing.fnk.schema.safe_get(map79314,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map79314,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t79377 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t79377 = (function (app_view,opts__24583__auto__,owner,view,data,map79314,output_schema79316,output_checker79319,owner79192,G__79320,data__24582__auto__,vec__79313,input_schema79317,fnk79315,validate__837__auto__,p__79194,ufv__,input_checker79318,meta79378){
this.app_view = app_view;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.view = view;
this.data = data;
this.map79314 = map79314;
this.output_schema79316 = output_schema79316;
this.output_checker79319 = output_checker79319;
this.owner79192 = owner79192;
this.G__79320 = G__79320;
this.data__24582__auto__ = data__24582__auto__;
this.vec__79313 = vec__79313;
this.input_schema79317 = input_schema79317;
this.fnk79315 = fnk79315;
this.validate__837__auto__ = validate__837__auto__;
this.p__79194 = p__79194;
this.ufv__ = ufv__;
this.input_checker79318 = input_checker79318;
this.meta79378 = meta79378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t79377.cljs$lang$type = true;
stuttaford.dive_into_datomic.t79377.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t79377";
stuttaford.dive_into_datomic.t79377.cljs$lang$ctorPrWriter = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.dive-into-datomic/t79377");
});})(owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79377.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t79377.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79377.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t79377.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__79380 = (function (){var G__79381 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,stuttaford.dive_into_datomic.nav_items));return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__79381) : self__.view.call(null,G__79381));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79380,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79380,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),stuttaford.dive_into_datomic.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.dive_into_datomic.nav_items], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__79384 = null;return React.DOM.div(G__79384);
})())], null)], null);
})());
});})(owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79377.prototype.om$core$IWillUnmount$ = true;
stuttaford.dive_into_datomic.t79377.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79377.prototype.om$core$IWillMount$ = true;
stuttaford.dive_into_datomic.t79377.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__23127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (state_79405){var state_val_79406 = (state_79405[(1)]);if((state_val_79406 === (7)))
{var inst_79388 = (state_79405[(7)]);var inst_79388__$1 = (state_79405[(2)]);var state_79405__$1 = (function (){var statearr_79407 = state_79405;(statearr_79407[(7)] = inst_79388__$1);
return statearr_79407;
})();if(cljs.core.truth_(inst_79388__$1))
{var statearr_79408_79434 = state_79405__$1;(statearr_79408_79434[(1)] = (8));
} else
{var statearr_79409_79435 = state_79405__$1;(statearr_79409_79435[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79406 === (1)))
{var state_79405__$1 = state_79405;var statearr_79410_79436 = state_79405__$1;(statearr_79410_79436[(2)] = null);
(statearr_79410_79436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79406 === (4)))
{var state_79405__$1 = state_79405;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79405__$1,(7),c);
} else
{if((state_val_79406 === (6)))
{var inst_79401 = (state_79405[(2)]);var state_79405__$1 = state_79405;var statearr_79411_79437 = state_79405__$1;(statearr_79411_79437[(2)] = inst_79401);
(statearr_79411_79437[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79406 === (3)))
{var inst_79403 = (state_79405[(2)]);var state_79405__$1 = state_79405;return cljs.core.async.impl.ioc_helpers.return_chan(state_79405__$1,inst_79403);
} else
{if((state_val_79406 === (2)))
{var state_79405__$1 = state_79405;var statearr_79412_79438 = state_79405__$1;(statearr_79412_79438[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79406 === (9)))
{var state_79405__$1 = state_79405;var statearr_79414_79439 = state_79405__$1;(statearr_79414_79439[(2)] = null);
(statearr_79414_79439[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79406 === (5)))
{var state_79405__$1 = state_79405;var statearr_79415_79440 = state_79405__$1;(statearr_79415_79440[(2)] = null);
(statearr_79415_79440[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79406 === (10)))
{var inst_79397 = (state_79405[(2)]);var state_79405__$1 = (function (){var statearr_79416 = state_79405;(statearr_79416[(8)] = inst_79397);
return statearr_79416;
})();var statearr_79417_79441 = state_79405__$1;(statearr_79417_79441[(2)] = null);
(statearr_79417_79441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79406 === (8)))
{var inst_79388 = (state_79405[(7)]);var inst_79391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79388,(0),null);var inst_79392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79388,(1),null);var inst_79393 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_79394 = (function (){var G__79418 = self__.data;var G__79419 = inst_79391;var G__79420 = inst_79392;var G__79421 = inst_79393;return (stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4(G__79418,G__79419,G__79420,G__79421) : stuttaford.dive_into_datomic.perform_action.call(null,G__79418,G__79419,G__79420,G__79421));
})();var state_79405__$1 = state_79405;var statearr_79422_79442 = state_79405__$1;(statearr_79422_79442[(2)] = inst_79394);
(statearr_79422_79442[(1)] = (10));
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
});})(c__23127__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;return ((function (switch__23112__auto__,c__23127__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_79426 = [null,null,null,null,null,null,null,null,null];(statearr_79426[(0)] = state_machine__23113__auto__);
(statearr_79426[(1)] = (1));
return statearr_79426;
});
var state_machine__23113__auto____1 = (function (state_79405){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_79405);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e79427){if((e79427 instanceof Object))
{var ex__23116__auto__ = e79427;var statearr_79428_79443 = state_79405;(statearr_79428_79443[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_79405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e79427;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79444 = state_79405;
state_79405 = G__79444;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_79405){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_79405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
})();var state__23129__auto__ = (function (){var statearr_79429 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_79429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto__);
return statearr_79429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
);
return c__23127__auto__;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (_79379){var self__ = this;
var _79379__$1 = this;return self__.meta79378;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;
stuttaford.dive_into_datomic.t79377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function (_79379,meta79378__$1){var self__ = this;
var _79379__$1 = this;return (new stuttaford.dive_into_datomic.t79377(self__.app_view,self__.opts__24583__auto__,self__.owner,self__.view,self__.data,self__.map79314,self__.output_schema79316,self__.output_checker79319,self__.owner79192,self__.G__79320,self__.data__24582__auto__,self__.vec__79313,self__.input_schema79317,self__.fnk79315,self__.validate__837__auto__,self__.p__79194,self__.ufv__,self__.input_checker79318,meta79378__$1));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;
stuttaford.dive_into_datomic.__GT_t79377 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__){
return (function __GT_t79377(app_view__$1,opts__24583__auto____$1,owner__$1,view__$1,data__$1,map79314__$1,output_schema79316__$1,output_checker79319__$1,owner79192__$1,G__79320__$1,data__24582__auto____$1,vec__79313__$1,input_schema79317__$1,fnk79315__$1,validate__837__auto____$1,p__79194__$1,ufv____$1,input_checker79318__$1,meta79378){return (new stuttaford.dive_into_datomic.t79377(app_view__$1,opts__24583__auto____$1,owner__$1,view__$1,data__$1,map79314__$1,output_schema79316__$1,output_checker79319__$1,owner79192__$1,G__79320__$1,data__24582__auto____$1,vec__79313__$1,input_schema79317__$1,fnk79315__$1,validate__837__auto____$1,p__79194__$1,ufv____$1,input_checker79318__$1,meta79378));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
;
}
return (new stuttaford.dive_into_datomic.t79377(app_view,opts__24583__auto__,owner,view,data,map79314,output_schema79316,output_checker79319,owner79192,G__79320,data__24582__auto__,vec__79313,input_schema79317,fnk79315,validate__837__auto__,p__79194,ufv__,input_checker79318,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___79445 = (function (){var G__79430 = o__840__auto__;return (output_checker79319.cljs$core$IFn$_invoke$arity$1 ? output_checker79319.cljs$core$IFn$_invoke$arity$1(G__79430) : output_checker79319.call(null,G__79430));
})();if(cljs.core.truth_(temp__4126__auto___79445))
{var error__839__auto___79446 = temp__4126__auto___79445;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79315","fnk79315",520572538,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79446], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema79316,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79446], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema79316,input_schema79317,input_checker79318,output_checker79319,vec__79313,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema79316,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema79317], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner79192,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var app_view = function (data__24582__auto__,owner79192,var_args){
var p__79194 = null;if (arguments.length > 2) {
  p__79194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24582__auto__,owner79192,p__79194);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__79447){
var data__24582__auto__ = cljs.core.first(arglist__79447);
arglist__79447 = cljs.core.next(arglist__79447);
var owner79192 = cljs.core.first(arglist__79447);
var p__79194 = cljs.core.rest(arglist__79447);
return app_view__delegate(data__24582__auto__,owner79192,p__79194);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.dive_into_datomic.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.app_view,cursor__24551__auto__);
});
var __GT_app_view__2 = (function (cursor__24551__auto__,m79193){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.app_view,cursor__24551__auto__,m79193);
});
__GT_app_view = function(cursor__24551__auto__,m79193){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24551__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24551__auto__,m79193);
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