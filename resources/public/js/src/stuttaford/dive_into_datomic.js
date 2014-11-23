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
stuttaford.dive_into_datomic.perform_action = (function (){var method_table__21360__auto__ = (function (){var G__42456 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42456) : cljs.core.atom.call(null,G__42456));
})();var prefer_table__21361__auto__ = (function (){var G__42457 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42457) : cljs.core.atom.call(null,G__42457));
})();var method_cache__21362__auto__ = (function (){var G__42458 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42458) : cljs.core.atom.call(null,G__42458));
})();var cached_hierarchy__21363__auto__ = (function (){var G__42459 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42459) : cljs.core.atom.call(null,G__42459));
})();var hierarchy__21364__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__,hierarchy__21364__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__,hierarchy__21364__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21364__auto__,method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__));
})();
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cursor,op,value){throw ("Missing perform-method op: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));
}));
stuttaford.dive_into_datomic.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"view","view",1247994814),value);
}));
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.home = (function() { 
var home__delegate = function (data__24441__auto__,owner42460,p__42462){var vec__42489 = p__42462;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42489,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema42492 = schema.core.Any;var input_schema42493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map42490","map42490",1056722114,null))], null);var input_checker42494 = schema.core.checker(input_schema42493);var output_checker42495 = schema.core.checker(output_schema42492);return schema.core.schematize_fn(((function (ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__){
return (function fnk42491(G__42496){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___42515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42496], null);var temp__4126__auto___42516 = (function (){var G__42506 = args__838__auto___42515;return (input_checker42494.cljs$core$IFn$_invoke$arity$1 ? input_checker42494.cljs$core$IFn$_invoke$arity$1(G__42506) : input_checker42494.call(null,G__42506));
})();if(cljs.core.truth_(temp__4126__auto___42516))
{var error__839__auto___42517 = temp__4126__auto___42516;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42491","fnk42491",2065403303,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42517], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42493,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___42515,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42517], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map42490 = G__42496;while(true){
if(cljs.core.map_QMARK_(map42490))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map42490], 0))));
}
var data = plumbing.fnk.schema.safe_get(map42490,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map42490,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t42507 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t42507 = (function (map42490,owner42460,input_checker42494,owner,data,fnk42491,output_checker42495,vec__42489,home,data__24441__auto__,p__42462,G__42496,input_schema42493,opts__24442__auto__,validate__837__auto__,output_schema42492,ufv__,meta42508){
this.map42490 = map42490;
this.owner42460 = owner42460;
this.input_checker42494 = input_checker42494;
this.owner = owner;
this.data = data;
this.fnk42491 = fnk42491;
this.output_checker42495 = output_checker42495;
this.vec__42489 = vec__42489;
this.home = home;
this.data__24441__auto__ = data__24441__auto__;
this.p__42462 = p__42462;
this.G__42496 = G__42496;
this.input_schema42493 = input_schema42493;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema42492 = output_schema42492;
this.ufv__ = ufv__;
this.meta42508 = meta42508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t42507.cljs$lang$type = true;
stuttaford.dive_into_datomic.t42507.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t42507";
stuttaford.dive_into_datomic.t42507.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.dive-into-datomic/t42507");
});})(owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42507.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t42507.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "home";
});})(owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42507.prototype.om$core$IRender$ = true;
stuttaford.dive_into_datomic.t42507.prototype.om$core$IRender$render$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var G__42512 = null;var G__42513 = "Dive into Datomic interactive diagrams.";return React.DOM.div(G__42512,G__42513);
});})(owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__){
return (function (_42509){var self__ = this;
var _42509__$1 = this;return self__.meta42508;
});})(owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__){
return (function (_42509,meta42508__$1){var self__ = this;
var _42509__$1 = this;return (new stuttaford.dive_into_datomic.t42507(self__.map42490,self__.owner42460,self__.input_checker42494,self__.owner,self__.data,self__.fnk42491,self__.output_checker42495,self__.vec__42489,self__.home,self__.data__24441__auto__,self__.p__42462,self__.G__42496,self__.input_schema42493,self__.opts__24442__auto__,self__.validate__837__auto__,self__.output_schema42492,self__.ufv__,meta42508__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__))
;
stuttaford.dive_into_datomic.__GT_t42507 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__){
return (function __GT_t42507(map42490__$1,owner42460__$1,input_checker42494__$1,owner__$1,data__$1,fnk42491__$1,output_checker42495__$1,vec__42489__$1,home__$1,data__24441__auto____$1,p__42462__$1,G__42496__$1,input_schema42493__$1,opts__24442__auto____$1,validate__837__auto____$1,output_schema42492__$1,ufv____$1,meta42508){return (new stuttaford.dive_into_datomic.t42507(map42490__$1,owner42460__$1,input_checker42494__$1,owner__$1,data__$1,fnk42491__$1,output_checker42495__$1,vec__42489__$1,home__$1,data__24441__auto____$1,p__42462__$1,G__42496__$1,input_schema42493__$1,opts__24442__auto____$1,validate__837__auto____$1,output_schema42492__$1,ufv____$1,meta42508));
});})(owner,data,validate__837__auto__,ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__))
;
}
return (new stuttaford.dive_into_datomic.t42507(map42490,owner42460,input_checker42494,owner,data,fnk42491,output_checker42495,vec__42489,home,data__24441__auto__,p__42462,G__42496,input_schema42493,opts__24442__auto__,validate__837__auto__,output_schema42492,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___42518 = (function (){var G__42514 = o__840__auto__;return (output_checker42495.cljs$core$IFn$_invoke$arity$1 ? output_checker42495.cljs$core$IFn$_invoke$arity$1(G__42514) : output_checker42495.call(null,G__42514));
})();if(cljs.core.truth_(temp__4126__auto___42518))
{var error__839__auto___42519 = temp__4126__auto___42518;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42491","fnk42491",2065403303,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42519], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42492,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42519], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema42492,input_schema42493,input_checker42494,output_checker42495,vec__42489,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema42492,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42493], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner42460,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var home = function (data__24441__auto__,owner42460,var_args){
var p__42462 = null;if (arguments.length > 2) {
  p__42462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return home__delegate.call(this,data__24441__auto__,owner42460,p__42462);};
home.cljs$lang$maxFixedArity = 2;
home.cljs$lang$applyTo = (function (arglist__42520){
var data__24441__auto__ = cljs.core.first(arglist__42520);
arglist__42520 = cljs.core.next(arglist__42520);
var owner42460 = cljs.core.first(arglist__42520);
var p__42462 = cljs.core.rest(arglist__42520);
return home__delegate(data__24441__auto__,owner42460,p__42462);
});
home.cljs$core$IFn$_invoke$arity$variadic = home__delegate;
return home;
})()
;
stuttaford.dive_into_datomic.__GT_home = (function() {
var __GT_home = null;
var __GT_home__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.home,cursor__24410__auto__);
});
var __GT_home__2 = (function (cursor__24410__auto__,m42461){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.home,cursor__24410__auto__,m42461);
});
__GT_home = function(cursor__24410__auto__,m42461){
switch(arguments.length){
case 1:
return __GT_home__1.call(this,cursor__24410__auto__);
case 2:
return __GT_home__2.call(this,cursor__24410__auto__,m42461);
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
var datom__delegate = function (data__24441__auto__,owner42521,p__42523){var vec__42614 = p__42523;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42614,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema42617 = schema.core.Any;var input_schema42618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map42615","map42615",1182880296,null))], null);var input_checker42619 = schema.core.checker(input_schema42618);var output_checker42620 = schema.core.checker(output_schema42617);return schema.core.schematize_fn(((function (ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function fnk42616(G__42621){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___42704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42621], null);var temp__4126__auto___42705 = (function (){var G__42663 = args__838__auto___42704;return (input_checker42619.cljs$core$IFn$_invoke$arity$1 ? input_checker42619.cljs$core$IFn$_invoke$arity$1(G__42663) : input_checker42619.call(null,G__42663));
})();if(cljs.core.truth_(temp__4126__auto___42705))
{var error__839__auto___42706 = temp__4126__auto___42705;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42616","fnk42616",428579294,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42706], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42618,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___42704,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42706], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map42615 = G__42621;while(true){
if(cljs.core.map_QMARK_(map42615))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map42615], 0))));
}
var data = plumbing.fnk.schema.safe_get(map42615,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map42615,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t42664 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t42664 = (function (owner42521,G__42621,owner,data,map42615,input_checker42619,output_checker42620,datom,input_schema42618,data__24441__auto__,p__42523,vec__42614,opts__24442__auto__,validate__837__auto__,ufv__,output_schema42617,fnk42616,meta42665){
this.owner42521 = owner42521;
this.G__42621 = G__42621;
this.owner = owner;
this.data = data;
this.map42615 = map42615;
this.input_checker42619 = input_checker42619;
this.output_checker42620 = output_checker42620;
this.datom = datom;
this.input_schema42618 = input_schema42618;
this.data__24441__auto__ = data__24441__auto__;
this.p__42523 = p__42523;
this.vec__42614 = vec__42614;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.output_schema42617 = output_schema42617;
this.fnk42616 = fnk42616;
this.meta42665 = meta42665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t42664.cljs$lang$type = true;
stuttaford.dive_into_datomic.t42664.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t42664";
stuttaford.dive_into_datomic.t42664.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.dive-into-datomic/t42664");
});})(owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42664.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t42664.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datom";
});})(owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42664.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t42664.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (_,p__42667){var self__ = this;
var map__42668 = p__42667;var map__42668__$1 = ((cljs.core.seq_QMARK_(map__42668))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42668):map__42668);var labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42668__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42668__$1,new cljs.core.Keyword(null,"component","component",1555936782));var ___$1 = this;var G__42674 = {"className": "datom"};var G__42675 = (function (){var attrs42669 = om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),null);
});})(G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
], null),cljs.core.array_seq(["Clear"], 0)),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21074__auto__ = ((function (G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function iter__42678(s__42679){return (new cljs.core.LazySeq(null,((function (G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (){var s__42679__$1 = s__42679;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42679__$1);if(temp__4126__auto__)
{var s__42679__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42679__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__42679__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__42681 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__42680 = (0);while(true){
if((i__42680 < size__21073__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__42680);cljs.core.chunk_append(b__42681,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__42686 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42680,kind,c__21072__auto__,size__21073__auto__,b__42681,s__42679__$2,temp__4126__auto__,G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(i__42680,kind,c__21072__auto__,size__21073__auto__,b__42681,s__42679__$2,temp__4126__auto__,G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
], null);var G__42686__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42686,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__42686);return G__42686__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)));
{
var G__42707 = (i__42680 + (1));
i__42680 = G__42707;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42681),iter__42678(cljs.core.chunk_rest(s__42679__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42681),null);
}
} else
{var kind = cljs.core.first(s__42679__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__42687 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (kind,s__42679__$2,temp__4126__auto__,G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"labels","labels",-626734591),kind);
});})(kind,s__42679__$2,temp__4126__auto__,G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
], null);var G__42687__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(labels,kind))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42687,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__42687);return G__42687__$1;
})(),cljs.core.array_seq([clojure.string.capitalize(cljs.core.name(kind))], 0)),iter__42678(cljs.core.rest(s__42679__$2)));
}
} else
{return null;
}
break;
}
});})(G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
,null,null));
});})(G__42674,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;return iter__21074__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example","example",-1755779144),new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.Keyword(null,"values","values",372645556)], null));
})()], 0))], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs42669))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navigation"], null)], null),attrs42669], 0))):{"className": "navigation"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs42669))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42669)], null))));
})();var G__42676 = (function (){var G__42688 = {"className": "datom-tuple"};var G__42689 = (function (){var G__42692 = null;var G__42693 = "[";return React.DOM.span(G__42692,G__42693);
})();var G__42690 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (G__42688,G__42689,G__42674,G__42675,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function iter__42694(s__42695){return (new cljs.core.LazySeq(null,((function (G__42688,G__42689,G__42674,G__42675,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (){var s__42695__$1 = s__42695;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42695__$1);if(temp__4126__auto__)
{var s__42695__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42695__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__42695__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__42697 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__42696 = (0);while(true){
if((i__42696 < size__21073__auto__))
{var kind = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__42696);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);cljs.core.chunk_append(b__42697,sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42696,s__42695__$1,class$,label,kind,c__21072__auto__,size__21073__auto__,b__42697,s__42695__$2,temp__4126__auto__,G__42688,G__42689,G__42674,G__42675,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(i__42696,s__42695__$1,class$,label,kind,c__21072__auto__,size__21073__auto__,b__42697,s__42695__$2,temp__4126__auto__,G__42688,G__42689,G__42674,G__42675,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)));
{
var G__42708 = (i__42696 + (1));
i__42696 = G__42708;
continue;
}
} else
{{
var G__42709 = (i__42696 + (1));
i__42696 = G__42709;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42697),iter__42694(cljs.core.chunk_rest(s__42695__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42697),null);
}
} else
{var kind = cljs.core.first(s__42695__$2);if(cljs.core.truth_(kind))
{var class$ = cljs.core.name(kind);var label = stuttaford.dive_into_datomic.content.label(kind,labels);return cljs.core.cons(sablono.interpreter.interpret((cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__42695__$1,class$,label,kind,s__42695__$2,temp__4126__auto__,G__42688,G__42689,G__42674,G__42675,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"component","component",1555936782),kind);
});})(s__42695__$1,class$,label,kind,s__42695__$2,temp__4126__auto__,G__42688,G__42689,G__42674,G__42675,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,kind))?" active":null)))], null),label], null):null)),iter__42694(cljs.core.rest(s__42695__$2)));
} else
{{
var G__42710 = cljs.core.rest(s__42695__$2);
s__42695__$1 = G__42710;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(G__42688,G__42689,G__42674,G__42675,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
,null,null));
});})(G__42688,G__42689,G__42674,G__42675,___$1,map__42668,map__42668__$1,labels,component,owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;return iter__21074__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"added","added",2057651688)], null));
})());var G__42691 = (function (){var G__42700 = null;var G__42701 = "]";return React.DOM.span(G__42700,G__42701);
})();return React.DOM.div(G__42688,G__42689,G__42690,G__42691);
})();var G__42677 = sablono.interpreter.interpret((cljs.core.truth_(component)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datom-content","div.datom-content",1558083752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),clojure.string.capitalize(cljs.core.name(component))], null),(function (){var G__42702 = component;return (stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1 ? stuttaford.dive_into_datomic.content.datom_content.cljs$core$IFn$_invoke$arity$1(G__42702) : stuttaford.dive_into_datomic.content.datom_content.call(null,G__42702));
})()], null):null));return React.DOM.div(G__42674,G__42675,G__42676,G__42677);
});})(owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42664.prototype.om$core$IInitState$ = true;
stuttaford.dive_into_datomic.t42664.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"example","example",-1755779144)], null);
});})(owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (_42666){var self__ = this;
var _42666__$1 = this;return self__.meta42665;
});})(owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function (_42666,meta42665__$1){var self__ = this;
var _42666__$1 = this;return (new stuttaford.dive_into_datomic.t42664(self__.owner42521,self__.G__42621,self__.owner,self__.data,self__.map42615,self__.input_checker42619,self__.output_checker42620,self__.datom,self__.input_schema42618,self__.data__24441__auto__,self__.p__42523,self__.vec__42614,self__.opts__24442__auto__,self__.validate__837__auto__,self__.ufv__,self__.output_schema42617,self__.fnk42616,meta42665__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;
stuttaford.dive_into_datomic.__GT_t42664 = ((function (owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__){
return (function __GT_t42664(owner42521__$1,G__42621__$1,owner__$1,data__$1,map42615__$1,input_checker42619__$1,output_checker42620__$1,datom__$1,input_schema42618__$1,data__24441__auto____$1,p__42523__$1,vec__42614__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,output_schema42617__$1,fnk42616__$1,meta42665){return (new stuttaford.dive_into_datomic.t42664(owner42521__$1,G__42621__$1,owner__$1,data__$1,map42615__$1,input_checker42619__$1,output_checker42620__$1,datom__$1,input_schema42618__$1,data__24441__auto____$1,p__42523__$1,vec__42614__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,output_schema42617__$1,fnk42616__$1,meta42665));
});})(owner,data,validate__837__auto__,ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
;
}
return (new stuttaford.dive_into_datomic.t42664(owner42521,G__42621,owner,data,map42615,input_checker42619,output_checker42620,datom,input_schema42618,data__24441__auto__,p__42523,vec__42614,opts__24442__auto__,validate__837__auto__,ufv__,output_schema42617,fnk42616,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___42711 = (function (){var G__42703 = o__840__auto__;return (output_checker42620.cljs$core$IFn$_invoke$arity$1 ? output_checker42620.cljs$core$IFn$_invoke$arity$1(G__42703) : output_checker42620.call(null,G__42703));
})();if(cljs.core.truth_(temp__4126__auto___42711))
{var error__839__auto___42712 = temp__4126__auto___42711;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42616","fnk42616",428579294,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42712], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42617,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42712], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema42617,input_schema42618,input_checker42619,output_checker42620,vec__42614,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema42617,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42618], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner42521,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var datom = function (data__24441__auto__,owner42521,var_args){
var p__42523 = null;if (arguments.length > 2) {
  p__42523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datom__delegate.call(this,data__24441__auto__,owner42521,p__42523);};
datom.cljs$lang$maxFixedArity = 2;
datom.cljs$lang$applyTo = (function (arglist__42713){
var data__24441__auto__ = cljs.core.first(arglist__42713);
arglist__42713 = cljs.core.next(arglist__42713);
var owner42521 = cljs.core.first(arglist__42713);
var p__42523 = cljs.core.rest(arglist__42713);
return datom__delegate(data__24441__auto__,owner42521,p__42523);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
stuttaford.dive_into_datomic.__GT_datom = (function() {
var __GT_datom = null;
var __GT_datom__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.datom,cursor__24410__auto__);
});
var __GT_datom__2 = (function (cursor__24410__auto__,m42522){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.datom,cursor__24410__auto__,m42522);
});
__GT_datom = function(cursor__24410__auto__,m42522){
switch(arguments.length){
case 1:
return __GT_datom__1.call(this,cursor__24410__auto__);
case 2:
return __GT_datom__2.call(this,cursor__24410__auto__,m42522);
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
var top_nav__delegate = function (data__24441__auto__,owner42714,p__42716){var vec__42893 = p__42716;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42893,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema42898 = schema.core.Any;var input_schema42899 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map42894","map42894",-1913968115,null))], null);var input_checker42900 = schema.core.checker(input_schema42899);var output_checker42901 = schema.core.checker(output_schema42898);return schema.core.schematize_fn(((function (ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function fnk42897(G__42902){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___43069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42902], null);var temp__4126__auto___43070 = (function (){var G__42986 = args__838__auto___43069;return (input_checker42900.cljs$core$IFn$_invoke$arity$1 ? input_checker42900.cljs$core$IFn$_invoke$arity$1(G__42986) : input_checker42900.call(null,G__42986));
})();if(cljs.core.truth_(temp__4126__auto___43070))
{var error__839__auto___43071 = temp__4126__auto___43070;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42897","fnk42897",-1604668982,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___43071], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42899,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___43069,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___43071], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map42894 = G__42902;while(true){
if(cljs.core.map_QMARK_(map42894))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map42894], 0))));
}
var map42896 = plumbing.fnk.schema.safe_get(map42894,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map42896,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map42894,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map42895 = plumbing.fnk.schema.safe_get(map42894,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map42895,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.dive_into_datomic.t42987 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t42987 = (function (map42896,owner,input_schema42899,view,vec__42893,map42895,fnk42897,nav_items,map42894,p__42716,data__24441__auto__,input_checker42900,top_nav,G__42902,output_schema42898,opts__24442__auto__,validate__837__auto__,output_checker42901,ufv__,owner42714,meta42988){
this.map42896 = map42896;
this.owner = owner;
this.input_schema42899 = input_schema42899;
this.view = view;
this.vec__42893 = vec__42893;
this.map42895 = map42895;
this.fnk42897 = fnk42897;
this.nav_items = nav_items;
this.map42894 = map42894;
this.p__42716 = p__42716;
this.data__24441__auto__ = data__24441__auto__;
this.input_checker42900 = input_checker42900;
this.top_nav = top_nav;
this.G__42902 = G__42902;
this.output_schema42898 = output_schema42898;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker42901 = output_checker42901;
this.ufv__ = ufv__;
this.owner42714 = owner42714;
this.meta42988 = meta42988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t42987.cljs$lang$type = true;
stuttaford.dive_into_datomic.t42987.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t42987";
stuttaford.dive_into_datomic.t42987.cljs$lang$ctorPrWriter = ((function (nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.dive-into-datomic/t42987");
});})(nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42987.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t42987.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42987.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t42987.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21074__auto__ = ((function (c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function iter__42990(s__42991){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (){var s__42991__$1 = s__42991;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42991__$1);if(temp__4126__auto__)
{var s__42991__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42991__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__42991__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__42993 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__42992 = (0);while(true){
if((i__42992 < size__21073__auto__))
{var items = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__42992);cljs.core.chunk_append(b__42993,om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21074__auto__ = ((function (i__42992,items,c__21072__auto__,size__21073__auto__,b__42993,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function iter__43032(s__43033){return (new cljs.core.LazySeq(null,((function (i__42992,items,c__21072__auto__,size__21073__auto__,b__42993,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (){var s__43033__$1 = s__43033;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__43033__$1);if(temp__4126__auto____$1)
{var s__43033__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__43033__$2))
{var c__21072__auto____$1 = cljs.core.chunk_first(s__43033__$2);var size__21073__auto____$1 = cljs.core.count(c__21072__auto____$1);var b__43035 = cljs.core.chunk_buffer(size__21073__auto____$1);if((function (){var i__43034 = (0);while(true){
if((i__43034 < size__21073__auto____$1))
{var vec__43044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto____$1,i__43034);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43044,(0),null);var vec__43045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43044,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43045,(0),null);cljs.core.chunk_append(b__43035,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__43046 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43034,i__42992,vec__43044,id,vec__43045,label,c__21072__auto____$1,size__21073__auto____$1,b__43035,s__43033__$2,temp__4126__auto____$1,items,c__21072__auto__,size__21073__auto__,b__42993,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__43034,i__42992,vec__43044,id,vec__43045,label,c__21072__auto____$1,size__21073__auto____$1,b__43035,s__43033__$2,temp__4126__auto____$1,items,c__21072__auto__,size__21073__auto__,b__42993,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
], null);var G__43046__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43046,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__43046);return G__43046__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__43072 = (i__43034 + (1));
i__43034 = G__43072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43035),iter__43032(cljs.core.chunk_rest(s__43033__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43035),null);
}
} else
{var vec__43047 = cljs.core.first(s__43033__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43047,(0),null);var vec__43048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43047,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43048,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__43049 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42992,vec__43047,id,vec__43048,label,s__43033__$2,temp__4126__auto____$1,items,c__21072__auto__,size__21073__auto__,b__42993,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__42992,vec__43047,id,vec__43048,label,s__43033__$2,temp__4126__auto____$1,items,c__21072__auto__,size__21073__auto__,b__42993,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
], null);var G__43049__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43049,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__43049);return G__43049__$1;
})(),cljs.core.array_seq([label], 0)),iter__43032(cljs.core.rest(s__43033__$2)));
}
} else
{return null;
}
break;
}
});})(i__42992,items,c__21072__auto__,size__21073__auto__,b__42993,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
,null,null));
});})(i__42992,items,c__21072__auto__,size__21073__auto__,b__42993,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;return iter__21074__auto__(items);
})()], 0)));
{
var G__43073 = (i__42992 + (1));
i__42992 = G__43073;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42993),iter__42990(cljs.core.chunk_rest(s__42991__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42993),null);
}
} else
{var items = cljs.core.first(s__42991__$2);return cljs.core.cons(om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21074__auto__ = ((function (items,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function iter__43050(s__43051){return (new cljs.core.LazySeq(null,((function (items,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (){var s__43051__$1 = s__43051;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__43051__$1);if(temp__4126__auto____$1)
{var s__43051__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__43051__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__43051__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__43053 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__43052 = (0);while(true){
if((i__43052 < size__21073__auto__))
{var vec__43062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__43052);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(0),null);var vec__43063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43063,(0),null);cljs.core.chunk_append(b__43053,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__43064 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43052,vec__43062,id,vec__43063,label,c__21072__auto__,size__21073__auto__,b__43053,s__43051__$2,temp__4126__auto____$1,items,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__43052,vec__43062,id,vec__43063,label,c__21072__auto__,size__21073__auto__,b__43053,s__43051__$2,temp__4126__auto____$1,items,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
], null);var G__43064__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43064,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__43064);return G__43064__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__43074 = (i__43052 + (1));
i__43052 = G__43074;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43053),iter__43050(cljs.core.chunk_rest(s__43051__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43053),null);
}
} else
{var vec__43065 = cljs.core.first(s__43051__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43065,(0),null);var vec__43066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43065,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43066,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__43067 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__43065,id,vec__43066,label,s__43051__$2,temp__4126__auto____$1,items,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__43065,id,vec__43066,label,s__43051__$2,temp__4126__auto____$1,items,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
], null);var G__43067__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43067,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__43067);return G__43067__$1;
})(),cljs.core.array_seq([label], 0)),iter__43050(cljs.core.rest(s__43051__$2)));
}
} else
{return null;
}
break;
}
});})(items,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
,null,null));
});})(items,s__42991__$2,temp__4126__auto__,c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;return iter__21074__auto__(items);
})()], 0)),iter__42990(cljs.core.rest(s__42991__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
,null,null));
});})(c,___$1,nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;return iter__21074__auto__(self__.nav_items);
})()], 0));
});})(nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (_42989){var self__ = this;
var _42989__$1 = this;return self__.meta42988;
});})(nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t42987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function (_42989,meta42988__$1){var self__ = this;
var _42989__$1 = this;return (new stuttaford.dive_into_datomic.t42987(self__.map42896,self__.owner,self__.input_schema42899,self__.view,self__.vec__42893,self__.map42895,self__.fnk42897,self__.nav_items,self__.map42894,self__.p__42716,self__.data__24441__auto__,self__.input_checker42900,self__.top_nav,self__.G__42902,self__.output_schema42898,self__.opts__24442__auto__,self__.validate__837__auto__,self__.output_checker42901,self__.ufv__,self__.owner42714,meta42988__$1));
});})(nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;
stuttaford.dive_into_datomic.__GT_t42987 = ((function (nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__){
return (function __GT_t42987(map42896__$1,owner__$1,input_schema42899__$1,view__$1,vec__42893__$1,map42895__$1,fnk42897__$1,nav_items__$1,map42894__$1,p__42716__$1,data__24441__auto____$1,input_checker42900__$1,top_nav__$1,G__42902__$1,output_schema42898__$1,opts__24442__auto____$1,validate__837__auto____$1,output_checker42901__$1,ufv____$1,owner42714__$1,meta42988){return (new stuttaford.dive_into_datomic.t42987(map42896__$1,owner__$1,input_schema42899__$1,view__$1,vec__42893__$1,map42895__$1,fnk42897__$1,nav_items__$1,map42894__$1,p__42716__$1,data__24441__auto____$1,input_checker42900__$1,top_nav__$1,G__42902__$1,output_schema42898__$1,opts__24442__auto____$1,validate__837__auto____$1,output_checker42901__$1,ufv____$1,owner42714__$1,meta42988));
});})(nav_items,map42895,owner,view,map42896,validate__837__auto__,ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
;
}
return (new stuttaford.dive_into_datomic.t42987(map42896,owner,input_schema42899,view,vec__42893,map42895,fnk42897,nav_items,map42894,p__42716,data__24441__auto__,input_checker42900,top_nav,G__42902,output_schema42898,opts__24442__auto__,validate__837__auto__,output_checker42901,ufv__,owner42714,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___43075 = (function (){var G__43068 = o__840__auto__;return (output_checker42901.cljs$core$IFn$_invoke$arity$1 ? output_checker42901.cljs$core$IFn$_invoke$arity$1(G__43068) : output_checker42901.call(null,G__43068));
})();if(cljs.core.truth_(temp__4126__auto___43075))
{var error__839__auto___43076 = temp__4126__auto___43075;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42897","fnk42897",-1604668982,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___43076], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42898,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___43076], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema42898,input_schema42899,input_checker42900,output_checker42901,vec__42893,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema42898,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42899], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner42714,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var top_nav = function (data__24441__auto__,owner42714,var_args){
var p__42716 = null;if (arguments.length > 2) {
  p__42716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24441__auto__,owner42714,p__42716);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__43077){
var data__24441__auto__ = cljs.core.first(arglist__43077);
arglist__43077 = cljs.core.next(arglist__43077);
var owner42714 = cljs.core.first(arglist__43077);
var p__42716 = cljs.core.rest(arglist__43077);
return top_nav__delegate(data__24441__auto__,owner42714,p__42716);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.dive_into_datomic.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.top_nav,cursor__24410__auto__);
});
var __GT_top_nav__2 = (function (cursor__24410__auto__,m42715){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.top_nav,cursor__24410__auto__,m42715);
});
__GT_top_nav = function(cursor__24410__auto__,m42715){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24410__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24410__auto__,m42715);
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
var app_view__delegate = function (data__24441__auto__,owner43078,p__43080){var vec__43199 = p__43080;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43199,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema43202 = schema.core.Any;var input_schema43203 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map43200","map43200",-713726838,null))], null);var input_checker43204 = schema.core.checker(input_schema43203);var output_checker43205 = schema.core.checker(output_schema43202);return schema.core.schematize_fn(((function (ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function fnk43201(G__43206){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___43317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__43206], null);var temp__4126__auto___43318 = (function (){var G__43262 = args__838__auto___43317;return (input_checker43204.cljs$core$IFn$_invoke$arity$1 ? input_checker43204.cljs$core$IFn$_invoke$arity$1(G__43262) : input_checker43204.call(null,G__43262));
})();if(cljs.core.truth_(temp__4126__auto___43318))
{var error__839__auto___43319 = temp__4126__auto___43318;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk43201","fnk43201",-1458852631,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___43319], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema43203,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___43317,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___43319], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map43200 = G__43206;while(true){
if(cljs.core.map_QMARK_(map43200))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map43200], 0))));
}
var data = plumbing.fnk.schema.safe_get(map43200,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map43200,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.dive_into_datomic.t43263 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.t43263 = (function (vec__43199,app_view,output_checker43205,G__43206,owner,view,data,owner43078,p__43080,fnk43201,map43200,output_schema43202,data__24441__auto__,input_checker43204,input_schema43203,opts__24442__auto__,validate__837__auto__,ufv__,meta43264){
this.vec__43199 = vec__43199;
this.app_view = app_view;
this.output_checker43205 = output_checker43205;
this.G__43206 = G__43206;
this.owner = owner;
this.view = view;
this.data = data;
this.owner43078 = owner43078;
this.p__43080 = p__43080;
this.fnk43201 = fnk43201;
this.map43200 = map43200;
this.output_schema43202 = output_schema43202;
this.data__24441__auto__ = data__24441__auto__;
this.input_checker43204 = input_checker43204;
this.input_schema43203 = input_schema43203;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta43264 = meta43264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.t43263.cljs$lang$type = true;
stuttaford.dive_into_datomic.t43263.cljs$lang$ctorStr = "stuttaford.dive-into-datomic/t43263";
stuttaford.dive_into_datomic.t43263.cljs$lang$ctorPrWriter = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.dive-into-datomic/t43263");
});})(owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t43263.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.t43263.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t43263.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.t43263.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__43266 = (function (){var G__43267 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,stuttaford.dive_into_datomic.nav_items));return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__43267) : self__.view.call(null,G__43267));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43266,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43266,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),stuttaford.dive_into_datomic.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.dive_into_datomic.nav_items], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__43270 = null;return React.DOM.div(G__43270);
})())], null)], null);
})());
});})(owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t43263.prototype.om$core$IWillUnmount$ = true;
stuttaford.dive_into_datomic.t43263.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t43263.prototype.om$core$IWillMount$ = true;
stuttaford.dive_into_datomic.t43263.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (state_43291){var state_val_43292 = (state_43291[(1)]);if((state_val_43292 === (7)))
{var inst_43274 = (state_43291[(7)]);var inst_43274__$1 = (state_43291[(2)]);var state_43291__$1 = (function (){var statearr_43293 = state_43291;(statearr_43293[(7)] = inst_43274__$1);
return statearr_43293;
})();if(cljs.core.truth_(inst_43274__$1))
{var statearr_43294_43320 = state_43291__$1;(statearr_43294_43320[(1)] = (8));
} else
{var statearr_43295_43321 = state_43291__$1;(statearr_43295_43321[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43292 === (1)))
{var state_43291__$1 = state_43291;var statearr_43296_43322 = state_43291__$1;(statearr_43296_43322[(2)] = null);
(statearr_43296_43322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43292 === (4)))
{var state_43291__$1 = state_43291;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43291__$1,(7),c);
} else
{if((state_val_43292 === (6)))
{var inst_43287 = (state_43291[(2)]);var state_43291__$1 = state_43291;var statearr_43297_43323 = state_43291__$1;(statearr_43297_43323[(2)] = inst_43287);
(statearr_43297_43323[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43292 === (3)))
{var inst_43289 = (state_43291[(2)]);var state_43291__$1 = state_43291;return cljs.core.async.impl.ioc_helpers.return_chan(state_43291__$1,inst_43289);
} else
{if((state_val_43292 === (2)))
{var state_43291__$1 = state_43291;var statearr_43298_43324 = state_43291__$1;(statearr_43298_43324[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43292 === (9)))
{var state_43291__$1 = state_43291;var statearr_43300_43325 = state_43291__$1;(statearr_43300_43325[(2)] = null);
(statearr_43300_43325[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43292 === (5)))
{var state_43291__$1 = state_43291;var statearr_43301_43326 = state_43291__$1;(statearr_43301_43326[(2)] = null);
(statearr_43301_43326[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43292 === (10)))
{var inst_43283 = (state_43291[(2)]);var state_43291__$1 = (function (){var statearr_43302 = state_43291;(statearr_43302[(8)] = inst_43283);
return statearr_43302;
})();var statearr_43303_43327 = state_43291__$1;(statearr_43303_43327[(2)] = null);
(statearr_43303_43327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43292 === (8)))
{var inst_43274 = (state_43291[(7)]);var inst_43277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43274,(0),null);var inst_43278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43274,(1),null);var inst_43279 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_43280 = (function (){var G__43304 = self__.data;var G__43305 = inst_43277;var G__43306 = inst_43278;var G__43307 = inst_43279;return (stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.dive_into_datomic.perform_action.cljs$core$IFn$_invoke$arity$4(G__43304,G__43305,G__43306,G__43307) : stuttaford.dive_into_datomic.perform_action.call(null,G__43304,G__43305,G__43306,G__43307));
})();var state_43291__$1 = state_43291;var statearr_43308_43328 = state_43291__$1;(statearr_43308_43328[(2)] = inst_43280);
(statearr_43308_43328[(1)] = (10));
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
});})(c__22986__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;return ((function (switch__22971__auto__,c__22986__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_43312 = [null,null,null,null,null,null,null,null,null];(statearr_43312[(0)] = state_machine__22972__auto__);
(statearr_43312[(1)] = (1));
return statearr_43312;
});
var state_machine__22972__auto____1 = (function (state_43291){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_43291);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e43313){if((e43313 instanceof Object))
{var ex__22975__auto__ = e43313;var statearr_43314_43329 = state_43291;(statearr_43314_43329[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e43313;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__43330 = state_43291;
state_43291 = G__43330;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_43291){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_43291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
})();var state__22988__auto__ = (function (){var statearr_43315 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_43315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto__);
return statearr_43315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto__,c,___$1,owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
);
return c__22986__auto__;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t43263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (_43265){var self__ = this;
var _43265__$1 = this;return self__.meta43264;
});})(owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;
stuttaford.dive_into_datomic.t43263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function (_43265,meta43264__$1){var self__ = this;
var _43265__$1 = this;return (new stuttaford.dive_into_datomic.t43263(self__.vec__43199,self__.app_view,self__.output_checker43205,self__.G__43206,self__.owner,self__.view,self__.data,self__.owner43078,self__.p__43080,self__.fnk43201,self__.map43200,self__.output_schema43202,self__.data__24441__auto__,self__.input_checker43204,self__.input_schema43203,self__.opts__24442__auto__,self__.validate__837__auto__,self__.ufv__,meta43264__$1));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;
stuttaford.dive_into_datomic.__GT_t43263 = ((function (owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__){
return (function __GT_t43263(vec__43199__$1,app_view__$1,output_checker43205__$1,G__43206__$1,owner__$1,view__$1,data__$1,owner43078__$1,p__43080__$1,fnk43201__$1,map43200__$1,output_schema43202__$1,data__24441__auto____$1,input_checker43204__$1,input_schema43203__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,meta43264){return (new stuttaford.dive_into_datomic.t43263(vec__43199__$1,app_view__$1,output_checker43205__$1,G__43206__$1,owner__$1,view__$1,data__$1,owner43078__$1,p__43080__$1,fnk43201__$1,map43200__$1,output_schema43202__$1,data__24441__auto____$1,input_checker43204__$1,input_schema43203__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,meta43264));
});})(owner,view,data,validate__837__auto__,ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
;
}
return (new stuttaford.dive_into_datomic.t43263(vec__43199,app_view,output_checker43205,G__43206,owner,view,data,owner43078,p__43080,fnk43201,map43200,output_schema43202,data__24441__auto__,input_checker43204,input_schema43203,opts__24442__auto__,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___43331 = (function (){var G__43316 = o__840__auto__;return (output_checker43205.cljs$core$IFn$_invoke$arity$1 ? output_checker43205.cljs$core$IFn$_invoke$arity$1(G__43316) : output_checker43205.call(null,G__43316));
})();if(cljs.core.truth_(temp__4126__auto___43331))
{var error__839__auto___43332 = temp__4126__auto___43331;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk43201","fnk43201",-1458852631,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___43332], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema43202,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___43332], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema43202,input_schema43203,input_checker43204,output_checker43205,vec__43199,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema43202,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema43203], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner43078,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var app_view = function (data__24441__auto__,owner43078,var_args){
var p__43080 = null;if (arguments.length > 2) {
  p__43080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24441__auto__,owner43078,p__43080);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__43333){
var data__24441__auto__ = cljs.core.first(arglist__43333);
arglist__43333 = cljs.core.next(arglist__43333);
var owner43078 = cljs.core.first(arglist__43333);
var p__43080 = cljs.core.rest(arglist__43333);
return app_view__delegate(data__24441__auto__,owner43078,p__43080);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.dive_into_datomic.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.app_view,cursor__24410__auto__);
});
var __GT_app_view__2 = (function (cursor__24410__auto__,m43079){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.app_view,cursor__24410__auto__,m43079);
});
__GT_app_view = function(cursor__24410__auto__,m43079){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24410__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24410__auto__,m43079);
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